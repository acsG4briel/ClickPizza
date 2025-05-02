using api.DTOs;
using api.Entidades;
using api.Repositorios.Interfaces;
using api.Servicos.Interfaces;
using Stripe;

namespace api.Servicos
{
    public class PagamentoServico(IConfiguration configuration) : IPagamentoServico
    {
        private readonly string _stripeApiKey = configuration["Stripe:ApiKey"];

        public string GerarIntencaoDePagamento(decimal valor)
        {
            var client = new Stripe.StripeClient(_stripeApiKey);
            var options = new PaymentIntentCreateOptions
            {
                Amount = (long)(valor * 100),
                Currency = "brl",
                PaymentMethodTypes = new List<string> { "card" },
            };
            var service = new PaymentIntentService(client);
            var paymentIntent = service.Create(options);

            return paymentIntent.ClientSecret;
        }
    }
}
