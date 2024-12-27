import { AppClientConfig, MarketingConfig } from "types"

export const appClientConfig: AppClientConfig = {
  clients: [
    {
      username: "prof-paulo-carollo",
      url_api:
        process.env.NODE_ENV === "production"
          ? "https://ativacao.com.br/api/users"
          : "http://localhost:3000/api/users",
    },
    {
      username: "dev-ninja-diego-porfirio",
      url_api: "http://localhost:3000/api/users",
    },
  ],
}
