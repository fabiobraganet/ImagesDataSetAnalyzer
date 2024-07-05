# Configuração do dnsmasq para Desenvolvimento Local

Este guia descreve como configurar o `dnsmasq` em um ambiente de desenvolvimento Ubuntu para resolver automaticamente todos os subdomínios de `produto.dev` para `127.0.0.1`. Isso é útil para simular ambientes de subdomínios dinâmicos localmente.

## Pré-requisitos

- Ubuntu 18.04 ou superior
- Acesso ao terminal com privilégios de superusuário

## Passo 1: Instalação do dnsmasq

Abra o terminal e execute o seguinte comando para instalar o `dnsmasq`:

```bash
sudo apt-get update
sudo apt-get install dnsmasq
```

## Passo 2: Configuração do dnsmasq

1. **Editar o Arquivo de Configuração**

   Edite o arquivo de configuração do `dnsmasq` usando um editor de texto de sua escolha (como `nano` ou `vim`):

   ```bash
   sudo nano /etc/dnsmasq.conf
   ```

2. **Adicionar Configuração de Resolução de Domínio**

   Adicione a seguinte linha ao arquivo para configurar todos os subdomínios de `produto.dev` para resolver para `127.0.0.1`:

   ```
   address=/.produto.dev/127.0.0.1
   ```

   Salve e feche o arquivo.

## Passo 3: Reiniciar o dnsmasq

Reinicie o serviço `dnsmasq` para aplicar as alterações:

```bash
sudo systemctl restart dnsmasq
```

## Passo 4: Teste a Configuração

Use `dig` ou `nslookup` para testar a resolução do DNS:

```bash
dig teste.produto.dev
```

Ou

```bash
nslookup teste.produto.dev
```

Você deve ver `127.0.0.1` como o endereço IP para `teste.produto.dev`.

## Passo 5: Configuração do Sistema para Usar dnsmasq

Certifique-se de que seu sistema esteja usando o `dnsmasq` como seu servidor DNS modificando o arquivo `/etc/resolv.conf`:

```bash
echo "nameserver 127.0.0.1" | sudo tee /etc/resolv.conf
```

## Passo 6: Limpeza do Cache DNS

Se necessário, limpe o cache DNS do sistema para garantir que as novas configurações sejam utilizadas:

```bash
sudo systemd-resolve --flush-caches
```

## Conclusão

Após seguir estes passos, seu ambiente de desenvolvimento estará configurado para resolver qualquer subdomínio de `produto.dev` para `127.0.0.1`, facilitando o teste e o desenvolvimento de aplicações que dependem de múltiplos subdomínios.
