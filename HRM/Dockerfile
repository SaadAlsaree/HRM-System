# Use the official Microsoft .NET 8 SDK image as the base image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
EXPOSE 5000
ENV ASPNETCORE_URLS=http://+:5000
# Set the working directory inside the container
WORKDIR /app

# Copy the .csproj file and restore any dependencies (via NuGet)
COPY . ./

RUN dotnet restore

# Copy the project files and build our release
COPY . ./
RUN dotnet publish -c Release -o out

# Generate runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "HRM.Hub.Controllers.dll"]