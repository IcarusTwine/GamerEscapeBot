const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch');

module.exports ={
    slash: 'both',
    testOnly: true,
    description: 'Shows current API info for gamerescape',
    minArgs: 1,
    expectedArgs: '<wiki>',
    callback: async ({ message, args }) => {
        const wiki = args
        const file = await fetch('https://'+wiki+'.gamerescape.com/w/api.php?action=query&meta=siteinfo&siprop=statistics&format=json').then(response => response.json());
        var pages = file.query.statistics.pages;
        var articles = file.query.statistics.articles;
        var edits = file.query.statistics.edits;
        var images = file.query.statistics.images;
        var users = file.query.statistics.users;
        var activeusers = file.query.statistics.activeusers;
        var admins = file.query.statistics.admins;
        var jobs = file.query.statistics.jobs;
        switch (wiki) {
            case 'avengers':
                var image = 'https://arealmremapped.com/assets/api/avengers.api.png'
                break;
        
            default:
                break;
        }
        const embed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('API - '+wiki)
        .setThumbnail('https://arealmremapped.com/assets/api/'+wiki+'.api.png')
        .addFields(
          { name: 'Pages', value: (pages) },
          { name: 'Articles', value: (articles) },
          { name: 'Edits', value: (edits) },
          { name: 'Images', value: (images) },
          { name: 'Users', value: (users) },
          { name: 'Activeusers', value: (activeusers) },
          { name: 'Admins', value: (admins) },
          { name: 'Jobs', value: (jobs) }
        )
        .setTimestamp();
        if (message) {
            message.reply('', { embed })
        }

        return embed
    },
}