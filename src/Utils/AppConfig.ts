class AppConfig {
	public readonly productsUrl = "http://localhost:3030/api/products/"
	public readonly employeessUrl = "http://localhost:3030/api/employees/"
	public readonly registerUrl = "http://localhost:3030/api/register/"
	public readonly loginUrl = "http://localhost:3030/api/login/"
}

export const appConfig = new AppConfig();
