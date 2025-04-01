const { 
default: makeWASocket,
MessageType, 
Presence,
MessageOptions, 
downloadContentFromMessage,
fetchLatestBaileysVersion,
Mimetype,
useMultiFileAuthState,
DisconnectReason,
Browsers,
delay
} = require("@whiskeysockets/baileys")

//======================= MÓDULOS ===================//
const fs = require("fs")
const P = require("pino") 
const fetch = require("node-fetch")
const chalk = require("chalk")
const inquirer = require("inquirer")
const path = require("path");
const { exec } = require("child_process");
const { color } = require("./database/lib/cores")
const { banner, getBuffer, getExtension, getRandom } = require("./database/lib/funções")
const speed = require("performance-now")
const yts = require("yt-search")
const _ = require("lodash")
//================== CONST DO BOT =================//




//=================== CONSTS JSON =================//




const girastamp = speed()
const latensi = speed() - girastamp
async function atk() {

//============== INÍCIO DA CONEXÃO ================//
const { state, saveCreds } = await useMultiFileAuthState("./database/qr-code")
console.log(banner.string)
const conn = makeWASocket({
 logger: P({ level: "silent" }),
 mobile: false,
 browser: ["chrome (linux)"],
 auth: state
})

//============= NOVA CONEXÃO SEM QR-CODE ==========//
if (conn.user == null) {
let resposta = await inquirer.prompt([{ type: "input", name: "numero", message: "Digite seu número: \nEx: 558586294618\n-->" }])

let codigo = await conn.requestPairingCode(resposta.numero)
console.log(`Seu código de conexão é: ${chalk.bold(codigo)}`)
}

// Chat update
// Ouvir quando as credenciais auth é atualizada
conn.ev.on("creds.update", saveCreds)
conn.ev.on("messages.upsert", async ({ messages }) => {
try {
const info = messages[0]
if (!info.message) return 
await conn.readMessages([info.key.id])
if (info.key && info.key.remoteJid == "status@broadcast") return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]

const content = JSON.stringify(info.message)
const from = info.key.remoteJid

//===================== BODY ========================//
const body = (type === "conversation") ?
info.message.conversation : (type == "imageMessage") ?
info.message.imageMessage.caption : (type == "videoMessage") ?
info.message.videoMessage.caption : (type == "extendedTextMessage") ?
info.message.extendedTextMessage.text : ""
//==================== QUOTED ======================//
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}
//==================== CONST DE GRUPO ===============//
const args = body.trim().split(/ +/).splice(1)
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const isGroup = from.endsWith("@g.us")
const tescuk = ["0@s.whatsapp.net"]
const sender = isGroup ? info.key.participant : from
const testat = bidy =  body.toLowerCase() //converte uma string para letras minúsculas
const pushname = info.pushName ? info.pushName : ""
const groupMetadata = isGroup ? await conn.groupMetadata(from) : ""
const groupName = isGroup  ? groupMetadata.subject : ""
const groupDesc = isGroup ? groupMetadata.desc : ""
const groupMembers = isGroup ? groupMetadata.participants : ""
const groupAdmins = isGroup ? _.map(_.filter(groupMembers, "admin"), "id")  : ""
const q = args.join(" ")

//============== CONSTS DONO E ADM ================//
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const numeroBot = conn.user.id.split(":")[0] + "@s.whatsapp.net"
const isBot = info.key.fromMe
const isOwner = sender.includes(numeroBot);
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isGroupAdmins = groupAdmins.includes(sender) || false 

//============== Configurações & Informações ===========//
const isCmd = body.startsWith(".")
const comando = isCmd ? body.slice(1).split(/ +/).shift().toLowerCase() : null 
bidy =  body.toLowerCase()
const configurações = {
  prefixo: `.`,
  nomeBot: "ꪶ₂₀ͣ₂ⷮ₂ⷦꫂ", // Nome do bot
  nomeDono: "Ƚ❍ꝚÐ ｆȺ𝕭ɨ❍", // Seu nome
  numeroBot: "+55 27 99289-3543" // Seu número
  }
prefixo = configurações.prefixo
nomeBot = configurações.nomeBot
nomeDono = configurações.nomeDono
numeroDono = configurações.numeroBot
global.configurações = configurações //  >|<

//==================== CONST DO BOT ================//
const enviar = (texto) => {
conn.sendMessage(from, { text: texto }, {quoted: info}) };
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
//============== VCARD DO BOT ====================//
const vcard = "BEGIN:VCARD\n"
+ "VERSION:3.0\n" 
+ "FN:LORD FABIO\n" // Nome completo
+ "ORG:FAMILIA ATK;\n" // A organização do contato
+ "TEL;type=CELL;type=VOICE;waid=552792893543;+55 27 99289-3543\n" // WhatsApp ID + Número de telefone
+ "END:VCARD" // Fim do ctt

//=================== SELO ======================//
const selo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.trim('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}}

//=================== MSG DO BOT =================// 
 resposta = {
espere:`*[ ⏰ ] Um minuto amigo(@) Estou processador seu pedido.*`,

erro: `*[ ❌ ] Ocorreu um erro inesperado ao executar o comando*`,

adm: `*[ 👻 ] Comando apenas para ADM*`, 

admim: `*[ 🫵🏻 ] Você não e um ADM desse grupo*`,

botadm: `*[ 🐋 ] O Bot não e um ADM desse grupo Sorry*`,

login:` *[ ⚠️ ] Você não efetuou seu registro, digite ${prefixo}login para ser registrar*`,

grupo:` *[ 🌈 ] Desculpe esse comando e exclusivo pra Grupo*`,

semnull:`*[ ☔ ] Digite ${prefixo + comando} 0 para Ativar ou  ${prefixo + comando} 1 para Desativar.*`,

ativo:`* [ ✅ ] Ativo com sucesso!*`,

desativo:`* [ 🛑 ] Desativado com sucesso!*`,

jaatv:` *[ 🫏 ] Já está Ativo Burro!*`,

jadstv: `*[ 😪 ] Já está Desativado!*`,

dono:` *「🏂 」 Comando exclusivo do meu dono...*`,

toy: `*「👨🏻‍💻 」Pesquisando 「 👨🏻‍💻 」*`,

gpa: `*「🔓」O grupo foi aberto com sucesso.「🔓」*`,

gpf: `*「🔒」O grupo foi fechado com sucesso. 「🔒」*`,

sucesso: `*❪.🚀᪽̩¡❫ SUCESSO ❪.🚀᪽̩¡❫*`,
}

//==================================================//

    const moment = require("moment-timezone")
const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss")
const data = moment.tz("America/Sao_Paulo").format("DD/MM/YY")
function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}
//====================== BOTÕES ====================//
const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = { text: text1, footer: desc1, buttons: but, headerType: 1 }
conn.sendMessage(id, buttonMessage, {quoted: vr}) }
//botão com imagem 
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = { image: {url: img1}, caption: text1, footerText: desc1, buttons: but, headerType: 4 }
conn.sendMessage(id, buttonMessage, {quoted: vr}) }
//botão de template 
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => { templateMessage = { image: {url: img1}, caption: text1, footer: desc1, templateButtons: but, }
conn.sendMessage(id, templateMessage, {quoted: vr}) }
//menu com gif
const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => { buttonMessage = { video: {url: gif1}, caption: text1, gifPlayback: true, footerText: desc1, buttons: but, headerType: 4 }
conn.sendMessage(id, buttonMessage, {quoted: vr}) }

//=================== API =======================//
conn.APIs = { 
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz'
},
  
conn.APIKeys = { 
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}
//=========𝗠𝗘𝗡𝗦𝗔𝗚𝗘𝗠 𝗤𝗨𝗘 𝗔𝗣𝗔𝗥𝗘𝗖𝗘 𝗡𝗢 𝗧𝗘𝗥𝗠𝗨𝗫======//
if(!isGroup && isCmd) {console.log(chalk.hex("#1cfcff").bold("[ COMANDO ]", chalk.hex("#ff1c5a").bold(`${comando}`), chalk.hex("#1cfcff").bold(" DE "), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`)))}
  if(!isGroup && !isCmd && !info.key.fromMe){
    if (info.message.conversation.length <= 10) {
    console.log(chalk.hex("#1cfcff").bold("[ MENSAGEM ]", chalk.hex("#ff1c5a").bold(`${info.message.conversation}`), chalk.hex("#1cfcff").bold(" DE "), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`)))}
    else {console.log(chalk.hex("#1cfcff").bold("[ MENSAGEM ]", chalk.hex("#1cfcff").bold(` DE `), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`)))}}
if(isGroup && !isCmd && !info.key.fromMe){
    if (info.message.conversation.length <= 10) {console.log(chalk.hex("#1cfcff").bold("[ MENSAGEM ]", chalk.hex("#ff1c5a").bold(`${info.message.conversation}`), chalk.hex("#1cfcff").bold(" DE "), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`, chalk.hex("#1cfcff").bold("NO GRUPO"), chalk.hex("#ff1c5a").bold(`${groupName}`))))}
    else {console.log(chalk.hex("#1cfcff").bold("[ MENSAGEM ]", chalk.hex("#1cfcff").bold(` DE `), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`), chalk.hex("#1cfcff").bold("NO GRUPO "), chalk.hex("#ff1c5a").bold(`${groupName}`)))}}
  if(isCmd && isGroup){console.log(chalk.hex("#1cfcff").bold("[ COMANDO ]"), chalk.hex("#ff1c5a").bold(`${comando}`), chalk.hex("#1cfcff").bold(" DE "), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`, chalk.hex("#1cfcff").bold("NO GRUPO ", chalk.hex("#ff1c5a").bold(`${groupName}`))))}

//=============🍥 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗖𝗢𝗠 𝗣𝗥𝗘𝗙𝗜𝗫𝗢 🍥==========//
switch (comando) {

case 'dono': {templateMassage ={ image: {url: 'https://i.imgur.com/GLI7gkK.jpeg', quoted: info},caption: (` 𝗜𝗡𝗙𝗢𝗥𝗠𝗔ÇÃ𝗢\n
wa.me//${numeroBot}`
),footer: "FAMILIA ATK",}
conn. sendMessage(from, templateMassage)}
break

case "menu": 
const lordfabio = `
COMANDO: ${comando}
HORA: ${hora}
USUÁRIO: ${pushname}
GRUPO: ${groupName}
NOME DO BOT: ${nomeBot}
DONO DO BOT: ${nomeDono}
NUMERO DO DONO: ${numeroBot}
𝐌𝐄𝐍𝐔 𝐃𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒
├⊩❑ ${prefixo}sairgp •Retirar o Bot
├⊩❑ ${prefixo}leave •Retirar o Bot
├⊩❑ ${prefixo}dono •Numero do Dono
├⊩❑ ${prefixo}todos •Marca todos
├⊩❑ ${prefixo}ban •Banir membro
├⊩❑ ${prefixo}kick •Banir membro
├⊩❑ ${prefixo}tagme •Me marcar
├⊩❑ ${prefixo}rebaixar •Tirar Adm
├⊩❑ ${prefixo}promover •Dá Adm
├⊩❑ ${prefixo}add •Adicionar membro
├⊩❑ ${prefixo}gp •Mudar conf do Grupo
├⊩❑ ${prefixo}grupo •Mudar conf do Grupo
├⊩❑ ${prefixo}entrar •Entrar em Grupo
├⊩❑ ${prefixo}parar •Parar o Bot
├⊩❑ ${prefixo}help •Obter ajuda no grupo do Bot
❉ ╤╤╤╤ ✿ ╤╤╤╤ ❉
𝐍Ã𝐎 𝐄𝐍𝐓𝐑𝐄 𝐍𝐎 𝐏𝐕
       𝐍𝐎 𝐁𝐎𝐓
❉ ╧╧╧╧ ✿ ╧╧╧╧ ❉\n
REGRAS DO GRUPO:
${groupDesc}\n
`
conn.sendMessage(from, {text: lordfabio}, {quoted: selo})
break

case 'todos':
try {
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm) 
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗠𝗘𝗠𝗕𝗥𝗢\n\n'
for (let mem of groupMembers) {
teks += `ꖒ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
} catch {
enviar('ERROR!!')
}
break

case 'Grupo Bot': case 'help':
return enviar(`*📢 BREAKNEW 📢*\n
𝐆𝐑𝐔𝐏𝐎 𝐃𝐎 𝐁𝐎𝐓:\nhttps://chat.whatsapp.com/K4Duuo06eCMBlT289Gm2Y6
 `)
break



case 'tagme':
const tagme = `@${sender.split("@")[0]}`
await mentions(tagme, [sender], true)
conn.sendMessage(from, { react: { text: "⚠️", key: info.key }})
break

case 'promover': 
if(!isGroupAdmins) return enviar(resposta.adm)
if(!isBotGroupAdmins) return enviar(resposta.botadmi)
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return enviar(`Marque a mensagem!`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
if (mentioned.length >= 1) {
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi promovido(a) para Adm com sucesso ✅`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "promote")  
} else {
if(q.length > 15) return enviar('Só pode promover uma pessoa por vez!')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} foi promovido(a) a Adm com sucesso ✅`, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "promote")
}
break

case 'rebaixar': 
if(!isGroupAdmins) return enviar(resposta.adm)
if(!isBotGroupAdmins) return enviar(resposta.botadm)
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return enviar(`Marque a mensagem!`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
if (mentioned.length >= 1) {
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi rebaixado(a) para Membro Comum com sucesso ✅`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "demote")  
} else {
if(q.length > 15) return enviar('Só pode rebaixar uma pessoa por vez..')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} foi rebaixado(a) para Membro Comum com sucesso ✅`, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "demote")
}
break

case 'add':
if (!isGroup) return enviar(resposta.grupo)
if(!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm) 
if(q.length < 1) return enviar('Qual o número?')  
try {
tdt = args[0]
if(tdt.length < 1) return enviar(`Digita o número que deseja add, exemplo: ${prefix}add 552792893543`)
if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) {
enviar('Estou adicionando...')  
adduser = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
await delay(1000)
response = await conn.groupParticipantsUpdate(from, [adduser], "add")
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('Já está adicionado')
if(inv[0].code == 403) return enviar('Conta privada :(')
if(inv[0].code == 408) return enviar('Ele saiu agora não consigo adicionar')
if(inv[0].code == 401) return enviar('Esse ctt me bloqueou')
if(tdt.includes(groupMembers.id.split('@')[0])) return enviar('já tá mano')
} else {
enviar('Estou adicionando...')  
await delay(500)
adduser = info.message.extendedTextMessage.contextInfo.participant
response =  await conn.groupParticipantsUpdate(from,[adduser], "add")
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return
if(inv[0].code == 403) return
if(inv[0].code == 408) return
if(inv[0].code == 401) return
}
} catch {
enviar(resposta.sucesso)
}
break

case 'ban': case 'kick':
    if (!isGroup) return enviar(resposta.grupo);
    if (!isGroupAdmins && !isOwner) return enviar(resposta.admim);
    if (!isBotGroupAdmins) return enviar(resposta.botadm);
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar ('Marque a pessoa')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'pedido recebido: \n'
for (let _ of mentioned) {
teks += `@${_.trim('@')[0]}\n`
}
mentions(teks, mentioned, true)
conn.groupParticipantsUpdate(from, mentioned, 'remove')
} else {
mentions(`removido com sucesso!`, mentioned, true)
conn.groupParticipantsUpdate(from, mentioned, 'remove')
}
break

case 'gp': case 'grupo':
    if (!isGroup) return enviar(resposta.grupo);
    if (!isGroupAdmins && !isOwner) return enviar(resposta.admim);
    if (!isBotGroupAdmins) return enviar(resposta.botadm);

    if (args[0] == '0') {
        enviar(resposta.gpa);
        conn.groupSettingUpdate(from, 'not_announcement');
    } else if (args[0] == '1') {
        enviar(resposta.gpf);
        conn.groupSettingUpdate(from, 'announcement');
    } else {
        enviar(resposta.semnull);
    }
    break

case 'entrar':
    const string = args.join(' ').trim();
    if (!string) return enviar('Insira um link de convite ao lado do comando.');

    // Verifica se a string contém um link de convite
    if (string.includes('chat.whatsapp.com/')) {
        // Remove espaços extras e verifica o formato do link
        const inviteCode = string.split('chat.whatsapp.com/')[1]?.trim();
        if (inviteCode) {
            try {
                await conn.groupAcceptInvite(inviteCode);
                enviar('Bot entrou no grupo com sucesso!');
            } catch (erro) {
                if (String(erro).includes('resource-limit')) {
                    enviar('O grupo já está com o alcance de 257 membros.');
                } else if (String(erro).includes('not-authorized')) {
                    enviar('Não foi possível entrar no grupo.\nMotivo: Banimento.\nPor favor, peça a um administrador do grupo para usar a opção "Convidar para o grupo novamente".');
                } else {
                    enviar('Ocorreu um erro ao tentar entrar no grupo.');
                }
            }
        } else {
            enviar('Ops, verifique o link de convite que você inseriu.');
        }
    } else {
        enviar('Ops, verifique o link de convite que você inseriu.');
    }
    break;

case 'sairgp':
if (!isGroup) return enviar(resposta.grupo);
try {conn.groupLeave(from)} catch(erro) {enviar(String(erro))}
break

case 'leave':
if (!isGroup) return enviar(resposta.grupo);
try {conn.groupLeave(from)} catch(erro) {enviar(String(erro))}
break

case 'parar':
if(!isBot) return enviar (resposta.dono)
enviar (`Reiniciando...`)
await sleep(1000)
process.exit()
break

//========== FIM DOS COMANDO COM PREFIXO ==========//
default:

//============= COMANDOS SEM PREFIXO ==============//
switch (testat) {

case "bot":
conn.sendMessage(from, { react: { text: "🐃", key: info.key }})
break

case "bom dia":
enviar("bom dia ☀️")
break
case "boa tarde":
enviar("boa tarde 🏞️")
break
case "boa noite":
await conn.sendMessage(from, { react: { text: "🐋", key: info.key }})
return enviar("boa noite 🌑")
break


}

//============ COMANDO NÃO É ENCONTRADO ==========//
// if (isCmd) {
// conn.sendMessage(from, { react: { text: "⚠️", key: info.key }})
// }
// }
if (isCmd) {
const lord =`*ERROR!*`
conn.sendMessage(from, {text: lord }, {quoted: selo})
}}
} catch (e) {
console.log(e)
}})

// New auto reconexão própria
conn.ev.on("connection.update", (update) => {
let { connection, lastDisconnect } = update
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("[❗] A index.js ACABOU DE SER EDITADA, REINICIANDO...", "yellow"));
process.exit()
}
})
fs.watchFile('./funções.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("[❗] A funções ACABOU DE SER EDITADA, REINICIANDO...", "yellow"));
process.exit()
}
})
fs.watchFile('./info.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("[❗] A info.js ACABOU DE SER EDITADA, REINICIANDO...", "yellow"));
process.exit()
}
})
fs.watchFile('./fetcher.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("[❗] A fetcher.js ACABOU DE SER EDITADA, REINICIANDO...", "yellow"));
process.exit()
}
})

if (connection === "open") {
console.log(chalk.greenBright("✅ 𝗖𝗢𝗡𝗘𝗖𝗧𝗔𝗗𝗢 𝗖𝗢𝗠 𝗦𝗨𝗖𝗘𝗦𝗦𝗢 ✅"))}
if(update.isNewLogin) {
atk()
}})}
atk()

