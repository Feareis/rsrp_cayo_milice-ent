
# [RSRP] Site - ENT Milice

<p align=center>
  <br>
  <span>This project is a <strong>modern web interface</strong> that centralizes and displays <strong>data from several databases</strong>, via Supabase.</span>
  <span>Ideal for aggregating scattered information and making it readable from a single access point.</span>
  <br>
  <br>
  <img src="/ent-milice.png"/>
  <br>
</p>

## Tech Stack

| Tech | Description |
|------|-------------|
| [React](https://reactjs.org/) | Interface construction |
| [Vite](https://vitejs.dev/) | Fast, fluid build |
| [TypeScript](https://www.typescriptlang.org/) | Security and clarity in the code |
| [TailwindCSS](https://tailwindcss.com/) | Fast, responsive design |
| [Supabase](https://supabase.com/) | Database management and authentication |

## 🧠 How it works

- **Connection to multiple Supabase databases** (each with its own URL/API Key).
- **Data retrieval** via synchronized queries.
- **Merge data** into a standard format.
- **Clear, centralized display** in a modern React interface.
- **Sending alerts** (errors, missing data, etc.) via Slack.

### 📊 Example

```txt
[Base A] -->\
             \
[Base B] --->  => [Fusion] => [UI]
             /
[Base C] -->/
```

## 📦 Installation

### Clone project
```bash
git clone https://github.com/Feareis/rsrp_cayo_milice-ent.git
cd rsrp_cayo_milice-ent
```

### Installing dependencies
```bash
npm install
```

### Launch the project
```bash
npm run dev
```

## 🛠️ Configuration

### Supabase Bases
```bash
VITE_SUPABASE_URL_1=https://xxx.supabase.co
VITE_SUPABASE_KEY_1=xxx

VITE_SUPABASE_URL_2=https://yyy.supabase.co
VITE_SUPABASE_KEY_2=yyy
```

### Connection variables
```bash
VITE_LOGIN=test
VITE_PASS=test
```

## 📁 Project structure

```bash
├── src/
│   ├── assets/          # Média, img
│   ├── components/      # UI components
│   ├── context/         # Supabase connections
│   └── pages/           # Main pages
├── public/              # Static files (e.g. main.ico)
├── .env                 # Environment variables
└── vite.config.ts
```
