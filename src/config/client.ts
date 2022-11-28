import { Client } from 'discord.js';
import 'dotenv/config';

const token = process.env.DISCORD_TOKEN;
const client = new Client({
  intents: [],
});

client.on('ready', async () => {
  console.log('Bot Online!');
});

client.login(token);

export default client;
