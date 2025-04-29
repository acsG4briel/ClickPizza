# Etapa de build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

# Copia apenas o csproj e faz restore dos pacotes (cache otimizado)
COPY api/*.csproj ./api/
WORKDIR /src/api
RUN dotnet restore

# Copia todo o restante do código
WORKDIR /src
COPY . .

WORKDIR /src/api
RUN dotnet publish -c Release -o /app/publish

# Imagem final para produção
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "api.dll"]