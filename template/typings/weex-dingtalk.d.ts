type APIParamType = any;

interface APIbiz{
   customContact:APIBIZcustomContact
   util:APIBIZutil
   telephone:APIBIZtelephone
   contact:APIBIZcontact
   ding:APIBIZding
   alipay:APIBIZalipay
   redenvelop:APIBIZredenvelop
   auth:APIBIZauth
   map:APIBIZmap
   event:APIBIZevent
   cspace:APIBIZcspace
   chat:APIBIZchat
   user:APIBIZuser
   calendar:APIBIZcalendar
   intent:APIBIZintent
   notify:APIBIZnotify
   navigation:APIBIZnavigation
   microApp:APIBIZmicroApp
   clipboardData:APIBIZclipboardData
} 

interface APIdevice{
   notification:APIDEVICEnotification
   launcher:APIDEVICElauncher
   audio:APIDEVICEaudio
   geolocation:APIDEVICEgeolocation
   accelerometer:APIDEVICEaccelerometer
   base:APIDEVICEbase
   connection:APIDEVICEconnection
} 

interface APIspecial{
   native:APISPECIALnative
} 

interface APIruntime{
   permission:APIRUNTIMEpermission
   channel:APIRUNTIMEchannel
   monitor:APIRUNTIMEmonitor
   getModules(parameter:APIParamType):void;
   info(parameter:APIParamType):void;
   interceptNavTitle(parameter:APIParamType):void;
   recoverNavTitle(parameter:APIParamType):void;
   authorizeCookie:APIRUNTIMEauthorizeCookie
   message:APIRUNTIMEmessage
} 

interface APIinternal{
   ATMBle:APIINTERNALATMBle
   dingCard:APIINTERNALdingCard
   pageLink:APIINTERNALpageLink
   hpm:APIINTERNALhpm
   log:APIINTERNALlog
   beacon:APIINTERNALbeacon
   request:APIINTERNALrequest
   notify:APIINTERNALnotify
   certify:APIINTERNALcertify
   createOrg:APIINTERNALcreateOrg
   schema:APIINTERNALschema
   host:APIINTERNALhost
   attend:APIINTERNALattend
   chat:APIINTERNALchat
   contact:APIINTERNALcontact
   channel:APIINTERNALchannel
   util:APIINTERNALutil
   auth:APIINTERNALauth
   lwp:APIINTERNALlwp
   phoneContact:APIINTERNALphoneContact
   health:APIINTERNALhealth
   user:APIINTERNALuser
   microapp:APIINTERNALmicroapp
} 

interface APIutil{
   localStorage:APIUTILlocalStorage
   domainStorage:APIUTILdomainStorage
} 

interface APIui{
   nav:APIUInav
   appLink:APIUIappLink
   webViewBounce:APIUIwebViewBounce
   tab:APIUItab
   pullToRefresh:APIUIpullToRefresh
   input:APIUIinput
} 

interface APItest{
   ui:APITESTui
} 

interface APIservice{
   request:APISERVICErequest
} 

interface APIchannel{
   open:APICHANNELopen
   permission:APICHANNELpermission
} 

interface APIlegacy{
   showMenu(parameter:APIParamType):void;
   postDing(parameter:APIParamType):void;
   createConference(parameter:APIParamType):void;
   invokeShare(parameter:APIParamType):void;
   ut(parameter:APIParamType):void;
   webviewClose(parameter:APIParamType):void;
   saveUserValue(parameter:APIParamType):void;
   updateUserValue(parameter:APIParamType):void;
   getUserValue(parameter:APIParamType):void;
   setAccount(parameter:APIParamType):void;
   getAccount(parameter:APIParamType):void;
   webLog(parameter:APIParamType):void;
} 

interface APIBIZcustomContact{
   multipleChoose(parameter:APIParamType):void;
   choose(parameter:APIParamType):void;
}

interface APIBIZutil{
   previewImage(parameter:APIParamType):void;
   qrcode(parameter:APIParamType):void;
   scan(parameter:APIParamType):void;
   chosen(parameter:APIParamType):void;
   multiSelect(parameter:APIParamType):void;
   datepicker(parameter:APIParamType):void;
   timepicker(parameter:APIParamType):void;
   datetimepicker(parameter:APIParamType):void;
   timestamp(parameter:APIParamType):void;
   stickPage(parameter:APIParamType):void;
   scanCard(parameter:APIParamType):void;
   encrypt(parameter:APIParamType):void;
   decrypt(parameter:APIParamType):void;
   fetchFileData(parameter:APIParamType):void;
   recordVideoToUpload(parameter:APIParamType):void;
   uploadImage(parameter:APIParamType):void;
   uploadImageFromCamera(parameter:APIParamType):void;
   fetchImageData(parameter:APIParamType):void;
   share(parameter:APIParamType):void;
   uploadAttachment(parameter:APIParamType):void;
   ut(parameter:APIParamType):void;
   warn(parameter:APIParamType):void;
   vip(parameter:APIParamType):void;
   openLink(parameter:APIParamType):void;
   open(parameter:APIParamType):void;
   openFloatWindow(parameter:APIParamType):void;
   presentWindow(parameter:APIParamType):void;
}

interface APIBIZtelephone{
   showCallMenu(parameter:APIParamType):void;
   call(parameter:APIParamType):void;
}

interface APIBIZcontact{
   complexPicker(parameter:APIParamType):void;
   setRule(parameter:APIParamType):void;
   departmentsPicker(parameter:APIParamType):void;
   chooseMobileContacts(parameter:APIParamType):void;
   addUserForm(parameter:APIParamType):void;
   externalEditForm(parameter:APIParamType):void;
   choose(parameter:APIParamType):void;
   complexChoose(parameter:APIParamType):void;
   createGroup(parameter:APIParamType):void;
   pickCustomer(parameter:APIParamType):void;
   manageContactAlert(parameter:APIParamType):void;
   getMobileContact(parameter:APIParamType):void;
   changeCustomerFollower(parameter:APIParamType):void;
   externalComplexPicker(parameter:APIParamType):void;
   complexSelectedPicker(parameter:APIParamType):void;
   departmentsSelectedPicker(parameter:APIParamType):void;
}

interface APIBIZding{
   post(parameter:APIParamType):void;
}

interface APIBIZalipay{
   pay(parameter:APIParamType):void;
   auth(parameter:APIParamType):void;
}

interface APIBIZredenvelop{
   sendEnterpriseRedEnvelop(parameter:APIParamType):void;
   sendNormalRedEnvelop(parameter:APIParamType):void;
}

interface APIBIZauth{
   requestAuthCode(parameter:APIParamType):void;
}

interface APIBIZmap{
   search(parameter:APIParamType):void;
   locate(parameter:APIParamType):void;
   view(parameter:APIParamType):void;
   searchRoute(parameter:APIParamType):void;
}

interface APIBIZevent{
   notifyWeex(parameter:APIParamType):void;
}

interface APIBIZcspace{
   chooseSpaceDir(parameter:APIParamType):void;
   preview(parameter:APIParamType):void;
   copy(parameter:APIParamType):void;
   saveFile(parameter:APIParamType):void;
}

interface APIBIZchat{
   chooseConversation(parameter:APIParamType):void;
   pickConversation(parameter:APIParamType):void;
   open(parameter:APIParamType):void;
   chooseConversationByCorpId(parameter:APIParamType):void;
   toConversation(parameter:APIParamType):void;
   openSingleChat(parameter:APIParamType):void;
   getConversationInfo(parameter:APIParamType):void;
   locationChatMessage(parameter:APIParamType):void;
}

interface APIBIZuser{
   get(parameter:APIParamType):void;
   secretID(parameter:APIParamType):void;
}

interface APIBIZcalendar{
   chooseOneDay(parameter:APIParamType):void;
   chooseHalfDay(parameter:APIParamType):void;
   chooseDateTime(parameter:APIParamType):void;
   chooseInterval(parameter:APIParamType):void;
}

interface APIBIZintent{
   fetchData(parameter:APIParamType):void;
}

interface APIBIZnotify{
   send(parameter:APIParamType):void;
}

interface APIBIZnavigation{
   createEditor(parameter:APIParamType):void;
   finishEditor(parameter:APIParamType):void;
   popGesture(parameter:APIParamType):void;
   replace(parameter:APIParamType):void;
   setLeft(parameter:APIParamType):void;
   setRight(parameter:APIParamType):void;
   setMenu(parameter:APIParamType):void;
   setTitle(parameter:APIParamType):void;
   setIcon(parameter:APIParamType):void;
   back(parameter:APIParamType):void;
   goBack(parameter:APIParamType):void;
   close(parameter:APIParamType):void;
}

interface APIBIZmicroApp{
   visualList(parameter:APIParamType):void;
}

interface APIBIZclipboardData{
   setData(parameter:APIParamType):void;
}

interface APIDEVICEnotification{
   vibrate(parameter:APIParamType):void;
   alert(parameter:APIParamType):void;
   confirm(parameter:APIParamType):void;
   prompt(parameter:APIParamType):void;
   toast(parameter:APIParamType):void;
   showPreloader(parameter:APIParamType):void;
   hidePreloader(parameter:APIParamType):void;
   actionSheet(parameter:APIParamType):void;
   modal(parameter:APIParamType):void;
   extendModal(parameter:APIParamType):void;
}

interface APIDEVICElauncher{
   checkInstalledApps(parameter:APIParamType):void;
   launchApp(parameter:APIParamType):void;
}

interface APIDEVICEaudio{
   startRecord(parameter:APIParamType):void;
   stopRecord(parameter:APIParamType):void;
   onRecordEnd(parameter:APIParamType):void;
   play(parameter:APIParamType):void;
   onPlayEnd(parameter:APIParamType):void;
   pause(parameter:APIParamType):void;
   resume(parameter:APIParamType):void;
   stop(parameter:APIParamType):void;
   download(parameter:APIParamType):void;
   translateVoice(parameter:APIParamType):void;
}

interface APIDEVICEgeolocation{
   get(parameter:APIParamType):void;
   start(parameter:APIParamType):void;
   stop(parameter:APIParamType):void;
   status(parameter:APIParamType):void;
}

interface APIDEVICEaccelerometer{
   watchShake(parameter:APIParamType):void;
   clearShake(parameter:APIParamType):void;
}

interface APIDEVICEbase{
   getUUID(parameter:APIParamType):void;
   getSettings(parameter:APIParamType):void;
   enableLocation(parameter:APIParamType):void;
   enableBluetooth(parameter:APIParamType):void;
   startBindDevice(parameter:APIParamType):void;
   unBindDevice(parameter:APIParamType):void;
   getPhoneInfo(parameter:APIParamType):void;
   getInterface(parameter:APIParamType):void;
   getWifiStatus(parameter:APIParamType):void;
   getTimeZone(parameter:APIParamType):void;
}

interface APIDEVICEconnection{
   getNetworkType(parameter:APIParamType):void;
}

interface APISPECIALnative{
   specialInit_V2(parameter:APIParamType):void;
   specialInit_V1(parameter:APIParamType):void;
}

interface APIRUNTIMEpermission{
   requestJsApis(parameter:APIParamType):void;
   requestAuthCode(parameter:APIParamType):void;
   requestOperateAuthCode(parameter:APIParamType):void;
}

interface APIRUNTIMEchannel{
   reportPageSuccess(parameter:APIParamType):void;
}

interface APIRUNTIMEmonitor{
   timing(parameter:APIParamType):void;
   memory(parameter:APIParamType):void;
   usability(parameter:APIParamType):void;
   enableUsability(parameter:APIParamType):void;
}

interface APIRUNTIMEauthorizeCookie{
   refresh(parameter:APIParamType):void;
}

interface APIRUNTIMEmessage{
   post(parameter:APIParamType):void;
   fetch(parameter:APIParamType):void;
}

interface APIINTERNALATMBle{
   startMonitor(parameter:APIParamType):void;
   stopMonitor(parameter:APIParamType):void;
   checkIn(parameter:APIParamType):void;
}

interface APIINTERNALdingCard{
   bindWorkMobile(parameter:APIParamType):void;
   unbindWorkMobile(parameter:APIParamType):void;
}

interface APIINTERNALpageLink{
   request(parameter:APIParamType):void;
   fetch(parameter:APIParamType):void;
   response(parameter:APIParamType):void;
}

interface APIINTERNALhpm{
   update(parameter:APIParamType):void;
   queryInfo(parameter:APIParamType):void;
   delete(parameter:APIParamType):void;
}

interface APIINTERNALlog{
   upload(parameter:APIParamType):void;
   uploadException(parameter:APIParamType):void;
   add(parameter:APIParamType):void;
}

interface APIINTERNALbeacon{
   bind(parameter:APIParamType):void;
   detectBeacons(parameter:APIParamType):void;
   detectStart(parameter:APIParamType):void;
   detectStop(parameter:APIParamType):void;
}

interface APIINTERNALrequest{
   lwp(parameter:APIParamType):void;
   httpOverLWP(parameter:APIParamType):void;
   getSecurityToken(parameter:APIParamType):void;
}

interface APIINTERNALnotify{
   send(parameter:APIParamType):void;
   add(parameter:APIParamType):void;
}

interface APIINTERNALcertify{
   step(parameter:APIParamType):void;
   biometric(parameter:APIParamType):void;
   takePhoto(parameter:APIParamType):void;
   submit(parameter:APIParamType):void;
}

interface APIINTERNALcreateOrg{
   industryInfo(parameter:APIParamType):void;
   successJump(parameter:APIParamType):void;
}

interface APIINTERNALschema{
   open(parameter:APIParamType):void;
}

interface APIINTERNALhost{
   lwp(parameter:APIParamType):void;
   query(parameter:APIParamType):void;
}

interface APIINTERNALattend{
   assistant(parameter:APIParamType):void;
}

interface APIINTERNALchat{
   pickGroupConversation(parameter:APIParamType):void;
   openConversation(parameter:APIParamType):void;
   selectAndSendText(parameter:APIParamType):void;
   transmitMsg(parameter:APIParamType):void;
}

interface APIINTERNALcontact{
   chooseMobileContact(parameter:APIParamType):void;
}

interface APIINTERNALchannel{
   infoExist(parameter:APIParamType):void;
   openPage(parameter:APIParamType):void;
}

interface APIINTERNALutil{
   encryData(parameter:APIParamType):void;
   getOrgIdByCorpId(parameter:APIParamType):void;
   getCorpIdByOrgId(parameter:APIParamType):void;
   isSimulator(parameter:APIParamType):void;
   getWua(parameter:APIParamType):void;
   orgBetaFunctionCheck(parameter:APIParamType):void;
   chooseIndustry(parameter:APIParamType):void;
   chooseRegion(parameter:APIParamType):void;
}

interface APIINTERNALauth{
   postLoginTempCode(parameter:APIParamType):void;
}

interface APIINTERNALlwp{
   call(parameter:APIParamType):void;
}

interface APIINTERNALphoneContact{
   add(parameter:APIParamType):void;
   isGranted(parameter:APIParamType):void;
}

interface APIINTERNALhealth{
   getTodaysStepCount(parameter:APIParamType):void;
   enableStepCountSync(parameter:APIParamType):void;
   disableStepCountSync(parameter:APIParamType):void;
}

interface APIINTERNALuser{
   getRole(parameter:APIParamType):void;
   isNewUser(parameter:APIParamType):void;
   allOrganizations(parameter:APIParamType):void;
}

interface APIINTERNALmicroapp{
   checkInstalled(parameter:APIParamType):void;
   queryInfo(parameter:APIParamType):void;
}

interface APIUTILlocalStorage{
   getItem(parameter:APIParamType):void;
   setItem(parameter:APIParamType):void;
   removeItem(parameter:APIParamType):void;
}

interface APIUTILdomainStorage{
   setItem(parameter:APIParamType):void;
   getItem(parameter:APIParamType):void;
   removeItem(parameter:APIParamType):void;
   clearItems(parameter:APIParamType):void;
}

interface APIUInav{
   preload(parameter:APIParamType):void;
   recycle(parameter:APIParamType):void;
   getCurrentId(parameter:APIParamType):void;
   go(parameter:APIParamType):void;
   close(parameter:APIParamType):void;
   push(parameter:APIParamType):void;
   pop(parameter:APIParamType):void;
   quit(parameter:APIParamType):void;
}

interface APIUIappLink{
   open(parameter:APIParamType):void;
   request(parameter:APIParamType):void;
   fetch(parameter:APIParamType):void;
   response(parameter:APIParamType):void;
}

interface APIUIwebViewBounce{
   enable(parameter:APIParamType):void;
   disable(parameter:APIParamType):void;
}

interface APIUItab{
   init(parameter:APIParamType):void;
   start(parameter:APIParamType):void;
   config(parameter:APIParamType):void;
   select(parameter:APIParamType):void;
}

interface APIUIpullToRefresh{
   enable(parameter:APIParamType):void;
   stop(parameter:APIParamType):void;
   disable(parameter:APIParamType):void;
}

interface APIUIinput{
   plain(parameter:APIParamType):void;
}

interface APITESTui{
   forwardPage(parameter:APIParamType):void;
}

interface APISERVICErequest{
   httpOverLwp(parameter:APIParamType):void;
}

interface APICHANNELopen{
   profile(parameter:APIParamType):void;
}

interface APICHANNELpermission{
   requestAuthCode(parameter:APIParamType):void;
}

interface APIDingtalk{
   biz:APIbiz;
   device:APIdevice;
   special:APIspecial;
   runtime:APIruntime;
   internal:APIinternal;
   util:APIutil;
   ui:APIui;
   test:APItest;
   service:APIservice;
   channel:APIchannel;
   legacy:APIlegacy;
}

interface EventEmitter{
  emit(type:string,parameter:any):void;
  off(type:string,listener:Function):void;
  on(type:string,listener:Function):void;
  once(type:string,listener:Function):void;
}

declare module 'weex-dingtalk'{
  export var api: APIDingtalk;
  export var EventEmitter: EventEmitter;
  export function config(parameter:any):void;
  export function error(callback:Function):void;
  export function init():void;
  export function off(type:string,listener:Function,useCapture:boolean):void;
  export function on(type:string,listener:Function,useCapture:boolean):void;
  export function ready(callback:Function):void;
}