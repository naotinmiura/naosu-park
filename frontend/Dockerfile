FROM node:18-alpine

WORKDIR /app

# 必要なパッケージをインストール
RUN apk add --no-cache git

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# ポートを公開
EXPOSE 19006

# デフォルトコマンド
CMD ["npx", "expo", "start", "--web", "--port", "19006"] 