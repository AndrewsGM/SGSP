# 🚀 SGSP — Sistema de Gestão de Serviços Profissionais

SGSP é uma plataforma moderna de gestão de serviços profissionais, combinando conceitos de **ERP + CRM**, projetada para ser **escalável, modular e pronta para produção**.

Este projeto foi construído com **mentalidade sênior**, aplicando boas práticas de **arquitetura de software**, **engenharia de produto**, **DevOps** e **governança técnica**.

---

## 🧠 Visão de Produto (Product Owner Mindset)

O SGSP foi idealizado para atender profissionais e empresas que prestam serviços, como:

- Consultorias  
- Agências digitais  
- Freelancers  
- Empresas de serviços recorrentes  

### 🎯 Objetivos do sistema

- Centralizar clientes e contratos  
- Padronizar processos  
- Facilitar a escalabilidade do negócio  
- Preparar o terreno para cobranças, métricas e automações  

---

## 🧱 Arquitetura Geral (Visão de Arquiteto)

O projeto adota uma abordagem **moderna e sustentável**, preparada para crescimento e trabalho em equipe:

- Microsserviços  
- Arquitetura Hexagonal  
- REST APIs  
- Separação clara de responsabilidades  
- Preparado para CI/CD e observabilidade  

### 📐 Visão macro do projeto

```text
sgsp-platform/
├── backend/        # Microsserviços (Node.js / NestJS / PHP)
├── frontend/       # Aplicações React (futuro: micro frontends)
├── infra/          # Infraestrutura, Docker, CI/CD
└── docs/           # Documentação e diagramas

⚙️ Stack Tecnológica
🔧 Backend

Node.js

NestJS

TypeScript

REST API

Arquitetura Hexagonal

SOLID

🎨 Frontend (em evolução)

React

TypeScript

CSS modular

🗄️ Dados & Infra

PostgreSQL / MySQL (roadmap)

Redis (cache e filas)

Docker (planejado)

CI/CD (planejado)

🧩 Microsserviço Atual
📦 customer-service

Responsável pela gestão de clientes.

Principais conceitos aplicados:

Controllers (Interfaces)

Use Cases (Application)

Entidades de Domínio

Injeção de Dependência

DTOs tipados

ESLint + Prettier

🛠️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

Node.js (versão LTS recomendada)

npm

Git

VS Code (ou editor de sua preferência)

📥 Como clonar o repositório
git clone https://github.com/AndrewsGM/SGSP.git

Acesse:
cd SGSP

▶️ Como executar o projeto (passo a passo)
1️⃣ Acesse o microsserviço backend

Acesse:
cd backend/customer-service


⚠️ Importante
Os comandos abaixo devem ser executados exatamente nessa pasta, pois é onde está o package.json.

2️⃣ Instale as dependências
npm install


Esse comando:

Lê o package.json

Baixa todas as dependências

Prepara o ambiente local

3️⃣ Execute o servidor em modo desenvolvimento
npm run start:dev


✅ O NestJS inicia em modo watch
✅ Recompila automaticamente a cada alteração
✅ Ideal para desenvolvimento local

Se tudo estiver correto, você verá:

Nest application successfully started

🔍 Qualidade de Código (Mentalidade Tech Lead)

Este projeto utiliza:

TypeScript em modo estrito

ESLint para governança de código

Prettier para padronização visual

✨ Formatar o código manualmente (opcional)
npx prettier --write src

🧪 Testes (Roadmap)

Testes unitários

Testes de integração

Testes automatizados em CI/CD

🔐 Segurança & Escalabilidade (Roadmap)

Autenticação e autorização

Integração com pagamentos

Observabilidade (logs, métricas, tracing)

Filas e processamento assíncrono

🧭 Metodologia & Processo

Evolução incremental

Código revisável

Base limpa antes de escalar

Decisões técnicas documentadas

Preparado para trabalho em equipe

🤝 Contribuição

Este projeto segue boas práticas e está preparado para:

Gitflow

Pull Requests

Code Review

Escala de time
