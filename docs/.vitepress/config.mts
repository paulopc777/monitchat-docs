import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Monitchat DOCS",
  description: "Docs do monitchat ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },

    ],

    sidebar: [
      {
        text: 'Autenticação',
        link: '/autenticacao',
      },
      {
        text: 'Mensagens',
        items: [
          { text: 'Envio de mensagens', link: '/envioMensagens' },
          { text: 'Mensagens com Media', link: '/envioMedia' },
          { text: 'Listagem de mensagens', link: '/listagemMessages' }
        ]
      },
      {
        text: "WhatsApp",
        items: [
          {
            text: "Listar Templates",
            link: "/templates/listTemplates"
          },
          {
            text: "WhatsApp Status",
            link: "/whatsapp/whatsappStatus"
          }
        ]
      },
      {
        text: "Monitchat",
        items: [
          {
            text: "Contatos",
            items: [
              {
                text: "Listar contatos",
                link: "/contatos/listarContatos"
              },
              {
                text: "Criar contato",
                link: "/contatos/createContato"
              }
            ]
          },
          {
            text: "Clientes",
            items: [
              {
                text: "Listar clientes",
                link: "/cliente/listarClientes"
              },
              {
                text: "Criar cliente",
                link: "/cliente/createCliente"
              }
            ]
          },
        ]
      },
      {
        text: 'WebSockets',
        items: [
          {
            text: "Eventos",
            items: [
              {
                text: "Mensagens",
                items: [
                  {
                    text: "Mensagem recebida",
                    link: "/websockets/MessageRecebida"
                  },
                  {
                    text: "Mensagem atualizada",
                    link:"/websockets/MessageUpdate"
                  }
                ]
              },
              {
                text: "Ticket",
                items: [
                  {
                    text: "Ticket Criado"
                  },
                  {
                    text: "Mudança de Status",
                  },
                  {
                    text: "Mudança de Usuário",
                  }
                ]
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
