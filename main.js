const Discord = require(`discord.js`)
const client = new Discord.Client()
const prefix = '/'
const fs = require(`fs`)
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./cmds/${file}`)
    client.commands.set(command.name, command)
}
client.once('ready', () => {
    console.log('we are live!')
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const commands = args.shift().toLowerCase()

    if(commands === 'hi') {
        client.commands.get('hi').execute(message, args)
    }
})

client.login('NzI3NTEzMjU5MTI0NzE5Njg5.Xvs-6w.ZIsKMZ_2qI1rCz-b4NynKLM5TDE')