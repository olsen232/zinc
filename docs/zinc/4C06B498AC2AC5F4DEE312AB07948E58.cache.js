var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.zinc;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2";
var $strongName = '4C06B498AC2AC5F4DEE312AB07948E58';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {4:1}, $intern_2 = {4:1, 63:1, 84:1}, $intern_3 = {4:1, 9:1, 7:1, 8:1}, $intern_4 = {13:1, 27:1, 4:1, 6:1, 5:1}, $intern_5 = {13:1, 28:1, 4:1, 6:1, 5:1}, $intern_6 = {11:1, 4:1, 6:1, 5:1}, $intern_7 = {13:1, 52:1, 4:1, 6:1, 5:1}, $intern_8 = {13:1, 22:1, 4:1, 6:1, 5:1}, $intern_9 = {59:1, 4:1, 9:1, 7:1, 8:1}, $intern_10 = 4194304, $intern_11 = {48:1, 34:1, 44:1, 43:1, 49:1, 30:1, 25:1}, $intern_12 = {83:1}, $intern_13 = {35:1}, $intern_14 = {62:1}, $intern_15 = 65536, $intern_16 = 16777216, $intern_17 = 33554432, $intern_18 = 67108864, $intern_19 = {48:1, 34:1, 44:1, 43:1, 49:1, 99:1, 30:1, 25:1}, $intern_20 = 65535, $intern_21 = {12:1, 16:1}, $intern_22 = {33:1}, $intern_23 = {32:1}, $intern_24 = {23:1, 21:1, 70:1}, $intern_25 = {23:1, 21:1, 38:1, 46:1, 42:1}, $intern_26 = 16777215, $intern_27 = 34962, $intern_28 = 34963, $intern_29 = {12:1, 54:1, 16:1}, $intern_30 = {4:1, 6:1, 5:1, 10:1}, $intern_31 = -3.4028234663852886E38, $intern_32 = 3.4028234663852886E38, $intern_33 = {33:1, 32:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_9(object){
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (hashCode__I__devirtual$(object) >>> 0).toString(16);
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

bootstrap();
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && (typeof src_0 === 'object' || typeof src_0 === 'function') && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_0), -2147483648) | 0;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function $getSimpleName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.simpleName;
}

function Class(){
  this.sequentialId = nextSequentialId++;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(typeId){
  var clazz;
  clazz = new Class;
  clazz.typeName = 'Class$' + (typeId?'S' + typeId:'' + clazz.sequentialId);
  clazz.canonicalName = clazz.typeName;
  clazz.simpleName = clazz.typeName;
  return clazz;
}

function createForClass(typeId){
  var clazz;
  clazz = createClassObject(typeId);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(typeId);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForPrimitive(primitiveTypeId){
  var clazz;
  clazz = createClassObject(primitiveTypeId);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(109, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  return $getSimpleName(this);
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_13(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
_.sequentialId = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass(1);
var Ljava_lang_Class_2_classLit = createForClass(109);
function $clinit_AbstractSound(){
  $clinit_AbstractSound = emptyMethod;
  INITIAL_LOAD_STATE = ($clinit_Sound$LoadState() , LOAD_STATE_UNINITIALIZED);
}

function $addEventHandler(this$static, handler){
  $add(this$static.soundHandlerCollection, handler);
  this$static.loadState != INITIAL_LOAD_STATE && $onSoundLoadStateChange(handler, new SoundLoadStateChangeEvent(this$static));
}

function $setLoadState(this$static, loadState){
  if (loadState != this$static.loadState) {
    this$static.loadState = loadState;
    loadState != INITIAL_LOAD_STATE && $fireOnSoundLoadStateChange(this$static.soundHandlerCollection, this$static);
  }
}

function AbstractSound(url_0){
  $clinit_AbstractSound();
  this.soundHandlerCollection = new SoundHandlerCollection;
  this.loadState = INITIAL_LOAD_STATE;
  this.mimeType = 'audio/mpeg';
  this.url_0 = url_0;
  this.streaming = false;
  this.crossOrigin = false;
}

defineClass(82, 1, {});
_.toString_0 = function toString_1(){
  return this.getSoundType() + '("' + this.mimeType + '", "' + this.url_0 + '", ' + (this.streaming?'streaming':'not streaming') + ', ' + (this.crossOrigin?'cross origin':'same origin') + ')';
}
;
_.crossOrigin = false;
_.streaming = false;
var INITIAL_LOAD_STATE;
var Lcom_allen_1sauer_gwt_voices_client_AbstractSound_2_classLit = createForClass(82);
function $clinit_FlashSound(){
  $clinit_FlashSound = emptyMethod;
  $clinit_AbstractSound();
  soundList = new ArrayList;
}

function $playbackCompleted(this$static){
  $fireOnPlaybackComplete(this$static.soundHandlerCollection, this$static);
}

function $registerSound(this$static){
  if (!this$static.soundRegistered) {
    $registerSound_0(this$static.voicesMovie, this$static);
    this$static.soundRegistered = true;
  }
}

function $soundLoaded(this$static){
  $setLoadState(this$static, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY));
  this$static.volume_0 != 100 && $setVolume(this$static.voicesMovie, this$static.soundNumber, this$static.volume_0);
  this$static.looping && $setLooping(this$static.voicesMovie, this$static.soundNumber, this$static.looping);
}

function FlashSound(url_0, voicesMovie){
  $clinit_FlashSound();
  AbstractSound.call(this, url_0);
  this.voicesMovie = voicesMovie;
  this.soundNumber = soundList.array.length;
  $add(soundList, this);
  $registerSound(this);
}

defineClass(141, 82, {141:1}, FlashSound);
_.getSoundType = function getSoundType(){
  return $clinit_SoundType() , FLASH;
}
;
_.play_0 = function play(){
  $registerSound(this);
  if (this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY)) {
    return $playSound(this.voicesMovie, this.soundNumber);
  }
  return false;
}
;
_.setLooping_0 = function setLooping(looping){
  this.looping = looping;
  this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY) && $setLooping(this.voicesMovie, this.soundNumber, looping);
}
;
_.setVolume_0 = function setVolume(volume){
  this.volume_0 = volume;
  this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY) && $setVolume(this.voicesMovie, this.soundNumber, volume);
}
;
_.looping = false;
_.soundNumber = 0;
_.soundRegistered = false;
_.volume_0 = 100;
var soundList;
var Lcom_allen_1sauer_gwt_voices_client_FlashSound_2_classLit = createForClass(141);
function FlashSound$1(val$index){
  this.val$index1 = val$index;
}

defineClass(308, 1, {}, FlashSound$1);
_.execute = function execute(){
  $playbackCompleted($get(($clinit_FlashSound() , soundList), this.val$index1));
}
;
_.val$index1 = 0;
var Lcom_allen_1sauer_gwt_voices_client_FlashSound$1_2_classLit = createForClass(308);
function FlashSound$2(val$index){
  this.val$index1 = val$index;
}

defineClass(309, 1, {}, FlashSound$2);
_.execute = function execute_0(){
  $soundLoaded($get(($clinit_FlashSound() , soundList), this.val$index1));
}
;
_.val$index1 = 0;
var Lcom_allen_1sauer_gwt_voices_client_FlashSound$2_2_classLit = createForClass(309);
function $createAudioElement(this$static){
  var elem;
  !!this$static.endedRegistration && $removeHandler(this$static.endedRegistration.real);
  !!this$static.audio && $removeFromParent(this$static.audio);
  this$static.audio = createIfSupported();
  elem = $getElement(this$static.audio);
  this$static.endedRegistration = $addBitlessDomHandler(this$static.audio, this$static.endedHandler, ($clinit_EndedEvent() , $clinit_EndedEvent() , TYPE));
  $add_1(($clinit_RootPanel() , get_3()), this$static.audio);
  this$static.crossOrigin && (elem.setAttribute('crossOrigin', 'anonymous') , undefined);
  $setSrc(elem, this$static.url_0);
}

function Html5Sound(url_0){
  $clinit_AbstractSound();
  var mimeTypeSupport;
  AbstractSound.call(this, url_0);
  this.endedHandler = new Html5Sound$1(this);
  $createAudioElement(this);
  mimeTypeSupport = getMimeTypeSupport();
  switch (mimeTypeSupport.ordinal) {
    case 2:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_MAYBE_READY));
      break;
    case 0:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
      break;
    case 3:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORT_NOT_KNOWN));
      throw toJs(new IllegalArgumentException_0('unexpected MIME type support ' + mimeTypeSupport));
    default:throw toJs(new IllegalArgumentException_0('unknown MIME type support ' + mimeTypeSupport));
  }
}

function getMimeTypeSupport(){
  var canPlayType;
  $clinit_AbstractSound();
  var support;
  if (!isSupported()) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED;
  }
  support = (canPlayType = $getElement(createIfSupported()).canPlayType('audio/mpeg') , canPlayType == 'no'?'':canPlayType);
  if ($equals('probably', support)) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY;
  }
  if ($equals('maybe', support)) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY;
  }
  return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_UNKNOWN;
}

defineClass(312, 82, {}, Html5Sound);
_.getSoundType = function getSoundType_0(){
  return $clinit_SoundType() , HTML5;
}
;
_.play_0 = function play_0(){
  var elem;
  elem = $getElement(this.audio);
  elem.pause();
  try {
    elem.currentTime = 0;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 9))
      throw toJs($e0);
  }
  elem.currentTime != 0 && $createAudioElement(this);
  elem.play();
  return true;
}
;
_.setLooping_0 = function setLooping_0(looping){
  $setBooleanAttr($getMediaElement(this.audio), looping);
}
;
_.setVolume_0 = function setVolume_0(volume){
  $setVolume_1($getMediaElement(this.audio), volume / 100);
}
;
var Lcom_allen_1sauer_gwt_voices_client_Html5Sound_2_classLit = createForClass(312);
function Html5Sound$1(this$0){
  this.this$01 = this$0;
}

defineClass(313, 1, {385:1, 377:1}, Html5Sound$1);
var Lcom_allen_1sauer_gwt_voices_client_Html5Sound$1_2_classLit = createForClass(313);
function NativeSound(url_0, soundControllerElement){
  var elem, m;
  $clinit_AbstractSound();
  var mimeTypeSupport;
  AbstractSound.call(this, url_0);
  this.soundControllerElement = soundControllerElement;
  elem = $createElement(url_0);
  $setVolume_0(elem, 0);
  $play(soundControllerElement, elem);
  this.element = $createElement(url_0);
  mimeTypeSupport = (m = navigator.mimeTypes['audio/mpeg'] , m != null && m.enabledPlugin != null?($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY):($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED));
  switch (mimeTypeSupport.ordinal) {
    case 2:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_MAYBE_READY));
      break;
    case 0:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
      break;
    case 3:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORT_NOT_KNOWN));
      break;
    case 1:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_NOT_READY));
      break;
    default:throw toJs(new IllegalArgumentException_0('unknown MIME type support ' + mimeTypeSupport));
  }
}

defineClass(310, 82, {}, NativeSound);
_.getSoundType = function getSoundType_1(){
  return $clinit_SoundType() , NATIVE;
}
;
_.play_0 = function play_1(){
  return $play(this.soundControllerElement, this.element);
}
;
_.setLooping_0 = function setLooping_1(looping){
  this.element.setAttribute('loop', 'infinite');
}
;
_.setVolume_0 = function setVolume_1(volume){
  $setVolume_0(this.element, volume);
}
;
var Lcom_allen_1sauer_gwt_voices_client_NativeSound_2_classLit = createForClass(310);
function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(5, 1, {4:1, 6:1, 5:1});
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass(5);
function $clinit_Sound$LoadState(){
  $clinit_Sound$LoadState = emptyMethod;
  LOAD_STATE_NOT_SUPPORTED = new Sound$LoadState('LOAD_STATE_NOT_SUPPORTED', 0);
  LOAD_STATE_SUPPORT_NOT_KNOWN = new Sound$LoadState('LOAD_STATE_SUPPORT_NOT_KNOWN', 1);
  LOAD_STATE_SUPPORTED_AND_READY = new Sound$LoadState('LOAD_STATE_SUPPORTED_AND_READY', 2);
  LOAD_STATE_SUPPORTED_MAYBE_READY = new Sound$LoadState('LOAD_STATE_SUPPORTED_MAYBE_READY', 3);
  LOAD_STATE_SUPPORTED_NOT_READY = new Sound$LoadState('LOAD_STATE_SUPPORTED_NOT_READY', 4);
  LOAD_STATE_UNINITIALIZED = new Sound$LoadState('LOAD_STATE_UNINITIALIZED', 5);
}

function Sound$LoadState(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_Sound$LoadState();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_Sound$LoadState_2_classLit, 1), $intern_1, 41, 0, [LOAD_STATE_NOT_SUPPORTED, LOAD_STATE_SUPPORT_NOT_KNOWN, LOAD_STATE_SUPPORTED_AND_READY, LOAD_STATE_SUPPORTED_MAYBE_READY, LOAD_STATE_SUPPORTED_NOT_READY, LOAD_STATE_UNINITIALIZED]);
}

defineClass(41, 5, {41:1, 4:1, 6:1, 5:1}, Sound$LoadState);
var LOAD_STATE_NOT_SUPPORTED, LOAD_STATE_SUPPORTED_AND_READY, LOAD_STATE_SUPPORTED_MAYBE_READY, LOAD_STATE_SUPPORTED_NOT_READY, LOAD_STATE_SUPPORT_NOT_KNOWN, LOAD_STATE_UNINITIALIZED;
var Lcom_allen_1sauer_gwt_voices_client_Sound$LoadState_2_classLit = createForEnum(41, values_0);
function $clinit_SoundController(){
  $clinit_SoundController = emptyMethod;
  $wnd.$GWT_VOICES_VERSION = '3.3.2';
}

function $createSound(this$static, url_0){
  var sound;
  sound = $createSoundImpl(this$static, url_0);
  sound.setVolume_0(this$static.defaultVolume);
  return sound;
}

function $createSoundImpl(this$static, url_0){
  var c, c$array, c$index, c$max, sound;
  sound = null;
  for (c$array = this$static.preferredSoundTypes , c$index = 0 , c$max = c$array.length; c$index < c$max; ++c$index) {
    c = c$array[c$index];
    switch (c.ordinal) {
      case 1:
        sound = $createSoundImplHtml5(url_0);
        break;
      case 0:
        sound = $createSoundImplFlash(this$static, url_0);
        break;
      case 2:
        sound = $createSoundImplWebAudio(url_0);
        break;
      case 3:
        sound = $createSoundImplWebAudio(url_0);
    }
    if (sound) {
      return sound;
    }
  }
  sound = $createSoundImplWebAudio(url_0);
  if (sound) {
    return sound;
  }
  sound = $createSoundImplFlash(this$static, url_0);
  if (sound) {
    return sound;
  }
  sound = $createSoundImplHtml5(url_0);
  if (sound) {
    return sound;
  }
  sound = new NativeSound(url_0, this$static.soundContainer);
  return sound;
}

function $createSoundImplFlash(this$static, url_0){
  var mimeTypeSupport, sound, vm;
  if ($equals(url_0.substr(0, 5), 'data:')) {
    return null;
  }
  $clinit_FlashMovie();
  if (impl_0.impl.getMajorVersion() >= 9) {
    vm = $getVoicesMovie(this$static);
    mimeTypeSupport = $getMimeTypeSupport(vm);
    if (mimeTypeSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) || mimeTypeSupport == MIME_TYPE_SUPPORT_NOT_READY) {
      sound = new FlashSound(url_0, vm);
      return sound;
    }
  }
  return null;
}

function $createSoundImplHtml5(url_0){
  if (getMimeTypeSupport() == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)) {
    return new Html5Sound(url_0);
  }
  return null;
}

function $createSoundImplWebAudio(url_0){
  if (getMimeTypeSupport_0() == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)) {
    return new WebAudioSound(url_0);
  }
  return null;
}

function $getVoicesMovie(this$static){
  if (!this$static.voicesWrapper) {
    this$static.voicesWrapper = new VoicesMovie('gwtVoices' + uniqueId++, this$static.gwtVoicesSwfBaseUrl);
    $clinit_DOM();
    $appendChild(this$static.soundContainer, resolve(this$static.voicesWrapper.element));
  }
  return this$static.voicesWrapper;
}

function $setPreferredSoundTypes(this$static, soundTypes){
  var s$index, s$max;
  for (s$index = 0 , s$max = soundTypes.length; s$index < s$max; ++s$index)
  ;
  this$static.preferredSoundTypes = soundTypes;
}

function SoundController(){
  var s, i, gwtVoices, style;
  $clinit_SoundController();
  this.soundContainer = ($clinit_DOM() , $doc.createElement('div'));
  this.gwtVoicesSwfBaseUrl = ($clinit_Impl() , s = $doc.location.href , i = s.indexOf('#') , i != -1 && (s = s.substring(0, i)) , i = s.indexOf('?') , i != -1 && (s = s.substring(0, i)) , i = s.lastIndexOf('/') , i != -1 && (s = s.substring(0, i)) , s.length > 0?s + '/':'');
  gwtVoices = getParameter('gwt-voices');
  $equals(($clinit_SoundType() , FLASH).queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 24, 0, [FLASH])):$equals(HTML5.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 24, 0, [HTML5])):$equals(WEB_AUDIO.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 24, 0, [WEB_AUDIO])):$equals(NATIVE.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 24, 0, [NATIVE])):$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 24, 0, [WEB_AUDIO, FLASH, HTML5]));
  $appendChild(($clinit_RootPanel() , $doc.body), this.soundContainer);
  style = this.soundContainer.style;
  style['position'] = ($clinit_Style$Position() , 'absolute');
  style['overflow'] = ($clinit_Style$Overflow() , 'hidden');
  style['left'] = ($clinit_Style$Unit() , '-500.0px');
  style['top'] = '-500.0px';
  style['width'] = '0.0px';
  style['height'] = '0.0px';
}

defineClass(243, 1, {}, SoundController);
_.defaultVolume = 100;
var Lcom_allen_1sauer_gwt_voices_client_SoundController_2_classLit = createForClass(243);
function $clinit_SoundController$MimeTypeSupport(){
  $clinit_SoundController$MimeTypeSupport = emptyMethod;
  MIME_TYPE_NOT_SUPPORTED = new SoundController$MimeTypeSupport('MIME_TYPE_NOT_SUPPORTED', 0);
  MIME_TYPE_SUPPORT_NOT_READY = new SoundController$MimeTypeSupport('MIME_TYPE_SUPPORT_NOT_READY', 1);
  MIME_TYPE_SUPPORT_READY = new SoundController$MimeTypeSupport('MIME_TYPE_SUPPORT_READY', 2);
  MIME_TYPE_SUPPORT_UNKNOWN = new SoundController$MimeTypeSupport('MIME_TYPE_SUPPORT_UNKNOWN', 3);
}

function SoundController$MimeTypeSupport(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_SoundController$MimeTypeSupport();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundController$MimeTypeSupport_2_classLit, 1), $intern_1, 53, 0, [MIME_TYPE_NOT_SUPPORTED, MIME_TYPE_SUPPORT_NOT_READY, MIME_TYPE_SUPPORT_READY, MIME_TYPE_SUPPORT_UNKNOWN]);
}

defineClass(53, 5, {53:1, 4:1, 6:1, 5:1}, SoundController$MimeTypeSupport);
var MIME_TYPE_NOT_SUPPORTED, MIME_TYPE_SUPPORT_NOT_READY, MIME_TYPE_SUPPORT_READY, MIME_TYPE_SUPPORT_UNKNOWN;
var Lcom_allen_1sauer_gwt_voices_client_SoundController$MimeTypeSupport_2_classLit = createForEnum(53, values_1);
function $clinit_SoundType(){
  $clinit_SoundType = emptyMethod;
  FLASH = new SoundType('FLASH', 0, 'flash');
  HTML5 = new SoundType('HTML5', 1, 'html5');
  NATIVE = new SoundType('NATIVE', 2, 'native');
  WEB_AUDIO = new SoundType('WEB_AUDIO', 3, 'webaudio');
}

function SoundType(enum$name, enum$ordinal, queryParameterValue){
  Enum.call(this, enum$name, enum$ordinal);
  this.queryParameterValue = queryParameterValue;
}

function values_2(){
  $clinit_SoundType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 24, 0, [FLASH, HTML5, NATIVE, WEB_AUDIO]);
}

defineClass(24, 5, {24:1, 4:1, 6:1, 5:1}, SoundType);
var FLASH, HTML5, NATIVE, WEB_AUDIO;
var Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit = createForEnum(24, values_2);
function $clinit_WebAudioSound(){
  $clinit_WebAudioSound = emptyMethod;
  $clinit_AbstractSound();
  audioContext = createAudioContext();
}

function $createVoice(this$static, url_0){
  var context = audioContext;
  var request = new $wnd.XMLHttpRequest;
  request.open('GET', url_0, true);
  request.responseType = 'arraybuffer';
  var self_0 = this$static;
  request.onload = function(){
    function onSuccess(decodedBuffer){
      self_0.buffer_0 = decodedBuffer;
      self_0.soundLoaded_0();
    }

    function onFailure(){
      self_0.soundLoadFailed();
    }

    context.decodeAudioData(request.response, onSuccess, onFailure);
  }
  ;
  request.send();
}

function WebAudioSound(url_0){
  $clinit_WebAudioSound();
  var mimeTypeSupport;
  AbstractSound.call(this, url_0);
  try {
    $createVoice(this, url_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 8)) {
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
    }
     else 
      throw toJs($e0);
  }
  mimeTypeSupport = getMimeTypeSupport_0();
  switch (mimeTypeSupport.ordinal) {
    case 1:
    case 2:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_NOT_READY));
      break;
    case 0:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
      break;
    case 3:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORT_NOT_KNOWN));
      break;
    default:throw toJs(new IllegalArgumentException_0('unknown MIME type support ' + mimeTypeSupport));
  }
}

function createAudioContext(){
  try {
    return new AudioContext;
  }
   catch (ignore) {
  }
  return null;
}

function getMimeTypeSupport_0(){
  $clinit_WebAudioSound();
  if (!audioContext) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED;
  }
  return getMimeTypeSupport();
}

defineClass(317, 82, {}, WebAudioSound);
_.getSoundType = function getSoundType_2(){
  return $clinit_SoundType() , WEB_AUDIO;
}
;
_.plackbackCompleted = function plackbackCompleted(){
  $fireOnPlaybackComplete(this.soundHandlerCollection, this);
}
;
_.play_0 = function play_2(){
  var buffer = this.buffer_0;
  if (buffer == null) {
    return false;
  }
  this.stop_0();
  var context = audioContext;
  var voice = context.createBufferSource();
  this.voice = voice;
  this.looping && (voice.loop = true);
  var node = voice;
  var volume = this.volume_0;
  if (volume != 100) {
    var gainNode = context.createGain();
    gainNode.gain.value = volume / 100;
    node.connect(gainNode);
    node = gainNode;
  }
  node.connect(context.destination);
  voice.buffer = buffer;
  voice.start(context.currentTime);
  if (!voice.loop) {
    var self_0 = this;
    setTimeout(function(){
      self_0.plackbackCompleted();
    }
    , voice.buffer.duration * 1000);
  }
  return true;
}
;
_.setLooping_0 = function setLooping_2(looping){
  this.looping = looping;
}
;
_.setVolume_0 = function setVolume_2(volume){
  this.volume_0 = volume;
}
;
_.soundLoadFailed = function soundLoadFailed(){
  $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
}
;
_.soundLoaded_0 = function soundLoaded(){
  $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY));
}
;
_.stop_0 = function stop_0(){
  var context = audioContext;
  var voice = this.voice;
  if (voice == null) {
    return;
  }
  voice.stop(context.currentTime);
  this.voice = null;
}
;
_.looping = false;
_.volume_0 = 0;
var audioContext;
var Lcom_allen_1sauer_gwt_voices_client_WebAudioSound_2_classLit = createForClass(317);
function EventObject(source){
  this.source = source;
}

defineClass(143, 1, {});
var Ljava_util_EventObject_2_classLit = createForClass(143);
function PlaybackCompleteEvent(source){
  EventObject.call(this, source);
}

defineClass(328, 143, {}, PlaybackCompleteEvent);
_.toString_0 = function toString_3(){
  var name_0, sound;
  sound = this.source;
  return name_0 = ($ensureNamesAreInitialized(Lcom_allen_1sauer_gwt_voices_client_handler_PlaybackCompleteEvent_2_classLit) , Lcom_allen_1sauer_gwt_voices_client_handler_PlaybackCompleteEvent_2_classLit.typeName) , $substring(name_0, $lastIndexOf(name_0, fromCodePoint(46)) + 1) + ': ' + sound;
}
;
var Lcom_allen_1sauer_gwt_voices_client_handler_PlaybackCompleteEvent_2_classLit = createForClass(328);
function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_2();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

defineClass(359, 1, {});
_.add_0 = function add_0(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove = function remove_0(o){
  return $advanceToFind(this, o, true);
}
;
_.toString_0 = function toString_4(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_4(joiner, e === this?'(this Collection)':e == null?'null':toString_9(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass(359);
defineClass(362, 359, {63:1});
_.add_1 = function add_1(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_2(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_1(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 63)) {
    return false;
  }
  other = o;
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_2(){
  return hashCode_16(this);
}
;
_.iterator = function iterator_0(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_0 = function remove_1(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
var Ljava_util_AbstractList_2_classLit = createForClass(362);
function $add(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll(this$static, c){
  var cArray, len;
  cArray = clone(c.array, c.array.length);
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this$static.array, this$static.array.length, cArray);
  return true;
}

function $get(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_17(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0, 1);
  return previous;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
}

defineClass(17, 362, $intern_2, ArrayList);
_.add_1 = function add_3(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add_0 = function add_4(o){
  return $add(this, o);
}
;
_.contains_0 = function contains_0(o){
  return $indexOf(this, o, 0) != -1;
}
;
_.get_0 = function get_0(index_0){
  return $get(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_1(){
  return new ArrayList$1(this);
}
;
_.remove_0 = function remove_2(index_0){
  return $remove(this, index_0);
}
;
_.remove = function remove_3(o){
  var i;
  i = $indexOf(this, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this.array.length);
  removeFrom(this.array, i, 1);
  return true;
}
;
_.size_1 = function size_1(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass(17);
function $fireOnPlaybackComplete(this$static, sender){
  var handler, handler$iterator;
  new PlaybackCompleteEvent(sender);
  for (handler$iterator = new ArrayList$1(this$static); handler$iterator.i < handler$iterator.this$01.array.length;) {
    handler = $next_2(handler$iterator);
    handler.this$01.playing = false;
  }
}

function $fireOnSoundLoadStateChange(this$static, sender){
  var event_0, handler, handler$iterator;
  event_0 = new SoundLoadStateChangeEvent(sender);
  for (handler$iterator = new ArrayList$1(this$static); handler$iterator.i < handler$iterator.this$01.array.length;) {
    handler = $next_2(handler$iterator);
    $onSoundLoadStateChange(handler, event_0);
  }
}

function SoundHandlerCollection(){
  ArrayList.call(this);
}

defineClass(321, 17, $intern_2, SoundHandlerCollection);
var Lcom_allen_1sauer_gwt_voices_client_handler_SoundHandlerCollection_2_classLit = createForClass(321);
function SoundLoadStateChangeEvent(source){
  EventObject.call(this, source);
  this.loadState = source.loadState;
}

defineClass(144, 143, {}, SoundLoadStateChangeEvent);
_.toString_0 = function toString_5(){
  var name_0, sound;
  sound = this.source;
  return name_0 = ($ensureNamesAreInitialized(Lcom_allen_1sauer_gwt_voices_client_handler_SoundLoadStateChangeEvent_2_classLit) , Lcom_allen_1sauer_gwt_voices_client_handler_SoundLoadStateChangeEvent_2_classLit.typeName) , $substring(name_0, $lastIndexOf(name_0, fromCodePoint(46)) + 1) + ': ' + sound + '; ' + $name(this.loadState);
}
;
var Lcom_allen_1sauer_gwt_voices_client_handler_SoundLoadStateChangeEvent_2_classLit = createForClass(144);
function $clinit_FlashMovie(){
  $clinit_FlashMovie = emptyMethod;
  impl_0 = new FlashMovieImplPlayN;
}

defineClass(314, 1, {});
var impl_0;
var Lcom_allen_1sauer_gwt_voices_client_ui_FlashMovie_2_classLit = createForClass(314);
function $clinit_VoicesMovie(){
  $clinit_VoicesMovie = emptyMethod;
  $clinit_FlashMovie();
  FLASH_SUPPORTED_MIME_TYPES = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['audio/mpeg', 'audio/mpeg; codecs=MP3']);
}

function $callCreateSound(this$static, id_0, soundURL, checkPolicyFile){
  var elem = this$static.element;
  elem.createSound(id_0, soundURL, checkPolicyFile);
}

function $getMimeTypeSupport(this$static){
  switch (this$static.flashSupport.ordinal) {
    case 2:
    case 1:
      return contains_1(FLASH_SUPPORTED_MIME_TYPES)?($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY):($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED);
    case 3:
    case 0:
      return this$static.flashSupport;
    default:throw toJs(new RuntimeException_0('Unhandled flash support value ' + this$static.flashSupport));
  }
}

function $installFlashCallbackHooks(this$static, id_1){
  $doc.VoicesMovie === undefined && ($doc.VoicesMovie = {});
  var self_0 = this$static;
  $doc.VoicesMovie[id_1] = {};
  $doc.VoicesMovie[id_1].ready = function(){
    self_0.movieReady();
  }
  ;
  $doc.VoicesMovie[id_1].soundLoaded = function(id_0){
    $clinit_FlashSound();
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new FlashSound$2(id_0));
    return true;
  }
  ;
  $doc.VoicesMovie[id_1].playbackCompleted = function(id_0){
    $clinit_FlashSound();
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new FlashSound$1(id_0));
  }
  ;
  $doc.VoicesMovie[id_1].log = function(text_0){
    self_0.debug('FLASH[' + id_1 + ']: ' + text_0);
  }
  ;
}

function $movieUnsupported(this$static){
  var flashSound, flashSound$iterator;
  for (flashSound$iterator = new ArrayList$1(this$static.unitializedSoundList); flashSound$iterator.i < flashSound$iterator.this$01.array.length;) {
    flashSound = $next_2(flashSound$iterator);
    $setLoadState(flashSound, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
  }
}

function $playSound(this$static, id_0){
  var elem;
  if (this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)) {
    return elem = this$static.element , elem.playSound(id_0);
  }
  return false;
}

function $registerSound_0(this$static, flashSound){
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)?$callCreateSound(this$static, flashSound.soundNumber, flashSound.url_0, flashSound.crossOrigin):$add(this$static.unitializedSoundList, flashSound);
}

function $setLooping(this$static, id_0, looping){
  var elem;
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) && (elem = this$static.element , elem.setLooping(id_0, looping?$intern_0:0) , undefined);
}

function $setVolume(this$static, id_0, volume){
  var elem;
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) && (elem = this$static.element , elem.setVolume(id_0, volume / 100) , undefined);
}

function VoicesMovie(id_0, gwtVoicesSwfBaseUrl){
  $clinit_VoicesMovie();
  this.element = $createElementMaybeSetURL(impl_0, id_0, gwtVoicesSwfBaseUrl + 'gwt-voices.swf');
  this.flashSupport = ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_UNKNOWN);
  this.unitializedSoundList = new ArrayList;
  $installFlashCallbackHooks(this, id_0);
  if (impl_0.impl.getMajorVersion() >= 9) {
    this.flashSupport = MIME_TYPE_SUPPORT_NOT_READY;
  }
   else {
    this.flashSupport = MIME_TYPE_NOT_SUPPORTED;
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new VoicesMovie$1(this));
  }
}

defineClass(315, 314, {}, VoicesMovie);
_.debug = function debug(text_0){
  $clinit_System();
}
;
_.movieReady = function movieReady(){
  var flashSound, iterator;
  this.flashSupport = ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY);
  for (iterator = new ArrayList$1(this.unitializedSoundList); iterator.i < iterator.this$01.array.length;) {
    flashSound = $next_2(iterator);
    $callCreateSound(this, flashSound.soundNumber, flashSound.url_0, flashSound.crossOrigin);
    $remove_8(iterator);
  }
}
;
var FLASH_SUPPORTED_MIME_TYPES;
var Lcom_allen_1sauer_gwt_voices_client_ui_VoicesMovie_2_classLit = createForClass(315);
function VoicesMovie$1(this$0){
  this.this$01 = this$0;
}

defineClass(316, 1, {}, VoicesMovie$1);
_.execute = function execute_1(){
  $movieUnsupported(this.this$01);
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_VoicesMovie$1_2_classLit = createForClass(316);
defineClass(373, 1, {});
_.getMajorVersion = function getMajorVersion(){
  var versionString;
  versionString = this.getVersionString();
  return versionString == null?0:__parseAndValidateInt($replaceFirst(versionString, ',.*', ''));
}
;
_.getVersionString = function getVersionString(){
  var rawVersionString;
  rawVersionString = this.getRawVersionString();
  return rawVersionString == null?null:$replaceFirst($replaceAll(rawVersionString, '\\D*(\\d+)', '$1,'), ',$', '');
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImpl_2_classLit = createForClass(373);
function FlashMovieImplIE6(){
}

defineClass(323, 373, {}, FlashMovieImplIE6);
_.createElementMaybeSetURL = function createElementMaybeSetURL(id_0, url_0){
  var elem = $doc.createElement('object');
  elem.tabIndex = -1;
  elem.id = id_0;
  elem.classid = 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000';
  elem.codebase = 'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0';
  elem.FlashVars = 'id=' + id_0;
  elem.Movie = url_0;
  return elem;
}
;
_.getRawVersionString = function getRawVersionString(){
  try {
    return (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')).GetVariable('$version');
  }
   catch (e) {
    return null;
  }
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplIE6_2_classLit = createForClass(323);
function $createElementMaybeSetURL(this$static, id_0, url_0){
  return this$static.impl.createElementMaybeSetURL(id_0, url_0);
}

function FlashMovieImplPlayN(){
  $wnd.navigator.userAgent.indexOf('MSIE') != -1?(this.impl = new FlashMovieImplIE6):(this.impl = new FlashMovieImplSafari);
}

defineClass(320, 373, {}, FlashMovieImplPlayN);
_.createElementMaybeSetURL = function createElementMaybeSetURL_0(id_0, url_0){
  return $createElementMaybeSetURL(this, id_0, url_0);
}
;
_.getMajorVersion = function getMajorVersion_0(){
  return this.impl.getMajorVersion();
}
;
_.getRawVersionString = function getRawVersionString_0(){
  return this.impl.getRawVersionString();
}
;
_.getVersionString = function getVersionString_0(){
  return this.impl.getVersionString();
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplPlayN_2_classLit = createForClass(320);
defineClass(374, 373, {});
_.createElementMaybeSetURL = function createElementMaybeSetURL_1(id_0, url_0){
  var elem = $doc.createElement('object');
  elem.setAttribute('id', id_0);
  elem.setAttribute('type', 'application/x-shockwave-flash');
  elem.setAttribute('data', url_0);
  var param = $doc.createElement('param');
  param.setAttribute('name', 'FlashVars');
  param.setAttribute('value', 'id=' + id_0);
  elem.appendChild(param);
  return elem;
}
;
_.getRawVersionString = function getRawVersionString_1(){
  var p = navigator.plugins['Shockwave Flash'];
  return p == null?null:p.description;
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplStandard_2_classLit = createForClass(374);
function FlashMovieImplSafari(){
}

defineClass(324, 374, {}, FlashMovieImplSafari);
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplSafari_2_classLit = createForClass(324);
function $createElement(url_0){
  var elem = $doc.createElement('object');
  elem.setAttribute('data', url_0);
  elem.setAttribute('autostart', 'true');
  return elem;
}

function $setVolume_0(elem, volume){
  elem.setAttribute('volume', '' + volume);
}

function $play(soundControllerElement, elem){
  var parent_0 = elem.parentNode;
  parent_0 != null && parent_0.removeChild(elem);
  soundControllerElement.appendChild(elem);
  return true;
}

var uniqueId = 1000;
function contains_1(arr){
  var element, element$index, element$max;
  for (element$index = 0 , element$max = arr.length; element$index < element$max; ++element$index) {
    element = arr[element$index];
    if ($equals(element, 'audio/mpeg')) {
      return true;
    }
  }
  return false;
}

var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass(0);
function $drawImage(this$static, image, dx, dy){
  this$static.drawImage(image, dx, dy);
}

function $drawImage_0(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(image, dx, dy, dw, dh);
}

function $drawImage_1(this$static, image, sx, sy, sw, sh, dx, dy, dw, dh){
  this$static.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
}

function $fillRect(this$static, x_0, y_0, w, h){
  this$static.fillRect(x_0, y_0, w, h);
}

function $scale(this$static, x_0, y_0){
  this$static.scale(x_0, y_0);
}

function Duration(){
  this.start_0 = now_1();
}

defineClass(268, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass(268);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 36, 0, 0, 1);
}

function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception, 'Cannot suppress a null exception.');
  checkCriticalArgument(exception != this$static);
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_1, 8, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  if (this$static.writetableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

function $printStackTraceImpl(this$static, out, ident){
  var t, t$array, t$index, t$max, theCause;
  $printStackTraceItems(this$static);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_1, 8, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, '\t' + ident);
  }
  theCause = this$static.cause;
  !!theCause && $printStackTraceImpl(theCause, out, ident);
}

function $printStackTraceItems(this$static){
  var element$array, element$index, element$max, stackTrace;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(this$static) , dropInternalFrames(stackTrace))) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index)
  ;
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(8, 1, {4:1, 8:1});
_.createError = function createError(msg){
  return new $wnd.Error(msg);
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_6(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass(8);
function Exception(message){
  $$init(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(9, 8, {4:1, 9:1, 8:1}, Exception);
var Ljava_lang_Exception_2_classLit = createForClass(9);
function RuntimeException(){
  $$init(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  $$init(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_2(cause){
  $$init(this);
  this.detailMessage = !cause?null:$toString(cause, cause.getMessage());
  this.cause = cause;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(7, 9, $intern_3, RuntimeException_0, RuntimeException_2);
var Ljava_lang_RuntimeException_2_classLit = createForClass(7);
defineClass(89, 7, $intern_3);
var Ljava_lang_JsException_2_classLit = createForClass(89);
defineClass(156, 89, $intern_3);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass(156);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?exception == null?null:exception.name:instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description_0 = this$static.description_0 + ': ' + (instanceOfJso(exception)?exception == null?null:exception.message:exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description_0;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $$init(this);
  $fillInStackTrace(this);
  this.backingJsObject = e;
  e != null && setPropertySafe(e, '__java$exception', this);
  this.detailMessage = e == null?'null':toString_9(e);
  this.description_0 = '';
  this.e = e;
  this.description_0 = '';
}

defineClass(64, 156, {64:1, 4:1, 9:1, 7:1, 8:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass(64);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(330, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass(330);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 8)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  $clinit_Impl();
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $reportError(handler.this$01, 'Uncaught Exception: ', e);
    return;
  }
  reportToBrowser(instanceOf(e, 64)?e.getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function SchedulerImpl(){
}

function execute_2(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 8)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_2)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(269, 330, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass(269);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(270, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_3(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass(270);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(271, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_4(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass(271);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = min_0(stackTrace.length);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals(stackTrace[i].methodName, dropFrameUntilFnName) || $equals(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && (stackTrace.splice(0, i + 1) , undefined);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(342, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass(342);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(157, 342, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 36, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass(157);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(toReturn.substr(index_0 + 1));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf_1(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = toReturn.substr(index_0 + 1));
  (toReturn.length == 0 || $equals(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(location_0.substr(lastColonIndex + 1));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(343, 342, {});
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 36, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass(343);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(158, 343, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass(158);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $setBooleanAttr(this$static, value_0){
  value_0?(this$static.setAttribute('loop', '') , undefined):(this$static.removeAttribute('loop') , undefined);
}

function $setSrc(this$static, url_0){
  this$static.src = url_0;
}

function $setVolume_1(this$static, volume){
  this$static.volume = volume;
}

function $setHeight(this$static, height){
  this$static.height = height;
}

function $setWidth(this$static, width_0){
  this$static.width = width_0;
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $isOrHasChild(parent_0, child){
  return parent_0.contains(child);
}

function $getAbsoluteLeft(elem){
  var left, rect;
  rect = elem.getBoundingClientRect && elem.getBoundingClientRect();
  left = rect?rect.left + $getScrollLeft_0(elem.ownerDocument.body):getAbsoluteLeftUsingOffsets(elem);
  return left | 0;
}

function $getAbsoluteTop(elem){
  var rect, top_0, top_1;
  rect = elem.getBoundingClientRect && elem.getBoundingClientRect();
  top_0 = rect?rect.top + ((elem.ownerDocument.body.scrollTop || 0) | 0):getAbsoluteTopUsingOffsets(elem);
  return top_0 | 0;
}

function $getScrollLeft(doc){
  return doc.documentElement.scrollLeft || doc.body.scrollLeft;
}

function $getScrollLeft_0(elem){
  if (!$equalsIgnoreCase(elem.tagName) && elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl') {
    return ((elem.scrollLeft || 0) | 0) - (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  }
  return (elem.scrollLeft || 0) | 0;
}

function $getScrollTop(doc){
  return doc.documentElement.scrollTop || doc.body.scrollTop;
}

function $getTabIndex(elem){
  return typeof elem.tabIndex != 'undefined'?elem.tabIndex:-1;
}

function getAbsoluteLeftUsingOffsets(elem){
  if (elem.offsetLeft == null) {
    return 0;
  }
  var left = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      left -= curr.scrollLeft;
      doc.defaultView.getComputedStyle(curr, '').getPropertyValue('direction') == 'rtl' && (left += curr.scrollWidth - curr.clientWidth);
      curr = curr.parentNode;
    }
  }
  while (elem) {
    left += elem.offsetLeft;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      left += doc.body.scrollLeft;
      return left;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (left += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-left-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return left;
}

function getAbsoluteTopUsingOffsets(elem){
  if (elem.offsetTop == null) {
    return 0;
  }
  var top_0 = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      top_0 -= curr.scrollTop;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    top_0 += elem.offsetTop;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      top_0 += doc.body.scrollTop;
      return top_0;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (top_0 += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-top-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return top_0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Overflow();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_1, 27, 0, [VISIBLE, HIDDEN, SCROLL, AUTO]);
}

defineClass(27, 5, $intern_4);
var AUTO, HIDDEN, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum(27, values_3);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(228, 27, $intern_4, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum(228, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(229, 27, $intern_4, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum(229, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(230, 27, $intern_4, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum(230, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(231, 27, $intern_4, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum(231, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Position();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_1, 28, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(28, 5, $intern_5);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum(28, values_4);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(232, 28, $intern_5, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum(232, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(233, 28, $intern_5, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum(233, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(234, 28, $intern_5, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum(234, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(235, 28, $intern_5, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum(235, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_1, 11, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(11, 5, $intern_6);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum(11, values_5);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(219, 11, $intern_6, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum(219, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(220, 11, $intern_6, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum(220, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(221, 11, $intern_6, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum(221, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(222, 11, $intern_6, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum(222, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(223, 11, $intern_6, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum(223, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(224, 11, $intern_6, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum(224, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(225, 11, $intern_6, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum(225, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(226, 11, $intern_6, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum(226, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(227, 11, $intern_6, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum(227, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_0 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$Visibility();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_1, 52, 0, [VISIBLE_0, HIDDEN_0]);
}

defineClass(52, 5, $intern_7);
var HIDDEN_0, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum(52, values_6);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(236, 52, $intern_7, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum(236, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(237, 52, $intern_7, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum(237, null);
function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = emptyMethod;
  NORMAL = new Style$WhiteSpace$1;
  NOWRAP = new Style$WhiteSpace$2;
  PRE = new Style$WhiteSpace$3;
  PRE_LINE = new Style$WhiteSpace$4;
  PRE_WRAP = new Style$WhiteSpace$5;
}

function Style$WhiteSpace(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_Style$WhiteSpace();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_1, 22, 0, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

defineClass(22, 5, $intern_8);
var NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum(22, values_7);
function Style$WhiteSpace$1(){
  Style$WhiteSpace.call(this, 'NORMAL', 0);
}

defineClass(238, 22, $intern_8, Style$WhiteSpace$1);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum(238, null);
function Style$WhiteSpace$2(){
  Style$WhiteSpace.call(this, 'NOWRAP', 1);
}

defineClass(239, 22, $intern_8, Style$WhiteSpace$2);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum(239, null);
function Style$WhiteSpace$3(){
  Style$WhiteSpace.call(this, 'PRE', 2);
}

defineClass(240, 22, $intern_8, Style$WhiteSpace$3);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum(240, null);
function Style$WhiteSpace$4(){
  Style$WhiteSpace.call(this, 'PRE_LINE', 3);
}

defineClass(241, 22, $intern_8, Style$WhiteSpace$4);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum(241, null);
function Style$WhiteSpace$5(){
  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);
}

defineClass(242, 22, $intern_8, Style$WhiteSpace$5);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum(242, null);
function $getRelativeX(this$static, target){
  return ((this$static.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument);
}

function $getRelativeY(this$static, target){
  return ((this$static.clientY || 0) | 0) - $getAbsoluteTop(target) + ((target.scrollTop || 0) | 0) + $getScrollTop(target.ownerDocument);
}

defineClass(350, 1, {});
_.toString_0 = function toString_7(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass(350);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(351, 350, {});
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass(351);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = $unsafeGet(registered, nativeEvent.type);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext_0();) {
        type_0 = type$iterator.next_1();
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(376, 351, {});
_.getAssociatedType = function getAssociatedType(){
  return $clinit_EndedEvent() , TYPE;
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass(376);
defineClass(196, 1, {});
_.hashCode_0 = function hashCode_3(){
  return this.index_0;
}
;
_.toString_0 = function toString_8(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass(196);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(94, 196, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass(94);
function DomEvent$Type(flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = registered.map_0['ended'];
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, types);
  }
  types.add_0(this);
  this.name_0 = 'ended';
}

defineClass(145, 94, {145:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass(145);
function $clinit_EndedEvent(){
  $clinit_EndedEvent = emptyMethod;
  TYPE = new DomEvent$Type(new EndedEvent);
}

function EndedEvent(){
}

defineClass(326, 376, {}, EndedEvent);
_.dispatch = function dispatch(handler){
  $fireOnPlaybackComplete(handler.this$01.soundHandlerCollection, handler.this$01);
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_EndedEvent_2_classLit = createForClass(326);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, value_0){
  this$static.map_0['ended'] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(329, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass(329);
function CloseEvent_0(){
}

function fire(source){
  var event_0;
  if (TYPE_0) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(305, 351, {}, CloseEvent_0);
_.dispatch = function dispatch_0(handler){
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_0(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass(305);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 59)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.causes));
    }
     else 
      throw toJs($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function HandlerManager(source){
  this.eventBus = new HandlerManager$Bus;
  this.source = source;
}

defineClass(93, 1, {34:1}, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass(93);
defineClass(352, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass(352);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_0(handler));
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_0(handler);
}

function $doFire(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw toJs(new NullPointerException_0('Cannot fire null event'));
  }
  try {
    ++this$static.firingDepth;
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType(), null) , directHandlers);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this$static.isReverseOrder?it.previous():it.next_1();
      try {
        event_0.dispatch(handler);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 8)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $put_2(causes.map_0, e, causes);
        }
         else 
          throw toJs($e0);
      }
    }
    if (causes) {
      throw toJs(new UmbrellaException(causes));
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove(handler);
  removed && l.isEmpty() && (sourceMap = $get_5(this$static.map_0, type_0) , sourceMap.remove_1(source) , sourceMap.isEmpty() && $remove_5(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = $get_5(this$static.map_0, type_0);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_2(this$static.map_0, type_0, sourceMap);
  }
  handlers = sourceMap.get_1(source);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = $get_5(this$static.map_0, type_0);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = sourceMap.get_1(source);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new ArrayList$1(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01.array.length;) {
        c = $next_2(c$iterator);
        c.execute();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

defineClass(197, 352, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass(197);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(198, 197, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass(198);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(290, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass(290);
function UmbrellaException(causes){
  var cause, cause$iterator, i;
  RuntimeException_1.call(this, makeMessage(causes), causes.isEmpty()?null:causes.iterator().next_1());
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = cause$iterator.next_1();
    if (i++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext_0();) {
    t = t$iterator.next_1();
    first?(first = false):(b.string += '; ' , b);
    $append_7(b, t.getMessage());
  }
  return b.string;
}

defineClass(59, 7, $intern_9, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass(59);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(136, 59, $intern_9, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass(136);
function throwIfNull(value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_0('encodedURLComponent cannot be null'));
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function toJava(e){
  var javaException;
  if (instanceOf(e, 8)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += 17592186044416;
    a3 = 1048575;
  }
  a1 = round_int(value_0 / $intern_10);
  a0 = round_int(value_0 - a1 * $intern_10);
  return {l:a0, m:a1, h:a3};
}

function init(){
  var config, raw, platform;
  $onModuleLoad();
  new ZincHtml$HtmlClipboard;
  config = new HtmlPlatform$Config;
  raw = new HtmlPlatform(config);
  platform = new ZincHtml$HtmlPlatform(raw);
  raw.assets.pathPrefix = 'zinc/';
  new Zinc(platform);
  $listenForVisibilityChange(raw);
  $requestAnimationFrame(new HtmlPlatform$2(raw));
}

function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $setElement(this$static, elem){
  this$static.element = elem;
}

function $sinkBitlessEvent(this$static, eventTypeName){
  sinkBitlessEvent(($clinit_DOM() , this$static.element), eventTypeName);
}

defineClass(30, 1, {43:1, 30:1});
_.toString_0 = function toString_10(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass(30);
function $addBitlessDomHandler(this$static, handler, type_0){
  $sinkBitlessEvent(this$static, type_0.name_0);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw toJs(new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw toJs(new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this$static.doDetachChildren();
  }
   finally {
    $clinit_DOM();
    this$static.element.__listener = null;
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_1(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    $remove_2(this$static.parent_0, this$static);
  }
   else if (this$static.parent_0) {
    throw toJs(new IllegalStateException_0("This widget's parent does not implement HasWidgets"));
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && $onDetach(this$static);
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw toJs(new IllegalStateException_0('Cannot set a new parent without first clearing the old parent'));
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && this$static.onAttach();
  }
}

defineClass(25, 30, $intern_11);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && $isOrHasChild(this.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this, this.element);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass(25);
function $clinit_FocusWidget(){
  $clinit_FocusWidget = emptyMethod;
  $clinit_FocusImpl();
}

defineClass(371, 25, $intern_11);
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = $getTabIndex(($clinit_DOM() , this.element));
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass(371);
function $getMediaElement(this$static){
  return $clinit_DOM() , this$static.element;
}

defineClass(318, 371, $intern_11);
var Lcom_google_gwt_media_client_MediaBase_2_classLit = createForClass(318);
function Audio_0(element){
  $setElement(this, ($clinit_DOM() , element));
}

function createIfSupported(){
  $clinit_FocusWidget();
  var element;
  !detector && (detector = new Audio$AudioElementSupportDetectedMaybe);
  element = $doc.createElement('audio');
  if (!element.canPlayType) {
    return null;
  }
  return new Audio_0(element);
}

function isSupported(){
  $clinit_FocusWidget();
  var element;
  !detector && (detector = new Audio$AudioElementSupportDetectedMaybe);
  element = $doc.createElement('audio');
  if (!element.canPlayType) {
    return false;
  }
  return true;
}

defineClass(319, 318, $intern_11, Audio_0);
var detector;
var Lcom_google_gwt_media_client_Audio_2_classLit = createForClass(319);
defineClass(372, 1, {});
var Lcom_google_gwt_media_client_Audio$AudioElementSupportDetector_2_classLit = createForClass(372);
function Audio$AudioElementSupportDetectedMaybe(){
}

defineClass(142, 372, {}, Audio$AudioElementSupportDetectedMaybe);
var Lcom_google_gwt_media_client_Audio$AudioElementSupportDetectedMaybe_2_classLit = createForClass(142);
function $exec(this$static, input_0){
  return this$static.exec(input_0);
}

function $getItem(this$static, key){
  return $getItem_0(this$static.storage, key);
}

function $key(this$static, index_0){
  return $key_0(this$static.storage, index_0);
}

function $removeItem(this$static, key){
  $removeItem_0(this$static.storage, key);
}

function $setItem(this$static, key, data_0){
  $setItem_0(this$static.storage, key, data_0);
}

function Storage_0(){
  this.storage = 'localStorage';
}

defineClass(244, 1, {}, Storage_0);
var localStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass(244);
function $clinit_Storage$StorageSupportDetector(){
  $clinit_Storage$StorageSupportDetector = emptyMethod;
  localStorageSupported = checkStorageSupport('localStorage');
  checkStorageSupport('sessionStorage');
}

function checkStorageSupport(storage){
  var c = '_gwt_dummy_';
  try {
    $wnd[storage].setItem(c, c);
    $wnd[storage].removeItem(c);
    return true;
  }
   catch (e) {
    return false;
  }
}

var localStorageSupported = false;
function $getItem_0(storage, key){
  return $wnd[storage].getItem(key);
}

function $getLength(storage){
  return $wnd[storage].length;
}

function $key_0(storage, index_0){
  return index_0 >= 0 && index_0 < $wnd[storage].length?$wnd[storage].key(index_0):null;
}

function $removeItem_0(storage, key){
  $wnd[storage].getItem(key);
  $wnd[storage].removeItem(key);
}

function $setItem_0(storage, key, data_0){
  $wnd[storage].getItem(key);
  $wnd[storage].setItem(key, data_0);
}

function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_1(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext_0();) {
    entry = iter.next_1();
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove_2();
      }
      return entry;
    }
  }
  return null;
}

function $toString_0(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_9(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(358, 1, $intern_12);
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.equals_0 = function equals_2(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 83)) {
    return false;
  }
  otherMap = obj;
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_1 = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode_0 = function hashCode_4(){
  return hashCode_15(this.entrySet_0());
}
;
_.isEmpty = function isEmpty_1(){
  return this.size_1() == 0;
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.remove_1 = function remove_4(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size_1 = function size_2(){
  return this.entrySet_0().size_1();
}
;
_.toString_0 = function toString_11(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    $add_4(joiner, $toString_0(this, entry.getKey()) + '=' + $toString_0(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass(358);
function $get_0(this$static, key){
  if (key == null) {
    throw toJs(new NullPointerException);
  }
  return $getItem(this$static.storage, toString_9(key));
}

function $put(this$static, key, value_0){
  var old;
  if (key == null || value_0 == null) {
    throw toJs(new NullPointerException);
  }
  old = $getItem(this$static.storage, key);
  $setItem(this$static.storage, key, value_0);
  return old;
}

function $remove_0(this$static, key){
  var k, old;
  if (key == null) {
    throw toJs(new NullPointerException);
  }
  k = toString_9(key);
  old = $getItem(this$static.storage, k);
  $removeItem(this$static.storage, k);
  return old;
}

function StorageMap(storage){
  this.storage = storage;
}

defineClass(245, 358, $intern_12, StorageMap);
_.get_1 = function get_2(key){
  return $get_0(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.remove_1 = function remove_5(key){
  return $remove_0(this, key);
}
;
_.containsKey = function containsKey_0(key){
  return $get_0(this, key) != null;
}
;
_.entrySet_0 = function entrySet(){
  return new StorageMap$StorageEntrySet(this);
}
;
_.size_1 = function size_3(){
  return $getLength(this.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap_2_classLit = createForClass(245);
function $eq(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && $equals(a, b);
}

function $hashCode(o){
  return o != null?getHashCode_0(o):0;
}

function StorageMap$StorageEntry(this$0, key){
  this.this$01 = this$0;
  this.key_0 = key;
}

defineClass(246, 1, $intern_13, StorageMap$StorageEntry);
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue(){
  return $get_0(this.this$01, this.key_0);
}
;
_.setValue = function setValue(value_0){
  return $put(this.this$01, this.key_0, value_0);
}
;
_.equals_0 = function equals_3(obj){
  var e;
  if (!instanceOf(obj, 35)) {
    return false;
  }
  e = obj;
  return $eq(this.key_0, e.getKey()) && $eq($get_0(this.this$01, this.key_0), e.getValue());
}
;
_.hashCode_0 = function hashCode_5(){
  return $hashCode(this.key_0) ^ $hashCode($get_0(this.this$01, this.key_0));
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntry_2_classLit = createForClass(246);
function $next(this$static){
  if (this$static.index_0 >= $getLength(this$static.this$01.storage.storage) - 1) {
    throw toJs(new NoSuchElementException);
  }
  ++this$static.index_0;
  this$static.lastKey = $key(this$static.this$01.storage, this$static.index_0);
  return new StorageMap$StorageEntry(this$static.this$01, this$static.lastKey);
}

function StorageMap$StorageEntryIterator(this$0){
  this.this$01 = this$0;
}

defineClass(247, 1, {}, StorageMap$StorageEntryIterator);
_.next_1 = function next(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.index_0 < $getLength(this.this$01.storage.storage) - 1;
}
;
_.remove_2 = function remove_6(){
  if (this.lastKey == null) {
    throw toJs(new IllegalStateException);
  }
  $removeItem(this.this$01.storage, this.lastKey);
  this.lastKey = null;
  --this.index_0;
}
;
_.index_0 = -1;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntryIterator_2_classLit = createForClass(247);
defineClass(360, 359, $intern_14);
_.equals_0 = function equals_4(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 62)) {
    return false;
  }
  other = o;
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_6(){
  return hashCode_15(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass(360);
function $contains(this$static, o){
  var e, key, value_0;
  if (!instanceOf(o, 35)) {
    return false;
  }
  e = o;
  key = e.getKey();
  value_0 = e.getValue();
  return key != null && value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, $get_0(this$static.this$01, key));
}

function StorageMap$StorageEntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(248, 360, $intern_14, StorageMap$StorageEntrySet);
_.contains_0 = function contains_2(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_2(){
  return new StorageMap$StorageEntryIterator(this.this$01);
}
;
_.remove = function remove_7(o){
  var entry;
  if (!$contains(this, o)) {
    return false;
  }
  entry = o;
  return $remove_0(this.this$01, entry.getKey()) != null;
}
;
_.size_1 = function size_4(){
  return $getLength(this.this$01.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntrySet_2_classLit = createForClass(248);
function create(buffer, byteOffset, length_0){
  return new Float32Array(buffer, byteOffset, length_0);
}

function create_0(buffer, byteOffset, length_0){
  return new Int16Array(buffer, byteOffset, length_0);
}

function create_1(buffer, byteOffset, length_0){
  return new Int32Array(buffer, byteOffset, length_0);
}

function create_2(buffer, byteOffset, length_0){
  return new Int8Array(buffer, byteOffset, length_0);
}

function create_3(buffer, byteOffset, length_0){
  return new Uint16Array(buffer, byteOffset, length_0);
}

function create_4(buffer, byteOffset, length_0){
  return new Uint8Array(buffer, byteOffset, length_0);
}

function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function sinkBitlessEvent(elem, eventTypeName){
  var dispatchMap, dispatcher;
  $clinit_DOM();
  $maybeInitializeEventSystem();
  dispatchMap = bitlessEventDispatchers;
  dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function sinkEvents(elem, eventBits){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_0?TYPE_0:(TYPE_0 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), type_0, handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return null;
  }
  return null;
}

var closeHandlersInitialized = false, handlers_0;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_1 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(195, 351, {}, Window$ClosingEvent);
_.dispatch = function dispatch_1(handler){
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_1(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass(195);
function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = queryString.substr(1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (key.length == 0) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull(val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (!instanceOf($e0, 64))
          throw toJs($e0);
      }
      values = out.get_1(key);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_0(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    entry.setValue(unmodifiableList(entry.getValue()));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = $wnd.location.search;
  if (!listParamMap || !$equals(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

function getParameter(name_0){
  var paramsForName;
  ensureListParameterMap();
  paramsForName = listParamMap.get_1(name_0);
  return !paramsForName?null:paramsForName.get_0(paramsForName.size_1() - 1);
}

var cachedQueryString = '', listParamMap;
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(112, 93, {34:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass(112);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_15;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_10;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_16;
    case 'gesturechange':
      return $intern_17;
    case 'gestureend':
      return $intern_18;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 44)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $initEventSystem(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & $intern_15 && (elem.onerror = bits & $intern_15?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & 524288 && (elem.onpaste = bits & 524288?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & $intern_10 && (elem.ontouchend = bits & $intern_10?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_16 && (elem.ongesturestart = bits & $intern_16?dispatchEvent_1:null);
  chMask & $intern_17 && (elem.ongesturechange = bits & $intern_17?dispatchEvent_1:null);
  chMask & $intern_18 && (elem.ongestureend = bits & $intern_18?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOM();
  return;
}

function dispatchDragEvent(evt){
  evt.preventDefault();
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = evt.currentTarget || $wnd;
  element['__gwtLastUnhandledEvent'] = evt.type;
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = evt.currentTarget || $wnd;
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

defineClass(370, 25, $intern_11);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass(370);
function $add_0(this$static, child, container){
  $removeFromParent(child);
  $add_2(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove_1(this$static, w){
  var elem, parent_0;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , parent_0 = elem.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0), elem);
    $remove_4(this$static.children, w);
  }
  return true;
}

defineClass(291, 370, $intern_11);
_.iterator = function iterator_3(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove_3 = function remove_8(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass(291);
function $add_1(this$static, w){
  $add_0(this$static, w, ($clinit_DOM() , this$static.element));
}

function $remove_2(this$static, w){
  var removed;
  removed = $remove_1(this$static, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

defineClass(292, 291, $intern_11);
_.remove_3 = function remove_9(w){
  return $remove_2(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass(292);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext_0();) {
    w = w$iterator.next_1();
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 8)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $put_2(caught.map_0, e, caught);
      }
       else 
        throw toJs($e0);
    }
  }
  if (caught) {
    throw toJs(new AttachDetachException(caught));
  }
}

defineClass(296, 136, $intern_9, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass(296);
function AttachDetachException$1(){
}

defineClass(297, 1, {}, AttachDetachException$1);
_.execute_1 = function execute_5(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass(297);
function AttachDetachException$2(){
}

defineClass(298, 1, {}, AttachDetachException$2);
_.execute_1 = function execute_6(w){
  $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass(298);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  this.children = new WidgetCollection(this);
  $setElement(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    $onDetach(widget);
  }
   finally {
    $remove_10(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_3(){
  $clinit_RootPanel();
  var rp;
  rp = $get_5(rootPanels, null);
  if (rp) {
    return rp;
  }
  $size(rootPanels) == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put_2(rootPanels, null, rp);
  $add_3(widgetsToDetach, rp);
  return rp;
}

defineClass(99, 292, $intern_19);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass(99);
function RootPanel$1(){
}

defineClass(294, 1, {}, RootPanel$1);
_.execute_1 = function execute_7(w){
  w.attached && $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass(294);
function RootPanel$2(){
}

defineClass(295, 1, {383:1, 377:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass(295);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, ($clinit_RootPanel() , $doc.body));
}

defineClass(293, 99, $intern_19, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass(293);
function $add_2(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf_0(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_1, 25, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      newArray[i0] = this$static.array[i0];
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    this$static.array[i] = this$static.array[i - 1];
  }
  this$static.array[beforeIndex] = w;
}

function $remove_3(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    this$static.array[i] = this$static.array[i + 1];
  }
  this$static.array[this$static.size_0] = null;
}

function $remove_4(this$static, w){
  var index_0;
  index_0 = $indexOf_0(this$static, w);
  if (index_0 == -1) {
    throw toJs(new NoSuchElementException);
  }
  $remove_3(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_1, 25, 4, 0, 1);
}

defineClass(327, 1, {}, WidgetCollection);
_.iterator = function iterator_4(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass(327);
function $next_0(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw toJs(new NoSuchElementException);
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(146, 1, {}, WidgetCollection$WidgetIterator);
_.next_1 = function next_0(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.index_0 < this.this$01.size_0;
}
;
_.remove_2 = function remove_10(){
  if (!this.currentWidget) {
    throw toJs(new IllegalStateException);
  }
  this.this$01.parent_0.remove_3(this.currentWidget);
  --this.index_0;
  this.currentWidget = null;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass(146);
function $clinit_FocusImpl(){
  $clinit_FocusImpl = emptyMethod;
  implPanel = new FocusImplSafari;
  implPanel?new FocusImpl:implPanel;
}

function FocusImpl(){
}

defineClass(322, 1, {}, FocusImpl);
var implPanel;
var Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass(322);
defineClass(375, 322, {});
var Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass(375);
function FocusImplSafari(){
}

defineClass(325, 375, {}, FocusImplSafari);
var Lcom_google_gwt_user_client_ui_impl_FocusImplSafari_2_classLit = createForClass(325);
function $setAntialias(this$static, antialias){
  this$static.antialias = antialias;
}

function $attachShader(this$static, program, shader){
  this$static.attachShader(program, shader);
}

function $bindBuffer(this$static, target, buffer){
  this$static.bindBuffer(target, buffer);
}

function $bindFramebuffer(this$static, target, framebuffer){
  this$static.bindFramebuffer(target, framebuffer);
}

function $bindTexture(this$static, target, texture){
  this$static.bindTexture(target, texture);
}

function $bufferData(this$static, target, data_0, usage){
  this$static.bufferData(target, data_0, usage);
}

function $clearColor(this$static, red, green, blue, alpha_0){
  this$static.clearColor(red, green, blue, alpha_0);
}

function $compileShader(this$static, shader){
  this$static.compileShader(shader);
}

function $createShader(this$static, type_0){
  return this$static.createShader(type_0);
}

function $deleteProgram(this$static, program){
  this$static.deleteProgram(program);
}

function $deleteShader(this$static, shader){
  this$static.deleteShader(shader);
}

function $disableVertexAttribArray(this$static, index_0){
  this$static.disableVertexAttribArray(index_0);
}

function $drawElements(this$static, mode, count, type_0, offset){
  this$static.drawElements(mode, count, type_0, offset);
}

function $enableVertexAttribArray(this$static, index_0){
  this$static.enableVertexAttribArray(index_0);
}

function $getAttribLocation(this$static, program, name_0){
  return this$static.getAttribLocation(program, name_0);
}

function $getProgramInfoLog(this$static, program){
  return this$static.getProgramInfoLog(program);
}

function $getProgramParameterb(this$static, program, pname){
  return this$static.getProgramParameter(program, pname);
}

function $getShaderInfoLog(this$static, shader){
  return this$static.getShaderInfoLog(shader);
}

function $getShaderParameterb(this$static, shader, pname){
  return this$static.getShaderParameter(shader, pname);
}

function $getUniformLocation(this$static, program, name_0){
  return this$static.getUniformLocation(program, name_0);
}

function $linkProgram(this$static, program){
  this$static.linkProgram(program);
}

function $shaderSource(this$static, shader, source){
  this$static.shaderSource(shader, source);
}

function $texImage2D(this$static, target, level, internalformat, format, type_0, image){
  this$static.texImage2D(target, level, internalformat, format, type_0, image);
}

function $texParameteri(this$static, target, pname, param){
  this$static.texParameteri(target, pname, param);
}

function $uniform1f(this$static, location_0, x_0){
  this$static.uniform1f(location_0, x_0);
}

function $uniform1i(this$static, location_0, x_0){
  this$static.uniform1i(location_0, x_0);
}

function $uniform2f(this$static, location_0, x_0, y_0){
  this$static.uniform2f(location_0, x_0, y_0);
}

function $uniform4fv(this$static, location_0, v){
  this$static.uniform4fv(location_0, v);
}

function $useProgram(this$static, program){
  this$static.useProgram(program);
}

function $vertexAttribPointer(this$static, indx, size_0, type_0, normalized, stride, offset){
  this$static.vertexAttribPointer(indx, size_0, type_0, normalized, stride, offset);
}

function $viewport(this$static, x_0, y_0, width_0, height){
  this$static.viewport(x_0, y_0, width_0, height);
}

function getContext(canvas, attributes){
  var names = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-webgl', 'webkit-3d'];
  for (var i = 0; i < names.length; i++) {
    try {
      var ctx = canvas.getContext(names[i], attributes);
      if (ctx != null) {
        if ($wnd.WebGLDebugUtils) {
          $wnd.console && $wnd.console.log && console.log('WebGL debugging enabled');
          return $wnd.WebGLDebugUtils.makeDebugContext(ctx);
        }
        return ctx;
      }
    }
     catch (e) {
    }
  }
  return null;
}

function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(199, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass(199);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(200, 1, {378:1}, SimpleEventBus$2);
_.execute = function execute_8(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass(200);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(201, 1, {378:1}, SimpleEventBus$3);
_.execute = function execute_9(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass(201);
defineClass(344, 1, {12:1});
var Ljava_io_OutputStream_2_classLit = createForClass(344);
defineClass(345, 344, {12:1});
var Ljava_io_FilterOutputStream_2_classLit = createForClass(345);
function PrintStream(){
}

defineClass(160, 345, {12:1}, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass(160);
function $charAt(this$static, index_0){
  return $charAt_0(this$static.string, index_0);
}

function $setLength(this$static, newLength){
  var oldLength;
  oldLength = this$static.string.length;
  newLength < oldLength?(this$static.string = $substring_0(this$static.string, 0, newLength)):newLength > oldLength && (this$static.string += valueOf_0(initUnidimensionalArray(C_classLit, $intern_1, 15, newLength - oldLength, 15, 1)));
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(88, 1, {107:1});
_.toString_0 = function toString_12(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass(88);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

booleanCastMap = {4:1, 6:1};
var Ljava_lang_Boolean_2_classLit = createForClass(340);
function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(87, 1, {4:1, 87:1});
var Ljava_lang_Number_2_classLit = createForClass(87);
doubleCastMap = {4:1, 6:1, 87:1};
var Ljava_lang_Double_2_classLit = createForClass(341);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(19, 7, $intern_3, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass(19);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(14, 7, $intern_3, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass(14);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(37, 7, $intern_3, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass(37);
function Integer(value_0){
  this.value_0 = value_0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(65, 87, {4:1, 6:1, 65:1, 87:1}, Integer);
_.equals_0 = function equals_5(o){
  return instanceOf(o, 65) && o.value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_7(){
  return this.value_0;
}
;
_.toString_0 = function toString_14(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass(65);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_1, 65, 256, 0, 1);
}

var boxedValues;
function min_0(x_0){
  return x_0 < 5?x_0:5;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(31, 89, $intern_3, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new $wnd.TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass(31);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(72, 19, $intern_3, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass(72);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(36, 1, {4:1, 36:1}, StackTraceElement);
_.equals_0 = function equals_6(other){
  var st;
  if (instanceOf(other, 36)) {
    st = other;
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className == st.className && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_8(){
  return hashCode_14(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 5, [valueOf(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_15(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass(36);
function $charAt_0(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $equalsIgnoreCase(other){
  checkCriticalNotNull('body');
  if (other == null) {
    return false;
  }
  if ($equals('body', other)) {
    return true;
  }
  return 'body'.length == other.length && $equals('body'.toLowerCase(), other.toLowerCase());
}

function $indexOf_1(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $replaceFirst(this$static, regex, replace){
  var jsRegEx;
  replace = translateReplaceString(replace);
  jsRegEx = new RegExp(regex);
  return this$static.replace(jsRegEx, replace);
}

function $split(this$static, regex, maxMatch){
  var compiled, count, lastNonEmpty, lastTrail, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_1, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = $substring_0(trail, 0, matchObj.index);
      trail = $substring_0(trail, matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty , undefined);
  }
  return out;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && this$static.charCodeAt(start_0) <= 32) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && this$static.charCodeAt(end - 1) <= 32) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_15) {
    hiSurrogate = 55296 + (codePoint - $intern_15 >> 10 & 1023) & $intern_20;
    loSurrogate = 56320 + (codePoint - $intern_15 & 1023) & $intern_20;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_20);
  }
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring(replaceStr, ++pos)));
  }
  return replaceStr;
}

function valueOf_0(x_0){
  return valueOf_1(x_0, x_0.length);
}

function valueOf_1(x_0, count){
  var batchEnd, batchStart, s;
  checkCriticalStringBounds(count, x_0.length);
  s = '';
  for (batchStart = 0; batchStart < count;) {
    batchEnd = batchStart + 10000 < count?batchStart + 10000:count;
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

stringCastMap = {4:1, 107:1, 6:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass(2);
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuffer(){
  AbstractStringBuilder.call(this, '');
}

defineClass(73, 88, {107:1}, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass(73);
function $append_1(this$static, x_0){
  this$static.string += String.fromCharCode(x_0);
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_4(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_5(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_6(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_7(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_8(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(50, 88, {107:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass(50);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(159, 37, $intern_3, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass(159);
function $clinit_System(){
  $clinit_System = emptyMethod;
  out_0 = new PrintStream;
}

function arraycopy(src_0, dest, destOfs, len){
  $clinit_System();
  var destlen, srclen;
  checkCriticalNotNull_0(src_0, 'src');
  checkCriticalNotNull_0(dest, 'dest');
  getClass__Ljava_lang_Class___devirtual$(src_0);
  getClass__Ljava_lang_Class___devirtual$(dest);
  srclen = src_0.length;
  destlen = dest.length;
  if (destOfs < 0 || len < 0 || len > srclen || destOfs + len > destlen) {
    throw toJs(new IndexOutOfBoundsException);
  }
  len > 0 && copy(src_0, 0, dest, destOfs, len, true);
}

defineClass(415, 1, {});
var out_0;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(20, 7, $intern_3, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass(20);
function $clear(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  this$static.limit = this$static.capacity;
  return this$static;
}

function $limit(this$static, newLimit){
  if (newLimit < 0 || newLimit > this$static.capacity) {
    throw toJs(new IllegalArgumentException);
  }
  this$static.limit = newLimit;
  this$static.position_0 > newLimit && (this$static.position_0 = newLimit);
  this$static.mark != -1 && this$static.mark > newLimit && (this$static.mark = -1);
  return this$static;
}

function $position(this$static){
  if (0 > this$static.limit) {
    throw toJs(new IllegalArgumentException);
  }
  this$static.position_0 = 0;
  this$static.mark != -1 && this$static.mark > this$static.position_0 && (this$static.mark = -1);
  return this$static;
}

function $rewind(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  return this$static;
}

function Buffer(capacity){
  if (capacity < 0) {
    throw toJs(new IllegalArgumentException);
  }
  this.capacity = this.limit = capacity;
}

defineClass(69, 1, {});
_.capacity = 0;
_.limit = 0;
_.mark = -1;
_.position_0 = 0;
var Ljava_nio_Buffer_2_classLit = createForClass(69);
function BufferOverflowException(){
  RuntimeException.call(this);
}

defineClass(139, 7, $intern_3, BufferOverflowException);
var Ljava_nio_BufferOverflowException_2_classLit = createForClass(139);
function $$init_0(this$static){
  this$static.order = ($clinit_ByteOrder() , BIG_ENDIAN);
}

function $asIntBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw toJs(new RuntimeException_0('Native order supported only.'));
  }
  return new IntBuffer($slice(this$static));
}

function $asShortBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw toJs(new RuntimeException_0('Native order supported only.'));
  }
  return new ShortBuffer($slice(this$static));
}

function $get_1(this$static, index_0){
  return this$static.byteArray[index_0];
}

function $order(this$static, byteOrder){
  this$static.order = byteOrder;
  return this$static;
}

function $slice(this$static){
  var slice_0;
  slice_0 = new ByteBuffer_1(this$static.byteArray.buffer, this$static.limit - this$static.position_0, this$static.byteArray.byteOffset + this$static.position_0);
  slice_0.order = this$static.order;
  return slice_0;
}

function ByteBuffer(capacity){
  ByteBuffer_0.call(this, new ArrayBuffer(capacity));
}

function ByteBuffer_0(buf){
  Buffer.call(this, buf.byteLength);
  $$init_0(this);
  this.byteArray = new Int8Array(buf);
}

function ByteBuffer_1(buffer, capacity, offset){
  Buffer.call(this, capacity);
  $$init_0(this);
  this.byteArray = new Int8Array(buffer, offset, capacity);
}

function allocateDirect(capacity){
  if (capacity < 0) {
    throw toJs(new IllegalArgumentException);
  }
  return new ByteBuffer(capacity);
}

defineClass(71, 69, {6:1, 71:1, 105:1}, ByteBuffer, ByteBuffer_1);
_.equals_0 = function equals_7(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 71)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_1(this, myPosition++) == $get_1(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize(){
  return 1;
}
;
_.getElementType = function getElementType(){
  return 5120;
}
;
_.getTypedArray = function getTypedArray(){
  return this.byteArray;
}
;
_.hashCode_0 = function hashCode_9(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_1(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_16(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ByteBuffer_2_classLit) , Ljava_nio_ByteBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ByteBuffer_2_classLit = createForClass(71);
function $clinit_ByteOrder(){
  $clinit_ByteOrder = emptyMethod;
  BIG_ENDIAN = new ByteOrder('BIG_ENDIAN');
  LITTLE_ENDIAN = new ByteOrder('LITTLE_ENDIAN');
  NATIVE_ORDER = LITTLE_ENDIAN;
}

function ByteOrder(name_0){
  this.name_0 = name_0;
}

defineClass(138, 1, {}, ByteOrder);
_.toString_0 = function toString_17(){
  return this.name_0;
}
;
var BIG_ENDIAN, LITTLE_ENDIAN, NATIVE_ORDER;
var Ljava_nio_ByteOrder_2_classLit = createForClass(138);
function $get_2(this$static, index_0){
  return this$static.floatArray[index_0];
}

function $put_0(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || compare_0(len, length_0) > 0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (len > this$static.limit - this$static.position_0) {
    throw toJs(new BufferOverflowException);
  }
  for (i = 0; i < len; i++) {
    this$static.floatArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function FloatBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear(this.byteBuffer);
  this.floatArray = create(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(79, 69, {6:1, 79:1, 105:1}, FloatBuffer);
_.equals_0 = function equals_8(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 79)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_2(this, myPosition++) == $get_2(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_0(){
  return 4;
}
;
_.getElementType = function getElementType_0(){
  return 5126;
}
;
_.getTypedArray = function getTypedArray_0(){
  return this.floatArray;
}
;
_.toString_0 = function toString_18(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_FloatBuffer_2_classLit) , Ljava_nio_FloatBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_FloatBuffer_2_classLit = createForClass(79);
function $get_3(this$static, index_0){
  return this$static.intArray[index_0];
}

function IntBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear(this.byteBuffer);
  this.intArray = create_1(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(101, 69, {6:1, 101:1, 105:1}, IntBuffer);
_.equals_0 = function equals_9(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 101)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_3(this, myPosition++) == $get_3(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_1(){
  return 4;
}
;
_.getElementType = function getElementType_1(){
  return 5124;
}
;
_.getTypedArray = function getTypedArray_1(){
  return this.intArray;
}
;
_.hashCode_0 = function hashCode_10(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_3(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_19(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_IntBuffer_2_classLit) , Ljava_nio_IntBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_IntBuffer_2_classLit = createForClass(101);
function $get_4(this$static, index_0){
  return this$static.shortArray[index_0];
}

function $put_1(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || compare_0(len, length_0) > 0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (len > this$static.limit - this$static.position_0) {
    throw toJs(new BufferOverflowException);
  }
  for (i = 0; i < len; i++) {
    this$static.shortArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function ShortBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 1);
  this.byteBuffer = byteBuffer;
  $clear(this.byteBuffer);
  this.shortArray = create_0(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(100, 69, {6:1, 100:1, 105:1}, ShortBuffer);
_.equals_0 = function equals_10(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 100)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_4(this, myPosition++) == $get_4(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_2(){
  return 2;
}
;
_.getElementType = function getElementType_2(){
  return 5122;
}
;
_.getTypedArray = function getTypedArray_2(){
  return this.shortArray;
}
;
_.hashCode_0 = function hashCode_11(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_4(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_20(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ShortBuffer_2_classLit) , Ljava_nio_ShortBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ShortBuffer_2_classLit = createForClass(100);
function $containsKey(this$static, key){
  return instanceOfString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_2(this$static.stringMap, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $get_5(this$static, key){
  return instanceOfString(key)?key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_6(this$static.stringMap, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $put_2(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_3(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_3(this$static.hashCodeMap, null, value_0):$put_4(this$static.stringMap, key, value_0);
}

function $remove_5(this$static, key){
  return instanceOfString(key)?key == null?$remove_11(this$static.hashCodeMap, null):$remove_12(this$static.stringMap, key):$remove_11(this$static.hashCodeMap, key);
}

function $reset(this$static){
  var modCount;
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  modCount = this$static['_gwt_modCount'] | 0;
  this$static['_gwt_modCount'] = modCount + 1;
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(251, 358, $intern_12);
_.containsKey = function containsKey_1(key){
  return $containsKey(this, key);
}
;
_.entrySet_0 = function entrySet_0(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_1 = function get_4(key){
  return $get_5(this, key);
}
;
_.put = function put_1(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.remove_1 = function remove_11(key){
  return $remove_5(this, key);
}
;
_.size_1 = function size_5(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass(251);
function $contains_0(this$static, o){
  if (instanceOf(o, 35)) {
    return $containsEntry(this$static.this$01, o);
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(77, 360, $intern_14, AbstractHashMap$EntrySet);
_.contains_0 = function contains_3(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_5(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove = function remove_12(entry){
  var key;
  if ($contains_0(this, entry)) {
    key = entry.getKey();
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_6(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass(77);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next_1(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last = this$static.current;
  rv = this$static.current.next_1();
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function $remove_6(this$static){
  var modCount;
  checkCriticalState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_2();
  this$static.last = null;
  this$static.hasNext = $computeHasNext(this$static);
  modCount = this$static.this$01['_gwt_modCount'];
  this$static['_gwt_modCount'] = modCount;
}

function AbstractHashMap$EntrySetIterator(this$0){
  var modCount;
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  modCount = this$0['_gwt_modCount'];
  this['_gwt_modCount'] = modCount;
}

defineClass(78, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_1 = function next_1(){
  return $next_1(this);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.hasNext;
}
;
_.remove_2 = function remove_13(){
  $remove_6(this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass(78);
function $remove_7(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01_0.remove_0(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(116, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_2(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_1 = function next_2(){
  checkCriticalElement(this.i < this.this$01_0.size_1());
  return this.this$01_0.get_0(this.last = this.i++);
}
;
_.remove_2 = function remove_14(){
  $remove_7(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass(116);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(117, 116, {}, AbstractList$ListIteratorImpl);
_.remove_2 = function remove_15(){
  $remove_7(this);
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_0(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass(117);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(250, 360, $intern_14, AbstractMap$1);
_.contains_0 = function contains_4(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_6(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove = function remove_16(key){
  if ($containsKey(this.this$01, key)) {
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_7(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass(250);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(115, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_3(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_3(){
  var entry;
  entry = $next_1(this.val$outerIter2);
  return entry.getKey();
}
;
_.remove_2 = function remove_17(){
  $remove_6(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass(115);
defineClass(249, 1, $intern_13);
_.equals_0 = function equals_11(other){
  var entry;
  if (!instanceOf(other, 35)) {
    return false;
  }
  entry = other;
  return equals_17(this.key_0, entry.getKey()) && equals_17(this.value_0, entry.getValue());
}
;
_.getKey = function getKey_0(){
  return this.key_0;
}
;
_.getValue = function getValue_0(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_12(){
  return hashCode_21(this.key_0) ^ hashCode_21(this.value_0);
}
;
_.setValue = function setValue_0(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_21(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass(249);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(114, 249, $intern_13, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass(114);
defineClass(369, 1, $intern_13);
_.equals_0 = function equals_12(other){
  var entry;
  if (!instanceOf(other, 35)) {
    return false;
  }
  entry = other;
  return equals_17(this.val$entry2.value[0], entry.getKey()) && equals_17($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_13(){
  return hashCode_21(this.val$entry2.value[0]) ^ hashCode_21($getValue(this));
}
;
_.toString_0 = function toString_22(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass(369);
function $next_2(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function $remove_8(this$static){
  checkCriticalState(this$static.last != -1);
  $remove(this$static.this$01, this$static.i = this$static.last);
  this$static.last = -1;
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(26, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_4(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_4(){
  return $next_2(this);
}
;
_.remove_2 = function remove_18(){
  $remove_8(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass(26);
function hashCode_14(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_15(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_16(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 84)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(275, 362, $intern_2, Collections$EmptyList);
_.contains_0 = function contains_5(object){
  return false;
}
;
_.get_0 = function get_5(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_7(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_8(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass(275);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(276, 1, {}, Collections$EmptyListIterator);
_.hasNext_0 = function hasNext_5(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_1 = function next_5(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
_.remove_2 = function remove_19(){
  throw toJs(new IllegalStateException);
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass(276);
defineClass(125, 1, {});
_.add_0 = function add_5(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.isEmpty = function isEmpty_2(){
  return this.coll.isEmpty();
}
;
_.iterator = function iterator_8(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.remove = function remove_20(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_9(){
  return this.coll.size_1();
}
;
_.toString_0 = function toString_23(){
  return toString_9(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass(125);
function $remove_9(){
  throw toJs(new UnsupportedOperationException);
}

function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(127, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext_0 = function hasNext_6(){
  return this.it.hasNext_0();
}
;
_.next_1 = function next_6(){
  return this.it.next_1();
}
;
_.remove_2 = function remove_21(){
  $remove_9();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass(127);
function Collections$UnmodifiableList(list){
  this.coll = list;
  this.list = list;
}

defineClass(126, 125, {63:1}, Collections$UnmodifiableList);
_.equals_0 = function equals_13(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.list, o);
}
;
_.get_0 = function get_6(index_0){
  return this.list.get_0(index_0);
}
;
_.hashCode_0 = function hashCode_17(){
  return hashCode__I__devirtual$(this.list);
}
;
_.isEmpty = function isEmpty_3(){
  return this.list.isEmpty();
}
;
_.listIterator = function listIterator_2(){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(0));
}
;
_.listIterator_0 = function listIterator_3(from){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(from));
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass(126);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(128, 127, {}, Collections$UnmodifiableListIterator);
_.remove_2 = function remove_22(){
  $remove_9();
}
;
_.hasPrevious = function hasPrevious_1(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_2(){
  return this.lit.previous();
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass(128);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(277, 1, $intern_12, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_1(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals_0 = function equals_14(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.map_0, o);
}
;
_.get_1 = function get_7(key){
  return this.map_0.get_1(key);
}
;
_.hashCode_0 = function hashCode_18(){
  return hashCode__I__devirtual$(this.map_0);
}
;
_.isEmpty = function isEmpty_4(){
  return this.map_0.isEmpty();
}
;
_.put = function put_2(key, value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.remove_1 = function remove_23(key){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_10(){
  return this.map_0.size_1();
}
;
_.toString_0 = function toString_24(){
  return toString_9(this.map_0);
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass(277);
defineClass(278, 125, $intern_14);
_.equals_0 = function equals_15(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.coll, o);
}
;
_.hashCode_0 = function hashCode_19(){
  return hashCode__I__devirtual$(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass(278);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  this.coll = s;
}

defineClass(279, 278, $intern_14, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_9(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass(279);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(282, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.next_1 = function next_7(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(this.val$it2.next_1());
}
;
_.hasNext_0 = function hasNext_7(){
  return this.val$it2.hasNext_0();
}
;
_.remove_2 = function remove_24(){
  throw toJs(new UnsupportedOperationException);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass(282);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(280, 1, $intern_13, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals_0 = function equals_16(o){
  return this.entry.equals_0(o);
}
;
_.getKey = function getKey_1(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_1(){
  return this.entry.getValue();
}
;
_.hashCode_0 = function hashCode_20(){
  return this.entry.hashCode_0();
}
;
_.setValue = function setValue_1(value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.toString_0 = function toString_25(){
  return toString_9(this.entry);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass(280);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(281, 126, {63:1, 84:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass(281);
function checkStructuralChange(host, iterator){
  if (iterator['_gwt_modCount'] != host['_gwt_modCount']) {
    throw toJs(new ConcurrentModificationException);
  }
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0['_gwt_modCount'] | 0;
  map_0['_gwt_modCount'] = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(311, 7, $intern_3, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass(311);
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  $reset(this);
}

defineClass(40, 251, {4:1, 83:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass(40);
function $add_3(this$static, o){
  var old;
  old = $put_2(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_1(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_10(this$static, o){
  return $remove_5(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(102, 360, {4:1, 62:1}, HashSet);
_.add_0 = function add_6(o){
  return $add_3(this, o);
}
;
_.contains_0 = function contains_6(o){
  return $contains_1(this, o);
}
;
_.isEmpty = function isEmpty_5(){
  return $size(this.map_0) == 0;
}
;
_.iterator = function iterator_10(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove = function remove_25(o){
  return $remove_10(this, o);
}
;
_.size_1 = function size_11(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass(102);
function $findEntryInChain(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?[]:chain;
}

function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

function $put_3(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?[]:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode0, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  chain0[chain0.length] = new AbstractMap$SimpleEntry(key, value_0);
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_11(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?[]:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_0(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        this$static.backingMap['delete'](hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(289, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_11(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass(289);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = [];
}

defineClass(135, 1, {}, InternalHashCodeMap$1);
_.next_1 = function next_8(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_8(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove_2 = function remove_26(){
  $remove_11(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass(135);
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_2(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_6(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_4(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_12(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    this$static.backingMap['delete'](key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(287, 1, {}, InternalStringMap);
_.iterator = function iterator_12(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass(287);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(134, 1, {}, InternalStringMap$1);
_.next_1 = function next_9(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_9(){
  return !this.current.done;
}
;
_.remove_2 = function remove_27(){
  $remove_12(this.this$01, this.last.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass(134);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_6(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(288, 369, $intern_13, InternalStringMap$2);
_.getKey = function getKey_2(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_2(){
  return $getValue(this);
}
;
_.setValue = function setValue_2(object){
  return $put_4(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass(288);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(61, 7, $intern_3, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass(61);
function equals_17(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_21(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $add_4(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_0(this$static.prefix)):$append_7(this$static.builder, this$static.delimiter);
  $append_5(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(110, 1, {}, StringJoiner);
_.toString_0 = function toString_26(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass(110);
function applySplice(array, index_0, deleteCount, arrayToAdd){
  Array.prototype.splice.apply(array, [index_0, deleteCount].concat(arrayToAdd));
}

function clone(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return getElementTypeCategory(array) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap, array.__elementTypeId$, getElementTypeCategory(array), result) , result;
}

function copy(src_0, srcOfs, dest, destOfs, len, overwrite){
  var batchEnd, batchStart, end;
  if (maskUndefined(src_0) === maskUndefined(dest)) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = batchStart + 10000 < end?batchStart + 10000:end;
    len = batchEnd - batchStart;
    applySplice(dest, destOfs, overwrite?len:0, src_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy(values, 0, array, index_0, values.length, false);
}

function removeFrom(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function checkCriticalArgument(expression){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0('Exception can not suppress itself.'));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw toJs(new NullPointerException_0(errorMessage));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalStringBounds(end, length_0){
  if (end > length_0 || end < 0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function checkNotNull(reference){
  checkCriticalNotNull(reference);
  return reference;
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt_0(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (!(result === undefined)) {
    return result;
  }
  result = back_0[key];
  hashCode = result === undefined?compute(str):result;
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
defineClass(346, 1, {});
var Lplayn_core_Assets_2_classLit = createForClass(346);
defineClass(349, 1, {});
var Lplayn_core_Audio_2_classLit = createForClass(349);
function $draw(this$static, image){
  return $draw_0(this$static, image, image.val$rwidth5, image.val$rheight6);
}

function $draw_0(this$static, image, w, h){
  $draw_1(image, this$static.ctx, w, h);
  return this$static;
}

function $toTexture(this$static, config){
  return $createTexture_0(this$static.image, config);
}

function Canvas_0(image){
  this.image = image;
  this.width_0 = $invScaled(image.scale_0, image.pixelWidth);
  this.height_0 = $invScaled(image.scale_0, image.pixelHeight);
  if (this.width_0 <= 0 || this.height_0 <= 0)
    throw toJs(new IllegalArgumentException_0('Canvas must be > 0 in width and height: ' + this.width_0 + 'x' + this.height_0));
}

defineClass(306, 1, $intern_21);
_.height_0 = 0;
_.width_0 = 0;
var Lplayn_core_Canvas_2_classLit = createForClass(306);
function Clock(){
}

defineClass(98, 1, {98:1}, Clock);
_.tick = 0;
var Lplayn_core_Clock_2_classLit = createForClass(98);
defineClass(23, 1, {23:1});
var Lplayn_core_Event_2_classLit = createForClass(23);
function $setFlag(this$static, flag){
  this$static.flags |= flag;
}

function Event$Input(time){
  this.flags = 0;
  this.time = time;
}

function modifierFlags(altP, ctrlP, metaP, shiftP){
  var flags;
  flags = 0;
  altP && (flags |= 2);
  ctrlP && (flags |= 4);
  metaP && (flags |= 16);
  shiftP && (flags |= 8);
  return flags;
}

defineClass(21, 23, {23:1, 21:1});
_.addFields = function addFields(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
}
;
_.name_1 = function name_2(){
  return 'Input';
}
;
_.toString_0 = function toString_27(){
  var builder;
  builder = $append_1(new StringBuilder_0(this.name_1()), 91);
  this.addFields(builder);
  return (builder.string += ']' , builder).string;
}
;
_.flags = 0;
_.time = 0;
var Lplayn_core_Event$Input_2_classLit = createForClass(21);
function Event$XY(time, x_0, y_0){
  Event$Input.call(this, time);
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(38, 21, {23:1, 21:1, 38:1, 42:1});
_.addFields = function addFields_0(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
}
;
_.name_1 = function name_3(){
  return 'XY';
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lplayn_core_Event$XY_2_classLit = createForClass(38);
defineClass(356, 1, {});
var Lplayn_core_Exec_2_classLit = createForClass(356);
function $clinit_Reactor(){
  $clinit_Reactor = emptyMethod;
  DISPATCHING = new Cons(null, null);
}

function $addConnection(this$static, listener){
  if (!listener)
    throw toJs(new NullPointerException_0('Null listener'));
  return $addCons(this$static, new Cons(this$static, listener));
}

function $addCons(this$static, cons){
  this$static._listeners == DISPATCHING?(this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$1(this$static, cons))):(this$static._listeners = insert(this$static._listeners, cons));
  return cons;
}

function $clearConnections(this$static){
  if (this$static._listeners == DISPATCHING)
    throw toJs(new IllegalStateException_0('Cannot clear connections while dispatching.'));
  this$static._listeners = null;
}

function $disconnect(this$static, cons){
  this$static._listeners == DISPATCHING?(this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$2(this$static, cons))):(this$static._listeners = remove_28(this$static._listeners, cons));
}

function $notify(this$static, notifier, a1, a2, a3){
  var cons, ex, exn, lners, run, sentinel, run_0;
  if (this$static._listeners == DISPATCHING) {
    this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$4(this$static, notifier, a1, a2, a3));
    return;
  }
  lners = this$static._listeners;
  sentinel = DISPATCHING;
  this$static._listeners = sentinel;
  exn = null;
  try {
    for (cons = lners; cons; cons = cons.next_0) {
      try {
        notifier.notify(cons._ref._lner, a1, a2, a3);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 7)) {
          ex = $e0;
          exn = ex;
        }
         else 
          throw toJs($e0);
      }
      cons._oneShot && $close(cons);
    }
  }
   finally {
    this$static._listeners = lners;
    while (run = (run_0 = this$static._pendingRuns , !!run_0 && (this$static._pendingRuns = run_0.next_0) , run_0)) {
      try {
        run.run();
      }
       catch ($e1) {
        $e1 = toJava($e1);
        if (instanceOf($e1, 7)) {
          ex = $e1;
          exn = ex;
        }
         else 
          throw toJs($e1);
      }
    }
  }
  if (exn)
    throw toJs(exn);
}

function append(head, action){
  if (!head)
    return action;
  head.next_0 = append(head.next_0, action);
  return head;
}

defineClass(353, 1, {});
var DISPATCHING;
var Lreact_Reactor_2_classLit = createForClass(353);
defineClass(357, 353, {});
var Lreact_RFuture_2_classLit = createForClass(357);
function $clinit_RPromise(){
  $clinit_RPromise = emptyMethod;
  $clinit_Reactor();
  COMPLETE = new RPromise$1;
}

function $complete(this$static, result){
  if (this$static._result)
    throw toJs(new IllegalStateException_0('Already completed'));
  this$static._result = result;
  try {
    $notify(this$static, COMPLETE, result, null, null);
  }
   finally {
    $clearConnections(this$static);
  }
}

function RPromise(){
  $clinit_RPromise();
}

defineClass(95, 357, {95:1}, RPromise);
_.fail = function fail(cause){
  $complete(this, new Try$Failure(cause));
}
;
_.result = function result_0(){
  return this._result;
}
;
_.succeed = function succeed(value_0){
  $complete(this, new Try$Success(value_0));
}
;
var COMPLETE;
var Lreact_RPromise_2_classLit = createForClass(95);
function $fail(this$static, cause){
  $invokeLater(this$static.this$01, new Exec$1$2(this$static, cause));
}

function $succeed(this$static, value_0){
  $invokeLater(this$static.this$01, new Exec$1$1(this$static, value_0));
}

function Exec$1(this$0){
  $clinit_RPromise();
  this.this$01 = this$0;
}

defineClass(210, 95, {95:1}, Exec$1);
_.fail = function fail_0(cause){
  $fail(this, cause);
}
;
_.succeed = function succeed_0(value_0){
  $succeed(this, value_0);
}
;
var Lplayn_core_Exec$1_2_classLit = createForClass(210);
function Exec$1$1(this$1, val$value){
  this.this$11 = this$1;
  this.val$value2 = val$value;
}

defineClass(211, 1, $intern_22, Exec$1$1);
_.run = function run_1(){
  $complete(this.this$11, new Try$Success(this.val$value2));
}
;
var Lplayn_core_Exec$1$1_2_classLit = createForClass(211);
function Exec$1$2(this$1, val$cause){
  this.this$11 = this$1;
  this.val$cause2 = val$cause;
}

defineClass(212, 1, $intern_22, Exec$1$2);
_.run = function run_2(){
  $complete(this.this$11, new Try$Failure(this.val$cause2));
}
;
var Lplayn_core_Exec$1$2_2_classLit = createForClass(212);
function $dispatch(this$static){
  var action, e, ii, ll;
  $addAll(this$static.running, this$static.pending);
  this$static.pending.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
  for (ii = 0 , ll = this$static.running.array.length; ii < ll; ii++) {
    action = $get(this$static.running, ii);
    try {
      action.run();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 8)) {
        e = $e0;
        $reportError(this$static.plat, 'invokeLater Runnable failed: ' + action, e);
      }
       else 
        throw toJs($e0);
    }
  }
  this$static.running.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 5, 1);
}

function $invokeLater(this$static, action){
  $add(this$static.pending, action);
}

function Exec$Default(plat){
  this.pending = new ArrayList;
  this.running = new ArrayList;
  this.plat = plat;
  $atPrio($addConnection(plat.frame_0, new Exec$Default$1(this)), 32767);
}

defineClass(208, 356, {}, Exec$Default);
var Lplayn_core_Exec$Default_2_classLit = createForClass(208);
defineClass(32, 1, $intern_23);
var Lreact_Slot_2_classLit = createForClass(32);
function Exec$Default$1(this$1){
  this.this$11 = this$1;
}

defineClass(209, 32, $intern_23, Exec$Default$1);
_.onEmit = function onEmit(unused){
  $dispatch(this.this$11);
}
;
var Lplayn_core_Exec$Default$1_2_classLit = createForClass(209);
function $checkError(this$static){
  var reported;
  reported = 0;
  if (this$static.checkErrors) {
    while (this$static.gl.getError() != 0) {
      reported += 1;
      $clinit_System();
    }
  }
  return reported > 0;
}

function $glGenTexture(this$static){
  $resizeIntBuffer(this$static.bufs);
  $glGenTextures(this$static, this$static.bufs.intBuffer);
  return this$static.bufs.intBuffer.intArray[0];
}

function $glUniform4fv(this$static, location_0, count, v){
  $setFloatBuffer(this$static.bufs, v, 4 * count);
  $glUniform4fv_0(this$static, location_0, count, this$static.bufs.floatBuffer);
}

function GL20(buffers, checkErrors){
  this.bufs = buffers;
  this.checkErrors = checkErrors;
}

defineClass(215, 1, {});
_.checkErrors = false;
var Lplayn_core_GL20_2_classLit = createForClass(215);
function $newCap(cap, length_0){
  var newLength;
  newLength = cap << 1;
  while (newLength < length_0) {
    newLength <<= 1;
  }
  return newLength;
}

function $resizeIntBuffer(this$static){
  var cap;
  cap = this$static.intBuffer.capacity;
  cap < 1?(this$static.intBuffer = $asIntBuffer($createByteBuffer($newCap(cap, 1) * 4))):$position(this$static.intBuffer);
  $limit(this$static.intBuffer, 1);
}

function $setFloatBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.floatBuffer.capacity;
  cap < length_0?(this$static.floatBuffer = new FloatBuffer($slice($createByteBuffer($newCap(cap, length_0) * 4)))):$position(this$static.floatBuffer);
  $limit(this$static.floatBuffer, length_0);
  $put_0(this$static.floatBuffer, source, length_0);
  $rewind(this$static.floatBuffer);
}

function $setShortBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.shortBuffer.capacity;
  cap < length_0?(this$static.shortBuffer = $asShortBuffer($createByteBuffer($newCap(cap, length_0) * 2))):$position(this$static.shortBuffer);
  $limit(this$static.shortBuffer, length_0);
  $put_1(this$static.shortBuffer, source, length_0);
  $rewind(this$static.shortBuffer);
}

defineClass(217, 1, {});
var Lplayn_core_GL20$Buffers_2_classLit = createForClass(217);
function $begin(this$static){
  if (this$static.begun)
    throw toJs(new IllegalStateException_0($getSimpleName(this$static.___clazz) + ' mismatched begin()'));
  this$static.begun = true;
}

function $end(this$static){
  if (!this$static.begun)
    throw toJs(new IllegalStateException_0($getSimpleName(this$static.___clazz) + ' mismatched end()'));
  try {
    this$static.flush();
  }
   finally {
    this$static.begun = false;
  }
}

function $flush(this$static){
  if (!this$static.begun)
    throw toJs(new IllegalStateException_0($getSimpleName(this$static.___clazz) + ' flush() without begin()'));
}

defineClass(361, 1, $intern_21);
_.begin = function begin(fbufWidth, fbufHeight, flip){
  $begin(this);
}
;
_.flush = function flush(){
  $flush(this);
}
;
_.begun = false;
var Lplayn_core_GLBatch_2_classLit = createForClass(361);
function $activate(this$static){
  $glUseProgram(this$static.gl, this$static.id_0);
}

function $compileShader_0(this$static, type_0, shaderSource){
  var compiled, log_0, shader;
  shader = $glCreateShader(this$static.gl, type_0);
  if (shader == 0)
    throw toJs(new RuntimeException_0('Failed to create shader (' + type_0 + '): ' + this$static.gl.gl.getError()));
  $glShaderSource(this$static.gl, shader, shaderSource);
  $glCompileShader(this$static.gl, shader);
  compiled = initUnidimensionalArray(I_classLit, $intern_1, 15, 1, 15, 1);
  $glGetShaderiv(this$static.gl, shader, compiled);
  if (compiled[0] == 0) {
    log_0 = $glGetShaderInfoLog(this$static.gl, shader);
    $glDeleteShader(this$static.gl, shader);
    throw toJs(new RuntimeException_0('Failed to compile shader (' + type_0 + '): ' + log_0));
  }
  return shader;
}

function $getAttribLocation_0(this$static, name_0){
  var loc;
  loc = $glGetAttribLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function $getUniformLocation_0(this$static, name_0){
  var loc;
  loc = $glGetUniformLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function GLProgram(gl, vertexSource, fragmentSource){
  var fragmentShader, id_0, linkStatus, log_0, prog, program, sh, sh0, vertexShader;
  this.gl = gl;
  id_0 = 0;
  vertexShader = 0;
  fragmentShader = 0;
  try {
    id_0 = (program = gl.gl.createProgram() , $add_5(gl.programs, program));
    if (id_0 == 0)
      throw toJs(new RuntimeException_0('Failed to create program: ' + gl.gl.getError()));
    $checkError(gl);
    vertexShader = $compileShader_0(this, 35633, vertexSource);
    $glAttachShader(gl, id_0, vertexShader);
    $checkError(gl);
    fragmentShader = $compileShader_0(this, 35632, fragmentSource);
    $glAttachShader(gl, id_0, fragmentShader);
    $checkError(gl);
    $linkProgram(gl.gl, gl.programs[id_0]);
    linkStatus = initUnidimensionalArray(I_classLit, $intern_1, 15, 1, 15, 1);
    linkStatus[0] = $getProgramParameterb(gl.gl, gl.programs[id_0], 35714)?1:0;
    if (linkStatus[0] == 0) {
      log_0 = $getProgramInfoLog(gl.gl, gl.programs[id_0]);
      prog = $remove_13(gl.programs, id_0);
      $deleteProgram(gl.gl, prog);
      throw toJs(new RuntimeException_0('Failed to link program: ' + log_0));
    }
    this.id_0 = id_0;
    id_0 = vertexShader = fragmentShader = 0;
  }
   finally {
    id_0 != 0 && (prog = $remove_13(gl.programs, id_0) , $deleteProgram(gl.gl, prog));
    vertexShader != 0 && (sh0 = $remove_13(gl.shaders, vertexShader) , $deleteShader(gl.gl, sh0));
    fragmentShader != 0 && (sh = $remove_13(gl.shaders, fragmentShader) , $deleteShader(gl.gl, sh));
  }
}

defineClass(137, 1, $intern_21, GLProgram);
_.id_0 = 0;
var Lplayn_core_GLProgram_2_classLit = createForClass(137);
function $onFrame(this$static){
  var nextUpdate, paintTick, updateDt, updateRate, updateTick, updates;
  nextUpdate = this$static.nextUpdate;
  updateTick = $tick(this$static.plat);
  if (updateTick >= nextUpdate) {
    updateRate = this$static.updateRate;
    updates = 0;
    while (updateTick >= nextUpdate) {
      nextUpdate += updateRate;
      ++updates;
    }
    this$static.nextUpdate = nextUpdate;
    updateDt = updates * updateRate;
    this$static.updateClock.tick += updateDt;
    $update_0(this$static);
  }
  paintTick = $tick(this$static.plat);
  this$static.paintClock.tick = paintTick;
  $emit(this$static.paint, this$static.paintClock);
}

defineClass(164, 1, {});
_.nextUpdate = 0;
_.updateRate = 0;
var Lplayn_core_Game_2_classLit = createForClass(164);
function Game$1(this$0){
  this.this$01 = this$0;
}

defineClass(169, 32, $intern_23, Game$1);
_.onEmit = function onEmit_0(plat){
  var lastArg;
  $onFrame((lastArg = this , plat , lastArg).this$01);
}
;
var Lplayn_core_Game$1_2_classLit = createForClass(169);
function $colorTex(this$static){
  var canvas;
  if (!this$static.colorTex) {
    canvas = $createCanvasImpl(this$static, this$static.scale_0, $scaledCeil(this$static.scale_0, 1), $scaledCeil(this$static.scale_0, 1));
    $fillRect_1((canvas.ctx.fillStyle = 'rgba(255,255,255,1.0)' , undefined , canvas), canvas.width_0, canvas.height_0);
    this$static.colorTex = $toTexture(canvas, ($clinit_Texture$Config() , UNMANAGED));
  }
  return this$static.colorTex;
}

function $createCanvas(this$static, width_0, height){
  return $createCanvasImpl(this$static, this$static.scale_0, $scaledCeil(this$static.scale_0, width_0), $scaledCeil(this$static.scale_0, height));
}

function $createTexture(this$static, config){
  var id_0, minFilter;
  id_0 = $glGenTexture(this$static.gl);
  $glBindTexture(this$static.gl, id_0);
  $glTexParameteri(this$static.gl, 10240, config.magFilter);
  minFilter = mipmapify(config.minFilter, config.mipmaps);
  $glTexParameteri(this$static.gl, 10241, minFilter);
  $glTexParameteri(this$static.gl, 10242, config.repeatX?10497:33071);
  $glTexParameteri(this$static.gl, 10243, config.repeatY?10497:33071);
  return id_0;
}

function $viewportChanged(this$static, pixelWidth, pixelHeight){
  this$static.viewPixelWidth = pixelWidth;
  this$static.viewPixelHeight = pixelHeight;
  this$static.viewSizeM.width_0 = $invScaled(this$static.scale_0, pixelWidth);
  this$static.viewSizeM.height_0 = $invScaled(this$static.scale_0, pixelHeight);
  $info_0(this$static.plat.log_0, 'viewPortChanged ' + pixelWidth + 'x' + pixelHeight + ' / ' + this$static.scale_0.factor + ' -> ' + this$static.viewSize);
}

function Graphics(plat, gl, scale){
  this.viewSizeM = new Dimension;
  this.viewSize = this.viewSizeM;
  this.defaultRenderTarget = new Graphics$1(this, this);
  this.plat = plat;
  this.gl = gl;
  this.scale_0 = scale;
}

function mipmapify(filter, mipmaps){
  if (!mipmaps)
    return filter;
  switch (filter) {
    case 9728:
      return 9984;
    case 9729:
      return 9985;
    default:return filter;
  }
}

defineClass(174, 1, {});
_.viewPixelHeight = 0;
_.viewPixelWidth = 0;
var Lplayn_core_Graphics_2_classLit = createForClass(174);
function $bind(this$static){
  $glBindFramebuffer(this$static.gfx.gl);
  $glViewport(this$static.gfx.gl, this$static.this$01.viewPixelWidth, this$static.this$01.viewPixelHeight);
}

defineClass(176, 1, $intern_21);
_.toString_0 = function toString_28(){
  return '[id=0, size=' + this.this$01.viewPixelWidth + 'x' + this.this$01.viewPixelHeight + ' @ ' + this.this$01.scale_0.factor + 'x' + this.this$01.scale_0.factor + ', flip=' + true + ']';
}
;
var Lplayn_core_RenderTarget_2_classLit = createForClass(176);
function Graphics$1(this$0, $anonymous0){
  this.this$01 = this$0;
  this.gfx = $anonymous0;
}

defineClass(177, 176, $intern_21, Graphics$1);
var Lplayn_core_Graphics$1_2_classLit = createForClass(177);
defineClass(366, 1, {});
var Lplayn_core_TileSource_2_classLit = createForClass(366);
function $$init_1(this$static){
  this$static.texconf = ($clinit_Texture$Config() , DEFAULT);
}

function $createTexture_0(this$static, config){
  var tex, texHeight, texWidth;
  if (!this$static.state.result())
    throw toJs(new IllegalStateException_0('Cannot create texture from unready image: ' + this$static));
  texWidth = $toTexWidth(config, this$static.pixelWidth);
  texHeight = $toTexHeight(config, this$static.pixelHeight);
  if (texWidth <= 0 || texHeight <= 0)
    throw toJs(new IllegalArgumentException_0('Invalid texture size: ' + texWidth + 'x' + texHeight + ' from: ' + this$static));
  tex = new Texture(this$static.gfx, $createTexture(this$static.gfx, config), config, texWidth, texHeight, this$static.scale_0, $invScaled(this$static.scale_0, this$static.pixelWidth), $invScaled(this$static.scale_0, this$static.pixelHeight));
  $update(tex, this$static);
  return tex;
}

function $region(this$static, rx, ry){
  return new Image$2(this$static, rx, ry);
}

function $texture(this$static){
  (!this$static.texture || this$static.texture.disposed) && (this$static.texture = $createTexture_0(this$static, this$static.texconf));
  return this$static.texture;
}

defineClass(132, 366, {});
var Lplayn_core_Image_2_classLit = createForClass(132);
defineClass(368, 366, {});
var Lplayn_core_Image$Region_2_classLit = createForClass(368);
function $draw_1(this$static, ctx, width_0, height){
  $draw_5(this$static.val$image2, ctx, width_0, height, this$static.val$rx3, this$static.val$ry4, this$static.val$rwidth5, this$static.val$rheight6);
}

function Image$2(val$image, val$rx, val$ry){
  this.val$image2 = val$image;
  this.val$rx3 = val$rx;
  this.val$ry4 = val$ry;
  this.val$rwidth5 = 8;
  this.val$rheight6 = 8;
}

defineClass(273, 368, {}, Image$2);
_.val$rheight6 = 0;
_.val$rwidth5 = 0;
_.val$rx3 = 0;
_.val$ry4 = 0;
var Lplayn_core_Image$2_2_classLit = createForClass(273);
function $fail_0(this$static, error){
  this$static.pixelWidth == 0 && (this$static.pixelWidth = 50);
  this$static.pixelHeight == 0 && (this$static.pixelHeight = 50);
  $setBitmap(this$static, $createErrorBitmap(this$static.pixelWidth, this$static.pixelHeight));
  this$static.state.fail(error);
}

function $succeed_0(this$static, data_0){
  this$static.scale_0 = data_0.scale_0;
  this$static.pixelWidth = data_0.pixelWidth;
  this$static.pixelHeight = data_0.pixelHeight;
  $setBitmap(this$static, data_0.bitmap);
  this$static.state.succeed(this$static);
}

function ImageImpl(gfx, scale, pixelWidth, pixelHeight, bitmap){
  $$init_1(this);
  this.gfx = gfx;
  this.state = ($clinit_Reactor() , $clinit_Reactor() , new RFuture$1(new Try$Success(this)));
  if (pixelWidth == 0 || pixelHeight == 0)
    throw toJs(new IllegalArgumentException_0('Invalid size for ready image: ' + pixelWidth + 'x' + pixelHeight + ' bitmap: ' + bitmap));
  this.source = '<canvas>';
  this.scale_0 = scale;
  this.pixelWidth = pixelWidth;
  this.pixelHeight = pixelHeight;
  this.img = bitmap;
}

function ImageImpl_0(gfx, state, preScale, preWidth, preHeight, source){
  $$init_1(this);
  this.gfx = gfx;
  this.state = state;
  this.source = source;
  this.scale_0 = preScale;
  this.pixelWidth = preWidth;
  this.pixelHeight = preHeight;
}

defineClass(133, 132, {});
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_ImageImpl_2_classLit = createForClass(133);
function ImageImpl$Data(scale, bitmap, pixelWidth, pixelHeight){
  this.bitmap = bitmap;
  this.scale_0 = scale;
  this.pixelWidth = pixelWidth;
  this.pixelHeight = pixelHeight;
}

defineClass(286, 1, {}, ImageImpl$Data);
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_ImageImpl$Data_2_classLit = createForClass(286);
defineClass(179, 1, {});
var Lplayn_core_Input_2_classLit = createForClass(179);
function $clinit_Key(){
  $clinit_Key = emptyMethod;
  A = new Key('A', 0);
  B = new Key('B', 1);
  C = new Key('C', 2);
  D = new Key('D', 3);
  E_0 = new Key('E', 4);
  F_0 = new Key('F', 5);
  G = new Key('G', 6);
  H = new Key('H', 7);
  I = new Key('I', 8);
  J = new Key('J', 9);
  K = new Key('K', 10);
  L = new Key('L', 11);
  M = new Key('M', 12);
  N = new Key('N', 13);
  O = new Key('O', 14);
  P = new Key('P', 15);
  Q = new Key('Q', 16);
  R = new Key('R', 17);
  S = new Key('S', 18);
  T = new Key('T', 19);
  U = new Key('U', 20);
  V = new Key('V', 21);
  W = new Key('W', 22);
  X = new Key('X', 23);
  Y = new Key('Y', 24);
  Z = new Key('Z', 25);
  K0 = new Key('K0', 26);
  K1 = new Key('K1', 27);
  K2 = new Key('K2', 28);
  K3 = new Key('K3', 29);
  K4 = new Key('K4', 30);
  K5 = new Key('K5', 31);
  K6 = new Key('K6', 32);
  K7 = new Key('K7', 33);
  K8 = new Key('K8', 34);
  K9 = new Key('K9', 35);
  NP0 = new Key('NP0', 36);
  NP1 = new Key('NP1', 37);
  NP2 = new Key('NP2', 38);
  NP3 = new Key('NP3', 39);
  NP4 = new Key('NP4', 40);
  NP5 = new Key('NP5', 41);
  NP6 = new Key('NP6', 42);
  NP7 = new Key('NP7', 43);
  NP8 = new Key('NP8', 44);
  NP9 = new Key('NP9', 45);
  NP_ADD = new Key('NP_ADD', 46);
  NP_DECIMAL = new Key('NP_DECIMAL', 47);
  NP_DELETE = new Key('NP_DELETE', 48);
  NP_DIVIDE = new Key('NP_DIVIDE', 49);
  NP_MULTIPLY = new Key('NP_MULTIPLY', 50);
  NP_NUM_LOCK = new Key('NP_NUM_LOCK', 51);
  NP_SUBTRACT = new Key('NP_SUBTRACT', 52);
  NP_DOWN = new Key('NP_DOWN', 53);
  NP_LEFT = new Key('NP_LEFT', 54);
  NP_RIGHT = new Key('NP_RIGHT', 55);
  NP_UP = new Key('NP_UP', 56);
  F1 = new Key('F1', 57);
  F2 = new Key('F2', 58);
  F3 = new Key('F3', 59);
  F4 = new Key('F4', 60);
  F5 = new Key('F5', 61);
  F6 = new Key('F6', 62);
  F7 = new Key('F7', 63);
  F8 = new Key('F8', 64);
  F9 = new Key('F9', 65);
  F10 = new Key('F10', 66);
  F11 = new Key('F11', 67);
  F12 = new Key('F12', 68);
  AMPERSAND = new Key('AMPERSAND', 69);
  ASTERISK = new Key('ASTERISK', 70);
  AT = new Key('AT', 71);
  BACKQUOTE = new Key('BACKQUOTE', 72);
  BACKSLASH = new Key('BACKSLASH', 73);
  BANG = new Key('BANG', 74);
  CIRCUMFLEX = new Key('CIRCUMFLEX', 75);
  COLON = new Key('COLON', 76);
  COMMA = new Key('COMMA', 77);
  DOLLAR = new Key('DOLLAR', 78);
  DOUBLE_QUOTE = new Key('DOUBLE_QUOTE', 79);
  EQUALS = new Key('EQUALS', 80);
  GREATER = new Key('GREATER', 81);
  HASH = new Key('HASH', 82);
  LEFT_BRACE = new Key('LEFT_BRACE', 83);
  LEFT_BRACKET = new Key('LEFT_BRACKET', 84);
  LEFT_PAREN = new Key('LEFT_PAREN', 85);
  LESS = new Key('LESS', 86);
  MINUS = new Key('MINUS', 87);
  MULTIPLY = new Key('MULTIPLY', 88);
  PERCENT = new Key('PERCENT', 89);
  PERIOD = new Key('PERIOD', 90);
  PLUS = new Key('PLUS', 91);
  QUOTE = new Key('QUOTE', 92);
  RIGHT_BRACE = new Key('RIGHT_BRACE', 93);
  RIGHT_BRACKET = new Key('RIGHT_BRACKET', 94);
  RIGHT_PAREN = new Key('RIGHT_PAREN', 95);
  SEMICOLON = new Key('SEMICOLON', 96);
  SLASH = new Key('SLASH', 97);
  SPACE = new Key('SPACE', 98);
  TILDE = new Key('TILDE', 99);
  QUESTION_MARK = new Key('QUESTION_MARK', 100);
  UNDERSCORE = new Key('UNDERSCORE', 101);
  VERTICAL_BAR = new Key('VERTICAL_BAR', 102);
  ALT = new Key('ALT', 103);
  CONTROL = new Key('CONTROL', 104);
  CAPS_LOCK = new Key('CAPS_LOCK', 105);
  SHIFT = new Key('SHIFT', 106);
  META = new Key('META', 107);
  DOWN = new Key('DOWN', 108);
  END = new Key('END', 109);
  HOME = new Key('HOME', 110);
  LEFT = new Key('LEFT', 111);
  PAGE_UP = new Key('PAGE_UP', 112);
  PAGE_DOWN = new Key('PAGE_DOWN', 113);
  RIGHT = new Key('RIGHT', 114);
  UP = new Key('UP', 115);
  BACKSPACE = new Key('BACKSPACE', 116);
  DELETE = new Key('DELETE', 117);
  ENTER = new Key('ENTER', 118);
  INSERT = new Key('INSERT', 119);
  TAB = new Key('TAB', 120);
  ESCAPE = new Key('ESCAPE', 121);
  PAUSE = new Key('PAUSE', 122);
  PRINT_SCREEN = new Key('PRINT_SCREEN', 123);
  SCROLL_LOCK = new Key('SCROLL_LOCK', 124);
  WINDOWS = new Key('WINDOWS', 125);
  MEDIA_CLOSE = new Key('MEDIA_CLOSE', 126);
  MEDIA_EJECT = new Key('MEDIA_EJECT', 127);
  MEDIA_FAST_FORWARD = new Key('MEDIA_FAST_FORWARD', 128);
  MEDIA_NEXT = new Key('MEDIA_NEXT', 129);
  MEDIA_PAUSE = new Key('MEDIA_PAUSE', 130);
  MEDIA_PLAY = new Key('MEDIA_PLAY', 131);
  MEDIA_PLAY_PAUSE = new Key('MEDIA_PLAY_PAUSE', 132);
  MEDIA_PREVIOUS = new Key('MEDIA_PREVIOUS', 133);
  MEDIA_RECORD = new Key('MEDIA_RECORD', 134);
  MEDIA_REWIND = new Key('MEDIA_REWIND', 135);
  MEDIA_STOP = new Key('MEDIA_STOP', 136);
  BLUE = new Key('BLUE', 137);
  GREEN = new Key('GREEN', 138);
  RED = new Key('RED', 139);
  YELLOW = new Key('YELLOW', 140);
  APP_SWITCH = new Key('APP_SWITCH', 141);
  AVR_INPUT = new Key('AVR_INPUT', 142);
  AVR_POWER = new Key('AVR_POWER', 143);
  BACK = new Key('BACK', 144);
  BOOKMARK = new Key('BOOKMARK', 145);
  BREAK = new Key('BREAK', 146);
  BUTTON_1 = new Key('BUTTON_1', 147);
  BUTTON_2 = new Key('BUTTON_2', 148);
  BUTTON_3 = new Key('BUTTON_3', 149);
  BUTTON_4 = new Key('BUTTON_4', 150);
  BUTTON_5 = new Key('BUTTON_5', 151);
  BUTTON_6 = new Key('BUTTON_6', 152);
  BUTTON_7 = new Key('BUTTON_7', 153);
  BUTTON_8 = new Key('BUTTON_8', 154);
  BUTTON_9 = new Key('BUTTON_9', 155);
  BUTTON_10 = new Key('BUTTON_10', 156);
  BUTTON_11 = new Key('BUTTON_11', 157);
  BUTTON_12 = new Key('BUTTON_12', 158);
  BUTTON_13 = new Key('BUTTON_13', 159);
  BUTTON_14 = new Key('BUTTON_14', 160);
  BUTTON_15 = new Key('BUTTON_15', 161);
  BUTTON_16 = new Key('BUTTON_16', 162);
  BUTTON_A = new Key('BUTTON_A', 163);
  BUTTON_B = new Key('BUTTON_B', 164);
  BUTTON_C = new Key('BUTTON_C', 165);
  BUTTON_L1 = new Key('BUTTON_L1', 166);
  BUTTON_L2 = new Key('BUTTON_L2', 167);
  BUTTON_MODE = new Key('BUTTON_MODE', 168);
  BUTTON_R1 = new Key('BUTTON_R1', 169);
  BUTTON_R2 = new Key('BUTTON_R2', 170);
  BUTTON_SELECT = new Key('BUTTON_SELECT', 171);
  BUTTON_START = new Key('BUTTON_START', 172);
  BUTTON_THUMBL = new Key('BUTTON_THUMBL', 173);
  BUTTON_THUMBR = new Key('BUTTON_THUMBR', 174);
  BUTTON_X = new Key('BUTTON_X', 175);
  BUTTON_Y = new Key('BUTTON_Y', 176);
  BUTTON_Z = new Key('BUTTON_Z', 177);
  CALL = new Key('CALL', 178);
  CAMERA = new Key('CAMERA', 179);
  CAPTIONS = new Key('CAPTIONS', 180);
  CHANNEL_DOWN = new Key('CHANNEL_DOWN', 181);
  CHANNEL_UP = new Key('CHANNEL_UP', 182);
  CLEAR = new Key('CLEAR', 183);
  DPAD_CENTER = new Key('DPAD_CENTER', 184);
  DPAD_DOWN = new Key('DPAD_DOWN', 185);
  DPAD_LEFT = new Key('DPAD_LEFT', 186);
  DPAD_RIGHT = new Key('DPAD_RIGHT', 187);
  DPAD_UP = new Key('DPAD_UP', 188);
  DVR = new Key('DVR', 189);
  ENDCALL = new Key('ENDCALL', 190);
  ENVELOPE = new Key('ENVELOPE', 191);
  EXPLORER = new Key('EXPLORER', 192);
  FOCUS = new Key('FOCUS', 193);
  FORWARD = new Key('FORWARD', 194);
  FORWARD_DEL = new Key('FORWARD_DEL', 195);
  FUNCTION = new Key('FUNCTION', 196);
  GUIDE = new Key('GUIDE', 197);
  HEADSETHOOK = new Key('HEADSETHOOK', 198);
  INFO = new Key('INFO', 199);
  MENU = new Key('MENU', 200);
  MUTE = new Key('MUTE', 201);
  NOTIFICATION = new Key('NOTIFICATION', 202);
  NUM = new Key('NUM', 203);
  PICTSYMBOLS = new Key('PICTSYMBOLS', 204);
  POWER = new Key('POWER', 205);
  SEARCH = new Key('SEARCH', 206);
  SETTINGS = new Key('SETTINGS', 207);
  SOFT_LEFT = new Key('SOFT_LEFT', 208);
  SOFT_RIGHT = new Key('SOFT_RIGHT', 209);
  STAR = new Key('STAR', 210);
  STB_INPUT = new Key('STB_INPUT', 211);
  STB_POWER = new Key('STB_POWER', 212);
  SWITCH_CHARSET = new Key('SWITCH_CHARSET', 213);
  SYM = new Key('SYM', 214);
  SYSRQ = new Key('SYSRQ', 215);
  TV = new Key('TV', 216);
  TV_INPUT = new Key('TV_INPUT', 217);
  TV_POWER = new Key('TV_POWER', 218);
  VOLUME_DOWN = new Key('VOLUME_DOWN', 219);
  VOLUME_MUTE = new Key('VOLUME_MUTE', 220);
  VOLUME_UP = new Key('VOLUME_UP', 221);
  WINDOW = new Key('WINDOW', 222);
  ZOOM_IN = new Key('ZOOM_IN', 223);
  ZOOM_OUT = new Key('ZOOM_OUT', 224);
  UNKNOWN = new Key('UNKNOWN', 225);
}

function Key(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_Key();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Key_2_classLit, 1), $intern_1, 3, 0, [A, B, C, D, E_0, F_0, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_MULTIPLY, NP_NUM_LOCK, NP_SUBTRACT, NP_DOWN, NP_LEFT, NP_RIGHT, NP_UP, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, AMPERSAND, ASTERISK, AT, BACKQUOTE, BACKSLASH, BANG, CIRCUMFLEX, COLON, COMMA, DOLLAR, DOUBLE_QUOTE, EQUALS, GREATER, HASH, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, MINUS, MULTIPLY, PERCENT, PERIOD, PLUS, QUOTE, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, SEMICOLON, SLASH, SPACE, TILDE, QUESTION_MARK, UNDERSCORE, VERTICAL_BAR, ALT, CONTROL, CAPS_LOCK, SHIFT, META, DOWN, END, HOME, LEFT, PAGE_UP, PAGE_DOWN, RIGHT, UP, BACKSPACE, DELETE, ENTER, INSERT, TAB, ESCAPE, PAUSE, PRINT_SCREEN, SCROLL_LOCK, WINDOWS, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, BLUE, GREEN, RED, YELLOW, APP_SWITCH, AVR_INPUT, AVR_POWER, BACK, BOOKMARK, BREAK, BUTTON_1, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, CALL, CAMERA, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CLEAR, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, ENDCALL, ENVELOPE, EXPLORER, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, GUIDE, HEADSETHOOK, INFO, MENU, MUTE, NOTIFICATION, NUM, PICTSYMBOLS, POWER, SEARCH, SETTINGS, SOFT_LEFT, SOFT_RIGHT, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, TV, TV_INPUT, TV_POWER, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, WINDOW, ZOOM_IN, ZOOM_OUT, UNKNOWN]);
}

defineClass(3, 5, {4:1, 6:1, 5:1, 3:1}, Key);
var A, ALT, AMPERSAND, APP_SWITCH, ASTERISK, AT, AVR_INPUT, AVR_POWER, B, BACK, BACKQUOTE, BACKSLASH, BACKSPACE, BANG, BLUE, BOOKMARK, BREAK, BUTTON_1, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, C, CALL, CAMERA, CAPS_LOCK, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CIRCUMFLEX, CLEAR, COLON, COMMA, CONTROL, D, DELETE, DOLLAR, DOUBLE_QUOTE, DOWN, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, E_0, END, ENDCALL, ENTER, ENVELOPE, EQUALS, ESCAPE, EXPLORER, F_0, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, G, GREATER, GREEN, GUIDE, H, HASH, HEADSETHOOK, HOME, I, INFO, INSERT, J, K, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, L, LEFT, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, M, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, MENU, META, MINUS, MULTIPLY, MUTE, N, NOTIFICATION, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_DOWN, NP_LEFT, NP_MULTIPLY, NP_NUM_LOCK, NP_RIGHT, NP_SUBTRACT, NP_UP, NUM, O, P, PAGE_DOWN, PAGE_UP, PAUSE, PERCENT, PERIOD, PICTSYMBOLS, PLUS, POWER, PRINT_SCREEN, Q, QUESTION_MARK, QUOTE, R, RED, RIGHT, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, S, SCROLL_LOCK, SEARCH, SEMICOLON, SETTINGS, SHIFT, SLASH, SOFT_LEFT, SOFT_RIGHT, SPACE, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, T, TAB, TILDE, TV, TV_INPUT, TV_POWER, U, UNDERSCORE, UNKNOWN, UP, V, VERTICAL_BAR, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, W, WINDOW, WINDOWS, X, Y, YELLOW, Z, ZOOM_IN, ZOOM_OUT;
var Lplayn_core_Key_2_classLit = createForEnum(3, values_8);
function Keyboard$Event(time){
  Event$Input.call(this, time);
}

defineClass(70, 21, $intern_24);
var Lplayn_core_Keyboard$Event_2_classLit = createForClass(70);
function Keyboard$KeyEvent(time, key, down){
  Keyboard$Event.call(this, time);
  this.key_0 = key;
  this.down = down;
}

defineClass(80, 70, {23:1, 21:1, 70:1, 80:1}, Keyboard$KeyEvent);
_.addFields = function addFields_1(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_8($append_7($append_6((builder.string += ', key=' , builder), this.key_0), ', down='), this.down);
}
;
_.name_1 = function name_4(){
  return 'Key';
}
;
_.down = false;
var Lplayn_core_Keyboard$KeyEvent_2_classLit = createForClass(80);
function Keyboard$TypedEvent(time, typedChar){
  Keyboard$Event.call(this, time);
  this.typedChar = typedChar;
}

defineClass(302, 70, $intern_24, Keyboard$TypedEvent);
_.addFields = function addFields_2(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_1((builder.string += ', typedChar=' , builder), this.typedChar);
}
;
_.name_1 = function name_5(){
  return 'Typed';
}
;
_.typedChar = 0;
var Lplayn_core_Keyboard$TypedEvent_2_classLit = createForClass(302);
function $debug(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , DEBUG), msg, null);
}

function $error(this$static, e){
  $log(this$static, ($clinit_Log$Level() , ERROR), 'init()', e);
}

function $info(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , INFO_0), msg, null);
}

function $info_0(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , INFO_0), msg, null);
}

function $log(this$static, level, msg, e){
  var lmsg;
  level.ordinal >= this$static.minLevel.ordinal && (lmsg = level + ': ' + msg , !!e && (lmsg += ': ' + e.getMessage()) , $clinit_System() , !!e && $printStackTraceImpl(e, out_0, '') , $wnd.console && $wnd.console.info && (e != null?$wnd.console.info(lmsg, e):$wnd.console.info(lmsg)) , undefined , undefined);
}

function $warn(this$static, msg, e){
  $log(this$static, ($clinit_Log$Level() , WARN), msg, e);
}

defineClass(205, 1, {});
var Lplayn_core_Log_2_classLit = createForClass(205);
function $clinit_Log$Level(){
  $clinit_Log$Level = emptyMethod;
  DEBUG = new Log$Level('DEBUG', 0);
  INFO_0 = new Log$Level('INFO', 1);
  WARN = new Log$Level('WARN', 2);
  ERROR = new Log$Level('ERROR', 3);
}

function Log$Level(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_Log$Level();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Log$Level_2_classLit, 1), $intern_1, 51, 0, [DEBUG, INFO_0, WARN, ERROR]);
}

defineClass(51, 5, {4:1, 6:1, 5:1, 51:1}, Log$Level);
var DEBUG, ERROR, INFO_0, WARN;
var Lplayn_core_Log$Level_2_classLit = createForEnum(51, values_9);
function Mouse$Event(time, x_0, y_0){
  Event$XY.call(this, time, x_0, y_0);
}

defineClass(46, 38, $intern_25);
var Lplayn_core_Mouse$Event_2_classLit = createForClass(46);
function Mouse$ButtonEvent(time, x_0, y_0, button, down){
  Mouse$Event.call(this, time, x_0, y_0);
  this.button_0 = button;
  this.down = down;
}

defineClass(81, 46, {23:1, 21:1, 38:1, 81:1, 46:1, 42:1}, Mouse$ButtonEvent);
_.addFields = function addFields_3(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_8($append_7($append_6((builder.string += ', id=' , builder), this.button_0), ', down='), this.down);
}
;
_.name_1 = function name_6(){
  return 'Button';
}
;
_.down = false;
var Lplayn_core_Mouse$ButtonEvent_2_classLit = createForClass(81);
function $clinit_Mouse$ButtonEvent$Id(){
  $clinit_Mouse$ButtonEvent$Id = emptyMethod;
  LEFT_0 = new Mouse$ButtonEvent$Id('LEFT', 0);
  RIGHT_0 = new Mouse$ButtonEvent$Id('RIGHT', 1);
  MIDDLE = new Mouse$ButtonEvent$Id('MIDDLE', 2);
  X1 = new Mouse$ButtonEvent$Id('X1', 3);
  X2 = new Mouse$ButtonEvent$Id('X2', 4);
}

function Mouse$ButtonEvent$Id(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_Mouse$ButtonEvent$Id();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Mouse$ButtonEvent$Id_2_classLit, 1), $intern_1, 47, 0, [LEFT_0, RIGHT_0, MIDDLE, X1, X2]);
}

defineClass(47, 5, {4:1, 6:1, 5:1, 47:1}, Mouse$ButtonEvent$Id);
var LEFT_0, MIDDLE, RIGHT_0, X1, X2;
var Lplayn_core_Mouse$ButtonEvent$Id_2_classLit = createForEnum(47, values_10);
function Mouse$MotionEvent(time, x_0, y_0, dx, dy){
  Mouse$Event.call(this, time, x_0, y_0);
  this.dx = dx;
  this.dy = dy;
}

defineClass(303, 46, $intern_25, Mouse$MotionEvent);
_.addFields = function addFields_4(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_7($append_3((builder.string += ', dx=' , builder), this.dx), ', dy='), this.dy);
}
;
_.name_1 = function name_7(){
  return 'MotionEvent';
}
;
_.dx = 0;
_.dy = 0;
var Lplayn_core_Mouse$MotionEvent_2_classLit = createForClass(303);
function Mouse$WheelEvent(time, x_0, y_0, velocity){
  Mouse$Event.call(this, time, x_0, y_0);
  this.velocity = velocity;
}

defineClass(304, 46, $intern_25, Mouse$WheelEvent);
_.addFields = function addFields_5(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3((builder.string += ', velocity=' , builder), this.velocity);
}
;
_.name_1 = function name_8(){
  return 'Wheel';
}
;
_.velocity = 0;
var Lplayn_core_Mouse$WheelEvent_2_classLit = createForClass(304);
function $dispatchEvent(this$static, signal, event_0){
  var cause;
  try {
    $notify(signal, ($clinit_AbstractSignal() , EMIT), event_0, null, null);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 8)) {
      cause = $e0;
      $emit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Event dispatch failure', cause);
    }
     else 
      throw toJs($e0);
  }
}

function $emitFrame(this$static){
  var e;
  try {
    $emit(this$static.frame_0, this$static);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      $emit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Frame tick exception', e);
    }
     else 
      throw toJs($e0);
  }
}

function $reportError(this$static, message, cause){
  $emit(this$static.errors, new Platform$Error);
  $warn(this$static.log_0, message, cause);
}

defineClass(90, 1, {90:1});
var Lplayn_core_Platform_2_classLit = createForClass(90);
function Platform$Error(){
}

defineClass(91, 1, {}, Platform$Error);
var Lplayn_core_Platform$Error_2_classLit = createForClass(91);
function $clinit_Platform$Lifecycle(){
  $clinit_Platform$Lifecycle = emptyMethod;
  PAUSE_0 = new Platform$Lifecycle('PAUSE', 0);
  RESUME = new Platform$Lifecycle('RESUME', 1);
  EXIT = new Platform$Lifecycle('EXIT', 2);
}

function Platform$Lifecycle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_Platform$Lifecycle();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Platform$Lifecycle_2_classLit, 1), $intern_1, 66, 0, [PAUSE_0, RESUME, EXIT]);
}

defineClass(66, 5, {4:1, 6:1, 5:1, 66:1}, Platform$Lifecycle);
var EXIT, PAUSE_0, RESUME;
var Lplayn_core_Platform$Lifecycle_2_classLit = createForEnum(66, values_11);
defineClass(252, 361, $intern_21);
_.end = function end_0(){
  $end(this);
  this.curTexId = 0;
}
;
_.curTexId = 0;
var Lplayn_core_TexturedBatch_2_classLit = createForClass(252);
function $addQuad(this$static, tint, m00, m01, m10, m11, tx, ty, left, top_0, right, bottom, sr, sb){
  this$static.addQuad(tint, m00, m01, m10, m11, tx, ty, left, top_0, 0, 0, right, top_0, sr, 0, left, bottom, 0, sb, right, bottom, sr, sb);
}

function $addQuad_0(this$static, tex, tint, xf, x_0, y_0, w, h){
  var sb, sr;
  this$static.curTexId != 0 && this$static.curTexId != tex.id_0 && this$static.flush();
  this$static.curTexId = tex.id_0;
  sr = tex.config.repeatX?w / tex.displayWidth:1;
  sb = tex.config.repeatY?h / tex.displayHeight:1;
  $addQuad(this$static, tint, xf.m00, xf.m01, xf.m10, xf.m11, xf.tx, xf.ty, x_0, y_0, x_0 + w, y_0 + h, sr, sb);
}

defineClass(121, 252, $intern_21);
var Lplayn_core_QuadBatch_2_classLit = createForClass(121);
function $clinit_Scale(){
  $clinit_Scale = emptyMethod;
  ONE = new Scale(1);
}

function $computePath(path, scale){
  var didx, scaleFactor;
  if (scale <= 1)
    return path;
  scaleFactor = round_int(scale * 10);
  scaleFactor % 10 == 0 && (scaleFactor = scaleFactor / 10 | 0);
  didx = path.lastIndexOf('.');
  return didx == -1?path:path.substr(0, didx) + '@' + scaleFactor + 'x' + path.substr(didx);
}

function $getScaledResources(this$static, path){
  var rscale, rsrcs;
  rsrcs = new ArrayList;
  $add(rsrcs, new Scale$ScaledResource(this$static, $computePath(path, this$static.factor)));
  for (rscale = ifloor(this$static.factor); rscale > 1; rscale -= 1) {
    rscale != this$static.factor && $add(rsrcs, new Scale$ScaledResource(new Scale(rscale), $computePath(path, rscale)));
  }
  $add(rsrcs, new Scale$ScaledResource(ONE, path));
  return rsrcs;
}

function $invScaled(this$static, length_0){
  return length_0 / this$static.factor;
}

function $scaledCeil(this$static, length_0){
  return iceil(this$static.factor * length_0);
}

function Scale(factor){
  $clinit_Scale();
  this.factor = factor;
}

defineClass(75, 1, {}, Scale);
_.toString_0 = function toString_29(){
  return 'x' + this.factor;
}
;
_.factor = 0;
var ONE;
var Lplayn_core_Scale_2_classLit = createForClass(75);
function Scale$ScaledResource(scale, path){
  this.scale_0 = scale;
  this.path = path;
}

defineClass(76, 1, {76:1}, Scale$ScaledResource);
_.toString_0 = function toString_30(){
  return this.scale_0 + ': ' + this.path;
}
;
var Lplayn_core_Scale$ScaledResource_2_classLit = createForClass(76);
function Sound(state){
  this.state = state;
}

defineClass(274, 1, {});
var Lplayn_core_Sound_2_classLit = createForClass(274);
function $fail_1(this$static, error){
  $fail(this$static.state, error);
}

function $play_0(this$static){
  this$static.playing = true;
  return !!this$static.impl && this$static.impl.play_0();
}

function $setVolume_2(this$static){
  this$static.volume_0 = 0.25;
  !!this$static.impl && $setVolumeImpl(this$static, this$static.volume_0);
}

function $succeed_1(this$static, impl){
  this$static.impl = impl;
  $setVolumeImpl(this$static, this$static.volume_0);
  $setLoopingImpl(this$static, this$static.looping);
  this$static.playing && this$static.impl.play_0();
  $succeed(this$static.state, this$static);
}

defineClass(299, 274, {});
_.looping = false;
_.playing = false;
_.volume_0 = 1;
var Lplayn_core_SoundImpl_2_classLit = createForClass(299);
function $begin_0(this$static){
  $bind(this$static.target);
  $beginBatch(this$static, this$static.batch);
  return this$static;
}

function $beginBatch(this$static, batch){
  batch.begin(this$static.target.this$01.viewPixelWidth, this$static.target.this$01.viewPixelHeight, true);
  return batch;
}

function $clear_0(this$static, red, green, blue, alpha_0){
  $glClearColor(this$static.batch.gl, red, green, blue, alpha_0);
  this$static.batch.gl.gl.clear(16384);
  return this$static;
}

function $draw_2(this$static, tile, x_0, y_0){
  return $draw_3(this$static, tile, x_0, y_0, tile.displayWidth, tile.displayHeight);
}

function $draw_3(this$static, tile, x_0, y_0, w, h){
  (!this$static.checkIntersection || $intersects(this$static, x_0, y_0, w, h)) && $addToBatch(tile, this$static.batch, this$static.tint, this$static.lastTrans, x_0, y_0, w, h);
  return this$static;
}

function $end_0(this$static){
  this$static.batch.end();
  return this$static;
}

function $fillRect_0(this$static){
  $addQuad_0(this$static.batch, this$static.colorTex, combine(this$static.fillColor, this$static.tint), this$static.lastTrans, 0, 0, 320, 224);
  return this$static;
}

function $intersects(this$static, x_0, y_0, w, h){
  var ih, iw, ix, iy, th, tw;
  $transform_0(this$static.lastTrans, $set(this$static.intersectionTestPoint, x_0, y_0), this$static.intersectionTestPoint);
  $transform_1(this$static.lastTrans, $set_0(this$static.intersectionTestSize, w, h), this$static.intersectionTestSize);
  ix = this$static.intersectionTestPoint.x_0;
  iy = this$static.intersectionTestPoint.y_0;
  iw = this$static.intersectionTestSize.x_0;
  ih = this$static.intersectionTestSize.y_0;
  if (this$static.scissorDepth > 0) {
    $get(this$static.scissors, this$static.scissorDepth - 1);
    return null.$_nullMethod();
  }
  tw = this$static.target.this$01.viewPixelWidth;
  th = this$static.target.this$01.viewPixelHeight;
  return ix + iw > 0 && ix < tw && iy + ih > 0 && iy < th;
}

function $restoreTx(this$static){
  var tsSize;
  tsSize = this$static.transformStack.array.length;
  $remove(this$static.transformStack, --tsSize);
  this$static.lastTrans = this$static.transformStack.array.length == 0?null:$get(this$static.transformStack, tsSize - 1);
  return this$static;
}

function $saveTx(this$static){
  $add(this$static.transformStack, this$static.lastTrans = $copy(this$static.lastTrans));
  return this$static;
}

function $scale_0(this$static, sx, sy){
  $scale_1(this$static.lastTrans, sx, sy);
  return this$static;
}

function $setFillColor(this$static){
  this$static.fillColor = -16777216;
  return this$static;
}

function Surface(gfx, target, defaultBatch){
  this.transformStack = new ArrayList;
  this.scissors = new ArrayList;
  this.intersectionTestPoint = new Point;
  this.intersectionTestSize = new Vector;
  this.target = target;
  this.batch = defaultBatch;
  $add(this.transformStack, this.lastTrans = new AffineTransform);
  this.colorTex = $colorTex(gfx);
  $scale_0(this, target.this$01.scale_0.factor, target.this$01.scale_0.factor);
}

defineClass(203, 1, $intern_21, Surface);
_.checkIntersection = false;
_.fillColor = 0;
_.scissorDepth = 0;
_.tint = -1;
var Lplayn_core_Surface_2_classLit = createForClass(203);
defineClass(367, 366, {});
_.toString_0 = function toString_31(){
  return 'Tile[' + this.displayWidth + 'x' + this.displayHeight + '/' + ($clinit_Points() , toString_44(0, TO_STRING_DECIMAL_PLACES) + ('' + toString_44(0, TO_STRING_DECIMAL_PLACES))) + '/' + (toString_44(1, TO_STRING_DECIMAL_PLACES) + ('' + toString_44(1, TO_STRING_DECIMAL_PLACES))) + '] <- ' + this;
}
;
var Lplayn_core_Tile_2_classLit = createForClass(367);
function $addToBatch(this$static, batch, tint, tx, x_0, y_0, width_0, height){
  $addQuad_0(batch, this$static, tint, tx, x_0, y_0, width_0, height);
}

function $update(this$static, image){
  var pixHeight, pixWidth, potHeight, potWidth, scaled;
  if (this$static.config.repeatX || this$static.config.repeatY || this$static.config.mipmaps) {
    pixWidth = image.pixelWidth;
    pixHeight = image.pixelHeight;
    potWidth = $toTexWidth(this$static.config, pixWidth);
    potHeight = $toTexWidth(this$static.config, pixHeight);
    if (potWidth != pixWidth || potHeight != pixHeight) {
      scaled = $createCanvasImpl(this$static.gfx, ($clinit_Scale() , ONE), potWidth, potHeight);
      $draw_4(image, scaled.ctx, potWidth, potHeight);
      $upload(scaled.image, this$static.gfx, this$static);
    }
     else 
      $upload(image, this$static.gfx, this$static);
  }
   else 
    $upload(image, this$static.gfx, this$static);
  this$static.config.mipmaps && (this$static.gfx.gl.gl.generateMipmap(3553) , undefined);
}

function Texture(gfx, id_0, config, pixWidth, pixHeight, scale, dispWidth, dispHeight){
  this.gfx = gfx;
  this.id_0 = id_0;
  this.config = config;
  this.pixelWidth = pixWidth;
  this.pixelHeight = pixHeight;
  this.scale_0 = scale;
  this.displayWidth = dispWidth;
  this.displayHeight = dispHeight;
}

function nextPOT(value_0){
  var bit, count, highest, ii;
  bit = 32768;
  highest = -1;
  count = 0;
  for (ii = 15; ii >= 0; --ii , bit >>= 1) {
    if ((value_0 & bit) == 0)
      continue;
    ++count;
    highest == -1 && (highest = ii);
  }
  return count > 1?1 << highest + 1:value_0;
}

defineClass(272, 367, $intern_21, Texture);
_.toString_0 = function toString_32(){
  return 'Texture[id=' + this.id_0 + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', dsize=' + this.displayWidth + 'x' + this.displayHeight + ' @ ' + this.scale_0 + ', config=' + this.config + ']';
}
;
_.displayHeight = 0;
_.displayWidth = 0;
_.disposed = false;
_.id_0 = 0;
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_Texture_2_classLit = createForClass(272);
function $clinit_Texture$Config(){
  $clinit_Texture$Config = emptyMethod;
  DEFAULT = new Texture$Config(true);
  UNMANAGED = new Texture$Config(false);
}

function $toTexHeight(this$static, sourceHeight){
  return this$static.repeatY || this$static.mipmaps?nextPOT(sourceHeight):sourceHeight;
}

function $toTexWidth(this$static, sourceWidth){
  return this$static.repeatX || this$static.mipmaps?nextPOT(sourceWidth):sourceWidth;
}

function Texture$Config(managed){
  this.managed = managed;
  this.repeatX = false;
  this.repeatY = false;
  this.minFilter = 9729;
  this.magFilter = 9729;
  this.mipmaps = false;
}

defineClass(124, 1, {}, Texture$Config);
_.toString_0 = function toString_33(){
  var repstr;
  repstr = (this.repeatX?'x':'') + (this.repeatY?'y':'');
  return '[managed=' + this.managed + ', repeat=' + repstr + ', filter=' + this.minFilter + '/' + this.magFilter + ', mipmaps=' + this.mipmaps + ']';
}
;
_.magFilter = 0;
_.managed = false;
_.minFilter = 0;
_.mipmaps = false;
_.repeatX = false;
_.repeatY = false;
var DEFAULT, UNMANAGED;
var Lplayn_core_Texture$Config_2_classLit = createForClass(124);
function $fragment(){
  var str;
  str = new StringBuilder_0('#ifdef GL_ES\nprecision lowp float;\n#else\n#define lowp\n#define mediump\n#define highp\n#endif\n');
  str.string += 'uniform lowp sampler2D u_Texture;\n';
  str.string += 'varying mediump vec2 v_TexCoord;\nvarying lowp vec4 v_Color;\n';
  str.string += 'void main(void) {\n';
  str.string += '  vec4 textureColor = texture2D(u_Texture, v_TexCoord);\n';
  str.string += '  textureColor.rgb *= v_Color.rgb;\n';
  str.string += '  textureColor *= v_Color.a;\n';
  str.string += '  gl_FragColor = textureColor;\n}';
  return str.string;
}

function combine(curTint, tint){
  var newA, newB, newG, newR;
  newA = ((curTint >> 24 & 255) * ((tint >> 24 & 255) + 1) & 65280) << 16;
  if ((tint & $intern_26) == $intern_26) {
    return newA | curTint & $intern_26;
  }
  newR = ((curTint >> 16 & 255) * ((tint >> 16 & 255) + 1) & 65280) << 8;
  newG = (curTint >> 8 & 255) * ((tint >> 8 & 255) + 1) & 65280;
  newB = (curTint & 255) * ((tint & 255) + 1) >> 8 & 255;
  return newA | newR | newG | newB;
}

function Touch$Event(time, x_0, y_0, kind, id_0){
  Event$XY.call(this, time, x_0, y_0);
  this.kind = kind;
  this.id_0 = id_0;
  this.pressure = -1;
  this.size_0 = -1;
}

defineClass(74, 38, {23:1, 21:1, 38:1, 74:1, 42:1}, Touch$Event);
_.addFields = function addFields_6(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_7($append_3($append_7($append_4($append_7($append_6((builder.string += ', kind=' , builder), this.kind), ', id='), this.id_0), ', pressure='), this.pressure), ', size='), this.size_0);
}
;
_.name_1 = function name_9(){
  return 'Touch';
}
;
_.id_0 = 0;
_.pressure = 0;
_.size_0 = 0;
var Lplayn_core_Touch$Event_2_classLit = createForClass(74);
function $clinit_Touch$Event$Kind(){
  $clinit_Touch$Event$Kind = emptyMethod;
  START = new Touch$Event$Kind('START', 0);
  MOVE = new Touch$Event$Kind('MOVE', 1);
  END_0 = new Touch$Event$Kind('END', 2);
  CANCEL = new Touch$Event$Kind('CANCEL', 3);
}

function Touch$Event$Kind(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_Touch$Event$Kind();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Touch$Event$Kind_2_classLit, 1), $intern_1, 60, 0, [START, MOVE, END_0, CANCEL]);
}

defineClass(60, 5, {4:1, 6:1, 5:1, 60:1}, Touch$Event$Kind);
var CANCEL, END_0, MOVE, START;
var Lplayn_core_Touch$Event$Kind_2_classLit = createForEnum(60, values_12);
function $clinit_TriangleBatch(){
  $clinit_TriangleBatch = emptyMethod;
  QUAD_INDICES = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_1, 15, 15, [0, 1, 2, 1, 3, 2]);
}

function $addElems(this$static, vertIdx, indices, indicesLen){
  var data_0, ii, ll, offset;
  data_0 = this$static.elements;
  offset = this$static.elemPos;
  for (ii = 0 , ll = indicesLen; ii < ll; ii++) {
    data_0[offset++] = vertIdx + indices[ii] << 16 >> 16;
  }
  this$static.elemPos = offset;
}

function $beginPrimitive(this$static){
  var availElems, availVerts, elems, vertIdx, verts;
  vertIdx = this$static.vertPos / 12 | 0;
  verts = vertIdx + 4;
  elems = this$static.elemPos + 6;
  availVerts = this$static.vertices.length / 12 | 0;
  availElems = this$static.elements.length;
  if (verts <= availVerts && elems <= availElems)
    return vertIdx;
  $flush_0(this$static);
  verts > availVerts && $expandVerts(this$static, verts);
  elems > availElems && $expandElems(this$static, elems);
  return 0;
}

function $bindAttribsBufs(this$static){
  $glBindBuffer(this$static.gl, $intern_27, this$static.verticesId);
  $glBindVertAttrib(this$static, this$static.aMatrix, 4, 0);
  $glBindVertAttrib(this$static, this$static.aTranslation, 2, 16);
  $glBindVertAttrib(this$static, this$static.aColor, 2, 24);
  $glBindVertAttrib(this$static, this$static.aPosition, 2, 32);
  $glBindVertAttrib(this$static, this$static.aTexCoord, 2, 40);
  $glBindBuffer(this$static.gl, $intern_28, this$static.elementsId);
  this$static.gl.gl.activeTexture(33984);
  $glUniform1i(this$static.gl, this$static.uTexture);
}

function $expandElems(this$static, elemCount){
  var newElems;
  newElems = this$static.elements.length;
  while (newElems < elemCount)
    newElems += 96;
  this$static.elements = initUnidimensionalArray(S_classLit, $intern_1, 15, newElems, 15, 1);
}

function $expandVerts(this$static, vertCount){
  var newVerts;
  newVerts = this$static.vertices.length / 12 | 0;
  while (newVerts < vertCount)
    newVerts += 64;
  this$static.vertices = initUnidimensionalArray(F_classLit, $intern_1, 15, newVerts * 12, 15, 1);
}

function $flush_0(this$static){
  $flush(this$static);
  if (this$static.vertPos > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    if (this$static.delayedBinding) {
      $bindAttribsBufs(this$static);
      $checkError(this$static.gl);
    }
    $setFloatBuffer(this$static.gl.bufs, this$static.vertices, this$static.vertPos);
    $glBufferData(this$static.gl, $intern_27, this$static.vertPos * 4, this$static.gl.bufs.floatBuffer, 35040);
    $setShortBuffer(this$static.gl.bufs, this$static.elements, this$static.elemPos);
    $glBufferData(this$static.gl, $intern_28, this$static.elemPos * 2, this$static.gl.bufs.shortBuffer, 35040);
    $checkError(this$static.gl);
    $glDrawElements(this$static.gl, this$static.elemPos);
    $checkError(this$static.gl);
    this$static.vertPos = 0;
    this$static.elemPos = 0;
  }
}

function $glBindVertAttrib(this$static, loc, size_0, offset){
  $glEnableVertexAttribArray(this$static.gl, loc);
  $glVertexAttribPointer(this$static.gl, loc, size_0, 5126, 48, offset);
}

function TriangleBatch(gl){
  var ids;
  $clinit_TriangleBatch();
  this.gl = gl;
  this.delayedBinding = $equals('Intel', gl.gl.getParameter(7936));
  this.program = new GLProgram(gl, 'uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nattribute vec4 a_Matrix;\nattribute vec2 a_Translation;\nattribute vec2 a_Color;\nattribute vec2 a_Position;\nattribute vec2 a_TexCoord;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nmat3 transform = mat3(\n  a_Matrix[0],      a_Matrix[1],      0,\n  a_Matrix[2],      a_Matrix[3],      0,\n  a_Translation[0], a_Translation[1], 1);\ngl_Position = vec4(transform * vec3(a_Position, 1.0), 1);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_TexCoord;\nfloat red = mod(a_Color.x, 256.0);\nfloat alpha = (a_Color.x - red) / 256.0;\nfloat blue = mod(a_Color.y, 256.0);\nfloat green = (a_Color.y - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.aMatrix = $getAttribLocation_0(this.program, 'a_Matrix');
  this.aTranslation = $getAttribLocation_0(this.program, 'a_Translation');
  this.aColor = $getAttribLocation_0(this.program, 'a_Color');
  this.aPosition = $getAttribLocation_0(this.program, 'a_Position');
  this.aTexCoord = $getAttribLocation_0(this.program, 'a_TexCoord');
  this.stableAttrs = initUnidimensionalArray(F_classLit, $intern_1, 15, 8, 15, 1);
  this.vertices = initUnidimensionalArray(F_classLit, $intern_1, 15, 768, 15, 1);
  this.elements = initUnidimensionalArray(S_classLit, $intern_1, 15, 96, 15, 1);
  ids = initUnidimensionalArray(I_classLit, $intern_1, 15, 2, 15, 1);
  $glGenBuffers(gl, ids);
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $checkError(gl);
}

function add_7(into, offset, x_0, y_0, sx, sy){
  into[offset++] = x_0;
  into[offset++] = y_0;
  into[offset++] = sx;
  into[offset++] = sy;
  return offset;
}

defineClass(123, 121, $intern_21, TriangleBatch);
_.addQuad = function addQuad(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var offset, stables, vertIdx, verts, stables_0;
  stables_0 = this.stableAttrs;
  stables_0[0] = m00;
  stables_0[1] = m01;
  stables_0[2] = m10;
  stables_0[3] = m11;
  stables_0[4] = tx;
  stables_0[5] = ty;
  stables_0[6] = tint >> 16 & $intern_20;
  stables_0[7] = tint & $intern_20;
  vertIdx = $beginPrimitive(this);
  offset = this.vertPos;
  verts = this.vertices;
  stables = this.stableAttrs;
  offset = add_7(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x1, y1, sx1, sy1);
  offset = add_7(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x2, y2, sx2, sy2);
  offset = add_7(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x3, y3, sx3, sy3);
  offset = add_7(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x4, y4, sx4, sy4);
  this.vertPos = offset;
  $addElems(this, vertIdx, QUAD_INDICES, QUAD_INDICES.length);
}
;
_.begin = function begin_0(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  this.delayedBinding || $bindAttribsBufs(this);
  $checkError(this.gl);
}
;
_.end = function end_1(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aMatrix);
  $glDisableVertexAttribArray(this.gl, this.aTranslation);
  $glDisableVertexAttribArray(this.gl, this.aColor);
  $glDisableVertexAttribArray(this.gl, this.aPosition);
  $glDisableVertexAttribArray(this.gl, this.aTexCoord);
  $checkError(this.gl);
}
;
_.flush = function flush_0(){
  $flush_0(this);
}
;
_.toString_0 = function toString_34(){
  return 'tris/' + (this.elements.length / QUAD_INDICES.length | 0);
}
;
_.aColor = 0;
_.aMatrix = 0;
_.aPosition = 0;
_.aTexCoord = 0;
_.aTranslation = 0;
_.delayedBinding = false;
_.elemPos = 0;
_.elementsId = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.vertPos = 0;
_.verticesId = 0;
var QUAD_INDICES;
var Lplayn_core_TriangleBatch_2_classLit = createForClass(123);
function $flush_1(this$static){
  $flush(this$static);
  if (this$static.quadCounter > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    $glUniform4fv(this$static.gl, this$static.uData, this$static.quadCounter * 3, this$static.data_0);
    $glDrawElements(this$static.gl, this$static.quadCounter * 6);
    $checkError(this$static.gl);
    this$static.quadCounter = 0;
  }
}

function UniformQuadBatch(gl){
  UniformQuadBatch_0.call(this, gl);
}

function UniformQuadBatch_0(gl){
  var base, base0, base1, base2, base3, ee, elems, ids, ii, maxVecs, verts, vv;
  this.gl = gl;
  maxVecs = usableMaxUniformVectors(gl);
  if (maxVecs < 3)
    throw toJs(new RuntimeException_0('GL_MAX_VERTEX_UNIFORM_VECTORS too low: have ' + maxVecs + ', need at least ' + 3));
  this.maxQuads = maxVecs / 3 | 0;
  this.program = new GLProgram(gl, $replace($replace('uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nuniform vec4 u_Data[_VEC4S_PER_QUAD_*_MAX_QUADS_];\nattribute vec3 a_Vertex;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nint index = _VEC4S_PER_QUAD_*int(a_Vertex.z);\nvec4 mat = u_Data[index+0];\nvec4 txc = u_Data[index+1];\nvec4 tcs = u_Data[index+2];\nmat3 transform = mat3(\n  mat.x, mat.y, 0,\n  mat.z, mat.w, 0,\n  txc.x, txc.y, 1);\ngl_Position = vec4(transform * vec3(a_Vertex.xy, 1.0), 1.0);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_Vertex.xy * tcs.xy + txc.zw;\nfloat red = mod(tcs.z, 256.0);\nfloat alpha = (tcs.z - red) / 256.0;\nfloat blue = mod(tcs.w, 256.0);\nfloat green = (tcs.w - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', '_MAX_QUADS_', '' + this.maxQuads), '_VEC4S_PER_QUAD_', '3'), $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.uData = $getUniformLocation_0(this.program, 'u_Data');
  this.aVertex = $getAttribLocation_0(this.program, 'a_Vertex');
  verts = initUnidimensionalArray(S_classLit, $intern_1, 15, this.maxQuads * 4 * 3, 15, 1);
  elems = initUnidimensionalArray(S_classLit, $intern_1, 15, this.maxQuads * 6, 15, 1);
  vv = 0;
  ee = 0;
  for (ii = 0; ii < this.maxQuads; ii++) {
    verts[vv++] = 0;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 0;
    verts[vv++] = 1;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 1;
    verts[vv++] = ii;
    base = ii * 4 << 16 >> 16;
    base0 = base;
    base1 = ++base;
    base2 = ++base;
    base3 = ++base;
    elems[ee++] = base0;
    elems[ee++] = base1;
    elems[ee++] = base2;
    elems[ee++] = base1;
    elems[ee++] = base3;
    elems[ee++] = base2;
  }
  this.data_0 = initUnidimensionalArray(F_classLit, $intern_1, 15, this.maxQuads * 3 * 4, 15, 1);
  ids = initUnidimensionalArray(I_classLit, $intern_1, 15, 2, 15, 1);
  $glGenBuffers(gl, ids);
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $glBindBuffer(gl, $intern_27, this.verticesId);
  $setShortBuffer(gl.bufs, verts, verts.length);
  $glBufferData(gl, $intern_27, verts.length * 2, gl.bufs.shortBuffer, 35044);
  $glBindBuffer(gl, $intern_28, this.elementsId);
  $setShortBuffer(gl.bufs, elems, elems.length);
  $glBufferData(gl, $intern_28, elems.length * 2, gl.bufs.shortBuffer, 35044);
  $checkError(gl);
}

function usableMaxUniformVectors(gl){
  var glErr, maxVecs;
  maxVecs = gl.gl.getParameter(36347) - 3;
  glErr = gl.gl.getError();
  if (glErr != 0)
    throw toJs(new RuntimeException_0('Unable to query GL_MAX_VERTEX_UNIFORM_VECTORS,  error ' + glErr));
  return maxVecs;
}

defineClass(122, 121, $intern_21, UniformQuadBatch);
_.addQuad = function addQuad_0(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var dh, dw, pos;
  pos = this.quadCounter * 3 * 4;
  dw = x2 - x1;
  dh = y3 - y1;
  this.data_0[pos++] = m00 * dw;
  this.data_0[pos++] = m01 * dw;
  this.data_0[pos++] = m10 * dh;
  this.data_0[pos++] = m11 * dh;
  this.data_0[pos++] = tx + m00 * x1 + m10 * y1;
  this.data_0[pos++] = ty + m01 * x1 + m11 * y1;
  this.data_0[pos++] = sx1;
  this.data_0[pos++] = sy1;
  this.data_0[pos++] = sx2 - sx1;
  this.data_0[pos++] = sy3 - sy1;
  this.data_0[pos++] = tint >> 16 & $intern_20;
  this.data_0[pos++] = tint & $intern_20;
  ++this.quadCounter;
  this.quadCounter >= this.maxQuads && $flush_1(this);
}
;
_.begin = function begin_1(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  $glBindBuffer(this.gl, $intern_27, this.verticesId);
  $glEnableVertexAttribArray(this.gl, this.aVertex);
  $glVertexAttribPointer(this.gl, this.aVertex, 3, 5122, 0, 0);
  $glBindBuffer(this.gl, $intern_28, this.elementsId);
  this.gl.gl.activeTexture(33984);
  $glUniform1i(this.gl, this.uTexture);
  $checkError(this.gl);
}
;
_.end = function end_2(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aVertex);
  $checkError(this.gl);
}
;
_.flush = function flush_1(){
  $flush_1(this);
}
;
_.toString_0 = function toString_35(){
  return 'uquad/' + this.maxQuads;
}
;
_.aVertex = 0;
_.elementsId = 0;
_.maxQuads = 0;
_.quadCounter = 0;
_.uData = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.verticesId = 0;
var Lplayn_core_UniformQuadBatch_2_classLit = createForClass(122);
function $getBundle(this$static, collection){
  var clientBundle, entry, entry$iterator, regExp;
  clientBundle = null;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.clientBundles)).this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    regExp = entry.getKey();
    !!$exec(new RegExp(regExp), collection) && (clientBundle = entry.getValue());
  }
  return clientBundle;
}

function $getImage(this$static, path){
  var assetScale, rsrcs;
  assetScale = ($clinit_Scale() , ONE);
  rsrcs = $getScaledResources(assetScale, path);
  return $getImage_0(this$static, (checkCriticalElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).path, (checkCriticalElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).scale_0);
}

function $getImage_0(this$static, path, scale){
  var url_0, img;
  url_0 = this$static.pathPrefix + ('' + path);
  $getBundle(this$static, path);
  return img = $doc.createElement('img') , 'crossOrigin' in img && img.setAttribute('crossOrigin', 'anonymous') , img.src = url_0 , new HtmlImage_0(this$static.plat.graphics, scale, img, url_0);
}

function $getSound(this$static){
  var url_0;
  url_0 = this$static.pathPrefix + 'fanfare';
  $getBundle(this$static, 'fanfare');
  url_0 += '.mp3';
  return $createSound_0(this$static.plat.audio, url_0);
}

function HtmlAssets(plat){
  this.clientBundles = new HashMap;
  this.pathPrefix = ($clinit_Impl() , $moduleBase);
  this.plat = plat;
}

defineClass(163, 346, {}, HtmlAssets);
var Lplayn_html_HtmlAssets_2_classLit = createForClass(163);
function $createSound_0(this$static, url_0){
  var sound;
  sound = $createSound(this$static.soundController, url_0);
  return new HtmlSound(this$static.plat.exec_0, sound);
}

function HtmlAudio(plat){
  var types;
  this.soundController = new SoundController;
  this.plat = plat;
  types = this.soundController.preferredSoundTypes;
  $debug(plat.log_0, 'Preferred sound type(s): ' + types);
  maybeCreateAudioContext();
}

function maybeCreateAudioContext(){
  try {
    return new AudioContext;
  }
   catch (ignore) {
  }
  try {
    return new webkitAudioContext;
  }
   catch (ignore) {
  }
  return null;
}

defineClass(193, 349, {}, HtmlAudio);
var Lplayn_html_HtmlAudio_2_classLit = createForClass(193);
function $fillRect_1(this$static, w, h){
  $fillRect(this$static.ctx, 0, 0, w, h);
  return this$static;
}

function HtmlCanvas(image){
  var scale;
  Canvas_0.call(this, image);
  this.ctx = image.canvas.getContext('2d');
  scale = image.scale_0.factor;
  $scale(this.ctx, scale, scale);
}

defineClass(108, 306, $intern_21, HtmlCanvas);
var Lplayn_html_HtmlCanvas_2_classLit = createForClass(108);
function $getTypedArray(buffer, type_0, byteSize){
  var arrayHolder, bufferElementSize, byteOffset, webGLArray;
  if (!instanceOf(buffer, 105)) {
    throw toJs(new RuntimeException_0('Native buffer required ' + buffer));
  }
  arrayHolder = buffer;
  bufferElementSize = arrayHolder.getElementSize();
  webGLArray = arrayHolder.getTypedArray();
  byteSize == -1 && (byteSize = (buffer.limit - buffer.position_0) * bufferElementSize);
  if (byteSize == buffer.capacity * bufferElementSize && type_0 == arrayHolder.getElementType()) {
    return webGLArray;
  }
  byteOffset = webGLArray.byteOffset + buffer.position_0 * bufferElementSize;
  switch (type_0) {
    case 5126:
      return create(webGLArray.buffer, byteOffset, byteSize / 4 | 0);
    case 5121:
      return create_4(webGLArray.buffer, byteOffset, byteSize);
    case 5123:
      return create_3(webGLArray.buffer, byteOffset, byteSize / 2 | 0);
    case 5124:
      return create_1(webGLArray.buffer, byteOffset, byteSize / 4 | 0);
    case 5122:
      return create_0(webGLArray.buffer, byteOffset, byteSize / 2 | 0);
    case 5120:
      return create_2(webGLArray.buffer, byteOffset, byteSize);
    default:throw toJs(new IllegalArgumentException_0('Type: ' + type_0));
  }
}

function $glAttachShader(this$static, program, shader){
  var glProgram, glShader;
  glProgram = this$static.programs[program];
  glShader = this$static.shaders[shader];
  $attachShader(this$static.gl, glProgram, glShader);
}

function $glBindBuffer(this$static, target, buffer){
  var webGlBuf;
  webGlBuf = this$static.buffers[buffer];
  target == $intern_27?(this$static.requestedArrayBuffer = webGlBuf):target == $intern_28?(this$static.requestedElementArrayBuffer = webGlBuf):$bindBuffer(this$static.gl, target, webGlBuf);
}

function $glBindFramebuffer(this$static){
  $bindFramebuffer(this$static.gl, 36160, this$static.frameBuffers[0]);
}

function $glBindTexture(this$static, texture){
  $bindTexture(this$static.gl, 3553, this$static.textures[texture]);
}

function $glBufferData(this$static, target, byteSize, data_0, usage){
  if (target == $intern_27) {
    if (this$static.requestedArrayBuffer != this$static.boundArrayBuffer) {
      $bindBuffer(this$static.gl, $intern_27, this$static.requestedArrayBuffer);
      this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
    }
  }
   else if (target == $intern_28) {
    if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
      $bindBuffer(this$static.gl, $intern_28, this$static.requestedElementArrayBuffer);
      this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
    }
  }
  $bufferData(this$static.gl, target, $getTypedArray(data_0, 5120, byteSize), usage);
}

function $glClearColor(this$static, red, green, blue, alpha_0){
  $clearColor(this$static.gl, red, green, blue, alpha_0);
}

function $glCompileShader(this$static, shader){
  var glShader;
  glShader = this$static.shaders[shader];
  $compileShader(this$static.gl, glShader);
}

function $glCreateShader(this$static, type_0){
  var shader;
  shader = $createShader(this$static.gl, type_0);
  return $add_5(this$static.shaders, shader);
}

function $glDeleteShader(this$static, shader){
  var sh;
  sh = $remove_13(this$static.shaders, shader);
  $deleteShader(this$static.gl, sh);
}

function $glDisableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays &= ~(1 << index_0);
}

function $glDrawElements(this$static, count){
  $prepareDraw(this$static);
  if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
    $bindBuffer(this$static.gl, $intern_28, this$static.requestedElementArrayBuffer);
    this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
  }
  $drawElements(this$static.gl, 4, count, 5123, 0);
}

function $glEnableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays |= 1 << index_0;
}

function $glGenBuffers(this$static, buffers){
  var buffer, i, id_0;
  for (i = 0; i < 2; i++) {
    buffer = this$static.gl.createBuffer();
    id_0 = $add_5(this$static.buffers, buffer);
    buffers[i] = id_0;
  }
}

function $glGenTextures(this$static, textures){
  var i, id_0, pos, texture;
  pos = textures.position_0;
  for (i = 0; i < 1; i++) {
    texture = this$static.gl.createTexture();
    id_0 = $add_5(this$static.textures, texture);
    textures.intArray[pos + i] = id_0;
  }
}

function $glGetAttribLocation(this$static, program, name_0){
  var prog;
  prog = this$static.programs[program];
  return $getAttribLocation(this$static.gl, prog, name_0);
}

function $glGetShaderInfoLog(this$static, shader){
  return $getShaderInfoLog(this$static.gl, this$static.shaders[shader]);
}

function $glGetShaderiv(this$static, shader, params){
  params[0] = $getShaderParameterb(this$static.gl, this$static.shaders[shader], 35713)?1:0;
}

function $glGetUniformLocation(this$static, program, name_0){
  var id_0, location_0, progUniforms;
  location_0 = $getUniformLocation(this$static.gl, this$static.programs[program], name_0);
  progUniforms = this$static.uniforms[program];
  if (!progUniforms) {
    progUniforms = [undefined];
    this$static.uniforms[program] = progUniforms;
  }
  id_0 = $add_5(progUniforms, location_0);
  return id_0;
}

function $glShaderSource(this$static, shader, string){
  $shaderSource(this$static.gl, this$static.shaders[shader], string);
}

function $glTexImage2D(this$static, image){
  $texImage2D(this$static.gl, 3553, 0, 6408, 6408, 5121, image);
  $checkError(this$static);
}

function $glTexParameteri(this$static, glTextureMinFilter, glFilterMin){
  $texParameteri(this$static.gl, 3553, glTextureMinFilter, glFilterMin);
}

function $glUniform1f(this$static, location_0, x_0){
  $uniform1f(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], x_0);
}

function $glUniform1i(this$static, location_0){
  $uniform1i(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], 0);
}

function $glUniform2f(this$static, location_0, x_0, y_0){
  $uniform2f(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], x_0, y_0);
}

function $glUniform4fv_0(this$static, location_0, count, v){
  $uniform4fv(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], $getTypedArray(v, 5126, 16 * count));
}

function $glUseProgram(this$static, program){
  this$static.currProgram = program;
  $useProgram(this$static.gl, this$static.programs[program]);
}

function $glVertexAttribPointer(this$static, indx, size_0, type_0, stride, ptr){
  this$static.useNioBuffer &= ~(1 << indx);
  if (this$static.boundArrayBuffer != this$static.requestedArrayBuffer) {
    $bindBuffer(this$static.gl, $intern_27, this$static.requestedArrayBuffer);
    this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
  }
  $vertexAttribPointer(this$static.gl, indx, size_0, type_0, false, stride, ptr);
}

function $glViewport(this$static, w, h){
  $viewport(this$static.gl, 0, 0, w, h);
}

function $init(this$static, gl){
  var data_0, ii;
  gl.pixelStorei(37441, 1);
  this$static.gl = gl;
  gl.createBuffer();
  for (ii = 0; ii < 5; ii++) {
    data_0 = new HtmlGL20$VertexAttribArrayState;
    data_0.webGlBuffer = gl.createBuffer();
    this$static.vertexAttribArrayState[ii] = data_0;
  }
}

function $prepareDraw(this$static){
  var data_0, elementSize, enabled, i, mask, previousElementSize, previousNio;
  previousNio = null;
  previousElementSize = 0;
  if (this$static.useNioBuffer == 0 && this$static.enabledArrays == this$static.previouslyEnabledArrays) {
    return;
  }
  for (i = 0; i < 5; i++) {
    mask = 1 << i;
    enabled = this$static.enabledArrays & mask;
    enabled != (this$static.previouslyEnabledArrays & mask) && (enabled != 0?$enableVertexAttribArray(this$static.gl, i):$disableVertexAttribArray(this$static.gl, i));
    if (enabled != 0 && (this$static.useNioBuffer & mask) != 0) {
      data_0 = this$static.vertexAttribArrayState[i];
      if (!!previousNio && previousNio.nioBufferLimit >= data_0.nioBufferLimit) {
        if (this$static.boundArrayBuffer != previousNio.webGlBuffer) {
          $bindBuffer(this$static.gl, $intern_27, previousNio.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * previousElementSize);
      }
       else {
        if (this$static.boundArrayBuffer != data_0.webGlBuffer) {
          $bindBuffer(this$static.gl, $intern_27, data_0.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        elementSize = getElementSize_3();
        null.$_nullMethod();
        if (data_0.nioBufferPosition * elementSize < data_0.stride) {
          null.$_nullMethod();
          $bufferData(this$static.gl, $intern_27, $getTypedArray(data_0.nioBuffer, data_0.type_0, data_0.nioBufferLimit * elementSize), 35040);
          $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * elementSize);
          previousNio = data_0;
          previousElementSize = elementSize;
        }
         else {
          null.$_nullMethod();
          $bufferData(this$static.gl, $intern_27, $getTypedArray(data_0.nioBuffer, data_0.type_0, (data_0.nioBufferLimit - data_0.nioBufferPosition) * elementSize), 35040);
          $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, 0);
        }
        null.$_nullMethod();
      }
    }
  }
  this$static.previouslyEnabledArrays = this$static.enabledArrays;
}

function HtmlGL20(){
  GL20.call(this, new HtmlGL20$1, ($clinit_HtmlUrlParameters() , checkGLErrors));
  this.programs = [undefined];
  this.shaders = [undefined];
  this.buffers = [undefined];
  this.frameBuffers = [undefined];
  this.textures = [undefined];
  this.uniforms = [undefined];
  this.vertexAttribArrayState = initUnidimensionalArray(Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit, $intern_1, 96, 5, 0, 1);
}

function getElementSize_3(){
  throw toJs(new RuntimeException_0('Unrecognized buffer type: ' + null.$_nullMethod()));
}

defineClass(216, 215, {}, HtmlGL20);
_.currProgram = 0;
_.enabledArrays = 0;
_.previouslyEnabledArrays = 0;
_.useNioBuffer = 0;
var Lplayn_html_HtmlGL20_2_classLit = createForClass(216);
function $createByteBuffer(size_0){
  var buffer;
  buffer = allocateDirect(size_0);
  $order(buffer, ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER));
  return buffer;
}

function HtmlGL20$1(){
  this.intBuffer = $asIntBuffer($createByteBuffer(128));
  this.floatBuffer = new FloatBuffer($slice($createByteBuffer(128)));
  this.shortBuffer = $asShortBuffer($createByteBuffer(64));
  $createByteBuffer(256);
}

defineClass(218, 217, {}, HtmlGL20$1);
var Lplayn_html_HtmlGL20$1_2_classLit = createForClass(218);
function $add_5(this$static, value_0){
  this$static.push(value_0);
  return this$static.length - 1;
}

function $remove_13(this$static, key){
  var value_0 = this$static[key];
  delete this$static[key];
  return value_0;
}

function HtmlGL20$VertexAttribArrayState(){
}

defineClass(96, 1, {96:1}, HtmlGL20$VertexAttribArrayState);
_.nioBufferLimit = 0;
_.nioBufferPosition = 0;
_.normalize = false;
_.size_0 = 0;
_.stride = 0;
_.type_0 = 0;
var Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit = createForClass(96);
function $createCanvasImpl(this$static, scale, pixelWidth, pixelHeight){
  var elem;
  elem = $doc.createElement('canvas');
  elem.width = pixelWidth;
  elem.height = pixelHeight;
  return new HtmlCanvas(new HtmlImage(this$static, scale, elem));
}

function $screenSize(this$static){
  this$static.screenSize.width_0 = $doc.documentElement.clientWidth | 0;
  this$static.screenSize.height_0 = $doc.documentElement.clientHeight | 0;
  return this$static.screenSize;
}

function $setSize(this$static, width_0, height){
  var fbScale;
  this$static.rootElement.style['width'] = width_0 + ($clinit_Style$Unit() , 'px');
  this$static.rootElement.style['height'] = height + 'px';
  fbScale = new Scale(this$static.frameBufferPixelRatio);
  $setWidth(this$static.canvas, iceil(fbScale.factor * width_0));
  $setHeight(this$static.canvas, iceil(fbScale.factor * height));
  this$static.canvas.style['width'] = width_0 + 'px';
  this$static.canvas.style['height'] = height + 'px';
  $viewportChanged(this$static, this$static.canvas.width, this$static.canvas.height);
}

function $transformMouse(this$static, x_0, y_0){
  return $set(this$static.mousePoint, x_0 / this$static.mouseScale, y_0 / this$static.mouseScale);
}

function $updateTexture(this$static, tex, img){
  $glBindTexture(this$static.gl, tex);
  $glTexImage2D(this$static.gl, img);
}

function HtmlGraphics(plat, config){
  var attrs, doc, glc, root;
  Graphics.call(this, plat, new HtmlGL20, new Scale(config.scaleFactor));
  new HashMap;
  this.mousePoint = new Point;
  this.screenSize = new Dimension;
  this.frameBufferPixelRatio = config.frameBufferPixelRatio;
  this.mouseScale = config.scaleFactor / this.frameBufferPixelRatio;
  doc = $doc;
  this.dummyCanvas = doc.createElement('canvas');
  this.dummyCanvas.getContext('2d');
  root = $getElementById(doc, config.rootId);
  if (!root) {
    root = doc.createElement('div');
    root.setAttribute('style', 'width: 640px; height: 480px');
    $appendChild(doc.body, root);
  }
   else {
    root.innerHTML = '';
  }
  this.rootElement = root;
  this.measureElement = doc.createElement('div');
  this.measureElement.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
  this.measureElement.style['position'] = ($clinit_Style$Position() , 'absolute');
  this.measureElement.style['top'] = ($clinit_Style$Unit() , '-500.0px');
  this.measureElement.style['overflow'] = ($clinit_Style$Overflow() , 'visible');
  this.measureElement.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'nowrap');
  $appendChild(root, this.measureElement);
  this.canvas = $doc.createElement('canvas');
  $appendChild(root, this.canvas);
  $setSize(this, (root.offsetWidth || 0) | 0, (root.offsetHeight || 0) | 0);
  attrs = {premultipliedAlpha:false};
  attrs.alpha = false;
  $setAntialias(attrs, config.antiAliasing);
  glc = getContext(this.canvas, attrs);
  if (!glc)
    throw toJs(new RuntimeException_0('Unable to create GL context'));
  $init(this.gl, glc);
}

defineClass(175, 174, {}, HtmlGraphics);
_.frameBufferPixelRatio = 0;
_.mouseScale = 0;
var experimentalScale = 1;
var Lplayn_html_HtmlGraphics_2_classLit = createForClass(175);
function $createErrorBitmap(pixelWidth, pixelHeight){
  var img;
  img = $doc.createElement('img');
  img.width = pixelWidth;
  img.height = pixelHeight;
  return img;
}

function $draw_4(this$static, ctx, width_0, height){
  $drawImage_0(ctx, this$static.img, 0, 0, width_0, height);
}

function $draw_5(this$static, ctx, dw, dh, sx, sy, sw, sh){
  sx *= this$static.scale_0.factor;
  sy *= this$static.scale_0.factor;
  sw *= this$static.scale_0.factor;
  sh *= this$static.scale_0.factor;
  $drawImage_1(ctx, this$static.img, sx, sy, sw, sh, 0, 0, dw, dh);
}

function $getRgb(this$static, width_0, height, rgbArray, scanSize){
  var a, b, ctx, dst, g, i, imageData, pixelData, r, x_0, y_0;
  if (!this$static.canvas) {
    this$static.canvas = this$static.img.ownerDocument.createElement('canvas');
    $setHeight(this$static.canvas, this$static.img.height);
    $setWidth(this$static.canvas, this$static.img.width);
    $drawImage(this$static.canvas.getContext('2d'), this$static.img, 0, 0);
  }
  ctx = this$static.canvas.getContext('2d');
  imageData = ctx.getImageData(0, 0, width_0, height);
  pixelData = imageData.data;
  i = 0;
  dst = 0;
  for (y_0 = 0; y_0 < height; y_0++) {
    for (x_0 = 0; x_0 < width_0; x_0++) {
      r = pixelData[i++] || 0;
      g = pixelData[i++] || 0;
      b = pixelData[i++] || 0;
      a = pixelData[i++] || 0;
      rgbArray[dst + x_0] = a << 24 | r << 16 | g << 8 | b;
    }
    dst += scanSize;
  }
}

function $setBitmap(this$static, bitmap){
  this$static.img = bitmap;
}

function $setRgb(this$static, width_0, height, rgbArray, scanSize){
  var argb, ctx, dst, i, imageData, pixelData, x_0, y_0;
  ctx = this$static.canvas.getContext('2d');
  imageData = ctx.createImageData(width_0, height);
  pixelData = imageData.data;
  i = 0;
  dst = 0;
  for (y_0 = 0; y_0 < height; y_0++) {
    for (x_0 = 0; x_0 < width_0; x_0++) {
      argb = rgbArray[dst + x_0];
      pixelData[i++] = argb >> 16 & 255;
      pixelData[i++] = argb >> 8 & 255;
      pixelData[i++] = argb & 255;
      pixelData[i++] = argb >> 24 & 255;
    }
    dst += scanSize;
  }
  ctx.putImageData(imageData, 0, 0);
}

function $upload(this$static, gfx, tex){
  $updateTexture(gfx, tex.id_0, this$static.img);
}

function HtmlImage(gfx, scale, elem){
  ImageImpl.call(this, gfx, scale, elem.width, elem.height, elem);
  this.canvas = elem;
}

function HtmlImage_0(gfx, scale, elem, source){
  var pstate;
  ImageImpl_0.call(this, gfx, ($clinit_RPromise() , new RPromise), scale, elem.width, elem.height, source);
  this.img = elem;
  pstate = this.state;
  if (this.img.complete)
    pstate.succeed(this);
  else {
    new HtmlInput$EventCloseHandler(this.img, 'load', new HtmlImage$1(this, scale), false);
    new HtmlInput$EventCloseHandler(this.img, 'error', new HtmlImage$2(this), false);
  }
}

defineClass(86, 133, {}, HtmlImage, HtmlImage_0);
_.toString_0 = function toString_36(){
  return 'Image[src=' + this.source + ', scale=' + this.scale_0 + ', size=' + $invScaled(this.scale_0, this.pixelWidth) + 'x' + $invScaled(this.scale_0, this.pixelHeight) + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', img=' + this.img + ', canvas=' + this.canvas + ']';
}
;
var Lplayn_html_HtmlImage_2_classLit = createForClass(86);
function HtmlImage$1(this$0, val$fscale){
  this.this$01 = this$0;
  this.val$fscale2 = val$fscale;
}

defineClass(284, 1, {}, HtmlImage$1);
_.handleEvent = function handleEvent(evt){
  $succeed_0(this.this$01, new ImageImpl$Data(this.val$fscale2, this.this$01.img, this.this$01.img.width, this.this$01.img.height));
}
;
var Lplayn_html_HtmlImage$1_2_classLit = createForClass(284);
function HtmlImage$2(this$0){
  this.this$01 = this$0;
}

defineClass(285, 1, {}, HtmlImage$2);
_.handleEvent = function handleEvent_0(evt){
  $fail_0(this.this$01, new RuntimeException_0('Error loading image ' + this.this$01.img.src));
}
;
var Lplayn_html_HtmlImage$2_2_classLit = createForClass(285);
function $dispatch_0(this$static, event_0, nevent){
  try {
    $setFlag(event_0, modifierFlags(!!nevent.altKey, !!nevent.ctrlKey, !!nevent.metaKey, !!nevent.shiftKey));
    $dispatchEvent(this$static.plat, this$static.keyboardEvents, event_0);
  }
   finally {
    (event_0.flags & 1) != 0 && (nevent.preventDefault() , undefined);
  }
}

function $dispatch_1(this$static, event_0, nevent){
  try {
    $setFlag(event_0, modifierFlags(!!nevent.altKey, !!nevent.ctrlKey, !!nevent.metaKey, !!nevent.shiftKey));
    $dispatchEvent(this$static.plat, this$static.mouseEvents, event_0);
  }
   finally {
    (event_0.flags & 1) != 0 && (nevent.preventDefault() , undefined);
  }
}

function $dispatch_2(this$static, events, nevent){
  var event_0, event$index, event$max;
  try {
    $dispatchEvent(this$static.plat, this$static.touchEvents, events);
  }
   finally {
    for (event$index = 0 , event$max = events.length; event$index < event$max; ++event$index) {
      event_0 = events[event$index];
      (event_0.flags & 1) != 0 && (nevent.preventDefault() , undefined);
    }
  }
}

function $handleRequestsInUserEventContext(this$static){
  this$static.isRequestingMouseLock && !$isMouseLocked() && $requestMouseLockImpl(this$static.rootElement);
}

function $isMouseLocked(){
  return !!($doc.pointerLockElement || $doc.webkitPointerLockElement || $doc.mozPointerLockElement);
}

function $requestMouseLockImpl(element){
  element.requestPointerLock = element.requestPointerLock || element.webkitRequestPointerLock || element.mozRequestPointerLock;
  element.requestPointerLock && element.requestPointerLock();
}

function $toTouchEvents(this$static, kind, nevent){
  var id_0, nativeTouches, nativeTouchesLen, t, time, touch, touches, x_0, xy, y_0;
  nativeTouches = nevent.changedTouches;
  nativeTouchesLen = nativeTouches.length;
  touches = initUnidimensionalArray(Lplayn_core_Touch$Event_2_classLit, $intern_1, 74, nativeTouchesLen, 0, 1);
  time = now_2();
  for (t = 0; t < nativeTouchesLen; t++) {
    touch = nativeTouches[t];
    x_0 = $getRelativeX(touch, this$static.rootElement);
    y_0 = $getRelativeY(touch, this$static.rootElement);
    xy = $transformMouse(this$static.plat.graphics, x_0, y_0);
    id_0 = nevent.changedTouches[t].identifier || 0;
    touches[t] = new Touch$Event(time, xy.x_0, xy.y_0, kind, id_0);
  }
  return touches;
}

function HtmlInput(hplat, root){
  this.mouseEvents = ($clinit_AbstractSignal() , new Signal);
  this.touchEvents = new Signal;
  this.keyboardEvents = new Signal;
  this.lastMousePt = new Point;
  this.plat = hplat;
  this.rootElement = root;
  capturePageEvent('keydown', new HtmlInput$1(this));
  capturePageEvent('keypress', new HtmlInput$2(this));
  capturePageEvent('keyup', new HtmlInput$3(this));
  new HtmlInput$EventCloseHandler($doc, 'contextmenu', new HtmlInput$4, false);
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousedown', new HtmlInput$5(this, this), true);
  capturePageEvent('mouseup', new HtmlInput$6(this, this));
  capturePageEvent('mousemove', new HtmlInput$7(this));
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousemove', new HtmlInput$8(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, getMouseWheelEvent(), new HtmlInput$9(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, 'touchstart', new HtmlInput$10(this), true);
  capturePageEvent('touchmove', new HtmlInput$11(this));
  capturePageEvent('touchend', new HtmlInput$12(this));
}

function capturePageEvent(name_0, handler){
  return new HtmlInput$EventCloseHandler($doc, name_0, handler, true);
}

function getMouseButton(evt){
  switch ($eventGetButton(evt)) {
    case 1:
      return $clinit_Mouse$ButtonEvent$Id() , LEFT_0;
    case 4:
      return $clinit_Mouse$ButtonEvent$Id() , MIDDLE;
    case 2:
      return $clinit_Mouse$ButtonEvent$Id() , RIGHT_0;
    default:return null;
  }
}

function getMouseWheelEvent(){
  if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
    return 'DOMMouseScroll';
  }
   else {
    return 'mousewheel';
  }
}

function getMouseWheelVelocity(evt){
  var delta = 0;
  var agentInfo = ($clinit_HtmlPlatform() , agentInfo_0);
  if (agentInfo.isFirefox) {
    agentInfo.isMacOS?(delta = 1 * evt.detail):(delta = 1 * evt.detail / 3);
  }
   else if (agentInfo.isOpera) {
    agentInfo.isLinux?(delta = -1 * evt.wheelDelta / 80):(delta = -1 * evt.wheelDelta / 40);
  }
   else if (agentInfo.isChrome || agentInfo.isSafari || agentInfo.isIE) {
    delta = -1 * evt.wheelDelta / 120;
    Math.abs(delta) < 1 && (agentInfo.isWindows?(delta = -1 * evt.wheelDelta):agentInfo.isMacOS && (delta = -1 * evt.wheelDelta / 3));
  }
  return delta;
}

function getRelativeX(e, target){
  return (((e.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument)) / experimentalScale;
}

function getRelativeY(e, target){
  return (((e.clientY || 0) | 0) - $getAbsoluteTop(target) + ((target.scrollTop || 0) | 0) + $getScrollTop(target.ownerDocument)) / experimentalScale;
}

function keyForCode(keyCode){
  switch (keyCode) {
    case 18:
      return $clinit_Key() , ALT;
    case 8:
      return $clinit_Key() , BACKSPACE;
    case 17:
      return $clinit_Key() , CONTROL;
    case 46:
      return $clinit_Key() , DELETE;
    case 40:
      return $clinit_Key() , DOWN;
    case 35:
      return $clinit_Key() , END;
    case 13:
      return $clinit_Key() , ENTER;
    case 27:
      return $clinit_Key() , ESCAPE;
    case 36:
      return $clinit_Key() , HOME;
    case 37:
      return $clinit_Key() , LEFT;
    case 34:
      return $clinit_Key() , PAGE_DOWN;
    case 33:
      return $clinit_Key() , PAGE_UP;
    case 39:
      return $clinit_Key() , RIGHT;
    case 16:
      return $clinit_Key() , SHIFT;
    case 9:
      return $clinit_Key() , TAB;
    case 38:
      return $clinit_Key() , UP;
    case 19:
      return $clinit_Key() , PAUSE;
    case 20:
      return $clinit_Key() , CAPS_LOCK;
    case 32:
      return $clinit_Key() , SPACE;
    case 45:
      return $clinit_Key() , INSERT;
    case 48:
      return $clinit_Key() , K0;
    case 49:
      return $clinit_Key() , K1;
    case 50:
      return $clinit_Key() , K2;
    case 51:
      return $clinit_Key() , K3;
    case 52:
      return $clinit_Key() , K4;
    case 53:
      return $clinit_Key() , K5;
    case 54:
      return $clinit_Key() , K6;
    case 55:
      return $clinit_Key() , K7;
    case 56:
      return $clinit_Key() , K8;
    case 57:
      return $clinit_Key() , K9;
    case 65:
      return $clinit_Key() , A;
    case 66:
      return $clinit_Key() , B;
    case 67:
      return $clinit_Key() , C;
    case 68:
      return $clinit_Key() , D;
    case 69:
      return $clinit_Key() , E_0;
    case 70:
      return $clinit_Key() , F_0;
    case 71:
      return $clinit_Key() , G;
    case 72:
      return $clinit_Key() , H;
    case 73:
      return $clinit_Key() , I;
    case 74:
      return $clinit_Key() , J;
    case 75:
      return $clinit_Key() , K;
    case 76:
      return $clinit_Key() , L;
    case 77:
      return $clinit_Key() , M;
    case 78:
      return $clinit_Key() , N;
    case 79:
      return $clinit_Key() , O;
    case 80:
      return $clinit_Key() , P;
    case 81:
      return $clinit_Key() , Q;
    case 82:
      return $clinit_Key() , R;
    case 83:
      return $clinit_Key() , S;
    case 84:
      return $clinit_Key() , T;
    case 85:
      return $clinit_Key() , U;
    case 86:
      return $clinit_Key() , V;
    case 87:
      return $clinit_Key() , W;
    case 88:
      return $clinit_Key() , X;
    case 89:
      return $clinit_Key() , Y;
    case 90:
      return $clinit_Key() , Z;
    case 92:
    case 91:
      return $clinit_Key() , WINDOWS;
    case 96:
      return $clinit_Key() , NP0;
    case 97:
      return $clinit_Key() , NP1;
    case 98:
      return $clinit_Key() , NP2;
    case 99:
      return $clinit_Key() , NP3;
    case 100:
      return $clinit_Key() , NP4;
    case 101:
      return $clinit_Key() , NP5;
    case 102:
      return $clinit_Key() , NP6;
    case 103:
      return $clinit_Key() , NP7;
    case 104:
      return $clinit_Key() , NP8;
    case 105:
      return $clinit_Key() , NP9;
    case 106:
      return $clinit_Key() , NP_MULTIPLY;
    case 107:
      return $clinit_Key() , NP_ADD;
    case 109:
      return $clinit_Key() , NP_SUBTRACT;
    case 110:
      return $clinit_Key() , NP_DECIMAL;
    case 111:
      return $clinit_Key() , NP_DIVIDE;
    case 112:
      return $clinit_Key() , F1;
    case 113:
      return $clinit_Key() , F2;
    case 114:
      return $clinit_Key() , F3;
    case 115:
      return $clinit_Key() , F4;
    case 116:
      return $clinit_Key() , F5;
    case 117:
      return $clinit_Key() , F6;
    case 118:
      return $clinit_Key() , F7;
    case 119:
      return $clinit_Key() , F8;
    case 120:
      return $clinit_Key() , F9;
    case 121:
      return $clinit_Key() , F10;
    case 122:
      return $clinit_Key() , F11;
    case 123:
      return $clinit_Key() , F12;
    case 144:
      return $clinit_Key() , NP_NUM_LOCK;
    case 145:
      return $clinit_Key() , SCROLL_LOCK;
    case 186:
      return $clinit_Key() , SEMICOLON;
    case 187:
      return $clinit_Key() , EQUALS;
    case 188:
      return $clinit_Key() , COMMA;
    case 189:
      return $clinit_Key() , MINUS;
    case 190:
      return $clinit_Key() , PERIOD;
    case 191:
      return $clinit_Key() , SLASH;
    case 192:
      return $clinit_Key() , BACKQUOTE;
    case 219:
      return $clinit_Key() , LEFT_BRACKET;
    case 220:
      return $clinit_Key() , BACKSLASH;
    case 221:
      return $clinit_Key() , RIGHT_BRACKET;
    case 222:
      return $clinit_Key() , QUOTE;
    default:return $clinit_Key() , UNKNOWN;
  }
}

defineClass(180, 179, {}, HtmlInput);
_.inDragSequence = false;
_.inTouchSequence = false;
_.isRequestingMouseLock = false;
var Lplayn_html_HtmlInput_2_classLit = createForClass(180);
function HtmlInput$1(this$0){
  this.this$01 = this$0;
}

defineClass(181, 1, {}, HtmlInput$1);
_.handleEvent = function handleEvent_1(nevent){
  var key;
  key = keyForCode(nevent.keyCode | 0);
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, true), nevent);
}
;
var Lplayn_html_HtmlInput$1_2_classLit = createForClass(181);
function HtmlInput$10(this$0){
  this.this$01 = this$0;
}

defineClass(190, 1, {}, HtmlInput$10);
_.handleEvent = function handleEvent_2(nevent){
  this.this$01.inTouchSequence = true;
  $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , START), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$10_2_classLit = createForClass(190);
function HtmlInput$11(this$0){
  this.this$01 = this$0;
}

defineClass(191, 1, {}, HtmlInput$11);
_.handleEvent = function handleEvent_3(nevent){
  this.this$01.inTouchSequence && $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , MOVE), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$11_2_classLit = createForClass(191);
function HtmlInput$12(this$0){
  this.this$01 = this$0;
}

defineClass(192, 1, {}, HtmlInput$12);
_.handleEvent = function handleEvent_4(nevent){
  if (this.this$01.inTouchSequence) {
    $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , END_0), nevent), nevent);
    nevent.touches.length == 0 && (this.this$01.inTouchSequence = false);
  }
}
;
var Lplayn_html_HtmlInput$12_2_classLit = createForClass(192);
function HtmlInput$1XYEventHandler(this$0){
  this.this$01_0 = this$0;
}

defineClass(92, 1, {});
_.handleEvent = function handleEvent_5(ev){
  var xy;
  xy = $transformMouse(this.this$01_0.plat.graphics, getRelativeX(ev, this.this$01_0.rootElement), getRelativeY(ev, this.this$01_0.rootElement));
  this.handleEvent_0(ev, xy.x_0, xy.y_0);
}
;
var Lplayn_html_HtmlInput$1XYEventHandler_2_classLit = createForClass(92);
function HtmlInput$1MoveEventHandler(this$0){
  this.this$01 = this$0;
  this.this$01_0 = this$0;
}

defineClass(111, 92, {});
_.handleEvent_0 = function handleEvent_6(ev, x_0, y_0){
  var dx, dy;
  if (this.lastX == -1) {
    this.lastX = x_0;
    this.lastY = y_0;
  }
  if (this.this$01.inDragSequence == this.wantDragSequence()) {
    if ($isMouseLocked()) {
      dx = ev.webkitMovementX;
      dy = ev.webkitMovementY;
    }
     else {
      dx = x_0 - this.lastX;
      dy = y_0 - this.lastY;
    }
    $dispatch_1(this.this$01, new Mouse$MotionEvent(now_2(), x_0, y_0, dx, dy), ev);
  }
  this.lastX = x_0;
  this.lastY = y_0;
  $set(this.this$01.lastMousePt, x_0, y_0);
}
;
_.lastX = -1;
_.lastY = -1;
var Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit = createForClass(111);
function HtmlInput$2(this$0){
  this.this$01 = this$0;
}

defineClass(182, 1, {}, HtmlInput$2);
_.handleEvent = function handleEvent_7(nevent){
  $dispatch_0(this.this$01, new Keyboard$TypedEvent(now_2(), (nevent.charCode || 0) & $intern_20), nevent);
}
;
var Lplayn_html_HtmlInput$2_2_classLit = createForClass(182);
function HtmlInput$3(this$0){
  this.this$01 = this$0;
}

defineClass(183, 1, {}, HtmlInput$3);
_.handleEvent = function handleEvent_8(nevent){
  var key;
  key = keyForCode(nevent.keyCode | 0);
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, false), nevent);
}
;
var Lplayn_html_HtmlInput$3_2_classLit = createForClass(183);
function HtmlInput$4(){
}

defineClass(184, 1, {}, HtmlInput$4);
_.handleEvent = function handleEvent_9(evt){
  evt.preventDefault();
  evt.stopPropagation();
}
;
var Lplayn_html_HtmlInput$4_2_classLit = createForClass(184);
function HtmlInput$5(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(185, 92, {}, HtmlInput$5);
_.handleEvent_0 = function handleEvent_10(ev, x_0, y_0){
  var btn;
  this.this$02.inDragSequence = true;
  btn = getMouseButton(ev);
  !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_2(), x_0, y_0, btn, true), ev);
}
;
var Lplayn_html_HtmlInput$5_2_classLit = createForClass(185);
function HtmlInput$6(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(186, 92, {}, HtmlInput$6);
_.handleEvent_0 = function handleEvent_11(ev, x_0, y_0){
  var btn;
  if (this.this$02.inDragSequence) {
    this.this$02.inDragSequence = false;
    btn = getMouseButton(ev);
    !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_2(), x_0, y_0, btn, false), ev);
  }
  $handleRequestsInUserEventContext(this.this$02);
}
;
var Lplayn_html_HtmlInput$6_2_classLit = createForClass(186);
function HtmlInput$7(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(187, 111, {}, HtmlInput$7);
_.wantDragSequence = function wantDragSequence(){
  return true;
}
;
var Lplayn_html_HtmlInput$7_2_classLit = createForClass(187);
function HtmlInput$8(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(188, 111, {}, HtmlInput$8);
_.wantDragSequence = function wantDragSequence_0(){
  return false;
}
;
var Lplayn_html_HtmlInput$8_2_classLit = createForClass(188);
function HtmlInput$9(this$0){
  this.this$01 = this$0;
}

defineClass(189, 1, {}, HtmlInput$9);
_.handleEvent = function handleEvent_12(ev){
  var vel;
  vel = getMouseWheelVelocity(ev);
  $dispatch_1(this.this$01, new Mouse$WheelEvent(now_2(), this.this$01.lastMousePt.x_0, this.this$01.lastMousePt.y_0, vel), ev);
}
;
var Lplayn_html_HtmlInput$9_2_classLit = createForClass(189);
function $addEventListener(closeHandler, target, name_0, handler, capture){
  var listener = function(e){
    handler.handleEvent(e);
  }
  ;
  target.addEventListener(name_0, listener, capture);
  closeHandler.setListener(listener);
}

function HtmlInput$EventCloseHandler(target, name_0, eventHandler, capture){
  $addEventListener(this, target, name_0, eventHandler, capture);
}

defineClass(39, 1, {}, HtmlInput$EventCloseHandler);
_.setListener = function setListener(listener){
}
;
var Lplayn_html_HtmlInput$EventCloseHandler_2_classLit = createForClass(39);
defineClass(206, 205, {});
var Lplayn_html_HtmlLog_2_classLit = createForClass(206);
function HtmlLogSimple(){
  this.minLevel = ($clinit_Log$Level() , DEBUG);
}

defineClass(207, 206, {}, HtmlLogSimple);
var Lplayn_html_HtmlLogSimple_2_classLit = createForClass(207);
function $clinit_HtmlPlatform(){
  var userAgent;
  $clinit_HtmlPlatform = emptyMethod;
  agentInfo_0 = (userAgent = navigator.userAgent.toLowerCase() , {isFirefox:userAgent.indexOf('firefox') != -1, isChrome:userAgent.indexOf('chrome') != -1, isSafari:userAgent.indexOf('safari') != -1, isOpera:userAgent.indexOf('opera') != -1, isIE:userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1, isMacOS:userAgent.indexOf('mac') != -1, isLinux:userAgent.indexOf('linux') != -1, isWindows:userAgent.indexOf('win') != -1});
}

function $listenForVisibilityChange(plat){
  $doc.addEventListener('visibilitychange', function(){
    plat.visibilityChanged();
  }
  , false);
}

function $requestAnimationFrame(callback){
  var fn = function(){
    callback.run();
  }
  ;
  $wnd.requestAnimationFrame?$wnd.requestAnimationFrame(fn):$wnd.mozRequestAnimationFrame?$wnd.mozRequestAnimationFrame(fn):$wnd.webkitRequestAnimationFrame?$wnd.webkitRequestAnimationFrame(fn):$wnd.setTimeout(fn, 20);
}

function $scheduleBackgroundFrame(millis, callback){
  $wnd.setTimeout(function(){
    callback.run();
  }
  , millis);
}

function $tick(this$static){
  return round_int(now_2() - this$static.start_0);
}

function HtmlPlatform(config){
  $clinit_HtmlPlatform();
  var e;
  this.lifecycle = ($clinit_AbstractSignal() , new Signal);
  this.frame_0 = new Signal;
  this.errors = new Signal;
  this.start_0 = initNow();
  this.log_0 = new HtmlLogSimple;
  this.exec_0 = new Exec$Default(this);
  setUncaughtExceptionHandler(new HtmlPlatform$1(this));
  $info(this.log_0, 'DPR ' + devicePixelRatio_0() + ' BSPR ' + ($wnd.webkitBackingStorePixelRatio || 1));
  try {
    this.backgroundFrameMillis = 0;
    this.graphics = new HtmlGraphics(this, config);
    this.input_0 = new HtmlInput(this, this.graphics.rootElement);
    this.audio = new HtmlAudio(this);
    this.assets = new HtmlAssets(this);
    new HtmlStorage;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      $error(this.log_0, e);
      alert_0('failed to init(): ' + e.getMessage());
      throw toJs(new RuntimeException_2(e));
    }
     else 
      throw toJs($e0);
  }
}

function devicePixelRatio_0(){
  $clinit_HtmlPlatform();
  return $wnd.devicePixelRatio || 1;
}

function initNow(){
  function now_0(){
    return +new Date;
  }

  !Date.now && (Date.now = now_0);
  return Date.now();
}

function now_2(){
  $clinit_HtmlPlatform();
  return Date.now();
}

defineClass(149, 90, {90:1}, HtmlPlatform);
_.visibilityChanged = function visibilityChanged(){
  var isHidden;
  isHidden = $doc.hidden;
  $dispatchEvent(this, this.lifecycle, isHidden?($clinit_Platform$Lifecycle() , PAUSE_0):($clinit_Platform$Lifecycle() , RESUME));
  isHidden && this.backgroundFrameMillis > 0 && $scheduleBackgroundFrame(this.backgroundFrameMillis, new HtmlPlatform$3(this));
}
;
_.backgroundFrameMillis = 0;
_.start_0 = 0;
var agentInfo_0;
var Lplayn_html_HtmlPlatform_2_classLit = createForClass(149);
function HtmlPlatform$1(this$0){
  this.this$01 = this$0;
}

defineClass(161, 1, {}, HtmlPlatform$1);
var Lplayn_html_HtmlPlatform$1_2_classLit = createForClass(161);
function HtmlPlatform$2(this$0){
  this.this$01 = this$0;
}

defineClass(152, 1, $intern_22, HtmlPlatform$2);
_.run = function run_3(){
  $requestAnimationFrame(this);
  $emitFrame(this.this$01);
}
;
var Lplayn_html_HtmlPlatform$2_2_classLit = createForClass(152);
function HtmlPlatform$3(this$0){
  this.this$01 = this$0;
}

defineClass(162, 1, $intern_22, HtmlPlatform$3);
_.run = function run_4(){
  if ($doc.hidden) {
    $scheduleBackgroundFrame(this.this$01.backgroundFrameMillis, this);
    $emitFrame(this.this$01);
  }
}
;
var Lplayn_html_HtmlPlatform$3_2_classLit = createForClass(162);
function HtmlPlatform$Config(){
  requestedMode();
  this.scaleFactor = devicePixelRatio_0();
  this.frameBufferPixelRatio = devicePixelRatio_0();
}

defineClass(148, 1, {}, HtmlPlatform$Config);
_.antiAliasing = true;
_.frameBufferPixelRatio = 0;
_.rootId = 'playn-root';
_.scaleFactor = 0;
var Lplayn_html_HtmlPlatform$Config_2_classLit = createForClass(148);
function $setLoopingImpl(this$static, looping){
  this$static.impl.setLooping_0(looping);
}

function $setVolumeImpl(this$static, volume){
  this$static.impl.setVolume_0(round_int(volume * 100));
}

function HtmlSound(exec_0, sound){
  Sound.call(this, new Exec$1(exec_0));
  $addEventHandler(sound, new HtmlSound$1(this, sound));
}

defineClass(300, 299, {}, HtmlSound);
var Lplayn_html_HtmlSound_2_classLit = createForClass(300);
function $onSoundLoadStateChange(this$static, event_0){
  var loadState;
  loadState = event_0.loadState;
  switch (loadState.ordinal) {
    case 5:
    case 4:
      break;
    case 2:
    case 1:
    case 3:
      $succeed_1(this$static.this$01, this$static.val$sound2);
      break;
    case 0:
      $fail_1(this$static.this$01, new Exception(loadState.name_0 != null?loadState.name_0:'' + loadState.ordinal));
      break;
    default:throw toJs(new RuntimeException_0('Unrecognized sound load state ' + (loadState.name_0 != null?loadState.name_0:'' + loadState.ordinal)));
  }
}

function HtmlSound$1(this$0, val$sound){
  this.this$01 = this$0;
  this.val$sound2 = val$sound;
}

defineClass(301, 1, {384:1}, HtmlSound$1);
var Lplayn_html_HtmlSound$1_2_classLit = createForClass(301);
function HtmlStorage(){
  var storage;
  storage = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  storage?new StorageMap(storage):new HashMap;
}

defineClass(194, 1, {}, HtmlStorage);
var Lplayn_html_HtmlStorage_2_classLit = createForClass(194);
function $clinit_HtmlUrlParameters(){
  $clinit_HtmlUrlParameters = emptyMethod;
  checkGLErrors = $equals('check', getParameter('glerrors'));
  $equals('quad', getParameter('glshader'));
}

var checkGLErrors = false;
function requestedMode(){
  var renderer;
  renderer = getParameter('renderer');
  if ($equals('canvas', renderer)) {
    return 1;
  }
   else if ($equals('gl', renderer)) {
    return 0;
  }
  return 2;
}

function $isSet(this$static, flag){
  return (this$static.flags & flag.bitmask) != 0;
}

function $name_0(this$static){
  if (this$static.name_0 == null) {
    this$static.name_0 = $getName(this$static.___clazz);
    this$static.name_0 = checkNotNull($substring(this$static.name_0, this$static.name_0.lastIndexOf('.') + 1));
  }
  return this$static.name_0;
}

function $setFlag_0(this$static, flag, active){
  active?(this$static.flags |= flag.bitmask):(this$static.flags &= ~flag.bitmask);
}

function $setState(this$static, state){
  $updateAndNotify(this$static.state, state);
}

function $transform(this$static){
  var cosa, m00, m01, m10, m11, sina, tx, ty;
  if ($isSet(this$static, ($clinit_Layer$Flag() , XFDIRTY))) {
    sina = $wnd.Math.sin(this$static.rotation);
    cosa = $wnd.Math.cos(this$static.rotation);
    m00 = cosa * this$static.scaleX;
    m01 = sina * this$static.scaleY;
    m10 = -sina * this$static.scaleX;
    m11 = cosa * this$static.scaleY;
    tx = this$static.transform.tx;
    ty = this$static.transform.ty;
    $setTransform(this$static.transform, m00, m01, m10, m11, tx, ty);
    $setFlag_0(this$static, XFDIRTY, false);
  }
  return this$static.transform;
}

defineClass(54, 1, $intern_29);
_.toString_0 = function toString_37(){
  var buf;
  buf = new StringBuilder_0($name_0(this));
  $append_7($append_4((buf.string += ' @ ' , buf), hashCode__I__devirtual$(this)), ' [');
  this.toString_1(buf);
  return (buf.string += ']' , buf).string;
}
;
_.toString_1 = function toString_38(buf){
  $append_6((buf.string += 'tx=' , buf), $transform(this));
}
;
_.flags = 0;
_.rotation = 0;
_.scaleX = 1;
_.scaleY = 1;
var Lplayn_scene_Layer_2_classLit = createForClass(54);
defineClass(253, 54, $intern_29);
var Lplayn_scene_ClippedLayer_2_classLit = createForClass(253);
defineClass(254, 253, $intern_29);
_.iterator = function iterator_13(){
  return new ArrayList$1(this.children);
}
;
_.toString_1 = function toString_39(buf){
  $append_6((buf.string += 'tx=' , buf), $transform(this));
  $append_4((buf.string += ', children=' , buf), this.children.array.length);
}
;
var Lplayn_scene_GroupLayer_2_classLit = createForClass(254);
function $clinit_Layer$Flag(){
  $clinit_Layer$Flag = emptyMethod;
  VISIBLE_1 = new Layer$Flag('VISIBLE', 0, 1);
  INTERACTIVE = new Layer$Flag('INTERACTIVE', 1, 2);
  XFDIRTY = new Layer$Flag('XFDIRTY', 2, 4);
  ODIRTY = new Layer$Flag('ODIRTY', 3, 8);
}

function Layer$Flag(enum$name, enum$ordinal, bitmask){
  Enum.call(this, enum$name, enum$ordinal);
  this.bitmask = bitmask;
}

function values_13(){
  $clinit_Layer$Flag();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$Flag_2_classLit, 1), $intern_1, 55, 0, [VISIBLE_1, INTERACTIVE, XFDIRTY, ODIRTY]);
}

defineClass(55, 5, {4:1, 6:1, 5:1, 55:1}, Layer$Flag);
_.bitmask = 0;
var INTERACTIVE, ODIRTY, VISIBLE_1, XFDIRTY;
var Lplayn_scene_Layer$Flag_2_classLit = createForEnum(55, values_13);
function $clinit_Layer$Origin(){
  $clinit_Layer$Origin = emptyMethod;
  FIXED_0 = new Layer$Origin$1;
  CENTER = new Layer$Origin$2;
  UL = new Layer$Origin$3;
  UR = new Layer$Origin$4;
  LL = new Layer$Origin$5;
  LR = new Layer$Origin$6;
  TC = new Layer$Origin$7;
  BC = new Layer$Origin$8;
  LC = new Layer$Origin$9;
  RC = new Layer$Origin$10;
}

function Layer$Origin(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_14(){
  $clinit_Layer$Origin();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$Origin_2_classLit, 1), $intern_1, 10, 0, [FIXED_0, CENTER, UL, UR, LL, LR, TC, BC, LC, RC]);
}

defineClass(10, 5, $intern_30);
var BC, CENTER, FIXED_0, LC, LL, LR, RC, TC, UL, UR;
var Lplayn_scene_Layer$Origin_2_classLit = createForEnum(10, values_14);
function Layer$Origin$1(){
  Layer$Origin.call(this, 'FIXED', 0);
}

defineClass(256, 10, $intern_30, Layer$Origin$1);
var Lplayn_scene_Layer$Origin$1_2_classLit = createForEnum(256, null);
function Layer$Origin$10(){
  Layer$Origin.call(this, 'RC', 9);
}

defineClass(265, 10, $intern_30, Layer$Origin$10);
var Lplayn_scene_Layer$Origin$10_2_classLit = createForEnum(265, null);
function Layer$Origin$2(){
  Layer$Origin.call(this, 'CENTER', 1);
}

defineClass(257, 10, $intern_30, Layer$Origin$2);
var Lplayn_scene_Layer$Origin$2_2_classLit = createForEnum(257, null);
function Layer$Origin$3(){
  Layer$Origin.call(this, 'UL', 2);
}

defineClass(258, 10, $intern_30, Layer$Origin$3);
var Lplayn_scene_Layer$Origin$3_2_classLit = createForEnum(258, null);
function Layer$Origin$4(){
  Layer$Origin.call(this, 'UR', 3);
}

defineClass(259, 10, $intern_30, Layer$Origin$4);
var Lplayn_scene_Layer$Origin$4_2_classLit = createForEnum(259, null);
function Layer$Origin$5(){
  Layer$Origin.call(this, 'LL', 4);
}

defineClass(260, 10, $intern_30, Layer$Origin$5);
var Lplayn_scene_Layer$Origin$5_2_classLit = createForEnum(260, null);
function Layer$Origin$6(){
  Layer$Origin.call(this, 'LR', 5);
}

defineClass(261, 10, $intern_30, Layer$Origin$6);
var Lplayn_scene_Layer$Origin$6_2_classLit = createForEnum(261, null);
function Layer$Origin$7(){
  Layer$Origin.call(this, 'TC', 6);
}

defineClass(262, 10, $intern_30, Layer$Origin$7);
var Lplayn_scene_Layer$Origin$7_2_classLit = createForEnum(262, null);
function Layer$Origin$8(){
  Layer$Origin.call(this, 'BC', 7);
}

defineClass(263, 10, $intern_30, Layer$Origin$8);
var Lplayn_scene_Layer$Origin$8_2_classLit = createForEnum(263, null);
function Layer$Origin$9(){
  Layer$Origin.call(this, 'LC', 8);
}

defineClass(264, 10, $intern_30, Layer$Origin$9);
var Lplayn_scene_Layer$Origin$9_2_classLit = createForEnum(264, null);
function $clinit_Layer$State(){
  $clinit_Layer$State = emptyMethod;
  REMOVED = new Layer$State('REMOVED', 0);
  ADDED = new Layer$State('ADDED', 1);
  DISPOSED = new Layer$State('DISPOSED', 2);
}

function Layer$State(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_15(){
  $clinit_Layer$State();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$State_2_classLit, 1), $intern_1, 67, 0, [REMOVED, ADDED, DISPOSED]);
}

defineClass(67, 5, {4:1, 6:1, 5:1, 67:1}, Layer$State);
var ADDED, DISPOSED, REMOVED;
var Lplayn_scene_Layer$State_2_classLit = createForEnum(67, values_15);
function RootLayer(){
  this.state = ($clinit_AbstractValue() , new Value(($clinit_Layer$State() , REMOVED)));
  this.transform = new AffineTransform;
  $clinit_Layer$Origin();
  $setFlag_0(this, ($clinit_Layer$Flag() , VISIBLE_1), true);
  this.children = new ArrayList;
  new AffineTransform;
  $setState(this, ADDED);
}

defineClass(255, 254, $intern_29, RootLayer);
var Lplayn_scene_RootLayer_2_classLit = createForClass(255);
function $createDefaultBatch(gl){
  var maxVecs;
  try {
    maxVecs = usableMaxUniformVectors(gl);
    if (maxVecs >= 48)
      return new UniformQuadBatch(gl);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 9))
      throw toJs($e0);
  }
  return new TriangleBatch(gl);
}

function SceneGame(plat){
  var gl;
  $clinit_AbstractSignal();
  this.paint = new Signal;
  this.updateClock = new Clock;
  this.paintClock = new Clock;
  this.plat = plat;
  this.updateRate = 33;
  $addConnection(plat.frame_0, new Game$1(this));
  gl = plat.graphics.gl;
  gl.gl.disable(2884);
  gl.gl.enable(3042);
  gl.gl.blendFunc(1, 771);
  this.defaultBatch = $createDefaultBatch(gl);
  this.viewSurf = new Surface(plat.graphics, plat.graphics.defaultRenderTarget, this.defaultBatch);
  new RootLayer;
  $atPrio($addConnection(this.paint, new SceneGame$1(this)), -1);
}

defineClass(165, 164, {});
var Lplayn_scene_SceneGame_2_classLit = createForClass(165);
function SceneGame$1(this$0){
  this.this$01 = this$0;
}

defineClass(168, 32, $intern_23, SceneGame$1);
_.onEmit = function onEmit_1(clock){
  var lastArg;
  $paintScene((lastArg = this , clock , lastArg).this$01);
}
;
var Lplayn_scene_SceneGame$1_2_classLit = createForClass(168);
defineClass(120, 1, {120:1});
_.equals_0 = function equals_18(obj){
  var d;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 57)) {
    d = obj;
    return d.width_0 == this.width_0 && d.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_22(){
  return round_int(this.width_0) ^ round_int(this.height_0);
}
;
_.toString_0 = function toString_40(){
  return $clinit_Dimensions() , this.width_0 + 'x' + this.height_0;
}
;
var Lpythagoras_f_AbstractDimension_2_classLit = createForClass(120);
defineClass(119, 1, {119:1, 42:1});
_.equals_0 = function equals_19(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 56)) {
    p = obj;
    return this.x_0 == p.x_0 && this.y_0 == p.y_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_23(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString_0 = function toString_41(){
  return pointToString(this.x_0, this.y_0);
}
;
var Lpythagoras_f_AbstractPoint_2_classLit = createForClass(119);
defineClass(365, 1, {});
var Lpythagoras_f_AbstractTransform_2_classLit = createForClass(365);
defineClass(129, 1, {129:1, 42:1});
_.equals_0 = function equals_20(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 29)) {
    p = obj;
    return this.x_0 == p.x_0 && this.y_0 == p.y_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_24(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString_0 = function toString_42(){
  return vectorToString(this.x_0, this.y_0);
}
;
var Lpythagoras_f_AbstractVector_2_classLit = createForClass(129);
function $copy(this$static){
  return new AffineTransform_0(this$static.m00, this$static.m01, this$static.m10, this$static.m11, this$static.tx, this$static.ty);
}

function $scale_1(this$static, scaleX, scaleY){
  this$static.m00 *= scaleX;
  this$static.m01 *= scaleX;
  this$static.m10 *= scaleY;
  this$static.m11 *= scaleY;
  return this$static;
}

function $setTransform(this$static, m00, m01, m10, m11, tx, ty){
  this$static.m00 = m00;
  this$static.m01 = m01;
  this$static.m10 = m10;
  this$static.m11 = m11;
  this$static.tx = tx;
  this$static.ty = ty;
  return this$static;
}

function $transform_0(this$static, p, into){
  var x_0, y_0;
  x_0 = p.x_0;
  y_0 = p.y_0;
  return $set(into, this$static.m00 * x_0 + this$static.m10 * y_0 + this$static.tx, this$static.m01 * x_0 + this$static.m11 * y_0 + this$static.ty);
}

function $transform_1(this$static, v, into){
  var x_0, y_0;
  x_0 = v.x_0;
  y_0 = v.y_0;
  return $set_0(into, this$static.m00 * x_0 + this$static.m10 * y_0, this$static.m01 * x_0 + this$static.m11 * y_0);
}

function AffineTransform(){
  AffineTransform_0.call(this, 1, 0, 0, 1, 0, 0);
}

function AffineTransform_0(m00, m01, m10, m11, tx, ty){
  this.m00 = m00;
  this.m01 = m01;
  this.m10 = m10;
  this.m11 = m11;
  this.tx = tx;
  this.ty = ty;
}

defineClass(58, 365, {58:1}, AffineTransform, AffineTransform_0);
_.toString_0 = function toString_43(){
  return this.m00 != 1 || this.m01 != 0 || this.m10 != 0 || this.m11 != 1?'affine [' + toString_44(this.m00, TO_STRING_DECIMAL_PLACES) + ' ' + toString_44(this.m01, TO_STRING_DECIMAL_PLACES) + ' ' + toString_44(this.m10, TO_STRING_DECIMAL_PLACES) + ' ' + toString_44(this.m11, TO_STRING_DECIMAL_PLACES) + ' ' + new Vector_0(this.tx, this.ty) + ']':this.tx != 0 || this.ty != 0?'trans ' + new Vector_0(this.tx, this.ty):'ident';
}
;
_.m00 = 0;
_.m01 = 0;
_.m10 = 0;
_.m11 = 0;
_.tx = 0;
_.ty = 0;
var Lpythagoras_f_AffineTransform_2_classLit = createForClass(58);
function Dimension(){
  Dimension_0.call(this);
}

function Dimension_0(){
  this.width_0 = 0;
  this.height_0 = 0;
}

defineClass(57, 120, {4:1, 120:1, 57:1}, Dimension, Dimension_0);
_.height_0 = 0;
_.width_0 = 0;
var Lpythagoras_f_Dimension_2_classLit = createForClass(57);
function $clinit_Dimensions(){
  $clinit_Dimensions = emptyMethod;
  new Dimension_0;
}

function iceil(v){
  var iv;
  iv = round_int(v);
  return v <= 0 || iv == v || iv == $intern_0?iv:iv + 1;
}

function ifloor(v){
  var iv;
  iv = round_int(v);
  return v >= 0 || iv == v || iv == -2147483648?iv:iv - 1;
}

function toString_44(value_0, decimalPlaces){
  var buf, ii, ii0, ivalue;
  if (isNaN(value_0))
    return 'NaN';
  buf = new StringBuilder;
  if (value_0 >= 0)
    buf.string += '+';
  else {
    buf.string += '-';
    value_0 = -value_0;
  }
  ivalue = round_int(value_0);
  buf.string += ivalue;
  if (decimalPlaces > 0) {
    buf.string += '.';
    for (ii0 = 0; ii0 < decimalPlaces; ii0++) {
      value_0 = (value_0 - ivalue) * 10;
      ivalue = round_int(value_0);
      buf.string += ivalue;
    }
    for (ii = 0; ii < decimalPlaces - 1; ii++) {
      $charAt(buf, buf.string.length - 1) == 48 && $setLength(buf, buf.string.length - 1);
    }
  }
  return buf.string;
}

var TO_STRING_DECIMAL_PLACES = 3;
function $set(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Point(){
}

function Point_0(){
  this.x_0 = 0;
  this.y_0 = 0;
}

defineClass(56, 119, {4:1, 119:1, 56:1, 42:1}, Point, Point_0);
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Point_2_classLit = createForClass(56);
function $clinit_Points(){
  $clinit_Points = emptyMethod;
  new Point_0;
}

function pointToString(x_0, y_0){
  $clinit_Points();
  return toString_44(x_0, TO_STRING_DECIMAL_PLACES) + ('' + toString_44(y_0, TO_STRING_DECIMAL_PLACES));
}

function $set_0(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Vector(){
}

function Vector_0(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(29, 129, {129:1, 29:1, 42:1}, Vector, Vector_0);
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Vector_2_classLit = createForClass(29);
function $clinit_Vectors(){
  $clinit_Vectors = emptyMethod;
  new Vector_0(1, 0);
  new Vector_0(0, 1);
  new Vector_0(0, 0);
  new Vector_0($intern_31, $intern_31);
  new Vector_0($intern_32, $intern_32);
}

function vectorToString(x_0, y_0){
  $clinit_Vectors();
  return toString_44(x_0, TO_STRING_DECIMAL_PLACES) + ('' + toString_44(y_0, TO_STRING_DECIMAL_PLACES));
}

function $clinit_AbstractSignal(){
  $clinit_AbstractSignal = emptyMethod;
  $clinit_Reactor();
  EMIT = new AbstractSignal$1;
}

defineClass(354, 353, {});
var EMIT;
var Lreact_AbstractSignal_2_classLit = createForClass(354);
defineClass(355, 1, {});
var Lreact_Reactor$Notifier_2_classLit = createForClass(355);
function AbstractSignal$1(){
}

defineClass(204, 355, {}, AbstractSignal$1);
_.notify = function notify(slot, event_0, _1, _2){
  slot.onEmit(event_0);
}
;
var Lreact_AbstractSignal$1_2_classLit = createForClass(204);
function $clinit_AbstractValue(){
  $clinit_AbstractValue = emptyMethod;
  $clinit_Reactor();
  CHANGE = new AbstractValue$1;
}

function $updateAndNotify(this$static, value_0){
  var ovalue, oldValue;
  ovalue = (oldValue = this$static._value , this$static._value = value_0 , oldValue);
  $clinit_Reactor();
  !(value_0 == ovalue || !!value_0 && value_0 == ovalue) && $notify(this$static, CHANGE, value_0, ovalue, null);
  return ovalue;
}

defineClass(130, 353, {130:1});
_.equals_0 = function equals_21(other){
  var ovalue, value_0;
  if (other == null)
    return false;
  if (getClass__Ljava_lang_Class___devirtual$(other) != Lreact_Value_2_classLit)
    return false;
  value_0 = this._value;
  ovalue = other._value;
  return $clinit_Reactor() , value_0 == ovalue || !!value_0 && value_0 == ovalue;
}
;
_.hashCode_0 = function hashCode_25(){
  var value_0;
  value_0 = this._value;
  return !value_0?0:getHashCode(value_0);
}
;
_.toString_0 = function toString_45(){
  var cname;
  cname = ($ensureNamesAreInitialized(Lreact_Value_2_classLit) , Lreact_Value_2_classLit.typeName);
  return $substring(cname, cname.lastIndexOf('.') + 1) + '(' + this._value + ')';
}
;
var CHANGE;
var Lreact_AbstractValue_2_classLit = createForClass(130);
function AbstractValue$1(){
}

defineClass(283, 355, {}, AbstractValue$1);
_.notify = function notify_0(lner, value_0, oldValue, ignored){
  lner.onEmit(value_0);
}
;
var Lreact_AbstractValue$1_2_classLit = createForClass(283);
defineClass(363, 1, $intern_21);
var Lreact_Connection_2_classLit = createForClass(363);
function $atPrio(this$static, priority){
  if (!this$static._owner)
    throw toJs(new IllegalStateException_0('Cannot change priority of disconnected connection.'));
  $disconnect(this$static._owner, this$static);
  this$static.next_0 = null;
  this$static._priority = priority;
  $addCons(this$static._owner, this$static);
  return this$static;
}

function $close(this$static){
  var p;
  if (this$static._owner) {
    $defang(this$static._ref, (p = ($clinit_Slots() , NOOP) , p));
    $disconnect(this$static._owner, this$static);
    this$static._owner = null;
  }
}

function Cons(owner, listener){
  this._owner = owner;
  this._ref = new Cons$StrongRef(listener);
}

function insert(head, cons){
  if (!head) {
    return cons;
  }
   else if (cons._priority > head._priority) {
    cons.next_0 = head;
    return cons;
  }
   else {
    head.next_0 = insert(head.next_0, cons);
    return head;
  }
}

function remove_28(head, cons){
  if (!head)
    return null;
  if (head == cons)
    return head.next_0;
  head.next_0 = remove_28(head.next_0, cons);
  return head;
}

defineClass(118, 363, $intern_21, Cons);
_.toString_0 = function toString_46(){
  return '[owner=' + this._owner + ', pri=' + this._priority + ', lner=' + this._ref._lner + ', hasNext=' + !!this.next_0 + ', oneShot=' + this._oneShot + ']';
}
;
_._oneShot = false;
_._priority = 0;
var Lreact_Cons_2_classLit = createForClass(118);
defineClass(364, 1, {});
var Lreact_Cons$ListenerRef_2_classLit = createForClass(364);
function $defang(this$static, noop){
  this$static._lner = noop;
}

function Cons$StrongRef(lner){
  this._lner = lner;
}

defineClass(267, 364, {}, Cons$StrongRef);
var Lreact_Cons$StrongRef_2_classLit = createForClass(267);
function RFuture$1(val$result){
  $clinit_Reactor();
  this.val$result1 = val$result;
}

defineClass(214, 357, {}, RFuture$1);
_.result = function result_1(){
  return this.val$result1;
}
;
var Lreact_RFuture$1_2_classLit = createForClass(214);
function RPromise$1(){
}

defineClass(213, 355, {}, RPromise$1);
_.notify = function notify_1(lner, value_0, i0, i1){
  lner.onEmit(value_0);
}
;
var Lreact_RPromise$1_2_classLit = createForClass(213);
defineClass(347, 1, $intern_22);
var Lreact_Reactor$Runs_2_classLit = createForClass(347);
function Reactor$1(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(170, 347, $intern_22, Reactor$1);
_.run = function run_5(){
  this.this$01._listeners = insert(this.this$01._listeners, this.val$cons2);
}
;
var Lreact_Reactor$1_2_classLit = createForClass(170);
function Reactor$2(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(171, 347, $intern_22, Reactor$2);
_.run = function run_6(){
  this.this$01._listeners = remove_28(this.this$01._listeners, this.val$cons2);
}
;
var Lreact_Reactor$2_2_classLit = createForClass(171);
function Reactor$4(this$0, val$notifier, val$a1, val$a2, val$a3){
  this.this$01 = this$0;
  this.val$notifier2 = val$notifier;
  this.val$a13 = val$a1;
  this.val$a24 = val$a2;
  this.val$a35 = val$a3;
}

defineClass(172, 347, $intern_22, Reactor$4);
_.run = function run_7(){
  $notify(this.this$01, this.val$notifier2, this.val$a13, this.val$a24, this.val$a35);
}
;
var Lreact_Reactor$4_2_classLit = createForClass(172);
function $emit(this$static, event_0){
  $notify(this$static, EMIT, event_0, null, null);
}

function Signal(){
  $clinit_AbstractSignal();
}

defineClass(45, 354, {}, Signal);
var Lreact_Signal_2_classLit = createForClass(45);
function $clinit_Slots(){
  $clinit_Slots = emptyMethod;
  NOOP = new Slots$1;
}

var NOOP;
defineClass(348, 32, $intern_33);
_.onEmit = function onEmit_2(event_0){
  this.onEmit_0();
}
;
_.run = function run_8(){
  this.onEmit_0();
}
;
var Lreact_UnitSlot_2_classLit = createForClass(348);
function Slots$1(){
}

defineClass(307, 348, $intern_33, Slots$1);
_.onEmit_0 = function onEmit_3(){
}
;
var Lreact_Slots$1_2_classLit = createForClass(307);
defineClass(103, 1, {103:1});
var Lreact_Try_2_classLit = createForClass(103);
function Try$Failure(cause){
  this.cause = cause;
}

defineClass(140, 103, {103:1}, Try$Failure);
_.toString_0 = function toString_47(){
  return 'Failure(' + this.cause + ')';
}
;
var Lreact_Try$Failure_2_classLit = createForClass(140);
function Try$Success(value_0){
  this.value_0 = value_0;
}

defineClass(104, 103, {103:1}, Try$Success);
_.toString_0 = function toString_48(){
  return 'Success(' + this.value_0 + ')';
}
;
var Lreact_Try$Success_2_classLit = createForClass(104);
function Value(value_0){
  $clinit_AbstractValue();
  this._value = value_0;
}

defineClass(131, 130, {130:1, 131:1}, Value);
var Lreact_Value_2_classLit = createForClass(131);
function $notifyListeners(this$static){
  var listener, listener$iterator;
  for (listener$iterator = new ArrayList$1(this$static.listeners); listener$iterator.i < listener$iterator.this$01.array.length;) {
    listener = $next_2(listener$iterator);
    listener.onEmit(this$static.snippet);
  }
}

function $setSnippet(this$static, snippet){
  this$static.snippet = snippet;
  $notifyListeners(this$static);
}

function $writeSnippetToSystem(this$static){
  this$static.writeToSystem(this$static.snippet);
  $notifyListeners(this$static);
}

function onSystemCopyEvent(){
  $writeSnippetToSystem(INSTANCE_1);
}

function onSystemPasteEvent(pasted){
  $setSnippet(INSTANCE_1, pasted);
}

defineClass(154, 1, {});
_.writeToSystem = function writeToSystem(text_0){
  $clinit_System();
}
;
var INSTANCE_1;
var Lzinc_core_Clipboard_2_classLit = createForClass(154);
function $drawChar(this$static, target, c, x_0, y_0){
  var index_0;
  index_0 = c - 32;
  index_0 >= 0 && index_0 < this$static.images.length && $draw_6(target, this$static.images[index_0], x_0, y_0);
}

function $singleLine(this$static, target, text_0, sy){
  var i, x_0;
  x_0 = 24;
  for (i = 0; i < text_0.length; i++) {
    $drawChar(this$static, target, text_0.charCodeAt(i), x_0, sy);
    x_0 += 8;
  }
}

function Font(images){
  this.images = images;
}

defineClass(113, 1, {}, Font);
var RAW, WHITE;
var Lzinc_core_Font_2_classLit = createForClass(113);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  LOAD_TRACKER = new LoadTracker;
}

function $recolor(this$static){
  var c, h, i, pixels, w, w_0, h_0, pixels_0;
  w = this$static.raw.pixelWidth;
  h = this$static.raw.pixelHeight;
  pixels = (w_0 = this$static.raw.pixelWidth , h_0 = this$static.raw.pixelHeight , pixels_0 = initUnidimensionalArray(I_classLit, $intern_1, 15, w_0 * h_0, 15, 1) , $getRgb(this$static.raw, w_0, h_0, pixels_0, w_0) , pixels_0);
  for (i = 0; i < pixels.length; i++) {
    pixels[i] &= -16777216;
  }
  c = INSTANCE_2.createRawCanvas(w, h);
  $setRgb(c.image, w, h, pixels, w);
  return new Image_0(c.image);
}

function $tile(this$static){
  var h, i, result, w, x_0, y_0, canvas;
  w = this$static.raw.pixelWidth / 8 | 0;
  h = this$static.raw.pixelHeight / 8 | 0;
  i = 0;
  result = initUnidimensionalArray(Lzinc_core_Image_2_classLit, $intern_1, 68, w * h, 0, 1);
  for (y_0 = 0; y_0 < h; y_0++) {
    for (x_0 = 0; x_0 < w; x_0++) {
      result[i++] = (canvas = INSTANCE_2.createRawCanvas(8, 8) , $draw(canvas, $region(this$static.raw, x_0 * 8, y_0 * 8)) , new Image_0(canvas.image));
    }
  }
  return result;
}

function Image_0(raw){
  this.raw = raw;
}

function load(name_0){
  $clinit_Image();
  var result;
  result = new Image_0($getImage(INSTANCE_2.raw.assets, name_0));
  $add(LOAD_TRACKER, result);
  return result;
}

defineClass(68, 1, {68:1, 379:1}, Image_0);
_.isLoaded = function isLoaded(){
  return !!this.raw.state.result();
}
;
var LOAD_TRACKER;
var Lzinc_core_Image_2_classLit = createForClass(68);
function $isLoaded(this$static){
  var loadable, loadable$iterator;
  if (this$static.array.length == 0)
    return false;
  for (loadable$iterator = new ArrayList$1(this$static); loadable$iterator.i < loadable$iterator.this$01.array.length;) {
    loadable = $next_2(loadable$iterator);
    if (!loadable.isLoaded())
      return false;
  }
  return true;
}

function $loadedCount(this$static){
  var count, loadable, loadable$iterator;
  count = 0;
  for (loadable$iterator = new ArrayList$1(this$static); loadable$iterator.i < loadable$iterator.this$01.array.length;) {
    loadable = $next_2(loadable$iterator);
    loadable.isLoaded() && (count += 1);
  }
  return count;
}

function $text(this$static){
  return $loadedCount(this$static) + ' of ' + this$static.array.length;
}

function LoadTracker(){
  ArrayList.call(this);
}

defineClass(97, 17, $intern_2, LoadTracker);
var Lzinc_core_LoadTracker_2_classLit = createForClass(97);
var TITLE;
function $pixelate(this$static){
  var gl20;
  gl20 = this$static.raw.graphics.gl;
  gl20.gl.texParameteri(3553, 10241, 9728);
  gl20.gl.texParameteri(3553, 10240, 9728);
}

defineClass(153, 1, {});
_.createRawCanvas = function createRawCanvas(pixelWidth, pixelHeight){
  return $createCanvas(this.raw.graphics, pixelWidth, pixelHeight);
}
;
_.setSize = function setSize(width_0, height){
  $clinit_System();
}
;
_.zoom = 0;
var INSTANCE_2;
var Lzinc_core_Platform_2_classLit = createForClass(153);
function $clinit_Sound(){
  $clinit_Sound = emptyMethod;
  LOAD_TRACKER_0 = new LoadTracker;
  MUSIC_LOAD_TRACKER = new LoadTracker;
}

function Sound_0(raw){
  this.raw = raw;
}

defineClass(266, 1, {379:1}, Sound_0);
_.isLoaded = function isLoaded_0(){
  return !!this.raw.state._result;
}
;
var LOAD_TRACKER_0, MUSIC_LOAD_TRACKER;
var Lzinc_core_Sound_2_classLit = createForClass(266);
var FANFARE, music = true;
function $draw_6(this$static, image, x_0, y_0){
  if (!image)
    return;
  $pixelate(INSTANCE_2);
  $draw_2(this$static.raw, $texture(image.raw), x_0, y_0);
  $pixelate(INSTANCE_2);
}

function $fillRect_2(this$static){
  $setFillColor(this$static.raw);
  $fillRect_0(this$static.raw);
}

function $scale_2(this$static, x_0, y_0){
  $scale_0(this$static.raw, x_0, y_0);
}

function Surface_0(raw){
  this.raw = raw;
}

defineClass(202, 1, {}, Surface_0);
var Lzinc_core_Surface_2_classLit = createForClass(202);
function $paintScene(this$static){
  $tick(INSTANCE_2.raw) - this$static.updatedAtMs;
  $saveTx(this$static.surface.raw);
  $begin_0(this$static.surface.raw);
  $clear_0(this$static.surface.raw, 0, 0, 0, 1);
  $scale_2(this$static.surface, INSTANCE_2.zoom, INSTANCE_2.zoom);
  try {
    if (this$static.loadingFinished && this$static.clicked) {
      $draw_6(this$static.surface, TITLE, 0, 0);
    }
     else if (this$static.fontLoaded) {
      $fillRect_2(this$static.surface);
      $renderLoadingProgress(this$static, this$static.surface);
    }
     else {
      $clear_0(this$static.viewSurf, 1, 1, 1, 1);
    }
  }
   finally {
    $end_0(this$static.surface.raw);
    $restoreTx(this$static.surface.raw);
  }
}

function $renderLoadingProgress(this$static, surface){
  $singleLine(WHITE, surface, 'Images: ' + $text(($clinit_Image() , LOAD_TRACKER)), 24);
  $singleLine(WHITE, surface, 'Sounds: ' + $text(($clinit_Sound() , LOAD_TRACKER_0)), 40);
  $singleLine(WHITE, surface, 'Music: ' + $text(MUSIC_LOAD_TRACKER), 56);
  this$static.loadingFinished && $singleLine(WHITE, surface, '[Click to begin]', 72);
}

function $update_0(this$static){
  this$static.updatedAtMs = $tick(INSTANCE_2.raw);
  if (this$static.loadingFinished && this$static.clicked) {
    if (!this$static.musicFired) {
      $play_0(FANFARE.raw);
      this$static.musicFired = true;
    }
  }
   else if (this$static.loadingFinished)
  ;
  else if (!this$static.fontLoaded && !!RAW.raw.state.result()) {
    WHITE = new Font($tile(RAW));
    new Font($tile($recolor(RAW)));
    this$static.fontLoaded = true;
  }
   else 
    $isLoaded(($clinit_Image() , LOAD_TRACKER)) && (!music || $isLoaded(($clinit_Sound() , MUSIC_LOAD_TRACKER))) && (this$static.loadingFinished = true);
}

function Zinc(platform){
  var result;
  SceneGame.call(this, platform.raw);
  this.fontLoaded = false;
  this.loadingFinished = false;
  this.clicked = false;
  this.musicFired = false;
  this.keySlot = new Zinc$1;
  this.mouseSlot = new Zinc$2(this);
  this.surface = new Surface_0(this.viewSurf);
  TITLE = load('title.png');
  RAW = load('widefont.png');
  FANFARE = ($clinit_Sound() , result = new Sound_0($getSound(INSTANCE_2.raw.assets)) , $add(MUSIC_LOAD_TRACKER, result) , $setVolume_2(result.raw) , result);
  $addConnection(this.plat.input_0.keyboardEvents, this.keySlot);
  $addConnection(this.plat.input_0.mouseEvents, this.mouseSlot);
}

defineClass(151, 165, {}, Zinc);
_.clicked = false;
_.fontLoaded = false;
_.loadingFinished = false;
_.musicFired = false;
_.updatedAtMs = 0;
var Lzinc_core_Zinc_2_classLit = createForClass(151);
function Zinc$1(){
}

defineClass(166, 32, $intern_23, Zinc$1);
_.onEmit = function onEmit_4(e){
  instanceOf(e, 80) && e;
}
;
var Lzinc_core_Zinc$1_2_classLit = createForClass(166);
function Zinc$2(this$0){
  this.this$01 = this$0;
}

defineClass(167, 32, $intern_23, Zinc$2);
_.onEmit = function onEmit_5(e){
  instanceOf(e, 81) && this.this$01.loadingFinished && (this.this$01.clicked = true);
}
;
var Lzinc_core_Zinc$2_2_classLit = createForClass(167);
function $addDocumentListeners(){
  window.top.document.body.addEventListener('cut', function(e){
    onSystemCopyEvent();
  }
  );
  window.top.document.body.addEventListener('copy', function(e){
    onSystemCopyEvent();
  }
  );
  window.top.document.body.addEventListener('paste', function(e){
    onSystemPasteEvent(e.clipboardData.getData('text'));
  }
  );
}

function ZincHtml$HtmlClipboard(){
  this.listeners = new ArrayList;
  INSTANCE_1 = this;
  $addDocumentListeners();
}

defineClass(147, 154, {}, ZincHtml$HtmlClipboard);
_.writeToSystem = function writeToSystem_0(text_0){
  var textArea = document.createElement('textarea');
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text_0;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    !document.execCommand('copy') && console.log('Copy failed');
  }
   catch (err) {
    console.log('Copy failed');
  }
  document.body.removeChild(textArea);
}
;
var Lzinc_html_ZincHtml$HtmlClipboard_2_classLit = createForClass(147);
function ZincHtml$HtmlPlatform(raw){
  var availableArea, widthZoom, heightZoom, zoom;
  this.raw = raw;
  this.zoom = (availableArea = $screenSize(this.raw.graphics) , widthZoom = availableArea.width_0 / 320 , heightZoom = availableArea.height_0 / 224 , zoom = $wnd.Math.min(widthZoom, heightZoom) , $wnd.Math.max(1, zoom));
  this.setSize(round_int(320 * this.zoom), round_int(224 * this.zoom));
  INSTANCE_2 = this;
}

defineClass(150, 153, {}, ZincHtml$HtmlPlatform);
_.createRawCanvas = function createRawCanvas_0(pixelWidth, pixelHeight){
  var elem;
  elem = $doc.createElement('canvas');
  elem.width = pixelWidth;
  elem.height = pixelHeight;
  return new HtmlCanvas(new HtmlImage(this.raw.graphics, ($clinit_Scale() , ONE), elem));
}
;
_.setSize = function setSize_0(width_0, height){
  $setSize(this.raw.graphics, width_0, height);
}
;
var Lzinc_html_ZincHtml$HtmlPlatform_2_classLit = createForClass(150);
var C_classLit = createForPrimitive('C');
var F_classLit = createForPrimitive('F');
var I_classLit = createForPrimitive('I');
var S_classLit = createForPrimitive('S');
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=zinc-0.js

