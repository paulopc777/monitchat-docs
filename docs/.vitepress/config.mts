import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  description: "Documentação do Monitchat",

  themeConfig: {
    logo: {
      dark: '/public/LogoMonitchat.png',
      light: 'public/LogoMonitchatLigth.png'
    },

    nav: [
      { text: 'Inicial', link: '/' },
      { text: 'Exemplos', link: '/auth/autenticacao' },

    ],

    sidebar: [
      {
        text: 'Início',
        link: '/home/home',
      },
      {
        text: 'Mensagens',
        items: [
          { text: 'Envio de mensagens', link: '/envioMensagens' },
          { text: 'Mensagens com Media', link: '/envioMedia' },
          { text: 'Listagem de mensagens', link: '/listagemMessages' },
          { text: 'Buscar mensagens por data', link: '/mensagensPorData' }
        ]
      },
      {
        text: "Webhooks",
        items: [
          {
            text: "Criando Webhooks",
            link: "/webhooks/webhooks"
          },
          {
            text: "Exemplo de Webhooks",
            items: [
              {
                text: "Mensagem Recebida",
                link: "/webhooks/webhookMessageRecebida"
              }
            ]
          },
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
          },
          {
            text: "Criar QR Code",
            link: "/whatsapp/criarQrCode"
          }
        ]
      },
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
          },
          {
            text: "Atualizar contato",
            link: "/contatos/updateContato"
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
      {
        text: "Tickets",
        items: [
          {
            text: "Listar tickets",
            link: "/ticket/listarTickets"
          },
          {
            text: "Criar ticket",
            link: "/ticket/criarTicket"
          }
        ]
      },
      {
        text: "Usuários",
        items: [
          {
            text: "Listar usuários",
            link: "/user/listarUsuarios"
          },
          {
            text: "Criar usuário",
            link: "/user/criarUsuario"
          }
        ]
      },
      {
        text: "Estatísticas",
        items: [
          {
            text: "Pesquisa de Satisfação (NPS)",
            link: "/estatisticas/nps"
          }
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
                    link: "/websockets/MessageUpdate"
                  }
                ]
              },
              {
                text: "Ticket",
                items: [
                  {
                    text: "Ticket Criado",
                    link: "/websockets/TicketCriado"
                  },
                  {
                    text: "Mudança de Status",
                    link: "/websockets/StatusChange"
                  },
                  {
                    text: "Mudança de Usuário",
                    link: "/websockets/TicketChangeOwnner"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      {
        icon: "home",
        link: 'https://new.monitchat.com/static/media/logogreen.17388e1a.png'
      }
    ]
  }
})
