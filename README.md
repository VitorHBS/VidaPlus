VidaPlus – API Hospitalar          /          Autor: Vitor Hugo Soares Barbosa – RU 4592480

Projeto desenvolvido para o curso de ADS (UNINTER), disciplina Desenvolvimento Back-End.

Tecnologias:

Node.js
TypeScript
Express
Prisma
Zod
MySQL

Como rodar:
npm install
npx prisma migrate dev
npm run dev


Configuração do .env
DATABASE_URL="mysql://usuario:senha@localhost:3306/vidaplus"

Endpoints principais:
POST /user
POST /unit
POST /doctor
POST /consultation
POST /medicalRecord
GET /users
DELETE /consultations/:id
