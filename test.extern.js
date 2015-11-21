'use strict';

var THREE = {};


/**
 * @type {string}
 */
THREE.REVISION;


/**

*/
THREE.MOUSE = {};


/**

*/
THREE.MOUSE.LEFT = {};


/**

*/
THREE.MOUSE.MIDDLE = {};


/**

*/
THREE.MOUSE.RIGHT = {};


/**

*/
THREE.CullFace = {};


/**
 * @type {THREE.CullFace}
 */
THREE.CullFaceNone;


/**
 * @type {THREE.CullFace}
 */
THREE.CullFaceBack;


/**
 * @type {THREE.CullFace}
 */
THREE.CullFaceFront;


/**
 * @type {THREE.CullFace}
 */
THREE.CullFaceFrontBack;


/**

*/
THREE.FrontFaceDirection = {};


/**
 * @type {THREE.FrontFaceDirection}
 */
THREE.FrontFaceDirectionCW;


/**
 * @type {THREE.FrontFaceDirection}
 */
THREE.FrontFaceDirectionCCW;


/**

*/
THREE.ShadowMapType = {};


/**
 * @type {THREE.ShadowMapType}
 */
THREE.BasicShadowMap;


/**
 * @type {THREE.ShadowMapType}
 */
THREE.PCFShadowMap;


/**
 * @type {THREE.ShadowMapType}
 */
THREE.PCFSoftShadowMap;


/**

*/
THREE.Side = {};


/**
 * @type {THREE.Side}
 */
THREE.FrontSide;


/**
 * @type {THREE.Side}
 */
THREE.BackSide;


/**
 * @type {THREE.Side}
 */
THREE.DoubleSide;


/**

*/
THREE.Shading = {};


/**
 * @type {THREE.Shading}
 */
THREE.NoShading;


/**
 * @type {THREE.Shading}
 */
THREE.FlatShading;


/**
 * @type {THREE.Shading}
 */
THREE.SmoothShading;


/**

*/
THREE.Colors = {};


/**
 * @type {THREE.Colors}
 */
THREE.NoColors;


/**
 * @type {THREE.Colors}
 */
THREE.FaceColors;


/**
 * @type {THREE.Colors}
 */
THREE.VertexColors;


/**

*/
THREE.Blending = {};


/**
 * @type {THREE.Blending}
 */
THREE.NoBlending;


/**
 * @type {THREE.Blending}
 */
THREE.NormalBlending;


/**
 * @type {THREE.Blending}
 */
THREE.AdditiveBlending;


/**
 * @type {THREE.Blending}
 */
THREE.SubtractiveBlending;


/**
 * @type {THREE.Blending}
 */
THREE.MultiplyBlending;


/**
 * @type {THREE.Blending}
 */
THREE.CustomBlending;


/**

*/
THREE.BlendingEquation = {};


/**
 * @type {THREE.BlendingEquation}
 */
THREE.AddEquation;


/**
 * @type {THREE.BlendingEquation}
 */
THREE.SubtractEquation;


/**
 * @type {THREE.BlendingEquation}
 */
THREE.ReverseSubtractEquation;


/**
 * @type {THREE.BlendingEquation}
 */
THREE.MinEquation;


/**
 * @type {THREE.BlendingEquation}
 */
THREE.MaxEquation;


/**

*/
THREE.BlendingDstFactor = {};


/**
 * @type {THREE.BlendingDstFactor}
 */
THREE.ZeroFactor;


/**
 * @type {THREE.BlendingDstFactor}
 */
THREE.OneFactor;


/**
 * @type {THREE.BlendingDstFactor}
 */
THREE.SrcColorFactor;


/**
 * @type {THREE.BlendingDstFactor}
 */
THREE.OneMinusSrcColorFactor;


/**
 * @type {THREE.BlendingDstFactor}
 */
THREE.SrcAlphaFactor;


/**
 * @type {THREE.BlendingDstFactor}
 */
THREE.OneMinusSrcAlphaFactor;


/**
 * @type {THREE.BlendingDstFactor}
 */
THREE.DstAlphaFactor;


/**
 * @type {THREE.BlendingDstFactor}
 */
THREE.OneMinusDstAlphaFactor;


/**

*/
THREE.BlendingSrcFactor = {};


/**
 * @type {THREE.BlendingSrcFactor}
 */
THREE.DstColorFactor;


/**
 * @type {THREE.BlendingSrcFactor}
 */
THREE.OneMinusDstColorFactor;


/**
 * @type {THREE.BlendingSrcFactor}
 */
THREE.SrcAlphaSaturateFactor;


/**

*/
THREE.DepthModes = {};


/**
 * @type {THREE.DepthModes}
 */
THREE.NeverDepth;


/**
 * @type {THREE.DepthModes}
 */
THREE.AlwaysDepth;


/**
 * @type {THREE.DepthModes}
 */
THREE.LessDepth;


/**
 * @type {THREE.DepthModes}
 */
THREE.LessEqualDepth;


/**
 * @type {THREE.DepthModes}
 */
THREE.EqualDepth;


/**
 * @type {THREE.DepthModes}
 */
THREE.GreaterEqualDepth;


/**
 * @type {THREE.DepthModes}
 */
THREE.GreaterDepth;


/**
 * @type {THREE.DepthModes}
 */
THREE.NotEqualDepth;


/**

*/
THREE.Combine = {};


/**
 * @type {THREE.Combine}
 */
THREE.MultiplyOperation;


/**
 * @type {THREE.Combine}
 */
THREE.MixOperation;


/**
 * @type {THREE.Combine}
 */
THREE.AddOperation;


/**

*/
THREE.Mapping = {};


/**
 * @type {THREE.Mapping}
 */
THREE.UVMapping;


/**
 * @type {THREE.Mapping}
 */
THREE.CubeReflectionMapping;


/**
 * @type {THREE.Mapping}
 */
THREE.CubeRefractionMapping;


/**
 * @type {THREE.Mapping}
 */
THREE.EquirectangularReflectionMapping;


/**
 * @type {THREE.Mapping}
 */
THREE.EquirectangularRefractionMapping;


/**
 * @type {THREE.Mapping}
 */
THREE.SphericalReflectionMapping;


/**

*/
THREE.Wrapping = {};


/**
 * @type {THREE.Wrapping}
 */
THREE.RepeatWrapping;


/**
 * @type {THREE.Wrapping}
 */
THREE.ClampToEdgeWrapping;


/**
 * @type {THREE.Wrapping}
 */
THREE.MirroredRepeatWrapping;


/**

*/
THREE.TextureFilter = {};


/**
 * @type {THREE.TextureFilter}
 */
THREE.NearestFilter;


/**
 * @type {THREE.TextureFilter}
 */
THREE.NearestMipMapNearestFilter;


/**
 * @type {THREE.TextureFilter}
 */
THREE.NearestMipMapLinearFilter;


/**
 * @type {THREE.TextureFilter}
 */
THREE.LinearFilter;


/**
 * @type {THREE.TextureFilter}
 */
THREE.LinearMipMapNearestFilter;


/**
 * @type {THREE.TextureFilter}
 */
THREE.LinearMipMapLinearFilter;


/**

*/
THREE.TextureDataType = {};


/**
 * @type {THREE.TextureDataType}
 */
THREE.UnsignedByteType;


/**
 * @type {THREE.TextureDataType}
 */
THREE.ByteType;


/**
 * @type {THREE.TextureDataType}
 */
THREE.ShortType;


/**
 * @type {THREE.TextureDataType}
 */
THREE.UnsignedShortType;


/**
 * @type {THREE.TextureDataType}
 */
THREE.IntType;


/**
 * @type {THREE.TextureDataType}
 */
THREE.UnsignedIntType;


/**
 * @type {THREE.TextureDataType}
 */
THREE.FloatType;


/**
 * @type {THREE.TextureDataType}
 */
THREE.HalfFloatType;


/**

*/
THREE.PixelType = {};


/**
 * @type {THREE.PixelType}
 */
THREE.UnsignedShort4444Type;


/**
 * @type {THREE.PixelType}
 */
THREE.UnsignedShort5551Type;


/**
 * @type {THREE.PixelType}
 */
THREE.UnsignedShort565Type;


/**

*/
THREE.PixelFormat = {};


/**
 * @type {THREE.PixelFormat}
 */
THREE.AlphaFormat;


/**
 * @type {THREE.PixelFormat}
 */
THREE.RGBFormat;


/**
 * @type {THREE.PixelFormat}
 */
THREE.RGBAFormat;


/**
 * @type {THREE.PixelFormat}
 */
THREE.LuminanceFormat;


/**
 * @type {THREE.PixelFormat}
 */
THREE.LuminanceAlphaFormat;


/**
 * @type {THREE.PixelFormat}
 */
THREE.RGBEFormat;


/**

*/
THREE.CompressedPixelFormat = {};


/**
 * @type {THREE.CompressedPixelFormat}
 */
THREE.RGB_S3TC_DXT1_Format;


/**
 * @type {THREE.CompressedPixelFormat}
 */
THREE.RGBA_S3TC_DXT1_Format;


/**
 * @type {THREE.CompressedPixelFormat}
 */
THREE.RGBA_S3TC_DXT3_Format;


/**
 * @type {THREE.CompressedPixelFormat}
 */
THREE.RGBA_S3TC_DXT5_Format;


/**
 * @type {THREE.CompressedPixelFormat}
 */
THREE.RGB_PVRTC_4BPPV1_Format;


/**
 * @type {THREE.CompressedPixelFormat}
 */
THREE.RGB_PVRTC_2BPPV1_Format;


/**
 * @type {THREE.CompressedPixelFormat}
 */
THREE.RGBA_PVRTC_4BPPV1_Format;


/**
 * @type {THREE.CompressedPixelFormat}
 */
THREE.RGBA_PVRTC_2BPPV1_Format;


/**

*/
THREE.AnimationActionLoopStyles = {};


/**
 * @type {THREE.AnimationActionLoopStyles}
 */
THREE.LoopOnce;


/**
 * @type {THREE.AnimationActionLoopStyles}
 */
THREE.LoopRepeat;


/**
 * @type {THREE.AnimationActionLoopStyles}
 */
THREE.LoopPingPong;


/**
 * @param {*=} message
 * @param {any} optionalParams
 * @return {THREE.void}
 */
THREE.warn = function(message, optionalParams) {};


/**
 * @param {*=} message
 * @param {any} optionalParams
 * @return {THREE.void}
 */
THREE.error = function(message, optionalParams) {};


/**
 * @param {*=} message
 * @param {any} optionalParams
 * @return {THREE.void}
 */
THREE.log = function(message, optionalParams) {};


/**
 * @constructor
 * @param {THREE.AnimationClip} clip
 * @param {number=} startTime
 * @param {number=} timeScale
 * @param {number=} weight
 * @param {boolean=} loop
 */
THREE.AnimationAction = function(clip, startTime, timeScale, weight, loop) {};


/**
 * @type {THREE.AnimationClip}
 */
THREE.AnimationAction.prototype.clip;


/**
 * @type {THREE.Mesh}
 */
THREE.AnimationAction.prototype.localRoot;


/**
 * @type {number}
 */
THREE.AnimationAction.prototype.startTime;


/**
 * @type {number}
 */
THREE.AnimationAction.prototype.timeScale;


/**
 * @type {number}
 */
THREE.AnimationAction.prototype.weight;


/**
 * @type {THREE.AnimationActionLoopStyles}
 */
THREE.AnimationAction.prototype.loop;


/**
 * @type {number}
 */
THREE.AnimationAction.prototype.loopCount;


/**
 * @type {boolean}
 */
THREE.AnimationAction.prototype.enabled;


/**
 * @type {number}
 */
THREE.AnimationAction.prototype.actionTime;


/**
 * @type {number}
 */
THREE.AnimationAction.prototype.clipTime;


/**
 * @type {Array<THREE.PropertyBinding>}
 */
THREE.AnimationAction.prototype.propertyBindings;


/**
 * @param {THREE.Mesh} localRoot
 * @return {THREE.AnimationAction}
 */
THREE.AnimationAction.prototype.setLocalRoot = function(localRoot) {};


/**
 * @param {number} clipDeltaTime
 * @return {number}
 */
THREE.AnimationAction.prototype.updateTime = function(clipDeltaTime) {};


/**
 * @param {THREE.AnimationAction} action
 * @return {THREE.AnimationAction}
 */
THREE.AnimationAction.prototype.syncWith = function(action) {};


/**
 * @param {number} duration
 * @return {THREE.AnimationAction}
 */
THREE.AnimationAction.prototype.warpToDuration = function(duration) {};


/**
 * @param {number} time
 * @return {THREE.AnimationAction}
 */
THREE.AnimationAction.prototype.init = function(time) {};


/**
 * @param {number} clipDeltaTime
 * @return {Array<*>}
 */
THREE.AnimationAction.prototype.update = function(clipDeltaTime) {};


/**
 * @param {number} time
 * @return {number}
 */
THREE.AnimationAction.prototype.getTimeScaleAt = function(time) {};


/**
 * @param {number} time
 * @return {number}
 */
THREE.AnimationAction.prototype.getWeightAt = function(time) {};


/**
 * @constructor
 * @param {string} name
 * @param {number=} duration
 * @param {Array<THREE.KeyframeTrack>=} tracks
 */
THREE.AnimationClip = function(name, duration, tracks) {};


/**
 * @param {string} name
 * @param {Array<THREE.MorphTarget>} morphTargetSequence
 * @param {number} fps
 * @return {THREE.AnimationClip}
 */
THREE.AnimationClip.CreateFromMorphTargetSequence = function(name, morphTargetSequence, fps) {};


/**
 * @param {Array<THREE.MorphTarget>} morphTargets
 * @param {number} fps
 * @return {Array<THREE.AnimationClip>}
 */
THREE.AnimationClip.CreateClipsFromMorphTargetSequences = function(morphTargets, fps) {};


/**
 * @type {string}
 */
THREE.AnimationClip.prototype.name;


/**
 * @type {Array<THREE.KeyframeTrack>}
 */
THREE.AnimationClip.prototype.tracks;


/**
 * @type {number}
 */
THREE.AnimationClip.prototype.duration;


/**
 * @type {Array<*>}
 */
THREE.AnimationClip.prototype.results;


/**
 * @param {number} clipTime
 * @return {Array<*>}
 */
THREE.AnimationClip.prototype.getAt = function(clipTime) {};


/**
 * @return {THREE.AnimationClip}
 */
THREE.AnimationClip.prototype.trim = function() {};


/**
 * @return {THREE.AnimationClip}
 */
THREE.AnimationClip.prototype.optimize = function() {};


/**
 * @param {THREE.AnimationClip} clipArray
 * @param {string} name
 * @return {THREE.AnimationClip}
 */
THREE.AnimationClip.prototype.findByName = function(clipArray, name) {};


/**
 * @param {*} json
 * @return {THREE.AnimationClip}
 */
THREE.AnimationClip.prototype.parse = function(json) {};


/**
 * @param {*} animation
 * @param {Array<THREE.Bone>} bones
 * @param {string} nodeName
 * @return {THREE.AnimationClip}
 */
THREE.AnimationClip.prototype.parseAnimation = function(animation, bones, nodeName) {};


/**
 * @constructor
 * @param {*} root
 */
THREE.AnimationMixer = function(root) {};


/**
 * @type {*}
 */
THREE.AnimationMixer.prototype.root;


/**
 * @type {number}
 */
THREE.AnimationMixer.prototype.time;


/**
 * @type {number}
 */
THREE.AnimationMixer.prototype.timeScale;


/**
 * @type {THREE.AnimationAction}
 */
THREE.AnimationMixer.prototype.actions;


/**
 * @type {*}
 */
THREE.AnimationMixer.prototype.propertyBindingMap;


/**
 * @param {THREE.AnimationAction} action
 * @return {THREE.void}
 */
THREE.AnimationMixer.prototype.addAction = function(action) {};


/**
 * @return {THREE.AnimationMixer}
 */
THREE.AnimationMixer.prototype.removeAllActions = function() {};


/**
 * @param {THREE.AnimationAction} action
 * @return {THREE.AnimationMixer}
 */
THREE.AnimationMixer.prototype.removeAction = function(action) {};


/**
 * @param {string} name
 * @return {THREE.AnimationAction}
 */
THREE.AnimationMixer.prototype.findActionByName = function(name) {};


/**
 * @param {THREE.AnimationAction} action
 * @param {number=} optionalFadeInDuration
 * @return {THREE.AnimationMixer}
 */
THREE.AnimationMixer.prototype.play = function(action, optionalFadeInDuration) {};


/**
 * @param {THREE.AnimationAction} action
 * @param {number} duration
 * @return {THREE.AnimationMixer}
 */
THREE.AnimationMixer.prototype.fadeOut = function(action, duration) {};


/**
 * @param {THREE.AnimationAction} action
 * @param {number} duration
 * @return {THREE.AnimationMixer}
 */
THREE.AnimationMixer.prototype.fadeIn = function(action, duration) {};


/**
 * @param {THREE.AnimationAction} action
 * @param {THREE.NumberKeyframeTrack} startTimeScale
 * @param {THREE.NumberKeyframeTrack} endTimeScale
 * @param {number} duration
 * @return {THREE.AnimationMixer}
 */
THREE.AnimationMixer.prototype.warp = function(action, startTimeScale, endTimeScale, duration) {};


/**
 * @param {THREE.AnimationAction} fadeOutAction
 * @param {THREE.AnimationAction} fadeInAction
 * @param {number} duration
 * @param {boolean} warp
 * @return {THREE.AnimationMixer}
 */
THREE.AnimationMixer.prototype.crossFade = function(fadeOutAction, fadeInAction, duration, warp) {};


/**
 * @param {number} deltaTime
 * @return {THREE.AnimationMixer}
 */
THREE.AnimationMixer.prototype.update = function(deltaTime) {};


/**
 * @type {THREE.{
        getEqualsFunc( exemplarValue: any ): boolean;
        clone<T>(exemplarValue: T): T;
        lerp( a: any, b: any, alpha: number, interTrack: boolean ): any;
        lerp_object( a: any, b: any, alpha: number ): any;
        slerp_object( a: any, b: any, alpha: number ): any;
        lerp_number( a: any, b: any, alpha: number ): any;
        lerp_boolean( a: any, b: any, alpha: number ): any;
        lerp_boolean_immediate( a: any, b: any, alpha: number ): any;
        lerp_string( a: any, b: any, alpha: number ): any;
        lerp_string_immediate( a: any, b: any, alpha: number ): any;
        getLerpFunc( exemplarValue: any, interTrack: boolean ): Function;
    }}
*/
THREE.AnimationUtils;


/**
 * @constructor
 * @param {string} name
 * @param {Array<*>} keys
 */
THREE.KeyframeTrack = function(name, keys) {};


/**
 * @type {string}
 */
THREE.KeyframeTrack.prototype.name;


/**
 * @type {Array<*>}
 */
THREE.KeyframeTrack.prototype.keys;


/**
 * @type {number}
 */
THREE.KeyframeTrack.prototype.lastIndex;


/**
 * @param {number} time
 * @return {*}
 */
THREE.KeyframeTrack.prototype.getAt = function(time) {};


/**
 * @param {number} timeOffset
 * @return {THREE.KeyframeTrack}
 */
THREE.KeyframeTrack.prototype.shift = function(timeOffset) {};


/**
 * @param {number} timeScale
 * @return {THREE.KeyframeTrack}
 */
THREE.KeyframeTrack.prototype.scale = function(timeScale) {};


/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {THREE.KeyframeTrack}
 */
THREE.KeyframeTrack.prototype.trim = function(startTime, endTime) {};


/**
 * @return {THREE.KeyframeTrack}
 */
THREE.KeyframeTrack.prototype.validate = function() {};


/**
 * @return {THREE.KeyframeTrack}
 */
THREE.KeyframeTrack.prototype.optimize = function() {};


/**
 * @param {THREE.KeyframeTrack} key0
 * @param {THREE.KeyframeTrack} key1
 * @return {number}
 */
THREE.KeyframeTrack.prototype.keyComparator = function(key0, key1) {};


/**
 * @param {*} json
 * @return {THREE.KeyframeTrack}
 */
THREE.KeyframeTrack.prototype.parse = function(json) {};


/**
 * @param {string} typeName
 * @return {*}
 */
THREE.KeyframeTrack.prototype.GetTrackTypeForTypeName = function(typeName) {};


/**
 * @constructor
 * @param {*} rootNode
 * @param {string} trackName
 */
THREE.PropertyBinding = function(rootNode, trackName) {};


/**
 * @type {*}
 */
THREE.PropertyBinding.prototype.rootNode;


/**
 * @type {string}
 */
THREE.PropertyBinding.prototype.trackName;


/**
 * @type {number}
 */
THREE.PropertyBinding.prototype.referenceCount;


/**
 * @type {*}
 */
THREE.PropertyBinding.prototype.originalValue;


/**
 * @type {string}
 */
THREE.PropertyBinding.prototype.directoryName;


/**
 * @type {string}
 */
THREE.PropertyBinding.prototype.nodeName;


/**
 * @type {string}
 */
THREE.PropertyBinding.prototype.objectName;


/**
 * @type {number}
 */
THREE.PropertyBinding.prototype.objectIndex;


/**
 * @type {string}
 */
THREE.PropertyBinding.prototype.propertyName;


/**
 * @type {number}
 */
THREE.PropertyBinding.prototype.propertyIndex;


/**
 * @type {*}
 */
THREE.PropertyBinding.prototype.node;


/**
 * @type {number}
 */
THREE.PropertyBinding.prototype.cumulativeValue;


/**
 * @type {number}
 */
THREE.PropertyBinding.prototype.cumulativeWeight;


/**
 * @return {THREE.void}
 */
THREE.PropertyBinding.prototype.reset = function() {};


/**
 * @param {*} value
 * @param {number} weight
 * @return {THREE.void}
 */
THREE.PropertyBinding.prototype.accumulate = function(value, weight) {};


/**
 * @return {THREE.void}
 */
THREE.PropertyBinding.prototype.unbind = function() {};


/**
 * @return {THREE.void}
 */
THREE.PropertyBinding.prototype.bind = function() {};


/**
 * @return {THREE.void}
 */
THREE.PropertyBinding.prototype.apply = function() {};


/**
 * @param {string} trackName
 * @return {*}
 */
THREE.PropertyBinding.prototype.parseTrackName = function(trackName) {};


/**
 * @param {*} root
 * @param {string} nodeName
 * @return {*}
 */
THREE.PropertyBinding.prototype.findNode = function(root, nodeName) {};


/**
 * @constructor
 * @extends {THREE.KeyframeTrack}
 * @param {string} name
 * @param {Array<*>} keys
 */
THREE.BooleanKeyframeTrack = function(name, keys) {};


/**
 * @type {*}
 */
THREE.BooleanKeyframeTrack.prototype.result;


/**
 * @param {*} value
 * @return {THREE.void}
 */
THREE.BooleanKeyframeTrack.prototype.setResult = function(value) {};


/**
 * @param {*} value0
 * @param {*} value1
 * @param {number} alpha
 * @return {*}
 */
THREE.BooleanKeyframeTrack.prototype.lerpValues = function(value0, value1, alpha) {};


/**
 * @param {*} value0
 * @param {*} value1
 * @return {boolean}
 */
THREE.BooleanKeyframeTrack.prototype.compareValues = function(value0, value1) {};


/**
 * @return {THREE.BooleanKeyframeTrack}
 */
THREE.BooleanKeyframeTrack.prototype.clone = function() {};


/**
 * @param {*} json
 * @return {THREE.BooleanKeyframeTrack}
 */
THREE.BooleanKeyframeTrack.prototype.parse = function(json) {};


/**
 * @constructor
 * @extends {THREE.KeyframeTrack}
 * @param {string} name
 * @param {Array<*>} keys
 */
THREE.ColorKeyframeTrack = function(name, keys) {};


/**
 * @type {*}
 */
THREE.ColorKeyframeTrack.prototype.result;


/**
 * @param {*} value
 * @return {THREE.void}
 */
THREE.ColorKeyframeTrack.prototype.setResult = function(value) {};


/**
 * @param {*} value0
 * @param {*} value1
 * @param {number} alpha
 * @return {*}
 */
THREE.ColorKeyframeTrack.prototype.lerpValues = function(value0, value1, alpha) {};


/**
 * @param {*} value0
 * @param {*} value1
 * @return {boolean}
 */
THREE.ColorKeyframeTrack.prototype.compareValues = function(value0, value1) {};


/**
 * @return {THREE.ColorKeyframeTrack}
 */
THREE.ColorKeyframeTrack.prototype.clone = function() {};


/**
 * @param {*} json
 * @return {THREE.ColorKeyframeTrack}
 */
THREE.ColorKeyframeTrack.prototype.parse = function(json) {};


/**
 * @constructor
 */
THREE.NumberKeyframeTrack = function() {};


/**
 * @type {*}
 */
THREE.NumberKeyframeTrack.prototype.result;


/**
 * @param {*} value
 * @return {THREE.void}
 */
THREE.NumberKeyframeTrack.prototype.setResult = function(value) {};


/**
 * @param {*} value0
 * @param {*} value1
 * @param {number} alpha
 * @return {*}
 */
THREE.NumberKeyframeTrack.prototype.lerpValues = function(value0, value1, alpha) {};


/**
 * @param {*} value0
 * @param {*} value1
 * @return {boolean}
 */
THREE.NumberKeyframeTrack.prototype.compareValues = function(value0, value1) {};


/**
 * @return {THREE.NumberKeyframeTrack}
 */
THREE.NumberKeyframeTrack.prototype.clone = function() {};


/**
 * @param {*} json
 * @return {THREE.NumberKeyframeTrack}
 */
THREE.NumberKeyframeTrack.prototype.parse = function(json) {};


/**
 * @constructor
 */
THREE.QuaternionKeyframeTrack = function() {};


/**
 * @type {*}
 */
THREE.QuaternionKeyframeTrack.prototype.result;


/**
 * @param {*} value
 * @return {THREE.void}
 */
THREE.QuaternionKeyframeTrack.prototype.setResult = function(value) {};


/**
 * @param {*} value0
 * @param {*} value1
 * @param {number} alpha
 * @return {*}
 */
THREE.QuaternionKeyframeTrack.prototype.lerpValues = function(value0, value1, alpha) {};


/**
 * @param {*} value0
 * @param {*} value1
 * @return {boolean}
 */
THREE.QuaternionKeyframeTrack.prototype.compareValues = function(value0, value1) {};


/**
 * @return {THREE.QuaternionKeyframeTrack}
 */
THREE.QuaternionKeyframeTrack.prototype.clone = function() {};


/**
 * @param {*} json
 * @return {THREE.QuaternionKeyframeTrack}
 */
THREE.QuaternionKeyframeTrack.prototype.parse = function(json) {};


/**
 * @constructor
 */
THREE.StringKeyframeTrack = function() {};


/**
 * @type {*}
 */
THREE.StringKeyframeTrack.prototype.result;


/**
 * @param {*} value
 * @return {THREE.void}
 */
THREE.StringKeyframeTrack.prototype.setResult = function(value) {};


/**
 * @param {*} value0
 * @param {*} value1
 * @param {number} alpha
 * @return {*}
 */
THREE.StringKeyframeTrack.prototype.lerpValues = function(value0, value1, alpha) {};


/**
 * @param {*} value0
 * @param {*} value1
 * @return {boolean}
 */
THREE.StringKeyframeTrack.prototype.compareValues = function(value0, value1) {};


/**
 * @return {THREE.StringKeyframeTrack}
 */
THREE.StringKeyframeTrack.prototype.clone = function() {};


/**
 * @param {*} json
 * @return {THREE.StringKeyframeTrack}
 */
THREE.StringKeyframeTrack.prototype.parse = function(json) {};


/**
 * @constructor
 */
THREE.VectorKeyframeTrack = function() {};


/**
 * @type {*}
 */
THREE.VectorKeyframeTrack.prototype.result;


/**
 * @param {*} value
 * @return {THREE.void}
 */
THREE.VectorKeyframeTrack.prototype.setResult = function(value) {};


/**
 * @param {*} value0
 * @param {*} value1
 * @param {number} alpha
 * @return {*}
 */
THREE.VectorKeyframeTrack.prototype.lerpValues = function(value0, value1, alpha) {};


/**
 * @param {*} value0
 * @param {*} value1
 * @return {boolean}
 */
THREE.VectorKeyframeTrack.prototype.compareValues = function(value0, value1) {};


/**
 * @return {THREE.VectorKeyframeTrack}
 */
THREE.VectorKeyframeTrack.prototype.clone = function() {};


/**
 * @param {*} json
 * @return {THREE.VectorKeyframeTrack}
 */
THREE.VectorKeyframeTrack.prototype.parse = function(json) {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 */
THREE.Camera = function() {};


/**
 * @type {THREE.Matrix4}
 */
THREE.Camera.prototype.matrixWorldInverse;


/**
 * @type {THREE.Matrix4}
 */
THREE.Camera.prototype.projectionMatrix;


/**
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Camera.prototype.getWorldDirection = function(optionalTarget) {};


/**
 * @param {THREE.Vector3} vector
 * @return {THREE.void}
 */
THREE.Camera.prototype.lookAt = function(vector) {};


/**
 * @return {THREE.Camera}
 */
THREE.Camera.prototype.clone = function() {};


/**
 * @param {THREE.Camera=} camera
 * @return {THREE.Camera}
 */
THREE.Camera.prototype.copy = function(camera) {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {number=} near
 * @param {number=} far
 * @param {number=} cubeResolution
 */
THREE.CubeCamera = function(near, far, cubeResolution) {};


/**
 * @type {THREE.WebGLRenderTargetCube}
 */
THREE.CubeCamera.prototype.renderTarget;


/**
 * @param {THREE.Renderer} renderer
 * @param {THREE.Scene} scene
 * @return {THREE.void}
 */
THREE.CubeCamera.prototype.updateCubeMap = function(renderer, scene) {};


/**
 * @constructor
 * @extends {THREE.Camera}
 * @param {number} left
 * @param {number} right
 * @param {number} top
 * @param {number} bottom
 * @param {number=} near
 * @param {number=} far
 */
THREE.OrthographicCamera = function(left, right, top, bottom, near, far) {};


/**
 * @type {number}
 */
THREE.OrthographicCamera.prototype.zoom;


/**
 * @type {number}
 */
THREE.OrthographicCamera.prototype.left;


/**
 * @type {number}
 */
THREE.OrthographicCamera.prototype.right;


/**
 * @type {number}
 */
THREE.OrthographicCamera.prototype.top;


/**
 * @type {number}
 */
THREE.OrthographicCamera.prototype.bottom;


/**
 * @type {number}
 */
THREE.OrthographicCamera.prototype.near;


/**
 * @type {number}
 */
THREE.OrthographicCamera.prototype.far;


/**
 * @return {THREE.void}
 */
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function() {};


/**
 * @return {THREE.OrthographicCamera}
 */
THREE.OrthographicCamera.prototype.clone = function() {};


/**
 * @param {THREE.OrthographicCamera} source
 * @return {THREE.OrthographicCamera}
 */
THREE.OrthographicCamera.prototype.copy = function(source) {};


/**
 * @param {*=} meta
 * @return {*}
 */
THREE.OrthographicCamera.prototype.toJSON = function(meta) {};


/**
 * @constructor
 * @extends {THREE.Camera}
 * @param {number=} fov
 * @param {number=} aspect
 * @param {number=} near
 * @param {number=} far
 */
THREE.PerspectiveCamera = function(fov, aspect, near, far) {};


/**
 * @type {number}
 */
THREE.PerspectiveCamera.prototype.zoom;


/**
 * @type {number}
 */
THREE.PerspectiveCamera.prototype.fov;


/**
 * @type {number}
 */
THREE.PerspectiveCamera.prototype.aspect;


/**
 * @type {number}
 */
THREE.PerspectiveCamera.prototype.near;


/**
 * @type {number}
 */
THREE.PerspectiveCamera.prototype.far;


/**
 * @param {number} focalLength
 * @param {number=} frameHeight
 * @return {THREE.void}
 */
THREE.PerspectiveCamera.prototype.setLens = function(focalLength, frameHeight) {};


/**
 * @param {number} fullWidth
 * @param {number} fullHeight
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {THREE.void}
 */
THREE.PerspectiveCamera.prototype.setViewOffset = function(fullWidth, fullHeight, x, y, width, height) {};


/**
 * @return {THREE.void}
 */
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {};


/**
 * @return {THREE.PerspectiveCamera}
 */
THREE.PerspectiveCamera.prototype.clone = function() {};


/**
 * @param {THREE.PerspectiveCamera} source
 * @return {THREE.PerspectiveCamera}
 */
THREE.PerspectiveCamera.prototype.copy = function(source) {};


/**
 * @param {*=} meta
 * @return {*}
 */
THREE.PerspectiveCamera.prototype.toJSON = function(meta) {};


/**
 * @constructor
 * @param {THREE.ArrayLike} array
 * @param {number} itemSize
 */
THREE.BufferAttribute = function(array, itemSize) {};


/**
 * @type {string}
 */
THREE.BufferAttribute.prototype.uuid;


/**
 * @type {THREE.ArrayLike}
 */
THREE.BufferAttribute.prototype.array;


/**
 * @type {number}
 */
THREE.BufferAttribute.prototype.itemSize;


/**
 * @type {boolean}
 */
THREE.BufferAttribute.prototype.dynamic;


/**
 * @type {{offset: number, count: number}}
 */
THREE.BufferAttribute.prototype.updateRange;


/**
 * @type {number}
 */
THREE.BufferAttribute.prototype.version;


/**
 * @type {boolean}
 */
THREE.BufferAttribute.prototype.needsUpdate;


/**
 * @type {number}
 */
THREE.BufferAttribute.prototype.length;


/**
 * @type {number}
 */
THREE.BufferAttribute.prototype.count;


/**
 * @param {boolean} dynamic
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.setDynamic = function(dynamic) {};


/**
 * @return {(THREE.BufferAttribute|THREE.BufferAttribute)}
 */
THREE.BufferAttribute.prototype.clone = function() {};


/**
 * @param {THREE.BufferAttribute} source
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.copy = function(source) {};


/**
 * @param {number} index1
 * @param {THREE.BufferAttribute} attribute
 * @param {number} index2
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.copyAt = function(index1, attribute, index2) {};


/**
 * @param {THREE.ArrayLike} array
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.copyArray = function(array) {};


/**
 * @param {Array<THREE.{r:number, g:number, b:number}>} colors
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.copyColorsArray = function(colors) {};


/**
 * @param {Array<THREE.{a:number, b:number, c:number}>} indices
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.copyIndicesArray = function(indices) {};


/**
 * @param {Array<THREE.{x:number, y:number}>} vectors
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.copyVector2sArray = function(vectors) {};


/**
 * @param {Array<THREE.{x:number, y:number, z:number}>} vectors
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.copyVector3sArray = function(vectors) {};


/**
 * @param {Array<THREE.{x:number, y:number, z:number, w:number}>} vectors
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.copyVector4sArray = function(vectors) {};


/**
 * @param {THREE.ArrayLike} value
 * @param {number=} offset
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.set = function(value, offset) {};


/**
 * @param {number} index
 * @return {number}
 */
THREE.BufferAttribute.prototype.getX = function(index) {};


/**
 * @param {number} index
 * @param {number} x
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.setX = function(index, x) {};


/**
 * @param {number} index
 * @return {number}
 */
THREE.BufferAttribute.prototype.getY = function(index) {};


/**
 * @param {number} index
 * @param {number} y
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.setY = function(index, y) {};


/**
 * @param {number} index
 * @return {number}
 */
THREE.BufferAttribute.prototype.getZ = function(index) {};


/**
 * @param {number} index
 * @param {number} z
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.setZ = function(index, z) {};


/**
 * @param {number} index
 * @return {number}
 */
THREE.BufferAttribute.prototype.getW = function(index) {};


/**
 * @param {number} index
 * @param {number} z
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.setW = function(index, z) {};


/**
 * @param {number} index
 * @param {number} x
 * @param {number} y
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.setXY = function(index, x, y) {};


/**
 * @param {number} index
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.setXYZ = function(index, x, y, z) {};


/**
 * @param {number} index
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 * @return {THREE.BufferAttribute}
 */
THREE.BufferAttribute.prototype.setXYZW = function(index, x, y, z, w) {};


/**
 * @constructor
 * @extends {THREE.BufferAttribute}
 * @param {*} array
 * @param {number} itemSize
 */
THREE.Int8Attribute = function(array, itemSize) {};


/**
 * @constructor
 * @extends {THREE.BufferAttribute}
 * @param {*} array
 * @param {number} itemSize
 */
THREE.Uint8Attribute = function(array, itemSize) {};


/**
 * @constructor
 * @extends {THREE.BufferAttribute}
 * @param {*} array
 * @param {number} itemSize
 */
THREE.Uint8ClampedAttribute = function(array, itemSize) {};


/**
 * @constructor
 * @extends {THREE.BufferAttribute}
 * @param {*} array
 * @param {number} itemSize
 */
THREE.Int16Attribute = function(array, itemSize) {};


/**
 * @constructor
 * @extends {THREE.BufferAttribute}
 * @param {*} array
 * @param {number} itemSize
 */
THREE.Uint16Attribute = function(array, itemSize) {};


/**
 * @constructor
 * @extends {THREE.BufferAttribute}
 * @param {*} array
 * @param {number} itemSize
 */
THREE.Int32Attribute = function(array, itemSize) {};


/**
 * @constructor
 * @extends {THREE.BufferAttribute}
 * @param {*} array
 * @param {number} itemSize
 */
THREE.Uint32Attribute = function(array, itemSize) {};


/**
 * @constructor
 * @extends {THREE.BufferAttribute}
 * @param {*} array
 * @param {number} itemSize
 */
THREE.Float32Attribute = function(array, itemSize) {};


/**
 * @constructor
 * @extends {THREE.BufferAttribute}
 * @param {*} array
 * @param {number} itemSize
 */
THREE.Float64Attribute = function(array, itemSize) {};


/**
 * @constructor
 */
THREE.BufferGeometry = function() {};


/**
 * @type {number}
 */
THREE.BufferGeometry.prototype.MaxIndex;


/**
 * @type {number}
 */
THREE.BufferGeometry.prototype.id;


/**
 * @type {string}
 */
THREE.BufferGeometry.prototype.uuid;


/**
 * @type {string}
 */
THREE.BufferGeometry.prototype.name;


/**
 * @type {string}
 */
THREE.BufferGeometry.prototype.type;


/**
 * @type {THREE.BufferAttribute}
 */
THREE.BufferGeometry.prototype.index;


/**
 * @type {(THREE.BufferAttribute|Array<THREE.InterleavedBufferAttribute>)}
 */
THREE.BufferGeometry.prototype.attributes;


/**
 * @type {*}
 */
THREE.BufferGeometry.prototype.morphAttributes;


/**
 * @type {Array<THREE.{start: number, count: number, materialIndex?: number}>}
 */
THREE.BufferGeometry.prototype.groups;


/**
 * @type {THREE.Box3}
 */
THREE.BufferGeometry.prototype.boundingBox;


/**
 * @type {THREE.BoundingSphere}
 */
THREE.BufferGeometry.prototype.boundingSphere;


/**
 * @type {{start: number, count: number}}
 */
THREE.BufferGeometry.prototype.drawRange;


/**
 * @param {THREE.BufferAttribute} index
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.addIndex = function(index) {};


/**
 * @return {THREE.BufferAttribute}
 */
THREE.BufferGeometry.prototype.getIndex = function() {};


/**
 * @param {THREE.BufferAttribute} index
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.setIndex = function(index) {};


/**
 * @param {(string|string)} name
 * @param {(*|THREE.BufferAttribute,THREE.InterleavedBufferAttribute)} array
 * @param {number=} itemSize
 * @return {(*|THREE.void)}
 */
THREE.BufferGeometry.prototype.addAttribute = function(name, array, itemSize) {};


/**
 * @param {string} name
 * @return {(THREE.BufferAttribute|THREE.InterleavedBufferAttribute)}
 */
THREE.BufferGeometry.prototype.getAttribute = function(name) {};


/**
 * @param {string} name
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.removeAttribute = function(name) {};


/**
 * @return {*}
 */
THREE.BufferGeometry.prototype.drawcalls = function() {};


/**
 * @return {*}
 */
THREE.BufferGeometry.prototype.offsets = function() {};


/**
 * @param {number} start
 * @param {number} count
 * @param {number=} index
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.addDrawCall = function(start, count, index) {};


/**
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.clearDrawCalls = function() {};


/**
 * @param {number} start
 * @param {number} count
 * @param {number=} materialIndex
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.addGroup = function(start, count, materialIndex) {};


/**
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.clearGroups = function() {};


/**
 * @param {number} start
 * @param {number} count
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.setDrawRange = function(start, count) {};


/**
 * @param {THREE.Matrix4} matrix
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.applyMatrix = function(matrix) {};


/**
 * @param {number} angle
 * @return {THREE.BufferGeometry}
 */
THREE.BufferGeometry.prototype.rotateX = function(angle) {};


/**
 * @param {number} angle
 * @return {THREE.BufferGeometry}
 */
THREE.BufferGeometry.prototype.rotateY = function(angle) {};


/**
 * @param {number} angle
 * @return {THREE.BufferGeometry}
 */
THREE.BufferGeometry.prototype.rotateZ = function(angle) {};


/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {THREE.BufferGeometry}
 */
THREE.BufferGeometry.prototype.translate = function(x, y, z) {};


/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {THREE.BufferGeometry}
 */
THREE.BufferGeometry.prototype.scale = function(x, y, z) {};


/**
 * @param {THREE.Vector3} v
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.lookAt = function(v) {};


/**
 * @return {THREE.Vector3}
 */
THREE.BufferGeometry.prototype.center = function() {};


/**
 * @param {THREE.Object3D} object
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.setFromObject = function(object) {};


/**
 * @param {THREE.Object3D} object
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.updateFromObject = function(object) {};


/**
 * @param {THREE.Geometry} geometry
 * @param {*=} settings
 * @return {THREE.BufferGeometry}
 */
THREE.BufferGeometry.prototype.fromGeometry = function(geometry, settings) {};


/**
 * @param {THREE.DirectGeometry} geometry
 * @return {THREE.BufferGeometry}
 */
THREE.BufferGeometry.prototype.fromDirectGeometry = function(geometry) {};


/**
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.computeBoundingBox = function() {};


/**
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.computeBoundingSphere = function() {};


/**
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.computeFaceNormals = function() {};


/**
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.computeVertexNormals = function() {};


/**
 * @param {number} size
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.computeOffsets = function(size) {};


/**
 * @param {THREE.BufferGeometry} geometry
 * @param {number} offset
 * @return {THREE.BufferGeometry}
 */
THREE.BufferGeometry.prototype.merge = function(geometry, offset) {};


/**
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.normalizeNormals = function() {};


/**
 * @return {*}
 */
THREE.BufferGeometry.prototype.toJSON = function() {};


/**
 * @return {THREE.BufferGeometry}
 */
THREE.BufferGeometry.prototype.clone = function() {};


/**
 * @param {THREE.BufferGeometry} source
 * @return {THREE.BufferGeometry}
 */
THREE.BufferGeometry.prototype.copy = function(source) {};


/**
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.dispose = function() {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.addEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.hasEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.removeEventListener = function(type, listener) {};


/**
 * @param {THREE.{ type: string; target: any; }} event
 * @return {THREE.void}
 */
THREE.BufferGeometry.prototype.dispatchEvent = function(event) {};


/**
 * @constructor
 */
THREE.Channels = function() {};


/**
 * @type {number}
 */
THREE.Channels.prototype.mask;


/**
 * @param {number} channel
 * @return {THREE.void}
 */
THREE.Channels.prototype.set = function(channel) {};


/**
 * @param {number} channel
 * @return {THREE.void}
 */
THREE.Channels.prototype.enable = function(channel) {};


/**
 * @param {number} channel
 * @return {THREE.void}
 */
THREE.Channels.prototype.toggle = function(channel) {};


/**
 * @param {number} channel
 * @return {THREE.void}
 */
THREE.Channels.prototype.disable = function(channel) {};


/**
 * @constructor
 * @param {boolean=} autoStart
 */
THREE.Clock = function(autoStart) {};


/**
 * @type {boolean}
 */
THREE.Clock.prototype.autoStart;


/**
 * @type {number}
 */
THREE.Clock.prototype.startTime;


/**
 * @type {number}
 */
THREE.Clock.prototype.oldTime;


/**
 * @type {number}
 */
THREE.Clock.prototype.elapsedTime;


/**
 * @type {boolean}
 */
THREE.Clock.prototype.running;


/**
 * @return {THREE.void}
 */
THREE.Clock.prototype.start = function() {};


/**
 * @return {THREE.void}
 */
THREE.Clock.prototype.stop = function() {};


/**
 * @return {number}
 */
THREE.Clock.prototype.getElapsedTime = function() {};


/**
 * @return {number}
 */
THREE.Clock.prototype.getDelta = function() {};


/**
 * @constructor
 */
THREE.DirectGeometry = function() {};


/**
 * @type {number}
 */
THREE.DirectGeometry.prototype.id;


/**
 * @type {string}
 */
THREE.DirectGeometry.prototype.uuid;


/**
 * @type {string}
 */
THREE.DirectGeometry.prototype.name;


/**
 * @type {string}
 */
THREE.DirectGeometry.prototype.type;


/**
 * @type {Array<number>}
 */
THREE.DirectGeometry.prototype.indices;


/**
 * @type {Array<THREE.Vector3>}
 */
THREE.DirectGeometry.prototype.vertices;


/**
 * @type {Array<THREE.Vector3>}
 */
THREE.DirectGeometry.prototype.normals;


/**
 * @type {Array<THREE.Color>}
 */
THREE.DirectGeometry.prototype.colors;


/**
 * @type {Array<THREE.Vector2>}
 */
THREE.DirectGeometry.prototype.uvs;


/**
 * @type {Array<THREE.Vector2>}
 */
THREE.DirectGeometry.prototype.uvs2;


/**
 * @type {Array<THREE.{start: number, materialIndex: number}>}
 */
THREE.DirectGeometry.prototype.groups;


/**
 * @type {Array<THREE.MorphTarget>}
 */
THREE.DirectGeometry.prototype.morphTargets;


/**
 * @type {Array<number>}
 */
THREE.DirectGeometry.prototype.skinWeights;


/**
 * @type {Array<number>}
 */
THREE.DirectGeometry.prototype.skinIndices;


/**
 * @type {THREE.Box3}
 */
THREE.DirectGeometry.prototype.boundingBox;


/**
 * @type {THREE.BoundingSphere}
 */
THREE.DirectGeometry.prototype.boundingSphere;


/**
 * @type {boolean}
 */
THREE.DirectGeometry.prototype.verticesNeedUpdate;


/**
 * @type {boolean}
 */
THREE.DirectGeometry.prototype.normalsNeedUpdate;


/**
 * @type {boolean}
 */
THREE.DirectGeometry.prototype.colorsNeedUpdate;


/**
 * @type {boolean}
 */
THREE.DirectGeometry.prototype.uvsNeedUpdate;


/**
 * @type {boolean}
 */
THREE.DirectGeometry.prototype.groupsNeedUpdate;


/**
 * @return {THREE.void}
 */
THREE.DirectGeometry.prototype.computeBoundingBox = function() {};


/**
 * @return {THREE.void}
 */
THREE.DirectGeometry.prototype.computeBoundingSphere = function() {};


/**
 * @param {THREE.Geometry} geometry
 * @return {THREE.void}
 */
THREE.DirectGeometry.prototype.computeGroups = function(geometry) {};


/**
 * @param {THREE.Geometry} geometry
 * @return {THREE.DirectGeometry}
 */
THREE.DirectGeometry.prototype.fromGeometry = function(geometry) {};


/**
 * @return {THREE.void}
 */
THREE.DirectGeometry.prototype.dispose = function() {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.DirectGeometry.prototype.addEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.DirectGeometry.prototype.hasEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.DirectGeometry.prototype.removeEventListener = function(type, listener) {};


/**
 * @param {THREE.{ type: string; target: any; }} event
 * @return {THREE.void}
 */
THREE.DirectGeometry.prototype.dispatchEvent = function(event) {};


/**
 * @constructor
 */
THREE.EventDispatcher = function() {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.EventDispatcher.prototype.addEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.EventDispatcher.prototype.hasEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.EventDispatcher.prototype.removeEventListener = function(type, listener) {};


/**
 * @param {THREE.{ type: string; target: any; }} event
 * @return {THREE.void}
 */
THREE.EventDispatcher.prototype.dispatchEvent = function(event) {};


/**
 * @constructor
 * @param {(number|number|number|number)} a
 * @param {(number|number|number|number)} b
 * @param {(number|number|number|number)} c
 * @param {(THREE.Vector3|THREE.Vector3|Array<THREE.Vector3>|Array<THREE.Vector3>)=} normal
 * @param {(THREE.Color|Array<THREE.Color>|THREE.Color|Array<THREE.Color>)=} color
 * @param {(number|number|number|number)=} materialIndex
 */
THREE.Face3 = function(a, b, c, normal, color, materialIndex) {};


/**
 * @type {number}
 */
THREE.Face3.prototype.a;


/**
 * @type {number}
 */
THREE.Face3.prototype.b;


/**
 * @type {number}
 */
THREE.Face3.prototype.c;


/**
 * @type {THREE.Vector3}
 */
THREE.Face3.prototype.normal;


/**
 * @type {Array<THREE.Vector3>}
 */
THREE.Face3.prototype.vertexNormals;


/**
 * @type {THREE.Color}
 */
THREE.Face3.prototype.color;


/**
 * @type {Array<THREE.Color>}
 */
THREE.Face3.prototype.vertexColors;


/**
 * @type {Array<number>}
 */
THREE.Face3.prototype.vertexTangents;


/**
 * @type {number}
 */
THREE.Face3.prototype.materialIndex;


/**
 * @return {THREE.Face3}
 */
THREE.Face3.prototype.clone = function() {};


/**
 * @interface
 */
THREE.MorphTarget = function() {};


/**
 * @interface
 */
THREE.MorphColor = function() {};


/**
 * @interface
 */
THREE.MorphNormals = function() {};


/**
 * @interface
 */
THREE.BoundingSphere = function() {};


/**
 * @constructor
 */
THREE.Geometry = function() {};


/**
 * @type {number}
 */
THREE.Geometry.prototype.id;


/**
 * @type {string}
 */
THREE.Geometry.prototype.uuid;


/**
 * @type {string}
 */
THREE.Geometry.prototype.name;


/**
 * @type {string}
 */
THREE.Geometry.prototype.type;


/**
 * @type {Array<THREE.Vector3>}
 */
THREE.Geometry.prototype.vertices;


/**
 * @type {Array<THREE.Color>}
 */
THREE.Geometry.prototype.colors;


/**
 * @type {Array<THREE.Face3>}
 */
THREE.Geometry.prototype.faces;


/**
 * @type {Array<THREE.Vector2[][]>}
 */
THREE.Geometry.prototype.faceVertexUvs;


/**
 * @type {Array<THREE.MorphTarget>}
 */
THREE.Geometry.prototype.morphTargets;


/**
 * @type {Array<THREE.MorphNormals>}
 */
THREE.Geometry.prototype.morphNormals;


/**
 * @type {Array<number>}
 */
THREE.Geometry.prototype.skinWeights;


/**
 * @type {Array<number>}
 */
THREE.Geometry.prototype.skinIndices;


/**
 * @type {Array<number>}
 */
THREE.Geometry.prototype.lineDistances;


/**
 * @type {THREE.Box3}
 */
THREE.Geometry.prototype.boundingBox;


/**
 * @type {THREE.BoundingSphere}
 */
THREE.Geometry.prototype.boundingSphere;


/**
 * @type {boolean}
 */
THREE.Geometry.prototype.verticesNeedUpdate;


/**
 * @type {boolean}
 */
THREE.Geometry.prototype.elementsNeedUpdate;


/**
 * @type {boolean}
 */
THREE.Geometry.prototype.uvsNeedUpdate;


/**
 * @type {boolean}
 */
THREE.Geometry.prototype.normalsNeedUpdate;


/**
 * @type {boolean}
 */
THREE.Geometry.prototype.colorsNeedUpdate;


/**
 * @type {boolean}
 */
THREE.Geometry.prototype.lineDistancesNeedUpdate;


/**
 * @type {boolean}
 */
THREE.Geometry.prototype.groupsNeedUpdate;


/**
 * @param {THREE.Matrix4} matrix
 * @return {THREE.void}
 */
THREE.Geometry.prototype.applyMatrix = function(matrix) {};


/**
 * @param {number} angle
 * @return {THREE.Geometry}
 */
THREE.Geometry.prototype.rotateX = function(angle) {};


/**
 * @param {number} angle
 * @return {THREE.Geometry}
 */
THREE.Geometry.prototype.rotateY = function(angle) {};


/**
 * @param {number} angle
 * @return {THREE.Geometry}
 */
THREE.Geometry.prototype.rotateZ = function(angle) {};


/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {THREE.Geometry}
 */
THREE.Geometry.prototype.translate = function(x, y, z) {};


/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {THREE.Geometry}
 */
THREE.Geometry.prototype.scale = function(x, y, z) {};


/**
 * @param {THREE.Vector3} vector
 * @return {THREE.void}
 */
THREE.Geometry.prototype.lookAt = function(vector) {};


/**
 * @param {THREE.BufferGeometry} geometry
 * @return {THREE.Geometry}
 */
THREE.Geometry.prototype.fromBufferGeometry = function(geometry) {};


/**
 * @return {THREE.Vector3}
 */
THREE.Geometry.prototype.center = function() {};


/**
 * @return {THREE.Geometry}
 */
THREE.Geometry.prototype.normalize = function() {};


/**
 * @return {THREE.void}
 */
THREE.Geometry.prototype.computeFaceNormals = function() {};


/**
 * @param {boolean=} areaWeighted
 * @return {THREE.void}
 */
THREE.Geometry.prototype.computeVertexNormals = function(areaWeighted) {};


/**
 * @return {THREE.void}
 */
THREE.Geometry.prototype.computeMorphNormals = function() {};


/**
 * @return {THREE.void}
 */
THREE.Geometry.prototype.computeLineDistances = function() {};


/**
 * @return {THREE.void}
 */
THREE.Geometry.prototype.computeBoundingBox = function() {};


/**
 * @return {THREE.void}
 */
THREE.Geometry.prototype.computeBoundingSphere = function() {};


/**
 * @param {THREE.Geometry} geometry
 * @param {THREE.Matrix} matrix
 * @param {number} materialIndexOffset
 * @return {THREE.void}
 */
THREE.Geometry.prototype.merge = function(geometry, matrix, materialIndexOffset) {};


/**
 * @param {THREE.Mesh} mesh
 * @return {THREE.void}
 */
THREE.Geometry.prototype.mergeMesh = function(mesh) {};


/**
 * @return {number}
 */
THREE.Geometry.prototype.mergeVertices = function() {};


/**
 * @return {THREE.void}
 */
THREE.Geometry.prototype.sortFacesByMaterialIndex = function() {};


/**
 * @return {*}
 */
THREE.Geometry.prototype.toJSON = function() {};


/**
 * @return {THREE.Geometry}
 */
THREE.Geometry.prototype.clone = function() {};


/**
 * @param {THREE.Geometry} source
 * @return {THREE.Geometry}
 */
THREE.Geometry.prototype.copy = function(source) {};


/**
 * @return {THREE.void}
 */
THREE.Geometry.prototype.dispose = function() {};


/**
 * @type {Array<THREE.Bone>}
 */
THREE.Geometry.prototype.bones;


/**
 * @type {THREE.AnimationClip}
 */
THREE.Geometry.prototype.animation;


/**
 * @type {Array<THREE.AnimationClip>}
 */
THREE.Geometry.prototype.animations;


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.Geometry.prototype.addEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.Geometry.prototype.hasEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.Geometry.prototype.removeEventListener = function(type, listener) {};


/**
 * @param {THREE.{ type: string; target: any; }} event
 * @return {THREE.void}
 */
THREE.Geometry.prototype.dispatchEvent = function(event) {};


/**
 * @constructor
 * @extends {THREE.BufferAttribute}
 * @param {THREE.ArrayLike} data
 * @param {number} itemSize
 * @param {number=} meshPerAttribute
 */
THREE.InstancedBufferAttribute = function(data, itemSize, meshPerAttribute) {};


/**
 * @type {number}
 */
THREE.InstancedBufferAttribute.prototype.meshPerAttribute;


/**
 * @return {THREE.InstancedBufferAttribute}
 */
THREE.InstancedBufferAttribute.prototype.clone = function() {};


/**
 * @param {THREE.InstancedBufferAttribute} source
 * @return {THREE.InstancedBufferAttribute}
 */
THREE.InstancedBufferAttribute.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.BufferGeometry}
 */
THREE.InstancedBufferGeometry = function() {};


/**
 * @type {Array<THREE.{start:number, count:number, instances:number}>}
 */
THREE.InstancedBufferGeometry.prototype.groups;


/**
 * @param {number} start
 * @param {number} count
 * @param {number} instances
 * @return {THREE.void}
 */
THREE.InstancedBufferGeometry.prototype.addGroup = function(start, count, instances) {};


/**
 * @return {THREE.InstancedBufferGeometry}
 */
THREE.InstancedBufferGeometry.prototype.clone = function() {};


/**
 * @param {THREE.InstancedBufferGeometry} source
 * @return {THREE.InstancedBufferGeometry}
 */
THREE.InstancedBufferGeometry.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.InterleavedBuffer}
 * @param {THREE.ArrayLike} array
 * @param {number} stride
 * @param {number=} meshPerAttribute
 */
THREE.InstancedInterleavedBuffer = function(array, stride, meshPerAttribute) {};


/**
 * @type {number}
 */
THREE.InstancedInterleavedBuffer.prototype.meshPerAttribute;


/**
 * @return {THREE.InstancedInterleavedBuffer}
 */
THREE.InstancedInterleavedBuffer.prototype.clone = function() {};


/**
 * @param {THREE.InstancedInterleavedBuffer} source
 * @return {THREE.InstancedInterleavedBuffer}
 */
THREE.InstancedInterleavedBuffer.prototype.copy = function(source) {};


/**
 * @constructor
 * @param {THREE.ArrayLike} array
 * @param {number} stride
 */
THREE.InterleavedBuffer = function(array, stride) {};


/**
 * @type {THREE.ArrayLike}
 */
THREE.InterleavedBuffer.prototype.array;


/**
 * @type {number}
 */
THREE.InterleavedBuffer.prototype.stride;


/**
 * @type {boolean}
 */
THREE.InterleavedBuffer.prototype.dynamic;


/**
 * @type {{offset: number, count: number}}
 */
THREE.InterleavedBuffer.prototype.updateRange;


/**
 * @type {number}
 */
THREE.InterleavedBuffer.prototype.version;


/**
 * @type {number}
 */
THREE.InterleavedBuffer.prototype.length;


/**
 * @type {number}
 */
THREE.InterleavedBuffer.prototype.count;


/**
 * @type {boolean}
 */
THREE.InterleavedBuffer.prototype.needsUpdate;


/**
 * @param {boolean} dynamic
 * @return {THREE.InterleavedBuffer}
 */
THREE.InterleavedBuffer.prototype.setDynamic = function(dynamic) {};


/**
 * @return {(THREE.InterleavedBuffer|THREE.InterleavedBuffer)}
 */
THREE.InterleavedBuffer.prototype.clone = function() {};


/**
 * @param {THREE.InterleavedBuffer} source
 * @return {THREE.InterleavedBuffer}
 */
THREE.InterleavedBuffer.prototype.copy = function(source) {};


/**
 * @param {number} index1
 * @param {THREE.InterleavedBufferAttribute} attribute
 * @param {number} index2
 * @return {THREE.InterleavedBuffer}
 */
THREE.InterleavedBuffer.prototype.copyAt = function(index1, attribute, index2) {};


/**
 * @param {THREE.ArrayLike} value
 * @param {number} index
 * @return {THREE.InterleavedBuffer}
 */
THREE.InterleavedBuffer.prototype.set = function(value, index) {};


/**
 * @constructor
 * @param {THREE.InterleavedBuffer} interleavedBuffer
 * @param {number} itemSize
 * @param {number} offset
 */
THREE.InterleavedBufferAttribute = function(interleavedBuffer, itemSize, offset) {};


/**
 * @type {string}
 */
THREE.InterleavedBufferAttribute.prototype.uuid;


/**
 * @type {THREE.InterleavedBuffer}
 */
THREE.InterleavedBufferAttribute.prototype.data;


/**
 * @type {number}
 */
THREE.InterleavedBufferAttribute.prototype.itemSize;


/**
 * @type {number}
 */
THREE.InterleavedBufferAttribute.prototype.offset;


/**
 * @type {number}
 */
THREE.InterleavedBufferAttribute.prototype.length;


/**
 * @type {number}
 */
THREE.InterleavedBufferAttribute.prototype.count;


/**
 * @param {number} index
 * @return {number}
 */
THREE.InterleavedBufferAttribute.prototype.getX = function(index) {};


/**
 * @param {number} index
 * @param {number} x
 * @return {THREE.InterleavedBufferAttribute}
 */
THREE.InterleavedBufferAttribute.prototype.setX = function(index, x) {};


/**
 * @param {number} index
 * @return {number}
 */
THREE.InterleavedBufferAttribute.prototype.getY = function(index) {};


/**
 * @param {number} index
 * @param {number} y
 * @return {THREE.InterleavedBufferAttribute}
 */
THREE.InterleavedBufferAttribute.prototype.setY = function(index, y) {};


/**
 * @param {number} index
 * @return {number}
 */
THREE.InterleavedBufferAttribute.prototype.getZ = function(index) {};


/**
 * @param {number} index
 * @param {number} z
 * @return {THREE.InterleavedBufferAttribute}
 */
THREE.InterleavedBufferAttribute.prototype.setZ = function(index, z) {};


/**
 * @param {number} index
 * @return {number}
 */
THREE.InterleavedBufferAttribute.prototype.getW = function(index) {};


/**
 * @param {number} index
 * @param {number} z
 * @return {THREE.InterleavedBufferAttribute}
 */
THREE.InterleavedBufferAttribute.prototype.setW = function(index, z) {};


/**
 * @param {number} index
 * @param {number} x
 * @param {number} y
 * @return {THREE.InterleavedBufferAttribute}
 */
THREE.InterleavedBufferAttribute.prototype.setXY = function(index, x, y) {};


/**
 * @param {number} index
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {THREE.InterleavedBufferAttribute}
 */
THREE.InterleavedBufferAttribute.prototype.setXYZ = function(index, x, y, z) {};


/**
 * @param {number} index
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 * @return {THREE.InterleavedBufferAttribute}
 */
THREE.InterleavedBufferAttribute.prototype.setXYZW = function(index, x, y, z, w) {};


/**
 * @constructor
 */
THREE.Object3D = function() {};


/**
 * @type {number}
 */
THREE.Object3D.prototype.id;


/**
 * @type {string}
 */
THREE.Object3D.prototype.uuid;


/**
 * @type {string}
 */
THREE.Object3D.prototype.name;


/**
 * @type {string}
 */
THREE.Object3D.prototype.type;


/**
 * @type {THREE.Object3D}
 */
THREE.Object3D.prototype.parent;


/**
 * @type {THREE.Channels}
 */
THREE.Object3D.prototype.channels;


/**
 * @type {Array<THREE.Object3D>}
 */
THREE.Object3D.prototype.children;


/**
 * @type {THREE.Vector3}
 */
THREE.Object3D.prototype.up;


/**
 * @type {THREE.Vector3}
 */
THREE.Object3D.prototype.position;


/**
 * @type {THREE.Euler}
 */
THREE.Object3D.prototype.rotation;


/**
 * @type {THREE.Quaternion}
 */
THREE.Object3D.prototype.quaternion;


/**
 * @type {THREE.Vector3}
 */
THREE.Object3D.prototype.scale;


/**
 * @type {{value: THREE.Matrix4}}
 */
THREE.Object3D.prototype.modelViewMatrix;


/**
 * @type {{value: THREE.Matrix3}}
 */
THREE.Object3D.prototype.normalMatrix;


/**
 * @type {boolean}
 */
THREE.Object3D.prototype.rotationAutoUpdate;


/**
 * @type {THREE.Matrix4}
 */
THREE.Object3D.prototype.matrix;


/**
 * @type {THREE.Matrix4}
 */
THREE.Object3D.prototype.matrixWorld;


/**
 * @type {boolean}
 */
THREE.Object3D.prototype.matrixAutoUpdate;


/**
 * @type {boolean}
 */
THREE.Object3D.prototype.matrixWorldNeedsUpdate;


/**
 * @type {boolean}
 */
THREE.Object3D.prototype.visible;


/**
 * @type {boolean}
 */
THREE.Object3D.prototype.castShadow;


/**
 * @type {boolean}
 */
THREE.Object3D.prototype.receiveShadow;


/**
 * @type {boolean}
 */
THREE.Object3D.prototype.frustumCulled;


/**
 * @type {number}
 */
THREE.Object3D.prototype.renderOrder;


/**
 * @type {*}
 */
THREE.Object3D.prototype.userData;


/**
 * @type {THREE.Vector3}
 */
THREE.Object3D.prototype.DefaultUp;


/**
 * @type {THREE.Vector3}
 */
THREE.Object3D.prototype.DefaultMatrixAutoUpdate;


/**
 * @param {THREE.Matrix4} matrix
 * @return {THREE.void}
 */
THREE.Object3D.prototype.applyMatrix = function(matrix) {};


/**
 * @param {THREE.Vector3} axis
 * @param {number} angle
 * @return {THREE.void}
 */
THREE.Object3D.prototype.setRotationFromAxisAngle = function(axis, angle) {};


/**
 * @param {THREE.Euler} euler
 * @return {THREE.void}
 */
THREE.Object3D.prototype.setRotationFromEuler = function(euler) {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.void}
 */
THREE.Object3D.prototype.setRotationFromMatrix = function(m) {};


/**
 * @param {THREE.Quaternion} q
 * @return {THREE.void}
 */
THREE.Object3D.prototype.setRotationFromQuaternion = function(q) {};


/**
 * @param {THREE.Vector3} axis
 * @param {number} angle
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.rotateOnAxis = function(axis, angle) {};


/**
 * @param {number} angle
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.rotateX = function(angle) {};


/**
 * @param {number} angle
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.rotateY = function(angle) {};


/**
 * @param {number} angle
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.rotateZ = function(angle) {};


/**
 * @param {THREE.Vector3} axis
 * @param {number} distance
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.translateOnAxis = function(axis, distance) {};


/**
 * @param {number} distance
 * @param {THREE.Vector3} axis
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.translate = function(distance, axis) {};


/**
 * @param {number} distance
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.translateX = function(distance) {};


/**
 * @param {number} distance
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.translateY = function(distance) {};


/**
 * @param {number} distance
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.translateZ = function(distance) {};


/**
 * @param {THREE.Vector3} vector
 * @return {THREE.Vector3}
 */
THREE.Object3D.prototype.localToWorld = function(vector) {};


/**
 * @param {THREE.Vector3} vector
 * @return {THREE.Vector3}
 */
THREE.Object3D.prototype.worldToLocal = function(vector) {};


/**
 * @param {THREE.Vector3} vector
 * @return {THREE.void}
 */
THREE.Object3D.prototype.lookAt = function(vector) {};


/**
 * @param {THREE.Object3D} object
 * @return {THREE.void}
 */
THREE.Object3D.prototype.add = function(object) {};


/**
 * @param {THREE.Object3D} object
 * @return {THREE.void}
 */
THREE.Object3D.prototype.remove = function(object) {};


/**
 * @param {string} name
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.getChildByName = function(name) {};


/**
 * @param {number} id
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.getObjectById = function(id) {};


/**
 * @param {string} name
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.getObjectByName = function(name) {};


/**
 * @param {string} name
 * @param {string} value
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.getObjectByProperty = function(name, value) {};


/**
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Object3D.prototype.getWorldPosition = function(optionalTarget) {};


/**
 * @param {THREE.Quaternion=} optionalTarget
 * @return {THREE.Quaternion}
 */
THREE.Object3D.prototype.getWorldQuaternion = function(optionalTarget) {};


/**
 * @param {THREE.Euler=} optionalTarget
 * @return {THREE.Euler}
 */
THREE.Object3D.prototype.getWorldRotation = function(optionalTarget) {};


/**
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Object3D.prototype.getWorldScale = function(optionalTarget) {};


/**
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Object3D.prototype.getWorldDirection = function(optionalTarget) {};


/**
 * @param {THREE.Raycaster} raycaster
 * @param {*} intersects
 * @return {THREE.void}
 */
THREE.Object3D.prototype.raycast = function(raycaster, intersects) {};


/**
 * @param {THREE.(object: Object3D) => any} callback
 * @return {THREE.void}
 */
THREE.Object3D.prototype.traverse = function(callback) {};


/**
 * @param {THREE.(object: Object3D) => any} callback
 * @return {THREE.void}
 */
THREE.Object3D.prototype.traverseVisible = function(callback) {};


/**
 * @param {THREE.(object: Object3D) => any} callback
 * @return {THREE.void}
 */
THREE.Object3D.prototype.traverseAncestors = function(callback) {};


/**
 * @return {THREE.void}
 */
THREE.Object3D.prototype.updateMatrix = function() {};


/**
 * @param {boolean} force
 * @return {THREE.void}
 */
THREE.Object3D.prototype.updateMatrixWorld = function(force) {};


/**
 * @param {*=} meta
 * @return {*}
 */
THREE.Object3D.prototype.toJSON = function(meta) {};


/**
 * @param {boolean=} recursive
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.clone = function(recursive) {};


/**
 * @param {THREE.Object3D} source
 * @param {boolean=} recursive
 * @return {THREE.Object3D}
 */
THREE.Object3D.prototype.copy = function(source, recursive) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.Object3D.prototype.addEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.Object3D.prototype.hasEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.Object3D.prototype.removeEventListener = function(type, listener) {};


/**
 * @param {THREE.{ type: string; target: any; }} event
 * @return {THREE.void}
 */
THREE.Object3D.prototype.dispatchEvent = function(event) {};


/**
 * @interface
 */
THREE.Intersection = function() {};


/**
 * @interface
 */
THREE.RaycasterParameters = function() {};


/**
 * @constructor
 * @param {THREE.Vector3=} origin
 * @param {THREE.Vector3=} direction
 * @param {number=} near
 * @param {number=} far
 */
THREE.Raycaster = function(origin, direction, near, far) {};


/**
 * @type {THREE.Ray}
 */
THREE.Raycaster.prototype.ray;


/**
 * @type {number}
 */
THREE.Raycaster.prototype.near;


/**
 * @type {number}
 */
THREE.Raycaster.prototype.far;


/**
 * @type {THREE.RaycasterParameters}
 */
THREE.Raycaster.prototype.params;


/**
 * @type {number}
 */
THREE.Raycaster.prototype.precision;


/**
 * @type {number}
 */
THREE.Raycaster.prototype.linePrecision;


/**
 * @param {THREE.Vector3} origin
 * @param {THREE.Vector3} direction
 * @return {THREE.void}
 */
THREE.Raycaster.prototype.set = function(origin, direction) {};


/**
 * @param {THREE.{ x: number; y: number;}} coords
 * @param {THREE.Camera} camera
 * @return {THREE.void}
 */
THREE.Raycaster.prototype.setFromCamera = function(coords, camera) {};


/**
 * @param {THREE.Object3D} object
 * @param {boolean=} recursive
 * @return {Array<THREE.Intersection>}
 */
THREE.Raycaster.prototype.intersectObject = function(object, recursive) {};


/**
 * @param {Array<THREE.Object3D>} objects
 * @param {boolean=} recursive
 * @return {Array<THREE.Intersection>}
 */
THREE.Raycaster.prototype.intersectObjects = function(objects, recursive) {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {number=} hex
 */
THREE.Light = function(hex) {};


/**
 * @type {THREE.Color}
 */
THREE.Light.prototype.color;


/**
 * @type {boolean}
 */
THREE.Light.prototype.receiveShadow;


/**
 * @type {number}
 */
THREE.Light.prototype.shadowCameraFov;


/**
 * @type {number}
 */
THREE.Light.prototype.shadowCameraLeft;


/**
 * @type {number}
 */
THREE.Light.prototype.shadowCameraRight;


/**
 * @type {number}
 */
THREE.Light.prototype.shadowCameraTop;


/**
 * @type {number}
 */
THREE.Light.prototype.shadowCameraBottom;


/**
 * @type {number}
 */
THREE.Light.prototype.shadowCameraNear;


/**
 * @type {number}
 */
THREE.Light.prototype.shadowCameraFar;


/**
 * @type {number}
 */
THREE.Light.prototype.shadowBias;


/**
 * @type {number}
 */
THREE.Light.prototype.shadowDarkness;


/**
 * @type {number}
 */
THREE.Light.prototype.shadowMapWidth;


/**
 * @type {number}
 */
THREE.Light.prototype.shadowMapHeight;


/**
 * @param {boolean=} recursive
 * @return {THREE.Light}
 */
THREE.Light.prototype.clone = function(recursive) {};


/**
 * @param {THREE.Light} source
 * @return {THREE.Light}
 */
THREE.Light.prototype.copy = function(source) {};


/**
 * @param {*} meta
 * @return {*}
 */
THREE.Light.prototype.toJSON = function(meta) {};


/**
 * @constructor
 * @param {THREE.Camera} camera
 */
THREE.LightShadow = function(camera) {};


/**
 * @type {THREE.Camera}
 */
THREE.LightShadow.prototype.camera;


/**
 * @type {number}
 */
THREE.LightShadow.prototype.bias;


/**
 * @type {number}
 */
THREE.LightShadow.prototype.darkness;


/**
 * @type {THREE.Vector2}
 */
THREE.LightShadow.prototype.mapSize;


/**
 * @type {THREE.RenderTarget}
 */
THREE.LightShadow.prototype.map;


/**
 * @type {THREE.Matrix4}
 */
THREE.LightShadow.prototype.matrix;


/**
 * @param {THREE.LightShadow} source
 * @return {THREE.void}
 */
THREE.LightShadow.prototype.copy = function(source) {};


/**
 * @return {THREE.LightShadow}
 */
THREE.LightShadow.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Light}
 * @param {number=} hex
 */
THREE.AmbientLight = function(hex) {};


/**
 * @param {boolean=} recursive
 * @return {THREE.AmbientLight}
 */
THREE.AmbientLight.prototype.clone = function(recursive) {};


/**
 * @param {THREE.AmbientLight} source
 * @return {THREE.AmbientLight}
 */
THREE.AmbientLight.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.Light}
 * @param {number=} hex
 * @param {number=} intensity
 */
THREE.DirectionalLight = function(hex, intensity) {};


/**
 * @type {THREE.Object3D}
 */
THREE.DirectionalLight.prototype.target;


/**
 * @type {number}
 */
THREE.DirectionalLight.prototype.intensity;


/**
 * @type {THREE.LightShadow}
 */
THREE.DirectionalLight.prototype.shadow;


/**
 * @param {boolean=} recursive
 * @return {THREE.DirectionalLight}
 */
THREE.DirectionalLight.prototype.clone = function(recursive) {};


/**
 * @param {THREE.DirectionalLight} source
 * @return {THREE.DirectionalLight}
 */
THREE.DirectionalLight.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.Light}
 * @param {number=} skyColorHex
 * @param {number=} groundColorHex
 * @param {number=} intensity
 */
THREE.HemisphereLight = function(skyColorHex, groundColorHex, intensity) {};


/**
 * @type {THREE.Color}
 */
THREE.HemisphereLight.prototype.groundColor;


/**
 * @type {number}
 */
THREE.HemisphereLight.prototype.intensity;


/**
 * @param {boolean=} recursive
 * @return {THREE.HemisphereLight}
 */
THREE.HemisphereLight.prototype.clone = function(recursive) {};


/**
 * @param {THREE.HemisphereLight} source
 * @return {THREE.HemisphereLight}
 */
THREE.HemisphereLight.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.Light}
 * @param {number=} hex
 * @param {number=} intensity
 * @param {number=} distance
 * @param {number=} decay
 */
THREE.PointLight = function(hex, intensity, distance, decay) {};


/**
 * @type {number}
 */
THREE.PointLight.prototype.intensity;


/**
 * @type {number}
 */
THREE.PointLight.prototype.distance;


/**
 * @type {number}
 */
THREE.PointLight.prototype.decay;


/**
 * @type {THREE.LightShadow}
 */
THREE.PointLight.prototype.shadow;


/**
 * @param {boolean=} recursive
 * @return {THREE.PointLight}
 */
THREE.PointLight.prototype.clone = function(recursive) {};


/**
 * @param {THREE.PointLight} source
 * @return {THREE.PointLight}
 */
THREE.PointLight.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.Light}
 * @param {number=} hex
 * @param {number=} intensity
 * @param {number=} distance
 * @param {number=} angle
 * @param {number=} exponent
 * @param {number=} decay
 */
THREE.SpotLight = function(hex, intensity, distance, angle, exponent, decay) {};


/**
 * @type {THREE.Object3D}
 */
THREE.SpotLight.prototype.target;


/**
 * @type {number}
 */
THREE.SpotLight.prototype.intensity;


/**
 * @type {number}
 */
THREE.SpotLight.prototype.distance;


/**
 * @type {number}
 */
THREE.SpotLight.prototype.angle;


/**
 * @type {number}
 */
THREE.SpotLight.prototype.exponent;


/**
 * @type {number}
 */
THREE.SpotLight.prototype.decay;


/**
 * @type {THREE.LightShadow}
 */
THREE.SpotLight.prototype.shadow;


/**
 * @param {boolean=} recursive
 * @return {THREE.SpotLight}
 */
THREE.SpotLight.prototype.clone = function(recursive) {};


/**
 * @param {THREE.PointLight} source
 * @return {THREE.SpotLight}
 */
THREE.SpotLight.prototype.copy = function(source) {};


/**
 * @interface
 */
THREE.Progress = function() {};


/**
 * @constructor
 */
THREE.Loader = function() {};


/**
 * @type {THREE.() => void}
 */
THREE.Loader.prototype.onLoadStart;


/**
 * @type {THREE.() => void}
 */
THREE.Loader.prototype.onLoadProgress;


/**
 * @type {THREE.() => void}
 */
THREE.Loader.prototype.onLoadComplete;


/**
 * @type {string}
 */
THREE.Loader.prototype.crossOrigin;


/**
 * @param {string} url
 * @return {string}
 */
THREE.Loader.prototype.extractUrlBase = function(url) {};


/**
 * @param {Array<THREE.Material>} materials
 * @param {string} texturePath
 * @return {Array<THREE.Material>}
 */
THREE.Loader.prototype.initMaterials = function(materials, texturePath) {};


/**
 * @param {THREE.Material} m
 * @param {string} texturePath
 * @param {string=} crossOrigin
 * @return {boolean}
 */
THREE.Loader.prototype.createMaterial = function(m, texturePath, crossOrigin) {};


/**
 * @type {THREE.LoaderHandler}
 */
THREE.Loader.prototype.Handlers;


/**
 * @interface
 */
THREE.LoaderHandler = function() {};


/**
 * @constructor
 * @param {THREE.LoadingManager=} manager
 */
THREE.AnimationLoader = function(manager) {};


/**
 * @type {THREE.LoadingManager}
 */
THREE.AnimationLoader.prototype.manager;


/**
 * @param {string} url
 * @param {THREE.(animations: AnimationClip[]) => void} onLoad
 * @param {THREE.(event: any) => void=} onProgress
 * @param {THREE.(event: any) => void=} onError
 * @return {THREE.void}
 */
THREE.AnimationLoader.prototype.load = function(url, onLoad, onProgress, onError) {};


/**
 * @param {string} crossOrigin
 * @return {THREE.void}
 */
THREE.AnimationLoader.prototype.setCrossOrigin = function(crossOrigin) {};


/**
 * @param {*} json
 * @param {THREE.(animations: AnimationClip[])=>void} onLoad
 * @return {THREE.void}
 */
THREE.AnimationLoader.prototype.parse = function(json, onLoad) {};


/**
 * @constructor
 * @param {THREE.LoadingManager=} manager
 */
THREE.BinaryTextureLoader = function(manager) {};


/**
 * @type {THREE.LoadingManager}
 */
THREE.BinaryTextureLoader.prototype.manager;


/**
 * @param {string} url
 * @param {THREE.(dataTexture: DataTexture) => void} onLoad
 * @param {THREE.(event: any) => void=} onProgress
 * @param {THREE.(event: any) => void=} onError
 * @return {THREE.void}
 */
THREE.BinaryTextureLoader.prototype.load = function(url, onLoad, onProgress, onError) {};


/**
 * @param {string} crossOrigin
 * @return {THREE.void}
 */
THREE.BinaryTextureLoader.prototype.setCrossOrigin = function(crossOrigin) {};


/**
 * @constructor
 * @param {THREE.LoadingManager=} manager
 */
THREE.BufferGeometryLoader = function(manager) {};


/**
 * @type {THREE.LoadingManager}
 */
THREE.BufferGeometryLoader.prototype.manager;


/**
 * @param {string} url
 * @param {THREE.(bufferGeometry: BufferGeometry) => void} onLoad
 * @param {THREE.(event: any) => void=} onProgress
 * @param {THREE.(event: any) => void=} onError
 * @return {THREE.void}
 */
THREE.BufferGeometryLoader.prototype.load = function(url, onLoad, onProgress, onError) {};


/**
 * @param {string} crossOrigin
 * @return {THREE.void}
 */
THREE.BufferGeometryLoader.prototype.setCrossOrigin = function(crossOrigin) {};


/**
 * @param {*} json
 * @return {THREE.BufferGeometry}
 */
THREE.BufferGeometryLoader.prototype.parse = function(json) {};


/**
 * @type {THREE.Cache}
 */
THREE.Cache;


/**
 * @constructor
 * @param {THREE.LoadingManager=} manager
 */
THREE.CompressedTextureLoader = function(manager) {};


/**
 * @type {THREE.LoadingManager}
 */
THREE.CompressedTextureLoader.prototype.manager;


/**
 * @param {string} url
 * @param {THREE.(texture: CompressedTexture) => void} onLoad
 * @param {THREE.(event: any) => void=} onProgress
 * @param {THREE.(event: any) => void=} onError
 * @return {THREE.void}
 */
THREE.CompressedTextureLoader.prototype.load = function(url, onLoad, onProgress, onError) {};


/**
 * @param {string} crossOrigin
 * @return {THREE.void}
 */
THREE.CompressedTextureLoader.prototype.setCrossOrigin = function(crossOrigin) {};


/**
 * @constructor
 * @param {THREE.LoadingManager=} manager
 */
THREE.CubeTextureLoader = function(manager) {};


/**
 * @type {THREE.LoadingManager}
 */
THREE.CubeTextureLoader.prototype.manager;


/**
 * @param {string} url
 * @param {THREE.(texture: CubeTexture) => void} onLoad
 * @param {THREE.(event: any) => void=} onProgress
 * @param {THREE.(event: any) => void=} onError
 * @return {THREE.void}
 */
THREE.CubeTextureLoader.prototype.load = function(url, onLoad, onProgress, onError) {};


/**
 * @param {string} crossOrigin
 * @return {THREE.void}
 */
THREE.CubeTextureLoader.prototype.setCrossOrigin = function(crossOrigin) {};


/**
 * @constructor
 * @param {THREE.LoadingManager=} manager
 */
THREE.ImageLoader = function(manager) {};


/**
 * @type {THREE.Cache}
 */
THREE.ImageLoader.prototype.cache;


/**
 * @type {THREE.LoadingManager}
 */
THREE.ImageLoader.prototype.manager;


/**
 * @type {string}
 */
THREE.ImageLoader.prototype.crossOrigin;


/**
 * @param {string} url
 * @param {THREE.(image: HTMLImageElement) => void=} onLoad
 * @param {THREE.(event: any) => void=} onProgress
 * @param {THREE.(event: any) => void=} onError
 * @return {THREE.HTMLImageElement}
 */
THREE.ImageLoader.prototype.load = function(url, onLoad, onProgress, onError) {};


/**
 * @param {string} crossOrigin
 * @return {THREE.void}
 */
THREE.ImageLoader.prototype.setCrossOrigin = function(crossOrigin) {};


/**
 * @constructor
 * @extends {THREE.Loader}
 * @param {THREE.LoadingManager=} manager
 */
THREE.JSONLoader = function(manager) {};


/**
 * @type {THREE.LoadingManager}
 */
THREE.JSONLoader.prototype.manager;


/**
 * @type {boolean}
 */
THREE.JSONLoader.prototype.withCredentials;


/**
 * @param {string} url
 * @param {THREE.(geometry: Geometry, materials: Material[]) => void=} onLoad
 * @param {THREE.(event: any) => void=} onProgress
 * @param {THREE.(event: any) => void=} onError
 * @return {THREE.void}
 */
THREE.JSONLoader.prototype.load = function(url, onLoad, onProgress, onError) {};


/**
 * @param {string} crossOrigin
 * @return {THREE.void}
 */
THREE.JSONLoader.prototype.setCrossOrigin = function(crossOrigin) {};


/**
 * @param {string} value
 * @return {THREE.void}
 */
THREE.JSONLoader.prototype.setTexturePath = function(value) {};


/**
 * @param {*} json
 * @param {string=} texturePath
 * @return {{geometry: THREE.Geometry, materials: Array<THREE.Material>=}}
 */
THREE.JSONLoader.prototype.parse = function(json, texturePath) {};


/**
 * @constructor
 * @param {THREE.() => void=} onLoad
 * @param {THREE.(url: string, loaded: number, total: number) => void=} onProgress
 * @param {THREE.() => void=} onError
 */
THREE.LoadingManager = function(onLoad, onProgress, onError) {};


/**
 * @type {THREE.() => void}
 */
THREE.LoadingManager.prototype.onStart;


/**
 * @type {THREE.() => void}
 */
THREE.LoadingManager.prototype.onLoad;


/**
 * @type {THREE.(item: any, loaded: number, total: number) => void}
 */
THREE.LoadingManager.prototype.onProgress;


/**
 * @type {THREE.() => void}
 */
THREE.LoadingManager.prototype.onError;


/**
 * @param {string} url
 * @return {THREE.void}
 */
THREE.LoadingManager.prototype.itemStart = function(url) {};


/**
 * @param {string} url
 * @return {THREE.void}
 */
THREE.LoadingManager.prototype.itemEnd = function(url) {};


/**
 * @param {string} url
 * @return {THREE.void}
 */
THREE.LoadingManager.prototype.itemError = function(url) {};


/**
 * @constructor
 * @param {THREE.LoadingManager=} manager
 */
THREE.MaterialLoader = function(manager) {};


/**
 * @type {THREE.LoadingManager}
 */
THREE.MaterialLoader.prototype.manager;


/**
 * @type {THREE.{ [key:string]:Texture }}
 */
THREE.MaterialLoader.prototype.textures;


/**
 * @param {string} url
 * @param {THREE.(material: Material) => void} onLoad
 * @return {THREE.void}
 */
THREE.MaterialLoader.prototype.load = function(url, onLoad) {};


/**
 * @param {string} crossOrigin
 * @return {THREE.void}
 */
THREE.MaterialLoader.prototype.setCrossOrigin = function(crossOrigin) {};


/**
 * @param {THREE.{ [key:string]:Texture }} textures
 * @return {THREE.void}
 */
THREE.MaterialLoader.prototype.setTextures = function(textures) {};


/**
 * @param {string} name
 * @return {THREE.Texture}
 */
THREE.MaterialLoader.prototype.getTexture = function(name) {};


/**
 * @param {*} json
 * @return {THREE.Material}
 */
THREE.MaterialLoader.prototype.parse = function(json) {};


/**
 * @constructor
 * @param {THREE.LoadingManager=} manager
 */
THREE.ObjectLoader = function(manager) {};


/**
 * @type {THREE.LoadingManager}
 */
THREE.ObjectLoader.prototype.manager;


/**
 * @type {string}
 */
THREE.ObjectLoader.prototype.texturePass;


/**
 * @param {string} url
 * @param {THREE.(object: Object3D) => void=} onLoad
 * @return {THREE.void}
 */
THREE.ObjectLoader.prototype.load = function(url, onLoad) {};


/**
 * @param {string} value
 * @return {THREE.void}
 */
THREE.ObjectLoader.prototype.setTexturePath = function(value) {};


/**
 * @param {string} crossOrigin
 * @return {THREE.void}
 */
THREE.ObjectLoader.prototype.setCrossOrigin = function(crossOrigin) {};


/**
 * @param {*} json
 * @param {THREE.(object: Object3D) => void=} onLoad
 * @return {THREE.T}
 */
THREE.ObjectLoader.prototype.parse = function(json, onLoad) {};


/**
 * @param {*} json
 * @return {Array<*>}
 */
THREE.ObjectLoader.prototype.parseGeometries = function(json) {};


/**
 * @param {*} json
 * @param {Array<THREE.Texture>} textures
 * @return {Array<THREE.Material>}
 */
THREE.ObjectLoader.prototype.parseMaterials = function(json, textures) {};


/**
 * @param {*} json
 * @param {THREE.() => void} onLoad
 * @return {Array<*>}
 */
THREE.ObjectLoader.prototype.parseImages = function(json, onLoad) {};


/**
 * @param {*} json
 * @param {*} images
 * @return {Array<THREE.Texture>}
 */
THREE.ObjectLoader.prototype.parseTextures = function(json, images) {};


/**
 * @param {*} data
 * @param {Array<*>} geometries
 * @param {Array<THREE.Material>} materials
 * @return {THREE.T}
 */
THREE.ObjectLoader.prototype.parseObject = function(data, geometries, materials) {};


/**
 * @constructor
 * @param {THREE.LoadingManager=} manager
 */
THREE.TextureLoader = function(manager) {};


/**
 * @type {THREE.LoadingManager}
 */
THREE.TextureLoader.prototype.manager;


/**
 * @type {string}
 */
THREE.TextureLoader.prototype.crossOrigin;


/**
 * @param {string} url
 * @param {THREE.(texture: Texture) => void} onLoad
 * @return {THREE.Texture}
 */
THREE.TextureLoader.prototype.load = function(url, onLoad) {};


/**
 * @param {string} crossOrigin
 * @return {THREE.void}
 */
THREE.TextureLoader.prototype.setCrossOrigin = function(crossOrigin) {};


/**
 * @constructor
 * @param {THREE.LoadingManager=} manager
 */
THREE.XHRLoader = function(manager) {};


/**
 * @type {THREE.Cache}
 */
THREE.XHRLoader.prototype.cache;


/**
 * @type {THREE.LoadingManager}
 */
THREE.XHRLoader.prototype.manager;


/**
 * @type {string}
 */
THREE.XHRLoader.prototype.responseType;


/**
 * @type {string}
 */
THREE.XHRLoader.prototype.crossOrigin;


/**
 * @param {string} url
 * @param {THREE.(responseText: string) => void=} onLoad
 * @param {THREE.(event: any) => void=} onProgress
 * @param {THREE.(event: any) => void=} onError
 * @return {*}
 */
THREE.XHRLoader.prototype.load = function(url, onLoad, onProgress, onError) {};


/**
 * @param {string} responseType
 * @return {THREE.void}
 */
THREE.XHRLoader.prototype.setResponseType = function(responseType) {};


/**
 * @param {string} crossOrigin
 * @return {THREE.void}
 */
THREE.XHRLoader.prototype.setCrossOrigin = function(crossOrigin) {};


/**
 * @param {string} withCredentials
 * @return {THREE.void}
 */
THREE.XHRLoader.prototype.setWithCredentials = function(withCredentials) {};


/**
 * @interface
 */
THREE.MaterialParameters = function() {};


/**
 * @constructor
 */
THREE.Material = function() {};


/**
 * @type {number}
 */
THREE.Material.prototype.id;


/**
 * @type {string}
 */
THREE.Material.prototype.uuid;


/**
 * @type {string}
 */
THREE.Material.prototype.name;


/**
 * @type {string}
 */
THREE.Material.prototype.type;


/**
 * @type {THREE.Side}
 */
THREE.Material.prototype.side;


/**
 * @type {number}
 */
THREE.Material.prototype.opacity;


/**
 * @type {boolean}
 */
THREE.Material.prototype.transparent;


/**
 * @type {THREE.Blending}
 */
THREE.Material.prototype.blending;


/**
 * @type {THREE.BlendingDstFactor}
 */
THREE.Material.prototype.blendSrc;


/**
 * @type {THREE.BlendingSrcFactor}
 */
THREE.Material.prototype.blendDst;


/**
 * @type {THREE.BlendingEquation}
 */
THREE.Material.prototype.blendEquation;


/**
 * @type {number}
 */
THREE.Material.prototype.blendSrcAlpha;


/**
 * @type {number}
 */
THREE.Material.prototype.blendDstAlpha;


/**
 * @type {number}
 */
THREE.Material.prototype.blendEquationAlpha;


/**
 * @type {THREE.DepthModes}
 */
THREE.Material.prototype.depthFunc;


/**
 * @type {boolean}
 */
THREE.Material.prototype.depthTest;


/**
 * @type {boolean}
 */
THREE.Material.prototype.depthWrite;


/**
 * @type {boolean}
 */
THREE.Material.prototype.colorWrite;


/**
 * @type {*}
 */
THREE.Material.prototype.precision;


/**
 * @type {boolean}
 */
THREE.Material.prototype.polygonOffset;


/**
 * @type {number}
 */
THREE.Material.prototype.polygonOffsetFactor;


/**
 * @type {number}
 */
THREE.Material.prototype.polygonOffsetUnits;


/**
 * @type {number}
 */
THREE.Material.prototype.alphaTest;


/**
 * @type {number}
 */
THREE.Material.prototype.overdraw;


/**
 * @type {boolean}
 */
THREE.Material.prototype.visible;


/**
 * @type {boolean}
 */
THREE.Material.prototype.needsUpdate;


/**
 * @param {THREE.Object} values
 * @return {THREE.void}
 */
THREE.Material.prototype.setValues = function(values) {};


/**
 * @param {*=} meta
 * @return {*}
 */
THREE.Material.prototype.toJSON = function(meta) {};


/**
 * @param {THREE.Material=} source
 * @return {(THREE.Material|THREE.Material)}
 */
THREE.Material.prototype.clone = function(source) {};


/**
 * @return {THREE.void}
 */
THREE.Material.prototype.update = function() {};


/**
 * @return {THREE.void}
 */
THREE.Material.prototype.dispose = function() {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.Material.prototype.addEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.Material.prototype.hasEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.Material.prototype.removeEventListener = function(type, listener) {};


/**
 * @param {THREE.{ type: string; target: any; }} event
 * @return {THREE.void}
 */
THREE.Material.prototype.dispatchEvent = function(event) {};


/**
 * @interface
 */
THREE.LineBasicMaterialParameters = function() {};


/**
 * @constructor
 * @extends {THREE.Material}
 * @param {THREE.LineBasicMaterialParameters=} parameters
 */
THREE.LineBasicMaterial = function(parameters) {};


/**
 * @type {THREE.Color}
 */
THREE.LineBasicMaterial.prototype.color;


/**
 * @type {number}
 */
THREE.LineBasicMaterial.prototype.linewidth;


/**
 * @type {string}
 */
THREE.LineBasicMaterial.prototype.linecap;


/**
 * @type {string}
 */
THREE.LineBasicMaterial.prototype.linejoin;


/**
 * @type {THREE.Colors}
 */
THREE.LineBasicMaterial.prototype.vertexColors;


/**
 * @type {boolean}
 */
THREE.LineBasicMaterial.prototype.fog;


/**
 * @return {THREE.LineBasicMaterial}
 */
THREE.LineBasicMaterial.prototype.clone = function() {};


/**
 * @param {THREE.LineBasicMaterial} source
 * @return {THREE.LineBasicMaterial}
 */
THREE.LineBasicMaterial.prototype.copy = function(source) {};


/**
 * @interface
 */
THREE.LineDashedMaterialParameters = function() {};


/**
 * @constructor
 * @extends {THREE.Material}
 * @param {THREE.LineDashedMaterialParameters=} parameters
 */
THREE.LineDashedMaterial = function(parameters) {};


/**
 * @type {THREE.Color}
 */
THREE.LineDashedMaterial.prototype.color;


/**
 * @type {number}
 */
THREE.LineDashedMaterial.prototype.linewidth;


/**
 * @type {number}
 */
THREE.LineDashedMaterial.prototype.scale;


/**
 * @type {number}
 */
THREE.LineDashedMaterial.prototype.dashSize;


/**
 * @type {number}
 */
THREE.LineDashedMaterial.prototype.gapSize;


/**
 * @type {THREE.Colors}
 */
THREE.LineDashedMaterial.prototype.vertexColors;


/**
 * @type {boolean}
 */
THREE.LineDashedMaterial.prototype.fog;


/**
 * @return {THREE.LineDashedMaterial}
 */
THREE.LineDashedMaterial.prototype.clone = function() {};


/**
 * @param {THREE.LineDashedMaterial} source
 * @return {THREE.LineDashedMaterial}
 */
THREE.LineDashedMaterial.prototype.copy = function(source) {};


/**
 * @interface
 */
THREE.MeshBasicMaterialParameters = function() {};


/**
 * @constructor
 * @extends {THREE.Material}
 * @param {THREE.MeshBasicMaterialParameters=} parameters
 */
THREE.MeshBasicMaterial = function(parameters) {};


/**
 * @type {THREE.Color}
 */
THREE.MeshBasicMaterial.prototype.color;


/**
 * @type {THREE.Texture}
 */
THREE.MeshBasicMaterial.prototype.map;


/**
 * @type {THREE.Texture}
 */
THREE.MeshBasicMaterial.prototype.aoMap;


/**
 * @type {number}
 */
THREE.MeshBasicMaterial.prototype.aoMapIntensity;


/**
 * @type {THREE.Texture}
 */
THREE.MeshBasicMaterial.prototype.specularMap;


/**
 * @type {THREE.Texture}
 */
THREE.MeshBasicMaterial.prototype.alphaMap;


/**
 * @type {THREE.Texture}
 */
THREE.MeshBasicMaterial.prototype.envMap;


/**
 * @type {THREE.Combine}
 */
THREE.MeshBasicMaterial.prototype.combine;


/**
 * @type {number}
 */
THREE.MeshBasicMaterial.prototype.reflectivity;


/**
 * @type {number}
 */
THREE.MeshBasicMaterial.prototype.refractionRatio;


/**
 * @type {boolean}
 */
THREE.MeshBasicMaterial.prototype.fog;


/**
 * @type {THREE.Shading}
 */
THREE.MeshBasicMaterial.prototype.shading;


/**
 * @type {boolean}
 */
THREE.MeshBasicMaterial.prototype.wireframe;


/**
 * @type {number}
 */
THREE.MeshBasicMaterial.prototype.wireframeLinewidth;


/**
 * @type {string}
 */
THREE.MeshBasicMaterial.prototype.wireframeLinecap;


/**
 * @type {string}
 */
THREE.MeshBasicMaterial.prototype.wireframeLinejoin;


/**
 * @type {THREE.Colors}
 */
THREE.MeshBasicMaterial.prototype.vertexColors;


/**
 * @type {boolean}
 */
THREE.MeshBasicMaterial.prototype.skinning;


/**
 * @type {boolean}
 */
THREE.MeshBasicMaterial.prototype.morphTargets;


/**
 * @return {THREE.MeshBasicMaterial}
 */
THREE.MeshBasicMaterial.prototype.clone = function() {};


/**
 * @param {THREE.MeshBasicMaterial} source
 * @return {THREE.MeshBasicMaterial}
 */
THREE.MeshBasicMaterial.prototype.copy = function(source) {};


/**
 * @interface
 */
THREE.MeshDepthMaterialParameters = function() {};


/**
 * @constructor
 * @extends {THREE.Material}
 * @param {THREE.MeshDepthMaterialParameters=} parameters
 */
THREE.MeshDepthMaterial = function(parameters) {};


/**
 * @type {boolean}
 */
THREE.MeshDepthMaterial.prototype.wireframe;


/**
 * @type {number}
 */
THREE.MeshDepthMaterial.prototype.wireframeLinewidth;


/**
 * @return {THREE.MeshDepthMaterial}
 */
THREE.MeshDepthMaterial.prototype.clone = function() {};


/**
 * @param {THREE.MeshDepthMaterial} source
 * @return {THREE.MeshDepthMaterial}
 */
THREE.MeshDepthMaterial.prototype.copy = function(source) {};


/**
 * @interface
 */
THREE.MeshLambertMaterialParameters = function() {};


/**
 * @constructor
 * @extends {THREE.Material}
 * @param {THREE.MeshLambertMaterialParameters=} parameters
 */
THREE.MeshLambertMaterial = function(parameters) {};


/**
 * @type {THREE.Color}
 */
THREE.MeshLambertMaterial.prototype.color;


/**
 * @type {THREE.Color}
 */
THREE.MeshLambertMaterial.prototype.emissive;


/**
 * @type {THREE.Texture}
 */
THREE.MeshLambertMaterial.prototype.map;


/**
 * @type {THREE.Texture}
 */
THREE.MeshLambertMaterial.prototype.specularMap;


/**
 * @type {THREE.Texture}
 */
THREE.MeshLambertMaterial.prototype.alphaMap;


/**
 * @type {THREE.Texture}
 */
THREE.MeshLambertMaterial.prototype.envMap;


/**
 * @type {THREE.Combine}
 */
THREE.MeshLambertMaterial.prototype.combine;


/**
 * @type {number}
 */
THREE.MeshLambertMaterial.prototype.reflectivity;


/**
 * @type {number}
 */
THREE.MeshLambertMaterial.prototype.refractionRatio;


/**
 * @type {boolean}
 */
THREE.MeshLambertMaterial.prototype.fog;


/**
 * @type {boolean}
 */
THREE.MeshLambertMaterial.prototype.wireframe;


/**
 * @type {number}
 */
THREE.MeshLambertMaterial.prototype.wireframeLinewidth;


/**
 * @type {string}
 */
THREE.MeshLambertMaterial.prototype.wireframeLinecap;


/**
 * @type {string}
 */
THREE.MeshLambertMaterial.prototype.wireframeLinejoin;


/**
 * @type {THREE.Colors}
 */
THREE.MeshLambertMaterial.prototype.vertexColors;


/**
 * @type {boolean}
 */
THREE.MeshLambertMaterial.prototype.skinning;


/**
 * @type {boolean}
 */
THREE.MeshLambertMaterial.prototype.morphTargets;


/**
 * @type {boolean}
 */
THREE.MeshLambertMaterial.prototype.morphNormals;


/**
 * @return {THREE.MeshLambertMaterial}
 */
THREE.MeshLambertMaterial.prototype.clone = function() {};


/**
 * @param {THREE.MeshLambertMaterial} source
 * @return {THREE.MeshLambertMaterial}
 */
THREE.MeshLambertMaterial.prototype.copy = function(source) {};


/**
 * @interface
 */
THREE.MeshNormalMaterialParameters = function() {};


/**
 * @constructor
 * @extends {THREE.Material}
 * @param {THREE.MeshNormalMaterialParameters=} parameters
 */
THREE.MeshNormalMaterial = function(parameters) {};


/**
 * @type {boolean}
 */
THREE.MeshNormalMaterial.prototype.wireframe;


/**
 * @type {number}
 */
THREE.MeshNormalMaterial.prototype.wireframeLinewidth;


/**
 * @type {boolean}
 */
THREE.MeshNormalMaterial.prototype.morphTargets;


/**
 * @return {THREE.MeshNormalMaterial}
 */
THREE.MeshNormalMaterial.prototype.clone = function() {};


/**
 * @param {THREE.MeshNormalMaterial} source
 * @return {THREE.MeshNormalMaterial}
 */
THREE.MeshNormalMaterial.prototype.copy = function(source) {};


/**
 * @interface
 */
THREE.MeshPhongMaterialParameters = function() {};


/**
 * @constructor
 * @extends {THREE.Material}
 * @param {THREE.MeshPhongMaterialParameters=} parameters
 */
THREE.MeshPhongMaterial = function(parameters) {};


/**
 * @type {THREE.Color}
 */
THREE.MeshPhongMaterial.prototype.color;


/**
 * @type {THREE.Color}
 */
THREE.MeshPhongMaterial.prototype.emissive;


/**
 * @type {THREE.Color}
 */
THREE.MeshPhongMaterial.prototype.specular;


/**
 * @type {number}
 */
THREE.MeshPhongMaterial.prototype.shininess;


/**
 * @type {boolean}
 */
THREE.MeshPhongMaterial.prototype.metal;


/**
 * @type {THREE.Texture}
 */
THREE.MeshPhongMaterial.prototype.map;


/**
 * @type {THREE.Texture}
 */
THREE.MeshPhongMaterial.prototype.lightMap;


/**
 * @type {number}
 */
THREE.MeshPhongMaterial.prototype.lightMapIntensity;


/**
 * @type {THREE.Texture}
 */
THREE.MeshPhongMaterial.prototype.aoMap;


/**
 * @type {number}
 */
THREE.MeshPhongMaterial.prototype.aoMapIntensity;


/**
 * @type {THREE.Texture}
 */
THREE.MeshPhongMaterial.prototype.emissiveMap;


/**
 * @type {THREE.Texture}
 */
THREE.MeshPhongMaterial.prototype.bumpMap;


/**
 * @type {number}
 */
THREE.MeshPhongMaterial.prototype.bumpScale;


/**
 * @type {THREE.Texture}
 */
THREE.MeshPhongMaterial.prototype.normalMap;


/**
 * @type {THREE.Vector2}
 */
THREE.MeshPhongMaterial.prototype.normalScale;


/**
 * @type {THREE.Texture}
 */
THREE.MeshPhongMaterial.prototype.displacementMap;


/**
 * @type {number}
 */
THREE.MeshPhongMaterial.prototype.displacementScale;


/**
 * @type {number}
 */
THREE.MeshPhongMaterial.prototype.displacementBias;


/**
 * @type {THREE.Texture}
 */
THREE.MeshPhongMaterial.prototype.specularMap;


/**
 * @type {THREE.Texture}
 */
THREE.MeshPhongMaterial.prototype.alphaMap;


/**
 * @type {THREE.Texture}
 */
THREE.MeshPhongMaterial.prototype.envMap;


/**
 * @type {THREE.Combine}
 */
THREE.MeshPhongMaterial.prototype.combine;


/**
 * @type {number}
 */
THREE.MeshPhongMaterial.prototype.reflectivity;


/**
 * @type {number}
 */
THREE.MeshPhongMaterial.prototype.refractionRatio;


/**
 * @type {boolean}
 */
THREE.MeshPhongMaterial.prototype.fog;


/**
 * @type {THREE.Shading}
 */
THREE.MeshPhongMaterial.prototype.shading;


/**
 * @type {boolean}
 */
THREE.MeshPhongMaterial.prototype.wireframe;


/**
 * @type {number}
 */
THREE.MeshPhongMaterial.prototype.wireframeLinewidth;


/**
 * @type {string}
 */
THREE.MeshPhongMaterial.prototype.wireframeLinecap;


/**
 * @type {string}
 */
THREE.MeshPhongMaterial.prototype.wireframeLinejoin;


/**
 * @type {THREE.Colors}
 */
THREE.MeshPhongMaterial.prototype.vertexColors;


/**
 * @type {boolean}
 */
THREE.MeshPhongMaterial.prototype.skinning;


/**
 * @type {boolean}
 */
THREE.MeshPhongMaterial.prototype.morphTargets;


/**
 * @type {boolean}
 */
THREE.MeshPhongMaterial.prototype.morphNormals;


/**
 * @return {THREE.MeshPhongMaterial}
 */
THREE.MeshPhongMaterial.prototype.clone = function() {};


/**
 * @param {THREE.MeshPhongMaterial} source
 * @return {THREE.MeshPhongMaterial}
 */
THREE.MeshPhongMaterial.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.Material}
 * @param {Array<THREE.Material>=} materials
 */
THREE.MultiMaterial = function(materials) {};


/**
 * @type {Array<THREE.Material>}
 */
THREE.MultiMaterial.prototype.materials;


/**
 * @return {*}
 */
THREE.MultiMaterial.prototype.toJSON = function() {};


/**
 * @return {THREE.MultiMaterial}
 */
THREE.MultiMaterial.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.MultiMaterial}
 */
THREE.MeshFaceMaterial = function() {};


/**
 * @interface
 */
THREE.PointsMaterialParameters = function() {};


/**
 * @constructor
 * @extends {THREE.Material}
 * @param {THREE.PointsMaterialParameters=} parameters
 */
THREE.PointsMaterial = function(parameters) {};


/**
 * @type {THREE.Color}
 */
THREE.PointsMaterial.prototype.color;


/**
 * @type {THREE.Texture}
 */
THREE.PointsMaterial.prototype.map;


/**
 * @type {number}
 */
THREE.PointsMaterial.prototype.size;


/**
 * @type {boolean}
 */
THREE.PointsMaterial.prototype.sizeAttenuation;


/**
 * @type {boolean}
 */
THREE.PointsMaterial.prototype.vertexColors;


/**
 * @type {boolean}
 */
THREE.PointsMaterial.prototype.fog;


/**
 * @return {THREE.PointsMaterial}
 */
THREE.PointsMaterial.prototype.clone = function() {};


/**
 * @param {THREE.PointsMaterial} source
 * @return {THREE.PointsMaterial}
 */
THREE.PointsMaterial.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.ShaderMaterial}
 * @param {THREE.ShaderMaterialParameters=} parameters
 */
THREE.RawShaderMaterial = function(parameters) {};


/**
 * @interface
 */
THREE.ShaderMaterialParameters = function() {};


/**
 * @constructor
 * @extends {THREE.Material}
 * @param {THREE.ShaderMaterialParameters=} parameters
 */
THREE.ShaderMaterial = function(parameters) {};


/**
 * @type {*}
 */
THREE.ShaderMaterial.prototype.defines;


/**
 * @type {*}
 */
THREE.ShaderMaterial.prototype.uniforms;


/**
 * @type {string}
 */
THREE.ShaderMaterial.prototype.vertexShader;


/**
 * @type {string}
 */
THREE.ShaderMaterial.prototype.fragmentShader;


/**
 * @type {THREE.Shading}
 */
THREE.ShaderMaterial.prototype.shading;


/**
 * @type {number}
 */
THREE.ShaderMaterial.prototype.linewidth;


/**
 * @type {boolean}
 */
THREE.ShaderMaterial.prototype.wireframe;


/**
 * @type {number}
 */
THREE.ShaderMaterial.prototype.wireframeLinewidth;


/**
 * @type {boolean}
 */
THREE.ShaderMaterial.prototype.fog;


/**
 * @type {boolean}
 */
THREE.ShaderMaterial.prototype.lights;


/**
 * @type {THREE.Colors}
 */
THREE.ShaderMaterial.prototype.vertexColors;


/**
 * @type {boolean}
 */
THREE.ShaderMaterial.prototype.skinning;


/**
 * @type {boolean}
 */
THREE.ShaderMaterial.prototype.morphTargets;


/**
 * @type {boolean}
 */
THREE.ShaderMaterial.prototype.morphNormals;


/**
 * @type {boolean}
 */
THREE.ShaderMaterial.prototype.derivatives;


/**
 * @type {*}
 */
THREE.ShaderMaterial.prototype.defaultAttributeValues;


/**
 * @type {string}
 */
THREE.ShaderMaterial.prototype.index0AttributeName;


/**
 * @return {THREE.ShaderMaterial}
 */
THREE.ShaderMaterial.prototype.clone = function() {};


/**
 * @param {THREE.ShaderMaterial} source
 * @return {THREE.ShaderMaterial}
 */
THREE.ShaderMaterial.prototype.copy = function(source) {};


/**
 * @param {*} meta
 * @return {*}
 */
THREE.ShaderMaterial.prototype.toJSON = function(meta) {};


/**
 * @interface
 */
THREE.SpriteMaterialParameters = function() {};


/**
 * @constructor
 * @extends {THREE.Material}
 * @param {THREE.SpriteMaterialParameters=} parameters
 */
THREE.SpriteMaterial = function(parameters) {};


/**
 * @type {THREE.Color}
 */
THREE.SpriteMaterial.prototype.color;


/**
 * @type {THREE.Texture}
 */
THREE.SpriteMaterial.prototype.map;


/**
 * @type {number}
 */
THREE.SpriteMaterial.prototype.rotation;


/**
 * @type {boolean}
 */
THREE.SpriteMaterial.prototype.fog;


/**
 * @return {THREE.SpriteMaterial}
 */
THREE.SpriteMaterial.prototype.clone = function() {};


/**
 * @param {THREE.SpriteMaterial} source
 * @return {THREE.SpriteMaterial}
 */
THREE.SpriteMaterial.prototype.copy = function(source) {};


/**
 * @constructor
 * @param {THREE.Vector2=} min
 * @param {THREE.Vector2=} max
 */
THREE.Box2 = function(min, max) {};


/**
 * @type {THREE.Vector2}
 */
THREE.Box2.prototype.max;


/**
 * @type {THREE.Vector2}
 */
THREE.Box2.prototype.min;


/**
 * @param {THREE.Vector2} min
 * @param {THREE.Vector2} max
 * @return {THREE.Box2}
 */
THREE.Box2.prototype.set = function(min, max) {};


/**
 * @param {Array<THREE.Vector2>} points
 * @return {THREE.Box2}
 */
THREE.Box2.prototype.setFromPoints = function(points) {};


/**
 * @param {THREE.Vector2} center
 * @param {THREE.Vector2} size
 * @return {THREE.Box2}
 */
THREE.Box2.prototype.setFromCenterAndSize = function(center, size) {};


/**
 * @return {THREE.Box2}
 */
THREE.Box2.prototype.clone = function() {};


/**
 * @param {THREE.Box2} box
 * @return {THREE.Box2}
 */
THREE.Box2.prototype.copy = function(box) {};


/**
 * @return {THREE.Box2}
 */
THREE.Box2.prototype.makeEmpty = function() {};


/**
 * @return {boolean}
 */
THREE.Box2.prototype.empty = function() {};


/**
 * @param {THREE.Vector2=} optionalTarget
 * @return {THREE.Vector2}
 */
THREE.Box2.prototype.center = function(optionalTarget) {};


/**
 * @param {THREE.Vector2=} optionalTarget
 * @return {THREE.Vector2}
 */
THREE.Box2.prototype.size = function(optionalTarget) {};


/**
 * @param {THREE.Vector2} point
 * @return {THREE.Box2}
 */
THREE.Box2.prototype.expandByPoint = function(point) {};


/**
 * @param {THREE.Vector2} vector
 * @return {THREE.Box2}
 */
THREE.Box2.prototype.expandByVector = function(vector) {};


/**
 * @param {number} scalar
 * @return {THREE.Box2}
 */
THREE.Box2.prototype.expandByScalar = function(scalar) {};


/**
 * @param {THREE.Vector2} point
 * @return {boolean}
 */
THREE.Box2.prototype.containsPoint = function(point) {};


/**
 * @param {THREE.Box2} box
 * @return {boolean}
 */
THREE.Box2.prototype.containsBox = function(box) {};


/**
 * @param {THREE.Vector2} point
 * @return {THREE.Vector2}
 */
THREE.Box2.prototype.getParameter = function(point) {};


/**
 * @param {THREE.Box2} box
 * @return {boolean}
 */
THREE.Box2.prototype.isIntersectionBox = function(box) {};


/**
 * @param {THREE.Vector2} point
 * @param {THREE.Vector2=} optionalTarget
 * @return {THREE.Vector2}
 */
THREE.Box2.prototype.clampPoint = function(point, optionalTarget) {};


/**
 * @param {THREE.Vector2} point
 * @return {number}
 */
THREE.Box2.prototype.distanceToPoint = function(point) {};


/**
 * @param {THREE.Box2} box
 * @return {THREE.Box2}
 */
THREE.Box2.prototype.intersect = function(box) {};


/**
 * @param {THREE.Box2} box
 * @return {THREE.Box2}
 */
THREE.Box2.prototype.union = function(box) {};


/**
 * @param {THREE.Vector2} offset
 * @return {THREE.Box2}
 */
THREE.Box2.prototype.translate = function(offset) {};


/**
 * @param {THREE.Box2} box
 * @return {boolean}
 */
THREE.Box2.prototype.equals = function(box) {};


/**
 * @constructor
 * @param {THREE.Vector3=} min
 * @param {THREE.Vector3=} max
 */
THREE.Box3 = function(min, max) {};


/**
 * @type {THREE.Vector3}
 */
THREE.Box3.prototype.max;


/**
 * @type {THREE.Vector3}
 */
THREE.Box3.prototype.min;


/**
 * @param {THREE.Vector3} min
 * @param {THREE.Vector3} max
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.set = function(min, max) {};


/**
 * @param {Array<THREE.Vector3>} points
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.setFromPoints = function(points) {};


/**
 * @param {THREE.Vector3} center
 * @param {THREE.Vector3} size
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.setFromCenterAndSize = function(center, size) {};


/**
 * @param {THREE.Object3D} object
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.setFromObject = function(object) {};


/**
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.clone = function() {};


/**
 * @param {THREE.Box3} box
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.copy = function(box) {};


/**
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.makeEmpty = function() {};


/**
 * @return {boolean}
 */
THREE.Box3.prototype.empty = function() {};


/**
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Box3.prototype.center = function(optionalTarget) {};


/**
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Box3.prototype.size = function(optionalTarget) {};


/**
 * @param {THREE.Vector3} point
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.expandByPoint = function(point) {};


/**
 * @param {THREE.Vector3} vector
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.expandByVector = function(vector) {};


/**
 * @param {number} scalar
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.expandByScalar = function(scalar) {};


/**
 * @param {THREE.Vector3} point
 * @return {boolean}
 */
THREE.Box3.prototype.containsPoint = function(point) {};


/**
 * @param {THREE.Box3} box
 * @return {boolean}
 */
THREE.Box3.prototype.containsBox = function(box) {};


/**
 * @param {THREE.Vector3} point
 * @return {THREE.Vector3}
 */
THREE.Box3.prototype.getParameter = function(point) {};


/**
 * @param {THREE.Box3} box
 * @return {boolean}
 */
THREE.Box3.prototype.isIntersectionBox = function(box) {};


/**
 * @param {THREE.Vector3} point
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Box3.prototype.clampPoint = function(point, optionalTarget) {};


/**
 * @param {THREE.Vector3} point
 * @return {number}
 */
THREE.Box3.prototype.distanceToPoint = function(point) {};


/**
 * @param {THREE.Sphere=} optionalTarget
 * @return {THREE.Sphere}
 */
THREE.Box3.prototype.getBoundingSphere = function(optionalTarget) {};


/**
 * @param {THREE.Box3} box
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.intersect = function(box) {};


/**
 * @param {THREE.Box3} box
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.union = function(box) {};


/**
 * @param {THREE.Matrix4} matrix
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.applyMatrix4 = function(matrix) {};


/**
 * @param {THREE.Vector3} offset
 * @return {THREE.Box3}
 */
THREE.Box3.prototype.translate = function(offset) {};


/**
 * @param {THREE.Box3} box
 * @return {boolean}
 */
THREE.Box3.prototype.equals = function(box) {};


/**
 * @interface
 */
THREE.HSL = function() {};


/**
 * @constructor
 * @param {(THREE.Color|string|number|number)=} color
 * @param {number} g
 * @param {number} b
 */
THREE.Color = function(color, g, b) {};


/**
 * @type {number}
 */
THREE.Color.prototype.r;


/**
 * @type {number}
 */
THREE.Color.prototype.g;


/**
 * @type {number}
 */
THREE.Color.prototype.b;


/**
 * @param {(THREE.Color|number|string)} color
 * @return {(THREE.Color|THREE.Color|THREE.Color)}
 */
THREE.Color.prototype.set = function(color) {};


/**
 * @param {number} hex
 * @return {THREE.Color}
 */
THREE.Color.prototype.setHex = function(hex) {};


/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {THREE.Color}
 */
THREE.Color.prototype.setRGB = function(r, g, b) {};


/**
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @return {THREE.Color}
 */
THREE.Color.prototype.setHSL = function(h, s, l) {};


/**
 * @param {string} style
 * @return {THREE.Color}
 */
THREE.Color.prototype.setStyle = function(style) {};


/**
 * @return {THREE.Color}
 */
THREE.Color.prototype.clone = function() {};


/**
 * @param {THREE.Color} color
 * @return {THREE.Color}
 */
THREE.Color.prototype.copy = function(color) {};


/**
 * @param {THREE.Color} color
 * @param {number=} gammaFactor
 * @return {THREE.Color}
 */
THREE.Color.prototype.copyGammaToLinear = function(color, gammaFactor) {};


/**
 * @param {THREE.Color} color
 * @param {number=} gammaFactor
 * @return {THREE.Color}
 */
THREE.Color.prototype.copyLinearToGamma = function(color, gammaFactor) {};


/**
 * @return {THREE.Color}
 */
THREE.Color.prototype.convertGammaToLinear = function() {};


/**
 * @return {THREE.Color}
 */
THREE.Color.prototype.convertLinearToGamma = function() {};


/**
 * @return {number}
 */
THREE.Color.prototype.getHex = function() {};


/**
 * @return {string}
 */
THREE.Color.prototype.getHexString = function() {};


/**
 * @return {THREE.HSL}
 */
THREE.Color.prototype.getHSL = function() {};


/**
 * @return {string}
 */
THREE.Color.prototype.getStyle = function() {};


/**
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @return {THREE.Color}
 */
THREE.Color.prototype.offsetHSL = function(h, s, l) {};


/**
 * @param {THREE.Color} color
 * @return {THREE.Color}
 */
THREE.Color.prototype.add = function(color) {};


/**
 * @param {THREE.Color} color1
 * @param {THREE.Color} color2
 * @return {THREE.Color}
 */
THREE.Color.prototype.addColors = function(color1, color2) {};


/**
 * @param {number} s
 * @return {THREE.Color}
 */
THREE.Color.prototype.addScalar = function(s) {};


/**
 * @param {THREE.Color} color
 * @return {THREE.Color}
 */
THREE.Color.prototype.multiply = function(color) {};


/**
 * @param {number} s
 * @return {THREE.Color}
 */
THREE.Color.prototype.multiplyScalar = function(s) {};


/**
 * @param {THREE.Color} color
 * @param {number} alpha
 * @return {THREE.Color}
 */
THREE.Color.prototype.lerp = function(color, alpha) {};


/**
 * @param {THREE.Color} color
 * @return {boolean}
 */
THREE.Color.prototype.equals = function(color) {};


/**
 * @param {Array<number>} rgb
 * @param {number=} offset
 * @return {THREE.Color}
 */
THREE.Color.prototype.fromArray = function(rgb, offset) {};


/**
 * @param {Array<number>=} array
 * @param {number=} offset
 * @return {Array<number>}
 */
THREE.Color.prototype.toArray = function(array, offset) {};


/**
 * @constructor
 */
THREE.ColorKeywords = function() {};


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.aliceblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.antiquewhite;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.aqua;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.aquamarine;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.azure;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.beige;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.bisque;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.black;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.blanchedalmond;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.blue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.blueviolet;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.brown;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.burlywood;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.cadetblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.chartreuse;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.chocolate;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.coral;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.cornflowerblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.cornsilk;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.crimson;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.cyan;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkcyan;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkgoldenrod;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkgray;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkgreen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkgrey;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkkhaki;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkmagenta;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkolivegreen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkorange;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkorchid;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkred;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darksalmon;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkseagreen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkslateblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkslategray;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkslategrey;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkturquoise;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.darkviolet;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.deeppink;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.deepskyblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.dimgray;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.dimgrey;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.dodgerblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.firebrick;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.floralwhite;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.forestgreen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.fuchsia;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.gainsboro;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.ghostwhite;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.gold;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.goldenrod;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.gray;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.green;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.greenyellow;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.grey;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.honeydew;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.hotpink;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.indianred;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.indigo;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.ivory;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.khaki;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lavender;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lavenderblush;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lawngreen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lemonchiffon;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightcoral;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightcyan;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightgoldenrodyellow;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightgray;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightgreen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightgrey;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightpink;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightsalmon;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightseagreen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightskyblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightslategray;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightslategrey;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightsteelblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lightyellow;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.lime;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.limegreen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.linen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.magenta;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.maroon;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.mediumaquamarine;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.mediumblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.mediumorchid;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.mediumpurple;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.mediumseagreen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.mediumslateblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.mediumspringgreen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.mediumturquoise;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.mediumvioletred;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.midnightblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.mintcream;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.mistyrose;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.moccasin;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.navajowhite;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.navy;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.oldlace;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.olive;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.olivedrab;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.orange;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.orangered;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.orchid;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.palegoldenrod;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.palegreen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.paleturquoise;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.palevioletred;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.papayawhip;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.peachpuff;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.peru;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.pink;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.plum;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.powderblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.purple;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.red;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.rosybrown;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.royalblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.saddlebrown;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.salmon;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.sandybrown;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.seagreen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.seashell;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.sienna;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.silver;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.skyblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.slateblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.slategray;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.slategrey;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.snow;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.springgreen;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.steelblue;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.tan;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.teal;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.thistle;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.tomato;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.turquoise;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.violet;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.wheat;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.white;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.whitesmoke;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.yellow;


/**
 * @type {number}
 */
THREE.ColorKeywords.prototype.yellowgreen;


/**
 * @constructor
 * @param {number=} x
 * @param {number=} y
 * @param {number=} z
 * @param {string=} order
 */
THREE.Euler = function(x, y, z, order) {};


/**
 * @type {number}
 */
THREE.Euler.prototype.x;


/**
 * @type {number}
 */
THREE.Euler.prototype.y;


/**
 * @type {number}
 */
THREE.Euler.prototype.z;


/**
 * @type {string}
 */
THREE.Euler.prototype.order;


/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {string=} order
 * @return {THREE.Euler}
 */
THREE.Euler.prototype.set = function(x, y, z, order) {};


/**
 * @return {THREE.Euler}
 */
THREE.Euler.prototype.clone = function() {};


/**
 * @param {THREE.Euler} euler
 * @return {THREE.Euler}
 */
THREE.Euler.prototype.copy = function(euler) {};


/**
 * @param {THREE.Matrix4} m
 * @param {string=} order
 * @param {boolean=} update
 * @return {THREE.Euler}
 */
THREE.Euler.prototype.setFromRotationMatrix = function(m, order, update) {};


/**
 * @param {THREE.Quaternion} q
 * @param {string=} order
 * @param {boolean=} update
 * @return {THREE.Euler}
 */
THREE.Euler.prototype.setFromQuaternion = function(q, order, update) {};


/**
 * @param {THREE.Vector3} v
 * @param {string=} order
 * @return {THREE.Euler}
 */
THREE.Euler.prototype.setFromVector3 = function(v, order) {};


/**
 * @param {string} newOrder
 * @return {THREE.Euler}
 */
THREE.Euler.prototype.reorder = function(newOrder) {};


/**
 * @param {THREE.Euler} euler
 * @return {boolean}
 */
THREE.Euler.prototype.equals = function(euler) {};


/**
 * @param {Array<*>} xyzo
 * @return {THREE.Euler}
 */
THREE.Euler.prototype.fromArray = function(xyzo) {};


/**
 * @param {Array<number>=} array
 * @param {number=} offset
 * @return {Array<number>}
 */
THREE.Euler.prototype.toArray = function(array, offset) {};


/**
 * @param {THREE.Vector3=} optionalResult
 * @return {THREE.Vector3}
 */
THREE.Euler.prototype.toVector3 = function(optionalResult) {};


/**
 * @type {THREE.() => void}
 */
THREE.Euler.prototype.onChange;


/**
 * @constructor
 * @param {THREE.Plane=} p0
 * @param {THREE.Plane=} p1
 * @param {THREE.Plane=} p2
 * @param {THREE.Plane=} p3
 * @param {THREE.Plane=} p4
 * @param {THREE.Plane=} p5
 */
THREE.Frustum = function(p0, p1, p2, p3, p4, p5) {};


/**
 * @type {Array<THREE.Plane>}
 */
THREE.Frustum.prototype.planes;


/**
 * @param {number=} p0
 * @param {number=} p1
 * @param {number=} p2
 * @param {number=} p3
 * @param {number=} p4
 * @param {number=} p5
 * @return {THREE.Frustum}
 */
THREE.Frustum.prototype.set = function(p0, p1, p2, p3, p4, p5) {};


/**
 * @return {THREE.Frustum}
 */
THREE.Frustum.prototype.clone = function() {};


/**
 * @param {THREE.Frustum} frustum
 * @return {THREE.Frustum}
 */
THREE.Frustum.prototype.copy = function(frustum) {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.Frustum}
 */
THREE.Frustum.prototype.setFromMatrix = function(m) {};


/**
 * @param {THREE.Object3D} object
 * @return {boolean}
 */
THREE.Frustum.prototype.intersectsObject = function(object) {};


/**
 * @param {THREE.Sphere} sphere
 * @return {boolean}
 */
THREE.Frustum.prototype.intersectsSphere = function(sphere) {};


/**
 * @param {THREE.Box3} box
 * @return {boolean}
 */
THREE.Frustum.prototype.intersectsBox = function(box) {};


/**
 * @param {THREE.Vector3} point
 * @return {boolean}
 */
THREE.Frustum.prototype.containsPoint = function(point) {};


/**
 * @constructor
 * @param {THREE.Vector3=} start
 * @param {THREE.Vector3=} end
 */
THREE.Line3 = function(start, end) {};


/**
 * @type {THREE.Vector3}
 */
THREE.Line3.prototype.start;


/**
 * @type {THREE.Vector3}
 */
THREE.Line3.prototype.end;


/**
 * @param {THREE.Vector3=} start
 * @param {THREE.Vector3=} end
 * @return {THREE.Line3}
 */
THREE.Line3.prototype.set = function(start, end) {};


/**
 * @return {THREE.Line3}
 */
THREE.Line3.prototype.clone = function() {};


/**
 * @param {THREE.Line3} line
 * @return {THREE.Line3}
 */
THREE.Line3.prototype.copy = function(line) {};


/**
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Line3.prototype.center = function(optionalTarget) {};


/**
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Line3.prototype.delta = function(optionalTarget) {};


/**
 * @return {number}
 */
THREE.Line3.prototype.distanceSq = function() {};


/**
 * @return {number}
 */
THREE.Line3.prototype.distance = function() {};


/**
 * @param {number} t
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Line3.prototype.at = function(t, optionalTarget) {};


/**
 * @param {THREE.Vector3} point
 * @param {boolean=} clampToLine
 * @return {number}
 */
THREE.Line3.prototype.closestPointToPointParameter = function(point, clampToLine) {};


/**
 * @param {THREE.Vector3} point
 * @param {boolean=} clampToLine
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Line3.prototype.closestPointToPoint = function(point, clampToLine, optionalTarget) {};


/**
 * @param {THREE.Matrix4} matrix
 * @return {THREE.Line3}
 */
THREE.Line3.prototype.applyMatrix4 = function(matrix) {};


/**
 * @param {THREE.Line3} line
 * @return {boolean}
 */
THREE.Line3.prototype.equals = function(line) {};


/**
 * @type {THREE.Math}
 */
THREE.Math;


/**
 * @interface
 */
THREE.Matrix = function() {};


/**
 * @constructor
 * @extends {THREE.Matrix}
 * @param {number} n11
 * @param {number} n12
 * @param {number} n13
 * @param {number} n21
 * @param {number} n22
 * @param {number} n23
 * @param {number} n31
 * @param {number} n32
 * @param {number} n33
 */
THREE.Matrix3 = function(n11, n12, n13, n21, n22, n23, n31, n32, n33) {};


/**
 * @type {THREE.Float32Array}
 */
THREE.Matrix3.prototype.elements;


/**
 * @param {number} n11
 * @param {number} n12
 * @param {number} n13
 * @param {number} n21
 * @param {number} n22
 * @param {number} n23
 * @param {number} n31
 * @param {number} n32
 * @param {number} n33
 * @return {THREE.Matrix3}
 */
THREE.Matrix3.prototype.set = function(n11, n12, n13, n21, n22, n23, n31, n32, n33) {};


/**
 * @return {THREE.Matrix3}
 */
THREE.Matrix3.prototype.identity = function() {};


/**
 * @return {THREE.Matrix3}
 */
THREE.Matrix3.prototype.clone = function() {};


/**
 * @param {THREE.Matrix3} m
 * @return {THREE.Matrix3}
 */
THREE.Matrix3.prototype.copy = function(m) {};


/**
 * @param {Array<number>} array
 * @param {number=} offset
 * @param {number=} length
 * @return {Array<number>}
 */
THREE.Matrix3.prototype.applyToVector3Array = function(array, offset, length) {};


/**
 * @param {THREE.BufferAttribute} buffer
 * @param {number=} offset
 * @param {number=} length
 * @return {THREE.BufferAttribute}
 */
THREE.Matrix3.prototype.applyToBuffer = function(buffer, offset, length) {};


/**
 * @param {number} s
 * @return {THREE.Matrix3}
 */
THREE.Matrix3.prototype.multiplyScalar = function(s) {};


/**
 * @return {number}
 */
THREE.Matrix3.prototype.determinant = function() {};


/**
 * @param {(THREE.Matrix3|THREE.Matrix4)} matrix
 * @param {(boolean|boolean)=} throwOnInvertible
 * @return {(THREE.Matrix3|THREE.Matrix3)}
 */
THREE.Matrix3.prototype.getInverse = function(matrix, throwOnInvertible) {};


/**
 * @return {THREE.Matrix3}
 */
THREE.Matrix3.prototype.transpose = function() {};


/**
 * @param {Array<number>} array
 * @param {number} offset
 * @return {Array<number>}
 */
THREE.Matrix3.prototype.flattenToArrayOffset = function(array, offset) {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.Matrix3}
 */
THREE.Matrix3.prototype.getNormalMatrix = function(m) {};


/**
 * @param {Array<number>} r
 * @return {Array<number>}
 */
THREE.Matrix3.prototype.transposeIntoArray = function(r) {};


/**
 * @param {Array<number>} array
 * @return {THREE.Matrix3}
 */
THREE.Matrix3.prototype.fromArray = function(array) {};


/**
 * @return {Array<number>}
 */
THREE.Matrix3.prototype.toArray = function() {};


/**
 * @constructor
 * @extends {THREE.Matrix}
 * @param {number=} n11
 * @param {number=} n12
 * @param {number=} n13
 * @param {number=} n14
 * @param {number=} n21
 * @param {number=} n22
 * @param {number=} n23
 * @param {number=} n24
 * @param {number=} n31
 * @param {number=} n32
 * @param {number=} n33
 * @param {number=} n34
 * @param {number=} n41
 * @param {number=} n42
 * @param {number=} n43
 * @param {number=} n44
 */
THREE.Matrix4 = function(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {};


/**
 * @type {THREE.Float32Array}
 */
THREE.Matrix4.prototype.elements;


/**
 * @param {number} n11
 * @param {number} n12
 * @param {number} n13
 * @param {number} n14
 * @param {number} n21
 * @param {number} n22
 * @param {number} n23
 * @param {number} n24
 * @param {number} n31
 * @param {number} n32
 * @param {number} n33
 * @param {number} n34
 * @param {number} n41
 * @param {number} n42
 * @param {number} n43
 * @param {number} n44
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.set = function(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {};


/**
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.identity = function() {};


/**
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.clone = function() {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.copy = function(m) {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.copyPosition = function(m) {};


/**
 * @param {THREE.Vector3} xAxis
 * @param {THREE.Vector3} yAxis
 * @param {THREE.Vector3} zAxis
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.extractBasis = function(xAxis, yAxis, zAxis) {};


/**
 * @param {THREE.Vector3} xAxis
 * @param {THREE.Vector3} yAxis
 * @param {THREE.Vector3} zAxis
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.makeBasis = function(xAxis, yAxis, zAxis) {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.extractRotation = function(m) {};


/**
 * @param {THREE.Euler} euler
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.makeRotationFromEuler = function(euler) {};


/**
 * @param {THREE.Quaternion} q
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.makeRotationFromQuaternion = function(q) {};


/**
 * @param {THREE.Vector3} eye
 * @param {THREE.Vector3} target
 * @param {THREE.Vector3} up
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.lookAt = function(eye, target, up) {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.multiply = function(m) {};


/**
 * @param {THREE.Matrix4} a
 * @param {THREE.Matrix4} b
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.multiplyMatrices = function(a, b) {};


/**
 * @param {THREE.Matrix4} a
 * @param {THREE.Matrix4} b
 * @param {Array<number>} r
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.multiplyToArray = function(a, b, r) {};


/**
 * @param {number} s
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.multiplyScalar = function(s) {};


/**
 * @param {Array<number>} array
 * @param {number=} offset
 * @param {number=} length
 * @return {Array<number>}
 */
THREE.Matrix4.prototype.applyToVector3Array = function(array, offset, length) {};


/**
 * @param {THREE.BufferAttribute} buffer
 * @param {number=} offset
 * @param {number=} length
 * @return {THREE.BufferAttribute}
 */
THREE.Matrix4.prototype.applyToBuffer = function(buffer, offset, length) {};


/**
 * @return {number}
 */
THREE.Matrix4.prototype.determinant = function() {};


/**
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.transpose = function() {};


/**
 * @param {Array<number>} array
 * @param {number} offset
 * @return {Array<number>}
 */
THREE.Matrix4.prototype.flattenToArrayOffset = function(array, offset) {};


/**
 * @param {THREE.Vector3} v
 * @return {THREE.Vector3}
 */
THREE.Matrix4.prototype.setPosition = function(v) {};


/**
 * @param {THREE.Matrix4} m
 * @param {boolean=} throwOnInvertible
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.getInverse = function(m, throwOnInvertible) {};


/**
 * @param {THREE.Vector3} v
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.scale = function(v) {};


/**
 * @return {number}
 */
THREE.Matrix4.prototype.getMaxScaleOnAxis = function() {};


/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.makeTranslation = function(x, y, z) {};


/**
 * @param {number} theta
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.makeRotationX = function(theta) {};


/**
 * @param {number} theta
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.makeRotationY = function(theta) {};


/**
 * @param {number} theta
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.makeRotationZ = function(theta) {};


/**
 * @param {THREE.Vector3} axis
 * @param {number} angle
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.makeRotationAxis = function(axis, angle) {};


/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.makeScale = function(x, y, z) {};


/**
 * @param {THREE.Vector3} translation
 * @param {THREE.Quaternion} rotation
 * @param {THREE.Vector3} scale
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.compose = function(translation, rotation, scale) {};


/**
 * @param {THREE.Vector3=} translation
 * @param {THREE.Quaternion=} rotation
 * @param {THREE.Vector3=} scale
 * @return {Array<Object>}
 */
THREE.Matrix4.prototype.decompose = function(translation, rotation, scale) {};


/**
 * @param {number} left
 * @param {number} right
 * @param {number} bottom
 * @param {number} top
 * @param {number} near
 * @param {number} far
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.makeFrustum = function(left, right, bottom, top, near, far) {};


/**
 * @param {number} fov
 * @param {number} aspect
 * @param {number} near
 * @param {number} far
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.makePerspective = function(fov, aspect, near, far) {};


/**
 * @param {number} left
 * @param {number} right
 * @param {number} top
 * @param {number} bottom
 * @param {number} near
 * @param {number} far
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.makeOrthographic = function(left, right, top, bottom, near, far) {};


/**
 * @param {THREE.Matrix4} matrix
 * @return {boolean}
 */
THREE.Matrix4.prototype.equals = function(matrix) {};


/**
 * @param {Array<number>} array
 * @return {THREE.Matrix4}
 */
THREE.Matrix4.prototype.fromArray = function(array) {};


/**
 * @return {Array<number>}
 */
THREE.Matrix4.prototype.toArray = function() {};


/**
 * @constructor
 * @param {THREE.Vector3=} normal
 * @param {number=} constant
 */
THREE.Plane = function(normal, constant) {};


/**
 * @type {THREE.Vector3}
 */
THREE.Plane.prototype.normal;


/**
 * @type {number}
 */
THREE.Plane.prototype.constant;


/**
 * @param {THREE.Vector3} normal
 * @param {number} constant
 * @return {THREE.Plane}
 */
THREE.Plane.prototype.set = function(normal, constant) {};


/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 * @return {THREE.Plane}
 */
THREE.Plane.prototype.setComponents = function(x, y, z, w) {};


/**
 * @param {THREE.Vector3} normal
 * @param {THREE.Vector3} point
 * @return {THREE.Plane}
 */
THREE.Plane.prototype.setFromNormalAndCoplanarPoint = function(normal, point) {};


/**
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 * @param {THREE.Vector3} c
 * @return {THREE.Plane}
 */
THREE.Plane.prototype.setFromCoplanarPoints = function(a, b, c) {};


/**
 * @return {THREE.Plane}
 */
THREE.Plane.prototype.clone = function() {};


/**
 * @param {THREE.Plane} plane
 * @return {THREE.Plane}
 */
THREE.Plane.prototype.copy = function(plane) {};


/**
 * @return {THREE.Plane}
 */
THREE.Plane.prototype.normalize = function() {};


/**
 * @return {THREE.Plane}
 */
THREE.Plane.prototype.negate = function() {};


/**
 * @param {THREE.Vector3} point
 * @return {number}
 */
THREE.Plane.prototype.distanceToPoint = function(point) {};


/**
 * @param {THREE.Sphere} sphere
 * @return {number}
 */
THREE.Plane.prototype.distanceToSphere = function(sphere) {};


/**
 * @param {THREE.Vector3} point
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Plane.prototype.projectPoint = function(point, optionalTarget) {};


/**
 * @param {THREE.Vector3} point
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Plane.prototype.orthoPoint = function(point, optionalTarget) {};


/**
 * @param {THREE.Line3} line
 * @return {boolean}
 */
THREE.Plane.prototype.isIntersectionLine = function(line) {};


/**
 * @param {THREE.Line3} line
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Plane.prototype.intersectLine = function(line, optionalTarget) {};


/**
 * @param {boolean=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Plane.prototype.coplanarPoint = function(optionalTarget) {};


/**
 * @param {THREE.Matrix4} matrix
 * @param {THREE.Matrix3=} optionalNormalMatrix
 * @return {THREE.Plane}
 */
THREE.Plane.prototype.applyMatrix4 = function(matrix, optionalNormalMatrix) {};


/**
 * @param {THREE.Vector3} offset
 * @return {THREE.Plane}
 */
THREE.Plane.prototype.translate = function(offset) {};


/**
 * @param {THREE.Plane} plane
 * @return {boolean}
 */
THREE.Plane.prototype.equals = function(plane) {};


/**
 * @constructor
 * @param {number=} x
 * @param {number=} y
 * @param {number=} z
 * @param {number=} w
 */
THREE.Quaternion = function(x, y, z, w) {};


/**
 * @param {THREE.Quaternion} qa
 * @param {THREE.Quaternion} qb
 * @param {THREE.Quaternion} qm
 * @param {number} t
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.slerp = function(qa, qb, qm, t) {};


/**
 * @type {number}
 */
THREE.Quaternion.prototype.x;


/**
 * @type {number}
 */
THREE.Quaternion.prototype.y;


/**
 * @type {number}
 */
THREE.Quaternion.prototype.z;


/**
 * @type {number}
 */
THREE.Quaternion.prototype.w;


/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.prototype.set = function(x, y, z, w) {};


/**
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.prototype.clone = function() {};


/**
 * @param {THREE.Quaternion} q
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.prototype.copy = function(q) {};


/**
 * @param {THREE.Euler} euler
 * @param {boolean=} update
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.prototype.setFromEuler = function(euler, update) {};


/**
 * @param {THREE.Vector3} axis
 * @param {number} angle
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.prototype.setFromAxisAngle = function(axis, angle) {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.prototype.setFromRotationMatrix = function(m) {};


/**
 * @param {THREE.Vector3} vFrom
 * @param {THREE.Vector3} vTo
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.prototype.setFromUnitVectors = function(vFrom, vTo) {};


/**
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.prototype.inverse = function() {};


/**
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.prototype.conjugate = function() {};


/**
 * @param {THREE.Vector3} v
 * @return {number}
 */
THREE.Quaternion.prototype.dot = function(v) {};


/**
 * @return {number}
 */
THREE.Quaternion.prototype.lengthSq = function() {};


/**
 * @return {number}
 */
THREE.Quaternion.prototype.length = function() {};


/**
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.prototype.normalize = function() {};


/**
 * @param {THREE.Quaternion} q
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.prototype.multiply = function(q) {};


/**
 * @param {THREE.Quaternion} a
 * @param {THREE.Quaternion} b
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.prototype.multiplyQuaternions = function(a, b) {};


/**
 * @param {THREE.Vector3} vector
 * @return {THREE.Vector3}
 */
THREE.Quaternion.prototype.multiplyVector3 = function(vector) {};


/**
 * @param {THREE.Quaternion} qb
 * @param {number} t
 * @return {THREE.Quaternion}
 */
THREE.Quaternion.prototype.slerp = function(qb, t) {};


/**
 * @param {THREE.Quaternion} v
 * @return {boolean}
 */
THREE.Quaternion.prototype.equals = function(v) {};


/**
 * @param {(Array<number>|Array<number>)} n
 * @param {number=} offset
 * @return {(THREE.Quaternion|THREE.Quaternion)}
 */
THREE.Quaternion.prototype.fromArray = function(n, offset) {};


/**
 * @param {Array<number>=} xyzw
 * @param {number=} offset
 * @return {(Array<number>|Array<number>)}
 */
THREE.Quaternion.prototype.toArray = function(xyzw, offset) {};


/**
 * @type {THREE.() => void}
 */
THREE.Quaternion.prototype.onChange;


/**
 * @constructor
 * @param {THREE.Vector3=} origin
 * @param {THREE.Vector3=} direction
 */
THREE.Ray = function(origin, direction) {};


/**
 * @type {THREE.Vector3}
 */
THREE.Ray.prototype.origin;


/**
 * @type {THREE.Vector3}
 */
THREE.Ray.prototype.direction;


/**
 * @param {THREE.Vector3} origin
 * @param {THREE.Vector3} direction
 * @return {THREE.Ray}
 */
THREE.Ray.prototype.set = function(origin, direction) {};


/**
 * @return {THREE.Ray}
 */
THREE.Ray.prototype.clone = function() {};


/**
 * @param {THREE.Ray} ray
 * @return {THREE.Ray}
 */
THREE.Ray.prototype.copy = function(ray) {};


/**
 * @param {number} t
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Ray.prototype.at = function(t, optionalTarget) {};


/**
 * @param {number} t
 * @return {THREE.Ray}
 */
THREE.Ray.prototype.recast = function(t) {};


/**
 * @param {THREE.Vector3} point
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Ray.prototype.closestPointToPoint = function(point, optionalTarget) {};


/**
 * @param {THREE.Vector3} point
 * @return {number}
 */
THREE.Ray.prototype.distanceToPoint = function(point) {};


/**
 * @param {THREE.Vector3} point
 * @return {number}
 */
THREE.Ray.prototype.distanceSqToPoint = function(point) {};


/**
 * @param {THREE.Vector3} v0
 * @param {THREE.Vector3} v1
 * @param {THREE.Vector3=} optionalPointOnRay
 * @param {THREE.Vector3=} optionalPointOnSegment
 * @return {number}
 */
THREE.Ray.prototype.distanceSqToSegment = function(v0, v1, optionalPointOnRay, optionalPointOnSegment) {};


/**
 * @param {THREE.Sphere} sphere
 * @return {boolean}
 */
THREE.Ray.prototype.isIntersectionSphere = function(sphere) {};


/**
 * @param {THREE.Sphere} sphere
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Ray.prototype.intersectSphere = function(sphere, optionalTarget) {};


/**
 * @param {THREE.Plane} plane
 * @return {boolean}
 */
THREE.Ray.prototype.isIntersectionPlane = function(plane) {};


/**
 * @param {THREE.Plane} plane
 * @return {number}
 */
THREE.Ray.prototype.distanceToPlane = function(plane) {};


/**
 * @param {THREE.Plane} plane
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Ray.prototype.intersectPlane = function(plane, optionalTarget) {};


/**
 * @param {THREE.Box3} box
 * @return {boolean}
 */
THREE.Ray.prototype.isIntersectionBox = function(box) {};


/**
 * @param {THREE.Box3} box
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Ray.prototype.intersectBox = function(box, optionalTarget) {};


/**
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 * @param {THREE.Vector3} c
 * @param {boolean} backfaceCulling
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Ray.prototype.intersectTriangle = function(a, b, c, backfaceCulling, optionalTarget) {};


/**
 * @param {THREE.Matrix4} matrix4
 * @return {THREE.Ray}
 */
THREE.Ray.prototype.applyMatrix4 = function(matrix4) {};


/**
 * @param {THREE.Ray} ray
 * @return {boolean}
 */
THREE.Ray.prototype.equals = function(ray) {};


/**
 * @constructor
 * @param {THREE.Vector3=} center
 * @param {number=} radius
 */
THREE.Sphere = function(center, radius) {};


/**
 * @type {THREE.Vector3}
 */
THREE.Sphere.prototype.center;


/**
 * @type {number}
 */
THREE.Sphere.prototype.radius;


/**
 * @param {THREE.Vector3} center
 * @param {number} radius
 * @return {THREE.Sphere}
 */
THREE.Sphere.prototype.set = function(center, radius) {};


/**
 * @param {Array<THREE.Vector3>} points
 * @param {THREE.Vector3=} optionalCenter
 * @return {THREE.Sphere}
 */
THREE.Sphere.prototype.setFromPoints = function(points, optionalCenter) {};


/**
 * @return {THREE.Sphere}
 */
THREE.Sphere.prototype.clone = function() {};


/**
 * @param {THREE.Sphere} sphere
 * @return {THREE.Sphere}
 */
THREE.Sphere.prototype.copy = function(sphere) {};


/**
 * @return {boolean}
 */
THREE.Sphere.prototype.empty = function() {};


/**
 * @param {THREE.Vector3} point
 * @return {boolean}
 */
THREE.Sphere.prototype.containsPoint = function(point) {};


/**
 * @param {THREE.Vector3} point
 * @return {number}
 */
THREE.Sphere.prototype.distanceToPoint = function(point) {};


/**
 * @param {THREE.Sphere} sphere
 * @return {boolean}
 */
THREE.Sphere.prototype.intersectsSphere = function(sphere) {};


/**
 * @param {THREE.Vector3} point
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Sphere.prototype.clampPoint = function(point, optionalTarget) {};


/**
 * @param {THREE.Box3=} optionalTarget
 * @return {THREE.Box3}
 */
THREE.Sphere.prototype.getBoundingBox = function(optionalTarget) {};


/**
 * @param {THREE.Matrix4} matrix
 * @return {THREE.Sphere}
 */
THREE.Sphere.prototype.applyMatrix4 = function(matrix) {};


/**
 * @param {THREE.Vector3} offset
 * @return {THREE.Sphere}
 */
THREE.Sphere.prototype.translate = function(offset) {};


/**
 * @param {THREE.Sphere} sphere
 * @return {boolean}
 */
THREE.Sphere.prototype.equals = function(sphere) {};


/**
 * @interface
 */
THREE.SplineControlPoint = function() {};


/**
 * @constructor
 * @param {Array<THREE.SplineControlPoint>} points
 */
THREE.Spline = function(points) {};


/**
 * @type {Array<THREE.SplineControlPoint>}
 */
THREE.Spline.prototype.points;


/**
 * @param {Array<THREE.number[]>} a
 * @return {THREE.void}
 */
THREE.Spline.prototype.initFromArray = function(a) {};


/**
 * @param {number} k
 * @return {THREE.SplineControlPoint}
 */
THREE.Spline.prototype.getPoint = function(k) {};


/**
 * @return {Array<THREE.number[]>}
 */
THREE.Spline.prototype.getControlPointsArray = function() {};


/**
 * @param {number=} nSubDivisions
 * @return {{chunks: Array<number>, total: number}}
 */
THREE.Spline.prototype.getLength = function(nSubDivisions) {};


/**
 * @param {number} samplingCoef
 * @return {THREE.void}
 */
THREE.Spline.prototype.reparametrizeByArcLength = function(samplingCoef) {};


/**
 * @constructor
 * @param {THREE.Vector3=} a
 * @param {THREE.Vector3=} b
 * @param {THREE.Vector3=} c
 */
THREE.Triangle = function(a, b, c) {};


/**
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 * @param {THREE.Vector3} c
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Triangle.normal = function(a, b, c, optionalTarget) {};


/**
 * @param {THREE.Vector3} point
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 * @param {THREE.Vector3} c
 * @param {THREE.Vector3} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Triangle.barycoordFromPoint = function(point, a, b, c, optionalTarget) {};


/**
 * @param {THREE.Vector3} point
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 * @param {THREE.Vector3} c
 * @return {boolean}
 */
THREE.Triangle.containsPoint = function(point, a, b, c) {};


/**
 * @type {THREE.Vector3}
 */
THREE.Triangle.prototype.a;


/**
 * @type {THREE.Vector3}
 */
THREE.Triangle.prototype.b;


/**
 * @type {THREE.Vector3}
 */
THREE.Triangle.prototype.c;


/**
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 * @param {THREE.Vector3} c
 * @return {THREE.Triangle}
 */
THREE.Triangle.prototype.set = function(a, b, c) {};


/**
 * @param {Array<THREE.Vector3>} points
 * @param {number} i0
 * @param {number} i1
 * @param {number} i2
 * @return {THREE.Triangle}
 */
THREE.Triangle.prototype.setFromPointsAndIndices = function(points, i0, i1, i2) {};


/**
 * @return {THREE.Triangle}
 */
THREE.Triangle.prototype.clone = function() {};


/**
 * @param {THREE.Triangle} triangle
 * @return {THREE.Triangle}
 */
THREE.Triangle.prototype.copy = function(triangle) {};


/**
 * @return {number}
 */
THREE.Triangle.prototype.area = function() {};


/**
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Triangle.prototype.midpoint = function(optionalTarget) {};


/**
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Triangle.prototype.normal = function(optionalTarget) {};


/**
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Plane}
 */
THREE.Triangle.prototype.plane = function(optionalTarget) {};


/**
 * @param {THREE.Vector3} point
 * @param {THREE.Vector3=} optionalTarget
 * @return {THREE.Vector3}
 */
THREE.Triangle.prototype.barycoordFromPoint = function(point, optionalTarget) {};


/**
 * @param {THREE.Vector3} point
 * @return {boolean}
 */
THREE.Triangle.prototype.containsPoint = function(point) {};


/**
 * @param {THREE.Triangle} triangle
 * @return {boolean}
 */
THREE.Triangle.prototype.equals = function(triangle) {};


/**
 * @interface
 */
THREE.Vector = function() {};


/**
 * @constructor
 * @extends {THREE.Vector}
 * @param {number=} x
 * @param {number=} y
 */
THREE.Vector2 = function(x, y) {};


/**
 * @type {number}
 */
THREE.Vector2.prototype.x;


/**
 * @type {number}
 */
THREE.Vector2.prototype.y;


/**
 * @type {number}
 */
THREE.Vector2.prototype.width;


/**
 * @type {number}
 */
THREE.Vector2.prototype.height;


/**
 * @param {number} x
 * @param {number} y
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.set = function(x, y) {};


/**
 * @param {number} x
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.setX = function(x) {};


/**
 * @param {number} y
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.setY = function(y) {};


/**
 * @param {number} index
 * @param {number} value
 * @return {THREE.void}
 */
THREE.Vector2.prototype.setComponent = function(index, value) {};


/**
 * @param {number} index
 * @return {number}
 */
THREE.Vector2.prototype.getComponent = function(index) {};


/**
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.clone = function() {};


/**
 * @param {THREE.Vector2} v
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.copy = function(v) {};


/**
 * @param {THREE.Vector2} v
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.add = function(v) {};


/**
 * @param {number} s
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.addScalar = function(s) {};


/**
 * @param {THREE.Vector2} a
 * @param {THREE.Vector2} b
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.addVectors = function(a, b) {};


/**
 * @param {THREE.Vector2} v
 * @param {number} s
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.addScaledVector = function(v, s) {};


/**
 * @param {THREE.Vector2} v
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.sub = function(v) {};


/**
 * @param {THREE.Vector2} a
 * @param {THREE.Vector2} b
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.subVectors = function(a, b) {};


/**
 * @param {THREE.Vector2} v
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.multiply = function(v) {};


/**
 * @param {number} scalar
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.multiplyScalar = function(scalar) {};


/**
 * @param {THREE.Vector2} v
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.divide = function(v) {};


/**
 * @param {number} s
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.divideScalar = function(s) {};


/**
 * @param {THREE.Vector2} v
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.min = function(v) {};


/**
 * @param {THREE.Vector2} v
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.max = function(v) {};


/**
 * @param {THREE.Vector2} min
 * @param {THREE.Vector2} max
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.clamp = function(min, max) {};


/**
 * @param {number} min
 * @param {number} max
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.clampScalar = function(min, max) {};


/**
 * @param {number} min
 * @param {number} max
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.clampLength = function(min, max) {};


/**
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.floor = function() {};


/**
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.ceil = function() {};


/**
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.round = function() {};


/**
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.roundToZero = function() {};


/**
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.negate = function() {};


/**
 * @param {THREE.Vector2} v
 * @return {number}
 */
THREE.Vector2.prototype.dot = function(v) {};


/**
 * @return {number}
 */
THREE.Vector2.prototype.lengthSq = function() {};


/**
 * @return {number}
 */
THREE.Vector2.prototype.length = function() {};


/**
 * @return {number}
 */
THREE.Vector2.prototype.lengthManhattan = function() {};


/**
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.normalize = function() {};


/**
 * @param {THREE.Vector2} v
 * @return {number}
 */
THREE.Vector2.prototype.distanceTo = function(v) {};


/**
 * @param {THREE.Vector2} v
 * @return {number}
 */
THREE.Vector2.prototype.distanceToSquared = function(v) {};


/**
 * @param {number} length
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.setLength = function(length) {};


/**
 * @param {THREE.Vector2} v
 * @param {number} alpha
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.lerp = function(v, alpha) {};


/**
 * @param {THREE.Vector2} v1
 * @param {THREE.Vector2} v2
 * @param {number} alpha
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.lerpVectors = function(v1, v2, alpha) {};


/**
 * @param {THREE.Vector2} v
 * @return {boolean}
 */
THREE.Vector2.prototype.equals = function(v) {};


/**
 * @param {Array<number>} xy
 * @param {number=} offset
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.fromArray = function(xy, offset) {};


/**
 * @param {Array<number>=} xy
 * @param {number=} offset
 * @return {Array<number>}
 */
THREE.Vector2.prototype.toArray = function(xy, offset) {};


/**
 * @param {THREE.BufferAttribute} attribute
 * @param {number} index
 * @param {number=} offset
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.fromAttribute = function(attribute, index, offset) {};


/**
 * @param {THREE.Vector2} center
 * @param {number} angle
 * @return {THREE.Vector2}
 */
THREE.Vector2.prototype.rotateAround = function(center, angle) {};


/**
 * @constructor
 * @extends {THREE.Vector}
 * @param {number=} x
 * @param {number=} y
 * @param {number=} z
 */
THREE.Vector3 = function(x, y, z) {};


/**
 * @type {number}
 */
THREE.Vector3.prototype.x;


/**
 * @type {number}
 */
THREE.Vector3.prototype.y;


/**
 * @type {number}
 */
THREE.Vector3.prototype.z;


/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.set = function(x, y, z) {};


/**
 * @param {number} x
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.setX = function(x) {};


/**
 * @param {number} y
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.setY = function(y) {};


/**
 * @param {number} z
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.setZ = function(z) {};


/**
 * @param {number} index
 * @param {number} value
 * @return {THREE.void}
 */
THREE.Vector3.prototype.setComponent = function(index, value) {};


/**
 * @param {number} index
 * @return {number}
 */
THREE.Vector3.prototype.getComponent = function(index) {};


/**
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.clone = function() {};


/**
 * @param {THREE.Vector3} v
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.copy = function(v) {};


/**
 * @param {THREE.Vector3} a
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.add = function(a) {};


/**
 * @param {number} s
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.addScalar = function(s) {};


/**
 * @param {(THREE.Vector3|THREE.Vector3)} v
 * @param {(number|number)} s
 * @return {(THREE.Vector3|THREE.Vector3)}
 */
THREE.Vector3.prototype.addScaledVector = function(v, s) {};


/**
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.addVectors = function(a, b) {};


/**
 * @param {THREE.Vector3} a
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.sub = function(a) {};


/**
 * @param {number} s
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.subScalar = function(s) {};


/**
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.subVectors = function(a, b) {};


/**
 * @param {THREE.Vector3} v
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.multiply = function(v) {};


/**
 * @param {number} s
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.multiplyScalar = function(s) {};


/**
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.multiplyVectors = function(a, b) {};


/**
 * @param {THREE.Euler} euler
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.applyEuler = function(euler) {};


/**
 * @param {THREE.Vector3} axis
 * @param {number} angle
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.applyAxisAngle = function(axis, angle) {};


/**
 * @param {THREE.Matrix3} m
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.applyMatrix3 = function(m) {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.applyMatrix4 = function(m) {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.applyProjection = function(m) {};


/**
 * @param {THREE.Quaternion} q
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.applyQuaternion = function(q) {};


/**
 * @param {THREE.Camera} camrea
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.project = function(camrea) {};


/**
 * @param {THREE.Camera} camera
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.unproject = function(camera) {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.transformDirection = function(m) {};


/**
 * @param {THREE.Vector3} v
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.divide = function(v) {};


/**
 * @param {number} s
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.divideScalar = function(s) {};


/**
 * @param {THREE.Vector3} v
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.min = function(v) {};


/**
 * @param {THREE.Vector3} v
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.max = function(v) {};


/**
 * @param {THREE.Vector3} min
 * @param {THREE.Vector3} max
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.clamp = function(min, max) {};


/**
 * @param {number} min
 * @param {number} max
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.clampScalar = function(min, max) {};


/**
 * @param {number} min
 * @param {number} max
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.clampLength = function(min, max) {};


/**
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.floor = function() {};


/**
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.ceil = function() {};


/**
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.round = function() {};


/**
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.roundToZero = function() {};


/**
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.negate = function() {};


/**
 * @param {THREE.Vector3} v
 * @return {number}
 */
THREE.Vector3.prototype.dot = function(v) {};


/**
 * @return {number}
 */
THREE.Vector3.prototype.lengthSq = function() {};


/**
 * @return {number}
 */
THREE.Vector3.prototype.length = function() {};


/**
 * @return {number}
 */
THREE.Vector3.prototype.lengthManhattan = function() {};


/**
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.normalize = function() {};


/**
 * @param {number} l
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.setLength = function(l) {};


/**
 * @param {THREE.Vector3} v
 * @param {number} alpha
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.lerp = function(v, alpha) {};


/**
 * @param {THREE.Vector3} v1
 * @param {THREE.Vector3} v2
 * @param {number} alpha
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.lerpVectors = function(v1, v2, alpha) {};


/**
 * @param {THREE.Vector3} a
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.cross = function(a) {};


/**
 * @param {THREE.Vector3} a
 * @param {THREE.Vector3} b
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.crossVectors = function(a, b) {};


/**
 * @param {THREE.Vector3} v
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.projectOnVector = function(v) {};


/**
 * @param {THREE.Vector3} planeNormal
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.projectOnPlane = function(planeNormal) {};


/**
 * @param {THREE.Vector3} vector
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.reflect = function(vector) {};


/**
 * @param {THREE.Vector3} v
 * @return {number}
 */
THREE.Vector3.prototype.angleTo = function(v) {};


/**
 * @param {THREE.Vector3} v
 * @return {number}
 */
THREE.Vector3.prototype.distanceTo = function(v) {};


/**
 * @param {THREE.Vector3} v
 * @return {number}
 */
THREE.Vector3.prototype.distanceToSquared = function(v) {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.setFromMatrixPosition = function(m) {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.setFromMatrixScale = function(m) {};


/**
 * @param {number} index
 * @param {THREE.Matrix4} matrix
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.setFromMatrixColumn = function(index, matrix) {};


/**
 * @param {THREE.Vector3} v
 * @return {boolean}
 */
THREE.Vector3.prototype.equals = function(v) {};


/**
 * @param {Array<number>} xyz
 * @param {number=} offset
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.fromArray = function(xyz, offset) {};


/**
 * @param {Array<number>=} xyz
 * @param {number=} offset
 * @return {Array<number>}
 */
THREE.Vector3.prototype.toArray = function(xyz, offset) {};


/**
 * @param {THREE.BufferAttribute} attribute
 * @param {number} index
 * @param {number=} offset
 * @return {THREE.Vector3}
 */
THREE.Vector3.prototype.fromAttribute = function(attribute, index, offset) {};


/**
 * @constructor
 * @extends {THREE.Vector}
 * @param {number=} x
 * @param {number=} y
 * @param {number=} z
 * @param {number=} w
 */
THREE.Vector4 = function(x, y, z, w) {};


/**
 * @type {number}
 */
THREE.Vector4.prototype.x;


/**
 * @type {number}
 */
THREE.Vector4.prototype.y;


/**
 * @type {number}
 */
THREE.Vector4.prototype.z;


/**
 * @type {number}
 */
THREE.Vector4.prototype.w;


/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.set = function(x, y, z, w) {};


/**
 * @param {number} x
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.setX = function(x) {};


/**
 * @param {number} y
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.setY = function(y) {};


/**
 * @param {number} z
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.setZ = function(z) {};


/**
 * @param {number} w
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.setW = function(w) {};


/**
 * @param {number} index
 * @param {number} value
 * @return {THREE.void}
 */
THREE.Vector4.prototype.setComponent = function(index, value) {};


/**
 * @param {number} index
 * @return {number}
 */
THREE.Vector4.prototype.getComponent = function(index) {};


/**
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.clone = function() {};


/**
 * @param {THREE.Vector4} v
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.copy = function(v) {};


/**
 * @param {THREE.Vector4} v
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.add = function(v) {};


/**
 * @param {number} s
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.addScalar = function(s) {};


/**
 * @param {THREE.Vector4} a
 * @param {THREE.Vector4} b
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.addVectors = function(a, b) {};


/**
 * @param {THREE.Vector4} v
 * @param {number} s
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.addScaledVector = function(v, s) {};


/**
 * @param {THREE.Vector4} v
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.sub = function(v) {};


/**
 * @param {number} s
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.subScalar = function(s) {};


/**
 * @param {THREE.Vector4} a
 * @param {THREE.Vector4} b
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.subVectors = function(a, b) {};


/**
 * @param {number} s
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.multiplyScalar = function(s) {};


/**
 * @param {THREE.Matrix4} m
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.applyMatrix4 = function(m) {};


/**
 * @param {number} s
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.divideScalar = function(s) {};


/**
 * @param {THREE.Quaternion} q
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.setAxisAngleFromQuaternion = function(q) {};


/**
 * @param {THREE.Matrix3} m
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.setAxisAngleFromRotationMatrix = function(m) {};


/**
 * @param {THREE.Vector4} v
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.min = function(v) {};


/**
 * @param {THREE.Vector4} v
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.max = function(v) {};


/**
 * @param {THREE.Vector4} min
 * @param {THREE.Vector4} max
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.clamp = function(min, max) {};


/**
 * @param {number} min
 * @param {number} max
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.clampScalar = function(min, max) {};


/**
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.floor = function() {};


/**
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.ceil = function() {};


/**
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.round = function() {};


/**
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.roundToZero = function() {};


/**
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.negate = function() {};


/**
 * @param {THREE.Vector4} v
 * @return {number}
 */
THREE.Vector4.prototype.dot = function(v) {};


/**
 * @return {number}
 */
THREE.Vector4.prototype.lengthSq = function() {};


/**
 * @return {number}
 */
THREE.Vector4.prototype.length = function() {};


/**
 * @return {number}
 */
THREE.Vector4.prototype.lengthManhattan = function() {};


/**
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.normalize = function() {};


/**
 * @param {number} length
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.setLength = function(length) {};


/**
 * @param {THREE.Vector4} v
 * @param {number} alpha
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.lerp = function(v, alpha) {};


/**
 * @param {THREE.Vector4} v1
 * @param {THREE.Vector4} v2
 * @param {number} alpha
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.lerpVectors = function(v1, v2, alpha) {};


/**
 * @param {THREE.Vector4} v
 * @return {boolean}
 */
THREE.Vector4.prototype.equals = function(v) {};


/**
 * @param {Array<number>} xyzw
 * @param {number=} offset
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.fromArray = function(xyzw, offset) {};


/**
 * @param {Array<number>=} xyzw
 * @param {number=} offset
 * @return {Array<number>}
 */
THREE.Vector4.prototype.toArray = function(xyzw, offset) {};


/**
 * @param {THREE.BufferAttribute} attribute
 * @param {number} index
 * @param {number=} offset
 * @return {THREE.Vector4}
 */
THREE.Vector4.prototype.fromAttribute = function(attribute, index, offset) {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {THREE.SkinnedMesh} skin
 */
THREE.Bone = function(skin) {};


/**
 * @type {THREE.SkinnedMesh}
 */
THREE.Bone.prototype.skin;


/**
 * @return {THREE.Bone}
 */
THREE.Bone.prototype.clone = function() {};


/**
 * @param {THREE.Bone} source
 * @return {THREE.Bone}
 */
THREE.Bone.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 */
THREE.Group = function() {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 */
THREE.LOD = function() {};


/**
 * @type {Array<*>}
 */
THREE.LOD.prototype.levels;


/**
 * @param {THREE.Object3D} object
 * @param {number=} distance
 * @return {THREE.void}
 */
THREE.LOD.prototype.addLevel = function(object, distance) {};


/**
 * @param {number} distance
 * @return {THREE.Object3D}
 */
THREE.LOD.prototype.getObjectForDistance = function(distance) {};


/**
 * @param {THREE.Raycaster} raycaster
 * @param {*} intersects
 * @return {THREE.void}
 */
THREE.LOD.prototype.raycast = function(raycaster, intersects) {};


/**
 * @param {THREE.Camera} camera
 * @return {THREE.void}
 */
THREE.LOD.prototype.update = function(camera) {};


/**
 * @return {THREE.LOD}
 */
THREE.LOD.prototype.clone = function() {};


/**
 * @param {THREE.LOD} source
 * @return {THREE.LOD}
 */
THREE.LOD.prototype.copy = function(source) {};


/**
 * @param {*} meta
 * @return {*}
 */
THREE.LOD.prototype.toJSON = function(meta) {};


/**
 * @interface
 */
THREE.LensFlareProperty = function() {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {THREE.Texture=} texture
 * @param {number=} size
 * @param {number=} distance
 * @param {THREE.Blending=} blending
 * @param {THREE.Color=} color
 */
THREE.LensFlare = function(texture, size, distance, blending, color) {};


/**
 * @type {Array<THREE.LensFlareProperty>}
 */
THREE.LensFlare.prototype.lensFlares;


/**
 * @type {THREE.Vector3}
 */
THREE.LensFlare.prototype.positionScreen;


/**
 * @type {THREE.(object: LensFlare) => void}
 */
THREE.LensFlare.prototype.customUpdateCallback;


/**
 * @param {(THREE.Texture|THREE.Object3D)} texture
 * @param {number=} size
 * @param {number=} distance
 * @param {THREE.Blending=} blending
 * @param {THREE.Color=} color
 * @return {(THREE.void|THREE.void)}
 */
THREE.LensFlare.prototype.add = function(texture, size, distance, blending, color) {};


/**
 * @return {THREE.void}
 */
THREE.LensFlare.prototype.updateLensFlares = function() {};


/**
 * @return {THREE.LensFlare}
 */
THREE.LensFlare.prototype.clone = function() {};


/**
 * @param {THREE.LensFlare} source
 * @return {THREE.LensFlare}
 */
THREE.LensFlare.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {(THREE.Geometry |THREE. BufferGeometry)=} geometry
 * @param {(THREE.LineDashedMaterial |THREE. LineBasicMaterial |THREE. ShaderMaterial)=} material
 * @param {number=} mode
 */
THREE.Line = function(geometry, material, mode) {};


/**
 * @type {(THREE.Geometry|THREE.BufferGeometry)}
 */
THREE.Line.prototype.geometry;


/**
 * @type {THREE.Material}
 */
THREE.Line.prototype.material;


/**
 * @param {THREE.Raycaster} raycaster
 * @param {*} intersects
 * @return {THREE.void}
 */
THREE.Line.prototype.raycast = function(raycaster, intersects) {};


/**
 * @return {THREE.Line}
 */
THREE.Line.prototype.clone = function() {};


/**
 * @param {THREE.Line} source
 * @return {THREE.Line}
 */
THREE.Line.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.Line}
 * @param {(THREE.Geometry |THREE. BufferGeometry)=} geometry
 * @param {(THREE.LineDashedMaterial |THREE. LineBasicMaterial |THREE. ShaderMaterial)=} material
 * @param {number=} mode
 */
THREE.LineSegments = function(geometry, material, mode) {};


/**
 * @return {THREE.LineSegments}
 */
THREE.LineSegments.prototype.clone = function() {};


/**
 * @param {THREE.LineSegments} source
 * @return {THREE.LineSegments}
 */
THREE.LineSegments.prototype.copy = function(source) {};


/**

*/
THREE.LineMode = {};


/**
 * @type {THREE.LineMode}
 */
THREE.LineStrip;


/**
 * @type {THREE.LineMode}
 */
THREE.LinePieces;


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {(THREE.Geometry|THREE.BufferGeometry)=} geometry
 * @param {(THREE.Material|THREE.Material)=} material
 */
THREE.Mesh = function(geometry, material) {};


/**
 * @type {(THREE.Geometry|THREE.BufferGeometry)}
 */
THREE.Mesh.prototype.geometry;


/**
 * @type {THREE.Material}
 */
THREE.Mesh.prototype.material;


/**
 * @return {THREE.void}
 */
THREE.Mesh.prototype.updateMorphTargets = function() {};


/**
 * @param {string} name
 * @return {number}
 */
THREE.Mesh.prototype.getMorphTargetIndexByName = function(name) {};


/**
 * @param {THREE.Raycaster} raycaster
 * @param {*} intersects
 * @return {THREE.void}
 */
THREE.Mesh.prototype.raycast = function(raycaster, intersects) {};


/**
 * @return {THREE.Mesh}
 */
THREE.Mesh.prototype.clone = function() {};


/**
 * @param {THREE.Mesh} source
 * @return {THREE.Mesh}
 */
THREE.Mesh.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {(THREE.Geometry |THREE. BufferGeometry)} geometry
 * @param {(THREE.PointsMaterial |THREE. ShaderMaterial)=} material
 */
THREE.Points = function(geometry, material) {};


/**
 * @type {THREE.Geometry}
 */
THREE.Points.prototype.geometry;


/**
 * @type {THREE.Material}
 */
THREE.Points.prototype.material;


/**
 * @param {THREE.Raycaster} raycaster
 * @param {*} intersects
 * @return {THREE.void}
 */
THREE.Points.prototype.raycast = function(raycaster, intersects) {};


/**
 * @return {THREE.Points}
 */
THREE.Points.prototype.clone = function() {};


/**
 * @param {THREE.Points} source
 * @return {THREE.Points}
 */
THREE.Points.prototype.copy = function(source) {};


/**
 * @constructor
 * @param {Array<THREE.Bone>} bones
 * @param {Array<THREE.Matrix4>=} boneInverses
 * @param {boolean=} useVertexTexture
 */
THREE.Skeleton = function(bones, boneInverses, useVertexTexture) {};


/**
 * @type {boolean}
 */
THREE.Skeleton.prototype.useVertexTexture;


/**
 * @type {THREE.Matrix4}
 */
THREE.Skeleton.prototype.identityMatrix;


/**
 * @type {Array<THREE.Bone>}
 */
THREE.Skeleton.prototype.bones;


/**
 * @type {number}
 */
THREE.Skeleton.prototype.boneTextureWidth;


/**
 * @type {number}
 */
THREE.Skeleton.prototype.boneTextureHeight;


/**
 * @type {THREE.Float32Array}
 */
THREE.Skeleton.prototype.boneMatrices;


/**
 * @type {THREE.DataTexture}
 */
THREE.Skeleton.prototype.boneTexture;


/**
 * @type {Array<THREE.Matrix4>}
 */
THREE.Skeleton.prototype.boneInverses;


/**
 * @param {THREE.Bone} bone
 * @return {THREE.void}
 */
THREE.Skeleton.prototype.calculateInverses = function(bone) {};


/**
 * @return {THREE.void}
 */
THREE.Skeleton.prototype.pose = function() {};


/**
 * @return {THREE.void}
 */
THREE.Skeleton.prototype.update = function() {};


/**
 * @return {THREE.Skeleton}
 */
THREE.Skeleton.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Mesh}
 * @param {(THREE.Geometry|THREE.BufferGeometry|THREE.Geometry,THREE.BufferGeometry|THREE.Geometry,THREE.BufferGeometry|THREE.Geometry,THREE.BufferGeometry|THREE.Geometry,THREE.BufferGeometry|THREE.Geometry,THREE.BufferGeometry|THREE.Geometry,THREE.BufferGeometry)=} geometry
 * @param {(THREE.MeshBasicMaterial|THREE.MeshDepthMaterial|THREE.MeshFaceMaterial|THREE.MeshLambertMaterial|THREE.MeshNormalMaterial|THREE.MeshPhongMaterial|THREE.ShaderMaterial)=} material
 * @param {(boolean|boolean|boolean|boolean|boolean|boolean|boolean)=} useVertexTexture
 */
THREE.SkinnedMesh = function(geometry, material, useVertexTexture) {};


/**
 * @type {string}
 */
THREE.SkinnedMesh.prototype.bindMode;


/**
 * @type {THREE.Matrix4}
 */
THREE.SkinnedMesh.prototype.bindMatrix;


/**
 * @type {THREE.Matrix4}
 */
THREE.SkinnedMesh.prototype.bindMatrixInverse;


/**
 * @param {THREE.Skeleton} skeleton
 * @param {THREE.Matrix4=} bindMatrix
 * @return {THREE.void}
 */
THREE.SkinnedMesh.prototype.bind = function(skeleton, bindMatrix) {};


/**
 * @return {THREE.void}
 */
THREE.SkinnedMesh.prototype.pose = function() {};


/**
 * @return {THREE.void}
 */
THREE.SkinnedMesh.prototype.normalizeSkinWeights = function() {};


/**
 * @param {boolean=} force
 * @return {THREE.void}
 */
THREE.SkinnedMesh.prototype.updateMatrixWorld = function(force) {};


/**
 * @return {THREE.SkinnedMesh}
 */
THREE.SkinnedMesh.prototype.clone = function() {};


/**
 * @param {THREE.SkinnedMesh=} source
 * @return {THREE.SkinnedMesh}
 */
THREE.SkinnedMesh.prototype.copy = function(source) {};


/**
 * @type {THREE.Skeleton}
 */
THREE.SkinnedMesh.prototype.skeleton;


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {THREE.Material=} material
 */
THREE.Sprite = function(material) {};


/**
 * @type {THREE.BufferGeometry}
 */
THREE.Sprite.prototype.geometry;


/**
 * @type {THREE.SpriteMaterial}
 */
THREE.Sprite.prototype.material;


/**
 * @param {THREE.Raycaster} raycaster
 * @param {*} intersects
 * @return {THREE.void}
 */
THREE.Sprite.prototype.raycast = function(raycaster, intersects) {};


/**
 * @return {THREE.Sprite}
 */
THREE.Sprite.prototype.clone = function() {};


/**
 * @param {THREE.Sprite=} source
 * @return {THREE.Sprite}
 */
THREE.Sprite.prototype.copy = function(source) {};


/**
 * @interface
 */
THREE.Renderer = function() {};


/**
 * @interface
 */
THREE.WebGLRendererParameters = function() {};


/**
 * @constructor
 * @extends {THREE.Renderer}
 * @param {THREE.WebGLRendererParameters=} parameters
 */
THREE.WebGLRenderer = function(parameters) {};


/**
 * @type {THREE.HTMLCanvasElement}
 */
THREE.WebGLRenderer.prototype.domElement;


/**
 * @type {THREE.WebGLRenderingContext}
 */
THREE.WebGLRenderer.prototype.context;


/**
 * @type {boolean}
 */
THREE.WebGLRenderer.prototype.autoClear;


/**
 * @type {boolean}
 */
THREE.WebGLRenderer.prototype.autoClearColor;


/**
 * @type {boolean}
 */
THREE.WebGLRenderer.prototype.autoClearDepth;


/**
 * @type {boolean}
 */
THREE.WebGLRenderer.prototype.autoClearStencil;


/**
 * @type {boolean}
 */
THREE.WebGLRenderer.prototype.sortObjects;


/**
 * @type {THREE.WebGLExtensions}
 */
THREE.WebGLRenderer.prototype.extensions;


/**
 * @type {number}
 */
THREE.WebGLRenderer.prototype.gammaFactor;


/**
 * @type {boolean}
 */
THREE.WebGLRenderer.prototype.gammaInput;


/**
 * @type {boolean}
 */
THREE.WebGLRenderer.prototype.gammaOutput;


/**
 * @type {boolean}
 */
THREE.WebGLRenderer.prototype.shadowMapEnabled;


/**
 * @type {THREE.ShadowMapType}
 */
THREE.WebGLRenderer.prototype.shadowMapType;


/**
 * @type {THREE.CullFace}
 */
THREE.WebGLRenderer.prototype.shadowMapCullFace;


/**
 * @type {boolean}
 */
THREE.WebGLRenderer.prototype.shadowMapDebug;


/**
 * @type {number}
 */
THREE.WebGLRenderer.prototype.maxMorphTargets;


/**
 * @type {number}
 */
THREE.WebGLRenderer.prototype.maxMorphNormals;


/**
 * @type {boolean}
 */
THREE.WebGLRenderer.prototype.autoScaleCubemaps;


/**
 * @type {{memory: THREE.{
                programs: number;
                geometries: number;
                textures: number;
            }, render: THREE.{
                calls: number;
                vertices: number;
                faces: number;
                points: number;
            }}}
*/
THREE.WebGLRenderer.prototype.info;


/**
 * @return {THREE.WebGLRenderingContext}
 */
THREE.WebGLRenderer.prototype.getContext = function() {};


/**
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.forceContextLoss = function() {};


/**
 * @type {THREE.WebGLCapabilities}
 */
THREE.WebGLRenderer.prototype.capabilities;


/**
 * @return {boolean}
 */
THREE.WebGLRenderer.prototype.supportsVertexTextures = function() {};


/**
 * @return {boolean}
 */
THREE.WebGLRenderer.prototype.supportsFloatTextures = function() {};


/**
 * @return {boolean}
 */
THREE.WebGLRenderer.prototype.supportsStandardDerivatives = function() {};


/**
 * @return {boolean}
 */
THREE.WebGLRenderer.prototype.supportsCompressedTextureS3TC = function() {};


/**
 * @return {boolean}
 */
THREE.WebGLRenderer.prototype.supportsCompressedTexturePVRTC = function() {};


/**
 * @return {boolean}
 */
THREE.WebGLRenderer.prototype.supportsBlendMinMax = function() {};


/**
 * @return {string}
 */
THREE.WebGLRenderer.prototype.getPrecision = function() {};


/**
 * @return {number}
 */
THREE.WebGLRenderer.prototype.getMaxAnisotropy = function() {};


/**
 * @return {number}
 */
THREE.WebGLRenderer.prototype.getPixelRatio = function() {};


/**
 * @param {number} value
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.setPixelRatio = function(value) {};


/**
 * @return {{width: number, height: number}}
 */
THREE.WebGLRenderer.prototype.getSize = function() {};


/**
 * @param {number} width
 * @param {number} height
 * @param {boolean=} updateStyle
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.setSize = function(width, height, updateStyle) {};


/**
 * @param {number=} x
 * @param {number=} y
 * @param {number=} width
 * @param {number=} height
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.setViewport = function(x, y, width, height) {};


/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.setScissor = function(x, y, width, height) {};


/**
 * @param {boolean} enable
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.enableScissorTest = function(enable) {};


/**
 * @param {(THREE.Color|string|number)} color
 * @param {(number|number|number)=} alpha
 * @return {(THREE.void|THREE.void|THREE.void)}
 */
THREE.WebGLRenderer.prototype.setClearColor = function(color, alpha) {};


/**
 * @param {number} alpha
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.setClearAlpha = function(alpha) {};


/**
 * @param {number} hex
 * @param {number} alpha
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.setClearColorHex = function(hex, alpha) {};


/**
 * @return {THREE.Color}
 */
THREE.WebGLRenderer.prototype.getClearColor = function() {};


/**
 * @return {number}
 */
THREE.WebGLRenderer.prototype.getClearAlpha = function() {};


/**
 * @param {boolean=} color
 * @param {boolean=} depth
 * @param {boolean=} stencil
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.clear = function(color, depth, stencil) {};


/**
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.clearColor = function() {};


/**
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.clearDepth = function() {};


/**
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.clearStencil = function() {};


/**
 * @param {THREE.WebGLRenderTarget} renderTarget
 * @param {boolean} color
 * @param {boolean} depth
 * @param {boolean} stencil
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.clearTarget = function(renderTarget, color, depth, stencil) {};


/**
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.resetGLState = function() {};


/**
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.dispose = function() {};


/**
 * @param {THREE.Scene} scene
 * @param {THREE.Camera} camera
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.updateShadowMap = function(scene, camera) {};


/**
 * @param {THREE.Object3D} object
 * @param {THREE.Object} program
 * @param {THREE.Material} material
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.renderBufferImmediate = function(object, program, material) {};


/**
 * @param {THREE.Camera} camera
 * @param {Array<THREE.Light>} lights
 * @param {THREE.Fog} fog
 * @param {THREE.Material} material
 * @param {*} geometryGroup
 * @param {THREE.Object3D} object
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.renderBufferDirect = function(camera, lights, fog, material, geometryGroup, object) {};


/**
 * @param {THREE.Camera} camera
 * @param {Array<THREE.Light>} lights
 * @param {THREE.Fog} fog
 * @param {THREE.Material} material
 * @param {*} geometryGroup
 * @param {THREE.Object3D} object
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.renderBuffer = function(camera, lights, fog, material, geometryGroup, object) {};


/**
 * @param {THREE.Scene} scene
 * @param {THREE.Camera} camera
 * @param {THREE.RenderTarget=} renderTarget
 * @param {boolean=} forceClear
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.render = function(scene, camera, renderTarget, forceClear) {};


/**
 * @param {THREE.Camera} camera
 * @param {Array<THREE.Light>} lights
 * @param {THREE.Fog} fog
 * @param {THREE.Material} material
 * @param {THREE.Object3D} object
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.renderImmediateObject = function(camera, lights, fog, material, object) {};


/**
 * @param {THREE.CullFace=} cullFace
 * @param {THREE.FrontFaceDirection=} frontFace
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.setFaceCulling = function(cullFace, frontFace) {};


/**
 * @param {THREE.Material} material
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.setMaterialFaces = function(material) {};


/**
 * @param {boolean} depthTest
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.setDepthTest = function(depthTest) {};


/**
 * @param {boolean} depthWrite
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.setDepthWrite = function(depthWrite) {};


/**
 * @param {THREE.Blending} blending
 * @param {THREE.BlendingEquation} blendEquation
 * @param {THREE.BlendingSrcFactor} blendSrc
 * @param {THREE.BlendingDstFactor} blendDst
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.setBlending = function(blending, blendEquation, blendSrc, blendDst) {};


/**
 * @param {THREE.Texture} texture
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.uploadTexture = function(texture) {};


/**
 * @param {THREE.Texture} texture
 * @param {number} slot
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.setTexture = function(texture, slot) {};


/**
 * @param {THREE.RenderTarget} renderTarget
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.setRenderTarget = function(renderTarget) {};


/**
 * @param {THREE.RenderTarget} renderTarget
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {*} buffer
 * @return {THREE.void}
 */
THREE.WebGLRenderer.prototype.readRenderTargetPixels = function(renderTarget, x, y, width, height, buffer) {};


/**
 * @interface
 */
THREE.RenderTarget = function() {};


/**
 * @interface
 */
THREE.WebGLRenderTargetOptions = function() {};


/**
 * @constructor
 * @extends {THREE.RenderTarget}
 * @param {number} width
 * @param {number} height
 * @param {THREE.WebGLRenderTargetOptions=} options
 */
THREE.WebGLRenderTarget = function(width, height, options) {};


/**
 * @type {string}
 */
THREE.WebGLRenderTarget.prototype.uuid;


/**
 * @type {number}
 */
THREE.WebGLRenderTarget.prototype.width;


/**
 * @type {number}
 */
THREE.WebGLRenderTarget.prototype.height;


/**
 * @type {THREE.Wrapping}
 */
THREE.WebGLRenderTarget.prototype.wrapS;


/**
 * @type {THREE.Wrapping}
 */
THREE.WebGLRenderTarget.prototype.wrapT;


/**
 * @type {THREE.TextureFilter}
 */
THREE.WebGLRenderTarget.prototype.magFilter;


/**
 * @type {THREE.TextureFilter}
 */
THREE.WebGLRenderTarget.prototype.minFilter;


/**
 * @type {number}
 */
THREE.WebGLRenderTarget.prototype.anisotropy;


/**
 * @type {THREE.Vector2}
 */
THREE.WebGLRenderTarget.prototype.offset;


/**
 * @type {THREE.Vector2}
 */
THREE.WebGLRenderTarget.prototype.repeat;


/**
 * @type {number}
 */
THREE.WebGLRenderTarget.prototype.format;


/**
 * @type {number}
 */
THREE.WebGLRenderTarget.prototype.type;


/**
 * @type {boolean}
 */
THREE.WebGLRenderTarget.prototype.depthBuffer;


/**
 * @type {boolean}
 */
THREE.WebGLRenderTarget.prototype.stencilBuffer;


/**
 * @type {boolean}
 */
THREE.WebGLRenderTarget.prototype.generateMipmaps;


/**
 * @type {*}
 */
THREE.WebGLRenderTarget.prototype.shareDepthFrom;


/**
 * @param {number} width
 * @param {number} height
 * @return {THREE.void}
 */
THREE.WebGLRenderTarget.prototype.setSize = function(width, height) {};


/**
 * @return {THREE.WebGLRenderTarget}
 */
THREE.WebGLRenderTarget.prototype.clone = function() {};


/**
 * @param {THREE.WebGLRenderTarget} source
 * @return {THREE.WebGLRenderTarget}
 */
THREE.WebGLRenderTarget.prototype.copy = function(source) {};


/**
 * @return {THREE.void}
 */
THREE.WebGLRenderTarget.prototype.dispose = function() {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.WebGLRenderTarget.prototype.addEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.WebGLRenderTarget.prototype.hasEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.WebGLRenderTarget.prototype.removeEventListener = function(type, listener) {};


/**
 * @param {THREE.{ type: string; target: any; }} event
 * @return {THREE.void}
 */
THREE.WebGLRenderTarget.prototype.dispatchEvent = function(event) {};


/**
 * @constructor
 * @extends {THREE.WebGLRenderTarget}
 * @param {number} width
 * @param {number} height
 * @param {THREE.WebGLRenderTargetOptions=} options
 */
THREE.WebGLRenderTargetCube = function(width, height, options) {};


/**
 * @type {number}
 */
THREE.WebGLRenderTargetCube.prototype.activeCubeFace;


/**
 * @type {THREE.ShaderChunk}
 */
THREE.ShaderChunk;


/**
 * @interface
 */
THREE.Shader = function() {};


/**
 * @type {{basic: THREE.Shader, lambert: THREE.Shader, phong: THREE.Shader, particle_basic: THREE.Shader, dashed: THREE.Shader, depth: THREE.Shader, normal: THREE.Shader, normalmap: THREE.Shader, cube: THREE.Shader, equirect: THREE.Shader, depthRGBA: THREE.Shader}}
 */
THREE.ShaderLib;


/**
 * @type {{common: *, aomap: *, lightmap: *, emissivemap: *, bumpmap: *, normalmap: *, displacementmap: *, fog: *, lights: *, points: *, shadowmap: *}}
 */
THREE.UniformsLib;


/**
 * @type {THREE.{
        merge(uniforms: any[]): any;
        clone(uniforms_src: any): any;
    }}
*/
THREE.UniformsUtils;


/**
 * @constructor
 * @param {*} _gl
 * @param {*} extensions
 * @param {*} _infoRender
 */
THREE.WebGLBufferRenderer = function(_gl, extensions, _infoRender) {};


/**
 * @param {*} value
 * @return {THREE.void}
 */
THREE.WebGLBufferRenderer.prototype.setMode = function(value) {};


/**
 * @param {*} start
 * @param {*} count
 * @return {THREE.void}
 */
THREE.WebGLBufferRenderer.prototype.render = function(start, count) {};


/**
 * @param {*} geometry
 * @return {THREE.void}
 */
THREE.WebGLBufferRenderer.prototype.renderInstances = function(geometry) {};


/**
 * @constructor
 * @param {*} gl
 * @param {*} extensions
 * @param {*} parameters
 */
THREE.WebGLCapabilities = function(gl, extensions, parameters) {};


/**
 * @type {*}
 */
THREE.WebGLCapabilities.prototype.getMaxPrecision;


/**
 * @type {*}
 */
THREE.WebGLCapabilities.prototype.precision;


/**
 * @type {*}
 */
THREE.WebGLCapabilities.prototype.maxTextures;


/**
 * @type {*}
 */
THREE.WebGLCapabilities.prototype.maxVertexTextures;


/**
 * @type {*}
 */
THREE.WebGLCapabilities.prototype.maxTextureSize;


/**
 * @type {*}
 */
THREE.WebGLCapabilities.prototype.maxCubemapSize;


/**
 * @type {*}
 */
THREE.WebGLCapabilities.prototype.maxAttributes;


/**
 * @type {*}
 */
THREE.WebGLCapabilities.prototype.maxVertexUniforms;


/**
 * @type {*}
 */
THREE.WebGLCapabilities.prototype.maxVaryings;


/**
 * @type {*}
 */
THREE.WebGLCapabilities.prototype.maxFragmentUniforms;


/**
 * @type {*}
 */
THREE.WebGLCapabilities.prototype.vertexTextures;


/**
 * @type {*}
 */
THREE.WebGLCapabilities.prototype.floatFragmentTextures;


/**
 * @type {*}
 */
THREE.WebGLCapabilities.prototype.floatVertexTextures;


/**
 * @constructor
 * @param {*} gl
 */
THREE.WebGLExtensions = function(gl) {};


/**
 * @param {string} name
 * @return {*}
 */
THREE.WebGLExtensions.prototype.get = function(name) {};


/**
 * @interface
 */
THREE.WebGLGeometriesInstance = function() {};


/**
 * @interface
 */
THREE.WebGLGeometriesStatic = function() {};


/**
 * @type {THREE.WebGLGeometriesStatic}
 */
THREE.WebGLGeometries;


/**
 * @interface
 */
THREE.WebGLIndexedBufferRendererInstance = function() {};


/**
 * @interface
 */
THREE.WebGLIndexedBufferRendererStatic = function() {};


/**
 * @type {THREE.WebGLIndexedBufferRendererStatic}
 */
THREE.WebGLIndexedBufferRenderer;


/**
 * @interface
 */
THREE.WebGLObjectsInstance = function() {};


/**
 * @interface
 */
THREE.WebGLObjectsStatic = function() {};


/**
 * @type {THREE.WebGLObjectsStatic}
 */
THREE.WebGLObjects;


/**
 * @constructor
 * @param {THREE.WebGLRenderer} renderer
 * @param {string} code
 * @param {THREE.ShaderMaterial} material
 * @param {THREE.WebGLRendererParameters} parameters
 */
THREE.WebGLProgram = function(renderer, code, material, parameters) {};


/**
 * @return {*}
 */
THREE.WebGLProgram.prototype.getUniforms = function() {};


/**
 * @return {*}
 */
THREE.WebGLProgram.prototype.getAttributes = function() {};


/**
 * @type {*}
 */
THREE.WebGLProgram.prototype.uniforms;


/**
 * @type {*}
 */
THREE.WebGLProgram.prototype.attributes;


/**
 * @type {number}
 */
THREE.WebGLProgram.prototype.id;


/**
 * @type {string}
 */
THREE.WebGLProgram.prototype.code;


/**
 * @type {number}
 */
THREE.WebGLProgram.prototype.usedTimes;


/**
 * @type {*}
 */
THREE.WebGLProgram.prototype.program;


/**
 * @type {THREE.WebGLShader}
 */
THREE.WebGLProgram.prototype.vertexShader;


/**
 * @type {THREE.WebGLShader}
 */
THREE.WebGLProgram.prototype.fragmentShader;


/**
 * @interface
 */
THREE.WebGLProgramsInstance = function() {};


/**
 * @interface
 */
THREE.WebGLProgramsStatic = function() {};


/**
 * @type {THREE.WebGLProgramsStatic}
 */
THREE.WebGLPrograms;


/**
 * @interface
 */
THREE.WebGLPropertiesInstance = function() {};


/**
 * @interface
 */
THREE.WebGLPropertiesStatic = function() {};


/**
 * @type {THREE.WebGLPropertiesStatic}
 */
THREE.WebGLProperties;


/**
 * @constructor
 * @param {*} gl
 * @param {string} type
 * @param {string} string
 */
THREE.WebGLShader = function(gl, type, string) {};


/**
 * @interface
 */
THREE.WebGLShadowMapInstance = function() {};


/**
 * @interface
 */
THREE.WebGLShadowMapStatic = function() {};


/**
 * @type {THREE.WebGLShadowMapStatic}
 */
THREE.WebGLShadowMap;


/**
 * @interface
 */
THREE.WebGLStateInstance = function() {};


/**
 * @interface
 */
THREE.WebGLStateStatic = function() {};


/**
 * @type {THREE.WebGLStateStatic}
 */
THREE.WebGLState;


/**
 * @interface
 */
THREE.RendererPlugin = function() {};


/**
 * @constructor
 * @extends {THREE.RendererPlugin}
 */
THREE.LensFlarePlugin = function() {};


/**
 * @param {THREE.Renderer} renderer
 * @return {THREE.void}
 */
THREE.LensFlarePlugin.prototype.init = function(renderer) {};


/**
 * @param {THREE.Scene} scene
 * @param {THREE.Camera} camera
 * @param {number} viewportWidth
 * @param {number} viewportHeight
 * @return {THREE.void}
 */
THREE.LensFlarePlugin.prototype.render = function(scene, camera, viewportWidth, viewportHeight) {};


/**
 * @constructor
 * @extends {THREE.RendererPlugin}
 */
THREE.SpritePlugin = function() {};


/**
 * @param {THREE.Renderer} renderer
 * @return {THREE.void}
 */
THREE.SpritePlugin.prototype.init = function(renderer) {};


/**
 * @param {THREE.Scene} scene
 * @param {THREE.Camera} camera
 * @param {number} viewportWidth
 * @param {number} viewportHeight
 * @return {THREE.void}
 */
THREE.SpritePlugin.prototype.render = function(scene, camera, viewportWidth, viewportHeight) {};


/**
 * @interface
 */
THREE.IFog = function() {};


/**
 * @constructor
 * @extends {THREE.IFog}
 * @param {number} hex
 * @param {number=} near
 * @param {number=} far
 */
THREE.Fog = function(hex, near, far) {};


/**
 * @type {string}
 */
THREE.Fog.prototype.name;


/**
 * @type {THREE.Color}
 */
THREE.Fog.prototype.color;


/**
 * @type {number}
 */
THREE.Fog.prototype.near;


/**
 * @type {number}
 */
THREE.Fog.prototype.far;


/**
 * @return {THREE.Fog}
 */
THREE.Fog.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.IFog}
 * @param {number} hex
 * @param {number=} density
 */
THREE.FogExp2 = function(hex, density) {};


/**
 * @type {string}
 */
THREE.FogExp2.prototype.name;


/**
 * @type {THREE.Color}
 */
THREE.FogExp2.prototype.color;


/**
 * @type {number}
 */
THREE.FogExp2.prototype.density;


/**
 * @return {THREE.FogExp2}
 */
THREE.FogExp2.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 */
THREE.Scene = function() {};


/**
 * @type {THREE.IFog}
 */
THREE.Scene.prototype.fog;


/**
 * @type {THREE.Material}
 */
THREE.Scene.prototype.overrideMaterial;


/**
 * @type {boolean}
 */
THREE.Scene.prototype.autoUpdate;


/**
 * @param {THREE.Scene} source
 * @return {THREE.Scene}
 */
THREE.Scene.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.Texture}
 * @param {(THREE.HTMLImageElement |THREE. HTMLCanvasElement |THREE. HTMLVideoElement)} canvas
 * @param {THREE.Mapping=} mapping
 * @param {THREE.Wrapping=} wrapS
 * @param {THREE.Wrapping=} wrapT
 * @param {THREE.TextureFilter=} magFilter
 * @param {THREE.TextureFilter=} minFilter
 * @param {THREE.PixelFormat=} format
 * @param {THREE.TextureDataType=} type
 * @param {number=} anisotropy
 */
THREE.CanvasTexture = function(canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {};


/**
 * @type {boolean}
 */
THREE.CanvasTexture.prototype.needsUpdate;


/**
 * @constructor
 * @extends {THREE.Texture}
 * @param {Array<THREE.ImageData>} mipmaps
 * @param {number} width
 * @param {number} height
 * @param {THREE.PixelFormat=} format
 * @param {THREE.TextureDataType=} type
 * @param {THREE.Mapping=} mapping
 * @param {THREE.Wrapping=} wrapS
 * @param {THREE.Wrapping=} wrapT
 * @param {THREE.TextureFilter=} magFilter
 * @param {THREE.TextureFilter=} minFilter
 * @param {number=} anisotropy
 */
THREE.CompressedTexture = function(mipmaps, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy) {};


/**
 * @type {{width: number, height: number}}
 */
THREE.CompressedTexture.prototype.image;


/**
 * @type {Array<THREE.ImageData>}
 */
THREE.CompressedTexture.prototype.mipmaps;


/**
 * @type {boolean}
 */
THREE.CompressedTexture.prototype.flipY;


/**
 * @type {boolean}
 */
THREE.CompressedTexture.prototype.generateMipmaps;


/**
 * @constructor
 * @extends {THREE.Texture}
 * @param {Array<*>} images
 * @param {THREE.Mapping=} mapping
 * @param {THREE.Wrapping=} wrapS
 * @param {THREE.Wrapping=} wrapT
 * @param {THREE.TextureFilter=} magFilter
 * @param {THREE.TextureFilter=} minFilter
 * @param {THREE.PixelFormat=} format
 * @param {THREE.TextureDataType=} type
 * @param {number=} anisotropy
 */
THREE.CubeTexture = function(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {};


/**
 * @type {Array<*>}
 */
THREE.CubeTexture.prototype.images;


/**
 * @param {THREE.CubeTexture} source
 * @return {THREE.CubeTexture}
 */
THREE.CubeTexture.prototype.copy = function(source) {};


/**
 * @constructor
 * @extends {THREE.Texture}
 * @param {THREE.ImageData} data
 * @param {number} width
 * @param {number} height
 * @param {THREE.PixelFormat} format
 * @param {THREE.TextureDataType} type
 * @param {THREE.Mapping} mapping
 * @param {THREE.Wrapping} wrapS
 * @param {THREE.Wrapping} wrapT
 * @param {THREE.TextureFilter} magFilter
 * @param {THREE.TextureFilter} minFilter
 * @param {number=} anisotropy
 */
THREE.DataTexture = function(data, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy) {};


/**
 * @type {{data: THREE.ImageData, width: number, height: number}}
 */
THREE.DataTexture.prototype.image;


/**
 * @type {THREE.TextureFilter}
 */
THREE.DataTexture.prototype.magFilter;


/**
 * @type {THREE.TextureFilter}
 */
THREE.DataTexture.prototype.minFilter;


/**
 * @type {boolean}
 */
THREE.DataTexture.prototype.flipY;


/**
 * @type {boolean}
 */
THREE.DataTexture.prototype.generateMipmaps;


/**
 * @constructor
 * @param {(THREE.HTMLImageElement |THREE. HTMLCanvasElement |THREE. HTMLVideoElement)} image
 * @param {THREE.Mapping=} mapping
 * @param {THREE.Wrapping=} wrapS
 * @param {THREE.Wrapping=} wrapT
 * @param {THREE.TextureFilter=} magFilter
 * @param {THREE.TextureFilter=} minFilter
 * @param {THREE.PixelFormat=} format
 * @param {THREE.TextureDataType=} type
 * @param {number=} anisotropy
 */
THREE.Texture = function(image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {};


/**
 * @type {number}
 */
THREE.Texture.prototype.id;


/**
 * @type {string}
 */
THREE.Texture.prototype.uuid;


/**
 * @type {string}
 */
THREE.Texture.prototype.name;


/**
 * @type {string}
 */
THREE.Texture.prototype.sourceFile;


/**
 * @type {*}
 */
THREE.Texture.prototype.image;


/**
 * @type {Array<THREE.ImageData>}
 */
THREE.Texture.prototype.mipmaps;


/**
 * @type {THREE.Mapping}
 */
THREE.Texture.prototype.mapping;


/**
 * @type {THREE.Wrapping}
 */
THREE.Texture.prototype.wrapS;


/**
 * @type {THREE.Wrapping}
 */
THREE.Texture.prototype.wrapT;


/**
 * @type {THREE.TextureFilter}
 */
THREE.Texture.prototype.magFilter;


/**
 * @type {THREE.TextureFilter}
 */
THREE.Texture.prototype.minFilter;


/**
 * @type {number}
 */
THREE.Texture.prototype.anisotropy;


/**
 * @type {THREE.PixelFormat}
 */
THREE.Texture.prototype.format;


/**
 * @type {THREE.TextureDataType}
 */
THREE.Texture.prototype.type;


/**
 * @type {THREE.Vector2}
 */
THREE.Texture.prototype.offset;


/**
 * @type {THREE.Vector2}
 */
THREE.Texture.prototype.repeat;


/**
 * @type {boolean}
 */
THREE.Texture.prototype.generateMipmaps;


/**
 * @type {boolean}
 */
THREE.Texture.prototype.premultiplyAlpha;


/**
 * @type {boolean}
 */
THREE.Texture.prototype.flipY;


/**
 * @type {number}
 */
THREE.Texture.prototype.unpackAlignment;


/**
 * @type {number}
 */
THREE.Texture.prototype.version;


/**
 * @type {boolean}
 */
THREE.Texture.prototype.needsUpdate;


/**
 * @type {THREE.() => void}
 */
THREE.Texture.prototype.onUpdate;


/**
 * @type {*}
 */
THREE.Texture.prototype.DEFAULT_IMAGE;


/**
 * @type {*}
 */
THREE.Texture.prototype.DEFAULT_MAPPING;


/**
 * @return {THREE.Texture}
 */
THREE.Texture.prototype.clone = function() {};


/**
 * @param {THREE.Texture} source
 * @return {THREE.Texture}
 */
THREE.Texture.prototype.copy = function(source) {};


/**
 * @param {*} meta
 * @return {*}
 */
THREE.Texture.prototype.toJSON = function(meta) {};


/**
 * @return {THREE.void}
 */
THREE.Texture.prototype.dispose = function() {};


/**
 * @param {THREE.Vector} uv
 * @return {THREE.void}
 */
THREE.Texture.prototype.transformUv = function(uv) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.Texture.prototype.addEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.Texture.prototype.hasEventListener = function(type, listener) {};


/**
 * @param {string} type
 * @param {THREE.(event: any) => void} listener
 * @return {THREE.void}
 */
THREE.Texture.prototype.removeEventListener = function(type, listener) {};


/**
 * @param {THREE.{ type: string; target: any; }} event
 * @return {THREE.void}
 */
THREE.Texture.prototype.dispatchEvent = function(event) {};


/**
 * @constructor
 * @extends {THREE.Texture}
 * @param {THREE.HTMLVideoElement} video
 * @param {THREE.Mapping=} mapping
 * @param {THREE.Wrapping=} wrapS
 * @param {THREE.Wrapping=} wrapT
 * @param {THREE.TextureFilter=} magFilter
 * @param {THREE.TextureFilter=} minFilter
 * @param {THREE.PixelFormat=} format
 * @param {THREE.TextureDataType=} type
 * @param {number=} anisotropy
 */
THREE.VideoTexture = function(video, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {};


/**
 * @type {boolean}
 */
THREE.VideoTexture.prototype.generateMipmaps;


/**
 * @type {(THREE.{
        tangentQuadraticBezier(t: number, p0: number, p1: number, p2: number): number;
        tangentCubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number;
        tangentSpline(t: number, p0: number, p1: number, p2: number, p3: number): number;
        interpolate(p0: number, p1: number, p2: number, p3: number, t: number): number;
    }|THREE.{
        tangentQuadraticBezier(t: number, p0: number, p1: number, p2: number): number;
        tangentCubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number;
        tangentSpline(t: number, p0: number, p1: number, p2: number, p3: number): number;
        interpolate(p0: number, p1: number, p2: number, p3: number, t: number): number;
    })}
*/
THREE.CurveUtils;


/**
 * @type {{crossOrigin: string}}
 */
THREE.ImageUtils;


/**
 * @type {THREE.{
        createMultiMaterialObject(geometry: Geometry, materials: Material[]): Object3D;
        detach(child: Object3D, parent: Object3D, scene: Scene): void;
        attach(child: Object3D, scene: Scene, parent: Object3D): void;
    }}
*/
THREE.SceneUtils;


/**
 * @type {THREE.{
        area( contour: number[] ): number;
        triangulate( contour: number[], indices: boolean ): number[];
        triangulateShape( contour: number[], holes: any[] ): number[];
        isClockWise( pts: number[] ): boolean;
        b2( t: number, p0: number, p1: number, p2: number ): number;
        b3( t: number, p0: number, p1: number, p2: number, p3: number ): number;
    }}
*/
THREE.ShapeUtils;


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {THREE.AudioListener} listener
 */
THREE.Audio = function(listener) {};


/**
 * @type {string}
 */
THREE.Audio.prototype.type;


/**
 * @type {THREE.AudioContext}
 */
THREE.Audio.prototype.context;


/**
 * @type {THREE.AudioBufferSourceNode}
 */
THREE.Audio.prototype.source;


/**
 * @type {THREE.GainNode}
 */
THREE.Audio.prototype.gain;


/**
 * @type {THREE.PannerNode}
 */
THREE.Audio.prototype.panner;


/**
 * @type {boolean}
 */
THREE.Audio.prototype.autoplay;


/**
 * @type {number}
 */
THREE.Audio.prototype.startTime;


/**
 * @type {number}
 */
THREE.Audio.prototype.playbackRate;


/**
 * @type {boolean}
 */
THREE.Audio.prototype.isPlaying;


/**
 * @param {string} file
 * @return {THREE.Audio}
 */
THREE.Audio.prototype.load = function(file) {};


/**
 * @return {THREE.void}
 */
THREE.Audio.prototype.play = function() {};


/**
 * @return {THREE.void}
 */
THREE.Audio.prototype.pause = function() {};


/**
 * @return {THREE.void}
 */
THREE.Audio.prototype.stop = function() {};


/**
 * @return {THREE.void}
 */
THREE.Audio.prototype.connect = function() {};


/**
 * @return {THREE.void}
 */
THREE.Audio.prototype.disconnect = function() {};


/**
 * @param {*} value
 * @return {THREE.void}
 */
THREE.Audio.prototype.setFilter = function(value) {};


/**
 * @return {*}
 */
THREE.Audio.prototype.getFilter = function() {};


/**
 * @param {number} value
 * @return {THREE.void}
 */
THREE.Audio.prototype.setPlaybackRate = function(value) {};


/**
 * @return {number}
 */
THREE.Audio.prototype.getPlaybackRate = function() {};


/**
 * @param {boolean} value
 * @return {THREE.void}
 */
THREE.Audio.prototype.setLoop = function(value) {};


/**
 * @return {boolean}
 */
THREE.Audio.prototype.getLoop = function() {};


/**
 * @param {number} value
 * @return {THREE.void}
 */
THREE.Audio.prototype.setRefDistance = function(value) {};


/**
 * @return {number}
 */
THREE.Audio.prototype.getRefDistance = function() {};


/**
 * @param {number} value
 * @return {THREE.void}
 */
THREE.Audio.prototype.setRolloffFactor = function(value) {};


/**
 * @return {number}
 */
THREE.Audio.prototype.getRolloffFactor = function() {};


/**
 * @param {number} value
 * @return {THREE.void}
 */
THREE.Audio.prototype.setVolume = function(value) {};


/**
 * @return {number}
 */
THREE.Audio.prototype.getVolume = function() {};


/**
 * @param {boolean=} force
 * @return {THREE.void}
 */
THREE.Audio.prototype.updateMatrixWorld = function(force) {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 */
THREE.AudioListener = function() {};


/**
 * @type {string}
 */
THREE.AudioListener.prototype.type;


/**
 * @type {THREE.AudioContext}
 */
THREE.AudioListener.prototype.context;


/**
 * @param {boolean=} force
 * @return {THREE.void}
 */
THREE.AudioListener.prototype.updateMatrixWorld = function(force) {};


/**
 * @constructor
 */
THREE.Curve = function() {};


/**
 * @param {THREE.Function} constructorFunc
 * @param {THREE.Function} getPointFunc
 * @return {THREE.Function}
 */
THREE.Curve.create = function(constructorFunc, getPointFunc) {};


/**
 * @param {number} t
 * @return {THREE.T}
 */
THREE.Curve.prototype.getPoint = function(t) {};


/**
 * @param {number} u
 * @return {THREE.T}
 */
THREE.Curve.prototype.getPointAt = function(u) {};


/**
 * @param {number=} divisions
 * @return {Array<THREE.T>}
 */
THREE.Curve.prototype.getPoints = function(divisions) {};


/**
 * @param {number=} divisions
 * @return {Array<THREE.T>}
 */
THREE.Curve.prototype.getSpacedPoints = function(divisions) {};


/**
 * @return {number}
 */
THREE.Curve.prototype.getLength = function() {};


/**
 * @param {number=} divisions
 * @return {Array<number>}
 */
THREE.Curve.prototype.getLengths = function(divisions) {};


/**
 * @return {THREE.void}
 */
THREE.Curve.prototype.updateArcLengths = function() {};


/**
 * @param {number} u
 * @param {number} distance
 * @return {number}
 */
THREE.Curve.prototype.getUtoTmapping = function(u, distance) {};


/**
 * @param {number} t
 * @return {THREE.T}
 */
THREE.Curve.prototype.getTangent = function(t) {};


/**
 * @param {number} u
 * @return {THREE.T}
 */
THREE.Curve.prototype.getTangentAt = function(u) {};


/**
 * @interface
 */
THREE.BoundingBox = function() {};


/**
 * @constructor
 * @extends {THREE.Curve}
 */
THREE.CurvePath = function() {};


/**
 * @type {Array<THREE.Curve<T>>}
 */
THREE.CurvePath.prototype.curves;


/**
 * @type {boolean}
 */
THREE.CurvePath.prototype.autoClose;


/**
 * @param {THREE.Curve} curve
 * @return {THREE.void}
 */
THREE.CurvePath.prototype.add = function(curve) {};


/**
 * @return {boolean}
 */
THREE.CurvePath.prototype.checkConnection = function() {};


/**
 * @return {THREE.void}
 */
THREE.CurvePath.prototype.closePath = function() {};


/**
 * @param {number} t
 * @return {THREE.T}
 */
THREE.CurvePath.prototype.getPoint = function(t) {};


/**
 * @return {number}
 */
THREE.CurvePath.prototype.getLength = function() {};


/**
 * @return {Array<number>}
 */
THREE.CurvePath.prototype.getCurveLengths = function() {};


/**
 * @param {number} divisions
 * @return {THREE.Geometry}
 */
THREE.CurvePath.prototype.createPointsGeometry = function(divisions) {};


/**
 * @param {number} divisions
 * @return {THREE.Geometry}
 */
THREE.CurvePath.prototype.createSpacedPointsGeometry = function(divisions) {};


/**
 * @param {Array<THREE.T>} points
 * @return {THREE.Geometry}
 */
THREE.CurvePath.prototype.createGeometry = function(points) {};


/**

*/
THREE.PathActions = {};


/**

*/
THREE.PathActions.MOVE_TO = {};


/**

*/
THREE.PathActions.LINE_TO = {};


/**

*/
THREE.PathActions.QUADRATIC_CURVE_TO = {};


/**

*/
THREE.PathActions.BEZIER_CURVE_TO = {};


/**

*/
THREE.PathActions.CSPLINE_THRU = {};


/**

*/
THREE.PathActions.ARC = {};


/**

*/
THREE.PathActions.ELLIPSE = {};


/**
 * @interface
 */
THREE.PathAction = function() {};


/**
 * @constructor
 * @extends {THREE.CurvePath}
 * @param {Array<THREE.Vector2>=} points
 */
THREE.Path = function(points) {};


/**
 * @type {Array<THREE.PathAction>}
 */
THREE.Path.prototype.actions;


/**
 * @param {Array<THREE.Vector2>} vectors
 * @return {THREE.void}
 */
THREE.Path.prototype.fromPoints = function(vectors) {};


/**
 * @param {number} x
 * @param {number} y
 * @return {THREE.void}
 */
THREE.Path.prototype.moveTo = function(x, y) {};


/**
 * @param {number} x
 * @param {number} y
 * @return {THREE.void}
 */
THREE.Path.prototype.lineTo = function(x, y) {};


/**
 * @param {number} aCPx
 * @param {number} aCPy
 * @param {number} aX
 * @param {number} aY
 * @return {THREE.void}
 */
THREE.Path.prototype.quadraticCurveTo = function(aCPx, aCPy, aX, aY) {};


/**
 * @param {number} aCP1x
 * @param {number} aCP1y
 * @param {number} aCP2x
 * @param {number} aCP2y
 * @param {number} aX
 * @param {number} aY
 * @return {THREE.void}
 */
THREE.Path.prototype.bezierCurveTo = function(aCP1x, aCP1y, aCP2x, aCP2y, aX, aY) {};


/**
 * @param {Array<THREE.Vector2>} pts
 * @return {THREE.void}
 */
THREE.Path.prototype.splineThru = function(pts) {};


/**
 * @param {number} aX
 * @param {number} aY
 * @param {number} aRadius
 * @param {number} aStartAngle
 * @param {number} aEndAngle
 * @param {boolean} aClockwise
 * @return {THREE.void}
 */
THREE.Path.prototype.arc = function(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {};


/**
 * @param {number} aX
 * @param {number} aY
 * @param {number} aRadius
 * @param {number} aStartAngle
 * @param {number} aEndAngle
 * @param {boolean} aClockwise
 * @return {THREE.void}
 */
THREE.Path.prototype.absarc = function(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {};


/**
 * @param {number} aX
 * @param {number} aY
 * @param {number} xRadius
 * @param {number} yRadius
 * @param {number} aStartAngle
 * @param {number} aEndAngle
 * @param {boolean} aClockwise
 * @param {number} aRotation
 * @return {THREE.void}
 */
THREE.Path.prototype.ellipse = function(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation) {};


/**
 * @param {number} aX
 * @param {number} aY
 * @param {number} xRadius
 * @param {number} yRadius
 * @param {number} aStartAngle
 * @param {number} aEndAngle
 * @param {boolean} aClockwise
 * @param {number} aRotation
 * @return {THREE.void}
 */
THREE.Path.prototype.absellipse = function(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation) {};


/**
 * @param {number=} divisions
 * @param {boolean=} closedPath
 * @return {Array<THREE.Vector2>}
 */
THREE.Path.prototype.getSpacedPoints = function(divisions, closedPath) {};


/**
 * @param {number=} divisions
 * @param {boolean=} closedPath
 * @return {Array<THREE.Vector2>}
 */
THREE.Path.prototype.getPoints = function(divisions, closedPath) {};


/**
 * @return {Array<THREE.Shape>}
 */
THREE.Path.prototype.toShapes = function() {};


/**
 * @constructor
 * @extends {THREE.Path}
 * @param {Array<THREE.Vector2>=} points
 */
THREE.Shape = function(points) {};


/**
 * @type {Array<THREE.Path>}
 */
THREE.Shape.prototype.holes;


/**
 * @param {*=} options
 * @return {THREE.ExtrudeGeometry}
 */
THREE.Shape.prototype.extrude = function(options) {};


/**
 * @param {*=} options
 * @return {THREE.ShapeGeometry}
 */
THREE.Shape.prototype.makeGeometry = function(options) {};


/**
 * @param {number} divisions
 * @return {Array<THREE.Vector2[]>}
 */
THREE.Shape.prototype.getPointsHoles = function(divisions) {};


/**
 * @param {number} divisions
 * @return {{shape: Array<THREE.Vector2>, holes: Array<THREE.Vector2[]>}}
 */
THREE.Shape.prototype.extractAllPoints = function(divisions) {};


/**
 * @param {number} divisions
 * @return {Array<THREE.Vector2>}
 */
THREE.Shape.prototype.extractPoints = function(divisions) {};


/**
 * @constructor
 * @extends {THREE.EllipseCurve}
 * @param {number} aX
 * @param {number} aY
 * @param {number} aRadius
 * @param {number} aStartAngle
 * @param {number} aEndAngle
 * @param {boolean} aClockwise
 */
THREE.ArcCurve = function(aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {};


/**
 * @constructor
 * @extends {THREE.Curve}
 */
THREE.CatmullRomCurve3 = function() {};


/**
 * @constructor
 * @extends {THREE.Curve}
 * @param {Array<THREE.Vector3>=} points
 */
THREE.ClosedSplineCurve3 = function(points) {};


/**
 * @type {Array<THREE.Vector3>}
 */
THREE.ClosedSplineCurve3.prototype.points;


/**
 * @constructor
 * @extends {THREE.Curve}
 * @param {THREE.Vector2} v0
 * @param {THREE.Vector2} v1
 * @param {THREE.Vector2} v2
 * @param {THREE.Vector2} v3
 */
THREE.CubicBezierCurve = function(v0, v1, v2, v3) {};


/**
 * @type {THREE.Vector2}
 */
THREE.CubicBezierCurve.prototype.v0;


/**
 * @type {THREE.Vector2}
 */
THREE.CubicBezierCurve.prototype.v1;


/**
 * @type {THREE.Vector2}
 */
THREE.CubicBezierCurve.prototype.v2;


/**
 * @type {THREE.Vector2}
 */
THREE.CubicBezierCurve.prototype.v3;


/**
 * @constructor
 * @extends {THREE.Curve}
 * @param {THREE.Vector3} v0
 * @param {THREE.Vector3} v1
 * @param {THREE.Vector3} v2
 * @param {THREE.Vector3} v3
 */
THREE.CubicBezierCurve3 = function(v0, v1, v2, v3) {};


/**
 * @type {THREE.Vector3}
 */
THREE.CubicBezierCurve3.prototype.v0;


/**
 * @type {THREE.Vector3}
 */
THREE.CubicBezierCurve3.prototype.v1;


/**
 * @type {THREE.Vector3}
 */
THREE.CubicBezierCurve3.prototype.v2;


/**
 * @type {THREE.Vector3}
 */
THREE.CubicBezierCurve3.prototype.v3;


/**
 * @constructor
 * @extends {THREE.Curve}
 * @param {number} aX
 * @param {number} aY
 * @param {number} xRadius
 * @param {number} yRadius
 * @param {number} aStartAngle
 * @param {number} aEndAngle
 * @param {boolean} aClockwise
 * @param {number} aRotation
 */
THREE.EllipseCurve = function(aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation) {};


/**
 * @type {number}
 */
THREE.EllipseCurve.prototype.aX;


/**
 * @type {number}
 */
THREE.EllipseCurve.prototype.aY;


/**
 * @type {number}
 */
THREE.EllipseCurve.prototype.xRadius;


/**
 * @type {number}
 */
THREE.EllipseCurve.prototype.yRadius;


/**
 * @type {number}
 */
THREE.EllipseCurve.prototype.aStartAngle;


/**
 * @type {number}
 */
THREE.EllipseCurve.prototype.aEndAngle;


/**
 * @type {boolean}
 */
THREE.EllipseCurve.prototype.aClockwise;


/**
 * @type {number}
 */
THREE.EllipseCurve.prototype.aRotation;


/**
 * @constructor
 * @extends {THREE.Curve}
 * @param {THREE.Vector2} v1
 * @param {THREE.Vector2} v2
 */
THREE.LineCurve = function(v1, v2) {};


/**
 * @type {THREE.Vector2}
 */
THREE.LineCurve.prototype.v1;


/**
 * @type {THREE.Vector2}
 */
THREE.LineCurve.prototype.v2;


/**
 * @constructor
 * @extends {THREE.Curve}
 * @param {THREE.Vector3} v1
 * @param {THREE.Vector3} v2
 */
THREE.LineCurve3 = function(v1, v2) {};


/**
 * @type {THREE.Vector3}
 */
THREE.LineCurve3.prototype.v1;


/**
 * @type {THREE.Vector3}
 */
THREE.LineCurve3.prototype.v2;


/**
 * @constructor
 * @extends {THREE.Curve}
 * @param {THREE.Vector2} v0
 * @param {THREE.Vector2} v1
 * @param {THREE.Vector2} v2
 */
THREE.QuadraticBezierCurve = function(v0, v1, v2) {};


/**
 * @type {THREE.Vector2}
 */
THREE.QuadraticBezierCurve.prototype.v0;


/**
 * @type {THREE.Vector2}
 */
THREE.QuadraticBezierCurve.prototype.v1;


/**
 * @type {THREE.Vector2}
 */
THREE.QuadraticBezierCurve.prototype.v2;


/**
 * @constructor
 * @extends {THREE.Curve}
 * @param {THREE.Vector3} v0
 * @param {THREE.Vector3} v1
 * @param {THREE.Vector3} v2
 */
THREE.QuadraticBezierCurve3 = function(v0, v1, v2) {};


/**
 * @type {THREE.Vector3}
 */
THREE.QuadraticBezierCurve3.prototype.v0;


/**
 * @type {THREE.Vector3}
 */
THREE.QuadraticBezierCurve3.prototype.v1;


/**
 * @type {THREE.Vector3}
 */
THREE.QuadraticBezierCurve3.prototype.v2;


/**
 * @constructor
 * @extends {THREE.Curve}
 * @param {Array<THREE.Vector2>=} points
 */
THREE.SplineCurve = function(points) {};


/**
 * @type {Array<THREE.Vector2>}
 */
THREE.SplineCurve.prototype.points;


/**
 * @constructor
 * @extends {THREE.Curve}
 * @param {Array<THREE.Vector3>=} points
 */
THREE.SplineCurve3 = function(points) {};


/**
 * @type {Array<THREE.Vector3>}
 */
THREE.SplineCurve3.prototype.points;


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {number} width
 * @param {number} height
 * @param {number} depth
 * @param {number=} widthSegments
 * @param {number=} heightSegments
 * @param {number=} depthSegments
 */
THREE.BoxGeometry = function(width, height, depth, widthSegments, heightSegments, depthSegments) {};


/**
 * @type {{width: number, height: number, depth: number, widthSegments: number, heightSegments: number, depthSegments: number}}
 */
THREE.BoxGeometry.prototype.parameters;


/**
 * @return {THREE.BoxGeometry}
 */
THREE.BoxGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {number=} radius
 * @param {number=} segments
 * @param {number=} thetaStart
 * @param {number=} thetaLength
 */
THREE.CircleBufferGeometry = function(radius, segments, thetaStart, thetaLength) {};


/**
 * @type {{radius: number, segments: number, thetaStart: number, thetaLength: number}}
 */
THREE.CircleBufferGeometry.prototype.parameters;


/**
 * @return {THREE.CircleBufferGeometry}
 */
THREE.CircleBufferGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {number=} radius
 * @param {number=} segments
 * @param {number=} thetaStart
 * @param {number=} thetaLength
 */
THREE.CircleGeometry = function(radius, segments, thetaStart, thetaLength) {};


/**
 * @type {{radius: number, segments: number, thetaStart: number, thetaLength: number}}
 */
THREE.CircleGeometry.prototype.parameters;


/**
 * @return {THREE.CircleGeometry}
 */
THREE.CircleGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.BoxGeometry}
 */
THREE.CubeGeometry = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {number=} radiusTop
 * @param {number=} radiusBottom
 * @param {number=} height
 * @param {number=} radiusSegments
 * @param {number=} heightSegments
 * @param {boolean=} openEnded
 * @param {number=} thetaStart
 * @param {number=} thetaLength
 */
THREE.CylinderGeometry = function(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded, thetaStart, thetaLength) {};


/**
 * @type {{radiusTop: number, radiusBottom: number, height: number, radialSegments: number, heightSegments: number, openEnded: boolean, thetaStart: number, thetaLength: number}}
 */
THREE.CylinderGeometry.prototype.parameters;


/**
 * @return {THREE.CylinderGeometry}
 */
THREE.CylinderGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {number} radius
 * @param {number} detail
 */
THREE.DodecahedronGeometry = function(radius, detail) {};


/**
 * @type {{radius: number, detail: number}}
 */
THREE.DodecahedronGeometry.prototype.parameters;


/**
 * @return {THREE.DodecahedronGeometry}
 */
THREE.DodecahedronGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.BufferGeometry}
 * @param {THREE.BufferGeometry} geometry
 * @param {number} thresholdAngle
 */
THREE.EdgesGeometry = function(geometry, thresholdAngle) {};


/**
 * @return {THREE.EdgesGeometry}
 */
THREE.EdgesGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {(THREE.Shape|Array<THREE.Shape>)=} shape
 * @param {(*|*)=} options
 */
THREE.ExtrudeGeometry = function(shape, options) {};


/**
 * @type {THREE.{
            generateTopUV(geometry: Geometry, indexA: number, indexB: number, indexC: number): Vector2[];
            generateSideWallUV(geometry: Geometry, indexA: number, indexB: number, indexC: number, indexD: number): Vector2[];
        }}
*/
THREE.ExtrudeGeometry.prototype.WorldUVGenerator;


/**
 * @param {Array<THREE.Shape>} shapes
 * @param {*=} options
 * @return {THREE.void}
 */
THREE.ExtrudeGeometry.prototype.addShapeList = function(shapes, options) {};


/**
 * @param {THREE.Shape} shape
 * @param {*=} options
 * @return {THREE.void}
 */
THREE.ExtrudeGeometry.prototype.addShape = function(shape, options) {};


/**
 * @constructor
 * @extends {THREE.PolyhedronGeometry}
 * @param {number} radius
 * @param {number} detail
 */
THREE.IcosahedronGeometry = function(radius, detail) {};


/**
 * @return {THREE.IcosahedronGeometry}
 */
THREE.IcosahedronGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {Array<THREE.Vector3>} points
 * @param {number=} segments
 * @param {number=} phiStart
 * @param {number=} phiLength
 */
THREE.LatheGeometry = function(points, segments, phiStart, phiLength) {};


/**
 * @type {{points: Array<THREE.Vector3>, segments: number, phiStart: number, phiLength: number}}
 */
THREE.LatheGeometry.prototype.parameters;


/**
 * @constructor
 * @extends {THREE.PolyhedronGeometry}
 * @param {number} radius
 * @param {number} detail
 */
THREE.OctahedronGeometry = function(radius, detail) {};


/**
 * @return {THREE.OctahedronGeometry}
 */
THREE.OctahedronGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {THREE.(u: number, v: number) => Vector3} func
 * @param {number} slices
 * @param {number} stacks
 */
THREE.ParametricGeometry = function(func, slices, stacks) {};


/**
 * @type {{func: THREE.(u: number, v: number) => Vector3, slices: number, stacks: number}}
 */
THREE.ParametricGeometry.prototype.parameters;


/**
 * @constructor
 * @extends {THREE.BufferGeometry}
 * @param {number} width
 * @param {number} height
 * @param {number=} widthSegments
 * @param {number=} heightSegments
 */
THREE.PlaneBufferGeometry = function(width, height, widthSegments, heightSegments) {};


/**
 * @type {{width: number, height: number, widthSegments: number, heightSegments: number}}
 */
THREE.PlaneBufferGeometry.prototype.parameters;


/**
 * @return {THREE.PlaneBufferGeometry}
 */
THREE.PlaneBufferGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {number} width
 * @param {number} height
 * @param {number=} widthSegments
 * @param {number=} heightSegments
 */
THREE.PlaneGeometry = function(width, height, widthSegments, heightSegments) {};


/**
 * @type {{width: number, height: number, widthSegments: number, heightSegments: number}}
 */
THREE.PlaneGeometry.prototype.parameters;


/**
 * @return {THREE.PlaneGeometry}
 */
THREE.PlaneGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {Array<THREE.Vector3>} vertices
 * @param {Array<THREE.Face3>} faces
 * @param {number=} radius
 * @param {number=} detail
 */
THREE.PolyhedronGeometry = function(vertices, faces, radius, detail) {};


/**
 * @type {{vertices: Array<THREE.Vector3>, faces: Array<THREE.Face3>, radius: number, detail: number}}
 */
THREE.PolyhedronGeometry.prototype.parameters;


/**
 * @return {THREE.PolyhedronGeometry}
 */
THREE.PolyhedronGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {number=} innerRadius
 * @param {number=} outerRadius
 * @param {number=} thetaSegments
 * @param {number=} phiSegments
 * @param {number=} thetaStart
 * @param {number=} thetaLength
 */
THREE.RingGeometry = function(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength) {};


/**
 * @type {{innerRadius: number, outerRadius: number, thetaSegments: number, phiSegments: number, thetaStart: number, thetaLength: number}}
 */
THREE.RingGeometry.prototype.parameters;


/**
 * @return {THREE.RingGeometry}
 */
THREE.RingGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {(THREE.Shape|Array<THREE.Shape>)} shape
 * @param {(*|*)=} options
 */
THREE.ShapeGeometry = function(shape, options) {};


/**
 * @param {Array<THREE.Shape>} shapes
 * @param {*} options
 * @return {THREE.ShapeGeometry}
 */
THREE.ShapeGeometry.prototype.addShapeList = function(shapes, options) {};


/**
 * @param {THREE.Shape} shape
 * @param {*=} options
 * @return {THREE.void}
 */
THREE.ShapeGeometry.prototype.addShape = function(shape, options) {};


/**
 * @constructor
 * @extends {THREE.BufferGeometry}
 * @param {number} radius
 * @param {number=} widthSegments
 * @param {number=} heightSegments
 * @param {number=} phiStart
 * @param {number=} phiLength
 * @param {number=} thetaStart
 * @param {number=} thetaLength
 */
THREE.SphereBufferGeometry = function(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {};


/**
 * @type {{radius: number, widthSegments: number, heightSegments: number, phiStart: number, phiLength: number, thetaStart: number, thetaLength: number}}
 */
THREE.SphereBufferGeometry.prototype.parameters;


/**
 * @return {THREE.SphereBufferGeometry}
 */
THREE.SphereBufferGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {number} radius
 * @param {number=} widthSegments
 * @param {number=} heightSegments
 * @param {number=} phiStart
 * @param {number=} phiLength
 * @param {number=} thetaStart
 * @param {number=} thetaLength
 */
THREE.SphereGeometry = function(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength) {};


/**
 * @type {{radius: number, widthSegments: number, heightSegments: number, phiStart: number, phiLength: number, thetaStart: number, thetaLength: number}}
 */
THREE.SphereGeometry.prototype.parameters;


/**
 * @constructor
 * @extends {THREE.PolyhedronGeometry}
 * @param {number=} radius
 * @param {number=} detail
 */
THREE.TetrahedronGeometry = function(radius, detail) {};


/**
 * @return {THREE.TetrahedronGeometry}
 */
THREE.TetrahedronGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {number=} radius
 * @param {number=} tube
 * @param {number=} radialSegments
 * @param {number=} tubularSegments
 * @param {number=} arc
 */
THREE.TorusGeometry = function(radius, tube, radialSegments, tubularSegments, arc) {};


/**
 * @type {{radius: number, tube: number, radialSegments: number, tubularSegments: number, arc: number}}
 */
THREE.TorusGeometry.prototype.parameters;


/**
 * @return {THREE.TorusGeometry}
 */
THREE.TorusGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {number=} radius
 * @param {number=} tube
 * @param {number=} radialSegments
 * @param {number=} tubularSegments
 * @param {number=} p
 * @param {number=} q
 * @param {number=} heightScale
 */
THREE.TorusKnotGeometry = function(radius, tube, radialSegments, tubularSegments, p, q, heightScale) {};


/**
 * @type {{radius: number, tube: number, radialSegments: number, tubularSegments: number, p: number, q: number, heightScale: number}}
 */
THREE.TorusKnotGeometry.prototype.parameters;


/**
 * @return {THREE.TorusKnotGeometry}
 */
THREE.TorusKnotGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.Geometry}
 * @param {THREE.Path} path
 * @param {number=} segments
 * @param {number=} radius
 * @param {number=} radiusSegments
 * @param {boolean=} closed
 * @param {THREE.(u: number) => number=} taper
 */
THREE.TubeGeometry = function(path, segments, radius, radiusSegments, closed, taper) {};


/**
 * @param {number=} u
 * @return {number}
 */
THREE.TubeGeometry.NoTaper = function(u) {};


/**
 * @param {number} u
 * @return {number}
 */
THREE.TubeGeometry.SinusoidalTaper = function(u) {};


/**
 * @param {THREE.Path} path
 * @param {number} segments
 * @param {boolean} closed
 * @return {THREE.void}
 */
THREE.TubeGeometry.FrenetFrames = function(path, segments, closed) {};


/**
 * @type {{path: THREE.Path, segments: number, radius: number, radialSegments: number, closed: boolean, taper: THREE.(u: number) => number}}
 */
THREE.TubeGeometry.prototype.parameters;


/**
 * @type {Array<THREE.Vector3>}
 */
THREE.TubeGeometry.prototype.tangents;


/**
 * @type {Array<THREE.Vector3>}
 */
THREE.TubeGeometry.prototype.normals;


/**
 * @type {Array<THREE.Vector3>}
 */
THREE.TubeGeometry.prototype.binormals;


/**
 * @return {THREE.TubeGeometry}
 */
THREE.TubeGeometry.prototype.clone = function() {};


/**
 * @constructor
 * @extends {THREE.BufferGeometry}
 * @param {(THREE.Geometry |THREE. BufferGeometry)} geometry
 */
THREE.WireframeGeometry = function(geometry) {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {THREE.Vector3} dir
 * @param {THREE.Vector3=} origin
 * @param {number=} length
 * @param {number=} hex
 * @param {number=} headLength
 * @param {number=} headWidth
 */
THREE.ArrowHelper = function(dir, origin, length, hex, headLength, headWidth) {};


/**
 * @type {THREE.Line}
 */
THREE.ArrowHelper.prototype.line;


/**
 * @type {THREE.Mesh}
 */
THREE.ArrowHelper.prototype.cone;


/**
 * @param {THREE.Vector3} dir
 * @return {THREE.void}
 */
THREE.ArrowHelper.prototype.setDirection = function(dir) {};


/**
 * @param {number} length
 * @param {number=} headLength
 * @param {number=} headWidth
 * @return {THREE.void}
 */
THREE.ArrowHelper.prototype.setLength = function(length, headLength, headWidth) {};


/**
 * @param {number} hex
 * @return {THREE.void}
 */
THREE.ArrowHelper.prototype.setColor = function(hex) {};


/**
 * @constructor
 * @extends {THREE.LineSegments}
 * @param {number=} size
 */
THREE.AxisHelper = function(size) {};


/**
 * @constructor
 * @extends {THREE.Mesh}
 * @param {THREE.Object3D=} object
 * @param {number=} hex
 */
THREE.BoundingBoxHelper = function(object, hex) {};


/**
 * @type {THREE.Object3D}
 */
THREE.BoundingBoxHelper.prototype.object;


/**
 * @type {THREE.Box3}
 */
THREE.BoundingBoxHelper.prototype.box;


/**
 * @return {THREE.void}
 */
THREE.BoundingBoxHelper.prototype.update = function() {};


/**
 * @constructor
 * @extends {THREE.LineSegments}
 * @param {THREE.Object3D=} object
 */
THREE.BoxHelper = function(object) {};


/**
 * @param {THREE.Object3D=} object
 * @return {THREE.void}
 */
THREE.BoxHelper.prototype.update = function(object) {};


/**
 * @constructor
 * @extends {THREE.LineSegments}
 * @param {THREE.Camera} camera
 */
THREE.CameraHelper = function(camera) {};


/**
 * @type {THREE.Camera}
 */
THREE.CameraHelper.prototype.camera;


/**
 * @type {THREE.{ [id: string]: number[]; }}
 */
THREE.CameraHelper.prototype.pointMap;


/**
 * @return {THREE.void}
 */
THREE.CameraHelper.prototype.update = function() {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {THREE.Light} light
 * @param {number=} size
 */
THREE.DirectionalLightHelper = function(light, size) {};


/**
 * @type {THREE.Light}
 */
THREE.DirectionalLightHelper.prototype.light;


/**
 * @type {THREE.Line}
 */
THREE.DirectionalLightHelper.prototype.lightPlane;


/**
 * @type {THREE.Line}
 */
THREE.DirectionalLightHelper.prototype.targetLine;


/**
 * @return {THREE.void}
 */
THREE.DirectionalLightHelper.prototype.dispose = function() {};


/**
 * @return {THREE.void}
 */
THREE.DirectionalLightHelper.prototype.update = function() {};


/**
 * @constructor
 * @extends {THREE.LineSegments}
 * @param {THREE.Object3D} object
 * @param {number=} hex
 * @param {number=} thresholdAngle
 */
THREE.EdgesHelper = function(object, hex, thresholdAngle) {};


/**
 * @constructor
 * @extends {THREE.LineSegments}
 * @param {THREE.Object3D} object
 * @param {number=} size
 * @param {number=} hex
 * @param {number=} linewidth
 */
THREE.FaceNormalsHelper = function(object, size, hex, linewidth) {};


/**
 * @type {THREE.Object3D}
 */
THREE.FaceNormalsHelper.prototype.object;


/**
 * @type {number}
 */
THREE.FaceNormalsHelper.prototype.size;


/**
 * @param {THREE.Object3D=} object
 * @return {THREE.void}
 */
THREE.FaceNormalsHelper.prototype.update = function(object) {};


/**
 * @constructor
 * @extends {THREE.LineSegments}
 * @param {number} size
 * @param {number} step
 */
THREE.GridHelper = function(size, step) {};


/**
 * @type {THREE.Color}
 */
THREE.GridHelper.prototype.color1;


/**
 * @type {THREE.Color}
 */
THREE.GridHelper.prototype.color2;


/**
 * @param {number} colorCenterLine
 * @param {number} colorGrid
 * @return {THREE.void}
 */
THREE.GridHelper.prototype.setColors = function(colorCenterLine, colorGrid) {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {THREE.Light} light
 * @param {number} sphereSize
 */
THREE.HemisphereLightHelper = function(light, sphereSize) {};


/**
 * @type {THREE.Light}
 */
THREE.HemisphereLightHelper.prototype.light;


/**
 * @type {Array<THREE.Color>}
 */
THREE.HemisphereLightHelper.prototype.colors;


/**
 * @type {THREE.Mesh}
 */
THREE.HemisphereLightHelper.prototype.lightSphere;


/**
 * @return {THREE.void}
 */
THREE.HemisphereLightHelper.prototype.dispose = function() {};


/**
 * @return {THREE.void}
 */
THREE.HemisphereLightHelper.prototype.update = function() {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {THREE.Light} light
 * @param {number} sphereSize
 */
THREE.PointLightHelper = function(light, sphereSize) {};


/**
 * @type {THREE.Light}
 */
THREE.PointLightHelper.prototype.light;


/**
 * @return {THREE.void}
 */
THREE.PointLightHelper.prototype.dispose = function() {};


/**
 * @return {THREE.void}
 */
THREE.PointLightHelper.prototype.update = function() {};


/**
 * @constructor
 * @extends {THREE.LineSegments}
 * @param {THREE.Object3D} bone
 */
THREE.SkeletonHelper = function(bone) {};


/**
 * @type {Array<THREE.Bone>}
 */
THREE.SkeletonHelper.prototype.bones;


/**
 * @type {THREE.Object3D}
 */
THREE.SkeletonHelper.prototype.root;


/**
 * @param {THREE.Object3D} object
 * @return {Array<THREE.Bone>}
 */
THREE.SkeletonHelper.prototype.getBoneList = function(object) {};


/**
 * @return {THREE.void}
 */
THREE.SkeletonHelper.prototype.update = function() {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {THREE.Light} light
 * @param {number} sphereSize
 * @param {number} arrowLength
 */
THREE.SpotLightHelper = function(light, sphereSize, arrowLength) {};


/**
 * @type {THREE.Light}
 */
THREE.SpotLightHelper.prototype.light;


/**
 * @type {THREE.Mesh}
 */
THREE.SpotLightHelper.prototype.cone;


/**
 * @return {THREE.void}
 */
THREE.SpotLightHelper.prototype.dispose = function() {};


/**
 * @return {THREE.void}
 */
THREE.SpotLightHelper.prototype.update = function() {};


/**
 * @constructor
 * @extends {THREE.LineSegments}
 * @param {THREE.Object3D} object
 * @param {number=} size
 * @param {number=} hex
 * @param {number=} linewidth
 */
THREE.VertexNormalsHelper = function(object, size, hex, linewidth) {};


/**
 * @type {THREE.Object3D}
 */
THREE.VertexNormalsHelper.prototype.object;


/**
 * @type {number}
 */
THREE.VertexNormalsHelper.prototype.size;


/**
 * @param {THREE.Object3D=} object
 * @return {THREE.void}
 */
THREE.VertexNormalsHelper.prototype.update = function(object) {};


/**
 * @constructor
 * @extends {THREE.LineSegments}
 * @param {THREE.Object3D} object
 * @param {number=} hex
 */
THREE.WireframeHelper = function(object, hex) {};


/**
 * @constructor
 * @extends {THREE.Object3D}
 * @param {THREE.Material} material
 */
THREE.ImmediateRenderObject = function(material) {};


/**
 * @type {THREE.Material}
 */
THREE.ImmediateRenderObject.prototype.material;


/**
 * @param {THREE.Function} renderCallback
 * @return {THREE.void}
 */
THREE.ImmediateRenderObject.prototype.render = function(renderCallback) {};


/**
 * @interface
 */
THREE.MorphBlendMeshAnimation = function() {};


/**
 * @constructor
 * @extends {THREE.Mesh}
 * @param {THREE.Geometry} geometry
 * @param {THREE.Material} material
 */
THREE.MorphBlendMesh = function(geometry, material) {};


/**
 * @type {THREE.{ [name: string]: MorphBlendMeshAnimation; }}
 */
THREE.MorphBlendMesh.prototype.animationsMap;


/**
 * @type {Array<THREE.MorphBlendMeshAnimation>}
 */
THREE.MorphBlendMesh.prototype.animationsList;


/**
 * @param {string} name
 * @param {number} start
 * @param {number} end
 * @param {number} fps
 * @return {THREE.void}
 */
THREE.MorphBlendMesh.prototype.createAnimation = function(name, start, end, fps) {};


/**
 * @param {number} fps
 * @return {THREE.void}
 */
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(fps) {};


/**
 * @param {string} name
 * @return {THREE.void}
 */
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(name) {};


/**
 * @param {string} name
 * @return {THREE.void}
 */
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(name) {};


/**
 * @param {string} name
 * @param {number} fps
 * @return {THREE.void}
 */
THREE.MorphBlendMesh.prototype.setAnimationFPS = function(name, fps) {};


/**
 * @param {string} name
 * @param {number} duration
 * @return {THREE.void}
 */
THREE.MorphBlendMesh.prototype.setAnimationDuration = function(name, duration) {};


/**
 * @param {string} name
 * @param {number} weight
 * @return {THREE.void}
 */
THREE.MorphBlendMesh.prototype.setAnimationWeight = function(name, weight) {};


/**
 * @param {string} name
 * @param {number} time
 * @return {THREE.void}
 */
THREE.MorphBlendMesh.prototype.setAnimationTime = function(name, time) {};


/**
 * @param {string} name
 * @return {number}
 */
THREE.MorphBlendMesh.prototype.getAnimationTime = function(name) {};


/**
 * @param {string} name
 * @return {number}
 */
THREE.MorphBlendMesh.prototype.getAnimationDuration = function(name) {};


/**
 * @param {string} name
 * @return {THREE.void}
 */
THREE.MorphBlendMesh.prototype.playAnimation = function(name) {};


/**
 * @param {string} name
 * @return {THREE.void}
 */
THREE.MorphBlendMesh.prototype.stopAnimation = function(name) {};


/**
 * @param {number} delta
 * @return {THREE.void}
 */
THREE.MorphBlendMesh.prototype.update = function(delta) {};


var three = {};