const _0x20abf2=_0x39a7;function _0x39a7(_0x512f7c,_0xc973ab){const _0x49241c=_0x4924();return _0x39a7=function(_0x39a759,_0x54f559){_0x39a759=_0x39a759-0x1a7;let _0x26d766=_0x49241c[_0x39a759];return _0x26d766;},_0x39a7(_0x512f7c,_0xc973ab);}(function(_0x570eff,_0x2f05ab){const _0x34808b=_0x39a7,_0x2f1e63=_0x570eff();while(!![]){try{const _0x506af1=parseInt(_0x34808b(0x1f9))/0x1+-parseInt(_0x34808b(0x213))/0x2*(-parseInt(_0x34808b(0x1a7))/0x3)+-parseInt(_0x34808b(0x1f3))/0x4+-parseInt(_0x34808b(0x1e1))/0x5*(parseInt(_0x34808b(0x217))/0x6)+-parseInt(_0x34808b(0x1da))/0x7*(parseInt(_0x34808b(0x1d7))/0x8)+parseInt(_0x34808b(0x1d8))/0x9+parseInt(_0x34808b(0x1db))/0xa;if(_0x506af1===_0x2f05ab)break;else _0x2f1e63['push'](_0x2f1e63['shift']());}catch(_0x1e21a2){_0x2f1e63['push'](_0x2f1e63['shift']());}}}(_0x4924,0xb30c8),require(_0x20abf2(0x1e0)));const func=require('./all/place'),readline=require(_0x20abf2(0x1de)),welcome=JSON[_0x20abf2(0x1ea)](fs['readFileSync']('./all/database/welcome.json')),usePairingCode=!![],question=_0x1b9d04=>{const _0x11d2d3=_0x20abf2,_0x144ffc=readline[_0x11d2d3(0x1ca)]({'input':process[_0x11d2d3(0x1bd)],'output':process[_0x11d2d3(0x1cd)]});return new Promise(_0x32c566=>{const _0x5bfc70=_0x11d2d3;_0x144ffc[_0x5bfc70(0x1ab)](_0x1b9d04,_0x32c566);});};async function startSesi(){const _0x2812d5=_0x20abf2,_0x1b9086=makeInMemoryStore({'logger':pino()[_0x2812d5(0x21d)]({'level':_0x2812d5(0x200),'stream':_0x2812d5(0x1c8)})}),{state:_0x1998ce,saveCreds:_0x3722fb}=await useMultiFileAuthState('./session'),{version:_0x581efe,isLatest:_0x8dac2}=await fetchLatestBaileysVersion(),_0x54bc43={'version':[0x2,0xbb8,0x3c8d6c7b],'keepAliveIntervalMs':0x7530,'printQRInTerminal':!usePairingCode,'logger':pino({'level':_0x2812d5(0x1dc)}),'auth':_0x1998ce,'browser':['Ubuntu',_0x2812d5(0x1b6),'20.0.04'],'getMessage':async _0x2397a3=>{const _0x35c065=_0x2812d5;if(_0x1b9086){const _0x6076f1=await _0x1b9086[_0x35c065(0x1e8)](_0x2397a3['remoteJid'],_0x2397a3['id'],undefined);return _0x6076f1?.[_0x35c065(0x1ee)]||undefined;}return{'conversation':'WhatsApp\x20Bot\x20By\x20𝐑𝐞𝐯𝐚𝐧\x20𝐂𝐫𝐚𝐬𝐡'};}},_0x142fb5=func[_0x2812d5(0x1e3)](_0x54bc43);if(usePairingCode&&!_0x142fb5[_0x2812d5(0x1e7)][_0x2812d5(0x1ba)][_0x2812d5(0x21c)]){const _0x3fe90a=await question(chalk[_0x2812d5(0x1fa)][_0x2812d5(0x218)]('𝐂𝐑𝐄𝐀𝐓𝐄𝐃\x20𝐁𝐘\x20𝐑𝐄𝐕𝐀𝐍\x20𝙈𝘼𝙎𝙐𝙆𝙄𝙉\x20𝙉𝙊𝙈𝙊𝙍\x20𝙒𝘼\x20𝙈𝙐\x20𝙉𝙊𝙈𝙊𝙍𝙉𝙔𝘼\x2062\x20𝘽𝙐𝙆𝘼𝙉\x20+62/08\x20𝘿𝙀𝙉𝙂𝙀𝙍\x20𝙔𝘼\x0a𝘾𝙊𝙉𝙏𝙊𝙃𝙉𝙔𝘼\x20:\x206282135574623389487722\x0a')),_0x2e2347=await _0x142fb5['requestPairingCode'](_0x3fe90a['trim']());console['log'](chalk[_0x2812d5(0x1fa)][_0x2812d5(0x218)]('Kode\x20Verifikasi\x20Kamu')+'\x20:\x20'+chalk[_0x2812d5(0x1c2)][_0x2812d5(0x218)](_0x2e2347['split']('')['join']('\x20')));}return _0x1b9086?.[_0x2812d5(0x1ff)](_0x142fb5['ev']),_0x142fb5['ev']['on'](_0x2812d5(0x1cf),async _0x352f1c=>{const _0x3808f5=_0x2812d5,{connection:_0x1a9040,lastDisconnect:_0xcf52c2}=_0x352f1c;if(_0x1a9040===_0x3808f5(0x1c6)){const _0x23efaa=new Boom(_0xcf52c2?.[_0x3808f5(0x208)])?.[_0x3808f5(0x1c7)][_0x3808f5(0x1cb)];console[_0x3808f5(0x1ec)](color(_0xcf52c2[_0x3808f5(0x208)],_0x3808f5(0x21a)));if(_0xcf52c2[_0x3808f5(0x208)]==_0x3808f5(0x207))process[_0x3808f5(0x1c1)]();else{if(_0x23efaa===DisconnectReason[_0x3808f5(0x1d4)])console[_0x3808f5(0x1ec)](color(_0x3808f5(0x201))),process[_0x3808f5(0x1c1)]();else{if(_0x23efaa===DisconnectReason[_0x3808f5(0x1b5)])console['log'](color(_0x3808f5(0x20e),'white'),color(_0x3808f5(0x215),_0x3808f5(0x21a))),process[_0x3808f5(0x1c1)]();else{if(_0x23efaa===DisconnectReason[_0x3808f5(0x20b)])console[_0x3808f5(0x1ec)](color(_0x3808f5(0x20e),'white'),color('Connection\x20lost,\x20trying\x20to\x20reconnect',_0x3808f5(0x21a))),process[_0x3808f5(0x1c1)]();else{if(_0x23efaa===DisconnectReason[_0x3808f5(0x219)])console[_0x3808f5(0x1ec)](color('Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First')),_0x142fb5[_0x3808f5(0x1e9)]();else{if(_0x23efaa===DisconnectReason[_0x3808f5(0x1fe)])console[_0x3808f5(0x1ec)](color(_0x3808f5(0x21e))),_0x142fb5[_0x3808f5(0x1e9)]();else{if(_0x23efaa===DisconnectReason[_0x3808f5(0x1c4)])console['log'](color(_0x3808f5(0x216))),await startSesi();else _0x23efaa===DisconnectReason[_0x3808f5(0x1df)]&&(console[_0x3808f5(0x1ec)](color(_0x3808f5(0x1ed))),startSesi());}}}}}}}else{if(_0x1a9040===_0x3808f5(0x1fd))console[_0x3808f5(0x1ec)](chalk[_0x3808f5(0x1fa)][_0x3808f5(0x218)](_0x3808f5(0x203)));else{if(_0x1a9040===_0x3808f5(0x1be)){let _0x3a488d=_0x3808f5(0x1fc)+_0x142fb5[_0x3808f5(0x209)]['id'][_0x3808f5(0x1d9)](':')[0x0]+_0x3808f5(0x1ce);_0x142fb5[_0x3808f5(0x1b4)](_0x3808f5(0x21b),{'text':_0x3a488d}),console[_0x3808f5(0x1ec)](chalk[_0x3808f5(0x1fa)][_0x3808f5(0x218)](_0x3808f5(0x1b9)));}}}}),_0x142fb5['ev']['on']('call',async _0x1c6d8d=>{const _0x17da35=_0x2812d5;if(!global[_0x17da35(0x1b7)])return;for(let _0x37393a of _0x1c6d8d){if(_0x37393a[_0x17da35(0x1bf)]==![]){if(_0x37393a[_0x17da35(0x1d0)]==_0x17da35(0x1f7)){let _0x2b38c2=await _0x142fb5[_0x17da35(0x1b4)](_0x37393a[_0x17da35(0x1e4)],{'text':'@'+_0x37393a['from'][_0x17da35(0x1d9)]('@')[0x0]+'\x20𝙅𝘼𝙉\x20𝘼𝙎𝘼𝙇\x20𝙉𝙀𝙇𝙋𝙊𝙉\x20𝘼𝙉𝙅𝙄𝙉𝙂\x20*Anticall*\x0a𝙄𝙉𝙂𝙀𝙏\x20𝙔𝘼\x20𝙅𝘼𝙉\x20𝙉𝙀𝙇𝙋𝙊𝙉\x20𝙈𝙀𝙈𝙀𝙆\x20𝘼𝙒𝙊𝙆𝘼𝙒𝙊𝙆\x20𝘿𝙄\x20𝘽𝙇𝙊𝙆','contextInfo':{'mentionedJid':[_0x37393a['from']],'externalAdReply':{'showAdAttribution':!![],'thumbnail':fs[_0x17da35(0x1eb)](_0x17da35(0x1b0)),'title':_0x17da35(0x1f6),'previewType':'PHOTO'}}},{'quoted':null});_0x142fb5[_0x17da35(0x1bb)](_0x37393a['from'],[owner],_0x17da35(0x1f5),_0x2b38c2),await sleep(0x2710),await _0x142fb5[_0x17da35(0x210)](_0x37393a['from'],'block');}}}}),_0x142fb5['ev']['on'](_0x2812d5(0x1e2),async _0x3c2899=>{const _0x42d041=_0x2812d5;try{m=_0x3c2899[_0x42d041(0x206)][0x0];if(!m[_0x42d041(0x1ee)])return;m['message']=Object[_0x42d041(0x1f2)](m[_0x42d041(0x1ee)])[0x0]==='ephemeralMessage'?m['message'][_0x42d041(0x1c0)][_0x42d041(0x1ee)]:m[_0x42d041(0x1ee)];if(m[_0x42d041(0x1f8)])return;if(m[_0x42d041(0x1d6)]&&m[_0x42d041(0x1d6)][_0x42d041(0x1f4)]===_0x42d041(0x1dd)){if(global['autoreadsw'])_0x142fb5[_0x42d041(0x20f)]([m['key']]);}let _0x1220e7=[global[_0x42d041(0x1b1)],_0x42d041(0x1e5)];if(!_0x142fb5[_0x42d041(0x1f1)]&&!_0x1220e7[_0x42d041(0x1a9)](m[_0x42d041(0x1d6)][_0x42d041(0x1f4)]['split']('@')[0x0])&&!m['key'][_0x42d041(0x205)]&&_0x3c2899['type']===_0x42d041(0x1a8))return;if(global[_0x42d041(0x214)])_0x142fb5['readMessages']([m['key']]);m=func[_0x42d041(0x1ae)](_0x142fb5,m,_0x1b9086),require(_0x42d041(0x1bc))(_0x142fb5,m,_0x1b9086);}catch(_0x41f62e){console['log'](_0x41f62e);}}),_0x142fb5['ev']['on']('group-participants.update',async _0x2dc06b=>{const _0x1eb623=_0x2812d5;if(!welcome[_0x1eb623(0x1a9)](_0x2dc06b['id']))return;let _0x54a42f=await _0x142fb5[_0x1eb623(0x1fb)](_0x142fb5[_0x1eb623(0x209)]['id']);if(_0x2dc06b[_0x1eb623(0x1d3)][_0x1eb623(0x1a9)](_0x54a42f))return;try{let _0x3c6134=await _0x142fb5[_0x1eb623(0x1c9)](_0x2dc06b['id']),_0x57d73e=_0x3c6134[_0x1eb623(0x1ac)],_0x3ba478=_0x2dc06b[_0x1eb623(0x1d3)];for(let _0xb3c6d of _0x3ba478){let _0x314592=_0x2dc06b['author']!==_0xb3c6d&&_0x2dc06b[_0x1eb623(0x20d)][_0x1eb623(0x202)]>0x1,_0x58227d=_0x314592?[_0x2dc06b[_0x1eb623(0x20d)],_0xb3c6d]:[_0xb3c6d];try{ppuser=await _0x142fb5['profilePictureUrl'](_0xb3c6d,_0x1eb623(0x1b8));}catch{ppuser=_0x1eb623(0x1c5);}if(_0x2dc06b[_0x1eb623(0x20a)]==_0x1eb623(0x212))_0x142fb5[_0x1eb623(0x1b4)](_0x2dc06b['id'],{'text':_0x314592?'@'+_0x2dc06b[_0x1eb623(0x20d)][_0x1eb623(0x1d9)]('@')[0x0]+_0x1eb623(0x1d5)+_0xb3c6d[_0x1eb623(0x1d9)]('@')[0x0]+_0x1eb623(0x1af):'Hallo\x20Kak\x20@'+_0xb3c6d[_0x1eb623(0x1d9)]('@')[0x0]+_0x1eb623(0x1d1)+_0x57d73e+'*','contextInfo':{'mentionedJid':[..._0x58227d],'externalAdReply':{'thumbnailUrl':ppuser,'title':_0x1eb623(0x1d2),'body':'','renderLargerThumbnail':!![],'sourceUrl':linkgc,'mediaType':0x1}}});else{if(_0x2dc06b[_0x1eb623(0x20a)]==_0x1eb623(0x1b2))_0x142fb5['sendMessage'](_0x2dc06b['id'],{'text':_0x314592?'@'+_0x2dc06b[_0x1eb623(0x20d)][_0x1eb623(0x1d9)]('@')[0x0]+'\x20Telah\x20Mengeluarkan\x20@'+_0xb3c6d[_0x1eb623(0x1d9)]('@')[0x0]+'\x20Dari\x20Grup\x20Ini':'@'+_0xb3c6d['split']('@')[0x0]+_0x1eb623(0x1cc),'contextInfo':{'mentionedJid':[..._0x58227d],'externalAdReply':{'thumbnailUrl':ppuser,'title':_0x1eb623(0x1ad),'body':'','renderLargerThumbnail':!![],'sourceUrl':linkgc,'mediaType':0x1}}});else{if(_0x2dc06b[_0x1eb623(0x20a)]==_0x1eb623(0x1ef))_0x142fb5[_0x1eb623(0x1b4)](_0x2dc06b['id'],{'text':'@'+_0x2dc06b['author']['split']('@')[0x0]+'\x20Telah\x20Menjadikan\x20@'+_0xb3c6d['split']('@')[0x0]+_0x1eb623(0x1c3),'contextInfo':{'mentionedJid':[..._0x58227d],'externalAdReply':{'thumbnailUrl':ppuser,'title':_0x1eb623(0x211),'body':'','renderLargerThumbnail':!![],'sourceUrl':linkgc,'mediaType':0x1}}});else _0x2dc06b[_0x1eb623(0x20a)]==_0x1eb623(0x1f0)&&_0x142fb5[_0x1eb623(0x1b4)](_0x2dc06b['id'],{'text':'@'+_0x2dc06b[_0x1eb623(0x20d)]['split']('@')[0x0]+_0x1eb623(0x1b3)+_0xb3c6d[_0x1eb623(0x1d9)]('@')[0x0]+'\x20Sebagai\x20Admin\x20Grup\x20Ini','contextInfo':{'mentionedJid':[..._0x58227d],'externalAdReply':{'thumbnailUrl':ppuser,'title':_0x1eb623(0x1aa),'body':'','renderLargerThumbnail':!![],'sourceUrl':linkgc,'mediaType':0x1}}});}}}}catch(_0x5489fc){console['log'](_0x5489fc);}}),_0x142fb5['public']=!![],_0x142fb5['ev']['on'](_0x2812d5(0x1e6),_0x3722fb),_0x142fb5;}function _0x4924(){const _0x16fb03=['bind','silent','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','length','Menghubungkan\x20.\x20.\x20.\x20','Caught\x20exception:\x20','fromMe','messages','Error:\x20Stream\x20Errored\x20(unknown)','error','user','action','connectionLost','uncaughtException','author','[SYSTEM]','readMessages','updateBlockStatus','©\x20Promote\x20Message','add','33514XKKrkT','autoread','Connection\x20closed,\x20reconnecting...','Restart\x20Required,\x20Restarting...','12FAaymr','bold','connectionReplaced','deeppink','6282135574623@s.whatsapp.net','registered','child','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','231pcfIzE','notify','includes','©\x20Demote\x20Message','question','subject','©\x20Leaving\x20Message','smsg','\x20Ke\x20Dalam\x20Grup\x20Ini','./media/warning.jpg','owner','remove','\x20Telah\x20Memberhentikan\x20@','sendMessage','connectionClosed','Chrome','anticall','image','Bot\x20Berhasil\x20Tersambung','creds','sendContact','./Ibzz','stdin','open','isGroup','ephemeralMessage','exit','redBright','\x20Sebagai\x20Admin\x20Grup\x20Ini','restartRequired','https://telegra.ph/file/a059a6a734ed202c879d3.jpg','close','output','store','groupMetadata','createInterface','statusCode','\x20Telah\x20Keluar\x20Dari\x20Grup\x20Ini','stdout','\x20DONT\x20RESELL\x20THIS\x20SCRIPT\x20IN\x20ORDER\x20IF\x20YOU\x20DONT\x20WANNA\x20GET\x20VIRAL','connection.update','status','\x20Selamat\x20Datang\x20Di\x20*','©\x20Welcome\x20Message','participants','badSession','\x20Telah\x20Menambahkan\x20@','key','185208nEXYbG','68076QTsPqy','split','175QalVfG','823270tkvPKb','fatal','status@broadcast','readline','timedOut','./all/global','2730745TSWFzb','messages.upsert','makeWASocket','from','6282135574623','creds.update','authState','loadMessage','logout','parse','readFileSync','log','Connection\x20TimedOut,\x20Reconnecting...','message','promote','demote','public','keys','986580cJodlA','remoteJid','𝙋𝙀𝙈𝘽𝙐𝘼𝙏\x20𝙎𝘾𝙍𝙄𝙋𝙏\x20𝙍𝙚𝙫𝙖𝙣\x20𝘾𝙧𝙖𝙨𝙝\x20𝙑6.7','｢\x20𝙏𝙀𝙇𝙋𝙊𝙉\x20𝙏𝙀𝙍𝘿𝙀𝙏𝙀𝙆𝙎𝙄\x20｣','offer','isBaileys','1270922zOtKrJ','cyan','decodeJid','𝙍𝙚𝙫𝙖𝙣\x20𝙨𝙩𝙤𝙧𝙚\x20V6.7.5\x20HAS\x20CONNECTED\x20INTO\x20','connecting','loggedOut'];_0x4924=function(){return _0x16fb03;};return _0x4924();}startSesi(),process['on'](_0x20abf2(0x20c),function(_0x1284e5){const _0x5f0d88=_0x20abf2;console['log'](_0x5f0d88(0x204),_0x1284e5);});