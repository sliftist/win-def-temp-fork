/**
 * win32-def
 * win32 definitions for node-ffi
 *
 * @version 20.4.0
 * @author waiting
 * @license MIT
 * @link https://waitingsong.github.io/node-win32-api
 */

'use strict';

var ref = require('ref-napi');
var StructDi = require('ref-struct-di');
var UnionDi = require('ref-union-di');
var assert = require('assert');

const config = {
    _WIN64: process.arch === 'x64',
};
const settingsDefault = {
    singleton: true,
    _WIN64: config._WIN64,
};

/* eslint-disable id-length */
/**
 * @link https://tootallnate.github.io/ref/
 */
exports.Def = void 0;
(function (Def) {
    Def["bool"] = "bool";
    Def["byte"] = "byte";
    Def["int"] = "int";
    Def["int8"] = "int8";
    Def["int16"] = "int16";
    Def["int32"] = "int32";
    Def["int64"] = "int64";
    Def["float"] = "float";
    Def["long"] = "long";
    Def["longlong"] = "longlong";
    Def["ptr"] = "pointer";
    Def["uchar"] = "uchar";
    Def["uint"] = "uint";
    Def["uint8"] = "uint8";
    Def["uint16"] = "uint16";
    Def["uint32"] = "uint32";
    Def["uint64"] = "uint64";
    Def["ulong"] = "ulong";
    Def["ulonglong"] = "ulonglong";
    Def["ushort"] = "ushort";
    Def["void"] = "void";
    Def["boolPtr"] = "bool*";
    Def["bytePtr"] = "byte*";
    Def["charPtr"] = "char*";
    Def["intPtr"] = "int*";
    Def["int8Ptr"] = "int8*";
    Def["int16Ptr"] = "int16*";
    Def["int32Ptr"] = "int32*";
    Def["int64Ptr"] = "int64*";
    Def["floatPtr"] = "float*";
    Def["longPtr"] = "long*";
    Def["uintPtr"] = "uint*";
    Def["uint8Ptr"] = "uint8*";
    Def["intPtrPtr"] = "int**";
    Def["uint16Ptr"] = "uint16*";
    Def["uint32Ptr"] = "uint32*";
    Def["uint64Ptr"] = "uint64*";
    Def["ulonglongPtr"] = "ulonglong*";
    Def["voidPtr"] = "void*";
    Def["uintPtrPtr"] = "uint**";
    Def["uint16PtrPtr"] = "uint16**";
    Def["uint32PtrPtr"] = "uint32**";
    Def["uint64PtrPtr"] = "uint64**";
    Def["ulonglongPtrPtr"] = "ulonglong**";
    Def["voidPtrPtr"] = "void**";
})(exports.Def = exports.Def || (exports.Def = {}));

// windows data types for ref module https://github.com/TooTallNate/ref
const { _WIN64 } = config;
/**
 * @link https://docs.microsoft.com/en-us/windows/win32/secauthz/access-mask-format
 */
exports.Def.int32;
exports.Def.uint16;
exports.Def.uint32;
_WIN64 ? exports.Def.uint64Ptr : exports.Def.uint32Ptr;
/**
 * `uint32` or `uint64` used as value usage (memory address) instead of PVOID (Buffer),
 * Use `HANDLE` (number) for params defintion of the api,
 * @see https://stackoverflow.com/questions/18266626/what-is-the-range-of-a-windows-handle-on-a-64-bits-application/29526711#29526711
 */
_WIN64 ? exports.Def.uint64 : exports.Def.uint32;
_WIN64 ? exports.Def.int64 : exports.Def.int32;
_WIN64 ? exports.Def.int64 : exports.Def.int32;
exports.Def.void;
exports.Def.uint16;
exports.Def.int16;
exports.Def.int;
exports.Def.bool;
exports.Def.byte;
exports.Def.ptr; // https://msdn.microsoft.com/en-us/library/windows/desktop/ms633573(v=vs.85).aspx
exports.Def.uint8;
exports.Def.uint8;
// export const CONST;
exports.Def.uint64;
exports.Def.uint32;
exports.Def.uint64;
exports.Def.float;
_WIN64 ? exports.Def.int32 : exports.Def.int16;
exports.Def.long;
/** A 32-bit signed integer */
exports.Def.int;
_WIN64 ? exports.Def.int64 : exports.Def.int32;
exports.Def.int8;
exports.Def.int16;
exports.Def.int32;
exports.Def.int64;
exports.Def.long;
exports.Def.longlong;
exports.Def.int32;
exports.Def.int64;
exports.Def.bytePtr;
exports.Def.uint8Ptr;
exports.Def.uint16Ptr;
exports.Def.uint16Ptr;
exports.Def.voidPtr;
exports.Def.uint16Ptr;
_WIN64 ? exports.Def.int64Ptr : exports.Def.int32Ptr;
exports.Def.intPtr;
exports.Def.int32Ptr;
const LPMSG = exports.Def.ptr;
exports.Def.ptr;
const LPSTR = exports.Def.charPtr;
const LPWSTR = exports.Def.uint16Ptr;
const LPTSTR = exports.Def.uint16Ptr;
const LPWORD = exports.Def.uint16Ptr;
exports.Def.uint32;
exports.Def.intPtr;
exports.Def.boolPtr;
exports.Def.bytePtr;
exports.Def.charPtr;
exports.Def.uint8Ptr;
_WIN64 ? exports.Def.int16Ptr : exports.Def.int8Ptr;
exports.Def.uint16Ptr;
exports.Def.uint32Ptr;
exports.Def.uint64Ptr;
exports.Def.uint32Ptr;
exports.Def.uint64Ptr;
exports.Def.floatPtr;
exports.Def.ptr;
_WIN64 ? exports.Def.uint64PtrPtr : exports.Def.uint32PtrPtr;
_WIN64 ? exports.Def.uint64PtrPtr : exports.Def.uint32PtrPtr;
exports.Def.intPtr;
exports.Def.intPtrPtr;
exports.Def.int8Ptr;
exports.Def.int16Ptr;
exports.Def.int32Ptr;
exports.Def.int64Ptr;
exports.Def.uint32Ptr;
exports.Def.longPtr;
exports.Def.int64Ptr;
exports.Def.ptr;
exports.Def.int32Ptr;
exports.Def.int64Ptr;
// ? A 32-bit pointer. On a 32-bit system, this is a native pointer.
// On a 64-bit system, this is a truncated 64-bit pointer.
_WIN64 ? exports.Def.int32Ptr : exports.Def.int32Ptr;
// ? A 64-bit pointer. On a 64-bit system, this is a native pointer.
// On a 32-bit system, this is a sign-extended 32-bit pointer.
_WIN64 ? exports.Def.int64Ptr : exports.Def.int32Ptr;
exports.Def.ptr;
exports.Def.ptr;
exports.Def.int16Ptr;
exports.Def.ptr;
exports.Def.charPtr;
exports.Def.int16Ptr;
exports.Def.uint16Ptr;
exports.Def.uint16Ptr;
exports.Def.ptr;
exports.Def.ptr;
exports.Def.uintPtr;
exports.Def.uintPtrPtr;
exports.Def.uint8Ptr;
exports.Def.uint16Ptr;
exports.Def.uint32Ptr;
exports.Def.uint64Ptr;
exports.Def.uintPtr;
exports.Def.uint64Ptr;
exports.Def.uint64PtrPtr;
exports.Def.uintPtr;
exports.Def.uint64Ptr;
exports.Def.uint16Ptr;
exports.Def.uint16Ptr;
exports.Def.uint16Ptr;
exports.Def.uint16Ptr;
exports.Def.uint64;
exports.Def.int16;
exports.Def.int16;
exports.Def.uint16;
exports.Def.uchar;
_WIN64 ? exports.Def.uint32 : exports.Def.uint16;
exports.Def.uint;
_WIN64 ? exports.Def.uint64 : exports.Def.uint32;
exports.Def.uint8;
exports.Def.uint16;
exports.Def.uint32;
exports.Def.uint64;
exports.Def.uint;
exports.Def.uint64;
exports.Def.uint32;
exports.Def.uint64;
exports.Def.ushort;
// export const WINAPI;
exports.Def.ptr;
exports.Def.ptr;
exports.Def.ptr;
// A pointer to an INITCOMMONCONTROLSEX
exports.Def.ptr;
exports.Def.ptr; // A pointer to a WNDCLASSEX
exports.Def.ptr; // A pointer to a WINDOWINFO structure
exports.Def.ptr; // A pointer to a FILETIME
exports.Def.ptr; // A pointer to a FILETIME
exports.Def.charPtr;

/**
 * Fixed length "Buffer" type, for use in Struct type definitions.
 * Like `wchar Name[32]` in C,
 * `getter` and `setter` functions are provided to access the buffer contents.
 * The starting and tailing terminal-null of returned string via `getter` is removed.
 */
function wcharBuffer(charLength) {
    assert(charLength >= 0);
    return BufferTypeFactory(charLength * 2, 'ucs2');
}
/**
 * Fixed length "Buffer" type, for use in Struct type definitions.
 *
 * Optionally setting the `encoding` param will force to call
 * `toString(encoding)` on the buffer returning a String instead.
 *
 * @see https://github.com/TooTallNate/ref-struct/issues/28#issuecomment-265626611
 * @ref https://gist.github.com/TooTallNate/80ac2d94b950216a2705
 */
function BufferTypeFactory(byteLength, encoding) {
    assert(byteLength >= 0);
    const inst = Object.create(ref.types.byte, {
        constructor: {
            configurable: true,
            enumerable: false,
            writable: true,
            value: BufferTypeFactory,
        },
        size: {
            configurable: true,
            enumerable: true,
            writable: false,
            value: byteLength,
        },
        encoding: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: encoding,
        },
        get: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: getFn,
        },
        set: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: setFn,
        },
    });
    return inst;
}
function getFn(buffer, offset) {
    const buf = buffer.subarray(offset, offset + this.size);
    if (this.encoding) {
        const str = buf.toString(this.encoding);
        return str.replace(/^\0+|\0+$/ug, '');
    }
    return buf;
}
function setFn(buffer, offset, value) {
    let buf;
    if (typeof value === 'string') {
        assert(this.encoding, 'BufferType.encoding is required when setting a string');
        buf = Buffer.from(value, this.encoding);
    }
    else if (Array.isArray(value)) {
        buf = Buffer.from(value);
    }
    else if (Buffer.isBuffer(value)) {
        buf = value;
    }
    else {
        throw new TypeError('Buffer instance expected');
    }
    if (buf.length > this.size) {
        throw new Error(`Buffer given is ${buf.length} bytes, but only ${this.size} bytes available`);
    }
    buf.copy(buffer, offset);
}

/* eslint-disable import/no-extraneous-dependencies */
// const UnionDi = _UnionDi
const Union = UnionDi(ref);
function UnionType(input) {
    // @ts-ignore
    return Union(input);
}
function UnionFactory(input) {
    // @ts-ignore
    return new Union(input)();
}
const defaultStructCharOptions = {
    useStringBuffer: true,
    maxCharLength: 1024,
    CharDefs: [
        LPMSG,
        LPSTR,
        LPWSTR,
        LPTSTR,
        LPWORD,
    ],
};
const Struct = StructDi(ref);
function StructType(input, options) {
    return genInitTyp(input, options);
}
function StructFactory(input, options) {
    return new genInitTyp(input, options)();
}
function genInitTyp(input, options) {
    const opts = {
        ...defaultStructCharOptions,
        ...options,
    };
    const initType = {};
    Object.entries(input).forEach(([key, value]) => {
        if (opts.useStringBuffer
            && typeof value === 'string'
            && opts.CharDefs.includes(value)) {
            initType[key] = wcharBuffer(opts.maxCharLength);
        }
        else {
            if (
                typeof value === 'object'
                && value
                // This is the same check "ref-napi" does to determine if the type
                && !('size' in value && 'indirection' in value)
            ) {
                initType[key] = genInitTyp(value, options)
            } else {
                initType[key] = value
            }
        }
    });
    return Struct(initType);
}

exports.BufferTypeFactory = BufferTypeFactory;
exports.StructFactory = StructFactory;
exports.StructType = StructType;
exports.UnionFactory = UnionFactory;
exports.UnionType = UnionType;
exports.config = config;
exports.defaultStructCharOptions = defaultStructCharOptions;
exports.settingsDefault = settingsDefault;
exports.wcharBuffer = wcharBuffer;
//# sourceMappingURL=index.cjs.map
