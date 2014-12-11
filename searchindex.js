Search.setIndex({titles:["hearthbreaker.agents package","Card Death Speed","Hearthbreaker Documentation","Game Objects Module","Contributing","Replay Module","hearthbreaker package"],filenames:["hearthbreaker.agents","card_death_speed","index","hearthbreaker.game_objects","contributing","hearthbreaker.replays","hearthbreaker"],envversion:43,titleterms:{hearthbreak:[0,6,2],instruct:4,druid:[],time:1,target:6,mage:[],record:5,test:4,content:[0,6],back:5,secret:4,implement:[],submodul:[0,6],creat:4,battlecri:[],user_ag:[],speed:1,object:3,subpackag:6,welcom:[],game_object:[],techniqu:4,game:[3,5],agent:0,neutral:[],attribut:[],plai:5,weapon:4,type:4,hsgame:[],paladin:[],minion:4,contribut:4,specif:4,priest:[],death:1,indic:2,power:6,constructor:4,unit:4,tabl:2,"new":4,document:2,constant:6,modul:[3,0,6,5],spell:4,basic_ag:0,replai:5,card:[4,1],packag:[0,6]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:method","3":"py:class","4":"py:staticmethod","5":"py:function","6":"py:exception"},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","class","Python class"],"4":["py","staticmethod","Python static method"],"5":["py","function","Python function"],"6":["py","exception","Python exception"]},objects:{"":{hearthbreaker:[6,0,0,"-"]},"hearthbreaker.replay.Replay":{"__init__":[5,2,1,""],write:[5,2,1,""],read:[5,2,1,""],read_json:[5,2,1,""],write_json:[5,2,1,""]},"hearthbreaker.constants":{MINION_TYPE:[6,3,1,""],CARD_RARITY:[6,3,1,""],CHARACTER_CLASS:[6,3,1,""]},"hearthbreaker.agents.basic_agents.DoNothingAgent":{do_card_check:[0,2,1,""],choose_option:[0,2,1,""],"__init__":[0,2,1,""],do_turn:[0,2,1,""],choose_index:[0,2,1,""],choose_target:[0,2,1,""]},"hearthbreaker.game_objects.Hero":{copy:[3,2,1,""],find_power_target:[3,2,1,""],damage:[3,2,1,""],increase_armor:[3,2,1,""],die:[3,2,1,""],"__init__":[3,2,1,""],attack:[3,2,1,""],calculate_attack:[3,2,1,""]},"hearthbreaker.game_objects.MinionCard":{use:[3,2,1,""],summon:[3,2,1,""],"__init__":[3,2,1,""],create_minion:[3,2,1,""],can_use:[3,2,1,""],is_spell:[3,2,1,""]},"hearthbreaker.game_objects.Player":{copy:[3,2,1,""],choose_target:[3,2,1,""],remove_aura:[3,2,1,""],"__init__":[3,2,1,""],put_back:[3,2,1,""],discard:[3,2,1,""],effective_heal_power:[3,2,1,""],effective_spell_damage:[3,2,1,""],draw:[3,2,1,""],can_draw:[3,2,1,""],add_aura:[3,2,1,""],add_effect:[3,2,1,""]},"hearthbreaker.agents":{basic_agents:[0,0,0,"-"]},"hearthbreaker.game_objects.Character":{silence:[3,2,1,""],choose_target:[3,2,1,""],remove_aura:[3,2,1,""],windfury:[3,1,1,""],can_attack:[3,2,1,""],activate_delayed:[3,2,1,""],spell_targetable:[3,2,1,""],frozen_this_turn:[3,1,1,""],dead:[3,1,1,""],calculate_max_health:[3,2,1,""],auras:[3,1,1,""],effects:[3,1,1,""],player:[3,1,1,""],stealth:[3,1,1,""],health_delta:[3,1,1,""],set_health_to:[3,2,1,""],increase_health:[3,2,1,""],add_aura:[3,2,1,""],attack:[3,2,1,""],attack_delta:[3,1,1,""],set_attack_to:[3,2,1,""],add_effect:[3,2,1,""],delayed:[3,1,1,""],decrease_health:[3,2,1,""],used_windfury:[3,1,1,""],"__init__":[3,2,1,""],delayed_trigger:[3,2,1,""],enraged:[3,1,1,""],calculate_attack:[3,2,1,""],immune:[3,1,1,""],damage:[3,2,1,""],removed:[3,1,1,""],frozen:[3,1,1,""],born:[3,1,1,""],heal:[3,2,1,""],change_temp_attack:[3,2,1,""],active:[3,1,1,""],die:[3,2,1,""],change_attack:[3,2,1,""],freeze:[3,2,1,""],base_attack:[3,1,1,""]},"hearthbreaker.game_objects.Bindable":{"__init__":[3,2,1,""],trigger:[3,2,1,""],unbind:[3,2,1,""],bind_once:[3,2,1,""],bind:[3,2,1,""]},"hearthbreaker.game_objects.Card":{"__init__":[3,2,1,""],use:[3,2,1,""],can_use:[3,2,1,""],mana_cost:[3,2,1,""],is_spell:[3,2,1,""]},"hearthbreaker.agents.basic_agents.RandomAgent":{do_card_check:[0,2,1,""],choose_target:[0,2,1,""],"__init__":[0,2,1,""],do_turn:[0,2,1,""],choose_index:[0,2,1,""],choose_option:[0,2,1,""]},"hearthbreaker.replay":{Replay:[5,3,1,""],record:[5,5,1,""],playback:[5,5,1,""]},"hearthbreaker.agents.basic_agents":{Agent:[0,3,1,""],RandomAgent:[0,3,1,""],PredictableAgent:[0,3,1,""],DoNothingAgent:[0,3,1,""]},"hearthbreaker.constants.CARD_RARITY":{RARE:[6,1,1,""],LEGENDARY:[6,1,1,""],EPIC:[6,1,1,""],SPECIAL:[6,1,1,""],to_str:[6,4,1,""],FREE:[6,1,1,""],from_str:[6,4,1,""],COMMON:[6,1,1,""]},"hearthbreaker.game_objects.WeaponCard":{"__init__":[3,2,1,""],use:[3,2,1,""],create_weapon:[3,2,1,""],is_spell:[3,2,1,""]},"hearthbreaker.game_objects.Deck":{"__init__":[3,2,1,""],put_back:[3,2,1,""],copy:[3,2,1,""],draw:[3,2,1,""],can_draw:[3,2,1,""]},"hearthbreaker.game_objects.GameException":{"__init__":[3,2,1,""]},"hearthbreaker.game_objects":{Weapon:[3,3,1,""],Hero:[3,3,1,""],Bindable:[3,3,1,""],MinionCard:[3,3,1,""],card_lookup:[3,5,1,""],Minion:[3,3,1,""],WeaponCard:[3,3,1,""],SecretCard:[3,3,1,""],Game:[3,3,1,""],GameException:[3,6,1,""],get_cards:[3,5,1,""],Card:[3,3,1,""],Deck:[3,3,1,""],Character:[3,3,1,""],Player:[3,3,1,""]},"hearthbreaker.game_objects.Game":{play_card:[3,2,1,""],copy:[3,2,1,""],start:[3,2,1,""],game_over:[3,2,1,""],"__init__":[3,2,1,""],remove_minion:[3,2,1,""],check_delayed:[3,2,1,""],random_amount:[3,2,1,""],random_choice:[3,2,1,""],random_draw:[3,2,1,""],pre_game:[3,2,1,""],play_single_turn:[3,2,1,""]},"hearthbreaker.game_objects.Minion":{silence:[3,2,1,""],copy:[3,2,1,""],add_to_board:[3,2,1,""],can_attack:[3,2,1,""],"__init__":[3,2,1,""],can_be_attacked:[3,2,1,""],spell_targetable:[3,2,1,""],replace:[3,2,1,""],calculate_max_health:[3,2,1,""],bounce:[3,2,1,""],damage:[3,2,1,""],die:[3,2,1,""],heal:[3,2,1,""],remove_from_board:[3,2,1,""],attack:[3,2,1,""],calculate_attack:[3,2,1,""]},"hearthbreaker.agents.basic_agents.Agent":{choose_option:[0,2,1,""],choose_target:[0,2,1,""],choose_index:[0,2,1,""],do_card_check:[0,2,1,""],do_turn:[0,2,1,""]},"hearthbreaker.constants.CHARACTER_CLASS":{ALL:[6,1,1,""],WARLOCK:[6,1,1,""],DRUID:[6,1,1,""],MAGE:[6,1,1,""],SHAMAN:[6,1,1,""],WARRIOR:[6,1,1,""],PALADIN:[6,1,1,""],LORD_JARAXXUS:[6,1,1,""],ROGUE:[6,1,1,""],PRIEST:[6,1,1,""],from_str:[6,4,1,""],to_str:[6,4,1,""],HUNTER:[6,1,1,""]},hearthbreaker:{agents:[0,0,0,"-"],powers:[6,0,0,"-"],constants:[6,0,0,"-"],replay:[5,0,0,"-"],game_objects:[3,0,0,"-"],targeting:[6,0,0,"-"]},"hearthbreaker.game_objects.SecretCard":{can_use:[3,2,1,""],use:[3,2,1,""],"__init__":[3,2,1,""],activate:[3,2,1,""],deactivate:[3,2,1,""],reveal:[3,2,1,""]},"hearthbreaker.game_objects.Weapon":{copy:[3,2,1,""],equip:[3,2,1,""],deathrattle:[3,1,1,""],"__init__":[3,2,1,""],battlecry:[3,1,1,""],destroy:[3,2,1,""],card:[3,1,1,""],player:[3,1,1,""]},"hearthbreaker.constants.MINION_TYPE":{ALL:[6,1,1,""],DRAGON:[6,1,1,""],NONE:[6,1,1,""],DEMON:[6,1,1,""],PIRATE:[6,1,1,""],GIANT:[6,1,1,""],from_str:[6,4,1,""],BEAST:[6,1,1,""],to_str:[6,4,1,""],TOTEM:[6,1,1,""],MECH:[6,1,1,""],MURLOC:[6,1,1,""]},"hearthbreaker.agents.basic_agents.PredictableAgent":{choose_option:[0,2,1,""],do_turn:[0,2,1,""],choose_index:[0,2,1,""],choose_target:[0,2,1,""],do_card_check:[0,2,1,""]}},terms:{"0x00000000057bdd08":[],magick:4,ooz:1,smash:4,directli:3,"0x00000000046fee18":[],bloodhoof:1,someth:3,wisdom:1,dalaranmag:[],vapor:1,"0x0000000004310ea0":[],shadowworddeath:[],"0x00000000043ac268":[],"0x0000000002f46948":[],"0x0000000004db48c8":[],warn:[],"0x0000000004d1e400":[],durabl:[3,4],dire:1,match:[3,4],"0x000000000430d620":[],restor:[],"0x00000000057c0048":[],finicki:4,arcanist:1,discard_on:[],save:5,comment:4,follow:[3,4,1],craze:1,"0x0000000002be30c8":[],titlesonli:[],crazi:4,cruel:1,berserk:[3,1],"0x000000000617c620":[],base_damag:3,move:5,card_index:[],companion:1,increase_temp_attack:[],"0x0000000004607158":[],origin:[],abomin:1,blastmag:[],roguepow:[],"0x00000000040c9400":[],twist:1,"0x0000000004354268":[],razorfen:1,find_friendly_spell_target:[],feral:[3,1],yourself:4,lowest:1,html:[],equip:3,"0x0000000002fd4d78":[],"0x0000000004e0b730":[],what:[3,4],ani:[3,4,5],"0x000000000426d9d8":[],param:3,elit:1,root:4,record_card_plai:[],"0x0000000002fefc88":[],exampl:[3,4,5],horribl:[],give_three_health:[],"0x000000000430eea0":[],azur:1,stormwindknight:[],commando:1,summon:[3,1],new_minion:3,"0x0000000002caf848":[],read:[4,5],put:[],nourish:1,hellscream:1,enter:3,"0x000000000447fb70":3,gorehowl:1,oasi:[4,1],guardian:1,temp_attack:[],empti:3,charg:[3,1],kobold:1,"0x0000000002fee898":[],sourc:[3,0,6,5,2],"0x00000000042c89d8":[],immun:3,"0x000000000554b950":[],order:[3,4],deal:3,secretkeep:1,meth:5,daniel:[],find_enemy_minion_battlecry_target:4,describ:[3,4,5],"0x0000000004325620":[],pact:1,"0x0000000002fabdd8":[],nerubian:1,"0x0000000004587048":[],"0x0000000004711840":[],column:[],"0x00000000046ec8c8":[],exist:3,"0x00000000043379d8":[],conform:4,allow:3,kirintormag:[],replac:[3,2],do_card_check:0,conceal:1,"0x0000000004571d08":[],aren:3,strang:4,poison:1,plai:[],combo:[],hero:[3,4,1],two_temp_attack:[],ambush:1,oasissnapjaw:[],here:4,increase_attack:[],frozen_this_turn:3,alreadi:3,thecoin:[],method:[3,4,5],flamecannon:[],coneofcold:[],battlecri:[],"0x0000000003e99ae8":[],souloftheforest:[],messag:3,"0x0000000002c02388":[],page:2,would:[3,4],scout:[],king:1,bite:1,pagl:1,string:[3,5],ogremagi:[],spellbend:1,damag:[3,4],magepow:[],similar:4,play_single_turn:[3,4],better:3,"0x0000000002b5cc48":[],lava:1,crazymonkei:4,ancientofwar:[],"0x0000000004cb37b8":[],increase_health:3,instead:3,pit:1,variat:4,pip:4,madder:[],discov:[4,2],involv:3,except:[3,4,1],minimum:[3,4],starv:1,stonetuskboar:[],soulpriest:1,onyxia:1,"0x000000000431a620":[],out:[4,5],soon:4,vancleef:1,increas:3,our:4,writer:[],starfir:1,each:[3,4],goldshir:1,drain:1,sole:1,maximum:3,siphon:1,legendari:[4,6],quest:1,along:[3,5],"0x0000000005d7cd90":[],coldlight:1,poweract:[],effect_sil:[],donothingag:[0,4],nat:1,"0x0000000005d9fd90":[],"0x0000000002f9ddf8":[],"0x00000000030370a8":[],rifleman:1,"0x0000000004e7a378":[],"0x00000000045ecf28":[],"0x0000000003035af8":[],direwolfalpha:[],"0x0000000004d34730":[],"0x0000000002c7df08":[],champion:1,within:3,"0x0000000004c73d08":[],tool:4,leader:1,playabl:4,part:[3,4],learn:2,molten:1,come:4,minion_summoned_ev:3,whenev:[],"case":[3,4,1],english:[3,4],"0x00000000045cbd08":[],extra:[],misdirect:1,"0x00000000045cd158":[],includ:[3,4],archmag:1,"0x0000000003048b58":[],calculate_attack:3,respons:[3,5],junglepanth:[],pypi:[],hoggersmash:4,argentprotector:[],header:[],perdit:1,ventur:1,vanish:1,"0x0000000003099368":[],overspark:1,treant:[],gladiat:1,basic_ag:[],cost:[3,4],"0x000000000300b9e8":[],mechano:[],hand:[3,4,1],goal:2,delai:3,find_friendly_hero_battlecry_target:[],generate_game_for:4,"0x0000000004db1400":[],stormpikecommando:[],"0x00000000053aa620":[],crocolisk:1,spelltestingag:[],golem:1,eas:4,give:[3,4],secret:[],"0x0000000002c5c448":[],least:4,guid:4,write:[4,5],decreas:3,dispel:1,lower:[3,4],"0x0000000004e54d08":[],enu:4,add_adjacency_effect:[],"0x000000000309f788":[],froth:1,rhino:1,handofprotect:[],attack_delta:3,"0x000000000432b9d8":[],bandit:[],"0x000000000412dea0":[],fix:4,enhanc:[],end:[3,4,1,2],"0x0000000003e99ea0":[],aldor:1,"0x00000000041319d8":[],eyeforaney:[],devilsaur:[],shredder:[],simpl:3,"0x0000000004810158":[],"0x00000000030e5d78":[],valid:[3,4],warlockpow:[],shieldbear:1,clone:[4,2],"0x0000000004154f28":[],field:3,select:[3,4,5],apprentic:1,thoughtsteal:1,activate_delai:3,corsair:1,hearthston:[3,4,1,2],akir:1,"0x00000000042b7d08":[],whose:3,"0x0000000004314ea0":[],collect:4,bool:3,boom:[],observ:3,"0x000000000435d268":[],"0x000000000433aea0":[],bluegil:1,"0x0000000004c998c8":[],mercenari:1,turnendact:[],"0x00000000030091e8":[],rogu:6,angri:1,new_health:3,"0x0000000004934b70":[],underscor:4,pre_gam:3,dwarf:1,taskmast:1,creat:[],store:5,complic:4,cenariu:1,priestessofelun:[],user_ag:[],limit:4,pycharmproject:[],member:3,delayed_trigg:3,"0x0000000004771e18":[],chillwindyeti:[],markofnatur:[],strike:1,"void":1,submit:4,set_target:[],bodi:4,voic:4,"0x0000000004e72f28":[],loatheb:1,filter_func:3,parse_replai:[],play_card:3,develop:4,remove_aura:3,predictableag:[0,4],warsong:1,favor:1,heroic:1,current_play:4,workflow:4,worgen:1,"0x0000000002cb56e8":[],change_attack:3,shrinkmeist:[],project:[4,2],wail:[],statu:3,grunt:1,effective_heal_pow:3,"0x0000000003eab730":[],ysera:1,master:1,"0x0000000002cff448":[],state:[3,4,5],rang:4,built:4,mech:[4,6],concedeact:[],"0x0000000004cbf730":[],put_back:3,jun:[],minionclass:[],"0x000000000430a268":[],check_delai:3,"0x0000000002cc5578":[],touch:1,"0x00000000043819d8":[],windfuri:[3,1],demon:[1,6],remov:[3,4],tank:[],bug:4,minion_plai:3,spellbreak:1,undo:3,millhous:1,consid:3,card_put_back:[],slime:[],well:[3,4,5,2],matter:5,"0x00000000045c91e0":[],"0x0000000002fda318":[],voodoodoctor:[],find_enemy_spell_target:[],behaviour:4,armorsmith:1,sylvana:1,lightwarden:1,reaper:1,peacekeep:1,minionselector:4,review:4,"0x00000000043259d8":[],almost:1,max_health:3,mindgam:1,arcan:1,otherwis:3,typic:[3,4],grommash:1,destroi:3,turn_start:[],"0x0000000004db28c8":[],distinguish:3,get_card:3,instal:4,"0x0000000004ce1950":[],feasibl:3,open:[5,2],"0x00000000047ad158":[],doe:[3,4],need:[3,4],noth:[3,4],succubu:1,oper:[3,5],doc:[],don:4,deal_one_damag:[],after:[3,4],effective_spell_pow:[],cone:1,step:4,command:[4,1],wolv:[],betray:1,mage:[],divinefavor:[],"0x00000000046b1d08":[],ironbarkprotector:[],"0x0000000004bf98c8":[],sword:[3,1],forc:1,recordinggam:[],flexibl:5,mountain:1,free:6,refer:[3,4],fork:[4,1],sun:1,factor:3,starfal:1,sorcerersapprentic:[],spell:[],"0x0000000005d7b8c8":[],"0x0000000005dcca60":[],spider:[],abil:[3,4],mekgin:[],arrai:4,noviceengin:[],shout:1,unappli:3,"0x0000000004175f28":[],violet:1,quick:4,mirrorimag:[],"0x0000000004ceb8c8":[],annoi:[],must:[3,4,5],"0x0000000004ce8400":[],experiment:[],"0x0000000004bf7400":[],"0x0000000004ce98c8":[],burst:1,drake:1,nether:1,mani:4,feugen:[],discard_al:[],"0x0000000004324268":[],divinespirit:[],"0x0000000004e77268":[],mana:[3,4,1],undamag:[],find_minion_spell_target:[],bloodsail:1,next:3,increase_armor:3,sight:1,swordsmith:1,"0x0000000003028b98":[],could:[3,4],him:[],flurri:1,"0x0000000004e7c488":[],holi:1,can:[3,4,5,2],hit:4,moonfir:1,logic:[3,4],lightwel:1,efect:3,"0x0000000002fa24c8":[],owl:1,shouldn:3,mindvis:[],"0x0000000002c9d4b8":[],krush:1,"0x0000000002f5aad8":[],fan:1,befor:[3,4,5],textiobas:5,"0x000000000470ed90":[],swap:[],bootybaybodyguard:[],cairn:1,"0x000000000617dea0":[],creation:[3,4],"0x00000000042c5268":[],effective_spell_damag:[3,4],shadowform:1,ravenholdtassassin:[],lambda:[3,4],joke_told:3,bai:1,antonida:1,arcanit:1,exce:3,bloodlust:1,youngpriestess:4,shadowmad:3,banana:4,ancientoflor:[],"0x000000000482e158":[],repeat:4,"0x0000000002ff6e58":[],side:3,counterspel:1,cobra:1,unbind:[3,4],rtype:3,argu:1,give_divine_shield:[],"0x00000000043aa9d8":[],"0x0000000004320620":[],consult:3,river:1,iron:1,selector:4,"0x0000000004e71f28":[],per:4,structur:[3,5],cabal:[4,1],"0x00000000042c4ea0":[],contradict:4,silvermoon:1,"0x0000000004b6cae8":[],ghoul:1,juggler:[3,1],"0x00000000045a3158":[],himself:[],"0x0000000002f42848":[],fordr:1,mukla:[4,1],overridden:3,fileio:[],"0x0000000002f8adb8":[],argent:1,adventur:1,"0x0000000004631840":[],detail:[3,4,5],specifi:[3,4],"0x00000000062c2620":[],bot:[4,1,2],second:4,"0x00000000042c6620":[],icel:[],crusad:1,bloodfen:1,"0x00000000044568c8":[],"0x000000000452fe18":[],"0x0000000004e4f9d8":[],some:[3,4],until:[3,4],truesilv:1,advanc:4,health:[3,4],"0x0000000004d998c8":[],faeri:1,paramt:[],happen:[3,4],turn_end:[],headcrack:1,down:4,create_minion:[3,4],highman:1,arg:3,find:4,edwin:1,featur:4,farseer:1,dead:[3,1],earth:1,remain:[],"0x0000000002c39d28":[],card_lookup:3,growth:1,priestess_of_elun:[],singl:4,"0x0000000004373ea0":[],def:[3,4],mimiron:[],"0x0000000002fb8f18":[],wyrm:1,scarlet:1,none:[3,4,6,5],"0x0000000006164598":[],modifi:[3,5],dev:[],"0x000000000492a7b8":[],rarity_nam:6,born:3,frostwolf:1,"0x00000000047540d0":[],first:[3,4,1],ssc:[],paramet:[3,4,5],rare:[3,4,6],sphinx:[],"0x00000000045d2158":[],bound:[3,4],bounc:3,hound:1,unbound:1,magi:1,attack:[3,4],proxycard:[],"0x00000000042eeea0":[],"0x0000000004355620":[],hasn:4,ether:1,throw_banana:4,randint:[],hungri:1,affected_play:[],essenti:4,gem:4,arena:1,proxycharact:[],barrel:4,"0x0000000004bfb8c8":[],lobber:[],dragonhawk:1,player:[3,0,1,4,2],weapon:[],wildgrowth:[],dream:[],str:[3,5],malygo:1,squir:1,dread:1,just:4,upgrad:1,everi:[3,4,1,2],shatter:1,etc:[3,4],top:4,tor:1,"0x00000000042fc268":[],forceofnatur:[],baron:1,"0x0000000004175a60":[],"0x0000000004c978c8":[],"return":[3,4,5],"0x000000000460d950":[],name:[3,4],about:[3,4],demonfir:1,twilightdrak:[],mirror:1,eviscer:1,simeltan:[],avengingwrath:[],sergeant:1,secretclass:[],murloc:[1,6],leper:1,"0x0000000002f76e68":[],either:[3,4,5],acid:1,how:[3,4,1],"0x00000000045e3ea0":[],com:[],event:[3,4],space:4,machin:2,modif:5,fire:[4,1],"0x0000000004632400":[],"0x00000000043a9268":[],"0x0000000003083168":[],mail:4,magmarag:[],"0x00000000057bcd08":[],"0x00000000049270d0":[],"0x0000000004b6a510":[],"0x0000000004590d08":[],optim:1,"0x0000000004cb2510":[],block:1,deck:[3,4,1,2],"final":4,critic:3,"0x00000000046342f0":[],playandattackag:4,tinkmast:1,agent:[],"0x0000000005550378":[],"0x0000000005dc6ea0":[],wherea:[3,4],turnend:4,"0x0000000004345268":[],enforc:1,"function":[3,4,5],yet:4,frostbolt:1,coin:4,"0x00000000048c18c8":[],"0x0000000004734950":[],properti:4,"0x000000000435e9d8":[],latter:3,"0x0000000004532e18":[],druidoftheclaw:[],"0x0000000005dca2f0":[],seer:1,physical_damag:[],northshir:1,greenskin:1,element:[4,1],actual:3,"0x0000000004708c80":[],"0x00000000049350d0":[],minion_typ:[3,4,6],seed:1,"0x0000000004cab488":[],"0x0000000005d98488":[],isn:5,thirti:4,"0x0000000002f02848":[],ongo:4,"0x000000000433a620":[],corehound:[],reckless:1,explos:1,imag:1,novic:1,assum:[3,4,1,5],crab:1,ogr:1,pirat:6,"0x0000000004321ea0":[],whatev:4,maexxna:1,"0x000000000431f268":[],add_effect:3,destroy_own_cryst:[],"0x0000000004b6c840":[],arathi:1,"0x00000000030c4258":[],veri:[3,4],heal_thre:[],non:[3,4],aspect:3,invok:4,wolf:1,light:1,spell_target:3,compact:5,random_draw:3,appropri:[3,4],"0x00000000043a4ea0":[],big:1,everyth:4,lepergnom:[],word:[4,1],take:[3,4,1],"0x0000000004e01d08":[],work:[4,2],"0x00000000046327b8":[],"0x0000000004620d90":[],tauren:1,pyromanc:1,hyena:1,"0x0000000004cb4840":[],overload:3,voodoo:1,savag:1,heathston:3,human:3,"0x0000000002bf30c8":[],card_typ:[],both:3,"0x00000000046f9d90":[],owner:3,"0x0000000004851950":[],"0x000000000433a9d8":[],recombobul:[],haunt:1,activ:[3,4],correctli:3,"0x0000000002f86e58":[],blessingofwisdom:[],lightn:1,arcanemissil:[],dictat:4,dust:1,manastorm:1,"0x00000000045d9d90":[],"0x0000000004e0fa60":[],neg:3,reward:[],do_turn:0,friendli:4,extend:4,"0x00000000060e6f28":[],pain:1,attack_pow:[3,4],frostwolfgrunt:[],split:[],call:[3,4,5],"new":[],set_health_to:3,shade:[],shadowwordpain:[],kill:[3,1],valu:3,fatal:[],variou:[3,4],"0x0000000004e55730":[],waterelement:[],"0x00000000047abd08":[],ragnaro:1,"0x0000000004ea5510":[],thrallmarfars:[],"0x000000000459b950":[],replayexcept:[],"int":3,remove_minion:3,"0x0000000004cdf950":[],org:[],nova:1,warriorpow:[],wiki:4,engin:1,warrior:[1,6],decrease_health:3,manipul:1,found:[4,5],deathw:1,"0x0000000004c9cea0":[],priest:[],argument:[3,4],behavior:3,snake:1,"0x000000000434c620":[],let:4,perform:[4,5],firebal:1,promot:[],bless:1,to_output_str:[],direct:[3,4,5],paladinpow:[],swamp:1,mindblast:[],associ:[3,4,5],cabalshadowpriest:4,boulderfist:1,secretcard:[3,4],tron:[],"0x000000000310c2f8":[],twilight:1,voidcal:1,"0x0000000002f9a5a8":[],bomber:1,base_attack:3,doom:1,"0x0000000002ffbd78":[],belong:3,"0x0000000004337620":[],blingtron:[],process:[3,2],three:4,"0x0000000004e55488":[],than:[3,4],begin:4,geomanc:1,futur:5,"0x00000000030939f8":[],proper:4,"0x00000000048d0d90":[],alpha:1,although:[4,5],"0x0000000006169598":[],signatur:3,shamanpow:[],trap:1,format:[3,4,5],savannah:1,gvg:2,race:[],chow:[],spell_cast:4,readi:5,argentcommand:[],place:3,"_test":4,"0x0000000004c98ea0":[],list:[3,4,1],divin:[3,1],sea:1,type:[],creeper:1,see:[3,4,5],"0x0000000004313620":[],stormwind:1,total:3,option:[3,0,4],sen:1,automat:[3,4],addit:4,two:[3,4],set:[3,4],blessingofmight:[],"0x00000000042c7268":[],danc:1,bestial:1,ensur:[3,4],"0x000000000303ac88":[],lai:1,reincarn:1,consecr:1,"0x000000000435e620":[],"0x0000000004c73a60":[],ironfurgrizzli:[],calcul:[3,4],"0x0000000002bc01a8":[],imp:1,record_random:[],bain:[],set_opt:[],cardtestingag:4,placement:3,http:[],thing:4,chararacter_class:[],gurubashi:1,should:[3,4,5],record_pow:[],under:[],amani:[3,1],want:[3,4],"0x0000000004628950":[],"0x0000000002c86558":[],azzinoth:4,tiger:1,complet:[4,5],record_kept_index:[],complex:4,flametongu:1,justic:[3,1],"0x0000000004336ea0":[],expert:[],bane:1,rager:1,randomag:0,"0x00000000047a7268":[],"0x00000000048a40d0":[],ironforg:1,snipe:1,alwai:[3,4],devil:1,warlead:1,quickstart:[],hammer:1,lowercas:4,current:[3,4],perman:3,fieri:1,koboldgeomanc:[],correspond:3,fast:4,gain:[],calculate_max_health:3,action:[3,4,5],"0x00000000057bba60":[],"0x0000000004333ea0":[],cogmast:[],shan:1,blessingofk:[],sure:[3,4],flamestrik:1,nobl:1,druidpow:[],"0x000000000431a9d8":[],stamped:1,record_power_target:[],toctre:[],combin:5,frostnova:[],frost:1,input:4,stranglethorn:1,"0x0000000004862e18":[],wraith:1,chillwind:1,"0x0000000003061788":[],"0x000000000432a2f0":[],uniqu:3,"0x000000000437fea0":[],bloodfenraptor:[],rocket:1,lordofthearena:[],create_a_gam:5,normal:4,sprint:1,"0x0000000004cb4ae8":[],priestpow:[],start:[3,4,5],nightblad:1,destroy_target:[],"0x00000000047a0c80":[],unstabl:[4,1],used_wind_furi:[],clariti:4,targeting_func:3,rivercrocolisk:[],"0x0000000004339268":[],cult:1,your:4,design:[4,5],json:[4,5],"0x0000000004d978c8":[],"0x0000000006166d08":[],transform:[],file:[4,5],"0x00000000053aa9d8":[],new_gam:3,discard_two:[],"0x0000000004325ea0":[],humil:1,flare:1,board:[3,4],holysmit:[],flame_imp:[],"0x00000000062bca60":[],enrag:[3,4],backstab:1,theblackknight:[],superclass:3,give_enemy_cryst:[],pilot:[],einhorn:[],unit:[],voidwalk:1,like:[3,4],blizzard:[1,2],look:4,loot:1,separ:4,"class":[3,0,6,4,5],"0x000000000449a8c8":[],chieftain:1,"0x0000000004b6b400":[],deck2:[],shall:4,locat:[3,5],deck1:[],"0x00000000041746a8":[],"0x0000000002cd0658":[],far:1,flake8:4,baseio:[],unfrozen:3,coil:1,holyfir:[],fals:3,deactiv:[3,4],smith:1,group:4,"0x00000000062bee18":[],"0x00000000045da8c8":[],"0x00000000042c69d8":[],write_replai:[],thei:[3,4,1],reduc:4,"0x0000000002c35748":[],choose_opt:0,entiti:1,enough:3,stormrag:[4,1],frozen:3,leeroi:1,darkirondwarf:[],dragonl:1,minioneffect:3,doomsay:1,darkscal:1,"0x000000000426c268":[],done:[3,4],"0x0000000002cd6558":[],"0x0000000004336268":[],abusiveserg:[],deckhand:1,"0x0000000004256ea0":[],elun:1,copi:[3,4],echo:[],vision:1,remove_from_board:3,natur:[3,1],inventor:1,track:[1,5],"0x0000000004522950":[],belcher:1,scarletcrusad:[],goblin:2,spell_card:[],"0x000000000435aea0":[],random:[4,1],guardian_of_k:[],former:3,"0x0000000004c918c8":[],eventtarget:3,verifi:3,windrunn:1,set_gam:[],stop:3,impli:4,unleash:1,"0x0000000004e01a60":[],dragon:[1,6],random_amount:3,shock:1,recklessrocket:[],back:[],undertak:[],replayact:[],deathlord:1,add_board_effect:[],relat:3,savageri:1,savageroar:[],"0x00000000047980d0":[],swipe:1,stonetusk:1,"0x0000000004e51d08":[],check:3,lost:[],doubl:[],"0x00000000043559d8":[],onli:[3,4],target:[],choic:3,bind:[3,4],"0x0000000002c15ba8":[],lose:[],thi:[3,4,1,5,2],"0x000000000432da60":[],blessedchampion:[],add_to_board:3,elvenarch:[],basic:4,holynova:[],squirrel:[],makeup:4,thuzad:[],jenkin:1,"0x0000000004378620":[],oppon:3,rampag:1,research:4,blade:1,warlord:1,buzzard:1,card_nam:3,"__init__":[3,0,4,5],captain:1,temporari:3,hogger:[4,1],rivendar:1,"static":6,"0x0000000005842ea0":[],"0x0000000004ea9ae8":[],"0x000000000300ca38":[],"0x0000000004c78950":[],soul:1,"0x0000000004227950":[],"0x0000000004c7b950":[],evalu:3,kor:1,templ:1,distinct:3,crystal:[],consist:[3,4,1],multi:1,contributor:4,minion_damag:[],shaman:6,seri:5,from_str:6,firelord:1,chosen:3,sequenc:4,add_adjacency_aura:[],entir:4,"0x0000000004586598":[],show:[],info:5,prevent:[],"0x00000000042c8620":[],bloodmag:1,game:[],innerfir:[],ironforgerifleman:[],"0x000000000308e478":[],character_ref:[],wargolem:[],warden:[4,1],geddon:1,netplai:5,bonus:3,commonli:4,emperor:1,faeriedragon:[],"0x0000000003095698":[],earlier:3,necessari:[3,4],knife:[3,1],rather:4,ref_nam:3,succe:3,travi:4,"boolean":[3,4],can_draw:3,"0x0000000004307ea0":[],determin:[3,4,2],changehealth:4,"0x00000000046e0950":[],missil:1,filter_funct:[],minionact:[],"0x00000000045c4d08":[],"0x0000000002f3d898":[],"0x0000000002fc6e68":[],"0x00000000043aa620":[],"0x0000000002c88458":[],whirlwind:1,unstablemagick:4,contain:[],mirrorent:[],"0x0000000005c350d0":[],circleofh:[],nozdormu:1,shot:1,find_hero_target:[],time:[],"try":[3,4],"0x0000000004453c80":[],wolfrid:1,"0x000000000449dc80":[],pattern:3,gruul:1,"0x00000000053a8268":[],"0x00000000043139d8":[],issu:4,battl:1,to_str:6,full:3,jin:1,"long":[4,1],scaveng:1,after_minion_ad:3,ashbring:[],"0x0000000006169158":[],windfuryharpi:[],find_friendly_minion_spell_target:[],"0x0000000004130268":[],infiltr:1,caus:[3,4],tidehunt:1,self:[3,4],bolt:1,line:5,deal_two_damag:[],panther:1,unittest:4,denot:3,frog:[],assertequ:4,windlord:1,made:[3,4],test:[],help:4,"0x00000000046c9d08":[],healer:1,instructor:4,"0x0000000003091788":[],young:[4,1],rariti:[3,4],"0x00000000043469d8":[],output:3,class_nam:6,"0x0000000004b6b048":[],"0x0000000004574950":[],sap:1,stoneskin:1,defia:1,silverbackpatriarch:[],chang:[3,4],manaaddict:[],defin:4,ring:1,mai:1,doctor:1,inherit:3,stranglethorntig:[],micro:[],grove:1,sever:5,overwhelm:1,mechwarp:[],subclass:[3,4],"0x0000000004b6b7b8":[],hammerofwrath:[],"0x0000000004d349d8":[],purpl:4,toss:4,stat:[],less:[3,4],dark:1,builtin:[3,0,6,5],"0x0000000002ff09b8":[],suppos:4,alchemist:1,stealth:[3,4],playback:5,encapsul:5,cleav:1,water:1,clear:4,gnomish:1,divine_shield:3,warglaiv:4,bind_onc:[3,4],"0x0000000002c56558":[],icebarri:[],stormforg:1,venturecomercenari:3,shadowstep:1,allset:4,find_minion_battlecry_target:[],particular:4,where:[3,4,5],row:[],cho:1,"0x0000000002f98258":[],draw_card:[],portal:1,youngdragonhawk:[],"0x0000000004c70730":[],"0x0000000004316d90":[],faceless:1,"0x0000000004603d08":[],boulderfistogr:[],"0x00000000060e18c8":[],"0x00000000047af400":[],silvermoonguardian:[],paladin:[],sky:[],massdispel:[],zero:[3,4],sneed:[],awesom:[],terror:1,"0x00000000030a1c78":[],pit_lord:[],armor:[],"0x0000000005d980d0":[],hex:1,"0x0000000004c8e400":[],sunwalk:1,zombi:[],effect:[3,4,1],tirion:1,lore:1,lord:1,which:[3,4,5,2],"0x0000000002fe8dd8":[],simpli:[3,4],addict:1,totem:[4,1,6],"0x0000000004631d90":[],compos:4,weblord:1,shatteredsuncler:[],tabl:[],change_attack_to_on:[],minioncard:[3,4],"0x0000000004e4e730":[],"0x0000000002bc6558":[],"0x000000000470e0d0":[],to_output:[],noblesacrific:[],gnoll:[],windspeak:1,wisp:1,"0x0000000004e009d8":[],googl:[],longer:3,newli:3,given:3,tundra:1,loothoard:[],apostroph:4,util:4,"0x000000000474ec80":[],black:1,you:4,tinkertown:[],"0x00000000047a40d0":[],precis:3,keeper:1,folder:4,shiv:1,defend:1,when:[3,4,5],affect:[3,4,5],user:3,mechan:1,card_statu:[],standard:[3,4],roar:1,abl:3,manawyrm:[],soulfir:1,prepar:[1,5],possibl:[3,4,2],filenam:5,discuss:4,simultan:3,turn:[3,4,1],choose_index:0,more:[3,4,5],handl:[3,4],character_class:[3,4,6],"0x00000000048cc1e0":[],mindcontrol:[],power:[],gelbin:1,arcaneintellect:[],parrot:1,"0x00000000043789d8":[],"0x000000000421a268":[],adjust:3,deathrattl:[3,4],archmageantonida:[],can_be_attack:3,appli:3,brawl:1,"0x0000000002da2078":[],"0x0000000003053168":[],warlock:[4,6],old:1,computer:4,control:1,neutral:[],been:[3,4,5,2],predict:[],"0x000000000312fbd8":[],bow:1,shieldmasta:1,"0x00000000046bde18":[],card_refer:[],raider:1,sort:1,"0x000000000422fe18":[],onto:3,random_choic:3,excessmana:[],"0x0000000004e0fd08":[],"0x00000000042b18c8":[],demolish:1,innerv:1,through:[3,4],illidan:1,warglaiveofazzinoth:4,"0x000000000431d268":[],"0x00000000048cf950":[],velen:1,watcher:1,blademast:1,discard:3,azuredrak:[],load:5,updat:3,"_reveal":4,replay_format:[],minion:[],"0x00000000060e7378":[],rval:[],boar:1,guardianofk:4,ancient:1,hssim:[],"0x0000000004346620":[],bodyguard:1,jungl:1,set_attack_to:3,"0x0000000004715950":[],ironbark:1,"0x000000000444eb70":[],death:[],"0x00000000046ddb70":[],"0x0000000004491488":3,jaraxxuspow:[],scientist:[],"0x0000000004745e18":[],pyroblast:1,wast:3,hunterpow:[],"0x0000000005843ea0":[],used_windfuri:3,"0x00000000030055a8":[],footman:1,longbow:1,"0x00000000046dd1e0":[],joke:3,barrier:1,card_drawn:[],who:[3,4],my_replai:5,life:[3,1],itself:[3,2],inner:1,"0x0000000002c32848":[],disguis:1,adapt:[],them:2,markofthewild:[],mindspik:[],term:4,layonhand:[],spare:[],below:3,charact:[3,4],core:1,"0x0000000002f4d198":[],object:[],knight:1,whichev:4,lightspawn:1,bought:[],whelp:[],posit:3,"0x0000000004310268":[],mindshatt:[],injur:1,redempt:1,becaus:[3,4],elsewher:[],sheep:[],healingtouch:[],jone:1,enemyspelltestingag:4,"0x000000000431e620":[],finkl:[],anub:1,pep8:4,gain_one_health_for_each_card_in_hand:[],previou:5,war:1,ironbeakowl:[],dalaran:1,"0x0000000002fb22d8":[],wai:4,shield:[3,1],somewher:4,certain:4,choos:[3,4],further:5,replay_fil:[],whether:3,holywrath:[],gold:[],constructor:[],auchenai:1,silver:1,make:4,class_numb:6,accompani:4,polymorph:1,gener:[3,4],cardnam:4,were:[3,4,1],"0x0000000004e0d9d8":[],form:[],sai:3,lanc:1,acolyt:1,"0x0000000004751f28":[],those:4,alarm:1,randomli:[],twice:[],csv:[],youth:1,abus:1,mark:1,raid:1,priestess:[4,1],trigger:[3,4],spectral:1,convent:4,rais:[],reveal:[3,4],game_ov:3,harvest:1,blob:[],aveng:1,"0x0000000004cde488":[],repair:[],join:4,"0x0000000002c8f848":[],listen:4,"while":4,"0x0000000004496e18":[],write_json:5,gnomishinventor:[],attribut:[],decrease_temp_attack:[],nerub:1,librari:4,unlik:4,smite:1,reversibleact:3,pint:1,flame:1,much:3,spirit:[3,1],timber:1,ravenholdt:1,read_json:5,edg:4,darkscaleheal:[],naxxrama:[],run:[4,1],all:[6,2,3,1,4,5],"0x000000000300bd08":[],doomguard:1,camelcas:4,"0x00000000030e9c28":[],section:4,counter:[],simul:2,ironfur:1,"0x00000000043209d8":[],"0x0000000004e51a60":[],silenc:[3,1],gameexcept:3,"0x0000000004342ea0":[],"0x0000000004ea77b8":[],"0x000000000464c1e0":[],"0x0000000003029df8":[],wrath:1,turn_complet:[],choose_target:[3,0],card_rar:[3,4,6],"0x00000000046b9598":[],written:[4,5],"0x000000000309b578":[],auction:1,most:4,giant:[1,6],github:4,sludg:1,claw:1,spell_damag:3,anim:1,"0x0000000004cae950":[],exact:[],gnome:[1,2],"0x0000000004319268":[],"__init":[],find_friendly_minion_battlecry_target:[],technician:[],even:4,ironbeak:1,ever:4,"0x0000000004584a60":[],effect_typ:[],fen:1,"0x0000000004131620":[],whle:[],earthenringfars:[],silverback:1,system:[4,2],"0x0000000006182d90":[],grimscal:1,test_hoggersmash:4,glean:4,from:[3,4,2],"0x00000000048a5268":[],"0x000000000464f950":[],type_nam:6,southsea:1,goldshirefootman:[],"0x00000000042c0ea0":[],"0x0000000004c979d8":[],proof:5,"0x0000000004d1f8c8":[],"0x00000000047a7598":[],"0x000000000449a378":3,"0x00000000046e0378":[],prior:2,"0x00000000031be838":[],result:[3,2],record_turn_end:[],"0x00000000047111e0":[],filter:[3,4],ask:3,handler:3,somehow:5,jaraxxu:1,iceblock:[],rock:[],increase_armour:[],"0x0000000004316950":[],pass:[3,4],construct:[],spellact:[],"0x00000000046d9d90":[],aldorpeacekeep:[],invent:[],can_attack:3,"0x0000000004578158":[],branch:4,instanc:[3,4],flesheat:1,random_func:[],search:2,"0x0000000004c95400":[],weaponsmith:1,overrid:[3,4],"0x000000000458cd08":[],"0x0000000002fed338":[],present:[4,5],save_deck:[],find_battlecry_target:[],repositori:4,size:1,applic:4,battlefield:[],oracl:1,"0x0000000004ea9840":[],"0x000000000432b620":[],base:[3,0,6,4,5],amount:3,intellect:1,stormpik:1,"true":3,patriarch:1,powerwordshield:[],freez:[3,1],"0x000000000461b7b8":[],booti:1,entri:4,knive:1,"0x0000000002c93cb8":[],avail:[3,4],webspinn:1,gargoyl:1,requir:[3,4],"0x00000000042f9ea0":[],darkscale_heal:[],sacrifici:1,common:[3,4,6],minion_plac:3,style:4,barreltoss:4,keeperofthegrov:[],special:6,other:[3,4],health_delta:3,bindabl:3,bloodmagethalno:[],python:4,onc:[3,4,5],mortal:1,elven:1,find_enemy_hero_battlecry_target:[],code:4,randomselector:4,"0x0000000003069198":[],senjinshieldmasta:[],protector:1,archer:1,curs:[],tide:1,lord_jaraxxu:6,assembl:3,among:4,mega:[],aura:[3,4],constrain:4,own:[3,4],patient:1,alexstrasza:1,"0x000000000554e620":[],data:[4,5,2],undoc:[],shadow:[4,1],"0x00000000047af7b8":[],tech:1,cultist:[],record_attack:[],kidnapp:1,abov:[3,4],clockwork:[],monkei:4,stalagg:[],lorewalk:1,heavi:4,eaglehorn:1,head:[],arcanegolem:[],train:2,"0x000000000432d6a8":[],max:3,"0x0000000004591158":[],worgeninfiltr:[],"0x0000000004713c80":[],mogu:1,"import":[3,4],shadowflam:1,anoth:3,forest:1,"0x0000000004754400":[],rage:1,"0x000000000554b6a8":[],purpos:[3,2],tidecal:1,directori:4,houndmast:1,other_play:4,powerofthewild:[],mass:1,mad:1,explod:[],sorcer:1,"0x00000000043ad620":[],"0x000000000430d9d8":[],harpi:1,druid:[],"0x00000000058409d8":[],resolv:[],mind:[4,1],mine:2,hahaha:3,"0x0000000004e52730":[],organ:4,test_cardnam:4,find_power_target:3,"0x000000000434c9d8":[],"0x000000000431e9d8":[],togeth:2,repres:[3,5],enemi:[4,1],chanc:[],murlocraid:[],inform:4,argentsquir:[],blood:1,brought:3,arcaneexplos:[],egg:1,sens:1,straightforward:4,"0x0000000004314598":[],slam:1,eaglehornbow:4,"0x0000000004c77488":[],is_spel:3,rockbit:1,"super":[3,4],also:[3,4,5],across:3,"0x0000000004309ea0":[],"0x00000000043ad9d8":[],raptor:1,sinist:1,base_h:3,"0x0000000004217ea0":[],integ:3,adjac:[],can_us:3,etherealarcanist:[],"0x0000000004cad950":[],"0x0000000002ff8dd8":[],els:[3,4],hunter:[4,1,6],deadli:1,add:[3,4],"0x000000000461a7b8":[],wild:1,equal:1,attach:3,hellfir:1,ringlead:1,"0x0000000004327f28":[],"0x0000000004d96400":[],record_option_chosen:[],"0x0000000002c89468":[],"_is_spell_target":3,thaddiu:[],heal_two:[],cleric:1,murk:1,forum:[],bomb:[],index:[3,2],magma:1,becom:[],"0x00000000045dad90":[],"0x000000000301fdc8":[],corrupt:[4,1],repent:1,"default":[3,4,5],kel:[],get:[4,5],chord:[],sunfuri:1,execut:1,assassin:1,kirin:1,blast:1,ignor:3,correct:3,hsreplai:5,"0x0000000003044958":[],"0x00000000046241e0":[],manner:4,protect:1,snapjaw:[4,1],especi:4,print:3,circl:1,spellcard:3,felguard:1,between:3,might:[3,4,1],taunt:[3,4],"0x000000000432a268":[],infern:1,number:[3,4],yeti:1,whole:4,teacher:1,five:4,"0x00000000060e4c80":[],rememb:5,"0x0000000005dcc6a8":[],bluegillwarrior:[],doesn:[3,4],kron:1,"0x0000000004d218c8":[],"0x0000000004c729d8":[],donothingbot:[],player_damag:[],same:3,fang:3,replayfil:[],change_temp_attack:3,"0x0000000004e54a60":[],mekkatorqu:1,mana_cost:3,mogushanwarden:4,savedgam:[],scale:3,"0x0000000004e6cae8":[],"0x000000000303bb18":[],harrison:1,mean:[4,1],hoarder:1,"0x0000000004d2d400":[],ancestr:1,"0x00000000045a2d08":[],unless:[3,4],"0x00000000053a2ea0":[],compat:5,request:4,brewmast:1,multipl:4,find_enemy_minion_spell_target:[],append:4,meanwhil:4,spite:1,senseless:3,beast:[4,1,6],against:[4,2],"0x000000000421b620":[],create_weapon:[3,4],"0x0000000002f70e18":[],new_own:3,holylight:[],minion_numb:6,four:4,cast:[],tag:[3,4],draw:3,surviv:[],new_attack:3,asid:4,doomhamm:1,gadgetzan:1,"0x00000000048a5598":[],wind_furi:[],add_aura:3,tri:4,duplic:1,physic:3,"0x00000000043a8ea0":[],kodo:1,"0x000000000426d620":[],warcraft:[],pull:4,grizzli:1,storm:1,respect:3,"0x0000000004e539d8":[],"0x0000000004535950":[],earthen:1,"throw":4,interact:4,prophet:1,heal:[3,1],find_spell_target:4,"0x0000000002c3d4b8":[],target_func:3,danielyul:[],pick:3,"0x00000000042b2b70":[],weaponcard:[3,4],thermaplugg:[],"0x000000000304d708":[],die:3,weaponclass:[],thrallmar:1,"0x00000000048c3d90":[],cold:1,"0x0000000004d2f6a8":[],have:[3,4,2],"0x00000000030273f8":[],taken:[3,4,1],predictablebot:[],"0x00000000031306f8":[],sacrific:1,deal_one_damage_all_charact:[],take_control_of_minion:4,anyth:[3,4],"0x000000000421b9d8":[],chicken:1,"0x0000000004c908c8":[],"0x0000000004377268":[],now:[],did:[3,4],attackact:[],text:3,"0x000000000473d158":[],cannot:3,won:3,thalno:1,epic:[4,6]}})