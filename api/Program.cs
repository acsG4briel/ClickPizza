using api.Repositorios;
using api.Repositorios.Interfaces;
using api.Servicos;
using api.Servicos.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ContextoBanco>(options =>
  options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

//DESCOMENTAR PARA RODAR LOCALMENTE
//var stripeSettings = builder.Configuration.GetSection("Stripe");
//Stripe.StripeConfiguration.ApiKey = stripeSettings["SecretKey"];

Stripe.StripeConfiguration.ApiKey = builder.Configuration["Stripe:ApiKey"];

//INJE��ES DE DEPENDENCIAS - SERVICOS
builder.Services.AddScoped<IItemServico, ItemServico>();
builder.Services.AddScoped<IPagamentoServico, PagamentoServico>();
builder.Services.AddScoped<IPedidoServico, PedidoServico>();
builder.Services.AddScoped<IEntregaServico, EntregaServico>();
builder.Services.AddScoped<IUsuarioServico, UsuarioServico>();
builder.Services.AddHttpClient<IEnderecoServico, EnderecoServico>();

//INJE��ES DE DEPENDENCIAS - REPOSITORIOS
builder.Services.AddScoped<IItemRepositorio, ItemRepositorio>();
builder.Services.AddScoped<IPedidoRepositorio, PedidoRepositorio>();
builder.Services.AddScoped<IItemPedidoRepositorio, ItemPedidoRepositorio>();
builder.Services.AddScoped<IPagamentoRepositorio, PagamentoRepositorio>();
builder.Services.AddScoped<IEntregaRepositorio, EntregaRepositorio>();
builder.Services.AddScoped<IEnderecoRepositorio, EnderecoRepositorio>();
builder.Services.AddScoped<IUsuarioRepositorio, UsuarioRepositorio>();
builder.Services.AddScoped<ILoginRepositorio, LoginRepositorio>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000", "https://chic-selkie-9e5e40.netlify.app") // endere�o do seu front-end
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
//var port = Environment.GetEnvironmentVariable("PORT") ?? "5000";
//app.Urls.Add($"http://*:{port}");

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
