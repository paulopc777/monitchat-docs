# Webhooks no Monitchat

Voce pode casdastrar webhooks no monitchat acessando [Webhooks](https://new.monitchat.com/webhook)

# Cadastrando Webhook

Para criar um novo webhook basta clicar no botão **Novo** la voce deve preencher os seguintes parametros.

1. Url a ser requisitada
2. Quanto e evento deve ocorrer
   - [Mensagem Recebida](MensagemRecebidoPayload.md) (Sempre que uma mensagem for recebida)
   - Mensagem Enviada (Sempre que uma mensagem for enviada)
   - Mensagem Respondida (Sempre que uma mensagem for respondida)
   - Mensagem Atualizada (Sempre que o status da mensagem for atualizado)
   - Qr Code Gerado (Sempre que um qr code for gerado)
   - Novo Ticket Criado (Sempre que um novo ticket for criado)
   - Mundança de Status do Ticket (Sempre que o status do ticket for atualizado)
   -
3. Cabeçalhos Personalizados (Opcional)
   - Você pode adicionar cabeçalhos personalizados para serem enviados junto com a requisição do webhook. Isso pode ser útil para autenticação ou para fornecer informações adicionais ao endpoint que receberá o webhook.
   - Importante resultar casso esteja utilizando o webhook para integração com formato **JSON**, nesse caso é necessário adicionar o cabeçalho `Content-Type` com o valor `application/json` para garantir que os dados sejam enviados no formato correto.

4. Numero do telefone (Opcional)
   - Você pode escolher um número de telefone específico para o qual o webhook será acionado. Se nenhum número for selecionado, o webhook será acionado para todos os números associados à sua conta.

5. Outras origem
   - Você pode escolher se deseja que o webhook seja acionado pelo Facebook, Instagram ou outras plataformas.

6. Ativo
   - Você pode ativar ou desativar o webhook conforme necessário. Se um webhook estiver desativado, ele não será acionado mesmo que os eventos correspondentes ocorram.

Todos os campos são obrigatórios, exceto os cabeçalhos personalizados e o numero do telefone. Depois de preencher os campos necessários, basta clicar no botão **Salvar** para criar o webhook.
