/*!
 * ====================================================
 * Kity Formula - v1.0.0 - 2014-04-19
 * https://github.com/kitygraph/formula
 * GitHub: https://github.com/kitygraph/formula.git 
 * Copyright (c) 2014 Baidu Kity Group; Licensed MIT
 * ====================================================
 */

(function () {
/**
 * cmd 内部定义
 * build用
 */

// 模块存储
var _modules = {};

function define ( id, deps, factory ) {

    _modules[ id ] = {

        exports: {},
        value: null,
        factory: null

    };

    if ( arguments.length === 2 ) {

        factory = deps;

    }

    if ( _modules.toString.call( factory ) === '[object Object]' ) {

        _modules[ id ][ 'value' ] = factory;

    } else if ( typeof factory === 'function' ) {

        _modules[ id ][ 'factory' ] = factory;

    } else {

        throw new Error( 'define函数未定义的行为' );

    }

}

function require ( id ) {

    var module = _modules[ id ],
        exports = null;

    if ( !module ) {

        return null;

    }

    if ( module.value ) {

        return module.value;

    }

    exports = module.factory.call( null, require, module.exports, module );

    // return 值不为空， 则以return值为最终值
    if ( exports ) {

        module.exports = exports;

    }

    module.value = module.exports;

    return module.value;

}

function use ( id ) {

    return require( id );

}
/**
 * 字符类
 */
define("char/char", [ "kity", "char/data", "char/data/number/0", "char/data/number/1", "char/data/number/2", "char/data/number/3", "char/data/number/4", "char/data/number/5", "char/data/number/6", "char/data/number/7", "char/data/number/8", "char/data/number/9", "char/data/character/a", "char/data/character/b", "char/data/character/c", "char/data/character/d", "char/data/character/e", "char/data/character/f", "char/data/character/g", "char/data/character/h", "char/data/character/i", "char/data/character/j", "char/data/character/k", "char/data/character/l", "char/data/character/m", "char/data/character/n", "char/data/character/o", "char/data/character/p", "char/data/character/q", "char/data/character/r", "char/data/character/s", "char/data/character/t", "char/data/character/u", "char/data/character/v", "char/data/character/w", "char/data/character/x", "char/data/character/y", "char/data/character/z", "char/data/character/ua", "char/data/character/ub", "char/data/character/uc", "char/data/character/ud", "char/data/character/ue", "char/data/character/uf", "char/data/character/ug", "char/data/character/uh", "char/data/character/ui", "char/data/character/uj", "char/data/character/uk", "char/data/character/ul", "char/data/character/um", "char/data/character/un", "char/data/character/uo", "char/data/character/up", "char/data/character/uq", "char/data/character/ur", "char/data/character/us", "char/data/character/ut", "char/data/character/uu", "char/data/character/uv", "char/data/character/uw", "char/data/character/ux", "char/data/character/uy", "char/data/character/uz", "char/data/symbol/base/l-parentheses", "char/data/symbol/base/r-parentheses", "char/data/symbol/base/negative", "char/data/symbol/relational/eq", "char/data/symbol/base/positive", "char/data/symbol/base/vertical", "char/data/symbol/base/slash", "char/data/symbol/base/exclamation", "char/data/symbol/base/l-brackets", "char/data/symbol/base/r-brackets", "char/data/symbol/base/colon", "char/data/symbol/base/quotation", "char/data/symbol/relational/lt", "char/data/symbol/relational/gt", "char/data/symbol/base/point", "char/data/symbol/base/l-braces", "char/data/symbol/base/r-braces", "char/data/symbol/base/comma", "char/data/symbol/base/times", "char/data/symbol/base/div", "char/data/symbol/base/pm", "char/data/symbol/base/mp", "char/data/symbol/base/ast", "char/data/symbol/base/cdot", "char/data/symbol/base/cdots", "char/data/symbol/base/ddots", "char/data/symbol/base/ldots", "char/data/symbol/base/vdots", "char/data/symbol/base/wedge", "char/data/symbol/base/vee", "char/data/symbol/base/mid", "char/data/symbol/relational/approx", "char/data/symbol/relational/equiv", "char/data/symbol/relational/geq", "char/data/symbol/relational/gg", "char/data/symbol/relational/leq", "char/data/symbol/relational/ll", "char/data/symbol/relational/sim", "char/data/symbol/relational/simeq", "char/data/symbol/set/cap", "char/data/symbol/set/cup", "char/data/symbol/set/in", "char/data/symbol/set/ni", "char/data/symbol/set/sqcap", "char/data/symbol/set/sqcup", "char/data/symbol/set/sqsubset", "char/data/symbol/set/sqsubseteq", "char/data/symbol/set/sqsupset", "char/data/symbol/set/sqsupseteq", "char/data/symbol/set/subset", "char/data/symbol/set/subseteq", "char/data/symbol/set/supset", "char/data/symbol/set/supseteq", "char/data/symbol/not/ncong", "char/data/symbol/not/neq", "char/data/symbol/not/nequiv", "char/data/symbol/not/nge", "char/data/symbol/not/ngt", "char/data/symbol/not/nlt", "char/data/symbol/not/nle", "char/data/symbol/not/nsim", "char/data/symbol/not/nsubseteq", "char/data/symbol/not/nsupseteq", "char/data/symbol/not/nin", "char/data/symbol/base/infty", "char/data/symbol/base/to", "char/data/greek/alpha", "char/data/greek/beta", "char/data/greek/gamma", "char/data/greek/delta", "char/data/greek/epsilon", "char/data/greek/varepsilon", "char/data/greek/zeta", "char/data/greek/eta", "char/data/greek/theta", "char/data/greek/iota", "char/data/greek/kappa", "char/data/greek/lambda", "char/data/greek/mu", "char/data/greek/nu", "char/data/greek/xi", "char/data/greek/pi", "char/data/greek/rho", "char/data/greek/sigma", "char/data/greek/tau", "char/data/greek/upsilon", "char/data/greek/phi", "char/data/greek/varphi", "char/data/greek/chi", "char/data/greek/psi", "char/data/greek/omega", "char/data/roman/ua", "char/data/roman/ub", "char/data/greek/u-gamma", "char/data/greek/u-delta", "char/data/roman/ue", "char/data/roman/uz", "char/data/roman/uh", "char/data/greek/u-theta", "char/data/roman/ui", "char/data/roman/uk", "char/data/greek/u-lambda", "char/data/roman/um", "char/data/roman/un", "char/data/greek/u-xi", "char/data/roman/uo", "char/data/greek/u-pi", "char/data/roman/up", "char/data/greek/u-sigma", "char/data/roman/ut", "char/data/greek/u-upsilon", "char/data/greek/u-phi", "char/data/roman/ux", "char/data/greek/u-psi", "char/data/greek/u-omega", "char/data/roman/a", "char/data/roman/b", "char/data/roman/c", "char/data/roman/d", "char/data/roman/e", "char/data/roman/f", "char/data/roman/g", "char/data/roman/h", "char/data/roman/i", "char/data/roman/j", "char/data/roman/k", "char/data/roman/l", "char/data/roman/m", "char/data/roman/n", "char/data/roman/o", "char/data/roman/p", "char/data/roman/q", "char/data/roman/r", "char/data/roman/s", "char/data/roman/t", "char/data/roman/u", "char/data/roman/v", "char/data/roman/w", "char/data/roman/x", "char/data/roman/y", "char/data/roman/z", "char/data/roman/uc", "char/data/roman/ud", "char/data/roman/uf", "char/data/roman/ug", "char/data/roman/uj", "char/data/roman/ul", "char/data/roman/uq", "char/data/roman/ur", "char/data/roman/us", "char/data/roman/uu", "char/data/roman/uv", "char/data/roman/uw", "char/data/roman/uy", "signgroup", "def/gtype" ], function(require, exports, module) {
    var kity = require("kity"), CHAR_DATA = require("char/data");
    return kity.createClass("Char", {
        base: require("signgroup"),
        constructor: function(value, type) {
            debugger;
            var currentData;
            // 默认是标准字体
            type = type || "std";
            currentData = CHAR_DATA[type][value];
            if (!currentData) {
                currentData = CHAR_DATA["std"][value];
            }
            if (!currentData) {
                throw new Error("invalid character: " + value);
            }
            this.callBase();
            this.value = value;
            this.contentShape = new kity.Group();
            this.box = new kity.Rect(currentData.size[0] + currentData.offset.x * 2, currentData.size[1]).fill("transparent");
            this.char = new kity.Path(currentData.path).fill("black");
            this.char.translate(currentData.offset.x, currentData.offset.y);
            this.contentShape.addShape(this.box);
            this.contentShape.addShape(this.char);
            this.addShape(this.contentShape);
        },
        getBaseWidth: function() {
            return this.char.getWidth();
        },
        getBaseHeight: function() {
            return this.char.getHeight();
        },
        getBoxWidth: function() {
            return this.box.getWidth();
        }
    });
});
/**
 * 字符类
 */
define("char/char1", [ "kity", "char/data", "char/data/number/0", "char/data/number/1", "char/data/number/2", "char/data/number/3", "char/data/number/4", "char/data/number/5", "char/data/number/6", "char/data/number/7", "char/data/number/8", "char/data/number/9", "char/data/character/a", "char/data/character/b", "char/data/character/c", "char/data/character/d", "char/data/character/e", "char/data/character/f", "char/data/character/g", "char/data/character/h", "char/data/character/i", "char/data/character/j", "char/data/character/k", "char/data/character/l", "char/data/character/m", "char/data/character/n", "char/data/character/o", "char/data/character/p", "char/data/character/q", "char/data/character/r", "char/data/character/s", "char/data/character/t", "char/data/character/u", "char/data/character/v", "char/data/character/w", "char/data/character/x", "char/data/character/y", "char/data/character/z", "char/data/character/ua", "char/data/character/ub", "char/data/character/uc", "char/data/character/ud", "char/data/character/ue", "char/data/character/uf", "char/data/character/ug", "char/data/character/uh", "char/data/character/ui", "char/data/character/uj", "char/data/character/uk", "char/data/character/ul", "char/data/character/um", "char/data/character/un", "char/data/character/uo", "char/data/character/up", "char/data/character/uq", "char/data/character/ur", "char/data/character/us", "char/data/character/ut", "char/data/character/uu", "char/data/character/uv", "char/data/character/uw", "char/data/character/ux", "char/data/character/uy", "char/data/character/uz", "char/data/symbol/base/l-parentheses", "char/data/symbol/base/r-parentheses", "char/data/symbol/base/negative", "char/data/symbol/relational/eq", "char/data/symbol/base/positive", "char/data/symbol/base/vertical", "char/data/symbol/base/slash", "char/data/symbol/base/exclamation", "char/data/symbol/base/l-brackets", "char/data/symbol/base/r-brackets", "char/data/symbol/base/colon", "char/data/symbol/base/quotation", "char/data/symbol/relational/lt", "char/data/symbol/relational/gt", "char/data/symbol/base/point", "char/data/symbol/base/l-braces", "char/data/symbol/base/r-braces", "char/data/symbol/base/comma", "char/data/symbol/base/times", "char/data/symbol/base/div", "char/data/symbol/base/pm", "char/data/symbol/base/mp", "char/data/symbol/base/ast", "char/data/symbol/base/cdot", "char/data/symbol/base/cdots", "char/data/symbol/base/ddots", "char/data/symbol/base/ldots", "char/data/symbol/base/vdots", "char/data/symbol/base/wedge", "char/data/symbol/base/vee", "char/data/symbol/base/mid", "char/data/symbol/relational/approx", "char/data/symbol/relational/equiv", "char/data/symbol/relational/geq", "char/data/symbol/relational/gg", "char/data/symbol/relational/leq", "char/data/symbol/relational/ll", "char/data/symbol/relational/sim", "char/data/symbol/relational/simeq", "char/data/symbol/set/cap", "char/data/symbol/set/cup", "char/data/symbol/set/in", "char/data/symbol/set/ni", "char/data/symbol/set/sqcap", "char/data/symbol/set/sqcup", "char/data/symbol/set/sqsubset", "char/data/symbol/set/sqsubseteq", "char/data/symbol/set/sqsupset", "char/data/symbol/set/sqsupseteq", "char/data/symbol/set/subset", "char/data/symbol/set/subseteq", "char/data/symbol/set/supset", "char/data/symbol/set/supseteq", "char/data/symbol/not/ncong", "char/data/symbol/not/neq", "char/data/symbol/not/nequiv", "char/data/symbol/not/nge", "char/data/symbol/not/ngt", "char/data/symbol/not/nlt", "char/data/symbol/not/nle", "char/data/symbol/not/nsim", "char/data/symbol/not/nsubseteq", "char/data/symbol/not/nsupseteq", "char/data/symbol/not/nin", "char/data/symbol/base/infty", "char/data/symbol/base/to", "char/data/greek/alpha", "char/data/greek/beta", "char/data/greek/gamma", "char/data/greek/delta", "char/data/greek/epsilon", "char/data/greek/varepsilon", "char/data/greek/zeta", "char/data/greek/eta", "char/data/greek/theta", "char/data/greek/iota", "char/data/greek/kappa", "char/data/greek/lambda", "char/data/greek/mu", "char/data/greek/nu", "char/data/greek/xi", "char/data/greek/pi", "char/data/greek/rho", "char/data/greek/sigma", "char/data/greek/tau", "char/data/greek/upsilon", "char/data/greek/phi", "char/data/greek/varphi", "char/data/greek/chi", "char/data/greek/psi", "char/data/greek/omega", "char/data/roman/ua", "char/data/roman/ub", "char/data/greek/u-gamma", "char/data/greek/u-delta", "char/data/roman/ue", "char/data/roman/uz", "char/data/roman/uh", "char/data/greek/u-theta", "char/data/roman/ui", "char/data/roman/uk", "char/data/greek/u-lambda", "char/data/roman/um", "char/data/roman/un", "char/data/greek/u-xi", "char/data/roman/uo", "char/data/greek/u-pi", "char/data/roman/up", "char/data/greek/u-sigma", "char/data/roman/ut", "char/data/greek/u-upsilon", "char/data/greek/u-phi", "char/data/roman/ux", "char/data/greek/u-psi", "char/data/greek/u-omega", "char/data/roman/a", "char/data/roman/b", "char/data/roman/c", "char/data/roman/d", "char/data/roman/e", "char/data/roman/f", "char/data/roman/g", "char/data/roman/h", "char/data/roman/i", "char/data/roman/j", "char/data/roman/k", "char/data/roman/l", "char/data/roman/m", "char/data/roman/n", "char/data/roman/o", "char/data/roman/p", "char/data/roman/q", "char/data/roman/r", "char/data/roman/s", "char/data/roman/t", "char/data/roman/u", "char/data/roman/v", "char/data/roman/w", "char/data/roman/x", "char/data/roman/y", "char/data/roman/z", "char/data/roman/uc", "char/data/roman/ud", "char/data/roman/uf", "char/data/roman/ug", "char/data/roman/uj", "char/data/roman/ul", "char/data/roman/uq", "char/data/roman/ur", "char/data/roman/us", "char/data/roman/uu", "char/data/roman/uv", "char/data/roman/uw", "char/data/roman/uy", "signgroup", "def/gtype" ], function(require, exports, module) {
    var kity = require("kity"), CHAR_DATA = require("char/data");
    return kity.createClass("Char", {
        base: require("signgroup"),
        constructor: function(value, type) {
            var currentData;
            // 默认是标准字体
            type = type || "std";
            currentData = CHAR_DATA[type][value];
            if (!currentData) {
                currentData = CHAR_DATA["std"][value];
            }
            if (!currentData) {
                throw new Error("invalid character: " + value);
            }
            this.callBase();
            this.value = value;
            this.contentShape = new kity.Group();
            this.box = new kity.Rect(currentData.size[0] + currentData.offset.x * 2, currentData.size[1]).fill("transparent");
            this.char = new kity.Path(currentData.path).fill("black");
            this.char.translate(currentData.offset.x, currentData.offset.y);
            this.contentShape.addShape(this.box);
            this.contentShape.addShape(this.char);
            this.addShape(this.contentShape);
        },
        getBaseWidth: function() {
            return this.char.getWidth();
        },
        getBaseHeight: function() {
            return this.char.getHeight();
        },
        getBoxWidth: function() {
            return this.box.getWidth();
        }
    });
});
/**
 * 字符与pathdata映射
 */
define("char/data", [ "char/data/number/0", "char/data/number/1", "char/data/number/2", "char/data/number/3", "char/data/number/4", "char/data/number/5", "char/data/number/6", "char/data/number/7", "char/data/number/8", "char/data/number/9", "char/data/character/a", "char/data/character/b", "char/data/character/c", "char/data/character/d", "char/data/character/e", "char/data/character/f", "char/data/character/g", "char/data/character/h", "char/data/character/i", "char/data/character/j", "char/data/character/k", "char/data/character/l", "char/data/character/m", "char/data/character/n", "char/data/character/o", "char/data/character/p", "char/data/character/q", "char/data/character/r", "char/data/character/s", "char/data/character/t", "char/data/character/u", "char/data/character/v", "char/data/character/w", "char/data/character/x", "char/data/character/y", "char/data/character/z", "char/data/character/ua", "char/data/character/ub", "char/data/character/uc", "char/data/character/ud", "char/data/character/ue", "char/data/character/uf", "char/data/character/ug", "char/data/character/uh", "char/data/character/ui", "char/data/character/uj", "char/data/character/uk", "char/data/character/ul", "char/data/character/um", "char/data/character/un", "char/data/character/uo", "char/data/character/up", "char/data/character/uq", "char/data/character/ur", "char/data/character/us", "char/data/character/ut", "char/data/character/uu", "char/data/character/uv", "char/data/character/uw", "char/data/character/ux", "char/data/character/uy", "char/data/character/uz", "char/data/symbol/base/l-parentheses", "char/data/symbol/base/r-parentheses", "char/data/symbol/base/negative", "char/data/symbol/relational/eq", "char/data/symbol/base/positive", "char/data/symbol/base/vertical", "char/data/symbol/base/slash", "char/data/symbol/base/exclamation", "char/data/symbol/base/l-brackets", "char/data/symbol/base/r-brackets", "char/data/symbol/base/colon", "char/data/symbol/base/quotation", "char/data/symbol/relational/lt", "char/data/symbol/relational/gt", "char/data/symbol/base/point", "char/data/symbol/base/l-braces", "char/data/symbol/base/r-braces", "char/data/symbol/base/comma", "char/data/symbol/base/times", "char/data/symbol/base/div", "char/data/symbol/base/pm", "char/data/symbol/base/mp", "char/data/symbol/base/ast", "char/data/symbol/base/cdot", "char/data/symbol/base/cdots", "char/data/symbol/base/ddots", "char/data/symbol/base/ldots", "char/data/symbol/base/vdots", "char/data/symbol/base/wedge", "char/data/symbol/base/vee", "char/data/symbol/base/mid", "char/data/symbol/relational/approx", "char/data/symbol/relational/equiv", "char/data/symbol/relational/geq", "char/data/symbol/relational/gg", "char/data/symbol/relational/leq", "char/data/symbol/relational/ll", "char/data/symbol/relational/sim", "char/data/symbol/relational/simeq", "char/data/symbol/set/cap", "char/data/symbol/set/cup", "char/data/symbol/set/in", "char/data/symbol/set/ni", "char/data/symbol/set/sqcap", "char/data/symbol/set/sqcup", "char/data/symbol/set/sqsubset", "char/data/symbol/set/sqsubseteq", "char/data/symbol/set/sqsupset", "char/data/symbol/set/sqsupseteq", "char/data/symbol/set/subset", "char/data/symbol/set/subseteq", "char/data/symbol/set/supset", "char/data/symbol/set/supseteq", "char/data/symbol/not/ncong", "char/data/symbol/not/neq", "char/data/symbol/not/nequiv", "char/data/symbol/not/nge", "char/data/symbol/not/ngt", "char/data/symbol/not/nlt", "char/data/symbol/not/nle", "char/data/symbol/not/nsim", "char/data/symbol/not/nsubseteq", "char/data/symbol/not/nsupseteq", "char/data/symbol/not/nin", "char/data/symbol/base/infty", "char/data/symbol/base/to", "char/data/greek/alpha", "char/data/greek/beta", "char/data/greek/gamma", "char/data/greek/delta", "char/data/greek/epsilon", "char/data/greek/varepsilon", "char/data/greek/zeta", "char/data/greek/eta", "char/data/greek/theta", "char/data/greek/iota", "char/data/greek/kappa", "char/data/greek/lambda", "char/data/greek/mu", "char/data/greek/nu", "char/data/greek/xi", "char/data/greek/pi", "char/data/greek/rho", "char/data/greek/sigma", "char/data/greek/tau", "char/data/greek/upsilon", "char/data/greek/phi", "char/data/greek/varphi", "char/data/greek/chi", "char/data/greek/psi", "char/data/greek/omega", "char/data/roman/ua", "char/data/roman/ub", "char/data/greek/u-gamma", "char/data/greek/u-delta", "char/data/roman/ue", "char/data/roman/uz", "char/data/roman/uh", "char/data/greek/u-theta", "char/data/roman/ui", "char/data/roman/uk", "char/data/greek/u-lambda", "char/data/roman/um", "char/data/roman/un", "char/data/greek/u-xi", "char/data/roman/uo", "char/data/greek/u-pi", "char/data/roman/up", "char/data/greek/u-sigma", "char/data/roman/ut", "char/data/greek/u-upsilon", "char/data/greek/u-phi", "char/data/roman/ux", "char/data/greek/u-psi", "char/data/greek/u-omega", "char/data/roman/a", "char/data/roman/b", "char/data/roman/c", "char/data/roman/d", "char/data/roman/e", "char/data/roman/f", "char/data/roman/g", "char/data/roman/h", "char/data/roman/i", "char/data/roman/j", "char/data/roman/k", "char/data/roman/l", "char/data/roman/m", "char/data/roman/n", "char/data/roman/o", "char/data/roman/p", "char/data/roman/q", "char/data/roman/r", "char/data/roman/s", "char/data/roman/t", "char/data/roman/u", "char/data/roman/v", "char/data/roman/w", "char/data/roman/x", "char/data/roman/y", "char/data/roman/z", "char/data/roman/uc", "char/data/roman/ud", "char/data/roman/uf", "char/data/roman/ug", "char/data/roman/uj", "char/data/roman/ul", "char/data/roman/uq", "char/data/roman/ur", "char/data/roman/us", "char/data/roman/uu", "char/data/roman/uv", "char/data/roman/uw", "char/data/roman/uy" ], function(require, exports, module) {
    return {
        // 标准字体
        std: {
            // number
            0: require("char/data/number/0"),
            1: require("char/data/number/1"),
            2: require("char/data/number/2"),
            3: require("char/data/number/3"),
            4: require("char/data/number/4"),
            5: require("char/data/number/5"),
            6: require("char/data/number/6"),
            7: require("char/data/number/7"),
            8: require("char/data/number/8"),
            9: require("char/data/number/9"),
            // character
            a: require("char/data/character/a"),
            b: require("char/data/character/b"),
            c: require("char/data/character/c"),
            d: require("char/data/character/d"),
            e: require("char/data/character/e"),
            f: require("char/data/character/f"),
            g: require("char/data/character/g"),
            h: require("char/data/character/h"),
            i: require("char/data/character/i"),
            j: require("char/data/character/j"),
            k: require("char/data/character/k"),
            l: require("char/data/character/l"),
            m: require("char/data/character/m"),
            n: require("char/data/character/n"),
            o: require("char/data/character/o"),
            p: require("char/data/character/p"),
            q: require("char/data/character/q"),
            r: require("char/data/character/r"),
            s: require("char/data/character/s"),
            t: require("char/data/character/t"),
            u: require("char/data/character/u"),
            v: require("char/data/character/v"),
            w: require("char/data/character/w"),
            x: require("char/data/character/x"),
            y: require("char/data/character/y"),
            z: require("char/data/character/z"),
            A: require("char/data/character/ua"),
            B: require("char/data/character/ub"),
            C: require("char/data/character/uc"),
            D: require("char/data/character/ud"),
            E: require("char/data/character/ue"),
            F: require("char/data/character/uf"),
            G: require("char/data/character/ug"),
            H: require("char/data/character/uh"),
            I: require("char/data/character/ui"),
            J: require("char/data/character/uj"),
            K: require("char/data/character/uk"),
            L: require("char/data/character/ul"),
            M: require("char/data/character/um"),
            N: require("char/data/character/un"),
            O: require("char/data/character/uo"),
            P: require("char/data/character/up"),
            Q: require("char/data/character/uq"),
            R: require("char/data/character/ur"),
            S: require("char/data/character/us"),
            T: require("char/data/character/ut"),
            U: require("char/data/character/uu"),
            V: require("char/data/character/uv"),
            W: require("char/data/character/uw"),
            X: require("char/data/character/ux"),
            Y: require("char/data/character/uy"),
            Z: require("char/data/character/uz"),
            // symbol
            "(": require("char/data/symbol/base/l-parentheses"),
            ")": require("char/data/symbol/base/r-parentheses"),
            "-": require("char/data/symbol/base/negative"),
            "=": require("char/data/symbol/relational/eq"),
            "+": require("char/data/symbol/base/positive"),
            "|": require("char/data/symbol/base/vertical"),
            "/": require("char/data/symbol/base/slash"),
            "!": require("char/data/symbol/base/exclamation"),
            "[": require("char/data/symbol/base/l-brackets"),
            "]": require("char/data/symbol/base/r-brackets"),
            ":": require("char/data/symbol/base/colon"),
            "'": require("char/data/symbol/base/quotation"),
            "<": require("char/data/symbol/relational/lt"),
            ">": require("char/data/symbol/relational/gt"),
            ".": require("char/data/symbol/base/point"),
            "{": require("char/data/symbol/base/l-braces"),
            "}": require("char/data/symbol/base/r-braces"),
            ",": require("char/data/symbol/base/comma"),
            "\\times\\": require("char/data/symbol/base/times"),
            "\\div\\": require("char/data/symbol/base/div"),
            "\\pm\\": require("char/data/symbol/base/pm"),
            "\\mp\\": require("char/data/symbol/base/mp"),
            "\\ast\\": require("char/data/symbol/base/ast"),
            "\\cdot\\": require("char/data/symbol/base/cdot"),
            "\\cdots\\": require("char/data/symbol/base/cdots"),
            "\\ddots\\": require("char/data/symbol/base/ddots"),
            "\\ldots\\": require("char/data/symbol/base/ldots"),
            "\\vdots\\": require("char/data/symbol/base/vdots"),
            "\\wedge\\": require("char/data/symbol/base/wedge"),
            "\\vee\\": require("char/data/symbol/base/vee"),
            "\\mid\\": require("char/data/symbol/base/mid"),
            // relational symbol
            "\\approx\\": require("char/data/symbol/relational/approx"),
            "\\eq\\": require("char/data/symbol/relational/eq"),
            "\\equiv\\": require("char/data/symbol/relational/equiv"),
            "\\geq\\": require("char/data/symbol/relational/geq"),
            "\\gg\\": require("char/data/symbol/relational/gg"),
            "\\gt\\": require("char/data/symbol/relational/gt"),
            "\\leq\\": require("char/data/symbol/relational/leq"),
            "\\ll\\": require("char/data/symbol/relational/ll"),
            "\\lt\\": require("char/data/symbol/relational/lt"),
            "\\sim\\": require("char/data/symbol/relational/sim"),
            "\\simeq\\": require("char/data/symbol/relational/simeq"),
            //set symbol
            "\\cap\\": require("char/data/symbol/set/cap"),
            "\\cup\\": require("char/data/symbol/set/cup"),
            "\\in\\": require("char/data/symbol/set/in"),
            "\\ni\\": require("char/data/symbol/set/ni"),
            "\\sqcap\\": require("char/data/symbol/set/sqcap"),
            "\\sqcup\\": require("char/data/symbol/set/sqcup"),
            "\\sqsubset\\": require("char/data/symbol/set/sqsubset"),
            "\\sqsubseteq\\": require("char/data/symbol/set/sqsubseteq"),
            "\\sqsupset\\": require("char/data/symbol/set/sqsupset"),
            "\\sqsupseteq\\": require("char/data/symbol/set/sqsupseteq"),
            "\\subset\\": require("char/data/symbol/set/subset"),
            "\\subseteq\\": require("char/data/symbol/set/subseteq"),
            "\\supset\\": require("char/data/symbol/set/supset"),
            "\\supseteq\\": require("char/data/symbol/set/supseteq"),
            // not symbol
            "\\ncong\\": require("char/data/symbol/not/ncong"),
            "\\neq\\": require("char/data/symbol/not/neq"),
            "\\nequiv\\": require("char/data/symbol/not/nequiv"),
            "\\nge\\": require("char/data/symbol/not/nge"),
            "\\ngt\\": require("char/data/symbol/not/ngt"),
            "\\nlt\\": require("char/data/symbol/not/nlt"),
            "\\nle\\": require("char/data/symbol/not/nle"),
            "\\nsim\\": require("char/data/symbol/not/nsim"),
            "\\nsubseteq\\": require("char/data/symbol/not/nsubseteq"),
            "\\nsupseteq\\": require("char/data/symbol/not/nsupseteq"),
            "\\nin\\": require("char/data/symbol/not/nin"),
            // arrow symbol
            "\\infty\\": require("char/data/symbol/base/infty"),
            "∞": require("char/data/symbol/base/infty"),
            "\\to\\": require("char/data/symbol/base/to"),
            // greek
            "α": require("char/data/greek/alpha"),
            "\\alpha\\": require("char/data/greek/alpha"),
            "β": require("char/data/greek/alpha"),
            "\\beta\\": require("char/data/greek/beta"),
            "γ": require("char/data/greek/gamma"),
            "\\gamma\\": require("char/data/greek/gamma"),
            "δ": require("char/data/greek/delta"),
            "\\delta\\": require("char/data/greek/delta"),
            "ϵ": require("char/data/greek/epsilon"),
            "\\epsilon\\": require("char/data/greek/epsilon"),
            "ε": require("char/data/greek/varepsilon"),
            "\\varepsilon\\": require("char/data/greek/varepsilon"),
            "ζ": require("char/data/greek/zeta"),
            "\\zeta\\": require("char/data/greek/zeta"),
            "η": require("char/data/greek/eta"),
            "\\eta\\": require("char/data/greek/eta"),
            "θ": require("char/data/greek/theta"),
            "\\theta\\": require("char/data/greek/theta"),
            "ι": require("char/data/greek/iota"),
            "\\iota\\": require("char/data/greek/iota"),
            "κ": require("char/data/greek/kappa"),
            "\\kappa\\": require("char/data/greek/kappa"),
            "λ": require("char/data/greek/lambda"),
            "\\lambda\\": require("char/data/greek/lambda"),
            "μ": require("char/data/greek/mu"),
            "\\mu\\": require("char/data/greek/mu"),
            "ν": require("char/data/greek/nu"),
            "\\nu\\": require("char/data/greek/nu"),
            "ξ": require("char/data/greek/xi"),
            "\\xi\\": require("char/data/greek/xi"),
            "ο": require("char/data/character/o"),
            "\\omicron\\": require("char/data/character/o"),
            "π": require("char/data/greek/pi"),
            "\\pi\\": require("char/data/greek/pi"),
            "ρ": require("char/data/greek/rho"),
            "\\rho\\": require("char/data/greek/rho"),
            "σ": require("char/data/greek/sigma"),
            "\\sigma\\": require("char/data/greek/sigma"),
            "τ": require("char/data/greek/tau"),
            "\\tau\\": require("char/data/greek/tau"),
            "υ": require("char/data/greek/upsilon"),
            "\\upsilon\\": require("char/data/greek/upsilon"),
            "ф": require("char/data/greek/phi"),
            "\\phi\\": require("char/data/greek/phi"),
            "φ": require("char/data/greek/varphi"),
            "\\varphi\\": require("char/data/greek/varphi"),
            "χ": require("char/data/greek/chi"),
            "\\chi\\": require("char/data/greek/chi"),
            "ψ": require("char/data/greek/psi"),
            "\\psi\\": require("char/data/greek/psi"),
            "ω": require("char/data/greek/omega"),
            "\\omega\\": require("char/data/greek/omega"),
            "Α": require("char/data/roman/ua"),
            "\\Alpha\\": require("char/data/roman/ua"),
            "Β": require("char/data/roman/ub"),
            "\\Beta\\": require("char/data/roman/ub"),
            "Γ": require("char/data/greek/u-gamma"),
            "\\Gamma\\": require("char/data/greek/u-gamma"),
            "Δ": require("char/data/greek/u-delta"),
            "\\Delta\\": require("char/data/greek/u-delta"),
            "Ε": require("char/data/roman/ue"),
            "\\Epsilon\\": require("char/data/roman/ue"),
            "Ζ": require("char/data/roman/uz"),
            "\\Zeta\\": require("char/data/roman/uz"),
            "Η": require("char/data/roman/uh"),
            "\\Eta\\": require("char/data/roman/uh"),
            "Θ": require("char/data/greek/u-theta"),
            "\\Theta\\": require("char/data/greek/u-theta"),
            "Ι": require("char/data/roman/ui"),
            "\\Iota\\": require("char/data/roman/ui"),
            "Κ": require("char/data/roman/uk"),
            "\\Kappa\\": require("char/data/roman/uk"),
            "Λ": require("char/data/greek/u-lambda"),
            "\\Lambda\\": require("char/data/greek/u-lambda"),
            "Μ": require("char/data/roman/um"),
            "\\Mu\\": require("char/data/roman/um"),
            "Ν": require("char/data/roman/un"),
            "\\Nu\\": require("char/data/roman/un"),
            "Ξ": require("char/data/greek/u-xi"),
            "\\Xi\\": require("char/data/greek/u-xi"),
            "Ο": require("char/data/roman/uo"),
            "\\Omicron\\": require("char/data/roman/uo"),
            "Π": require("char/data/greek/u-pi"),
            "\\Pi\\": require("char/data/greek/u-pi"),
            "Ρ": require("char/data/roman/up"),
            "\\Rho\\": require("char/data/roman/up"),
            "Σ": require("char/data/greek/u-sigma"),
            "\\Sigma\\": require("char/data/greek/u-sigma"),
            "Τ": require("char/data/roman/ut"),
            "\\Tau\\": require("char/data/roman/ut"),
            "Υ": require("char/data/greek/u-upsilon"),
            "\\Upsilon\\": require("char/data/greek/u-upsilon"),
            "Φ": require("char/data/greek/u-phi"),
            "\\Phi\\": require("char/data/greek/u-phi"),
            "Χ": require("char/data/roman/ux"),
            "\\Chi\\": require("char/data/roman/ux"),
            "Ψ": require("char/data/greek/u-psi"),
            "\\Psi\\": require("char/data/greek/u-psi"),
            "Ω": require("char/data/greek/u-omega"),
            "\\Omega\\": require("char/data/greek/u-omega")
        },
        // 罗马字体
        roman: {
            a: require("char/data/roman/a"),
            b: require("char/data/roman/b"),
            c: require("char/data/roman/c"),
            d: require("char/data/roman/d"),
            e: require("char/data/roman/e"),
            f: require("char/data/roman/f"),
            g: require("char/data/roman/g"),
            h: require("char/data/roman/h"),
            i: require("char/data/roman/i"),
            j: require("char/data/roman/j"),
            k: require("char/data/roman/k"),
            l: require("char/data/roman/l"),
            m: require("char/data/roman/m"),
            n: require("char/data/roman/n"),
            o: require("char/data/roman/o"),
            p: require("char/data/roman/p"),
            q: require("char/data/roman/q"),
            r: require("char/data/roman/r"),
            s: require("char/data/roman/s"),
            t: require("char/data/roman/t"),
            u: require("char/data/roman/u"),
            v: require("char/data/roman/v"),
            w: require("char/data/roman/w"),
            x: require("char/data/roman/x"),
            y: require("char/data/roman/y"),
            z: require("char/data/roman/z"),
            A: require("char/data/roman/ua"),
            B: require("char/data/roman/ub"),
            C: require("char/data/roman/uc"),
            D: require("char/data/roman/ud"),
            E: require("char/data/roman/ue"),
            F: require("char/data/roman/uf"),
            G: require("char/data/roman/ug"),
            H: require("char/data/roman/uh"),
            I: require("char/data/roman/ui"),
            J: require("char/data/roman/uj"),
            K: require("char/data/roman/uk"),
            L: require("char/data/roman/ul"),
            M: require("char/data/roman/um"),
            N: require("char/data/roman/un"),
            O: require("char/data/roman/uo"),
            P: require("char/data/roman/up"),
            Q: require("char/data/roman/uq"),
            R: require("char/data/roman/ur"),
            S: require("char/data/roman/us"),
            T: require("char/data/roman/ut"),
            U: require("char/data/roman/uu"),
            V: require("char/data/roman/uv"),
            W: require("char/data/roman/uw"),
            X: require("char/data/roman/ux"),
            Y: require("char/data/roman/uy"),
            Z: require("char/data/roman/uz")
        }
    };
});
/**
 * 字符data: a
 */
define("char/data/character/a", [], {
    path: "M3.094,17.367c-0.664,0-1.229-0.18-1.693-0.539s-0.814-0.824-1.049-1.395S0,14.254,0,13.605   c0-0.75,0.148-1.539,0.445-2.367S1.15,9.643,1.67,8.936s1.131-1.281,1.834-1.723s1.438-0.662,2.203-0.662   c0.461,0,0.879,0.139,1.254,0.416s0.66,0.643,0.855,1.096c0.102-0.352,0.225-0.615,0.369-0.791s0.369-0.264,0.674-0.264   c0.18,0,0.332,0.055,0.457,0.164s0.188,0.262,0.188,0.457c0,0.094-0.008,0.156-0.023,0.188L7.793,14.59   c-0.109,0.453-0.164,0.836-0.164,1.148c0,0.703,0.242,1.055,0.727,1.055c0.352,0,0.648-0.182,0.891-0.545s0.422-0.736,0.539-1.119   s0.246-0.875,0.387-1.477c0.039-0.109,0.098-0.164,0.176-0.164h0.281c0.047,0,0.086,0.023,0.117,0.07s0.047,0.102,0.047,0.164   c-0.258,1.086-0.555,1.965-0.891,2.637s-0.871,1.008-1.605,1.008c-0.539,0-1.01-0.16-1.412-0.48s-0.643-0.75-0.721-1.289   c-0.422,0.508-0.898,0.93-1.43,1.266S3.656,17.367,3.094,17.367z M3.141,16.793c0.391,0,0.779-0.111,1.166-0.334   s0.74-0.506,1.061-0.85s0.594-0.691,0.82-1.043c0.016,0,0.023-0.016,0.023-0.047l1.324-5.262C7.434,8.672,7.229,8.17,6.92,7.752   S6.191,7.125,5.66,7.125c-0.805,0-1.512,0.449-2.121,1.348s-1.08,1.949-1.412,3.152s-0.498,2.199-0.498,2.988   c0,0.555,0.123,1.057,0.369,1.506S2.625,16.793,3.141,16.793z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 字符data: b
 */
define("char/data/character/b", [], {
    path: "M2.953,17.367c-0.648,0-1.195-0.18-1.641-0.539S0.537,16,0.322,15.422S0,14.254,0,13.652c0-0.813,0.074-1.395,0.223-1.746   l2.32-9.293C2.621,2.262,2.66,2.047,2.66,1.969c0-0.289-0.512-0.434-1.535-0.434c-0.047,0-0.09-0.029-0.129-0.088   S0.938,1.328,0.938,1.266l0.094-0.375C1.063,0.789,1.129,0.738,1.23,0.738L4.371,0.48c0.156,0,0.234,0.078,0.234,0.234L2.813,7.969   c0.875-0.945,1.785-1.418,2.73-1.418c0.664,0,1.229,0.18,1.693,0.539s0.814,0.822,1.049,1.389s0.352,1.178,0.352,1.834   c0,0.742-0.145,1.523-0.434,2.344s-0.697,1.592-1.225,2.314s-1.137,1.303-1.828,1.74S3.727,17.367,2.953,17.367z M2.977,16.793   c0.813,0,1.52-0.451,2.121-1.354s1.066-1.959,1.395-3.17s0.492-2.199,0.492-2.965c0-0.578-0.115-1.086-0.346-1.523   S6.027,7.125,5.496,7.125c-0.57,0-1.119,0.217-1.646,0.65s-0.994,0.959-1.4,1.576l-0.645,2.625V12   c-0.25,0.945-0.387,1.77-0.41,2.473c0,0.594,0.129,1.129,0.387,1.605S2.438,16.793,2.977,16.793z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 9, 27 ]
});
/**
 * 字符data: c
 */
define("char/data/character/c", [], {
    path: "M1.699,14.25c0,0.695,0.176,1.293,0.527,1.793s0.863,0.75,1.535,0.75c0.945,0,1.852-0.227,2.719-0.68   s1.586-1.066,2.156-1.84c0.016-0.031,0.063-0.047,0.141-0.047c0.086,0,0.164,0.039,0.234,0.117s0.105,0.152,0.105,0.223   c0,0.047-0.008,0.078-0.023,0.094c-0.406,0.555-0.891,1.035-1.453,1.441s-1.18,0.719-1.852,0.938s-1.363,0.328-2.074,0.328   c-0.727,0-1.373-0.176-1.939-0.527s-1.004-0.834-1.313-1.447S0,14.113,0,13.395c0-0.805,0.17-1.617,0.51-2.438   s0.807-1.564,1.4-2.232s1.271-1.197,2.033-1.588s1.549-0.586,2.361-0.586c0.43,0,0.861,0.074,1.295,0.223S8.387,7.146,8.66,7.447   S9.07,8.129,9.07,8.59c0,0.391-0.119,0.736-0.357,1.037S8.16,10.078,7.77,10.078c-0.227,0-0.422-0.074-0.586-0.223   s-0.246-0.34-0.246-0.574c0-0.344,0.121-0.637,0.363-0.879S7.836,8.039,8.18,8.039h0.094C8.109,7.711,7.846,7.477,7.482,7.336   S6.719,7.125,6.281,7.125c-0.93,0-1.744,0.398-2.443,1.195s-1.23,1.756-1.594,2.877S1.699,13.336,1.699,14.25z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 字符data: d
 */
define("char/data/character/d", [], {
    path: "M3.094,17.367c-0.664,0-1.229-0.18-1.693-0.539s-0.814-0.824-1.049-1.395S0,14.254,0,13.605   c0-0.75,0.148-1.539,0.445-2.367S1.15,9.643,1.67,8.936s1.131-1.281,1.834-1.723s1.438-0.662,2.203-0.662   c0.461,0,0.879,0.139,1.254,0.416s0.66,0.643,0.855,1.096l1.371-5.449c0.078-0.352,0.117-0.566,0.117-0.645   c0-0.289-0.512-0.434-1.535-0.434c-0.047,0-0.09-0.029-0.129-0.088S7.582,1.328,7.582,1.266l0.094-0.375   c0.031-0.102,0.098-0.152,0.199-0.152l3.141-0.258c0.156,0,0.234,0.078,0.234,0.234L7.793,14.566c0,0.102-0.027,0.297-0.082,0.586   s-0.082,0.484-0.082,0.586c0,0.703,0.242,1.055,0.727,1.055c0.352,0,0.648-0.182,0.891-0.545s0.422-0.736,0.539-1.119   s0.246-0.875,0.387-1.477c0.039-0.109,0.098-0.164,0.176-0.164h0.281c0.047,0,0.086,0.023,0.117,0.07s0.047,0.102,0.047,0.164   c-0.258,1.086-0.555,1.965-0.891,2.637s-0.871,1.008-1.605,1.008c-0.539,0-1.01-0.16-1.412-0.48s-0.643-0.75-0.721-1.289   c-0.422,0.508-0.898,0.93-1.43,1.266S3.656,17.367,3.094,17.367z M3.141,16.793c0.391,0,0.779-0.111,1.166-0.334   s0.74-0.506,1.061-0.85s0.594-0.691,0.82-1.043c0.016,0,0.023-0.023,0.023-0.07l1.324-5.238C7.434,8.672,7.229,8.17,6.92,7.752   S6.191,7.125,5.66,7.125c-0.805,0-1.512,0.449-2.121,1.348s-1.08,1.949-1.412,3.152s-0.498,2.199-0.498,2.988   c0,0.555,0.123,1.057,0.369,1.506S2.625,16.793,3.141,16.793z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 字符data: e
 */
define("char/data/character/e", [], {
    path: "M3.598,17.367c-1.125,0-2.006-0.42-2.643-1.26S0,14.266,0,13.102c0-1.125,0.275-2.191,0.826-3.199s1.303-1.818,2.256-2.432   s1.988-0.92,3.105-0.92c0.68,0,1.266,0.18,1.758,0.539s0.738,0.859,0.738,1.5c0,1.305-0.645,2.135-1.934,2.49   c-1.29,0.355-2.844,0.533-4.665,0.533H2.038c-0.234,0.945-0.362,1.77-0.386,2.473c0,0.719,0.166,1.35,0.498,1.893   s0.83,0.814,1.494,0.814c0.945,0,1.852-0.227,2.719-0.68s1.586-1.066,2.156-1.84c0.016-0.031,0.063-0.047,0.141-0.047   c0.086,0,0.164,0.039,0.234,0.117S9,14.496,9,14.566c0,0.047-0.008,0.078-0.023,0.094c-0.406,0.555-0.891,1.035-1.453,1.441   s-1.18,0.719-1.852,0.938S4.309,17.367,3.598,17.367z M2.18,11.039c0.936,0,1.793-0.041,2.573-0.123s1.489-0.305,2.128-0.668   S7.84,9.332,7.84,8.59c0-0.281-0.08-0.535-0.24-0.762c-0.16-0.227-0.369-0.4-0.626-0.521S6.437,7.125,6.132,7.125   c-1.006,0-1.842,0.381-2.508,1.143S2.476,9.953,2.18,11.039z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 9, 27 ]
});
/**
 * 字符data: f
 */
define("char/data/character/f", [], {
    path: "M0.966,21.094c0.297,0.242,0.676,0.363,1.138,0.363c0.485,0,0.915-0.465,1.291-1.395c0.125-0.359,0.334-1.26,0.628-2.701   s0.542-2.725,0.745-3.85l1.126-5.93H3.879c-0.141,0-0.211-0.09-0.211-0.27l0.094-0.375c0.031-0.102,0.094-0.152,0.188-0.152h2.086   l0.293-1.582c0.258-1.289,0.5-2.207,0.727-2.754c0.227-0.602,0.584-1.121,1.072-1.559s1.041-0.656,1.658-0.656   c0.547,0,1.035,0.135,1.465,0.404s0.645,0.662,0.645,1.178c0,0.375-0.119,0.701-0.357,0.979s-0.541,0.416-0.908,0.416   c-0.242,0-0.447-0.072-0.615-0.217S9.762,2.66,9.762,2.426c0-0.313,0.115-0.6,0.346-0.861s0.498-0.393,0.803-0.393   c-0.289-0.242-0.68-0.363-1.172-0.363c-0.203,0-0.404,0.084-0.604,0.252S8.793,1.41,8.707,1.605   c-0.102,0.25-0.359,1.449-0.773,3.598L7.629,6.785h2.426c0.063,0,0.113,0.029,0.152,0.088s0.059,0.111,0.059,0.158l-0.094,0.387   c-0.023,0.109-0.09,0.164-0.199,0.164H7.477l-1.103,5.93c-0.165,0.938-0.333,1.803-0.505,2.596   c-0.172,0.793-0.427,1.668-0.763,2.625S4.351,20.479,3.85,21.1c-0.5,0.621-1.091,0.932-1.772,0.932   c-0.329,0-0.655-0.059-0.98-0.176c-0.325-0.117-0.589-0.295-0.792-0.533C0.102,21.084,0,20.793,0,20.449   c0-0.367,0.125-0.691,0.377-0.973s0.562-0.422,0.931-0.422c0.243,0,0.445,0.072,0.606,0.217s0.242,0.334,0.242,0.568   c0,0.32-0.12,0.609-0.359,0.867C1.557,20.965,1.28,21.094,0.966,21.094z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 字符data: g
 */
define("char/data/character/g", [], {
    path: "M0,20.637c0-0.352,0.123-0.664,0.369-0.938s0.545-0.41,0.896-0.41c0.234,0,0.434,0.072,0.598,0.217s0.246,0.338,0.246,0.58   c0,0.258-0.082,0.498-0.246,0.721s-0.371,0.373-0.621,0.451c0.438,0.133,1.125,0.199,2.063,0.199c0.742,0,1.418-0.283,2.027-0.85   s1.008-1.221,1.195-1.963l0.715-2.906c-0.883,0.93-1.793,1.395-2.73,1.395c-0.969,0-1.727-0.365-2.273-1.096   s-0.82-1.604-0.82-2.619c0-0.742,0.145-1.516,0.434-2.32S2.547,9.545,3.07,8.854s1.131-1.248,1.822-1.67s1.412-0.633,2.162-0.633   c0.469,0,0.891,0.135,1.266,0.404s0.664,0.623,0.867,1.061c0.148-0.672,0.484-1.008,1.008-1.008c0.18,0,0.332,0.055,0.457,0.164   s0.188,0.262,0.188,0.457c0,0.094-0.008,0.156-0.023,0.188L8.109,18.715c-0.172,0.664-0.508,1.246-1.008,1.746   s-1.094,0.887-1.781,1.16s-1.367,0.41-2.039,0.41c-0.875,0-1.641-0.082-2.297-0.246S0,21.238,0,20.637z M4.559,16.559   c0.383,0,0.766-0.107,1.148-0.322s0.734-0.488,1.055-0.82s0.594-0.67,0.82-1.014l1.301-5.191C8.789,8.641,8.584,8.15,8.268,7.74   s-0.736-0.615-1.26-0.615c-0.641,0-1.211,0.275-1.711,0.826S4.391,9.148,4.078,9.891c-0.242,0.617-0.475,1.379-0.697,2.285   s-0.334,1.648-0.334,2.227c0,0.547,0.125,1.043,0.375,1.488S4.051,16.559,4.559,16.559z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 字符data: h
 */
define("char/data/character/h", [], {
    path: "M0,16.746c0-0.078,0.008-0.141,0.023-0.188l3.48-13.945c0.078-0.352,0.117-0.566,0.117-0.645   c0-0.289-0.512-0.434-1.535-0.434c-0.039,0-0.082-0.029-0.129-0.088s-0.07-0.119-0.07-0.182l0.105-0.375   C2.023,0.789,2.086,0.738,2.18,0.738L5.32,0.48h0.07C5.414,0.488,5.441,0.498,5.473,0.51S5.52,0.535,5.52,0.551   c0.031,0.094,0.047,0.148,0.047,0.164L3.668,8.344c0.438-0.547,0.957-0.982,1.559-1.307s1.25-0.486,1.945-0.486   c0.805,0,1.449,0.221,1.934,0.662S9.832,8.273,9.832,9.07c0,0.664-0.145,1.455-0.434,2.373S8.734,13.41,8.273,14.59   c-0.203,0.547-0.305,1.035-0.305,1.465c0,0.492,0.184,0.738,0.551,0.738c0.445,0,0.836-0.172,1.172-0.516s0.609-0.76,0.82-1.248   s0.371-0.947,0.48-1.377c0.039-0.109,0.094-0.164,0.164-0.164h0.281c0.117,0,0.176,0.078,0.176,0.234   c-0.133,0.57-0.336,1.131-0.609,1.682s-0.627,1.016-1.061,1.395s-0.924,0.568-1.471,0.568S7.465,17.18,7.09,16.805   s-0.563-0.832-0.563-1.371c0-0.281,0.055-0.586,0.164-0.914c0.469-1.242,0.854-2.344,1.154-3.305s0.451-1.781,0.451-2.461   c0-0.461-0.09-0.848-0.27-1.16s-0.48-0.469-0.902-0.469c-0.867,0-1.623,0.275-2.268,0.826s-1.193,1.275-1.646,2.174l-1.629,6.527   c-0.047,0.211-0.16,0.383-0.34,0.516s-0.371,0.199-0.574,0.199c-0.18,0-0.336-0.059-0.469-0.176S0,16.926,0,16.746z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 字符data: i
 */
define("char/data/character/i", [], {
    path: "M1.207,15.434c0-0.344,0.055-0.648,0.164-0.914l1.945-5.191c0.195-0.523,0.305-1.012,0.328-1.465   c0-0.492-0.191-0.738-0.574-0.738c-0.625,0-1.133,0.314-1.523,0.943S0.848,9.43,0.621,10.266c-0.039,0.117-0.094,0.176-0.164,0.176   H0.176C0.059,10.441,0,10.359,0,10.195C0.242,9.25,0.623,8.406,1.143,7.664S2.32,6.551,3.117,6.551   c0.555,0,1.018,0.186,1.389,0.557s0.557,0.834,0.557,1.389c0,0.336-0.055,0.641-0.164,0.914l-1.945,5.18   c-0.227,0.609-0.34,1.098-0.34,1.465c0,0.492,0.195,0.738,0.586,0.738c0.438,0,0.818-0.17,1.143-0.51s0.59-0.742,0.797-1.207   s0.373-0.939,0.498-1.424c0.055-0.109,0.113-0.164,0.176-0.164h0.281c0.117,0,0.176,0.078,0.176,0.234   c-0.133,0.57-0.336,1.131-0.609,1.682S5.033,16.42,4.6,16.799s-0.928,0.568-1.482,0.568c-0.547,0-1.002-0.186-1.365-0.557   S1.207,15.98,1.207,15.434z M3.938,2.583c0-0.326,0.127-0.612,0.381-0.856s0.545-0.367,0.873-0.367   c0.242,0,0.441,0.074,0.598,0.221c0.156,0.148,0.234,0.346,0.234,0.594c0,0.319-0.129,0.602-0.387,0.851   C5.379,3.274,5.094,3.398,4.781,3.398c-0.227,0-0.424-0.076-0.592-0.227C4.021,3.02,3.938,2.824,3.938,2.583z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 7, 27 ]
});
/**
 * 字符data: j
 */
define("char/data/character/j", [], {
    path: "M1.214,21.281c0.234,0.117,0.531,0.176,0.891,0.176c0.688,0,1.282-0.313,1.783-0.938s0.841-1.313,1.021-2.063l2.287-9.129   c0.109-0.438,0.164-0.82,0.164-1.148c0-0.289-0.053-0.537-0.158-0.744S6.91,7.125,6.645,7.125c-0.719,0-1.332,0.314-1.84,0.943   s-0.938,1.385-1.289,2.268c-0.031,0.07-0.078,0.105-0.141,0.105H3.094c-0.047,0-0.088-0.033-0.123-0.1s-0.053-0.115-0.053-0.146   C3.301,9.219,3.805,8.367,4.43,7.641s1.379-1.09,2.262-1.09c0.398,0,0.764,0.094,1.096,0.281s0.592,0.447,0.779,0.779   s0.281,0.697,0.281,1.096c0,0.242-0.023,0.477-0.07,0.703l-2.288,9.117c-0.165,0.656-0.467,1.248-0.91,1.775   c-0.442,0.527-0.98,0.947-1.613,1.26c-0.634,0.313-1.275,0.469-1.924,0.469c-0.517,0-0.986-0.117-1.408-0.352S0,21.09,0,20.613   c0-0.352,0.124-0.66,0.371-0.926c0.248-0.266,0.552-0.398,0.914-0.398c0.235,0,0.436,0.072,0.601,0.217s0.248,0.338,0.248,0.58   c0,0.281-0.088,0.533-0.265,0.756S1.473,21.211,1.214,21.281z M7.652,2.583c0-0.326,0.127-0.612,0.381-0.856   s0.541-0.367,0.861-0.367c0.258,0,0.463,0.076,0.615,0.227c0.152,0.152,0.229,0.348,0.229,0.588c0,0.202-0.057,0.398-0.17,0.589   S9.299,3.107,9.1,3.224C8.9,3.34,8.695,3.398,8.484,3.398c-0.234,0-0.432-0.076-0.592-0.227C7.732,3.02,7.652,2.824,7.652,2.583z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 字符data: k
 */
define("char/data/character/k", [], {
    path: "M0,16.746c0-0.078,0.008-0.141,0.023-0.188l3.48-13.945c0.078-0.352,0.117-0.566,0.117-0.645   c0-0.289-0.512-0.434-1.535-0.434c-0.039,0-0.082-0.029-0.129-0.088s-0.07-0.119-0.07-0.182l0.105-0.375   C2.023,0.789,2.086,0.738,2.18,0.738L5.32,0.48h0.07C5.414,0.488,5.441,0.498,5.473,0.51S5.52,0.535,5.52,0.551   c0.031,0.094,0.047,0.148,0.047,0.164l-2.52,10.148c0.578-0.227,1.328-0.822,2.25-1.787S6.895,7.449,7.324,7.09   s1.02-0.539,1.77-0.539c0.445,0,0.824,0.145,1.137,0.434s0.469,0.648,0.469,1.078c0,0.375-0.119,0.705-0.357,0.99   S9.789,9.48,9.398,9.48c-0.227,0-0.422-0.074-0.586-0.223s-0.246-0.34-0.246-0.574c0-0.344,0.121-0.637,0.363-0.879   s0.535-0.363,0.879-0.363C9.629,7.23,9.375,7.125,9.047,7.125c-0.594,0-1.148,0.203-1.664,0.609S6.221,8.75,5.443,9.563   s-1.361,1.336-1.752,1.57c0.594,0.07,1.139,0.193,1.635,0.369s0.92,0.439,1.271,0.791s0.527,0.797,0.527,1.336   c0,0.148-0.031,0.363-0.094,0.645c-0.125,0.453-0.199,0.926-0.223,1.418c0,0.734,0.258,1.102,0.773,1.102   c0.578,0,1.014-0.299,1.307-0.896s0.553-1.346,0.779-2.244c0.039-0.109,0.094-0.164,0.164-0.164h0.293   c0.047,0,0.086,0.023,0.117,0.07s0.047,0.102,0.047,0.164c-0.242,0.984-0.574,1.838-0.996,2.561s-1.008,1.084-1.758,1.084   c-0.656,0-1.186-0.223-1.588-0.668s-0.604-1.004-0.604-1.676c0-0.305,0.031-0.578,0.094-0.82c0.055-0.172,0.082-0.348,0.082-0.527   c0-0.625-0.273-1.1-0.82-1.424S3.527,11.73,2.824,11.66l-1.242,4.992c-0.047,0.211-0.16,0.383-0.34,0.516s-0.371,0.199-0.574,0.199   c-0.18,0-0.336-0.059-0.469-0.176S0,16.926,0,16.746z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 字符data: l
 */
define("char/data/character/l", [], {
    path: "M0,15.211c0-0.289,0.031-0.527,0.094-0.715L3.07,2.613c0.086-0.391,0.129-0.605,0.129-0.645   c0-0.289-0.516-0.434-1.547-0.434c-0.047,0-0.09-0.029-0.129-0.088S1.465,1.328,1.465,1.266l0.094-0.375   C1.59,0.789,1.656,0.738,1.758,0.738L4.898,0.48c0.156,0,0.234,0.078,0.234,0.234L1.688,14.566c0,0.07-0.029,0.258-0.088,0.563   s-0.088,0.508-0.088,0.609c0,0.703,0.242,1.055,0.727,1.055c0.344,0,0.637-0.186,0.879-0.557s0.42-0.744,0.533-1.119   s0.24-0.863,0.381-1.465c0.039-0.109,0.098-0.164,0.176-0.164h0.281c0.047,0,0.086,0.023,0.117,0.07s0.047,0.102,0.047,0.164   c-0.266,1.086-0.561,1.965-0.885,2.637s-0.85,1.008-1.576,1.008c-0.625,0-1.146-0.205-1.564-0.615S0,15.828,0,15.211z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 6, 27 ]
});
/**
 * 字符data: m
 */
define("char/data/character/m", [], {
    path: "M1.184,16.746c0-0.094,0.008-0.164,0.023-0.211L3,9.328C3.117,8.859,3.176,8.477,3.176,8.18S3.121,7.633,3.012,7.43   S2.715,7.125,2.449,7.125c-0.352,0-0.646,0.18-0.885,0.539S1.145,8.408,1.02,8.818s-0.258,0.893-0.398,1.447   c-0.039,0.117-0.094,0.176-0.164,0.176H0.176C0.059,10.441,0,10.359,0,10.195c0.188-0.758,0.357-1.361,0.51-1.811   S0.9,7.518,1.225,7.131s0.748-0.58,1.271-0.58c0.383,0,0.738,0.09,1.066,0.27s0.594,0.426,0.797,0.738S4.664,8.215,4.664,8.59   C5.188,7.926,5.74,7.42,6.322,7.072s1.26-0.521,2.033-0.521c0.477,0,0.918,0.084,1.324,0.252s0.73,0.424,0.973,0.768   s0.363,0.754,0.363,1.23c1.063-1.5,2.352-2.25,3.867-2.25c0.805,0,1.449,0.221,1.934,0.662s0.727,1.061,0.727,1.857   c0,0.664-0.145,1.455-0.434,2.373s-0.664,1.967-1.125,3.146c-0.203,0.547-0.305,1.035-0.305,1.465c0,0.492,0.184,0.738,0.551,0.738   c0.445,0,0.836-0.172,1.172-0.516s0.609-0.76,0.82-1.248s0.371-0.947,0.48-1.377c0.039-0.109,0.094-0.164,0.164-0.164h0.293   c0.047,0,0.086,0.023,0.117,0.07s0.047,0.102,0.047,0.164c-0.133,0.57-0.336,1.131-0.609,1.682s-0.627,1.016-1.061,1.395   s-0.924,0.568-1.471,0.568s-1.008-0.188-1.383-0.563s-0.563-0.832-0.563-1.371c0-0.281,0.055-0.586,0.164-0.914   c0.469-1.242,0.854-2.344,1.154-3.305s0.451-1.781,0.451-2.461c0-0.461-0.09-0.848-0.27-1.16s-0.48-0.469-0.902-0.469   c-1.578,0-2.883,1.008-3.914,3.023c-0.031,0.125-0.055,0.223-0.07,0.293l-1.535,6.164c-0.063,0.227-0.18,0.41-0.352,0.551   s-0.367,0.211-0.586,0.211c-0.195,0-0.355-0.055-0.48-0.164s-0.188-0.262-0.188-0.457c0-0.094,0.008-0.164,0.023-0.211l1.535-6.176   c0.156-0.586,0.234-1.121,0.234-1.605c0-0.469-0.09-0.857-0.27-1.166S8.746,7.125,8.309,7.125c-1.555,0-2.859,1-3.914,3   l-1.605,6.48c-0.063,0.227-0.18,0.41-0.352,0.551s-0.367,0.211-0.586,0.211c-0.195,0-0.355-0.055-0.48-0.164   S1.184,16.941,1.184,16.746z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 20, 27 ]
});
/**
 * 字符data: n
 */
define("char/data/character/n", [], {
    path: "M1.184,16.746c0-0.094,0.008-0.164,0.023-0.211L3,9.328C3.117,8.859,3.176,8.477,3.176,8.18S3.121,7.633,3.012,7.43   S2.715,7.125,2.449,7.125c-0.352,0-0.646,0.18-0.885,0.539S1.145,8.408,1.02,8.818s-0.258,0.893-0.398,1.447   c-0.039,0.117-0.094,0.176-0.164,0.176H0.176C0.059,10.441,0,10.359,0,10.195c0.188-0.758,0.357-1.361,0.51-1.811   S0.9,7.518,1.225,7.131s0.748-0.58,1.271-0.58c0.305,0,0.582,0.049,0.832,0.146s0.477,0.238,0.68,0.422s0.363,0.398,0.48,0.645   S4.664,8.285,4.664,8.59C5.188,7.926,5.74,7.42,6.322,7.072s1.26-0.521,2.033-0.521c0.805,0,1.449,0.221,1.934,0.662   s0.727,1.061,0.727,1.857c0,0.664-0.145,1.455-0.434,2.373S9.918,13.41,9.457,14.59c-0.211,0.57-0.316,1.059-0.316,1.465   c0,0.492,0.188,0.738,0.563,0.738c0.633,0,1.154-0.332,1.564-0.996s0.713-1.379,0.908-2.145c0.039-0.109,0.094-0.164,0.164-0.164   h0.281c0.117,0,0.176,0.078,0.176,0.234c-0.133,0.57-0.336,1.131-0.609,1.682s-0.627,1.016-1.061,1.395s-0.928,0.568-1.482,0.568   c-0.539,0-0.996-0.188-1.371-0.563s-0.563-0.832-0.563-1.371c0-0.281,0.055-0.586,0.164-0.914c0.469-1.242,0.854-2.344,1.154-3.305   S9.48,9.434,9.48,8.754c0-0.461-0.09-0.848-0.27-1.16S8.73,7.125,8.309,7.125c-1.563,0-2.859,0.992-3.891,2.977l-1.629,6.504   c-0.063,0.227-0.18,0.41-0.352,0.551s-0.367,0.211-0.586,0.211c-0.195,0-0.355-0.055-0.48-0.164S1.184,16.941,1.184,16.746z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 13, 27 ]
});
/**
 * 字符data: o
 */
define("char/data/character/o", [], {
    path: "M3.715,17.367c-0.727,0-1.373-0.176-1.939-0.527s-1.004-0.834-1.313-1.447S0,14.113,0,13.395   c0-1.07,0.293-2.139,0.879-3.205S2.25,8.25,3.234,7.57s2.02-1.02,3.105-1.02c0.578,0,1.09,0.102,1.535,0.305   s0.83,0.484,1.154,0.844s0.572,0.779,0.744,1.26s0.258,1.006,0.258,1.576c0,1.07-0.291,2.137-0.873,3.199s-1.363,1.934-2.344,2.613   S4.801,17.367,3.715,17.367z M3.762,16.793c0.938,0,1.756-0.398,2.455-1.195s1.23-1.756,1.594-2.877s0.545-2.139,0.545-3.053   c0-0.688-0.178-1.283-0.533-1.787S6.953,7.125,6.281,7.125c-0.93,0-1.744,0.398-2.443,1.195s-1.23,1.756-1.594,2.877   s-0.545,2.139-0.545,3.053c0,0.695,0.176,1.293,0.527,1.793S3.09,16.793,3.762,16.793z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 字符data: p
 */
define("char/data/character/p", [], {
    path: "M0.37,21.967c-0.039,0-0.082-0.027-0.129-0.082s-0.07-0.105-0.07-0.152l0.105-0.387c0.023-0.109,0.086-0.164,0.188-0.164   c0.508,0,0.859-0.043,1.055-0.129s0.348-0.324,0.457-0.715L4.683,9.534c0-0.023,0.029-0.188,0.088-0.492s0.088-0.531,0.088-0.68   c0-0.297-0.055-0.547-0.164-0.75S4.397,7.307,4.132,7.307c-0.273,0-0.514,0.115-0.721,0.346s-0.375,0.5-0.504,0.809   S2.659,9.129,2.55,9.54s-0.188,0.713-0.234,0.908c-0.039,0.117-0.098,0.176-0.176,0.176H1.858c-0.117,0-0.176-0.082-0.176-0.246   C1.87,9.62,2.04,9.016,2.192,8.567S2.583,7.7,2.907,7.313s0.748-0.58,1.271-0.58c0.547,0,1.021,0.16,1.424,0.48   s0.643,0.75,0.721,1.289c0.992-1.18,2.016-1.77,3.07-1.77c0.664,0,1.229,0.18,1.693,0.539s0.814,0.822,1.049,1.389   s0.352,1.178,0.352,1.834c0,1.008-0.256,2.064-0.768,3.17s-1.207,2.029-2.086,2.771s-1.83,1.113-2.854,1.113   c-0.469,0-0.891-0.139-1.266-0.416s-0.66-0.643-0.855-1.096l-1.102,4.395c-0.047,0.148-0.07,0.285-0.07,0.41   c0,0.227,0.52,0.34,1.559,0.34c0.055,0,0.102,0.027,0.141,0.082s0.059,0.113,0.059,0.176L5.14,21.827   c-0.016,0.094-0.102,0.141-0.258,0.141H0.37z M6.827,16.975c0.617,0,1.182-0.279,1.693-0.838s0.938-1.25,1.277-2.074   s0.598-1.65,0.773-2.479s0.264-1.527,0.264-2.098c0-0.578-0.115-1.086-0.346-1.523S9.878,7.307,9.347,7.307   c-0.578,0-1.131,0.217-1.658,0.65S6.69,8.917,6.276,9.534c0,0.008,0,0.02,0,0.035S6.269,9.6,6.253,9.616l-1.301,5.227   c0.094,0.578,0.299,1.078,0.615,1.5S6.304,16.975,6.827,16.975z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 13, 27 ]
});
/**
 * 字符data: q
 */
define("char/data/character/q", [], {
    path: "M2.496,21.547l0.094-0.393c0.023-0.111,0.086-0.167,0.188-0.167c0.602,0,1.059-0.047,1.371-0.14s0.52-0.327,0.621-0.701   l1.055-4.187c-0.906,0.938-1.816,1.406-2.73,1.406c-0.664,0-1.229-0.18-1.693-0.539s-0.814-0.824-1.049-1.395S0,14.254,0,13.605   c0-1,0.254-2.055,0.762-3.164s1.203-2.035,2.086-2.777s1.828-1.113,2.836-1.113c0.5,0,0.941,0.152,1.324,0.457   S7.672,7.703,7.852,8.18c0.109-0.211,0.367-0.535,0.773-0.973S9.316,6.551,9.48,6.551c0.039,0,0.076,0.012,0.111,0.035   S9.656,6.637,9.68,6.668s0.035,0.07,0.035,0.117L6.363,20.239c-0.055,0.141-0.082,0.277-0.082,0.41c0,0.226,0.523,0.339,1.57,0.339   c0.055,0,0.1,0.023,0.135,0.071c0.035,0.047,0.053,0.111,0.053,0.19l-0.094,0.393c-0.016,0.095-0.105,0.143-0.27,0.143H2.684   C2.559,21.785,2.496,21.706,2.496,21.547z M3.141,16.793c0.57,0,1.127-0.227,1.67-0.68s0.994-0.969,1.354-1.547l1.348-5.309   C7.41,8.672,7.205,8.17,6.896,7.752s-0.729-0.627-1.26-0.627c-0.805,0-1.512,0.455-2.121,1.365s-1.076,1.963-1.4,3.158   s-0.486,2.184-0.486,2.965c0,0.555,0.123,1.057,0.369,1.506S2.625,16.793,3.141,16.793z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 字符data: r
 */
define("char/data/character/r", [], {
    path: "M1.184,16.746c0-0.094,0.008-0.164,0.023-0.211L3,9.328C3.117,8.859,3.176,8.477,3.176,8.18S3.121,7.633,3.012,7.43   S2.715,7.125,2.449,7.125c-0.352,0-0.646,0.18-0.885,0.539S1.145,8.408,1.02,8.818s-0.258,0.893-0.398,1.447   c-0.039,0.117-0.094,0.176-0.164,0.176H0.176C0.059,10.441,0,10.359,0,10.195c0.188-0.758,0.357-1.361,0.51-1.811   S0.9,7.518,1.225,7.131s0.748-0.58,1.271-0.58c0.555,0,1.031,0.166,1.43,0.498s0.633,0.764,0.703,1.295   c0.859-1.195,1.879-1.793,3.059-1.793c0.5,0,0.939,0.137,1.318,0.41s0.568,0.648,0.568,1.125c0,0.227-0.053,0.451-0.158,0.674   S9.162,9.158,8.971,9.287S8.559,9.48,8.309,9.48c-0.227,0-0.424-0.074-0.592-0.223s-0.252-0.34-0.252-0.574   c0-0.195,0.055-0.393,0.164-0.592s0.252-0.357,0.428-0.475s0.361-0.176,0.557-0.176C8.371,7.23,8.043,7.125,7.629,7.125   c-1.203,0-2.25,0.887-3.141,2.66l-1.699,6.82c-0.063,0.227-0.18,0.41-0.352,0.551s-0.367,0.211-0.586,0.211   c-0.195,0-0.355-0.055-0.48-0.164S1.184,16.941,1.184,16.746z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 字符data: s
 */
define("char/data/character/s", [], {
    path: "M0.727,15.551c0.164,0.422,0.508,0.734,1.031,0.938s1.066,0.305,1.629,0.305c0.852,0,1.625-0.229,2.32-0.686   s1.043-1.1,1.043-1.928c0-0.414-0.15-0.76-0.451-1.037s-0.662-0.467-1.084-0.568L3.75,12.258c-0.523-0.117-0.959-0.381-1.307-0.791   s-0.521-0.881-0.521-1.412c0-1.047,0.4-1.893,1.201-2.537S4.859,6.551,5.93,6.551c0.43,0,0.861,0.074,1.295,0.223   s0.787,0.373,1.061,0.674s0.41,0.682,0.41,1.143c0,0.359-0.094,0.67-0.281,0.932S7.961,9.914,7.617,9.914   c-0.188,0-0.352-0.063-0.492-0.188S6.914,9.438,6.914,9.234c0-0.281,0.107-0.52,0.322-0.715s0.467-0.293,0.756-0.293   C7.875,7.852,7.607,7.574,7.189,7.395s-0.854-0.27-1.307-0.27c-0.68,0-1.285,0.191-1.816,0.574S3.27,8.602,3.27,9.258   c0,0.328,0.115,0.609,0.346,0.844s0.506,0.387,0.826,0.457l1.301,0.258c0.68,0.156,1.246,0.461,1.699,0.914s0.68,1.016,0.68,1.688   c0,0.586-0.162,1.158-0.486,1.717s-0.732,1.018-1.225,1.377c-0.836,0.57-1.859,0.855-3.07,0.855c-0.852,0-1.621-0.191-2.309-0.574   S0,15.836,0,15.07c0-0.43,0.113-0.793,0.34-1.09s0.547-0.445,0.961-0.445c0.242,0,0.443,0.072,0.604,0.217s0.24,0.334,0.24,0.568   c0,0.352-0.121,0.648-0.363,0.891s-0.539,0.363-0.891,0.363C0.813,15.574,0.758,15.566,0.727,15.551z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 9, 27 ]
});
/**
 * 字符data: t
 */
define("char/data/character/t", [], {
    path: "M0.914,15.211c0-0.18,0.031-0.41,0.094-0.691L2.73,7.582H0.188c-0.047,0-0.09-0.029-0.129-0.088S0,7.375,0,7.313   l0.094-0.375c0.031-0.102,0.098-0.152,0.199-0.152H2.93l0.984-3.914C3.977,2.652,4.092,2.475,4.26,2.338s0.365-0.205,0.592-0.205   c0.18,0,0.336,0.057,0.469,0.17S5.52,2.566,5.52,2.754c0,0.102-0.008,0.168-0.023,0.199L4.535,6.785h2.496   c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17L7.125,7.418c0,0.109-0.063,0.164-0.188,0.164h-2.59L2.59,14.59   c-0.109,0.453-0.164,0.836-0.164,1.148c0,0.703,0.238,1.055,0.715,1.055c0.492,0,0.943-0.166,1.354-0.498s0.76-0.74,1.049-1.225   s0.531-0.98,0.727-1.488c0.031-0.063,0.078-0.094,0.141-0.094h0.281c0.117,0,0.176,0.078,0.176,0.234   c-0.367,0.961-0.871,1.809-1.512,2.543s-1.395,1.102-2.262,1.102c-0.617,0-1.135-0.205-1.553-0.615S0.914,15.828,0.914,15.211z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 8, 27 ]
});
/**
 * 字符data: u
 */
define("char/data/character/u", [], {
    path: "M1.875,14.566c0-0.367,0.043-0.771,0.129-1.213s0.189-0.85,0.311-1.225s0.305-0.898,0.551-1.57s0.396-1.082,0.451-1.23   c0.219-0.586,0.328-1.074,0.328-1.465c0-0.492-0.184-0.738-0.551-0.738c-0.625,0-1.139,0.32-1.541,0.961s-0.713,1.367-0.932,2.18   c-0.039,0.117-0.094,0.176-0.164,0.176H0.176C0.059,10.441,0,10.359,0,10.195C0.242,9.25,0.623,8.406,1.143,7.664   s1.186-1.113,1.998-1.113c0.555,0,1.018,0.186,1.389,0.557s0.557,0.834,0.557,1.389c0,0.297-0.063,0.602-0.188,0.914   c-0.063,0.172-0.221,0.594-0.475,1.266s-0.447,1.23-0.58,1.676s-0.242,0.875-0.328,1.289s-0.129,0.824-0.129,1.23   c0,0.547,0.113,1.004,0.34,1.371s0.594,0.551,1.102,0.551c1.023,0,1.91-0.641,2.66-1.922c0.016-0.063,0.029-0.123,0.041-0.182   s0.021-0.115,0.029-0.17l1.758-6.984c0.047-0.219,0.16-0.398,0.34-0.539s0.379-0.211,0.598-0.211c0.188,0,0.342,0.057,0.463,0.17   s0.182,0.268,0.182,0.463v0.188L9.141,14.59c-0.109,0.453-0.164,0.836-0.164,1.148c0,0.703,0.242,1.055,0.727,1.055   c0.352,0,0.648-0.182,0.891-0.545s0.422-0.736,0.539-1.119s0.246-0.875,0.387-1.477c0.039-0.109,0.098-0.164,0.176-0.164h0.281   c0.047,0,0.086,0.023,0.117,0.07s0.047,0.102,0.047,0.164c-0.258,1.086-0.555,1.965-0.891,2.637s-0.871,1.008-1.605,1.008   c-0.492,0-0.932-0.143-1.318-0.428s-0.65-0.662-0.791-1.131c-0.344,0.469-0.752,0.846-1.225,1.131s-0.982,0.428-1.529,0.428   c-0.898,0-1.607-0.248-2.127-0.744S1.875,15.441,1.875,14.566z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 13, 27 ]
});
/**
 * 字符data: A
 */
define("char/data/character/ua", [], {
    path: "M0.211,17.133C0.07,17.133,0,17.043,0,16.863l0.094-0.375c0.031-0.102,0.094-0.152,0.188-0.152   c1.227,0,2.156-0.527,2.789-1.582c0-0.016,0.016-0.031,0.047-0.047l8.637-14.496C11.84,0.07,11.969,0,12.141,0h0.281   c0.18,0,0.27,0.07,0.27,0.211l1.512,15.574c0.055,0.234,0.25,0.385,0.586,0.451s0.734,0.1,1.195,0.1   c0.063,0,0.113,0.029,0.152,0.088s0.059,0.111,0.059,0.158l-0.094,0.387c-0.039,0.109-0.137,0.164-0.293,0.164h-5.543   c-0.141,0-0.211-0.09-0.211-0.27l0.094-0.375c0.031-0.102,0.094-0.152,0.188-0.152c1.188,0,1.813-0.215,1.875-0.645l-0.41-4.102   H5.777l-1.992,3.34c-0.125,0.203-0.188,0.418-0.188,0.645c0,0.273,0.119,0.469,0.357,0.586s0.502,0.176,0.791,0.176   c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17L4.84,16.969c-0.016,0.109-0.102,0.164-0.258,0.164H0.211z M6.258,10.793   h5.473l-0.738-7.945L6.258,10.793z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 字符data: B
 */
define("char/data/character/ub", [], {
    path: "M0.223,17.133c-0.148,0-0.223-0.09-0.223-0.27l0.094-0.375c0.008-0.023,0.035-0.055,0.082-0.094s0.086-0.059,0.117-0.059   c0.656,0,1.182-0.047,1.576-0.141s0.65-0.324,0.768-0.691L5.93,2.273C5.977,2.156,6,2.039,6,1.922c0-0.258-0.633-0.387-1.898-0.387   c-0.047,0-0.09-0.029-0.129-0.088S3.914,1.328,3.914,1.266l0.094-0.375c0.031-0.102,0.098-0.152,0.199-0.152h8.227   c1.109,0,2.1,0.287,2.971,0.861s1.307,1.393,1.307,2.455c0,0.781-0.25,1.492-0.75,2.133s-1.139,1.164-1.916,1.57   S12.5,8.434,11.742,8.566c0.586,0,1.166,0.148,1.74,0.445s1.039,0.703,1.395,1.219s0.533,1.074,0.533,1.676   c0,0.734-0.193,1.42-0.58,2.057s-0.906,1.193-1.559,1.67s-1.355,0.846-2.109,1.107S9.688,17.133,9,17.133H0.223z M4.324,16.125   c0,0.141,0.262,0.211,0.785,0.211h3.434c0.789,0,1.555-0.217,2.297-0.65s1.338-1.012,1.787-1.734s0.674-1.479,0.674-2.268   s-0.234-1.449-0.703-1.98s-1.09-0.797-1.863-0.797H6.094l-1.676,6.691C4.355,15.816,4.324,15.992,4.324,16.125z M6.246,8.32h3.64   c0.764,0,1.509-0.195,2.235-0.586s1.32-0.922,1.785-1.594c0.464-0.672,0.696-1.391,0.696-2.156c0-0.711-0.217-1.297-0.649-1.758   c-0.433-0.461-1.004-0.691-1.714-0.691H8.926c-0.437,0-0.72,0.043-0.849,0.129C7.949,1.75,7.833,1.984,7.732,2.367L6.246,8.32z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 字符data: C
 */
define("char/data/character/uc", [], {
    path: "M2.086,11.906c0,1.461,0.426,2.648,1.277,3.563s2.008,1.371,3.469,1.371c1,0,1.959-0.26,2.877-0.779   s1.709-1.211,2.373-2.074s1.113-1.775,1.348-2.736c0.031-0.094,0.09-0.141,0.176-0.141h0.281c0.055,0,0.096,0.02,0.123,0.059   s0.041,0.09,0.041,0.152c-0.195,0.844-0.542,1.645-1.038,2.402s-1.097,1.432-1.8,2.021s-1.474,1.053-2.311,1.389   s-1.689,0.504-2.557,0.504c-1.243,0-2.348-0.283-3.313-0.85s-1.712-1.344-2.24-2.332S0,12.359,0,11.133   c0-1.328,0.291-2.646,0.874-3.955s1.374-2.486,2.375-3.533c1.001-1.047,2.143-1.877,3.424-2.49c1.282-0.613,2.592-0.92,3.929-0.92   c0.821,0,1.575,0.193,2.263,0.58s1.228,0.932,1.619,1.635l1.853-2.168c0.031-0.031,0.071-0.047,0.118-0.047h0.152   c0.109,0,0.164,0.074,0.164,0.223l-1.605,6.457c-0.023,0.109-0.082,0.164-0.176,0.164H14.59c-0.117,0-0.176-0.082-0.176-0.246   c0.063-0.375,0.094-0.797,0.094-1.266c0-1.258-0.311-2.328-0.932-3.211s-1.525-1.324-2.713-1.324c-1.289,0-2.48,0.324-3.574,0.973   S5.258,3.52,4.477,4.605S3.102,6.873,2.695,8.15S2.086,10.68,2.086,11.906z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 字符data: D
 */
define("char/data/character/ud", [], {
    path: "M0.223,17.133c-0.148,0-0.223-0.09-0.223-0.27l0.094-0.375c0.008-0.023,0.035-0.055,0.082-0.094s0.086-0.059,0.117-0.059   c0.656,0,1.182-0.047,1.576-0.141s0.65-0.324,0.768-0.691L5.93,2.273C5.977,2.156,6,2.039,6,1.922c0-0.258-0.633-0.387-1.898-0.387   c-0.047,0-0.09-0.029-0.129-0.088S3.914,1.328,3.914,1.266l0.094-0.375c0.031-0.102,0.098-0.152,0.199-0.152h8.273   c1.109,0,2.072,0.271,2.889,0.814s1.439,1.275,1.869,2.197s0.645,1.918,0.645,2.988c0,1.234-0.252,2.467-0.756,3.697   s-1.205,2.359-2.104,3.387s-1.918,1.836-3.059,2.426s-2.328,0.885-3.563,0.885H0.223z M4.395,16.125   c0,0.141,0.262,0.211,0.785,0.211h2.859c0.867,0,1.719-0.186,2.555-0.557s1.586-0.881,2.25-1.529   c0.594-0.594,1.127-1.381,1.6-2.361s0.836-1.996,1.09-3.047s0.381-2.021,0.381-2.912c0-0.867-0.162-1.631-0.486-2.291   s-0.803-1.176-1.436-1.547s-1.383-0.557-2.25-0.557H9c-0.438,0-0.721,0.043-0.85,0.129s-0.244,0.32-0.346,0.703l-3.316,13.23   C4.426,15.816,4.395,15.992,4.395,16.125z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 18, 27 ]
});
/**
 * 字符data: E
 */
define("char/data/character/ue", [], {
    path: "M0.211,17.133C0.07,17.133,0,17.043,0,16.863l0.094-0.375c0.031-0.102,0.098-0.152,0.199-0.152   c0.648,0,1.172-0.049,1.57-0.146s0.656-0.326,0.773-0.686L5.93,2.273C5.977,2.156,6,2.039,6,1.922c0-0.258-0.633-0.387-1.898-0.387   c-0.047,0-0.09-0.029-0.129-0.088S3.914,1.328,3.914,1.266l0.094-0.375c0.031-0.102,0.094-0.152,0.188-0.152h12.656   c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17l-0.621,4.992c0,0.141-0.063,0.211-0.188,0.211h-0.223   c-0.141,0-0.211-0.086-0.211-0.258c0.109-0.711,0.164-1.32,0.164-1.828c0-0.789-0.18-1.373-0.539-1.752s-0.811-0.609-1.354-0.691   s-1.279-0.123-2.209-0.123H9.047c-0.43,0-0.711,0.043-0.844,0.129s-0.25,0.32-0.352,0.703L6.387,8.227h1.922   c0.602,0,1.09-0.031,1.465-0.094s0.68-0.182,0.914-0.357s0.438-0.443,0.609-0.803s0.328-0.82,0.469-1.383   c0.023-0.109,0.086-0.164,0.188-0.164h0.211c0.055,0,0.105,0.027,0.152,0.082s0.07,0.105,0.07,0.152l-1.512,6   c-0.023,0.109-0.09,0.164-0.199,0.164h-0.211c-0.125,0-0.188-0.086-0.188-0.258c0.156-0.641,0.234-1.121,0.234-1.441   c0-0.492-0.209-0.799-0.627-0.92S8.906,9.023,8.203,9.023H6.188l-1.652,6.574c-0.063,0.219-0.094,0.395-0.094,0.527   c0,0.141,0.266,0.211,0.797,0.211h2.965c1.141,0,2.066-0.09,2.777-0.27s1.299-0.469,1.764-0.867s0.863-0.896,1.195-1.494   s0.74-1.486,1.225-2.666c0.031-0.094,0.098-0.141,0.199-0.141h0.211c0.063,0,0.115,0.02,0.158,0.059s0.064,0.09,0.064,0.152   c0,0.031-0.008,0.055-0.023,0.07l-2.402,5.789c-0.023,0.109-0.09,0.164-0.199,0.164H0.211z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 18, 27 ]
});
/**
 * 字符data: F
 */
define("char/data/character/uf", [], {
    path: "M0.211,17.133C0.07,17.133,0,17.043,0,16.863l0.094-0.375c0.031-0.102,0.098-0.152,0.199-0.152   c0.648,0,1.172-0.049,1.57-0.146c0.398-0.098,0.656-0.326,0.773-0.685L5.93,2.273C5.977,2.156,6,2.039,6,1.922   c0-0.258-0.633-0.387-1.898-0.387c-0.047,0-0.09-0.029-0.129-0.088S3.914,1.328,3.914,1.266l0.094-0.375   c0.031-0.102,0.094-0.152,0.188-0.152h12.316c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17l-0.621,4.992   c0,0.141-0.063,0.211-0.188,0.211h-0.223c-0.141,0-0.211-0.086-0.211-0.258c0.109-0.711,0.164-1.336,0.164-1.875   c0-0.789-0.17-1.365-0.51-1.729s-0.77-0.586-1.289-0.668s-1.232-0.123-2.139-0.123H9.047c-0.43,0-0.711,0.043-0.844,0.129   s-0.25,0.32-0.352,0.703L6.316,8.543h1.816c0.797,0,1.4-0.064,1.811-0.193s0.73-0.377,0.961-0.744s0.443-0.934,0.639-1.699   c0.023-0.117,0.09-0.176,0.199-0.176h0.211c0.125,0,0.188,0.082,0.188,0.246l-1.488,6.007c-0.023,0.109-0.086,0.164-0.188,0.164   h-0.211c-0.148,0-0.223-0.089-0.223-0.269c0.18-0.717,0.27-1.201,0.27-1.451c0-0.483-0.203-0.786-0.609-0.906   C9.285,9.4,8.742,9.34,8.063,9.34H6.117l-1.582,6.259c-0.016,0.062-0.023,0.148-0.023,0.257c0,0.195,0.082,0.316,0.246,0.362   c0.18,0.04,0.457,0.069,0.832,0.088c0.375,0.02,0.824,0.029,1.348,0.029c0.063,0,0.113,0.029,0.152,0.088s0.059,0.111,0.059,0.158   l-0.094,0.387c-0.039,0.109-0.133,0.164-0.281,0.164H0.211z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 字符data: G
 */
define("char/data/character/ug", [], {
    path: "M2.109,11.824c0,0.75,0.111,1.43,0.334,2.039s0.551,1.141,0.984,1.594s0.951,0.797,1.553,1.031s1.273,0.352,2.016,0.352   c1.031,0,1.984-0.254,2.859-0.762c0.445-0.281,0.764-0.545,0.955-0.791s0.385-0.615,0.58-1.107l0.48-2.016   c0.031-0.125,0.047-0.211,0.047-0.258c0-0.195-0.086-0.316-0.258-0.363c-0.336-0.078-1.09-0.117-2.262-0.117   c-0.141,0-0.211-0.09-0.211-0.27l0.094-0.387c0.039-0.094,0.137-0.141,0.293-0.141h6c0.125,0,0.188,0.078,0.188,0.234l-0.094,0.387   c0,0.117-0.066,0.176-0.199,0.176c-0.532,0-0.919,0.045-1.161,0.135c-0.243,0.09-0.415,0.322-0.516,0.697l-0.504,1.992   l-0.668,2.719c-0.023,0.109-0.09,0.164-0.199,0.164c-0.117,0-0.297-0.195-0.54-0.586s-0.399-0.691-0.469-0.902   c-0.555,0.68-1.294,1.182-2.216,1.506s-1.88,0.486-2.873,0.486c-1.235,0-2.332-0.281-3.29-0.844   c-0.958-0.563-1.702-1.34-2.234-2.332S0,12.359,0,11.133c0-1.328,0.291-2.646,0.874-3.955s1.374-2.486,2.375-3.533   c1.001-1.047,2.143-1.877,3.424-2.49c1.282-0.613,2.592-0.92,3.929-0.92c0.813,0,1.562,0.193,2.246,0.58s1.222,0.932,1.613,1.635   l1.853-2.168c0.031-0.031,0.071-0.047,0.118-0.047h0.152c0.109,0,0.164,0.074,0.164,0.223l-1.605,6.457   c-0.023,0.109-0.082,0.164-0.176,0.164h-0.41c-0.109,0-0.164-0.082-0.164-0.246c0.063-0.375,0.094-0.797,0.094-1.266   c0-1.258-0.311-2.328-0.932-3.211s-1.525-1.324-2.713-1.324c-1.281,0-2.471,0.324-3.568,0.973S5.246,3.506,4.488,4.564   S3.145,6.793,2.73,8.074S2.109,10.605,2.109,11.824z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 字符data: H
 */
define("char/data/character/uh", [], {
    path: "M0.211,17.133C0.07,17.133,0,17.043,0,16.863l0.094-0.375c0.031-0.102,0.098-0.152,0.199-0.152   c0.648,0,1.172-0.049,1.57-0.146s0.656-0.326,0.773-0.686L5.93,2.273C5.977,2.156,6,2.039,6,1.922c0-0.258-0.633-0.387-1.898-0.387   c-0.047,0-0.09-0.029-0.129-0.088S3.914,1.328,3.914,1.266l0.094-0.375c0.016-0.102,0.105-0.152,0.27-0.152h6   c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17l-0.094,0.375c-0.023,0.117-0.09,0.176-0.199,0.176   c-0.641,0-1.16,0.049-1.559,0.146S7.961,2.008,7.852,2.367L6.387,8.203h7.219l1.465-5.93c0.047-0.117,0.07-0.234,0.07-0.352   c0-0.258-0.629-0.387-1.887-0.387c-0.055,0-0.102-0.029-0.141-0.088s-0.059-0.119-0.059-0.182l0.094-0.375   c0.016-0.102,0.105-0.152,0.27-0.152h6c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17l-0.094,0.375   c-0.023,0.117-0.086,0.176-0.188,0.176c-0.648,0-1.168,0.047-1.559,0.141S17.117,2,16.992,2.367l-3.316,13.23   c-0.031,0.156-0.047,0.277-0.047,0.363c0,0.25,0.625,0.375,1.875,0.375c0.063,0,0.115,0.027,0.158,0.082s0.064,0.109,0.064,0.164   l-0.105,0.387c-0.039,0.109-0.133,0.164-0.281,0.164H9.363c-0.063,0-0.115-0.027-0.158-0.082s-0.064-0.117-0.064-0.188l0.105-0.375   c0.031-0.102,0.094-0.152,0.188-0.152c0.656,0,1.184-0.047,1.582-0.141s0.656-0.324,0.773-0.691L13.395,9H6.188l-1.652,6.598   c-0.031,0.156-0.047,0.277-0.047,0.363c0,0.25,0.625,0.375,1.875,0.375c0.063,0,0.113,0.029,0.152,0.088s0.059,0.111,0.059,0.158   L6.48,16.969c-0.039,0.109-0.137,0.164-0.293,0.164H0.211z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 20, 27 ]
});
/**
 * 字符data: I
 */
define("char/data/character/ui", [], {
    path: "M0.188,17.133c-0.125,0-0.188-0.09-0.188-0.27l0.094-0.375c0.031-0.102,0.094-0.152,0.188-0.152   c0.664,0,1.209-0.049,1.635-0.146s0.697-0.326,0.814-0.686l3.293-13.23c0.008-0.023,0.02-0.07,0.035-0.141S6.086,2,6.094,1.945   c0-0.164-0.078-0.27-0.234-0.316C5.57,1.566,4.984,1.535,4.102,1.535c-0.141,0-0.211-0.09-0.211-0.27l0.094-0.375   c0.039-0.102,0.133-0.152,0.281-0.152h6.223c0.047,0,0.09,0.029,0.129,0.088s0.059,0.111,0.059,0.158l-0.094,0.375   c-0.023,0.117-0.086,0.176-0.188,0.176c-0.672,0-1.221,0.049-1.646,0.146S8.055,2.008,7.945,2.367l-3.316,13.23   c-0.031,0.156-0.047,0.27-0.047,0.34c0,0.156,0.082,0.258,0.246,0.305c0.281,0.063,0.863,0.094,1.746,0.094   c0.063,0,0.113,0.029,0.152,0.088s0.059,0.111,0.059,0.158l-0.094,0.387c-0.039,0.109-0.133,0.164-0.281,0.164H0.188z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 字符data: J
 */
define("char/data/character/uj", [], {
    path: "M0.809,15.574c0.141,0.477,0.42,0.844,0.838,1.102s0.877,0.387,1.377,0.387c0.742,0,1.422-0.371,2.039-1.113   s1.023-1.516,1.219-2.32L9.117,2.273c0.031-0.125,0.047-0.211,0.047-0.258c0-0.195-0.098-0.316-0.293-0.363   C8.52,1.574,7.77,1.535,6.621,1.535c-0.125,0-0.188-0.09-0.188-0.27l0.094-0.375c0.016-0.102,0.102-0.152,0.258-0.152h6.047   c0.063,0,0.115,0.029,0.158,0.088s0.064,0.111,0.064,0.158l-0.094,0.375c-0.023,0.117-0.09,0.176-0.199,0.176   c-0.563,0-0.973,0.045-1.23,0.135s-0.438,0.322-0.539,0.697L8.133,13.77c-0.18,0.719-0.531,1.373-1.055,1.963   s-1.154,1.055-1.893,1.395S3.719,17.637,3,17.637c-0.797,0-1.496-0.232-2.098-0.697S0,15.852,0,15.07   c0-0.516,0.131-0.953,0.393-1.313s0.635-0.539,1.119-0.539c0.273,0,0.506,0.086,0.697,0.258s0.287,0.391,0.287,0.656   c0,0.398-0.145,0.742-0.434,1.031s-0.633,0.434-1.031,0.434c-0.039-0.008-0.074-0.014-0.105-0.018S0.855,15.574,0.809,15.574z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 14, 27 ]
});
/**
 * 字符data: K
 */
define("char/data/character/uk", [], {
    path: "M0.211,17.133C0.07,17.133,0,17.043,0,16.863l0.094-0.375c0.031-0.102,0.098-0.152,0.199-0.152   c0.648,0,1.172-0.049,1.57-0.146s0.656-0.326,0.773-0.686L5.93,2.273C5.977,2.156,6,2.039,6,1.922c0-0.258-0.633-0.387-1.898-0.387   c-0.047,0-0.09-0.029-0.129-0.088S3.914,1.328,3.914,1.266l0.094-0.375c0.016-0.102,0.105-0.152,0.27-0.152h6   c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17l-0.094,0.375c-0.023,0.117-0.09,0.176-0.199,0.176   c-0.641,0-1.16,0.049-1.559,0.146S7.961,2.008,7.852,2.367l-1.969,7.922l9.48-7.418c0.039-0.078,0.115-0.166,0.229-0.264   s0.203-0.193,0.27-0.287s0.1-0.211,0.1-0.352c0-0.289-0.23-0.434-0.691-0.434c-0.055,0-0.102-0.029-0.141-0.088   S15.07,1.328,15.07,1.266l0.094-0.375c0.016-0.102,0.105-0.152,0.27-0.152h4.324c0.055,0,0.1,0.025,0.135,0.076   s0.053,0.107,0.053,0.17l-0.094,0.375c-0.023,0.117-0.09,0.176-0.199,0.176c-1.102,0-2.34,0.535-3.715,1.605   c-0.047,0.016-0.078,0.031-0.094,0.047l-4.992,3.914l3.551,8.473c0.211,0.352,0.434,0.566,0.668,0.645s0.594,0.117,1.078,0.117   c0.063,0,0.115,0.029,0.158,0.088s0.064,0.111,0.064,0.158l-0.094,0.387c-0.039,0.109-0.137,0.164-0.293,0.164h-5.156   c-0.148,0-0.223-0.09-0.223-0.27l0.094-0.375c0.047-0.102,0.113-0.152,0.199-0.152c0.914,0,1.371-0.23,1.371-0.691   c0-0.047-0.002-0.086-0.006-0.117s-0.01-0.063-0.018-0.094L9.27,8.344l-3.633,2.813l-1.102,4.441   c-0.031,0.156-0.047,0.277-0.047,0.363c0,0.25,0.625,0.375,1.875,0.375c0.063,0,0.113,0.029,0.152,0.088s0.059,0.111,0.059,0.158   L6.48,16.969c-0.039,0.109-0.137,0.164-0.293,0.164H0.211z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 20, 27 ]
});
/**
 * 字符data: L
 */
define("char/data/character/ul", [], {
    path: "M0.211,17.133C0.07,17.133,0,17.043,0,16.863l0.094-0.375c0.031-0.102,0.098-0.152,0.199-0.152   c0.648,0,1.172-0.049,1.57-0.146s0.656-0.326,0.773-0.686L5.93,2.273C5.977,2.156,6,2.039,6,1.922c0-0.258-0.633-0.387-1.898-0.387   c-0.047,0-0.09-0.029-0.129-0.088S3.914,1.328,3.914,1.266l0.094-0.375c0.016-0.102,0.105-0.152,0.27-0.152h6.574   c0.047,0,0.09,0.029,0.129,0.088s0.059,0.111,0.059,0.158l-0.094,0.375c-0.023,0.117-0.086,0.176-0.188,0.176   c-1.156,0-1.918,0.039-2.285,0.117C8.145,1.746,7.938,1.984,7.852,2.367l-3.316,13.23c-0.063,0.219-0.094,0.395-0.094,0.527   c0,0.141,0.266,0.211,0.797,0.211h2.297c1.172,0,2.137-0.215,2.895-0.645s1.361-1.014,1.811-1.752s0.881-1.697,1.295-2.877   c0.023-0.109,0.09-0.164,0.199-0.164h0.211c0.063,0,0.113,0.025,0.152,0.076s0.059,0.104,0.059,0.158   c0,0.016-0.008,0.039-0.023,0.07l-2.063,5.766c-0.023,0.109-0.086,0.164-0.188,0.164H0.211z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 15, 27 ]
});
/**
 * 字符data: M
 */
define("char/data/character/um", [], {
    path: "M0.223,17.133c-0.148,0-0.223-0.09-0.223-0.27l0.094-0.375c0.008-0.023,0.035-0.055,0.082-0.094s0.086-0.059,0.117-0.059   c1.422,0,2.262-0.504,2.52-1.512L5.93,2.273C5.977,2.156,6,2.039,6,1.922c0-0.258-0.633-0.387-1.898-0.387   c-0.047,0-0.09-0.029-0.129-0.088S3.914,1.328,3.914,1.266l0.094-0.375c0.031-0.102,0.098-0.152,0.199-0.152h3.938   c0.148,0,0.234,0.074,0.258,0.223l1.781,13.91l8.754-13.91c0.078-0.148,0.207-0.223,0.387-0.223h3.82   c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17l-0.094,0.375c-0.023,0.117-0.09,0.176-0.199,0.176   c-0.641,0-1.16,0.049-1.559,0.146s-0.652,0.326-0.762,0.686l-3.316,13.23c-0.031,0.156-0.047,0.277-0.047,0.363   c0,0.25,0.625,0.375,1.875,0.375c0.063,0,0.113,0.029,0.152,0.088s0.059,0.111,0.059,0.158l-0.094,0.387   c-0.039,0.109-0.137,0.164-0.293,0.164h-5.801c-0.063,0-0.115-0.027-0.158-0.082s-0.064-0.117-0.064-0.188l0.105-0.375   c0.031-0.102,0.094-0.152,0.188-0.152c0.656,0,1.184-0.047,1.582-0.141s0.656-0.324,0.773-0.691l3.48-13.992L9.48,16.898   c-0.086,0.156-0.223,0.234-0.41,0.234c-0.195,0-0.305-0.078-0.328-0.234L6.797,1.652L3.457,14.93   c-0.031,0.188-0.047,0.328-0.047,0.422c0,0.398,0.164,0.662,0.492,0.791s0.73,0.193,1.207,0.193c0.063,0,0.115,0.029,0.158,0.088   s0.064,0.111,0.064,0.158l-0.094,0.387c-0.039,0.109-0.137,0.164-0.293,0.164H0.223z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 24, 27 ]
});
/**
 * 字符data: N
 */
define("char/data/character/un", [], {
    path: "M0.211,17.133C0.07,17.133,0,17.043,0,16.863l0.094-0.375c0.031-0.102,0.098-0.152,0.199-0.152   c1.422,0,2.262-0.504,2.52-1.512L6.094,1.652C5.727,1.574,5.063,1.535,4.102,1.535c-0.047,0-0.09-0.029-0.129-0.088   S3.914,1.328,3.914,1.266l0.094-0.375c0.031-0.102,0.094-0.152,0.188-0.152h3.867c0.102,0,0.168,0.051,0.199,0.152l5.203,12.902   l2.707-10.84c0.039-0.258,0.059-0.402,0.059-0.434c0-0.406-0.162-0.672-0.486-0.797s-0.74-0.188-1.248-0.188   c-0.047,0-0.09-0.029-0.129-0.088s-0.059-0.119-0.059-0.182l0.094-0.375c0.016-0.102,0.102-0.152,0.258-0.152h4.758   c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17l-0.094,0.375c-0.023,0.117-0.086,0.176-0.188,0.176   c-1.414,0-2.246,0.504-2.496,1.512l-3.48,13.922c-0.023,0.109-0.09,0.164-0.199,0.164h-0.258c-0.094,0-0.16-0.055-0.199-0.164   L6.82,2.367C6.797,2.266,6.746,2.172,6.668,2.086L3.457,14.93c-0.031,0.188-0.047,0.328-0.047,0.422   c0,0.398,0.164,0.662,0.492,0.791s0.73,0.193,1.207,0.193c0.063,0,0.115,0.029,0.158,0.088s0.064,0.111,0.064,0.158l-0.094,0.387   c-0.047,0.109-0.145,0.164-0.293,0.164H0.211z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 20, 27 ]
});
/**
 * 字符data: O
 */
define("char/data/character/uo", [], {
    path: "M5.972,17.637c-1.179,0-2.223-0.277-3.132-0.832c-0.91-0.555-1.61-1.316-2.102-2.285S0,12.477,0,11.297   C0,10,0.277,8.695,0.831,7.383C1.386,6.07,2.155,4.871,3.138,3.785c0.984-1.086,2.102-1.949,3.355-2.59s2.535-0.961,3.847-0.961   c1.187,0,2.23,0.283,3.132,0.85s1.593,1.334,2.073,2.303s0.72,2.047,0.72,3.234c0,1.289-0.273,2.59-0.82,3.902   s-1.312,2.514-2.295,3.604c-0.983,1.09-2.098,1.947-3.343,2.572S7.284,17.637,5.972,17.637z M6.141,16.992   c1.188,0,2.279-0.365,3.275-1.096s1.855-1.68,2.578-2.848s1.279-2.406,1.67-3.715s0.586-2.51,0.586-3.604   c0-0.859-0.152-1.662-0.457-2.408s-0.764-1.344-1.377-1.793s-1.361-0.674-2.244-0.674c-0.867,0-1.699,0.207-2.496,0.621   S6.148,2.43,5.484,3.094c-0.68,0.703-1.273,1.553-1.781,2.549S2.811,7.678,2.549,8.76s-0.393,2.139-0.393,3.17   c0,1.367,0.334,2.553,1.002,3.557S4.82,16.992,6.141,16.992z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 字符data: P
 */
define("char/data/character/up", [], {
    path: "M0.223,16.957c-0.148,0-0.223-0.09-0.223-0.27l0.094-0.375c0.008-0.023,0.035-0.055,0.082-0.094s0.086-0.059,0.117-0.059   c0.656,0,1.182-0.047,1.576-0.141s0.65-0.324,0.768-0.691L5.93,2.098C5.977,1.98,6,1.863,6,1.746c0-0.258-0.633-0.387-1.898-0.387   c-0.047,0-0.09-0.029-0.129-0.088S3.914,1.152,3.914,1.09l0.094-0.375c0.031-0.102,0.098-0.152,0.199-0.152h7.957   c0.742,0,1.465,0.135,2.168,0.404s1.275,0.68,1.717,1.23s0.662,1.205,0.662,1.963c0,0.766-0.209,1.479-0.627,2.139   s-0.975,1.225-1.67,1.693s-1.432,0.824-2.209,1.066s-1.533,0.363-2.268,0.363H6.047l-1.488,5.906   c-0.016,0.094-0.031,0.18-0.047,0.258s-0.023,0.145-0.023,0.199c0,0.25,0.625,0.375,1.875,0.375c0.063,0,0.113,0.029,0.152,0.088   s0.059,0.111,0.059,0.158L6.48,16.793c-0.039,0.109-0.137,0.164-0.293,0.164H0.223z M6.164,8.754h3.382   c0.71,0,1.385-0.105,2.025-0.316c0.64-0.211,1.17-0.531,1.591-0.961c0.273-0.273,0.519-0.637,0.737-1.09   c0.218-0.453,0.386-0.92,0.503-1.4c0.117-0.48,0.176-0.932,0.176-1.354c0-0.82-0.304-1.404-0.913-1.752   c-0.609-0.348-1.366-0.521-2.271-0.521H8.996c-0.437,0-0.72,0.043-0.849,0.129s-0.244,0.32-0.345,0.703L6.164,8.754z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 字符data: Q
 */
define("char/data/character/uq", [], {
    path: "M5.977,17.637c-1.18,0-2.225-0.277-3.135-0.832S1.23,15.488,0.738,14.52S0,12.477,0,11.297C0,10,0.277,8.695,0.832,7.383   s1.324-2.512,2.309-3.598s2.104-1.949,3.357-2.59s2.537-0.961,3.85-0.961c1.188,0,2.232,0.283,3.135,0.85s1.594,1.334,2.074,2.303   s0.721,2.047,0.721,3.234c0,1.438-0.314,2.854-0.943,4.248s-1.494,2.631-2.596,3.709s-2.316,1.883-3.645,2.414   c0,0.695,0.125,1.301,0.375,1.816s0.68,0.773,1.289,0.773c0.438,0,0.855-0.119,1.254-0.357s0.738-0.547,1.02-0.926   s0.484-0.791,0.609-1.236c0.023-0.109,0.094-0.164,0.211-0.164c0.063,0,0.113,0.025,0.152,0.076s0.059,0.104,0.059,0.158v0.07   c-0.133,0.508-0.313,1.035-0.539,1.582s-0.494,1.037-0.803,1.471s-0.68,0.797-1.113,1.09s-0.916,0.439-1.447,0.439   c-1.297,0-1.945-0.816-1.945-2.449c0-0.234,0.023-0.586,0.07-1.055s0.07-0.813,0.07-1.031C7.59,17.508,6.797,17.637,5.977,17.637z    M4.523,16.055c0-0.641,0.245-1.217,0.734-1.729c0.489-0.512,1.048-0.768,1.674-0.768c0.713,0,1.214,0.238,1.504,0.715   C8.726,14.75,8.914,15.383,9,16.172c1.055-0.602,1.984-1.475,2.789-2.619s1.418-2.393,1.84-3.744s0.633-2.664,0.633-3.938   c0-0.859-0.148-1.674-0.445-2.443s-0.756-1.391-1.377-1.863s-1.373-0.709-2.256-0.709c-0.859,0-1.688,0.217-2.484,0.65   s-1.547,1.002-2.25,1.705C4.777,3.93,4.182,4.783,3.662,5.771s-0.92,2.033-1.201,3.135s-0.422,2.141-0.422,3.117   c0,1.063,0.21,2.023,0.631,2.883c0.42,0.859,1.082,1.473,1.985,1.84C4.567,16.574,4.523,16.344,4.523,16.055z M5.121,16.031   c0,0.656,0.344,0.984,1.031,0.984c0.711,0,1.461-0.176,2.25-0.527v-0.363c0-0.617-0.105-1.104-0.316-1.459   s-0.602-0.533-1.172-0.533c-0.461,0-0.875,0.195-1.242,0.586S5.121,15.547,5.121,16.031z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 字符data: R
 */
define("char/data/character/ur", [], {
    path: "M0.223,17.133c-0.148,0-0.223-0.09-0.223-0.27l0.094-0.375c0.008-0.023,0.035-0.055,0.082-0.094s0.086-0.059,0.117-0.059   c0.656,0,1.182-0.047,1.576-0.141s0.65-0.324,0.768-0.691L5.93,2.273C5.977,2.156,6,2.039,6,1.922c0-0.258-0.633-0.387-1.898-0.387   c-0.047,0-0.09-0.029-0.129-0.088S3.914,1.328,3.914,1.266l0.094-0.375c0.031-0.102,0.098-0.152,0.199-0.152h6.973   c0.602,0,1.203,0.068,1.805,0.205s1.156,0.348,1.664,0.633s0.926,0.658,1.254,1.119s0.492,1.008,0.492,1.641   c0,1.164-0.533,2.154-1.6,2.971s-2.252,1.373-3.557,1.67c0.414,0.156,0.787,0.369,1.119,0.639s0.592,0.586,0.779,0.949   s0.281,0.76,0.281,1.189c0,0.18-0.008,0.309-0.023,0.387l-0.246,2.133c-0.078,0.844-0.117,1.324-0.117,1.441   c0,0.43,0.066,0.762,0.199,0.996s0.395,0.352,0.785,0.352c0.5,0,0.938-0.234,1.313-0.703s0.633-0.98,0.773-1.535   c0.031-0.094,0.098-0.141,0.199-0.141h0.211c0.133,0,0.199,0.074,0.199,0.223v0.07c-0.117,0.445-0.303,0.871-0.557,1.277   s-0.568,0.738-0.943,0.996s-0.781,0.387-1.219,0.387c-0.875,0-1.621-0.207-2.238-0.621s-0.926-1.047-0.926-1.898   c0-0.266,0.039-0.563,0.117-0.891l0.527-2.133c0.063-0.219,0.094-0.449,0.094-0.691c0-0.664-0.242-1.195-0.727-1.594   S9.766,9.211,9.07,9.211H6.094l-1.605,6.387c-0.031,0.156-0.047,0.277-0.047,0.363c0,0.25,0.625,0.375,1.875,0.375   c0.063,0,0.113,0.029,0.152,0.088s0.059,0.111,0.059,0.158l-0.094,0.387c-0.039,0.109-0.137,0.164-0.293,0.164H0.223z M6.246,8.637   H8.93c0.992,0,1.896-0.178,2.713-0.533S13.1,7.217,13.564,6.51s0.697-1.572,0.697-2.596c0-1.586-1.184-2.379-3.551-2.379H9   c-0.438,0-0.721,0.043-0.85,0.129s-0.244,0.32-0.346,0.703L6.246,8.637z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 字符data: S
 */
define("char/data/character/us", [], {
    path: "M0.176,17.637C0.059,17.637,0,17.566,0,17.426l1.395-5.605c0.031-0.094,0.09-0.141,0.176-0.141h0.281   c0.109,0,0.164,0.074,0.164,0.223c-0.109,0.415-0.18,0.911-0.211,1.49c0,1.149,0.393,2.011,1.178,2.586s1.775,0.862,2.971,0.862   c0.734,0,1.434-0.217,2.098-0.651s1.201-1,1.611-1.7c0.41-0.7,0.615-1.414,0.615-2.141c0-0.586-0.156-1.102-0.469-1.548   s-0.75-0.743-1.313-0.891L5.555,9.112C5.039,8.972,4.594,8.74,4.219,8.416C3.844,8.092,3.557,7.701,3.357,7.244   c-0.199-0.457-0.299-0.946-0.299-1.47c0-0.726,0.162-1.427,0.486-2.103C3.869,2.997,4.301,2.405,4.84,1.897   C5.379,1.39,6.002,0.986,6.709,0.686c0.707-0.301,1.408-0.451,2.104-0.451c0.742,0,1.418,0.144,2.027,0.431s1.07,0.733,1.383,1.339   l1.371-1.723c0.031-0.031,0.07-0.046,0.117-0.046h0.141c0.109,0,0.164,0.074,0.164,0.223l-1.383,5.559   c-0.023,0.109-0.082,0.164-0.176,0.164h-0.281C12.059,6.18,12,6.102,12,5.945c0.086-0.477,0.129-0.927,0.129-1.349   c0-1.134-0.281-2.021-0.844-2.662s-1.41-0.962-2.543-0.962c-0.672,0-1.336,0.188-1.992,0.563S5.563,2.409,5.156,3.031   S4.547,4.303,4.547,4.983c0,0.563,0.16,1.052,0.48,1.466S5.77,7.141,6.293,7.282l2.953,0.797c0.523,0.141,0.973,0.385,1.348,0.733   c0.375,0.348,0.664,0.762,0.867,1.243s0.305,0.991,0.305,1.53c0,0.735-0.156,1.46-0.469,2.175c-0.313,0.716-0.756,1.373-1.33,1.97   c-0.574,0.598-1.213,1.065-1.916,1.401c-0.703,0.336-1.434,0.504-2.191,0.504c-0.852,0-1.637-0.141-2.355-0.422   s-1.285-0.734-1.699-1.359L0.434,17.59c-0.031,0.031-0.07,0.047-0.117,0.047H0.176z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 15, 27 ]
});
/**
 * 字符data: T
 */
define("char/data/character/ut", [], {
    path: "M0.727,16.863l0.094-0.375c0.031-0.102,0.094-0.152,0.188-0.152c1.344,0,2.223-0.047,2.637-0.141   c0.328-0.094,0.547-0.324,0.656-0.691l3.281-13.23c0.055-0.18,0.098-0.355,0.129-0.527c0-0.141-0.266-0.211-0.797-0.211H5.426   c-0.82,0-1.494,0.098-2.021,0.293S2.459,2.301,2.15,2.66S1.584,3.447,1.377,3.943s-0.459,1.189-0.756,2.08   C0.598,6.133,0.535,6.188,0.434,6.188H0.223C0.074,6.188,0,6.109,0,5.953C0,5.938,0.008,5.91,0.023,5.871l1.688-4.98   c0.031-0.102,0.094-0.152,0.188-0.152h13.992c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17L15.27,5.977   c0,0.141-0.066,0.211-0.199,0.211h-0.211c-0.148,0-0.223-0.086-0.223-0.258c0.195-0.992,0.293-1.816,0.293-2.473   c0-0.805-0.23-1.326-0.691-1.564s-1.145-0.357-2.051-0.357h-1.477c-0.438,0-0.721,0.041-0.85,0.123S9.613,1.977,9.504,2.367   l-3.316,13.23c-0.016,0.047-0.023,0.125-0.023,0.234c0,0.211,0.098,0.34,0.293,0.387c0.383,0.078,1.223,0.117,2.52,0.117   c0.047,0,0.09,0.029,0.129,0.088s0.059,0.111,0.059,0.158L9.07,16.969c-0.016,0.109-0.102,0.164-0.258,0.164H0.938   C0.797,17.133,0.727,17.043,0.727,16.863z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 字符data: U
 */
define("char/data/character/uu", [], {
    path: "M1.805,13.77c0,0.906,0.256,1.645,0.768,2.215s1.205,0.855,2.08,0.855c0.711,0,1.387-0.146,2.027-0.439   s1.221-0.689,1.74-1.189s0.961-1.066,1.324-1.699s0.619-1.273,0.768-1.922l2.191-8.637C12.734,2.75,12.75,2.605,12.75,2.52   c0-0.406-0.162-0.672-0.486-0.797s-0.74-0.188-1.248-0.188c-0.047,0-0.09-0.029-0.129-0.088s-0.059-0.119-0.059-0.182l0.094-0.375   c0.016-0.102,0.105-0.152,0.27-0.152h4.816c0.055,0,0.102,0.029,0.141,0.088s0.059,0.111,0.059,0.158l-0.105,0.375   c-0.023,0.117-0.086,0.176-0.188,0.176c-1.406,0-2.238,0.504-2.496,1.512l-2.18,8.684c-0.172,0.719-0.473,1.438-0.902,2.156   s-0.941,1.357-1.535,1.916s-1.252,1.004-1.975,1.336s-1.471,0.498-2.244,0.498c-0.859,0-1.641-0.195-2.344-0.586   s-1.252-0.932-1.646-1.623S0,13.961,0,13.102c0-0.484,0.066-0.973,0.199-1.465l2.32-9.363c0.047-0.117,0.07-0.234,0.07-0.352   c0-0.258-0.629-0.387-1.887-0.387c-0.055,0-0.102-0.029-0.141-0.088S0.504,1.328,0.504,1.266l0.094-0.375   c0.016-0.102,0.105-0.152,0.27-0.152h6c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17L6.961,1.359   C6.938,1.477,6.875,1.535,6.773,1.535c-0.648,0-1.168,0.047-1.559,0.141S4.566,2,4.441,2.367l-2.332,9.316   C1.906,12.582,1.805,13.277,1.805,13.77z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 字符data: V
 */
define("char/data/character/uv", [], {
    path: "M3.835,17.426L1.888,2.039c-0.07-0.211-0.262-0.348-0.575-0.41C1,1.566,0.625,1.535,0.188,1.535   C0.063,1.535,0,1.445,0,1.266l0.094-0.375c0.016-0.102,0.102-0.152,0.258-0.152h5.477c0.047,0,0.092,0.027,0.135,0.082   C6.006,0.875,6.028,0.93,6.028,0.984L5.922,1.359C5.898,1.477,5.836,1.535,5.734,1.535c-0.454,0-0.86,0.039-1.22,0.117   C4.155,1.73,3.952,1.906,3.905,2.18L5.547,15l7.541-12.047c0.141-0.242,0.211-0.469,0.211-0.68c0-0.258-0.111-0.445-0.334-0.563   c-0.223-0.117-0.479-0.176-0.768-0.176c-0.063,0-0.116-0.027-0.159-0.082s-0.064-0.117-0.064-0.188l0.105-0.375   c0.016-0.102,0.109-0.152,0.282-0.152h4.257c0.063,0,0.113,0.029,0.152,0.088s0.059,0.111,0.059,0.158l-0.094,0.375   c-0.023,0.117-0.086,0.176-0.188,0.176c-1.165,0-2.08,0.527-2.744,1.582c-0.032,0.016-0.047,0.031-0.047,0.047L4.82,17.426   c-0.11,0.141-0.239,0.211-0.387,0.211H4.128C3.964,17.637,3.866,17.566,3.835,17.426z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 字符data: W
 */
define("char/data/character/uw", [], {
    path: "M2.813,17.426L1.758,2.063C1.68,1.711,1.16,1.535,0.199,1.535c-0.039,0-0.082-0.029-0.129-0.088S0,1.328,0,1.266   l0.105-0.375c0.016-0.102,0.102-0.152,0.258-0.152h5.332c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17L5.789,1.359   c0,0.117-0.063,0.176-0.188,0.176c-1.188,0-1.813,0.223-1.875,0.668L4.57,14.566l6.141-10.805l-0.117-1.699   c-0.07-0.352-0.582-0.527-1.535-0.527c-0.133,0-0.199-0.09-0.199-0.27l0.094-0.375c0.016-0.102,0.105-0.152,0.27-0.152h5.332   c0.047,0,0.09,0.029,0.129,0.088s0.059,0.111,0.059,0.158l-0.094,0.375c-0.023,0.117-0.09,0.176-0.199,0.176   c-1.195,0-1.824,0.223-1.887,0.668l0.855,12.363l6.609-11.613c0.109-0.203,0.164-0.387,0.164-0.551c0-0.32-0.145-0.545-0.434-0.674   s-0.617-0.193-0.984-0.193c-0.125,0-0.188-0.09-0.188-0.27l0.094-0.375c0.016-0.102,0.102-0.152,0.258-0.152h4.254   c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17l-0.094,0.375c-0.023,0.117-0.086,0.176-0.188,0.176   c-1.039,0-1.879,0.535-2.52,1.605l-8.121,14.285c-0.086,0.141-0.211,0.211-0.375,0.211h-0.176c-0.172,0-0.258-0.07-0.258-0.211   L10.781,4.793L3.609,17.426c-0.086,0.141-0.207,0.211-0.363,0.211H3.059C2.895,17.637,2.813,17.566,2.813,17.426z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 24, 27 ]
});
/**
 * 字符data: X
 */
define("char/data/character/ux", [], {
    path: "M0.223,17.133c-0.148,0-0.223-0.09-0.223-0.27l0.094-0.375c0.008-0.023,0.035-0.055,0.082-0.094s0.086-0.059,0.117-0.059   c1.391,0,2.598-0.535,3.621-1.605l0.07-0.047L9.34,8.93L6.434,2.039C6.27,1.828,6.016,1.691,5.672,1.629s-0.754-0.094-1.23-0.094   c-0.141,0-0.211-0.09-0.211-0.27l0.094-0.375c0.039-0.102,0.133-0.152,0.281-0.152h5.602c0.047,0,0.09,0.029,0.129,0.088   s0.059,0.111,0.059,0.158l-0.094,0.375c-0.023,0.117-0.09,0.176-0.199,0.176c-0.281,0-0.574,0.051-0.879,0.152   S8.73,1.945,8.66,2.156l2.191,5.156l4.078-4.406c0.008-0.031,0.063-0.119,0.164-0.264s0.152-0.291,0.152-0.439   c0-0.227-0.088-0.395-0.264-0.504s-0.385-0.164-0.627-0.164c-0.063,0-0.115-0.027-0.158-0.082s-0.064-0.117-0.064-0.188   l0.105-0.375c0.039-0.102,0.133-0.152,0.281-0.152h4.828c0.063,0,0.113,0.029,0.152,0.088s0.059,0.111,0.059,0.158l-0.094,0.375   c-0.023,0.117-0.086,0.176-0.188,0.176c-1.391,0-2.609,0.535-3.656,1.605l-0.047,0.047l-4.465,4.805l3.34,7.84   c0.172,0.219,0.426,0.357,0.762,0.416s0.738,0.088,1.207,0.088c0.063,0,0.113,0.029,0.152,0.088s0.059,0.111,0.059,0.158   l-0.094,0.387c-0.016,0.109-0.102,0.164-0.258,0.164h-5.59c-0.148,0-0.223-0.09-0.223-0.27l0.094-0.375   c0.008-0.023,0.035-0.055,0.082-0.094s0.086-0.059,0.117-0.059c0.258,0,0.547-0.051,0.867-0.152s0.52-0.258,0.598-0.469   L9.621,9.598l-4.992,5.379c-0.008,0.031-0.061,0.117-0.158,0.258s-0.146,0.285-0.146,0.434c0,0.227,0.092,0.395,0.275,0.504   s0.389,0.164,0.615,0.164c0.063,0,0.113,0.029,0.152,0.088s0.059,0.111,0.059,0.158l-0.094,0.387   c-0.039,0.109-0.137,0.164-0.293,0.164H0.223z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 20, 27 ]
});
/**
 * 字符data: Y
 */
define("char/data/character/uy", [], {
    path: "M1.44,16.863l0.105-0.375c0.031-0.102,0.094-0.152,0.188-0.152c0.866,0,1.448-0.039,1.745-0.117   c0.148-0.031,0.253-0.08,0.316-0.146c0.063-0.066,0.117-0.164,0.164-0.293s0.09-0.229,0.129-0.299l1.218-4.898L2.143,2.039   c-0.148-0.211-0.388-0.348-0.72-0.41c-0.332-0.063-0.732-0.094-1.2-0.094c-0.063,0-0.115-0.027-0.158-0.082S0,1.336,0,1.266   l0.105-0.375c0.039-0.102,0.133-0.152,0.281-0.152h5.586c0.062,0,0.115,0.029,0.158,0.088s0.064,0.111,0.064,0.158L6.101,1.359   c-0.023,0.117-0.09,0.176-0.199,0.176c-1.023,0-1.534,0.184-1.534,0.551l2.787,7.512l5.797-6.668   c0.023-0.078,0.098-0.203,0.222-0.375c0.125-0.172,0.188-0.344,0.188-0.516c0-0.336-0.277-0.504-0.832-0.504   c-0.148,0-0.222-0.09-0.222-0.27l0.094-0.375c0.039-0.102,0.136-0.152,0.292-0.152h4.286c0.063,0,0.111,0.025,0.146,0.076   s0.053,0.107,0.053,0.17l-0.094,0.375c-0.023,0.117-0.09,0.176-0.199,0.176c-1.226,0-2.287,0.527-3.185,1.582l-0.047,0.035   l-0.047,0.035l-6.429,7.395l-1.253,4.992c0,0.031-0.008,0.094-0.023,0.188s-0.023,0.16-0.023,0.199c0,0.25,0.625,0.375,1.874,0.375   c0.055,0,0.1,0.025,0.135,0.076s0.053,0.107,0.053,0.17l-0.094,0.387c-0.016,0.109-0.102,0.164-0.258,0.164H1.663   c-0.063,0-0.115-0.027-0.158-0.082S1.44,16.934,1.44,16.863z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 18, 27 ]
});
/**
 * 字符data: Z
 */
define("char/data/character/uz", [], {
    path: "M0,16.969c0-0.242,0.055-0.418,0.164-0.527L13.336,1.535H9.785c-0.898,0-1.67,0.078-2.314,0.234S6.271,2.176,5.807,2.52   S4.939,3.318,4.6,3.885S3.957,5.164,3.691,6.023C3.668,6.133,3.605,6.188,3.504,6.188H3.281c-0.141,0-0.211-0.078-0.211-0.234   c0-0.016,0.008-0.043,0.023-0.082l1.512-4.98c0.031-0.102,0.094-0.152,0.188-0.152h10.758c0.125,0,0.188,0.059,0.188,0.176   c0,0.219-0.055,0.387-0.164,0.504L2.426,16.289h3.715c1.086,0,1.98-0.102,2.684-0.305s1.293-0.523,1.77-0.961   s0.871-0.98,1.184-1.629s0.633-1.5,0.961-2.555c0.031-0.094,0.098-0.141,0.199-0.141h0.211c0.063,0,0.113,0.025,0.152,0.076   s0.059,0.1,0.059,0.146c0,0.031-0.008,0.055-0.023,0.07l-1.863,5.977c-0.023,0.109-0.09,0.164-0.199,0.164H0.188   C0.063,17.133,0,17.078,0,16.969z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: v
 */
define("char/data/character/v", [], {
    path: "M1.898,14.449c0-0.359,0.047-0.775,0.141-1.248s0.191-0.863,0.293-1.172s0.252-0.734,0.451-1.277S3.16,9.734,3.316,9.328   c0.219-0.586,0.328-1.074,0.328-1.465c0-0.492-0.184-0.738-0.551-0.738c-0.625,0-1.139,0.32-1.541,0.961s-0.713,1.367-0.932,2.18   c-0.039,0.117-0.094,0.176-0.164,0.176H0.176C0.059,10.441,0,10.359,0,10.195C0.242,9.25,0.623,8.406,1.143,7.664   s1.186-1.113,1.998-1.113c0.555,0,1.018,0.186,1.389,0.557s0.557,0.834,0.557,1.389c0,0.297-0.063,0.602-0.188,0.914   c-0.195,0.516-0.416,1.105-0.662,1.77s-0.445,1.299-0.598,1.904S3.41,14.238,3.41,14.73c0,0.594,0.145,1.086,0.434,1.477   s0.719,0.586,1.289,0.586c1.313,0,2.441-1.145,3.387-3.434c0.531-1.375,0.797-2.398,0.797-3.07c0-0.453-0.07-0.82-0.211-1.102   S8.781,8.617,8.555,8.32s-0.34-0.512-0.34-0.645c0-0.305,0.119-0.572,0.357-0.803s0.502-0.346,0.791-0.346   c0.375,0,0.637,0.172,0.785,0.516s0.223,0.73,0.223,1.16c0,0.711-0.125,1.559-0.375,2.543s-0.535,1.867-0.855,2.648   c-0.266,0.648-0.584,1.271-0.955,1.869s-0.82,1.098-1.348,1.5s-1.111,0.604-1.752,0.604c-0.961,0-1.732-0.246-2.314-0.738   S1.898,15.41,1.898,14.449z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 字符data: w
 */
define("char/data/character/w", [], {
    path: "M1.898,14.402c0-0.5,0.072-1.033,0.217-1.6s0.303-1.082,0.475-1.547s0.414-1.107,0.727-1.928   c0.219-0.586,0.328-1.074,0.328-1.465c0-0.492-0.184-0.738-0.551-0.738c-0.625,0-1.139,0.32-1.541,0.961s-0.713,1.367-0.932,2.18   c-0.039,0.117-0.094,0.176-0.164,0.176H0.176C0.059,10.441,0,10.359,0,10.195C0.242,9.25,0.623,8.406,1.143,7.664   s1.186-1.113,1.998-1.113c0.555,0,1.018,0.186,1.389,0.557s0.557,0.834,0.557,1.389c0,0.297-0.063,0.602-0.188,0.914   c-0.188,0.5-0.408,1.092-0.662,1.775s-0.451,1.307-0.592,1.869s-0.211,1.098-0.211,1.605c0,0.641,0.16,1.156,0.48,1.547   s0.793,0.586,1.418,0.586c0.82,0,1.523-0.656,2.109-1.969v-0.375c0-0.477,0.063-0.973,0.188-1.488L9,7.535   c0.047-0.219,0.16-0.398,0.34-0.539s0.379-0.211,0.598-0.211c0.188,0,0.342,0.057,0.463,0.17s0.182,0.268,0.182,0.463v0.188   l-1.359,5.426c-0.156,0.594-0.246,1.16-0.27,1.699c0,0.594,0.146,1.086,0.439,1.477s0.725,0.586,1.295,0.586   c1.172,0,2.129-0.91,2.871-2.73c0.227-0.563,0.447-1.223,0.662-1.98s0.322-1.355,0.322-1.793c0-0.453-0.07-0.82-0.211-1.102   s-0.324-0.57-0.551-0.867s-0.34-0.512-0.34-0.645c0-0.305,0.119-0.572,0.357-0.803s0.502-0.346,0.791-0.346   c0.375,0,0.637,0.172,0.785,0.516s0.223,0.73,0.223,1.16c0,0.461-0.074,1.063-0.223,1.805s-0.322,1.449-0.521,2.121   s-0.412,1.293-0.639,1.863c-0.891,2.25-2.086,3.375-3.586,3.375c-0.656,0-1.254-0.131-1.793-0.393s-0.93-0.674-1.172-1.236   c-0.633,1.086-1.418,1.629-2.355,1.629c-0.68,0-1.271-0.104-1.775-0.311s-0.902-0.535-1.195-0.984S1.898,15.066,1.898,14.402z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: x
 */
define("char/data/character/x", [], {
    path: "M1.013,16.488c0.313,0.203,0.723,0.305,1.231,0.305c0.5,0,0.941-0.24,1.324-0.721s0.645-0.998,0.785-1.553l1.078-4.324   c0.18-0.734,0.27-1.254,0.27-1.559c0-0.414-0.107-0.77-0.322-1.066S4.853,7.125,4.447,7.125c-0.516,0-0.991,0.16-1.424,0.48   c-0.434,0.32-0.793,0.721-1.079,1.201s-0.491,0.967-0.616,1.459c-0.039,0.117-0.094,0.176-0.164,0.176H0.871   c-0.109,0-0.164-0.082-0.164-0.246c0.148-0.594,0.402-1.17,0.762-1.729S2.27,7.449,2.793,7.09s1.09-0.539,1.699-0.539   c0.578,0,1.092,0.158,1.541,0.475S6.801,7.773,6.988,8.32c0.266-0.5,0.604-0.92,1.016-1.26c0.411-0.34,0.866-0.51,1.367-0.51   c0.571,0,1.084,0.131,1.538,0.393c0.454,0.262,0.681,0.65,0.681,1.166c0,0.375-0.122,0.697-0.365,0.967s-0.55,0.404-0.919,0.404   c-0.228,0-0.426-0.074-0.595-0.223c-0.169-0.148-0.253-0.34-0.253-0.574c0-0.305,0.108-0.576,0.324-0.814   c0.216-0.238,0.473-0.381,0.771-0.428c-0.289-0.211-0.699-0.316-1.23-0.316c-0.492,0-0.928,0.238-1.307,0.715s-0.639,1-0.779,1.57   l-1.078,4.313c-0.18,0.625-0.27,1.145-0.27,1.559c0,0.406,0.109,0.76,0.328,1.061s0.527,0.451,0.926,0.451   c0.734,0,1.389-0.33,1.964-0.99c0.574-0.66,0.959-1.377,1.155-2.15c0.039-0.109,0.094-0.164,0.164-0.164h0.293   c0.047,0,0.086,0.023,0.117,0.07s0.047,0.102,0.047,0.164c-0.148,0.594-0.404,1.172-0.768,1.734s-0.805,1.021-1.324,1.377   s-1.084,0.533-1.693,0.533c-0.375,0-0.736-0.074-1.084-0.223s-0.643-0.359-0.885-0.633s-0.418-0.578-0.527-0.914   c-0.25,0.5-0.585,0.92-1.004,1.26c-0.418,0.34-0.878,0.51-1.379,0.51c-0.563,0-1.074-0.129-1.532-0.387   C0.229,16.723,0,16.332,0,15.809c0-0.375,0.122-0.695,0.365-0.961s0.55-0.398,0.919-0.398c0.243,0,0.445,0.072,0.606,0.217   S2.133,15,2.133,15.234c0,0.297-0.108,0.568-0.324,0.814C1.593,16.295,1.328,16.441,1.013,16.488z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 字符data: y
 */
define("char/data/character/y", [], {
    path: "M1.23,20.473c0.141,0.313,0.373,0.555,0.697,0.727s0.674,0.258,1.049,0.258c0.961,0,1.787-0.455,2.479-1.365   s1.17-1.912,1.436-3.006l0.188-0.773c-0.719,0.703-1.492,1.055-2.32,1.055c-0.883,0-1.584-0.248-2.104-0.744   s-0.779-1.182-0.779-2.057c0-0.367,0.043-0.771,0.129-1.213s0.189-0.85,0.311-1.225s0.305-0.898,0.551-1.57s0.396-1.082,0.451-1.23   c0.219-0.586,0.328-1.074,0.328-1.465c0-0.492-0.184-0.738-0.551-0.738c-0.625,0-1.139,0.32-1.541,0.961s-0.713,1.367-0.932,2.18   c-0.039,0.117-0.094,0.176-0.164,0.176H0.176C0.059,10.441,0,10.359,0,10.195C0.242,9.25,0.623,8.406,1.143,7.664   s1.186-1.113,1.998-1.113c0.555,0,1.018,0.186,1.389,0.557s0.557,0.834,0.557,1.389c0,0.297-0.063,0.602-0.188,0.914   c-0.063,0.172-0.221,0.594-0.475,1.266s-0.447,1.23-0.58,1.676s-0.242,0.875-0.328,1.289s-0.129,0.824-0.129,1.23   c0,0.547,0.113,1.004,0.34,1.371s0.586,0.551,1.078,0.551c1,0,1.871-0.605,2.613-1.816l1.875-7.441   c0.047-0.219,0.16-0.398,0.34-0.539s0.379-0.211,0.598-0.211c0.188,0,0.342,0.057,0.463,0.17s0.182,0.268,0.182,0.463v0.188   L8.473,17.18c-0.219,0.844-0.596,1.635-1.131,2.373s-1.189,1.336-1.963,1.793s-1.582,0.686-2.426,0.686   c-0.406,0-0.799-0.08-1.178-0.24s-0.686-0.396-0.92-0.709s-0.352-0.676-0.352-1.09c0-0.43,0.113-0.793,0.34-1.09   s0.547-0.445,0.961-0.445c0.234,0,0.432,0.068,0.592,0.205s0.24,0.322,0.24,0.557c0,0.344-0.123,0.643-0.369,0.896   s-0.537,0.381-0.873,0.381c-0.023-0.008-0.047-0.014-0.07-0.018S1.27,20.473,1.23,20.473z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 字符data: z
 */
define("char/data/character/z", [], {
    path: "M0.164,17.367C0.055,17.367,0,17.305,0,17.18c0-0.031,0.008-0.063,0.023-0.094c0.43-0.75,0.947-1.467,1.553-2.15   s1.295-1.375,2.068-2.074s1.547-1.402,2.32-2.109s1.402-1.334,1.887-1.881H7.629c-0.234,0-0.498-0.043-0.791-0.129   S6.266,8.564,6,8.467s-0.512-0.178-0.738-0.24s-0.453-0.094-0.68-0.094c-0.438,0-0.855,0.098-1.254,0.293S2.684,8.906,2.59,9.281   C2.551,9.398,2.496,9.457,2.426,9.457H2.133c-0.109,0-0.164-0.082-0.164-0.246C2.164,8.5,2.527,7.879,3.059,7.348   s1.137-0.797,1.816-0.797c0.313,0,0.576,0.076,0.791,0.229s0.467,0.389,0.756,0.709s0.506,0.535,0.65,0.645   s0.346,0.164,0.604,0.164c0.328,0,0.609-0.117,0.844-0.352s0.461-0.521,0.68-0.861s0.359-0.518,0.422-0.533h0.293   c0.109,0,0.164,0.063,0.164,0.188c0,0.031-0.008,0.063-0.023,0.094c-0.43,0.75-0.967,1.486-1.611,2.209s-1.309,1.395-1.992,2.016   s-1.443,1.313-2.279,2.074s-1.508,1.424-2.016,1.986c0.016-0.008,0.033-0.014,0.053-0.018s0.045-0.006,0.076-0.006   c0.094-0.031,0.242-0.047,0.445-0.047c0.258,0,0.498,0.031,0.721,0.094s0.467,0.143,0.732,0.24s0.545,0.189,0.838,0.275   s0.557,0.129,0.791,0.129c0.641,0,1.24-0.197,1.799-0.592s0.908-0.893,1.049-1.494c0.039-0.109,0.098-0.164,0.176-0.164h0.281   c0.117,0,0.176,0.078,0.176,0.234c-0.094,0.414-0.258,0.842-0.492,1.283s-0.514,0.832-0.838,1.172s-0.697,0.615-1.119,0.826   S5.98,17.367,5.52,17.367c-0.313,0-0.566-0.068-0.762-0.205s-0.432-0.359-0.709-0.668s-0.504-0.531-0.68-0.668   s-0.396-0.205-0.662-0.205c-0.297,0-0.572,0.08-0.826,0.24s-0.49,0.375-0.709,0.645s-0.383,0.479-0.492,0.627   s-0.184,0.227-0.223,0.234H0.164z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 希腊字符data: alpha
 */
define("char/data/greek/alpha", [], {
    path: "M10.153,13.101c1.488-1.968,2.112-3.84,2.424-4.896c0.096-0.432,0.12-0.504,0.336-0.504c0.072,0,0.264,0,0.264,0.216   c0,0.024-0.576,3.048-3.024,5.977c0,1.464,0,3,0.744,3c0.576,0,1.128-0.528,1.344-1.128c0.072-0.192,0.096-0.264,0.288-0.264   c0.072,0,0.24,0,0.24,0.216c0,0.312-0.648,1.656-1.944,1.656c-1.032,0-1.776-0.672-2.112-2.017c-1.704,1.44-3.48,2.017-4.968,2.017   C1.296,17.373,0,15.477,0,13.389C0,9.98,3.145,6.548,6.289,6.548c2.544,0,3.864,2.184,3.864,4.512V13.101z M8.593,13.917   c0-0.6,0.024-1.224,0.024-1.824c0-2.016,0-5.064-2.328-5.064c-1.08,0-2.424,0.744-3.408,2.424c-0.744,1.32-1.272,3.769-1.272,4.8   c0,1.128,0.48,2.64,2.184,2.64c0.84,0,2.736-0.216,4.849-2.112C8.617,14.517,8.593,14.396,8.593,13.917z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 14, 27 ]
});
/**
 * 希腊字符data: beta
 */
define("char/data/greek/beta", [], {
    path: "M10.114,7.436c0.384,0.288,0.744,0.624,1.032,1.08c0.504,0.768,0.72,1.68,0.72,2.592c0,3.576-3.24,6.265-6.673,6.265   c-1.416,0-2.736-1.104-2.976-2.448l-1.68,6.72c-0.024,0.12-0.144,0.144-0.312,0.144c-0.12,0-0.264-0.048-0.216-0.24L3.801,6.5   C4.425,4.004,6.394,0.211,9.49,0.211c2.184,0,3.408,1.512,3.408,2.952C12.898,5.06,11.842,6.524,10.114,7.436z M9.442,0.691   c-2.328,0-4.344,2.832-5.136,5.977L2.745,12.98c-0.096,0.36-0.096,0.672-0.096,0.888c0,1.632,0.912,3.024,2.664,3.024   c1.656,0,3.528-1.152,4.32-2.928c0.456-1.032,0.84-2.16,0.84-3.552c0-1.2-0.336-2.016-1.104-2.64   C8.794,7.94,8.242,8.084,7.618,8.084c-0.408,0-1.728,0.072-1.728-0.576c0-0.768,1.44-0.72,1.944-0.72   c0.528,0,1.152,0.12,1.608,0.288c1.56-0.888,2.208-2.809,2.208-4.128C11.65,1.892,11.17,0.691,9.442,0.691z M7.521,7.268   c-0.504,0-0.864,0.048-1.104,0.216c0.432,0.144,0.744,0.12,1.08,0.12c0.456,0,0.84-0.048,1.224-0.192   C8.386,7.316,7.954,7.268,7.521,7.268z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 14, 27 ]
});
/**
 * 希腊字符data: chi
 */
define("char/data/greek/chi", [], {
    path: "M12.601,7.076c0.24-0.264,0.312-0.264,0.384-0.264c0.12,0,0.24,0.072,0.24,0.24c0,0.096-0.024,0.12-0.216,0.336   l-5.688,6.48c0.408,1.488,0.96,3.408,1.584,5.016c1.056,2.665,1.44,2.665,1.752,2.665c0.384,0,1.008-0.336,1.272-1.008   c0.072-0.192,0.096-0.288,0.288-0.288c0.12,0,0.264,0.048,0.264,0.216c0,0.336-0.624,1.56-1.992,1.56   c-2.04,0-2.544-1.176-2.928-2.088c-0.36-0.888-0.36-0.936-1.536-4.632L3.24,18.477c-0.624,0.72-2.112,2.496-2.784,3.168   c-0.072,0.072-0.144,0.12-0.24,0.12C0.12,21.765,0,21.717,0,21.525c0-0.024,0-0.12,0.216-0.384l5.665-6.433   c-0.648-2.328-0.936-3.336-1.512-4.8c-0.432-1.152-1.104-2.88-1.8-2.88c-0.216,0-0.96,0.144-1.32,1.08   C1.224,8.204,1.176,8.324,0.984,8.324c-0.144,0-0.264-0.072-0.264-0.216c0-0.312,0.648-1.56,1.992-1.56   c0.84,0,1.656,0.288,2.088,0.672c0.336,0.336,0.528,0.504,1.272,2.568c0.6,1.68,0.456,1.488,1.104,3.48L12.601,7.076z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 14, 27 ]
});
/**
 * 希腊字符data: delta
 */
define("char/data/greek/delta", [], {
    path: "M3.864,2.54c0-2.448,2.353-2.448,2.76-2.448c0.408,0,0.744,0,1.873,0.24c0.84,0.192,1.2,0.264,1.2,0.72   c0,0.384-0.36,0.888-0.864,0.888c-0.312,0-0.864-0.312-1.08-0.456c-0.72-0.408-1.176-0.672-1.92-0.672   c-1.056,0-1.368,0.72-1.368,1.128c0,1.152,1.44,3,2.328,4.128c0.6,0.792,1.608,2.112,1.608,4.272c0,3.192-1.92,7.081-4.752,7.081   c-1.92,0-3.648-1.44-3.648-4.008c0-2.809,2.208-6,5.281-6.745C4.464,5.084,3.864,3.716,3.864,2.54z M1.392,14.084   c0,2.232,1.344,2.856,2.28,2.856c2.136,0,3.145-3.769,3.145-5.641c0-1.56-0.36-2.28-1.272-4.176   C2.28,7.988,1.392,12.524,1.392,14.084z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 希腊字符data: epsilon
 */
define("char/data/greek/epsilon", [], {
    path: "M1.896,11.737c-0.216,0.96-0.264,1.584-0.264,2.04c0,2.328,1.344,3.168,2.616,3.168c0.72,0,1.608-0.288,2.52-0.888   c0.12-0.096,0.168-0.12,0.24-0.12c0.144,0,0.216,0.144,0.216,0.288c0,0.24-1.512,1.2-3.048,1.2C1.8,17.426,0,15.625,0,12.961   c0-3.768,3.24-6.12,6.193-6.12h0.816c0.432,0,0.696,0,0.696,0.312c0,0.384-0.36,0.384-0.768,0.384H6.241   c-2.136,0-3.552,1.32-4.152,3.504h3.888c0.432,0,0.672,0,0.672,0.312c0,0.384-0.408,0.384-0.768,0.384H1.896z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 8, 27 ]
});
/**
 * 希腊字符data: eta
 */
define("char/data/greek/eta", [], {
    path: "M7.993,21.477c-0.192,0.72-0.696,0.816-0.912,0.816c-0.36,0-0.648-0.24-0.648-0.6c0-0.144,0.048-0.288,0.072-0.408   l2.784-11.041c0.12-0.456,0.216-0.84,0.216-1.536c0-0.96-0.336-1.68-1.296-1.68c-0.936,0-1.752,0.384-2.376,0.96   C4.944,8.756,4.345,9.956,4.296,10.1l-0.792,3.168l-0.528,2.16c-0.12,0.48-0.336,1.32-0.384,1.44   c-0.192,0.36-0.528,0.504-0.816,0.504c-0.36,0-0.624-0.264-0.624-0.6c0-0.12,0.264-1.248,0.432-1.873   c0.12-0.432,0.384-1.512,0.48-1.968l0.672-2.592c0.168-0.744,0.408-1.68,0.408-2.208c0-0.72-0.192-1.104-0.744-1.104   c-0.96,0-1.416,1.416-1.776,2.833c-0.144,0.552-0.168,0.576-0.36,0.576C0.096,10.436,0,10.316,0,10.22s0.336-1.56,0.768-2.424   c0.456-0.912,1.008-1.248,1.704-1.248c1.056,0,2.041,0.744,2.112,2.112c0.432-0.6,1.56-2.112,3.696-2.112   c1.824,0,2.664,1.08,2.664,2.52c0,0.648-0.072,0.937-0.192,1.417L7.993,21.477z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 希腊字符data: gamma
 */
define("char/data/greek/gamma", [], {
    path: "M10.249,10.196c0.72-1.632,1.56-3.264,1.608-3.313c0.048-0.096,0.168-0.096,0.216-0.096c0.216,0,0.24,0.168,0.24,0.192   c0,0.072-0.336,0.72-0.504,1.104c-1.896,3.769-3.264,7.729-3.336,8.305c-0.12,0.96-0.264,2.016-0.84,4.128   c-0.264,0.96-0.48,1.752-0.84,1.752c-0.192,0-0.264-0.216-0.264-0.408c0-0.672,0.792-3.648,1.249-5.137   c0.144-0.48,0.312-0.984,0.312-2.496c0-2.376-0.48-6.097-3.816-6.097c-1.656,0-3.192,1.176-3.696,2.665   c-0.12,0.312-0.12,0.36-0.336,0.36c-0.072,0-0.24,0-0.24-0.216c0-0.624,1.608-4.393,4.561-4.393c1.752,0,2.568,1.272,3.048,2.472   c0.912,2.16,0.96,4.008,1.008,5.185C9.409,12.092,9.889,11.012,10.249,10.196z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 13, 27 ]
});
/**
 * 希腊字符data: iota
 */
define("char/data/greek/iota", [], {
    path: "M1.944,17.373C0.6,17.373,0,16.365,0,15.429c0-0.816,0.552-1.752,0.768-2.592c0.168-0.6,0.144-0.408,0.312-1.032   c0.096-0.288,0.696-2.472,0.72-2.568C1.944,8.78,2.184,7.628,2.352,7.172c0.144-0.384,0.48-0.624,0.864-0.624   c0.312,0,0.624,0.216,0.624,0.6c0,0.192-0.912,4.056-2.112,7.321c-0.12,0.336-0.384,1.056-0.384,1.632   c0,0.744,0.36,0.792,0.648,0.792c1.008,0,2.952-0.768,3.72-3.096c0.072-0.216,0.12-0.312,0.312-0.312   c0.144,0,0.24,0.096,0.24,0.216C6.265,14.493,4.608,17.373,1.944,17.373z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 7, 27 ]
});
/**
 * 希腊字符data: kappa
 */
define("char/data/greek/kappa", [], {
    path: "M8.4,13.604c0,0.264-0.072,0.552-0.12,0.792c-0.096,0.36-0.192,0.888-0.192,1.344c0,0.84,0.264,1.152,0.792,1.152   c1.224,0,1.752-1.776,2.064-2.928c0.096-0.384,0.12-0.48,0.336-0.48c0.144,0,0.24,0.096,0.24,0.216   c0,0.096-0.312,1.416-0.816,2.352c-0.36,0.624-0.912,1.32-1.896,1.32c-1.176,0-2.112-0.888-2.112-2.329   c0-0.144,0-0.408,0.096-0.864c0.072-0.264,0.072-0.336,0.072-0.504c0-1.176-1.032-1.944-4.08-2.088   c-0.048,0.144-1.032,4.152-1.176,4.656c-0.12,0.504-0.264,1.128-0.984,1.128c-0.36,0-0.624-0.264-0.624-0.6   c0-0.144,0-0.192,0.072-0.48l2.232-8.905c0.192-0.768,0.72-0.84,0.936-0.84c0.312,0,0.624,0.216,0.624,0.6l-0.912,3.816   c0.984-0.312,1.68-0.84,3.072-2.064c1.056-0.888,2.472-2.112,3.912-2.112c0.84,0,0.888,0.624,0.888,0.768   c0,0.456-0.432,1.176-1.2,1.176c-0.24,0-0.792-0.12-0.792-0.768c0-0.168,0.024-0.36,0.12-0.504c-0.912,0.36-1.44,0.744-2.88,1.992   c-0.6,0.504-1.488,1.248-2.28,1.68C5.376,11.204,8.4,11.42,8.4,13.604z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 希腊字符data: lambda
 */
define("char/data/greek/lambda", [], {
    path: "M10.969,15.981c0.096,0.288,0.264,0.72,0.48,0.984c0.096,0.096,0.12,0.12,0.12,0.216c0,0.192-0.168,0.192-0.264,0.192   h-0.456c-0.672,0-0.72,0-0.96-0.216c-0.336-0.312-0.456-0.648-0.576-1.008c-0.744-2.017-1.512-4.225-2.136-6.097   c-2.184,2.592-5.617,6.792-6,7.152c-0.144,0.144-0.408,0.192-0.504,0.192C0.288,17.397,0,17.109,0,16.773   c0-0.312,0.192-0.504,0.48-0.792l6.241-6.313c0.192-0.192,0.216-0.216,0.216-0.24c0-0.048-2.472-7.225-2.712-7.681   C3.84,1.051,3.552,1.003,3.192,0.956c-0.12-0.024-0.264-0.048-0.264-0.24c0-0.24,0.264-0.24,0.408-0.24   c0.312,0,2.208,0,2.808,1.704L10.969,15.981z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 希腊字符data: mu
 */
define("char/data/greek/mu", [], {
    path: "M1.656,21.069c-0.168,0.672-0.312,1.224-1.008,1.224c-0.36,0-0.648-0.24-0.648-0.6c0-0.144,0.048-0.288,0.072-0.408   l3.48-13.897c0.192-0.768,0.72-0.84,0.937-0.84c0.312,0,0.624,0.216,0.624,0.6c0,0.144-0.192,0.912-0.312,1.368l-1.08,4.32   c-0.096,0.408-0.312,1.248-0.312,1.944c0,1.128,0.432,2.112,1.776,2.112c1.512,0,2.448-1.296,2.736-1.704   c0.312-0.384,0.312-0.432,0.432-0.912l1.68-6.672c0.192-0.72,0.696-0.816,0.912-0.816c0.36,0,0.648,0.24,0.648,0.6   c0,0.096-0.264,1.128-0.408,1.704c-0.12,0.432-0.384,1.512-0.48,1.968l-0.672,2.592c-0.168,0.72-0.384,1.584-0.384,2.136   c0,0.48,0.048,1.104,0.744,1.104c0.984,0,1.44-1.512,1.8-2.928c0.096-0.36,0.12-0.48,0.336-0.48c0.144,0,0.24,0.096,0.24,0.216   c0,0.096-0.336,1.56-0.72,2.376c-0.432,0.864-1.008,1.296-1.728,1.296c-0.84,0-1.848-0.504-2.088-1.776   c-0.552,0.744-1.608,1.776-3.145,1.776c-0.816,0-1.704-0.216-2.304-0.768L1.656,21.069z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 13, 27 ]
});
/**
 * 希腊字符data: nu
 */
define("char/data/greek/nu", [], {
    path: "M1.632,16.413c3.192-1.056,6.48-4.032,7.896-9.049c0.048-0.168,0.216-0.816,0.912-0.816c0.312,0,0.624,0.216,0.624,0.6   c0,0.096-0.432,3.048-3.528,6.241c-2.808,2.88-6.457,3.744-6.792,3.744H0.24c-0.168,0-0.24-0.144-0.24-0.24L2.112,8.42   c0.024-0.096,0.072-0.384,0.072-0.48c0-0.264-0.072-0.432-1.2-0.432c-0.336,0-0.528,0-0.528-0.24c0-0.432,0.24-0.456,0.504-0.48   c0.36-0.024,2.616-0.24,2.784-0.24c0.192,0,0.264,0.144,0.264,0.24L1.632,16.413z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 希腊字符data: omega
 */
define("char/data/greek/omega", [], {
    path: "M12.601,13.82c-0.864,1.944-2.016,3.553-3.84,3.553c-1.752,0-2.472-1.272-2.664-2.616   c-0.504,0.912-1.752,2.616-3.745,2.616c-1.8,0-2.352-1.776-2.352-3.265c0-2.304,0.864-4.968,2.088-6.864   c0.192-0.288,0.312-0.6,0.696-0.6c0.216,0,0.312,0.264,0.312,0.432c0,0.048-0.168,0.288-0.408,0.648   c-0.432,0.6-1.992,2.784-1.992,5.28c0,1.368,0.432,2.784,2.041,2.784c1.536,0,2.832-1.488,3.288-2.376   c-0.024-0.504,0.288-2.4,0.624-2.928c0.12-0.192,0.312-0.288,0.48-0.288c0.312,0,0.408,0.216,0.408,0.48   c0,0.624-0.552,2.184-0.816,2.808c0.264,1.344,0.84,2.304,2.352,2.304c1.248,0,2.352-1.128,3.024-2.448   c0.384-0.744,0.912-2.112,0.912-2.976c0-1.128-0.456-1.776-0.816-2.184c-0.192-0.216-0.288-0.36-0.288-0.576   c0-0.48,0.552-1.08,1.032-1.08c0.84,0,1.032,0.888,1.032,1.584C13.969,9.428,13.225,12.428,12.601,13.82z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 14, 27 ]
});
/**
 * 希腊字符data: phi
 */
define("char/data/greek/phi", [], {
    path: "M7.777,6.5c2.664,0.168,4.488,1.896,4.488,4.32c0,3.024-3.12,6.384-7.225,6.601l-0.888,3.576   c-0.096,0.312-0.24,0.888-0.288,0.936c-0.048,0.096-0.144,0.096-0.216,0.096c-0.24,0-0.24-0.144-0.24-0.192   c0-0.096,0.192-0.888,0.528-2.16c0.192-0.744,0.36-1.512,0.552-2.256C1.992,17.277,0,15.693,0,13.101c0-3,3.024-6.241,6.961-6.577   c0.048,0,0.216-0.024,0.24-0.072c0.024-0.024,0.048-0.048,0.12-0.36l1.296-5.16c0.096-0.408,0.12-0.456,0.336-0.456   c0.072,0,0.24,0,0.24,0.216L7.777,6.5z M7.105,7.004C3.648,7.22,1.464,10.58,1.464,13.604c0,2.64,1.968,3.264,3.144,3.336   L7.105,7.004z M5.161,16.917c3.744-0.288,5.641-3.889,5.641-6.601c0-2.353-1.584-3.24-3.168-3.336L5.161,16.917z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 13, 27 ]
});
/**
 * 希腊字符data: pi
 */
define("char/data/greek/pi", [], {
    path: "M4.2,13.508c-0.24,0.96-0.24,1.008-0.624,2.232c-0.288,1.008-0.48,1.632-1.176,1.632c-0.216,0-0.648-0.12-0.648-0.625   c0-0.144,0-0.192,0.192-0.576c1.968-4.201,2.568-6.289,3.096-8.089H3.672c-0.6,0-1.848,0-3.096,1.968   c-0.12,0.144-0.144,0.216-0.312,0.216C0.12,10.268,0,10.22,0,10.076S0.768,8.66,1.392,7.964c1.104-1.176,1.92-1.176,2.472-1.176   h7.897c0.432,0,0.888,0,0.888,0.528c0,0.768-0.792,0.768-1.104,0.768H8.857c-0.504,2.16-0.504,3.864-0.504,4.008   c0,0.168,0,2.232,0.648,3.889c0.168,0.36,0.168,0.408,0.168,0.528c0,0.408-0.432,0.864-0.936,0.864   c-0.984,0-0.984-2.592-0.984-2.928c0-1.92,0.408-3.672,1.056-6.361H5.592L4.2,13.508z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 13, 27 ]
});
/**
 * 希腊字符data: psi
 */
define("char/data/greek/psi", [], {
    path: "M6.697,16.893c0.72,0,2.568,0,4.584-2.256c1.536-1.728,2.016-3.504,2.016-4.369c0-1.248-0.648-1.896-0.864-2.112   c-0.096-0.096-0.264-0.264-0.264-0.552c0-0.48,0.528-1.056,1.104-1.056c0.24,0,0.96,0.168,0.96,1.608   c0,1.224-0.576,3.36-0.816,3.984c-0.408,1.032-1.128,2.136-1.92,3c-2.16,2.232-4.056,2.232-4.944,2.232   c-0.096,0.432-1.08,4.464-1.176,4.56c-0.048,0.096-0.144,0.096-0.192,0.096c-0.072,0-0.264,0-0.264-0.216   c0-0.096,0.168-0.768,0.552-2.208c0.192-0.744,0.36-1.512,0.552-2.256c-2.16-0.168-4.08-1.056-4.08-3.36   c0-0.552,0-1.08,1.296-4.489c0.408-1.056,0.408-1.584,0.408-1.68c0-0.768-0.408-0.792-0.624-0.792   c-0.888,0-1.848,0.888-2.424,2.977c-0.096,0.336-0.12,0.432-0.336,0.432C0.096,10.436,0,10.316,0,10.22   c0-0.192,0.888-3.672,3.096-3.672c1.128,0,1.896,0.864,1.896,1.944c0,0.432-0.12,0.744-0.432,1.608   c-1.128,2.977-1.128,3.528-1.128,4.057c0,1.44,0.744,2.448,2.736,2.688l3.96-15.889c0.096-0.36,0.12-0.48,0.336-0.48   c0.072,0,0.264,0,0.264,0.216c0,0.024-0.096,0.336-0.096,0.36L6.697,16.893z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 15, 27 ]
});
/**
 * 希腊字符data: rho
 */
define("char/data/greek/rho", [], {
    path: "M2.424,11.924c0.792-3.192,3.36-5.376,5.473-5.376c1.656,0,3.216,1.272,3.216,3.84c0,3.625-3.072,6.985-5.785,6.985   c-0.936,0-1.824-0.504-2.304-1.705c-0.768,2.953-1.44,5.833-1.536,6.049c-0.144,0.336-0.48,0.576-0.84,0.576   c-0.36,0-0.648-0.24-0.648-0.6c0-0.144,0.048-0.288,0.072-0.408L2.424,11.924z M8.497,14.037c0.408-1.008,1.056-3.384,1.056-4.608   c0-1.416-0.6-2.4-1.68-2.4c-0.36,0-2.712,0.12-3.937,4.896c-0.072,0.36-0.672,2.64-0.672,2.784c0,0.288,0.408,2.184,2.04,2.184   C6.529,16.893,7.777,15.693,8.497,14.037z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 希腊字符data: sigma
 */
define("char/data/greek/sigma", [], {
    path: "M8.617,8.084c0.576,0.792,0.792,1.704,0.792,2.64c0,3.601-3.096,6.649-5.928,6.649c-2.16,0-3.48-1.705-3.48-3.745   c0-2.832,2.592-6.84,6.192-6.84h5.305c0.432,0,0.888,0,0.888,0.528c0,0.768-0.792,0.768-1.104,0.768H8.617z M6.745,14.685   c0.84-1.392,1.224-3.408,1.224-4.249c0-1.848-1.152-2.352-2.184-2.352c-3.528,0-4.393,4.776-4.393,6.217   c0,1.656,0.888,2.592,2.112,2.592C4.584,16.893,5.88,16.101,6.745,14.685z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 13, 27 ]
});
/**
 * 希腊字符data: tau
 */
define("char/data/greek/tau", [], {
    path: "M4.632,16.389c-0.072,0.36-0.192,1.008-0.936,1.008c-0.48,0-0.648-0.336-0.648-0.6c0-0.072,0-0.12,0.12-0.48l2.496-8.233   H3.672c-0.6,0-1.848,0-3.096,1.968c-0.12,0.144-0.144,0.216-0.312,0.216C0.12,10.268,0,10.22,0,10.076S0.768,8.66,1.392,7.964   c1.104-1.176,1.92-1.176,2.472-1.176h6.601c0.432,0,0.888,0,0.888,0.528c0,0.768-0.792,0.768-1.104,0.768H6.265L4.632,16.389z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 希腊字符data: theta
 */
define("char/data/greek/theta", [], {
    path: "M2.76,17.373c-2.52,0-2.76-3.721-2.76-4.825C0,7.268,3.577,0.235,6.937,0.235c1.968,0,2.736,2.376,2.736,4.824   C9.673,10.508,6.024,17.373,2.76,17.373z M2.208,9.164C1.824,10.748,1.44,12.38,1.44,13.94c0,2.376,0.6,2.952,1.344,2.952   c1.008,0,1.848-1.128,2.544-2.352c0.864-1.512,1.368-3.024,1.968-5.376H2.208z M7.465,8.444c0.696-2.688,0.768-3.888,0.768-4.752   c0-2.305-0.528-2.977-1.32-2.977c-1.056,0-1.896,1.152-2.688,2.592C3.264,5.012,2.76,7.028,2.4,8.444H7.465z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 希腊字符data: 大写delta
 */
define("char/data/greek/u-delta", [], {
    path: "M16.609,16.729c0.024,0.048,0.12,0.264,0.12,0.288c0,0.096-0.024,0.12-0.456,0.12H0.456C0.024,17.138,0,17.114,0,17.018   c0-0.024,0.096-0.24,0.12-0.288L7.896,0.552c0.168-0.336,0.192-0.384,0.48-0.384c0.192,0,0.288,0,0.48,0.408L16.609,16.729z    M1.104,15.793h13.321L7.776,1.992L1.104,15.793z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 希腊字符data: 大写gamma
 */
define("char/data/greek/u-gamma", [], {
    path: "M11.785,6.097h-0.432c-0.36-3-0.552-4.68-4.2-4.68H4.512c-0.96,0-1.008,0.12-1.008,0.936V15.41   c0,0.864,0.048,1.104,1.872,1.104h0.528v0.624C4.92,17.09,3.769,17.09,2.784,17.09c-0.744,0-2.088,0-2.784,0.048v-0.624   c1.656,0,1.92,0,1.92-1.08V2.497c0-1.08-0.264-1.08-1.92-1.08V0.792h11.209L11.785,6.097z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 希腊字符data: 大写lambda
 */
define("char/data/greek/u-lambda", [], {
    path: "M12.481,15.673c0.288,0.84,0.72,0.84,1.776,0.84v0.624c-0.552-0.048-1.656-0.048-2.256-0.048c-0.744,0-1.968,0-2.665,0.048   v-0.624c0.504,0,1.512,0,1.512-0.672c0-0.072,0-0.12-0.12-0.456L6.552,2.712L2.568,14.833c-0.072,0.24-0.12,0.384-0.12,0.552   c0,0.168,0.072,1.08,1.344,1.128v0.624C3.216,17.09,2.28,17.09,1.68,17.09c-0.432,0-1.272,0.024-1.68,0.048v-0.624   c0.792-0.024,1.584-0.312,2.016-1.584L6.744,0.576c0.12-0.384,0.144-0.408,0.384-0.408s0.264,0.024,0.384,0.408L12.481,15.673z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 15, 27 ]
});
/**
 * 希腊字符data: 大写omega
 */
define("char/data/greek/u-omega", [], {
    path: "M0,13.226h0.6c0.24,1.056,0.417,1.672,0.529,1.848c0.208,0.288,0.681,0.448,1.418,0.48c0.16,0,0.36,0,0.601,0h1.995   c-0.257-0.768-0.674-1.576-1.25-2.424s-1.126-1.576-1.646-2.184C1.724,10.338,1.264,9.61,0.864,8.762   c-0.4-0.848-0.6-1.696-0.6-2.544c0-1.616,0.704-3.02,2.111-4.212c1.408-1.192,3.143-1.788,5.206-1.788   c2.063,0,3.799,0.592,5.209,1.776c1.409,1.184,2.114,2.592,2.114,4.224c0,0.848-0.203,1.696-0.607,2.544   c-0.405,0.848-0.865,1.576-1.38,2.184s-1.062,1.336-1.64,2.184s-0.995,1.656-1.251,2.424h1.995c0.993,0,1.602-0.092,1.826-0.276   s0.44-0.756,0.649-1.716c0.032-0.144,0.056-0.255,0.072-0.336h0.6L14.4,17.138h-4.183c-0.353,0-0.593-0.04-0.721-0.12   c-0.128-0.08-0.192-0.272-0.192-0.576c0-0.688,0.164-1.496,0.493-2.424c0.329-0.928,0.686-1.78,1.071-2.556   s0.742-1.648,1.071-2.616c0.329-0.968,0.493-1.836,0.493-2.604c0-1.728-0.489-3.072-1.468-4.032C9.986,1.25,8.863,0.77,7.596,0.77   H7.572c-1.268,0-2.39,0.484-3.369,1.452C3.225,3.19,2.736,4.506,2.736,6.17c0,1.008,0.261,2.148,0.782,3.42   c0.521,1.272,1.043,2.512,1.564,3.72c0.521,1.208,0.782,2.252,0.782,3.132c0,0.304-0.064,0.496-0.192,0.576   c-0.128,0.081-0.385,0.12-0.769,0.12H0.768L0,13.226z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 希腊字符data: 大写phi
 */
define("char/data/greek/u-phi", [], {
    path: "M7.633,15.41c0,0.864,0.048,1.104,1.872,1.104h0.528v0.624C9.049,17.09,7.897,17.09,6.889,17.09s-2.184,0-3.168,0.048   v-0.624h0.528c1.824,0,1.872-0.24,1.872-1.104v-1.368C2.448,13.706,0,11.401,0,8.929C0,6.553,2.353,4.177,6.121,3.84V2.473   c0-0.864-0.048-1.104-1.872-1.104H3.72V0.744c0.984,0.048,2.16,0.048,3.168,0.048s2.16,0,3.145-0.048v0.624H9.505   c-1.824,0-1.872,0.24-1.872,1.104V3.84c3.792,0.336,6.168,2.688,6.168,5.113c0,2.328-2.28,4.752-6.168,5.088V15.41z M6.121,4.249   C4.032,4.464,1.776,5.665,1.776,8.953c0,3.192,2.184,4.44,4.344,4.68V4.249z M7.633,13.633c1.8-0.168,4.392-1.176,4.392-4.704   c0-3.433-2.496-4.513-4.392-4.681V13.633z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 14, 27 ]
});
/**
 * 希腊字符data: 大写Pi
 */
define("char/data/greek/u-pi", [], {
    path: "M12.241,15.434c0,1.08,0.264,1.08,1.92,1.08v0.624c-0.696-0.048-1.968-0.048-2.712-0.048c-0.744,0-2.017,0-2.712,0.048   v-0.624c1.656,0,1.92,0,1.92-1.08V1.417H3.504v14.017c0,1.08,0.264,1.08,1.92,1.08v0.624C4.729,17.09,3.456,17.09,2.712,17.09   c-0.744,0-2.016,0-2.712,0.048v-0.624c1.656,0,1.92,0,1.92-1.08V2.497c0-1.08-0.264-1.08-1.92-1.08V0.792h14.161v0.624   c-1.656,0-1.92,0-1.92,1.08V15.434z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 15, 27 ]
});
/**
 * 希腊字符data: 大写psi
 */
define("char/data/greek/u-psi", [], {
    path: "M8.233,13.609c2.832-0.6,3.504-3.552,3.528-6.097c0.024-2.472,0.528-3.72,2.112-3.72h0.624c0.408,0,0.528,0,0.528,0.192   c0,0.144-0.048,0.144-0.288,0.192c-1.224,0.24-1.464,1.8-1.464,2.904c0,1.368-0.048,6.408-5.041,6.937v1.392   c0,0.864,0.048,1.104,1.872,1.104h0.528v0.624C9.649,17.09,8.497,17.09,7.489,17.09c-1.008,0-2.184,0-3.168,0.048v-0.624h0.528   c1.824,0,1.872-0.24,1.872-1.104v-1.392c-4.176-0.48-4.968-4.152-4.992-6.385c-0.024-3.216-0.936-3.36-1.608-3.48   C0,4.152,0,4.009,0,3.984c0-0.192,0.12-0.192,0.504-0.192h0.624c1.488,0,2.088,1.176,2.112,3.457c0,1.248,0.048,5.665,3.48,6.36   V2.473c0-0.864-0.048-1.104-1.872-1.104H4.32V0.744c0.984,0.048,2.161,0.048,3.168,0.048c1.008,0,2.16,0,3.145-0.048v0.624h-0.528   c-1.824,0-1.872,0.24-1.872,1.104V13.609z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 希腊字符data: 大写Sigma
 */
define("char/data/greek/u-sigma", [], {
    path: "M1.104,16.322h6.625c3.889,0,5.257-0.792,5.641-4.681h0.432l-0.576,5.497H0.528c-0.36,0-0.504,0-0.504-0.168   c0-0.048,0-0.072,0.168-0.288l5.353-6.865L0,1.272c0-0.504,0.024-0.528,0.528-0.528h12.697l0.576,5.305h-0.432   c-0.408-3.816-1.608-4.681-5.592-4.681H1.968l4.729,7.273c0.024,0.048,0.12,0.192,0.12,0.288c0,0.072,0,0.12-0.168,0.312   L1.104,16.322z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 14, 27 ]
});
/**
 * 希腊字符data: 大写theta
 */
define("char/data/greek/u-theta", [], {
    path: "M7.513,17.522C3.504,17.522,0,13.85,0,8.977S3.457,0.36,7.537,0.36c3.984,0,7.513,3.696,7.513,8.617   C15.049,13.777,11.617,17.522,7.513,17.522z M13.297,8.977c0-5.641-3.072-8.233-5.785-8.233c-2.616,0-5.76,2.521-5.76,8.233   c0,5.544,3.048,8.137,5.784,8.137C10.177,17.114,13.297,14.593,13.297,8.977z M12.025,10.417h-0.432V9.601H3.457v0.816H3.024V7.441   h0.432v0.816h8.137V7.441h0.432V10.417z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 希腊字符data: 大写Upsilon
 */
define("char/data/greek/u-upsilon", [], {
    path: "M8.329,15.41c0,0.864,0.048,1.104,1.873,1.104h0.528v0.624C9.721,17.09,8.545,17.09,7.537,17.09   c-1.008,0-2.184,0-3.192,0.048v-0.624h0.528c1.824,0,1.872-0.24,1.872-1.104V8.665c0-1.44-0.24-6.937-3.84-6.937   c-0.768,0-2.184,0.408-2.4,2.184C0.48,4.104,0.48,4.177,0.264,4.177C0.024,4.177,0,4.104,0,3.865C0,2.616,0.816,0.36,2.928,0.36   c3.648,0,4.417,4.632,4.608,5.88h0.024c0.168-1.224,0.912-5.88,4.561-5.88c2.088,0,2.928,2.232,2.928,3.504   c0,0.24-0.024,0.312-0.264,0.312c-0.216,0-0.216-0.072-0.24-0.264c-0.216-1.752-1.632-2.184-2.4-2.184   c-1.296,0-2.352,0.72-3.024,2.28c-0.648,1.56-0.792,3.6-0.792,4.656V15.41z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 希腊字符data: 大写Xi
 */
define("char/data/greek/u-xi", [], {
    path: "M0,13.562h0.432c0.048,0.96,0.096,1.68,0.24,2.016c0.144,0.312,1.032,0.312,1.896,0.312h8.017c0.624,0,1.728,0,1.872-0.288   c0.168-0.336,0.192-0.96,0.264-2.04h0.432l-0.168,3.576H0.168L0,13.562z M12.889,1.272c0.024,0.696,0.096,2.112,0.144,2.856h-0.432   c-0.024-0.456-0.072-1.44-0.24-1.824c-0.144-0.24-1.224-0.24-1.8-0.24H2.592c-0.24,0-1.608,0-1.752,0.216   C0.624,2.568,0.576,3.697,0.552,4.128H0.12l0.024-0.456C0.168,2.977,0.24,1.561,0.288,0.816h12.577L12.889,1.272z M10.945,10.225   h-0.432v-0.96H2.64v0.96H2.208V7.057H2.64v0.96h7.873v-0.96h0.432V10.225z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 14, 27 ]
});
/**
 * 希腊字符data: upsilon
 */
define("char/data/greek/upsilon", [], {
    path: "M9.529,14.805c-0.624,0.912-1.92,2.568-3.912,2.568c-1.776,0-3.72-0.696-3.72-3.097c0-0.624,0-1.248,1.344-4.776   c0.408-1.056,0.408-1.56,0.408-1.68c0-0.768-0.384-0.792-0.624-0.792c-0.888,0-1.824,0.864-2.424,2.977   c-0.096,0.336-0.12,0.432-0.336,0.432C0.096,10.436,0,10.316,0,10.22c0-0.192,0.888-3.672,3.096-3.672   c1.176,0,1.896,0.912,1.896,1.92c0,0.456-0.12,0.768-0.408,1.56c-0.936,2.424-1.224,3.576-1.224,4.512   c0,0.696,0.168,1.296,0.6,1.752c0.624,0.6,1.584,0.6,1.728,0.6c3.072,0,5.017-5.016,5.017-6.625c0-1.248-0.624-1.896-0.84-2.112   C9.745,8.06,9.577,7.892,9.577,7.604c0-0.48,0.528-1.056,1.104-1.056c0.216,0,0.96,0.144,0.96,1.608   C11.641,8.924,11.233,12.309,9.529,14.805z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 希腊字符data: 变体epsilon
 */
define("char/data/greek/varepsilon", [], {
    path: "M0.552,14.517c0,1.704,1.968,2.088,3.456,2.088c2.856,0,3.48-0.96,3.745-1.417c0.096-0.144,0.144-0.216,0.264-0.216   s0.216,0.096,0.216,0.216c0,0.336-1.272,2.448-4.44,2.448C1.488,17.637,0,16.317,0,14.661c0-1.176,0.816-2.472,2.208-3.264   c-0.408-0.288-0.984-0.84-0.984-1.729c0-1.776,2.544-3.384,5.232-3.384c1.656,0,3.048,0.912,3.048,1.344c0,0.288-0.312,0.6-0.6,0.6   c-0.168,0-0.24-0.072-0.384-0.168c-1.008-0.744-1.873-0.744-2.28-0.744c-2.136,0-4.489,0.864-4.489,2.352   c0,0.528,0.288,1.08,1.032,1.44c0.84-0.36,1.56-0.432,2.16-0.432c1.224,0,1.68,0.168,1.68,0.6c0,0.696-1.248,0.696-1.872,0.696   c-0.456,0-1.272,0-2.04-0.312C1.152,12.477,0.552,13.701,0.552,14.517z M4.752,11.492c0.864,0,0.912,0,1.32-0.192   c-0.384-0.096-0.504-0.144-1.176-0.144c-0.168,0-0.792,0-1.44,0.216C3.937,11.492,4.32,11.492,4.752,11.492z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 希腊字符data: 变体phi
 */
define("char/data/greek/varphi", [], {
    path: "M4.176,21.794c-0.192,0.48-0.624,0.576-0.864,0.576c-0.048,0-0.624-0.024-0.624-0.6c0-0.096,0-0.144,0.12-0.504   l1.248-4.057C2.112,16.777,0,15.313,0,12.625c0-2.28,1.824-5.784,2.472-5.784c0.048,0,0.24,0,0.24,0.192   c0,0.048,0,0.096-0.264,0.408c-1.392,1.728-1.896,4.296-1.896,4.944c0,1.608,1.152,3.072,3.913,3.6   c1.344-4.512,2.808-9.385,6.265-9.385c2.016,0,2.664,1.776,2.664,3.24c0,3.792-3.625,7.585-7.561,7.585   c-0.432,0-0.672-0.024-0.816-0.048C4.92,17.857,4.248,21.578,4.176,21.794z M12.793,10.393c0-1.32-0.72-2.496-2.28-2.496   c-2.088,0-3.912,2.208-4.68,5.28c-0.144,0.528-0.552,2.784-0.552,2.832c0,0.12,0.36,0.12,0.768,0.12   C9.721,16.129,12.793,13.129,12.793,10.393z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 14, 27 ]
});
/**
 * 希腊字符data: xi
 */
define("char/data/greek/xi", [], {
    path: "M7.177,17.829c0.768,0.336,1.176,0.936,1.176,1.68c0,1.032-0.936,2.521-2.472,2.521c-1.296,0-2.544-0.888-2.544-1.152   c0-0.144,0.12-0.24,0.24-0.24c0.096,0,0.12,0.024,0.288,0.168c0.864,0.648,1.656,0.744,2.016,0.744c0.84,0,1.224-0.816,1.224-1.32   c0-0.384-0.192-0.672-0.432-0.84c-0.168-0.096-1.152-0.504-1.752-0.72l-2.16-0.864C1.896,17.445,0,16.701,0,14.613   c0-1.296,1.056-3.745,3.528-5.089C2.88,9.164,1.92,8.372,1.92,6.932c0-1.561,1.272-3.601,4.152-4.44   C5.929,2.18,5.905,1.843,5.905,1.507c0-0.192,0-1.08,0.384-1.08c0.12,0,0.24,0.096,0.24,0.24c0,0.072-0.096,0.408-0.096,0.84   c0,0.528,0.024,0.576,0.144,0.864c0.672-0.12,1.032-0.12,1.512-0.12c0.768,0,1.92,0,1.92,0.6c0,0.696-1.464,0.696-2.064,0.696   c-0.504,0-1.08,0-1.512-0.504c-1.896,0.888-2.76,2.76-2.76,4.081c0,0.72,0.24,1.488,0.816,1.968   c0.864-0.288,1.512-0.288,1.992-0.288c1.032,0,1.896,0.072,1.896,0.6c0,0.696-1.416,0.696-2.16,0.696c-0.432,0-1.056,0-1.704-0.192   C4.44,9.884,4.225,9.836,4.177,9.836c-0.504,0-3.024,2.088-3.024,4.152c0,1.44,1.44,2.016,2.064,2.256l2.521,1.008L7.177,17.829z    M6.313,9.62c1.032,0,1.248-0.072,1.512-0.192c-0.528-0.12-0.576-0.144-1.368-0.144c-0.288,0-0.816,0-1.392,0.144   C5.497,9.62,5.737,9.62,6.313,9.62z M7.969,3.067c1.008,0,1.2-0.072,1.488-0.192c-0.48-0.12-0.552-0.144-1.344-0.144   c-0.312,0-0.744,0-1.152,0.12C7.225,3.067,7.513,3.067,7.969,3.067z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 希腊字符data: zeta
 */
define("char/data/greek/zeta", [], {
    path: "M5.665,16.725c0.888,0.288,2.28,0.768,2.28,2.448c0,1.248-1.056,2.856-2.592,2.856c-1.2,0-2.232-0.912-2.232-1.152   c0-0.048,0.048-0.24,0.24-0.24c0.12,0,0.168,0.048,0.264,0.144c0.6,0.6,1.248,0.768,1.728,0.768c0.888,0,1.392-0.936,1.392-1.632   c0-1.152-0.936-1.464-1.92-1.8c-0.312-0.12-1.08-0.384-1.392-0.48C2.184,17.205,0,16.437,0,13.148C0,8.66,3.504,4.172,6.289,2.731   C6,2.228,6,1.724,6,1.507c0-0.192,0-1.08,0.384-1.08c0.12,0,0.24,0.096,0.24,0.24c0,0.072-0.096,0.408-0.096,0.84   c0,0.36,0.072,0.696,0.216,1.008c0.624-0.264,1.032-0.264,1.512-0.264c0.768,0,1.848,0.024,1.848,0.6   c0,0.696-1.464,0.696-2.064,0.696c-0.456,0-1.008,0-1.44-0.408c-2.952,1.704-5.376,6.097-5.376,9.385c0,1.8,0.816,2.88,2.232,3.432   L5.665,16.725z M8.065,3.067c1.008,0,1.2-0.072,1.488-0.192c-0.48-0.12-0.552-0.144-1.32-0.144c-0.408,0-0.744,0-1.104,0.168   C7.393,3.067,7.561,3.067,8.065,3.067z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 数字data: 0
 */
define("char/data/number/0", [], {
    path: "M4.945,17.637c-1.023,0-1.867-0.256-2.531-0.768s-1.168-1.174-1.512-1.986s-0.58-1.674-0.709-2.584S0,10.441,0,9.457   c0-2.25,0.34-4.193,1.02-5.83s1.988-2.455,3.926-2.455c1.32,0,2.35,0.43,3.088,1.289s1.229,1.904,1.471,3.135   s0.363,2.518,0.363,3.861c0,0.984-0.061,1.93-0.182,2.836s-0.354,1.766-0.697,2.578s-0.85,1.477-1.518,1.992   S5.961,17.637,4.945,17.637z M4.945,17.063c0.695,0,1.254-0.285,1.676-0.855s0.727-1.279,0.914-2.127s0.303-1.668,0.346-2.461   s0.064-1.635,0.064-2.525c0-1.203-0.051-2.311-0.152-3.322S7.418,3.836,6.973,3S5.852,1.746,4.945,1.746   C4.031,1.746,3.35,2.164,2.9,3S2.176,4.76,2.074,5.771S1.922,7.891,1.922,9.094c0,0.891,0.021,1.732,0.064,2.525   s0.162,1.615,0.357,2.467s0.502,1.561,0.92,2.127S4.242,17.063,4.945,17.063z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 数字data: 1
 */
define("char/data/number/1", [], {
    path: "M0.152,17.133v-0.797c1.945,0,2.918-0.254,2.918-0.762V2.871C2.234,3.293,1.211,3.504,0,3.504V2.707   c1.898,0,3.34-0.512,4.324-1.535h0.316c0.047,0,0.09,0.02,0.129,0.059s0.059,0.082,0.059,0.129v14.215   c0,0.508,0.977,0.762,2.93,0.762v0.797H0.152z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 8, 27 ]
});
/**
 * 数字data: 2
 */
define("char/data/number/2", [], {
    path: "M0,17.133v-0.645c0-0.016,0.023-0.047,0.07-0.094l3.609-4.066c0.82-0.914,1.457-1.654,1.91-2.221s0.852-1.223,1.195-1.969   s0.516-1.518,0.516-2.314c0-1.055-0.289-1.961-0.867-2.719S5.047,1.969,4.008,1.969c-0.734,0-1.381,0.24-1.939,0.721   S1.125,3.777,0.914,4.512c0.063-0.016,0.152-0.023,0.27-0.023c0.211,0,0.408,0.051,0.592,0.152s0.326,0.244,0.428,0.428   S2.355,5.449,2.355,5.66c0,0.203-0.051,0.396-0.152,0.58S1.961,6.568,1.781,6.674S1.402,6.832,1.184,6.832   c-0.336,0-0.617-0.117-0.844-0.352S0,5.973,0,5.66c0-0.609,0.111-1.182,0.334-1.717s0.539-1.018,0.949-1.447   s0.879-0.758,1.406-0.984s1.088-0.34,1.682-0.34c0.914,0,1.752,0.191,2.514,0.574s1.369,0.928,1.822,1.635s0.68,1.521,0.68,2.443   c0,0.719-0.146,1.381-0.439,1.986S8.281,8.973,7.828,9.48S6.766,10.584,6,11.268s-1.262,1.135-1.488,1.354l-2.754,2.707h2.449   c1.117,0,2.051-0.01,2.801-0.029s1.145-0.049,1.184-0.088c0.188-0.203,0.379-0.938,0.574-2.203h0.621l-0.621,4.125H0z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 数字data: 3
 */
define("char/data/number/3", [], {
    path: "M1.031,14.953c0.328,0.625,0.842,1.105,1.541,1.441s1.436,0.504,2.209,0.504c0.945,0,1.625-0.395,2.039-1.184   s0.621-1.699,0.621-2.73c0-0.625-0.086-1.236-0.258-1.834s-0.459-1.094-0.861-1.488S5.406,9.07,4.781,9.07H3.094   c-0.109,0-0.164-0.055-0.164-0.164v-0.27c0-0.094,0.055-0.141,0.164-0.141l1.371-0.094c0.563,0,1.037-0.213,1.424-0.639   s0.67-0.949,0.85-1.57s0.27-1.197,0.27-1.729c0-0.758-0.188-1.385-0.563-1.881S5.516,1.84,4.781,1.84   c-0.633,0-1.242,0.117-1.828,0.352s-1.035,0.598-1.348,1.09c0.031-0.016,0.098-0.023,0.199-0.023c0.32,0,0.588,0.111,0.803,0.334   S2.93,4.082,2.93,4.395c0,0.32-0.107,0.592-0.322,0.814S2.125,5.543,1.805,5.543s-0.594-0.113-0.82-0.34s-0.34-0.496-0.34-0.809   c0-0.672,0.207-1.254,0.621-1.746s0.941-0.861,1.582-1.107s1.293-0.369,1.957-0.369s1.328,0.129,1.992,0.387   s1.217,0.633,1.658,1.125S9.117,3.77,9.117,4.465c0,0.656-0.156,1.281-0.469,1.875s-0.736,1.1-1.271,1.518S6.27,8.574,5.66,8.754   c0.727,0.109,1.402,0.357,2.027,0.744s1.129,0.887,1.512,1.5s0.574,1.275,0.574,1.986c0,0.867-0.23,1.656-0.691,2.367   s-1.076,1.27-1.846,1.676s-1.58,0.609-2.432,0.609c-0.789,0-1.555-0.158-2.297-0.475s-1.346-0.771-1.811-1.365S0,14.512,0,13.723   c0-0.359,0.117-0.652,0.352-0.879s0.531-0.34,0.891-0.34c0.227,0,0.434,0.051,0.621,0.152s0.336,0.246,0.445,0.434   s0.164,0.398,0.164,0.633c0,0.359-0.119,0.658-0.357,0.896s-0.529,0.357-0.873,0.357C1.148,14.977,1.078,14.969,1.031,14.953z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 数字data: 4
 */
define("char/data/number/4", [], {
    path: "M3.973,17.133v-0.797c1.523,0,2.285-0.254,2.285-0.762v-2.426H0v-0.797L7.277,1.289c0.055-0.078,0.125-0.117,0.211-0.117   h0.363c0.141,0,0.211,0.074,0.211,0.223v10.957h2.379v0.797H8.063v2.426c0,0.328,0.229,0.537,0.686,0.627s0.99,0.135,1.6,0.135   v0.797H3.973z M0.727,12.352h5.649V3.715L0.727,12.352z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 数字data: 5
 */
define("char/data/number/5", [], {
    path: "M0.844,14.297c-0.016-0.016-0.025-0.023-0.029-0.023s-0.01,0-0.018,0c0.227,0.758,0.662,1.385,1.307,1.881   s1.361,0.744,2.15,0.744c0.617,0,1.127-0.137,1.529-0.41s0.719-0.635,0.949-1.084s0.391-0.945,0.48-1.488s0.135-1.088,0.135-1.635   c0-0.688-0.021-1.258-0.064-1.711s-0.15-0.883-0.322-1.289C6.781,8.836,6.52,8.453,6.176,8.133s-0.746-0.48-1.207-0.48   c-0.57,0-1.047,0.084-1.43,0.252S2.855,8.26,2.637,8.467S2.215,8.898,2.027,9.141S1.719,9.512,1.664,9.527h-0.27   c-0.125,0-0.188-0.074-0.188-0.223V1.359c0-0.047,0.02-0.09,0.059-0.129s0.082-0.059,0.129-0.059h0.07   c1.078,0.516,2.199,0.773,3.363,0.773c1.18,0,2.309-0.258,3.387-0.773h0.07c0.047,0,0.09,0.014,0.129,0.041   c0.039,0.028,0.059,0.061,0.059,0.1v0.271c0,0.016-0.008,0.035-0.023,0.059S8.426,1.686,8.426,1.702   c-0.531,0.659-1.191,1.177-1.98,1.554S4.828,3.82,3.961,3.82c-0.711,0-1.383-0.102-2.016-0.307V8.32   C2.336,7.922,2.793,7.615,3.316,7.4s1.074-0.322,1.652-0.322c0.672,0,1.283,0.15,1.834,0.451S7.818,8.23,8.197,8.73   s0.672,1.064,0.879,1.693s0.311,1.256,0.311,1.881c0,0.93-0.227,1.807-0.68,2.631s-1.072,1.48-1.857,1.969s-1.65,0.732-2.596,0.732   c-0.797,0-1.52-0.203-2.168-0.609s-1.158-0.945-1.529-1.617S0,14.008,0,13.219c0-0.313,0.105-0.574,0.316-0.785   s0.477-0.316,0.797-0.316c0.313,0,0.574,0.105,0.785,0.316s0.316,0.473,0.316,0.785s-0.105,0.574-0.316,0.785   S1.426,14.32,1.113,14.32c-0.047-0.008-0.09-0.014-0.129-0.018S0.898,14.297,0.844,14.297z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 数字data: 6
 */
define("char/data/number/6", [], {
    path: "M0.773,14.449c-0.289-0.727-0.49-1.506-0.604-2.338S0,10.379,0,9.41c0-0.93,0.137-1.883,0.41-2.859S1.08,4.684,1.6,3.879   s1.17-1.457,1.951-1.957s1.66-0.75,2.637-0.75c0.859,0,1.574,0.221,2.145,0.662s0.855,1.084,0.855,1.928   c0,0.195-0.047,0.373-0.141,0.533S8.828,4.578,8.672,4.664S8.344,4.793,8.156,4.793c-0.305,0-0.557-0.1-0.756-0.299   S7.102,4.051,7.102,3.762c0-0.297,0.101-0.547,0.303-0.75c0.201-0.203,0.45-0.305,0.745-0.305c0.023,0,0.044,0.002,0.064,0.006   c0.019,0.004,0.041,0.01,0.064,0.018C7.902,2.137,7.204,1.84,6.182,1.84c-0.765,0-1.458,0.27-2.078,0.81   c-0.62,0.54-1.094,1.201-1.422,1.983c-0.414,1.025-0.62,2.555-0.62,4.589C2.336,8.54,2.744,7.974,3.287,7.527   C3.83,7.079,4.445,6.855,5.133,6.855c0.703,0,1.342,0.148,1.916,0.445S8.113,7.996,8.52,8.496s0.717,1.07,0.932,1.711   s0.322,1.309,0.322,2.004c0,0.953-0.205,1.844-0.615,2.672s-0.99,1.494-1.74,1.998s-1.598,0.756-2.543,0.756   s-1.77-0.301-2.473-0.902S1.156,15.371,0.773,14.449z M4.893,16.898c0.818,0,1.433-0.23,1.842-0.69s0.67-1.017,0.784-1.668   c0.113-0.651,0.169-1.418,0.169-2.3v-0.07c0-0.663-0.021-1.232-0.064-1.709c-0.043-0.476-0.146-0.946-0.31-1.41   C7.149,8.586,6.88,8.204,6.506,7.904c-0.375-0.3-0.873-0.451-1.497-0.451c-0.663,0-1.211,0.217-1.644,0.649   c-0.433,0.433-0.75,0.974-0.953,1.621c-0.203,0.648-0.304,1.303-0.304,1.966c0,0.211,0.008,0.371,0.023,0.48   c0,0.016-0.002,0.033-0.006,0.053s-0.01,0.041-0.018,0.064c0,0.694,0.078,1.393,0.234,2.095c0.156,0.703,0.442,1.297,0.859,1.785   S4.183,16.898,4.893,16.898z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 数字data: 7
 */
define("char/data/number/7", [], {
    path: "M2.859,16.582c0-1.164,0.133-2.313,0.399-3.445c0.266-1.133,0.651-2.248,1.157-3.346c0.505-1.098,1.094-2.131,1.767-3.1   L8.438,3.48H5.543c-1.211,0-2.221,0.006-3.029,0.018s-1.248,0.045-1.318,0.1C1.008,3.816,0.816,4.551,0.621,5.801H0l0.738-4.887   h0.621v0.07c0,0.461,1.441,0.691,4.324,0.691h4.418V2.25c0,0.078-0.016,0.117-0.047,0.117L6.832,6.984   c-0.82,1.219-1.336,2.568-1.547,4.049s-0.316,3.33-0.316,5.549c0,0.297-0.102,0.547-0.307,0.75   c-0.204,0.203-0.452,0.305-0.742,0.305c-0.298,0-0.55-0.102-0.754-0.305C2.961,17.129,2.859,16.879,2.859,16.582z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 数字data: 8
 */
define("char/data/number/8", [], {
    path: "M0,13.488c0-0.992,0.322-1.859,0.967-2.602S2.434,9.539,3.434,9.07L2.426,8.402c-0.547-0.367-0.98-0.84-1.301-1.418   s-0.48-1.188-0.48-1.828c0-0.563,0.111-1.086,0.334-1.57s0.539-0.91,0.949-1.277S2.799,1.66,3.311,1.465s1.041-0.293,1.588-0.293   c0.703,0,1.381,0.146,2.033,0.439s1.18,0.713,1.582,1.26s0.604,1.172,0.604,1.875c0,0.805-0.27,1.516-0.809,2.133   s-1.23,1.148-2.074,1.594l1.488,0.984c0.609,0.383,1.104,0.904,1.482,1.564s0.568,1.361,0.568,2.104   c0,0.852-0.229,1.623-0.686,2.314s-1.064,1.23-1.822,1.617s-1.547,0.58-2.367,0.58c-0.602,0-1.189-0.094-1.764-0.281   s-1.105-0.471-1.594-0.85s-0.867-0.822-1.137-1.33S0,14.105,0,13.488z M1.195,13.488c0,0.641,0.173,1.219,0.521,1.734   s0.808,0.924,1.381,1.225s1.172,0.451,1.796,0.451c0.593,0,1.172-0.121,1.737-0.363s1.027-0.596,1.387-1.061   c0.358-0.465,0.538-1.002,0.538-1.611c0-0.461-0.132-0.902-0.395-1.324c-0.264-0.422-0.601-0.762-1.011-1.02L4.031,9.457   c-0.82,0.398-1.498,0.953-2.033,1.664S1.195,12.621,1.195,13.488z M2.883,6.258l2.801,1.828c0.688-0.391,1.252-0.871,1.693-1.441   s0.662-1.203,0.662-1.898c0-0.539-0.15-1.033-0.451-1.482S6.898,2.465,6.422,2.215S5.43,1.84,4.875,1.84   c-0.492,0-0.982,0.098-1.471,0.293s-0.891,0.479-1.207,0.85s-0.475,0.814-0.475,1.33c0,0.383,0.105,0.742,0.316,1.078   S2.531,6.016,2.883,6.258z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 数字data: 9
 */
define("char/data/number/9", [], {
    path: "M1.535,16.08c0.454,0.546,1.241,0.818,2.36,0.818c0.72,0,1.362-0.252,1.925-0.756s0.986-1.119,1.268-1.846   c0.172-0.43,0.307-0.908,0.405-1.436c0.098-0.527,0.159-1.029,0.182-1.506s0.036-1.07,0.036-1.781   c-0.274,0.683-0.679,1.249-1.215,1.696c-0.536,0.448-1.156,0.671-1.86,0.671c-0.923,0-1.737-0.252-2.441-0.757   C1.49,10.68,0.948,10.016,0.569,9.19C0.189,8.365,0,7.495,0,6.58c0-0.962,0.211-1.857,0.633-2.687S1.65,2.404,2.42,1.911   s1.635-0.739,2.596-0.739c1.234,0,2.207,0.438,2.918,1.313s1.195,1.928,1.453,3.158s0.387,2.467,0.387,3.709   c0,0.891-0.121,1.824-0.363,2.801s-0.609,1.877-1.102,2.701s-1.107,1.494-1.846,2.01s-1.588,0.773-2.549,0.773   c-0.93,0-1.719-0.212-2.367-0.637s-0.973-1.073-0.973-1.945c0-0.296,0.102-0.545,0.305-0.748s0.453-0.304,0.75-0.304   c0.188,0,0.361,0.045,0.521,0.134s0.285,0.212,0.375,0.367c0.09,0.156,0.135,0.338,0.135,0.548c0,0.194-0.047,0.372-0.141,0.531   c-0.094,0.16-0.219,0.282-0.375,0.368c-0.156,0.085-0.328,0.128-0.516,0.128H1.535z M4.752,11.344c0.986,0,1.718-0.447,2.196-1.342   s0.716-1.869,0.716-2.924c0-0.211-0.008-0.371-0.023-0.48c0.008-0.016,0.014-0.031,0.018-0.047S7.664,6.52,7.664,6.504   c0-1.195-0.19-2.271-0.57-3.229C6.715,2.318,6.024,1.84,5.022,1.84c-0.846,0-1.486,0.23-1.92,0.691S2.385,3.559,2.256,4.23   C2.127,4.902,2.063,5.668,2.063,6.527v0.07c0,0.859,0.051,1.623,0.152,2.291c0.102,0.668,0.351,1.244,0.746,1.729   C3.356,11.102,3.953,11.344,4.752,11.344z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 罗马字符data: a
 */
define("char/data/roman/a", [], {
    path: "M7.681,14.377c0,1.056,0,2.304,0.984,2.304c0.312,0,0.96-0.192,0.96-1.656v-1.368h0.432v1.344   c0,1.896-1.272,2.232-1.776,2.232c-1.056,0-1.728-0.96-1.776-2.017c-0.528,1.368-1.752,2.112-3.072,2.112   C2.16,17.33,0,16.802,0,14.954c0-0.912,0.432-2.112,1.944-2.952c1.344-0.72,3.048-0.912,4.464-0.96V9.985   c0-2.016-1.32-3.072-2.52-3.072c-0.84,0-2.136,0.432-2.641,1.944C1.32,8.833,1.44,8.809,1.536,8.809   c0.408,0,0.864,0.264,0.864,0.864c0,0.672-0.552,0.864-0.864,0.864c-0.144,0-0.864-0.048-0.864-0.936   c0-1.584,1.368-3.072,3.264-3.072c0.816,0,1.848,0.24,2.736,1.032c1.008,0.936,1.008,1.776,1.008,3.36V14.377z M6.409,11.401   c-0.768,0.048-2.088,0.144-3.24,0.792c-1.392,0.768-1.704,2.04-1.704,2.76c0,1.104,0.936,1.992,2.136,1.992   c1.32,0,2.808-1.056,2.808-3.145V11.401z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 罗马字符data: b
 */
define("char/data/roman/b", [], {
    path: "M2.856,8.353c0.72-0.936,1.776-1.728,3.265-1.728c2.424,0,4.584,2.256,4.584,5.328c0,3.264-2.424,5.376-4.825,5.376   c-1.392,0-2.424-0.768-3.12-1.896l-0.696,1.704H1.632V2.665c0-1.152-0.216-1.296-1.632-1.296V0.744L2.856,0.48V8.353z M2.904,14.33   c0,0.432,0,0.48,0.264,0.936c0.768,1.392,1.848,1.68,2.592,1.68c0.576,0,3.409-0.264,3.409-5.017c0-4.536-2.473-4.92-3.192-4.92   c-0.456,0-1.8,0.12-2.736,1.56C2.904,9.073,2.904,9.145,2.904,9.577V14.33z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 罗马字符data: c
 */
define("char/data/roman/c", [], {
    path: "M4.729,6.961c-1.416,0-3.192,1.32-3.192,4.968c0,3.552,1.848,4.968,3.384,4.968c1.032,0,2.4-0.48,3.024-2.424   c0.096-0.312,0.12-0.336,0.288-0.336s0.192,0.072,0.192,0.168c0,0.264-0.744,3.024-3.72,3.024C2.256,17.33,0,15.146,0,11.953   c0-3.072,2.16-5.424,4.705-5.424c1.848,0,3.48,1.296,3.48,3c0,0.84-0.696,0.912-0.864,0.912c-0.312,0-0.864-0.192-0.864-0.864   c0-0.84,0.672-0.84,1.128-0.84C7.057,7.417,5.665,6.961,4.729,6.961z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 9, 27 ]
});
/**
 * 罗马字符data: d
 */
define("char/data/roman/d", [], {
    path: "M9.073,0.48v14.737c0,1.152,0.216,1.296,1.632,1.296v0.624L7.801,17.33v-1.752c-0.12,0.168-1.176,1.752-3.216,1.752   C2.232,17.33,0,15.122,0,11.977c0-3.168,2.376-5.352,4.825-5.352c1.944,0,2.928,1.536,3.024,1.656V2.665   c0-1.152-0.216-1.296-1.632-1.296V0.744L9.073,0.48z M7.801,9.505c0-0.432,0-0.504-0.312-1.008   c-0.552-0.864-1.44-1.488-2.544-1.488c-0.624,0-3.408,0.288-3.408,4.993c0,4.584,2.496,4.944,3.192,4.944   c0.456,0,1.272-0.12,2.088-0.84c0.552-0.48,0.984-1.128,0.984-1.848V9.505z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 罗马字符data: e
 */
define("char/data/roman/e", [], {
    path: "M1.536,11.497c0,1.128,0,2.544,0.744,3.769c0.648,1.056,1.68,1.632,2.712,1.632c1.248,0,2.568-0.816,3.096-2.448   c0.096-0.288,0.12-0.336,0.288-0.336c0.048,0,0.192,0,0.192,0.168c0,0.504-1.056,3.048-3.744,3.048C2.28,17.33,0,15.025,0,11.905   c0-2.952,2.016-5.376,4.561-5.376c2.736,0,4.032,2.136,4.032,4.584c0,0.24,0,0.288-0.096,0.384H1.536z M7.297,11.137   c-0.024-2.688-1.128-4.225-2.76-4.225c-0.96,0-2.809,0.768-2.977,4.225H7.297z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 9, 27 ]
});
/**
 * 罗马字符data: f
 */
define("char/data/roman/f", [], {
    path: "M3.145,15.434c0,1.08,0.288,1.08,2.016,1.08v0.624C4.513,17.09,3.289,17.09,2.592,17.09c-0.624,0-1.728,0-2.304,0.048   v-0.624c1.536,0,1.632-0.12,1.632-1.032V7.441H0V6.817h1.92V3.96c0-2.544,1.872-3.672,3.24-3.672c0.96,0,1.824,0.552,1.824,1.464   c0,0.624-0.48,0.816-0.816,0.816c-0.336,0-0.816-0.192-0.816-0.816c0-0.6,0.504-0.768,0.696-0.816   c-0.24-0.168-0.6-0.264-0.912-0.264c-1.032,0-2.04,1.248-2.04,3.24v2.904h2.784v0.624H3.145V15.434z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 7, 27 ]
});
/**
 * 罗马字符data: g
 */
define("char/data/roman/g", [], {
    path: "M1.728,14.089c0,0.84,0.504,1.512,1.249,1.632c0.12,0.024,1.104,0.024,1.656,0.024c1.848,0,5.4,0,5.4,3.264   c0,1.8-2.376,3.024-5.016,3.024c-2.736,0-5.017-1.272-5.017-3c0-1.2,0.984-2.16,2.232-2.472c-0.816-0.504-1.056-1.416-1.056-2.04   c0-0.12,0-1.104,0.72-1.944c-0.24-0.24-1.032-1.104-1.032-2.472c0-1.992,1.632-3.48,3.528-3.48c0.768,0,1.632,0.24,2.352,0.888   c0.672-0.624,1.512-1.08,2.472-1.08c0.768,0,1.128,0.48,1.128,0.936c0,0.312-0.192,0.552-0.552,0.552   c-0.312,0-0.528-0.216-0.528-0.528c0-0.384,0.216-0.48,0.312-0.504c-0.12-0.072-0.264-0.072-0.36-0.072   c-0.552,0-1.536,0.24-2.208,0.96c0.72,0.744,0.912,1.704,0.912,2.328c0,1.992-1.632,3.48-3.528,3.48   c-0.96,0-1.752-0.408-2.208-0.768C1.728,13.345,1.728,13.874,1.728,14.089z M9.073,19.034c0-2.232-2.736-2.232-4.704-2.232   c-1.632,0-1.873,0-2.473,0.408c-0.528,0.384-0.936,1.08-0.936,1.824c0,1.32,1.656,2.592,4.057,2.592   C7.417,21.626,9.073,20.354,9.073,19.034z M6.504,10.105c0-0.48,0-3.072-2.112-3.072c-2.112,0-2.112,2.592-2.112,3.072   s0,3.072,2.112,3.072C6.504,13.177,6.504,10.585,6.504,10.105z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 罗马字符data: h
 */
define("char/data/roman/h", [], {
    path: "M9.169,15.481c0,0.936,0.096,1.032,1.632,1.032v0.624c-0.576-0.048-1.656-0.048-2.28-0.048s-1.68,0-2.256,0.048v-0.624   c1.536,0,1.632-0.12,1.632-1.032V9.745c0-1.152-0.192-2.736-1.968-2.736c-1.68,0-3.024,1.656-3.024,3.864v4.608   c0,0.936,0.096,1.032,1.632,1.032v0.624C3.96,17.09,2.88,17.09,2.256,17.09s-1.68,0-2.256,0.048v-0.624   c1.536,0,1.632-0.12,1.632-1.032V2.665c0-1.152-0.216-1.296-1.632-1.296V0.744L2.856,0.48v8.521H2.88   c0.288-0.792,1.248-2.376,3.216-2.376c2.832,0,3.072,1.992,3.072,3.216V15.481z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 罗马字符data: i
 */
define("char/data/roman/i", [], {
    path: "M3.005,6.625v8.88c0,0.864,0.048,1.008,1.464,1.008v0.624C3.917,17.09,2.933,17.09,2.357,17.09c-0.6,0-1.632,0-2.208,0.048   v-0.624c1.536,0,1.632-0.12,1.632-1.032V8.809c0-1.152-0.192-1.296-1.536-1.296V6.889L3.005,6.625z M2.069,3.336   c-0.552,0-0.984-0.456-0.984-0.984c0-0.552,0.456-0.984,0.984-0.984c0.552,0,0.984,0.456,0.984,0.984   C3.053,2.904,2.597,3.336,2.069,3.336z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 5, 27 ]
});
/**
 * 罗马字符data: j
 */
define("char/data/roman/j", [], {
    path: "M5.041,6.625v11.833c0,2.04-1.224,3.552-2.88,3.552c-1.224,0-2.28-0.624-2.28-1.584c0-0.528,0.336-0.888,0.864-0.888   c0.552,0,0.864,0.408,0.864,0.864c0,0.672-0.6,0.84-0.768,0.864c0.528,0.336,1.176,0.36,1.344,0.36   c1.416,0,1.632-1.872,1.632-3.072V8.833c0-1.152-0.192-1.32-1.776-1.32V6.889L5.041,6.625z M4.057,3.336   c-0.552,0-0.984-0.456-0.984-0.984c0-0.552,0.456-0.984,0.984-0.984c0.552,0,0.984,0.456,0.984,0.984   C5.041,2.904,4.585,3.336,4.057,3.336z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 7, 27 ]
});
/**
 * 罗马字符data: k
 */
define("char/data/roman/k", [], {
    path: "M8.544,15.242c0.72,1.056,0.984,1.272,2.112,1.272v0.624c-0.408-0.024-1.296-0.048-1.728-0.048c-0.6,0-1.632,0-2.208,0.048   v-0.624c0.288,0,0.72-0.072,0.72-0.504c0-0.312-0.24-0.648-0.528-1.08l-2.424-3.601l-1.656,1.512v2.64   c0,0.936,0.096,1.032,1.632,1.032v0.624C3.888,17.09,2.832,17.09,2.232,17.09s-1.656,0-2.232,0.048v-0.624   c1.536,0,1.632-0.12,1.632-1.032V2.665c0-1.152-0.216-1.296-1.632-1.296V0.744L2.856,0.48v11.761L6.48,8.929   c0.024,0,0.504-0.456,0.504-0.937c0-0.336-0.24-0.528-0.576-0.552V6.817c0.648,0.048,1.68,0.048,2.352,0.048l1.176-0.024   c0.024-0.024,0.072-0.024,0.216-0.024v0.624C9.529,7.465,8.665,7.585,7.296,8.737c-0.216,0.192-1.92,1.752-1.92,1.8   c0,0.072,0.12,0.216,0.144,0.264L8.544,15.242z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 罗马字符data: l
 */
define("char/data/roman/l", [], {
    path: "M2.856,15.481c0,0.936,0.096,1.032,1.632,1.032v0.624C3.913,17.09,2.856,17.09,2.232,17.09c-0.6,0-1.656,0-2.232,0.048   v-0.624c1.536,0,1.632-0.12,1.632-1.032V2.665c0-1.152-0.216-1.296-1.632-1.296V0.744L2.856,0.48V15.481z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 5, 27 ]
});
/**
 * 罗马字符data: m
 */
define("char/data/roman/m", [], {
    path: "M15.434,15.481c0,0.936,0.096,1.032,1.632,1.032v0.624c-0.576-0.048-1.656-0.048-2.28-0.048s-1.68,0-2.256,0.048v-0.624   c1.536,0,1.632-0.12,1.632-1.032V9.745c0-1.152-0.192-2.736-1.968-2.736c-1.68,0-3.024,1.656-3.024,3.864v4.608   c0,0.936,0.096,1.032,1.632,1.032v0.624c-0.576-0.048-1.656-0.048-2.28-0.048s-1.68,0-2.256,0.048v-0.624   c1.536,0,1.632-0.12,1.632-1.032V9.745c0-1.152-0.192-2.736-1.968-2.736c-1.68,0-3.024,1.656-3.024,3.864v4.608   c0,0.936,0.096,1.032,1.632,1.032v0.624C3.96,17.09,2.88,17.09,2.256,17.09s-1.68,0-2.256,0.048v-0.624   c1.536,0,1.632-0.12,1.632-1.032V8.809c0-1.152-0.216-1.296-1.632-1.296V6.889l2.833-0.264v2.424h0.024   c0.36-0.96,1.344-2.424,3.24-2.424c1.344,0,2.76,0.432,3.048,2.4h0.024c0.432-1.296,1.56-2.4,3.192-2.4   c2.856,0,3.072,2.016,3.072,3.216V15.481z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 18, 27 ]
});
/**
 * 罗马字符data: n
 */
define("char/data/roman/n", [], {
    path: "M9.169,15.481c0,0.936,0.096,1.032,1.632,1.032v0.624c-0.576-0.048-1.656-0.048-2.28-0.048s-1.68,0-2.256,0.048v-0.624   c1.536,0,1.632-0.12,1.632-1.032V9.745c0-1.152-0.192-2.736-1.968-2.736c-1.68,0-3.024,1.656-3.024,3.864v4.608   c0,0.936,0.096,1.032,1.632,1.032v0.624C3.96,17.09,2.88,17.09,2.256,17.09s-1.68,0-2.256,0.048v-0.624   c1.536,0,1.632-0.12,1.632-1.032V8.809c0-1.152-0.216-1.296-1.632-1.296V6.889l2.833-0.264v2.424h0.024   c0.36-0.96,1.344-2.424,3.24-2.424c2.832,0,3.072,1.992,3.072,3.216V15.481z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 罗马字符data: o
 */
define("char/data/roman/o", [], {
    path: "M4.849,17.33C2.232,17.33,0,15.025,0,12.001c0-3.072,2.232-5.473,4.849-5.473s4.848,2.4,4.848,5.473   C9.697,15.025,7.465,17.33,4.849,17.33z M7.465,15.337c0.648-1.152,0.696-2.592,0.696-3.528c0-0.744,0-2.328-0.744-3.456   c-0.576-0.84-1.488-1.44-2.568-1.44c-1.224,0-2.16,0.768-2.64,1.561c-0.624,1.08-0.672,2.328-0.672,3.336   c0,1.056,0.072,2.4,0.672,3.48c0.552,0.936,1.512,1.608,2.64,1.608C5.761,16.897,6.792,16.441,7.465,15.337z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 罗马字符data: p
 */
define("char/data/roman/p", [], {
    path: "M4.536,21.818C3.96,21.77,2.88,21.77,2.256,21.77c-0.625,0-1.68,0-2.256,0.048v-0.624c1.536,0,1.632-0.12,1.632-1.032   V8.809c0-1.152-0.216-1.296-1.632-1.296V6.889l2.856-0.264v1.752c0.672-0.96,1.848-1.752,3.289-1.752   c2.472,0,4.561,2.304,4.561,5.328c0,3.264-2.424,5.376-4.825,5.376c-1.272,0-2.28-0.648-2.976-1.656v4.489   c0,0.936,0.096,1.032,1.632,1.032V21.818z M2.904,14.354c0,0.384,0,0.528,0.312,1.056c0.72,1.128,1.656,1.536,2.52,1.536   c1.896,0,3.433-2.232,3.433-4.969c0-2.736-1.44-4.92-3.192-4.92c-1.2,0-2.016,0.72-2.136,0.816   C2.904,8.761,2.904,9.265,2.904,9.601V14.354z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 罗马字符data: q
 */
define("char/data/roman/q", [], {
    path: "M9.073,20.162c0,0.936,0.096,1.032,1.632,1.032v0.624c-0.576-0.048-1.656-0.048-2.28-0.048s-1.68,0-2.256,0.048v-0.624   c1.536,0,1.632-0.12,1.632-1.032v-4.776c-0.312,0.528-1.344,1.944-3.192,1.944C2.208,17.33,0,15.122,0,11.977   c0-3.168,2.352-5.352,4.8-5.352c1.608,0,2.616,1.104,3.168,2.376l0.72-2.376h0.384V20.162z M7.849,10.489   c0-1.248-0.96-3.433-2.88-3.433c-1.848,0-3.432,2.136-3.432,4.945c0,2.664,1.392,4.944,3.192,4.944c0.576,0,1.44-0.192,2.184-1.032   c0.072-0.072,0.936-1.032,0.936-2.064V10.489z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 罗马字符data: r
 */
define("char/data/roman/r", [], {
    path: "M2.409,15.53c0,1.08,0.288,1.08,2.017,1.08v0.624c-0.648-0.048-1.873-0.048-2.568-0.048c-0.624,0-1.728,0-2.304,0.048   V16.61c1.536,0,1.632-0.12,1.632-1.032V8.906c0-1.152-0.216-1.296-1.632-1.296V6.985l2.784-0.264v2.616h0.024   c0.24-0.84,1.032-2.616,2.856-2.616c0.816,0,1.584,0.48,1.584,1.248c0,0.672-0.528,0.84-0.816,0.84c-0.36,0-0.816-0.24-0.816-0.816   c0-0.624,0.528-0.792,0.528-0.792C5.529,7.129,5.361,7.105,5.193,7.105c-1.8,0-2.785,2.16-2.785,4.464V15.53z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 8, 27 ]
});
/**
 * 罗马字符data: s
 */
define("char/data/roman/s", [], {
    path: "M6.816,9.697c0,0.408,0,0.48-0.216,0.48c-0.072,0-0.192-0.024-0.216-0.144c-0.048-0.768-0.192-3.168-2.76-3.168   c-2.424,0-2.76,1.32-2.76,1.944c0,1.464,1.68,1.8,3,2.088c1.008,0.192,1.848,0.36,2.568,1.104c0.312,0.288,0.96,0.936,0.96,2.16   c0,1.872-1.272,3.168-3.648,3.168c-1.344,0-2.184-0.624-2.664-1.272c-0.144,0.24-0.504,0.816-0.648,1.032   c-0.12,0.192-0.144,0.216-0.264,0.216C0.024,17.306,0,17.282,0,16.85v-3.456c0-0.48,0.024-0.504,0.216-0.504   c0.192,0,0.192,0.024,0.264,0.36c0.432,2.112,1.176,3.696,3.264,3.696c2.208,0,2.784-1.296,2.784-2.304   c0-0.864-0.528-1.392-0.84-1.68c-0.504-0.432-1.032-0.528-2.544-0.84C2.448,11.977,0,11.473,0,9.313   c0-1.392,0.96-2.784,3.624-2.784c0.408,0,1.488,0.024,2.256,0.84c0.072-0.096,0.288-0.336,0.36-0.432   c0.288-0.36,0.312-0.384,0.408-0.384c0.144,0,0.168,0.024,0.168,0.456V9.697z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 8, 27 ]
});
/**
 * 罗马字符data: t
 */
define("char/data/roman/t", [], {
    path: "M3.36,14.233c0,2.184,0.96,2.664,1.656,2.664c1.008,0,1.656-1.104,1.656-2.76v-1.344h0.432v1.368   c0,1.776-0.816,3.168-2.232,3.168c-2.784,0-2.784-2.688-2.784-3.144V7.441H0V7.057c2.04-0.048,2.88-2.208,2.928-4.68H3.36v4.44   h3.36v0.624H3.36V14.233z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 8, 27 ]
});
/**
 * 罗马字符data: u
 */
define("char/data/roman/u", [], {
    path: "M9.169,6.625v8.592c0,1.152,0.216,1.296,1.632,1.296v0.624L7.945,17.33v-2.232H7.921c-0.192,0.504-0.984,2.232-3.024,2.232   c-1.728,0-2.328-0.624-2.64-0.936c-0.624-0.672-0.624-1.704-0.624-3.312V8.473C1.608,7.513,0.96,7.513,0,7.513V6.889l2.904-0.264   v7.896c0,1.248,0.168,2.424,2.136,2.424c1.776,0,2.856-1.752,2.856-3.769V8.809c0-1.152-0.216-1.296-1.632-1.296V6.889L9.169,6.625   z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 罗马字符data: A
 */
define("char/data/roman/ua", [], {
    path: "M13.489,15.625c0.312,0.888,0.744,0.888,2.017,0.888v0.624c-0.576-0.048-1.776-0.048-2.4-0.048   c-0.744,0-1.992,0-2.688,0.048v-0.624c0.456,0,1.488,0,1.488-0.648c0-0.096,0-0.144-0.12-0.432l-1.44-4.081H4.056L2.784,14.93   c-0.048,0.144-0.096,0.264-0.096,0.48c0,0.288,0.168,1.056,1.296,1.104v0.624C3.408,17.09,2.448,17.09,1.848,17.09   c-0.456,0-1.417,0-1.848,0.048v-0.624c0.84,0,1.8-0.264,2.256-1.56L7.344,0.552c0.12-0.312,0.168-0.384,0.408-0.384   c0.24,0,0.288,0.072,0.408,0.384L13.489,15.625z M4.272,10.729h5.857L7.2,2.473L4.272,10.729z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 罗马字符data: B
 */
define("char/data/roman/ub", [], {
    path: "M8.202,0.744c3.096,0,5.064,2.041,5.064,4.033c0,1.824-1.608,3.36-3.913,3.816c2.568,0.168,4.537,2.016,4.537,4.177   c0,2.184-1.992,4.368-5.064,4.368H0.569v-0.624c1.656,0,1.92,0,1.92-1.08V2.448c0-1.08-0.264-1.08-1.92-1.08V0.744H8.202z    M7.458,8.425c2.592,0,4.056-1.824,4.056-3.648c0-1.488-1.056-3.409-3.432-3.409H5.009c-0.96,0-1.008,0.12-1.008,0.936v6.121H7.458   z M8.129,16.514c2.616,0,3.984-2.016,3.984-3.769c0-1.752-1.2-3.936-3.672-3.936h-4.44v6.769c0,0.816,0.048,0.936,1.008,0.936   H8.129z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 14, 27 ]
});
/**
 * 罗马字符data: C
 */
define("char/data/roman/uc", [], {
    path: "M13.801,6.529c0,0.432,0,0.48-0.264,0.48c-0.216,0-0.216-0.048-0.264-0.336c-0.456-3.336-2.424-5.688-5.137-5.688   c-2.328,0-6.313,1.68-6.313,7.945c0,6.24,3.913,7.968,6.36,7.968c2.592,0,4.993-2.064,5.185-5.424   c0.024-0.216,0.024-0.288,0.216-0.288c0.216,0,0.216,0.096,0.216,0.336c0,2.76-2.28,6.001-5.953,6.001   C3.72,17.522,0,13.921,0,8.929C0,3.984,3.72,0.36,7.825,0.36c1.848,0,3.289,0.864,4.464,2.352l1.056-2.016   c0.168-0.288,0.192-0.312,0.288-0.312c0.144,0,0.168,0.024,0.168,0.456V6.529z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 14, 27 ]
});
/**
 * 罗马字符data: D
 */
define("char/data/roman/ud", [], {
    path: "M8.454,0.194c3.912,0,6.96,3.792,6.96,8.329c0,4.513-3.096,8.065-6.96,8.065H0.821v-0.624c1.656,0,1.92,0,1.92-1.08V1.898   c0-1.08-0.264-1.08-1.92-1.08V0.194H8.454z M7.974,15.963c2.28,0,3.648-1.296,4.224-2.04c0.456-0.648,1.44-2.016,1.44-5.401   c0-6.528-3.672-7.705-5.665-7.705H5.285c-0.96,0-1.008,0.12-1.008,0.936v13.273c0,0.816,0.048,0.936,1.008,0.936H7.974z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 罗马字符data: E
 */
define("char/data/roman/ue", [], {
    path: "M12.481,17.138H0v-0.624c1.656,0,1.92,0,1.92-1.08V2.497c0-1.08-0.264-1.08-1.92-1.08V0.792h12.145l0.576,5.304h-0.432   c-0.336-3.192-0.768-4.68-4.488-4.68H4.512c-0.96,0-1.008,0.12-1.008,0.936v5.977H5.76c2.256,0,2.473-0.816,2.473-2.809h0.432   v6.241H8.233c0-1.992-0.216-2.808-2.473-2.808H3.504v6.625c0,0.816,0.048,0.936,1.008,0.936h3.336c4.225,0,4.537-1.92,5.064-5.449   h0.432L12.481,17.138z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 14, 27 ]
});
/**
 * 罗马字符data: F
 */
define("char/data/roman/uf", [], {
    path: "M12.409,6.097h-0.432c-0.336-3.192-0.744-4.68-4.369-4.68H4.512c-0.96,0-1.008,0.12-1.008,0.936v6.289h2.16   c2.232,0,2.448-0.792,2.448-2.809h0.432v6.241H8.113c0-2.016-0.216-2.808-2.448-2.808h-2.16v6.145c0,0.864,0.048,1.104,1.872,1.104   h0.528v0.624C4.92,17.09,3.769,17.09,2.784,17.09c-0.744,0-2.088,0-2.784,0.048v-0.624c1.656,0,1.92,0,1.92-1.08V2.497   c0-1.08-0.264-1.08-1.92-1.08V0.792h11.833L12.409,6.097z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 13, 27 ]
});
/**
 * 罗马字符data: G
 */
define("char/data/roman/ug", [], {
    path: "M14.12,17.079c0,0.432-0.024,0.456-0.144,0.456s-0.792-0.672-1.2-1.656c-0.744,1.368-2.64,2.064-4.584,2.064   c-4.224,0-7.873-3.672-7.873-8.593c0-4.945,3.72-8.569,7.825-8.569c1.848,0,3.289,0.864,4.464,2.352l1.056-2.016   c0.168-0.288,0.192-0.312,0.288-0.312c0.144,0,0.168,0.024,0.168,0.456V6.95c0,0.432,0,0.48-0.264,0.48   c-0.216,0-0.216-0.048-0.264-0.336c-0.456-3.336-2.424-5.688-5.137-5.688c-2.328,0-6.313,1.68-6.313,7.945   c0,6.264,4.056,7.968,6.529,7.968c0.744,0,3.864-0.216,3.864-2.856v-1.584c0-0.864-0.048-1.128-2.112-1.128h-0.72v-0.624   c0.912,0.024,2.784,0.048,3.457,0.048c0.648,0,1.944,0,2.52-0.048v0.624c-1.488,0-1.56,0.12-1.56,1.032V17.079z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 罗马字符data: H
 */
define("char/data/roman/uh", [], {
    path: "M12.241,15.434c0,1.08,0.264,1.08,1.92,1.08v0.624c-0.696-0.048-1.968-0.048-2.712-0.048c-0.744,0-2.017,0-2.712,0.048   v-0.624c1.656,0,1.92,0,1.92-1.08V8.929H3.504v6.504c0,1.08,0.264,1.08,1.92,1.08v0.624C4.729,17.09,3.456,17.09,2.712,17.09   c-0.744,0-2.016,0-2.712,0.048v-0.624c1.656,0,1.92,0,1.92-1.08V2.448c0-1.08-0.264-1.08-1.92-1.08V0.744   c0.696,0.048,1.968,0.048,2.712,0.048c0.744,0,2.016,0,2.712-0.048v0.624c-1.656,0-1.92,0-1.92,1.08v5.857h7.152V2.448   c0-1.08-0.264-1.08-1.92-1.08V0.744c0.696,0.048,1.968,0.048,2.712,0.048c0.744,0,2.016,0,2.712-0.048v0.624   c-1.656,0-1.92,0-1.92,1.08V15.434z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 15, 27 ]
});
/**
 * 罗马字符data: I
 */
define("char/data/roman/ui", [], {
    path: "M3.601,15.434c0,1.08,0.288,1.08,2.016,1.08v0.624C4.849,17.09,3.625,17.09,2.809,17.09c-0.816,0-2.041,0-2.809,0.048   v-0.624c1.729,0,2.016,0,2.016-1.08V2.448c0-1.08-0.288-1.08-2.016-1.08V0.744c0.768,0.048,1.992,0.048,2.809,0.048   c0.816,0,2.04,0,2.808-0.048v0.624c-1.728,0-2.016,0-2.016,1.08V15.434z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 6, 27 ]
});
/**
 * 罗马字符data: J
 */
define("char/data/roman/uj", [], {
    path: "M5.809,2.497c0-0.864-0.048-1.128-1.92-1.128H3.313V0.744c1.008,0.048,2.112,0.048,3.12,0.048   c0.6,0,2.304-0.048,2.352-0.048v0.624c-0.744,0-1.296,0-1.392,0.456C7.345,1.968,7.345,2.641,7.345,3.048v10.081   c0,0.816,0,0.864-0.024,1.032c-0.288,2.016-2.016,3.36-3.888,3.36C1.464,17.522,0,16.058,0,14.45c0-0.696,0.456-1.056,1.032-1.056   c0.6,0,1.008,0.432,1.008,1.008c0,0.72-0.576,1.032-1.032,1.032c-0.096,0-0.216-0.024-0.312-0.048   c0.624,1.464,2.064,1.752,2.688,1.752c1.224,0,2.424-1.32,2.424-3.528V2.497z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 9, 27 ]
});
/**
 * 罗马字符data: K
 */
define("char/data/roman/uk", [], {
    path: "M12.985,15.266c0.72,1.104,1.08,1.248,2.232,1.248v0.624c-0.552-0.048-1.536-0.048-2.112-0.048   c-0.792,0-1.896,0-2.664,0.048v-0.624c0.312,0,0.984,0,0.984-0.624c0-0.24-0.168-0.552-0.312-0.792L6.577,8.137l-3.072,3.048v4.249   c0,1.08,0.264,1.08,1.92,1.08v0.624C4.729,17.09,3.456,17.09,2.712,17.09c-0.744,0-2.016,0-2.712,0.048v-0.624   c1.656,0,1.92,0,1.92-1.08V2.448c0-1.08-0.264-1.08-1.92-1.08V0.744c0.696,0.048,1.968,0.048,2.712,0.048   c0.744,0,2.016,0,2.712-0.048v0.624c-1.656,0-1.92,0-1.92,1.08v8.137l7.969-7.993c0.096-0.144,0.192-0.408,0.192-0.576   c0-0.168-0.096-0.6-0.72-0.648V0.744c0.624,0.048,1.752,0.048,2.4,0.048c0.48,0,1.08-0.024,1.56-0.048v0.624   c-1.344,0.048-2.256,0.72-3.12,1.56L7.633,7.081L12.985,15.266z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 罗马字符data: L
 */
define("char/data/roman/ul", [], {
    path: "M11.209,17.138H0v-0.624c1.656,0,1.92,0,1.92-1.08V2.448c0-1.08-0.264-1.08-1.92-1.08V0.744   c0.696,0.048,2.04,0.048,2.784,0.048c0.984,0,2.136,0,3.12-0.048v0.624H5.376c-1.824,0-1.872,0.24-1.872,1.104v13.105   c0,0.816,0.048,0.936,1.008,0.936h2.232c4.104,0,4.417-3.072,4.608-5.449h0.432L11.209,17.138z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 罗马字符data: M
 */
define("char/data/roman/um", [], {
    path: "M8.929,15.193l5.185-14.065c0.144-0.36,0.168-0.384,0.672-0.384h3.048v0.624c-1.656,0-1.92,0-1.92,1.08v12.985   c0,1.08,0.264,1.08,1.92,1.08v0.624c-0.648-0.048-1.968-0.048-2.664-0.048c-0.696,0-1.992,0-2.64,0.048v-0.624   c1.656,0,1.92,0,1.92-1.08V1.344h-0.024L8.737,16.753c-0.096,0.24-0.144,0.384-0.336,0.384s-0.24-0.144-0.336-0.384L2.424,1.464   H2.4v13.321c0,0.6,0,1.728,1.92,1.728v0.624C3.769,17.09,2.76,17.09,2.16,17.09s-1.608,0-2.16,0.048v-0.624   c1.92,0,1.92-1.128,1.92-1.728V2.448c0-1.08-0.264-1.08-1.92-1.08V0.744h3.072c0.504,0,0.528,0.024,0.672,0.384L8.929,15.193z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 18, 27 ]
});
/**
 * 罗马字符data: N
 */
define("char/data/roman/un", [], {
    path: "M11.761,14.209V3.097c0-0.6,0-1.729-1.92-1.729V0.744c0.552,0.048,1.56,0.048,2.16,0.048s1.608,0,2.16-0.048v0.624   c-1.92,0-1.92,1.128-1.92,1.729V16.61c0,0.456,0,0.528-0.24,0.528c-0.12,0-0.192,0-0.36-0.288L2.736,2.28   C2.568,2.041,2.568,1.992,2.4,1.848v12.938c0,0.6,0,1.728,1.92,1.728v0.624C3.769,17.09,2.76,17.09,2.16,17.09s-1.608,0-2.16,0.048   v-0.624c1.92,0,1.92-1.128,1.92-1.728V1.512C1.848,1.488,1.416,1.368,0.456,1.368H0V0.744h3.048c0.456,0,0.48,0.024,0.648,0.288   L11.761,14.209z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 15, 27 ]
});
/**
 * 罗马字符data: O
 */
define("char/data/roman/uo", [], {
    path: "M7.513,17.522C3.504,17.522,0,13.85,0,8.977S3.457,0.36,7.537,0.36c3.984,0,7.513,3.696,7.513,8.617   C15.049,13.777,11.617,17.522,7.513,17.522z M13.225,8.665c0-5.593-3.168-7.873-5.712-7.873C5.088,0.792,1.824,3,1.824,8.665   c0,5.688,2.976,8.425,5.712,8.425C10.177,17.09,13.225,14.45,13.225,8.665z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 罗马字符data: P
 */
define("char/data/roman/up", [], {
    path: "M3.143,15.425c0,1.08,0.264,1.08,1.92,1.08v0.624c-0.696-0.048-1.968-0.048-2.712-0.048s-2.016,0-2.712,0.048v-0.624   c1.656,0,1.92,0,1.92-1.08V2.44c0-1.08-0.264-1.08-1.92-1.08V0.736h7.345c3.144,0,5.353,2.112,5.353,4.393S10.08,9.425,6.983,9.425   h-3.84V15.425z M6.527,8.921c2.928,0,3.984-1.608,3.984-3.792c0-1.992-0.888-3.769-3.984-3.769H4.103   c-0.96,0-1.008,0.12-1.008,0.936v6.625H6.527z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 14, 27 ]
});
/**
 * 罗马字符data: Q
 */
define("char/data/roman/uq", [], {
    path: "M12.625,19.994c0.768,0,2.064-0.48,2.232-2.785c0-0.048,0.024-0.216,0.144-0.216c0.168,0,0.168,0.168,0.168,0.408   c0,0.672-0.12,4.416-2.664,4.416c-2.064,0-2.329-1.752-2.736-4.68c-0.912,0.312-1.68,0.384-2.232,0.384   C3.457,17.522,0,13.777,0,8.977C0,4.104,3.457,0.36,7.537,0.36c3.984,0,7.513,3.696,7.513,8.617c0,3.6-1.944,6.721-4.8,7.945   C10.705,18.722,11.209,19.994,12.625,19.994z M5.761,15.578c0-0.912,0.648-1.92,1.8-1.92c1.561,0,2.136,1.44,2.497,2.665   c1.608-1.032,3.216-3.289,3.216-7.345c0-5.617-3.072-8.185-5.761-8.185c-2.592,0-5.736,2.472-5.736,8.185   c0,4.464,1.968,7.128,4.464,7.92C5.977,16.585,5.761,16.129,5.761,15.578z M7.561,14.042c-0.912,0-1.416,0.792-1.416,1.536   c0,0.528,0.312,1.512,1.392,1.512c0.408,0,1.176-0.048,2.136-0.552C9.481,15.41,9.097,14.042,7.561,14.042z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 罗马字符data: R
 */
define("char/data/roman/ur", [], {
    path: "M11.353,12.77c0.048,0.528,0.096,0.888,0.168,1.392c0.144,1.464,0.288,2.976,1.608,2.976c0.744,0,1.44-0.528,1.56-2.088   c0-0.096,0.024-0.24,0.216-0.24c0.216,0,0.216,0.168,0.216,0.312c0,0.408-0.264,2.4-2.041,2.4c-0.528,0-1.752-0.096-2.664-1.081   c-0.72-0.816-0.72-1.632-0.72-3.24c0-1.632,0-2.28-0.96-3.216C8.401,9.673,7.633,9.121,6.265,9.121H3.457v6.313   c0,1.08,0.264,1.08,1.92,1.08v0.624C4.681,17.09,3.432,17.09,2.688,17.09c-0.744,0-1.992,0-2.688,0.048v-0.624   c1.656,0,1.92,0,1.92-1.08V2.448c0-1.08-0.264-1.08-1.92-1.08V0.744h6.457c3.36,0,5.905,2.041,5.905,4.296   c0,1.92-1.92,3.457-4.201,3.913C11.017,9.817,11.209,11.569,11.353,12.77z M10.537,5.041c0-2.976-2.328-3.672-4.32-3.672H4.464   c-0.96,0-1.008,0.12-1.008,0.936v6.433h2.736C7.993,8.737,10.537,8.137,10.537,5.041z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 罗马字符data: S
 */
define("char/data/roman/us", [], {
    path: "M9.409,5.713c0,0.408,0,0.48-0.216,0.48c-0.168,0-0.192-0.024-0.264-0.456c-0.36-3-1.944-4.8-4.488-4.8   c-2.04,0-3.288,1.704-3.288,3.264c0,0.768,0.24,1.536,0.912,2.28c0.6,0.648,1.152,0.816,2.448,1.152   c1.344,0.336,1.392,0.336,1.56,0.408c1.152,0.288,2.232,0.576,3.24,2.112c0.264,0.432,0.72,1.392,0.72,2.64   c0,2.544-1.849,4.729-4.465,4.729c-1.152,0-3.168-0.336-4.368-1.92c-0.456,0.912-0.456,0.96-0.48,1.032   c-0.336,0.744-0.384,0.864-0.552,0.864C0.024,17.498,0,17.474,0,17.042v-4.848c0-0.48,0.024-0.504,0.216-0.504   c0.168,0,0.192,0.024,0.216,0.408c0.168,3.36,2.568,4.8,5.136,4.8c2.088,0,3.313-1.848,3.313-3.576c0-1.344-0.72-2.784-2.088-3.36   c-0.24-0.096-1.44-0.408-2.16-0.6c-1.92-0.504-2.76-0.696-3.648-1.8C0.168,6.553,0,5.497,0,4.752C0,2.304,1.968,0.36,4.417,0.36   c1.512,0,2.904,0.6,3.816,1.92l0.72-1.584C9.049,0.48,9.097,0.384,9.241,0.384S9.409,0.408,9.409,0.84V5.713z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 11, 27 ]
});
/**
 * 罗马字符data: T
 */
define("char/data/roman/ut", [], {
    path: "M14.666,6.121h-0.432c-0.312-3.984-0.672-4.68-4.344-4.68c-0.432,0-1.128,0-1.32,0.024   C8.137,1.561,8.137,1.848,8.137,2.376v13.009c0,0.864,0.072,1.128,2.064,1.128h0.672v0.624c-1.152-0.024-2.352-0.048-3.528-0.048   c-1.176,0-2.376,0.024-3.528,0.048v-0.624h0.672c1.992,0,2.064-0.264,2.064-1.128V2.376c0-0.552,0-0.84-0.456-0.912   C5.905,1.44,5.208,1.44,4.776,1.44c-3.696,0-4.032,0.696-4.344,4.68H0l0.408-5.304h13.849L14.666,6.121z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 15, 27 ]
});
/**
 * 罗马字符data: U
 */
define("char/data/roman/uu", [], {
    path: "M11.737,3.097c0-0.6,0-1.729-1.92-1.729V0.744c0.552,0.048,1.584,0.048,2.184,0.048s1.608,0,2.16-0.048v0.624   c-0.696,0-1.92,0.144-1.92,1.488v9.121c0,2.353-1.8,5.545-4.92,5.545c-2.785,0-5.401-2.424-5.401-5.881V2.448   c0-1.08-0.264-1.08-1.92-1.08V0.744c0.696,0.048,1.968,0.048,2.712,0.048c0.744,0,2.016,0,2.712-0.048v0.624   c-1.656,0-1.92,0-1.92,1.08v9.313c0,0.84,0.096,2.328,0.864,3.48c0.672,1.008,1.776,1.656,3,1.656c2.28,0,4.368-2.04,4.368-5.256   V3.097z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 15, 27 ]
});
/**
 * 罗马字符data: V
 */
define("char/data/roman/uv", [], {
    path: "M8.473,17.138c-0.12,0.336-0.144,0.384-0.408,0.384s-0.288-0.048-0.408-0.384L1.944,2.232C1.656,1.464,1.392,1.368,0,1.368   V0.744c0.576,0.048,1.704,0.048,2.328,0.048c0.792,0,1.92,0,2.688-0.048v0.624c-0.504,0-1.464,0-1.464,0.648   c0,0.12,0.048,0.24,0.12,0.408l4.945,12.937l4.728-12.313c0.072-0.192,0.144-0.36,0.144-0.624c0-0.144-0.048-0.984-1.248-1.056   V0.744c0.552,0.048,1.536,0.048,2.112,0.048c0.6,0,1.224,0,1.776-0.048v0.624c-1.608,0.024-1.992,1.056-2.208,1.584L8.473,17.138z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 罗马字符data: W
 */
define("char/data/roman/uw", [], {
    path: "M16.01,17.114c-0.12,0.36-0.12,0.408-0.336,0.408c-0.192,0-0.264-0.048-0.36-0.384l-4.08-13.009L7.153,17.138   c-0.096,0.336-0.168,0.384-0.36,0.384c-0.216,0-0.216-0.048-0.336-0.408L1.776,2.28C1.536,1.512,1.44,1.368,0,1.368V0.744   c0.576,0.048,1.632,0.048,2.256,0.048c0.744,0,1.944,0,2.64-0.048v0.624c-0.48,0-1.536,0-1.536,0.672c0,0.048,0,0.096,0.12,0.432   L7.393,14.93l3.528-11.209c0.024-0.072,0.072-0.216,0.072-0.312c0-0.072-0.384-1.32-0.48-1.536   c-0.24-0.432-0.528-0.504-1.632-0.504V0.744c0.552,0.048,1.632,0.048,2.232,0.048c0.744,0,1.944,0,2.64-0.048v0.624   c-0.456,0-1.512,0-1.512,0.672c0,0.096,0.024,0.192,0.096,0.432l3.912,12.481l3.72-11.857c0.096-0.264,0.12-0.36,0.12-0.528   c0-0.576-0.456-1.176-1.536-1.2V0.744c0.576,0.048,1.632,0.048,2.232,0.048c0.432,0,1.272-0.024,1.68-0.048v0.624   c-1.392,0.048-1.752,0.888-1.968,1.536L16.01,17.114z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 23, 27 ]
});
/**
 * 罗马字符data: X
 */
define("char/data/roman/ux", [], {
    path: "M13.729,15.722c0.48,0.672,0.72,0.792,2.256,0.792v0.624c-0.576-0.048-1.776-0.048-2.4-0.048c-0.792,0-1.968,0-2.736,0.048   v-0.624c0.84-0.048,1.056-0.456,1.056-0.648c0-0.072,0-0.144-0.192-0.408L7.537,9.361l-3.84,5.569   c-0.12,0.168-0.24,0.336-0.24,0.648c0,0.384,0.216,0.864,0.96,0.936v0.624c-0.6-0.048-1.728-0.048-2.376-0.048   c-0.576,0-1.488,0-2.04,0.048v-0.624c0.456,0,2.016-0.024,3.048-1.512l4.176-6.072L2.592,2.161c-0.528-0.744-0.96-0.792-2.28-0.792   V0.744c0.576,0.048,1.776,0.048,2.4,0.048c0.792,0,1.968,0,2.736-0.048v0.624C4.656,1.392,4.393,1.8,4.393,2.017   c0,0.072,0.024,0.144,0.192,0.408l3.552,5.185l3.168-4.584c0.168-0.24,0.288-0.432,0.288-0.72c0-0.384-0.192-0.864-0.96-0.936   V0.744c0.6,0.048,1.584,0.048,2.376,0.048c0.576,0,1.488,0,2.04-0.048v0.624c-1.968,0.024-2.688,1.056-3.048,1.56L8.449,8.041   L13.729,15.722z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 罗马字符data: Y
 */
define("char/data/roman/uy", [], {
    path: "M9.025,10.585v4.752c0,1.176,0.216,1.176,1.944,1.176v0.624c-0.696-0.048-1.968-0.048-2.712-0.048s-1.992,0-2.688,0.048   v-0.624c1.656,0,1.92,0,1.92-1.08v-4.849L2.185,2.136C1.752,1.44,1.368,1.368,0,1.368V0.744c0.576,0.048,1.776,0.048,2.4,0.048   c0.792,0,1.968,0,2.736-0.048v0.624c-0.336,0-1.176,0-1.176,0.48c0,0.168,0.024,0.192,0.192,0.48l4.729,7.561l4.32-6.937   c0.192-0.312,0.312-0.504,0.312-0.792c0-0.456-0.312-0.769-0.912-0.792V0.744c0.576,0.048,1.536,0.048,2.136,0.048   s1.224,0,1.776-0.048v0.624c-0.432,0-1.728,0.024-2.665,1.512L9.025,10.585z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 17, 27 ]
});
/**
 * 罗马字符data: Z
 */
define("char/data/roman/uz", [], {
    path: "M1.824,16.466H6c4.584,0,4.752-2.448,4.969-5.593h0.432l-0.336,6.265H0.528c-0.48,0-0.528,0-0.528-0.312   c0-0.168,0-0.192,0.168-0.456L9.457,1.368h-3.96c-3.888,0-4.608,1.944-4.752,4.681H0.312l0.24-5.305h10.201   c0.504,0,0.528,0.024,0.528,0.48L1.824,16.466z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 罗马字符data: v
 */
define("char/data/roman/v", [], {
    path: "M5.952,16.922c-0.144,0.36-0.168,0.408-0.384,0.408c-0.216,0-0.24-0.048-0.384-0.408l-3.48-8.737   C1.416,7.441,0.912,7.441,0,7.441V6.817c0.528,0.048,1.272,0.048,1.92,0.048c0.6,0,1.656,0,2.232-0.048v0.624   c-0.36,0-1.152,0-1.152,0.576c0,0.096,0,0.144,0.144,0.456L6,15.673l2.64-6.672c0.144-0.336,0.144-0.384,0.144-0.6   c0-0.624-0.336-0.912-0.936-0.96V6.817c0.48,0.048,1.272,0.048,1.776,0.048c0.456,0,1.056-0.024,1.512-0.048v0.624   C9.745,7.489,9.361,8.449,9.145,8.977L5.952,16.922z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 罗马字符data: w
 */
define("char/data/roman/w", [], {
    path: "M10.993,16.946c-0.096,0.312-0.168,0.384-0.36,0.384c-0.168,0-0.264-0.048-0.384-0.408L7.752,9.673L5.28,16.922   c-0.12,0.36-0.216,0.408-0.384,0.408c-0.192,0-0.264-0.072-0.36-0.384L1.584,8.305C1.32,7.513,1.056,7.441,0,7.441V6.817   c0.504,0.048,1.32,0.048,1.848,0.048c0.6,0,1.608,0,2.184-0.048v0.624c-0.384,0-1.2,0-1.2,0.624c0,0.072,0,0.12,0.12,0.432   l2.376,6.937l2.208-6.433c-0.504-1.512-0.504-1.56-1.824-1.56V6.817c0.552,0.048,1.176,0.048,1.776,0.048   c0.576,0,1.584,0,2.136-0.048v0.624c-0.384,0-1.2,0-1.2,0.624c0,0.096,0.072,0.288,0.12,0.456l2.448,7.081l2.256-6.529   c0.048-0.168,0.096-0.384,0.096-0.552c0-0.6-0.408-1.032-1.152-1.08V6.817c0.408,0.048,1.44,0.048,1.896,0.048   c0.48,0,0.96-0.024,1.44-0.048v0.624c-0.36,0.024-1.32,0.072-1.8,1.488L10.993,16.946z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 罗马字符data: x
 */
define("char/data/roman/x", [], {
    path: "M9.292,15.722c0.576,0.744,0.936,0.792,2.136,0.792v0.624c-0.528-0.048-1.296-0.048-1.944-0.048   c-0.6,0-1.632,0-2.208,0.048v-0.624c0.384-0.024,0.672-0.216,0.672-0.552c0-0.168-0.288-0.528-0.48-0.792l-2.088-2.712   l-1.992,2.448c-0.216,0.288-0.408,0.552-0.408,0.984c0,0.552,0.384,0.6,0.528,0.624v0.624C3.075,17.09,2.019,17.09,1.539,17.09   c-0.432,0-1.272,0.024-1.68,0.048v-0.624c0.648-0.024,1.776-0.12,2.856-1.416c0.264-0.336,2.352-2.904,2.352-3   c0-0.072-0.12-0.216-0.168-0.264l-2.76-3.576c-0.576-0.72-0.864-0.816-2.16-0.816V6.817c0.528,0.048,1.296,0.048,1.944,0.048   c0.6,0,1.632,0,2.208-0.048v0.624C3.723,7.465,3.483,7.705,3.483,7.993c0,0.12,0,0.168,0.216,0.432l2.112,2.76l1.776-2.256   c0.12-0.168,0.36-0.432,0.36-0.864c0-0.336-0.192-0.576-0.528-0.624V6.817c0.552,0.048,1.296,0.048,1.944,0.048   c0.432,0,1.272-0.024,1.68-0.048v0.624c-1.056,0.024-1.968,0.408-2.76,1.32c-0.672,0.792-1.488,1.848-2.208,2.785L9.292,15.722z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 13, 27 ]
});
/**
 * 罗马字符data: y
 */
define("char/data/roman/y", [], {
    path: "M4.848,19.466c-0.48,1.2-1.344,2.544-2.736,2.544c-1.08,0-2.064-0.696-2.064-1.656c0-0.432,0.264-0.792,0.792-0.792   c0.48,0,0.768,0.36,0.768,0.768c0,0.408-0.24,0.744-0.792,0.792c0.432,0.432,1.032,0.504,1.296,0.504   c1.512,0,2.136-1.656,3.216-4.488L1.752,8.329C1.44,7.561,1.296,7.441,0,7.441V6.817c0.528,0.048,1.296,0.048,1.944,0.048   c0.6,0,1.632,0,2.208-0.048v0.624c-0.576,0-1.128,0.048-1.128,0.576c0,0.024,0,0.192,0.12,0.48L6,15.505l2.616-6.48   c0.12-0.288,0.168-0.408,0.168-0.648c0-0.192-0.024-0.864-0.936-0.936V6.817c0.48,0.048,1.272,0.048,1.776,0.048   c0.456,0,1.056-0.024,1.512-0.048v0.624c-0.336,0-1.416,0.024-2.016,1.488L4.848,19.466z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 罗马字符data: z
 */
define("char/data/roman/z", [], {
    path: "M1.512,16.706h3.072c2.928,0,3.24-1.224,3.432-3.888h0.432l-0.336,4.32H0.528C0.024,17.138,0,17.114,0,16.778l6.865-9.577   H3.937c-2.76,0-3.024,1.008-3.192,3.336H0.312l0.24-3.72h7.296c0.432,0,0.528,0,0.528,0.216c0,0.048,0,0.096-0.192,0.336   L1.512,16.706z",
    offset: {
        x: 1,
        y: 2
    },
    size: [ 9, 27 ]
});
/**
 * 字符data: *
 */
define("char/data/symbol/base/ast", [], {
    path: "M4.705,10.633l2.688-1.944c0.6-0.456,0.648-0.456,0.816-0.456c0.336,0,0.648,0.312,0.648,0.672   c0,0.36-0.192,0.456-0.576,0.648l-3.312,1.608c1.896,0.888,1.944,0.888,3.384,1.608c0.288,0.144,0.504,0.264,0.504,0.624   c0,0.336-0.312,0.672-0.648,0.672c-0.168,0-0.216-0.048-0.432-0.168l-3.072-2.232l0.36,4.033c0,0.456-0.36,0.624-0.648,0.624   c-0.192,0-0.624-0.12-0.624-0.624l0.36-4.033l-2.688,1.944c-0.6,0.456-0.648,0.456-0.816,0.456C0.312,14.065,0,13.753,0,13.394   c0-0.36,0.192-0.456,0.576-0.648l3.312-1.608L0.48,9.505C0.24,9.385,0,9.289,0,8.905c0-0.336,0.312-0.672,0.648-0.672   c0.168,0,0.216,0.048,0.432,0.168l3.072,2.232L3.816,6.913V6.601C3.745,6.289,4.057,5.977,4.44,5.977   c0.624,0,0.624,0.576,0.6,0.912L4.705,10.633z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 9, 27 ]
});
/**
 * 字符data: cdot
 */
define("char/data/symbol/base/cdot", [], {
    path: "M1.272,12.409C0.576,12.409,0,11.833,0,11.137c0-0.696,0.576-1.272,1.272-1.272c0.696,0,1.272,0.576,1.272,1.272   C2.544,11.833,1.968,12.409,1.272,12.409z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 3, 27 ]
});
/**
 * 字符data:
 */
define("char/data/symbol/base/cdots", [], {
    path: "M1.44,9.745c0.864,0,1.464,0.672,1.464,1.416c0,0.864-0.696,1.464-1.44,1.464C0.6,12.625,0,11.929,0,11.185   C0,10.369,0.624,9.745,1.44,9.745z M12.169,9.745c0.864,0,1.464,0.672,1.464,1.416c0,0.864-0.696,1.464-1.44,1.464   c-0.864,0-1.464-0.696-1.464-1.44C10.729,10.369,11.353,9.745,12.169,9.745z M22.898,9.745c0.864,0,1.464,0.672,1.464,1.416   c0,0.864-0.696,1.464-1.44,1.464c-0.864,0-1.464-0.696-1.464-1.44C21.458,10.369,22.082,9.745,22.898,9.745z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: :
 */
define("char/data/symbol/base/colon", [], {
    path: "M0,7.992c0-0.336,0.121-0.621,0.363-0.855S0.895,6.785,1.23,6.785c0.32,0,0.6,0.119,0.838,0.357s0.357,0.521,0.357,0.85   c0,0.32-0.119,0.604-0.357,0.85S1.551,9.211,1.23,9.211c-0.336,0-0.625-0.121-0.867-0.363S0,8.32,0,7.992z M0,15.914   c0-0.336,0.121-0.621,0.363-0.855s0.531-0.352,0.867-0.352c0.32,0,0.6,0.119,0.838,0.357s0.357,0.521,0.357,0.85   c0,0.32-0.119,0.604-0.357,0.85s-0.518,0.369-0.838,0.369c-0.336,0-0.625-0.121-0.867-0.363S0,16.242,0,15.914z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 3, 27 ]
});
/**
 * 字符data: ,
 */
define("char/data/symbol/base/comma", [], {
    path: "M1.416,14.281c1.296,0,1.752,1.32,1.752,2.712c0,0.312-0.024,0.648-0.048,0.84c-0.216,1.416-0.792,2.64-1.752,3.672   c-0.216,0.216-0.336,0.336-0.432,0.336c-0.12,0-0.528-0.408-0.528-0.528c0-0.072,0.048-0.168,0.24-0.36   c1.008-1.032,1.536-2.28,1.632-3.697V16.97c-0.024,0-0.072,0.024-0.144,0.072c-0.216,0.096-0.432,0.144-0.648,0.144   c-0.84,0-1.488-0.624-1.488-1.44C0,14.953,0.576,14.281,1.416,14.281z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data:
 */
define("char/data/symbol/base/ddots", [], {
    path: "M1.44,1.92c0.864,0,1.464,0.672,1.464,1.416c0,0.864-0.696,1.464-1.44,1.464C0.6,4.801,0,4.104,0,3.36   C0,2.544,0.624,1.92,1.44,1.92z M12.169,9.121c0.864,0,1.464,0.672,1.464,1.416c0,0.864-0.696,1.464-1.44,1.464   c-0.864,0-1.464-0.696-1.464-1.44C10.729,9.745,11.353,9.121,12.169,9.121z M22.898,16.322c0.864,0,1.464,0.672,1.464,1.416   c0,0.864-0.696,1.464-1.44,1.464c-0.864,0-1.464-0.696-1.464-1.44C21.458,16.946,22.082,16.322,22.898,16.322z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: 除号
 */
define("char/data/symbol/base/div", [], {
    path: "M15.193,10.657c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48   H15.193z M8.017,7.465c-0.888,0-1.536-0.744-1.536-1.512S7.104,4.44,8.017,4.44c0.888,0,1.536,0.744,1.536,1.512   S8.929,7.465,8.017,7.465z M8.017,17.834c-0.888,0-1.536-0.744-1.536-1.512s0.624-1.512,1.536-1.512   c0.888,0,1.536,0.744,1.536,1.512S8.929,17.834,8.017,17.834z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: !
 */
define("char/data/symbol/base/exclamation", [], {
    path: "M0.914,12.598L0,1.242V1.102c0-0.305,0.125-0.564,0.375-0.779S0.91,0,1.23,0c0.305,0,0.58,0.107,0.826,0.322   s0.369,0.475,0.369,0.779v0.141L1.535,12.598c0,0.031-0.02,0.066-0.059,0.105s-0.074,0.059-0.105,0.059H1.078   C0.969,12.762,0.914,12.707,0.914,12.598z M0,15.938c0-0.336,0.121-0.621,0.363-0.855S0.895,14.73,1.23,14.73   c0.32,0,0.6,0.119,0.838,0.357s0.357,0.521,0.357,0.85c0,0.32-0.119,0.604-0.357,0.85s-0.518,0.369-0.838,0.369   c-0.336,0-0.625-0.121-0.867-0.363S0,16.266,0,15.938z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 3, 27 ]
});
/**
 * 字符data: ∞
 */
define("char/data/symbol/base/infty", [], {
    path: "M4.805,6.529c1.656,0,2.904,0.648,3.96,1.464c0.648,0.528,1.056,0.937,1.776,1.873l0.336,0.456l0.168-0.24   c0.888-1.272,2.185-2.592,3.625-3.168c0.648-0.24,1.32-0.384,1.968-0.384c0.528,0,1.056,0.096,1.512,0.264   c1.776,0.72,3.216,2.688,3.216,5.208v0.168c-0.096,1.752-0.888,3.336-1.944,4.176c-0.72,0.624-1.656,1.056-2.88,1.056   c-1.632,0-2.88-0.648-3.912-1.464c-0.648-0.528-1.056-0.936-1.776-1.872l-0.336-0.456l-0.168,0.24   c-0.888,1.272-2.184,2.592-3.625,3.168c-0.648,0.24-1.32,0.384-1.968,0.384c-0.528,0-1.056-0.096-1.512-0.264   c-1.776-0.72-3.216-2.688-3.216-5.208v-0.168c0.096-1.752,0.888-3.336,1.944-4.176C2.741,6.937,3.653,6.529,4.805,6.529z    M0.917,12.001c0,1.92,1.032,3.696,2.472,4.152c0.336,0.12,0.672,0.192,1.056,0.192c0.816,0,1.704-0.288,2.497-0.792   c0.984-0.648,1.896-1.729,2.712-3.048l-0.744-0.96c-0.408-0.528-0.84-1.08-0.96-1.224c-1.152-1.392-2.088-2.088-3.12-2.256   C4.685,8.041,4.493,8.017,4.301,8.017C2.117,8.017,0.917,10.057,0.917,12.001z M20.479,11.929c0-2.28-1.32-4.32-3.504-4.32   c-0.84,0-1.728,0.264-2.496,0.768c-1.008,0.648-1.92,1.728-2.736,3.048l0.744,0.96c0.408,0.528,0.84,1.08,0.96,1.224   c1.32,1.632,2.4,2.304,3.625,2.304C19.23,15.914,20.479,13.874,20.479,11.929z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 22, 27 ]
});
/**
 * 字符data: {
 */
define("char/data/symbol/base/l-braces", [], {
    path: "M5.065,8.953c0,1.392-0.864,2.496-2.832,3.048c0.672,0.192,1.368,0.432,1.872,0.936c0.768,0.768,0.96,1.176,0.96,2.28   v5.041c0,0.864,0,0.912,0.072,1.128c0.312,1.224,1.488,1.992,3,2.088c0.24,0.024,0.384,0.024,0.384,0.264   c0,0.264-0.192,0.264-0.456,0.264c-0.936,0-2.521-0.264-3.457-0.984c-1.152-0.912-1.152-1.68-1.152-2.688v-4.752   c0-0.864,0-0.912-0.072-1.176c-0.264-1.176-1.416-2.041-3-2.136C0.144,12.241,0,12.241,0,12.001c0-0.144,0.096-0.24,0.216-0.264   c0.528-0.024,1.44-0.072,2.28-0.768c0.96-0.792,0.96-1.56,0.96-2.496V3c0.024-1.776,2.208-3,4.608-3c0.264,0,0.456,0,0.456,0.264   c0,0.144-0.096,0.24-0.216,0.264c-2.616,0.168-3.24,1.704-3.24,2.665V8.953z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: [
 */
define("char/data/symbol/base/l-brackets", [], {
    path: "M0,24V0h3.398v0.961H0.961v22.078h2.438V24H0z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 4, 27 ]
});
/**
 * 字符data: (
 */
define("char/data/symbol/base/l-parentheses", [], {
    path: "M5.367,23.953C4.461,23.281,3.672,22.498,3,21.604s-1.234-1.875-1.688-2.941s-0.785-2.158-0.996-3.275S0,13.141,0,12   s0.105-2.273,0.316-3.398S0.859,6.383,1.313,5.32S2.328,3.281,3,2.391s1.461-1.672,2.367-2.344C5.367,0.016,5.41,0,5.496,0h0.211   c0.047,0,0.09,0.021,0.129,0.064s0.059,0.092,0.059,0.146c0,0.086-0.023,0.152-0.07,0.199C4.801,1.324,3.965,2.408,3.316,3.662   s-1.115,2.586-1.4,3.996S1.488,10.516,1.488,12s0.143,2.932,0.428,4.342s0.752,2.742,1.4,3.996s1.484,2.338,2.508,3.252   c0.047,0.047,0.07,0.113,0.07,0.199c0,0.039-0.021,0.084-0.064,0.135S5.746,24,5.707,24H5.496C5.41,24,5.367,23.984,5.367,23.953z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 6, 27 ]
});
/**
 * 字符data:
 */
define("char/data/symbol/base/ldots", [], {
    path: "M1.44,14.305c0.864,0,1.464,0.672,1.464,1.416c0,0.864-0.696,1.464-1.44,1.464C0.6,17.186,0,16.489,0,15.746   C0,14.929,0.624,14.305,1.44,14.305z M12.169,14.305c0.864,0,1.464,0.672,1.464,1.416c0,0.864-0.696,1.464-1.44,1.464   c-0.864,0-1.464-0.696-1.464-1.44C10.729,14.929,11.353,14.305,12.169,14.305z M22.898,14.305c0.864,0,1.464,0.672,1.464,1.416   c0,0.864-0.696,1.464-1.44,1.464c-0.864,0-1.464-0.696-1.464-1.44C21.458,14.929,22.082,14.305,22.898,14.305z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: ∧
 */
define("char/data/symbol/base/mid", [], {
    path: "M0.96,23.138c0,0.432,0,0.864-0.48,0.864S0,23.57,0,23.138V0.864C0,0.432,0,0,0.48,0s0.48,0.432,0.48,0.864V23.138z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * Created by hn on 14-3-13.
 */
define("char/data/symbol/base/mp", [], {
    path: "M8.497,20.234c0,0.36,0,0.888-0.48,0.888s-0.48-0.432-0.48-0.816v-6.697H0.84c-0.408,0-0.84,0-0.84-0.48   s0.432-0.48,0.84-0.48h6.697V6.097H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h14.329c0.408,0,0.84,0,0.84,0.48   s-0.432,0.48-0.84,0.48H8.497v6.553h6.672c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H8.497V20.234z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: -
 */
define("char/data/symbol/base/negative", [], {
    path: "M0.774,11.691c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h12.985c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48   H0.774z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * Created by hn on 14-3-13.
 */
define("char/data/symbol/base/pm", [], {
    path: "M8.497,16.178h6.672c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48   h6.697V9.625H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h6.697V1.968c0-0.384,0-0.816,0.48-0.816s0.48,0.504,0.48,0.888   v6.625h6.672c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H8.497V16.178z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: .
 */
define("char/data/symbol/base/point", [], {
    path: "M0,15.914c0-0.336,0.121-0.621,0.363-0.855s0.531-0.352,0.867-0.352c0.32,0,0.6,0.119,0.838,0.357s0.357,0.521,0.357,0.85   c0,0.32-0.119,0.604-0.357,0.85s-0.518,0.369-0.838,0.369c-0.336,0-0.625-0.121-0.867-0.363S0,16.242,0,15.914z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 3, 27 ]
});
/**
 * 字符data: +
 */
define("char/data/symbol/base/positive", [], {
    path: "M7.729,17.93c0,0.36,0,0.744-0.432,0.744c-0.408,0-0.408-0.408-0.408-0.744v-6.36h-6.36c-0.36,0-0.744,0-0.744-0.432   c0-0.408,0.408-0.408,0.744-0.408h6.36v-6.36c0-0.36,0-0.744,0.432-0.744c0.408,0,0.408,0.408,0.408,0.744v6.36h6.36   c0.36,0,0.744,0,0.744,0.432c0,0.408-0.408,0.408-0.744,0.408h-6.36V17.93z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: '
 */
define("char/data/symbol/base/quotation", [], {
    path: "M0,8.685C0,8.637,0.016,8.512,0.048,8.31C0.08,8.108,0.096,7.983,0.096,7.934L1.08,1.683l0.024-0.169   C1.12,1.385,1.143,1.276,1.173,1.188s0.07-0.204,0.12-0.348c0.049-0.144,0.11-0.255,0.183-0.333C1.548,0.428,1.656,0.36,1.8,0.301   c0.144-0.058,0.304-0.088,0.48-0.088h0.024c0.24,0,0.44,0.068,0.6,0.204c0.16,0.136,0.24,0.324,0.24,0.564   c0,0.096-0.064,0.36-0.192,0.792L0.576,8.661c-0.08,0.24-0.184,0.36-0.312,0.36C0.088,9.021,0,8.909,0,8.685z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 4, 27 ]
});
/**
 * 字符data: }
 */
define("char/data/symbol/base/r-braces", [], {
    path: "M3.457,15.049c0-1.392,0.864-2.496,2.832-3.048c-0.672-0.192-1.368-0.432-1.872-0.936c-0.768-0.768-0.96-1.176-0.96-2.28   V3.744c0-0.864,0-0.912-0.072-1.128c-0.312-1.224-1.488-1.992-3-2.088C0.144,0.504,0,0.504,0,0.264C0,0,0.264,0,0.48,0   c0.816,0,2.472,0.24,3.433,0.984c1.152,0.912,1.152,1.68,1.152,2.688v4.752c0,0.864,0,0.912,0.072,1.176   c0.264,1.176,1.416,2.041,3,2.136c0.24,0.024,0.384,0.024,0.384,0.264c0,0.144-0.096,0.24-0.216,0.264   c-0.528,0.024-1.44,0.072-2.28,0.768c-0.96,0.792-0.96,1.56-0.96,2.496v5.473c-0.024,1.824-2.256,3-4.584,3   c-0.216,0-0.48,0-0.48-0.264c0-0.144,0.096-0.24,0.216-0.264c2.616-0.168,3.24-1.704,3.24-2.665V15.049z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: ]
 */
define("char/data/symbol/base/r-brackets", [], {
    path: "M0,24v-0.961h2.449V0.961H0V0h3.41v24H0z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 4, 27 ]
});
/**
 * 字符data: )
 */
define("char/data/symbol/base/r-parentheses", [], {
    path: "M0.223,24C0.074,24,0,23.93,0,23.789c0-0.086,0.035-0.152,0.105-0.199c0.789-0.703,1.457-1.494,2.004-2.373   s0.994-1.834,1.342-2.865s0.596-2.078,0.744-3.141S4.418,13.078,4.418,12c0-1.086-0.074-2.158-0.223-3.217s-0.395-2.1-0.738-3.123   S2.67,3.686,2.127,2.807S0.91,1.129,0.105,0.41C0.035,0.363,0,0.297,0,0.211c0-0.055,0.02-0.104,0.059-0.146S0.152,0,0.223,0h0.211   c0.055,0,0.098,0.016,0.129,0.047C1.469,0.719,2.26,1.506,2.936,2.408S4.166,4.275,4.6,5.303s0.76,2.113,0.979,3.258   S5.906,10.852,5.906,12c0,1.133-0.107,2.271-0.322,3.416s-0.541,2.23-0.979,3.258s-0.994,1.996-1.67,2.906   s-1.467,1.701-2.373,2.373C0.531,23.984,0.488,24,0.434,24H0.223z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 6, 27 ]
});
/**
 * 字符data: /
 */
define("char/data/symbol/base/slash", [], {
    path: "M0,23.52c0-0.031,0.02-0.086,0.059-0.164L8.883,0.293C8.938,0.098,9.082,0,9.316,0c0.141,0,0.256,0.043,0.346,0.129   S9.797,0.332,9.797,0.48c0,0.039-0.002,0.07-0.006,0.094s-0.01,0.047-0.018,0.07L0.938,23.707C0.859,23.902,0.707,24,0.48,24   c-0.117,0-0.227-0.047-0.328-0.141S0,23.652,0,23.52z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 10, 27 ]
});
/**
 * 字符data: X(乘号)
 */
define("char/data/symbol/base/times", [], {
    path: "M10.561,5.713c0.264-0.264,0.36-0.36,0.552-0.36c0.288,0,0.48,0.216,0.48,0.48c0,0.168-0.096,0.264-0.12,0.312   c-0.12,0.144-0.48,0.456-0.6,0.6L6.48,11.137c1.2,1.224,5.017,4.992,5.041,5.041c0.072,0.12,0.072,0.216,0.072,0.264   c0,0.264-0.192,0.48-0.48,0.48c-0.144,0-0.312-0.12-0.36-0.144l-4.968-4.969l-4.776,4.776c-0.288,0.288-0.336,0.336-0.528,0.336   c-0.24,0-0.48-0.216-0.48-0.48c0-0.168,0.048-0.216,0.312-0.48l4.8-4.824l-4.8-4.824C0.048,6.049,0,6,0,5.833   c0-0.264,0.24-0.48,0.48-0.48c0.192,0,0.24,0.048,0.528,0.336l4.8,4.777L10.561,5.713z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 12, 27 ]
});
/**
 * 字符data: →
 */
define("char/data/symbol/base/to", [], {
    path: "M0.336,10.657h18.361c-1.224-0.912-2.016-1.872-2.64-3.072c-0.384-0.744-0.672-1.608-0.792-2.28   c0-0.072-0.024-0.12-0.024-0.168c0-0.24,0.168-0.264,0.48-0.264c0.384,0,0.432,0.048,0.504,0.336   c0.048,0.288,0.168,0.72,0.264,0.984c0.696,2.088,2.376,3.936,4.608,4.68c0.144,0.048,0.216,0.12,0.216,0.264   s-0.072,0.216-0.216,0.264c-2.208,0.744-3.912,2.592-4.608,4.68c-0.096,0.264-0.216,0.696-0.264,0.96   c-0.072,0.312-0.12,0.36-0.504,0.36c-0.36,0-0.504-0.072-0.504-0.264c0-0.144,0.072-0.336,0.144-0.6   c0.528-2.112,1.68-3.696,3.336-4.92H0.336C0.144,11.521,0,11.401,0,11.137S0.144,10.753,0.336,10.657z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 22, 27 ]
});
/**
 * 字符data:
 */
define("char/data/symbol/base/vdots", [], {
    path: "M1.44,0c0.864,0,1.464,0.672,1.464,1.417c0,0.864-0.696,1.464-1.44,1.464C0.6,2.88,0,2.185,0,1.44C0,0.624,0.624,0,1.44,0z    M1.44,9.601c0.864,0,1.464,0.672,1.464,1.416c0,0.864-0.696,1.464-1.44,1.464C0.6,12.481,0,11.785,0,11.041   C0,10.225,0.624,9.601,1.44,9.601z M1.44,19.442c0.864,0,1.464,0.672,1.464,1.416c0,0.864-0.696,1.464-1.44,1.464   C0.6,22.322,0,21.626,0,20.882C0,20.066,0.624,19.442,1.44,19.442z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: ∨
 */
define("char/data/symbol/base/vee", [], {
    path: "M7.2,18.025c-0.144,0.336-0.216,0.504-0.528,0.504c-0.216,0-0.36-0.096-0.552-0.504L0.144,4.512C0,4.224,0,4.176,0,4.128   c0-0.264,0.216-0.48,0.48-0.48c0.168,0,0.36,0.048,0.552,0.504l5.641,12.721l5.641-12.697c0.168-0.36,0.312-0.528,0.552-0.528   c0.264,0,0.48,0.216,0.48,0.48c0,0.12-0.024,0.168-0.168,0.48L7.2,18.025z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: |
 */
define("char/data/symbol/base/vertical", [], {
    path: "M0,22.632V0.72c0-0.464,0.16-0.696,0.48-0.696c0.32,0,0.48,0.232,0.48,0.696v21.912c0,0.448-0.16,0.672-0.48,0.672   C0.16,23.304,0,23.08,0,22.632z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 1, 27 ]
});
/**
 * 字符data: ∧
 */
define("char/data/symbol/base/wedge", [], {
    path: "M13.201,17.666c0.144,0.288,0.144,0.336,0.144,0.384c0,0.264-0.216,0.48-0.48,0.48c-0.096,0-0.336,0-0.552-0.504   L6.672,5.304L1.032,18.025c-0.192,0.456-0.384,0.504-0.552,0.504c-0.264,0-0.48-0.216-0.48-0.48c0-0.12,0.024-0.168,0.168-0.48   L6.145,4.152C6.289,3.816,6.36,3.648,6.672,3.648c0.216,0,0.36,0.096,0.552,0.504L13.201,17.666z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: ≇
 */
define("char/data/symbol/not/ncong", [], {
    path: "M5.736,16.01h9.337c0.432,0,0.888,0,0.888,0.48s-0.432,0.48-0.84,0.48H5.185l-1.92,3.36c-0.24,0.432-0.336,0.576-0.6,0.576   c-0.288,0-0.48-0.216-0.48-0.48c0-0.144,0.048-0.192,0.144-0.408c0.264-0.432,0.696-1.176,1.752-3.048H0.84   c-0.408,0-0.84,0-0.84-0.48s0.456-0.48,0.888-0.48h3.744l2.112-3.696H0.84c-0.408,0-0.84,0-0.84-0.48c0-0.48,0.456-0.48,0.888-0.48   h6.408l2.353-4.128C8.497,6.673,8.041,6.241,7.008,5.617c-0.912-0.576-1.872-1.08-3-1.08c-1.248,0-3.216,0.72-3.336,2.736   c0,0.12-0.072,0.552-0.336,0.552C0.168,7.825,0,7.633,0,7.105c0-2.208,1.776-3.913,4.008-3.913c1.536,0,2.904,0.912,4.2,1.776   C9.745,6,10.201,6.121,10.249,6.121c0.024,0,0.048-0.024,0.216-0.288l2.304-4.008c0.144-0.264,0.264-0.456,0.528-0.456   c0.288,0,0.48,0.216,0.48,0.48c0,0.12-0.024,0.168-0.192,0.48l-2.352,4.104c0.312,0.072,0.6,0.072,0.744,0.072   c1.632,0,3.216-1.056,3.312-2.64c0.024-0.528,0.216-0.648,0.336-0.648c0.144,0,0.336,0.168,0.336,0.744   c0,2.064-1.632,3.889-3.984,3.889c-0.24,0-0.768,0-1.44-0.24L8.4,11.353h6.673c0.432,0,0.888,0,0.888,0.48   c0,0.48-0.432,0.48-0.84,0.48H7.849L5.736,16.01z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 22 0 L 22 27 L 0 27 Z"
});
/**
 * 字符data: 不等号
 */
define("char/data/symbol/not/neq", [], {
    path: "M1.376,9.745H0.56c-0.12,0-0.288,0.024-0.408-0.024c-0.048-0.024-0.096-0.072-0.12-0.12   c-0.024-0.072-0.024-0.12-0.024-0.192c0-0.144-0.048-0.384,0.096-0.504c0.144-0.096,0.384-0.048,0.552-0.048H2h4.2h1.2   c0.144,0,0.384,0.048,0.528-0.024c0.12-0.072,0.192-0.264,0.264-0.384c0.192-0.312,0.384-0.624,0.552-0.936   c0.576-0.984,1.152-1.968,1.704-2.952c0.168-0.288,0.336-0.552,0.504-0.84c0.072-0.12,0.12-0.288,0.24-0.384   c0.096-0.048,0.168-0.048,0.264-0.048c0.192,0,0.648-0.048,0.576,0.288c-0.048,0.192-0.192,0.408-0.312,0.576   c-0.192,0.36-0.408,0.744-0.624,1.104c-0.696,1.2-1.416,2.376-2.088,3.6h4.417h0.576c0.096,0,0.216,0,0.288,0.096   c0.072,0.12,0.048,0.264,0.048,0.384s0,0.24-0.072,0.312c-0.096,0.12-0.264,0.096-0.408,0.096h-1.056H9.92H9.033   c-0.144,0-0.312-0.024-0.456,0C8.48,9.793,8.408,9.865,8.36,9.961c-0.096,0.168-0.168,0.312-0.264,0.48   c-0.408,0.696-0.816,1.368-1.2,2.064h6.072h0.816c0.12,0,0.288-0.024,0.408,0.024c0.048,0.024,0.096,0.072,0.12,0.12   c0.024,0.072,0.024,0.12,0.024,0.192c0,0.144,0.048,0.384-0.096,0.504c-0.144,0.096-0.384,0.048-0.552,0.048h-1.344h-4.2h-1.2   c-0.144,0-0.384-0.048-0.528,0.024c-0.12,0.072-0.192,0.264-0.264,0.384C5.96,14.113,5.768,14.425,5.6,14.737   c-0.576,0.984-1.152,1.968-1.704,2.953c-0.168,0.288-0.336,0.552-0.504,0.84c-0.072,0.12-0.12,0.288-0.24,0.384   c-0.096,0.048-0.168,0.048-0.264,0.048c-0.192,0-0.648,0.048-0.576-0.288c0.048-0.192,0.192-0.408,0.312-0.576   c0.192-0.36,0.408-0.744,0.624-1.104c0.696-1.2,1.416-2.376,2.088-3.6H0.92H0.344c-0.096,0-0.216,0-0.288-0.096   c-0.072-0.12-0.048-0.264-0.048-0.384c0-0.12,0-0.24,0.072-0.313c0.096-0.12,0.264-0.096,0.408-0.096h1.056h2.88h0.888   c0.144,0,0.312,0.024,0.456,0c0.096-0.048,0.168-0.12,0.216-0.216c0.096-0.168,0.168-0.312,0.264-0.48   c0.408-0.696,0.816-1.368,1.2-2.064H1.376z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 22 0 L 22 27 L 0 27 Z"
});
/**
 * 字符data:
 */
define("char/data/symbol/not/nequiv", [], {
    path: "M1.784,7.921H0.68c-0.168,0-0.384,0.048-0.528-0.024c-0.048-0.024-0.096-0.072-0.12-0.12   c-0.024-0.072-0.024-0.12-0.024-0.192c0-0.144-0.048-0.384,0.096-0.504C0.272,6.985,0.56,7.033,0.728,7.033h1.584h4.969h1.392   c0.168,0,0.456,0.048,0.624-0.024c0.144-0.072,0.216-0.288,0.264-0.432c0.192-0.384,0.408-0.792,0.576-1.176   c0.552-1.2,1.152-2.376,1.729-3.553c0.168-0.312,0.312-0.624,0.456-0.936c0.072-0.12,0.12-0.312,0.24-0.408   c0.096-0.048,0.192-0.048,0.288-0.048c0.192,0,0.576-0.048,0.528,0.264c-0.024,0.216-0.168,0.432-0.264,0.624   c-0.216,0.408-0.408,0.816-0.6,1.224c-0.432,0.936-0.912,1.848-1.368,2.784c-0.264,0.552-0.504,1.128-0.816,1.68h4.44h0.576   c0.096,0,0.216,0,0.288,0.096c0.072,0.12,0.048,0.264,0.048,0.384c0,0.12,0,0.24-0.072,0.312c-0.096,0.12-0.264,0.096-0.408,0.096   h-1.032h-2.904h-0.864c-0.144,0-0.312-0.024-0.432,0.024c-0.096,0.024-0.12,0.12-0.168,0.192c-0.096,0.168-0.168,0.336-0.24,0.504   c-0.336,0.672-0.648,1.392-1.008,2.04h5.736h0.912c0.12,0,0.288-0.024,0.384,0.072c0.12,0.096,0.096,0.264,0.096,0.384   s0.024,0.264-0.072,0.336c-0.12,0.144-0.36,0.096-0.504,0.096h-1.392h-3.84H8.745c-0.168,0-0.384-0.048-0.552,0.024   C8.097,11.617,8.049,11.713,8,11.809c-0.072,0.168-0.144,0.312-0.216,0.48c-0.336,0.672-0.648,1.392-1.008,2.041h7.128h1.104   c0.168,0,0.384-0.048,0.528,0.024c0.048,0.024,0.096,0.072,0.12,0.12c0.024,0.072,0.024,0.12,0.024,0.192   c0,0.144,0.048,0.384-0.096,0.504c-0.168,0.096-0.456,0.048-0.624,0.048h-1.584H8.409H7.017c-0.168,0-0.456-0.048-0.624,0.024   c-0.144,0.072-0.216,0.288-0.264,0.432l-0.576,1.152c-0.552,1.2-1.152,2.4-1.729,3.576c-0.168,0.312-0.312,0.624-0.456,0.936   c-0.072,0.12-0.12,0.312-0.24,0.408c-0.096,0.048-0.192,0.048-0.288,0.048c-0.192,0-0.576,0.048-0.528-0.264   c0.024-0.216,0.168-0.432,0.264-0.624c0.216-0.408,0.408-0.816,0.6-1.224c0.432-0.937,0.912-1.848,1.368-2.785   c0.264-0.552,0.504-1.128,0.816-1.68H0.92H0.344c-0.096,0-0.216,0-0.288-0.096c-0.072-0.12-0.048-0.264-0.048-0.384   c0-0.12,0-0.24,0.072-0.312c0.096-0.12,0.264-0.096,0.408-0.096H1.52h2.904h0.864c0.144,0,0.312,0.024,0.432-0.024   c0.096-0.024,0.12-0.12,0.168-0.192c0.096-0.168,0.168-0.336,0.24-0.504c0.336-0.672,0.648-1.392,1.008-2.04H1.4H0.488   c-0.12,0-0.288,0.024-0.384-0.072c-0.12-0.096-0.096-0.264-0.096-0.384s-0.024-0.264,0.072-0.336   c0.12-0.144,0.36-0.096,0.504-0.096h1.392h3.84h1.128c0.168,0,0.384,0.048,0.552-0.024c0.096-0.024,0.144-0.12,0.192-0.216   c0.072-0.168,0.144-0.312,0.216-0.48c0.336-0.672,0.648-1.392,1.008-2.04H1.784z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 23 0 L 23 27 L 0 27 Z"
});
/**
 * 字符data: ≱
 */
define("char/data/symbol/not/nge", [], {
    path: "M4.393,21.602h9.433c0.432,0,0.84,0,0.84,0.48s-0.48,0.48-0.888,0.48H3.984L2.568,25.97   c-0.144,0.336-0.24,0.576-0.552,0.576c-0.288,0-0.48-0.216-0.48-0.48c0-0.24,1.2-3,1.416-3.504H0.888c-0.408,0-0.888,0-0.888-0.48   s0.408-0.48,0.84-0.48h2.497l2.616-6.24l-5.088,2.4c-0.24,0.12-0.288,0.144-0.384,0.144c-0.264,0-0.48-0.24-0.48-0.48   c0-0.192,0.072-0.36,0.48-0.552l6-2.832l2.16-5.185l-8.113-3.84C0.144,4.848,0,4.776,0,4.488s0.216-0.48,0.48-0.48   c0.168,0,0.36,0.096,0.504,0.168l8.041,3.792l3.264-7.825C12.385,0.048,12.505,0,12.649,0c0.288,0,0.48,0.216,0.48,0.48   c0,0.12-0.024,0.168-0.144,0.456L9.889,8.4l4.32,2.016c0.24,0.12,0.456,0.264,0.456,0.528c0,0.312-0.168,0.384-0.528,0.552   l-6.913,3.265L4.393,21.602z M7.777,13.441l5.28-2.496l-3.552-1.68L7.777,13.441z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 21 0 L 21 27 L 0 27 Z"
});
/**
 * 字符data: ≯
 */
define("char/data/symbol/not/ngt", [], {
    path: "M5.521,15.77l-2.952,5.785c-0.192,0.336-0.216,0.36-0.288,0.432c-0.096,0.072-0.168,0.096-0.264,0.096   c-0.264,0-0.48-0.192-0.48-0.48s2.208-4.488,2.568-5.161L2.16,17.33c-0.168,0.096-1.512,0.744-1.68,0.744   c-0.24,0-0.48-0.216-0.48-0.456c0-0.192,0.072-0.36,0.48-0.552l4.344-2.041l3.192-6.265L0.48,5.208C0.072,5.017,0,4.849,0,4.657   c0-0.24,0.24-0.456,0.48-0.456c0.096,0,0.192,0.024,0.432,0.144l7.537,3.552l3.696-7.249c0.168-0.312,0.24-0.456,0.504-0.456   c0.264,0,0.48,0.192,0.48,0.48c0,0.096,0,0.144-0.192,0.48L9.313,8.305l4.872,2.304c0.288,0.144,0.48,0.216,0.48,0.528   c0,0.264-0.168,0.408-0.456,0.528L5.521,15.77z M6.216,14.354l6.841-3.216L8.881,9.169L6.216,14.354z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 22 0 L 22 27 L 0 27 Z"
});
/**
 * 字符data:
 */
define("char/data/symbol/not/nin", [], {
    path: "M7.061,3.957c0.288-0.937,0.576-1.896,0.84-2.833l0.144-0.432C8.069,0.597,8.117,0.5,8.189,0.453   c0.12-0.072,0.288-0.048,0.432-0.048c0.12,0,0.264,0,0.336,0.096c0.096,0.096,0.048,0.264,0,0.384L8.693,1.772   c-0.24,0.816-0.48,1.608-0.72,2.424C7.829,4.653,7.685,5.109,7.565,5.565c0.552,0,1.128,0.072,1.68,0.144   c0.288,0.048,0.6,0.072,0.888,0.168c0.264,0.096,0.168,0.36,0.12,0.576c-0.024,0.096-0.048,0.216-0.12,0.288   c-0.096,0.072-0.216,0.048-0.312,0.024C9.677,6.741,9.509,6.717,9.365,6.693c-0.456-0.072-0.912-0.12-1.368-0.168   c-0.24-0.024-0.48,0-0.72-0.048l-0.36,1.2l-0.864,2.928h2.616h0.864c0.144,0,0.312-0.024,0.456,0   c0.288,0.048,0.24,0.336,0.24,0.552c0,0.144,0,0.288-0.144,0.36c-0.096,0.048-0.24,0.024-0.336,0.024H9.125H6.869H6.101   c-0.096,0-0.24-0.024-0.312,0.048c-0.096,0.072-0.096,0.24-0.144,0.336l-0.216,0.744c-0.192,0.672-0.408,1.32-0.6,1.992   c-0.096,0.336-0.24,0.672-0.288,1.032c0.984,0,1.992,0.024,2.976-0.072c0.336-0.048,0.672-0.072,1.008-0.144   c0.216-0.024,0.432-0.12,0.648-0.12c0.072,0,0.144,0.024,0.192,0.096c0.048,0.072,0.072,0.168,0.096,0.24   c0.024,0.168,0.144,0.408-0.048,0.528c-0.096,0.072-0.24,0.096-0.336,0.12c-0.24,0.048-0.48,0.096-0.72,0.12   c-0.888,0.12-1.8,0.168-2.688,0.168H4.661c-0.12,0-0.288-0.048-0.384,0.024c-0.096,0.072-0.12,0.24-0.144,0.336l-0.24,0.84   c-0.288,0.912-0.552,1.8-0.816,2.712l-0.24,0.744c-0.024,0.12-0.048,0.264-0.144,0.36c-0.096,0.096-0.216,0.096-0.336,0.096   c-0.216,0-0.576,0.024-0.528-0.288c0.024-0.168,0.096-0.336,0.144-0.504l0.288-0.96c0.216-0.768,0.456-1.512,0.672-2.28   c0.12-0.432,0.264-0.864,0.384-1.296c-0.336-0.072-0.672-0.216-0.984-0.408c-0.24-0.12-0.456-0.264-0.648-0.432   c-1.416-1.248-1.8-3.288-1.656-5.088c0.024-0.432,0.072-0.864,0.192-1.296c0.144-0.6,0.384-1.176,0.744-1.68   c0.192-0.288,0.456-0.576,0.72-0.816c0.864-0.792,2.064-1.104,3.216-1.176c0.552-0.024,1.128,0,1.704,0   C6.701,4.989,6.917,4.461,7.061,3.957z M3.917,10.605h0.768l0.336-0.048l0.144-0.312l0.24-0.768l0.912-3.024   c-0.912,0-1.848-0.048-2.736,0.24c-0.648,0.216-1.224,0.6-1.656,1.128c-0.624,0.744-0.96,1.824-0.96,2.784H3.917z M3.965,14.278   l0.816-2.736H0.964c0,1.704,0.888,3.528,2.641,3.984L3.965,14.278z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 18 0 L 18 27 L 0 27 Z"
});
/**
 * 字符data: ≰
 */
define("char/data/symbol/not/nle", [], {
    path: "M4.393,21.602h9.433c0.432,0,0.84,0,0.84,0.48s-0.48,0.48-0.888,0.48H3.984L2.568,25.97   c-0.144,0.336-0.24,0.576-0.552,0.576c-0.288,0-0.48-0.216-0.48-0.48c0-0.24,1.2-3,1.416-3.504H0.888c-0.408,0-0.888,0-0.888-0.48   s0.408-0.48,0.84-0.48h2.497l3.072-7.321l-5.905-2.784C0.24,11.377,0,11.257,0,10.945c0-0.264,0.192-0.408,0.504-0.552L9.841,6   l2.448-5.857C12.385,0.048,12.505,0,12.649,0c0.288,0,0.48,0.216,0.48,0.48c0,0.12-0.024,0.168-0.144,0.456L11.137,5.4l2.592-1.248   c0.12-0.072,0.288-0.144,0.456-0.144c0.264,0,0.48,0.192,0.48,0.48s-0.144,0.336-0.528,0.528L10.585,6.72l-2.952,7.081l6.504,3.048   c0.36,0.192,0.528,0.264,0.528,0.576c0,0.24-0.216,0.48-0.48,0.48c-0.144,0-1.176-0.504-3.288-1.512l-3.648-1.704L4.393,21.602z    M1.608,10.945l5.161,2.448l2.52-6.073L1.608,10.945z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 21 0 L 21 27 L 0 27 Z"
});
/**
 * 字符data: ≰
 */
define("char/data/symbol/not/nlt", [], {
    path: "M6.672,13.513c1.2,0.6,7.441,3.504,7.753,3.672c0.024,0.024,0.24,0.168,0.24,0.408c0,0.336-0.288,0.48-0.48,0.48   c-0.096,0-0.144,0-0.6-0.216l-0.864-0.408l-6.505-3.072c-0.528,1.056-3.648,7.297-3.864,7.537c-0.12,0.168-0.312,0.168-0.336,0.168   c-0.264,0-0.48-0.192-0.48-0.48c0-0.12,0-0.168,0.336-0.792l3.48-6.841L0.48,11.665C0.192,11.521,0,11.449,0,11.137   c0-0.264,0.168-0.384,0.456-0.528l8.689-4.08l3-5.88c0.168-0.312,0.24-0.456,0.504-0.456c0.264,0,0.48,0.192,0.48,0.48   c0,0.096,0,0.144-0.192,0.48l-2.376,4.705l3.24-1.536c0.168-0.072,0.264-0.12,0.384-0.12c0.192,0,0.48,0.144,0.48,0.48   c0,0.192-0.096,0.36-0.48,0.528L9.841,7.249L6.672,13.513z M1.608,11.137l4.177,1.968l2.664-5.185L1.608,11.137z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 21 0 L 21 27 L 0 27 Z"
});
/**
 * 字符data: ≁
 */
define("char/data/symbol/not/nsim", [], {
    path: "M4.512,18.146c-0.24,0.288-0.288,0.36-0.528,0.36c-0.336,0-0.48-0.312-0.48-0.48c0-0.096,0.024-0.216,0.288-0.528   l3.313-3.96c-1.128-0.84-2.064-1.272-3.096-1.272c-1.224,0-1.992,0.624-2.304,0.912c-0.864,0.84-0.912,1.584-0.936,2.16   c-0.024,0.24-0.12,0.72-0.384,0.72C0.288,16.057,0,15.913,0,15.097c0-2.424,1.608-4.632,4.008-4.632c1.56,0,2.808,0.96,4.08,1.944   l3.36-4.008c0.24-0.288,0.288-0.36,0.528-0.36c0.336,0,0.48,0.312,0.48,0.48c0,0.096-0.024,0.216-0.288,0.528l-3.313,3.96   c1.128,0.84,2.064,1.272,3.097,1.272c1.224,0,1.992-0.624,2.304-0.912c0.864-0.84,0.912-1.608,0.936-2.161   c0.024-0.312,0.168-0.72,0.384-0.72c0.168,0,0.384,0.216,0.384,0.96c0,2.424-1.608,4.632-4.008,4.632   c-1.561,0-2.809-0.96-4.081-1.944L4.512,18.146z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 22 0 L 22 27 L 0 27 Z"
});
/**
 * 字符data: ⊈
 */
define("char/data/symbol/not/nsubseteq", [], {
    path: "M6.36,16.873c0.48,0.072,0.912,0.072,1.08,0.072h6.385c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H7.369   c-0.144,0-0.768,0-1.392-0.12l-1.584,3.816h9.433c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H3.984L2.568,25.97   c-0.144,0.336-0.24,0.576-0.552,0.576c-0.288,0-0.48-0.216-0.48-0.48c0-0.24,1.2-3,1.416-3.504H1.32c-0.408,0-0.84,0-0.84-0.48   s0.432-0.48,0.84-0.48h2.016l1.704-4.056C2.496,16.825,0,14.377,0,10.945c0-3.889,3.313-6.937,7.345-6.937h3.312l1.632-3.865   C12.385,0.048,12.505,0,12.649,0c0.288,0,0.48,0.216,0.48,0.48c0,0.12-0.024,0.168-0.144,0.456l-1.272,3.072h2.112   c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48h-2.52L6.36,16.873z M7.417,4.968c-3.72,0-6.457,2.736-6.457,6   c0,2.808,2.016,4.992,4.44,5.688l4.873-11.689H7.417z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 21 0 L 21 27 L 0 27 Z"
});
/**
 * 字符data: ⊉
 */
define("char/data/symbol/not/nsupseteq", [], {
    path: "M11.257,5.088c1.704,0.984,3.408,3.072,3.408,5.88c0,3.888-3.312,6.937-7.344,6.937H5.929l-1.536,3.696h8.953   c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H3.984L2.568,25.97c-0.144,0.336-0.24,0.576-0.552,0.576   c-0.288,0-0.48-0.216-0.48-0.48c0-0.24,1.2-3,1.416-3.504H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h2.497l1.56-3.696   H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h4.44L10.033,5.52c-1.2-0.504-2.232-0.552-2.808-0.552H0.84   c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h6.457c1.056,0,2.136,0.192,3.121,0.648l1.872-4.513   C12.385,0.048,12.505,0,12.649,0c0.288,0,0.48,0.216,0.48,0.48c0,0.12-0.024,0.168-0.144,0.456L11.257,5.088z M6.336,16.945   c1.68,0,3.48,0,5.281-1.56c1.32-1.128,2.088-2.665,2.088-4.44c0-1.632-0.72-3.625-2.832-4.969L6.336,16.945z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 21 0 L 21 27 L 0 27 Z"
});
/**
 * 字符data: 约等于
 */
define("char/data/symbol/relational/approx", [], {
    path: "M12.001,10.201c-1.56,0-2.856-0.864-4.152-1.728C6.601,7.633,5.4,6.889,4.008,6.889c-1.248,0-3.216,0.72-3.336,2.736   c0,0.096-0.096,0.552-0.336,0.552C0.192,10.177,0,9.985,0,9.457c0-2.208,1.776-3.912,4.008-3.912c1.56,0,2.856,0.864,4.152,1.728   c1.248,0.84,2.448,1.584,3.84,1.584c1.56,0,3.24-0.984,3.336-2.64c0.024-0.552,0.24-0.648,0.336-0.648   c0.168,0,0.336,0.216,0.336,0.72C16.009,8.497,14.233,10.201,12.001,10.201z M12.001,15.793c-1.56,0-2.856-0.864-4.152-1.728   c-1.248-0.84-2.448-1.584-3.84-1.584c-1.248,0-3.216,0.72-3.336,2.736c0,0.096-0.096,0.552-0.336,0.552   C0.192,15.77,0,15.578,0,15.049c0-2.208,1.776-3.912,4.008-3.912c1.56,0,2.856,0.864,4.152,1.728   c1.248,0.84,2.448,1.584,3.84,1.584c1.56,0,3.24-0.984,3.336-2.64c0.024-0.528,0.24-0.648,0.336-0.648   c0.048,0,0.336,0.048,0.336,0.744C16.009,14.018,14.281,15.793,12.001,15.793z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 23 0 L 23 27 L 0 27 Z"
});
/**
 * 字符data: =
 */
define("char/data/symbol/relational/eq", [], {
    path: "M0.816,9.289c-0.36,0-0.816,0-0.816-0.48s0.456-0.48,0.792-0.48h14.377c0.336,0,0.792,0,0.792,0.48s-0.456,0.48-0.816,0.48   H0.816z M0.792,13.945c-0.336,0-0.792,0-0.792-0.48s0.456-0.48,0.816-0.48h14.329c0.36,0,0.816,0,0.816,0.48   s-0.456,0.48-0.792,0.48H0.792z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 16, 27 ]
});
/**
 * 字符data: equiv
 */
define("char/data/symbol/relational/equiv", [], {
    path: "M0.864,6.961C0.48,6.961,0,6.961,0,6.481s0.432-0.48,0.84-0.48h14.329c0.408,0,0.84,0,0.84,0.48s-0.456,0.48-0.864,0.48   H0.864z M0.84,11.617c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h14.329c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H0.84   z M0.84,16.273c-0.408,0-0.84,0-0.84-0.48s0.48-0.48,0.864-0.48h14.281c0.408,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H0.84z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 22, 27 ],
    box: "M 0 0 L 22 0 L 22 27 L 0 27 Z"
});
/**
 * 字符data: geq
 */
define("char/data/symbol/relational/geq", [], {
    path: "M0.912,15.602C0.6,15.77,0.552,15.77,0.48,15.77C0.216,15.77,0,15.554,0,15.29c0-0.144,0.024-0.336,0.504-0.552   l12.553-5.928L0.456,2.88C0.192,2.76,0,2.641,0,2.353c0-0.264,0.192-0.48,0.48-0.48c0.048,0,0.144,0,0.48,0.168l13.225,6.24   c0.384,0.168,0.48,0.312,0.48,0.552c0,0.216-0.144,0.384-0.48,0.528L0.912,15.602z M0.84,20.426c-0.408,0-0.84,0-0.84-0.48   s0.504-0.48,0.864-0.48h12.937c0.36,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H0.84z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 22, 27 ],
    box: "M 0 0 L 22 0 L 22 27 L 0 27 Z"
});
/**
 * 字符data: gg
 */
define("char/data/symbol/relational/gg", [], {
    path: "M0.624,18.722c-0.168,0-0.624,0-0.624-0.48c0-0.264,0.192-0.36,0.48-0.528l12.049-6.577L0.48,4.561   C0.192,4.393,0,4.296,0,4.033c0-0.336,0.264-0.48,0.48-0.48c0.168,0,0.336,0.096,0.432,0.144l12.649,6.913   c0.288,0.168,0.456,0.24,0.456,0.528s-0.168,0.36-0.456,0.528L0.624,18.722z M7.944,18.722c-0.168,0-0.624,0-0.624-0.48   c0-0.264,0.192-0.36,0.48-0.528l12.049-6.577L7.8,4.561C7.513,4.393,7.32,4.296,7.32,4.033c0-0.336,0.264-0.48,0.48-0.48   c0.168,0,0.336,0.096,0.432,0.144l12.649,6.913c0.288,0.168,0.456,0.24,0.456,0.528s-0.168,0.36-0.456,0.528L7.944,18.722z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 28, 27 ],
    box: "M 0 0 L 28 0 L 28 27 L 0 27 Z"
});
/**
 * 字符data: equiv
 */
define("char/data/symbol/relational/gt", [], {
    path: "M0.864,17.642c-0.336,0.144-0.36,0.168-0.408,0.168C0.168,17.81,0,17.57,0,17.378c0-0.144,0-0.312,0.48-0.528l12.361-5.712   L0.504,5.449C0.192,5.305,0,5.208,0,4.92c0-0.192,0.168-0.432,0.456-0.432c0.048,0,0.096,0.024,0.408,0.168l12.985,5.977   c0.432,0.192,0.48,0.36,0.48,0.504c0,0.168-0.024,0.312-0.48,0.528L0.864,17.642z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 15, 27 ]
});
/**
 * 字符data: leq
 */
define("char/data/symbol/relational/leq", [], {
    path: "M1.608,8.833l12.553,5.904c0.408,0.192,0.504,0.336,0.504,0.552c0,0.264-0.216,0.48-0.48,0.48c-0.072,0-0.12,0-0.432-0.168   L0.48,9.361C0.144,9.217,0,9.049,0,8.833c0-0.192,0.072-0.36,0.48-0.552l13.273-6.264c0.096-0.048,0.313-0.144,0.432-0.144   c0.288,0,0.48,0.216,0.48,0.48c0,0.288-0.192,0.408-0.456,0.528L1.608,8.833z M0.84,20.426c-0.408,0-0.84,0-0.84-0.48   s0.504-0.48,0.864-0.48h12.937c0.36,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H0.84z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 22, 27 ],
    box: "M 0 0 L 22 0 L 22 27 L 0 27 Z"
});
/**
 * 字符data: ll
 */
define("char/data/symbol/relational/ll", [], {
    path: "M1.488,11.137l12.049,6.577c0.288,0.168,0.48,0.264,0.48,0.528c0,0.24-0.168,0.48-0.48,0.48c-0.096,0-0.168,0-0.456-0.168   L0.456,11.665C0.168,11.497,0,11.425,0,11.137s0.168-0.36,0.456-0.528l12.649-6.913c0.096-0.048,0.264-0.144,0.432-0.144   c0.216,0,0.48,0.144,0.48,0.48c0,0.264-0.192,0.36-0.48,0.528L1.488,11.137z M8.809,11.137l12.049,6.577   c0.288,0.168,0.48,0.264,0.48,0.528c0,0.24-0.168,0.48-0.48,0.48c-0.096,0-0.168,0-0.456-0.168L7.776,11.665   c-0.288-0.168-0.456-0.24-0.456-0.528s0.168-0.36,0.456-0.528l12.649-6.913c0.096-0.048,0.264-0.144,0.432-0.144   c0.216,0,0.48,0.144,0.48,0.48c0,0.264-0.192,0.36-0.48,0.528L8.809,11.137z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 15, 27 ]
});
/**
 * 字符data: <
 */
define("char/data/symbol/relational/lt", [], {
    path: "M1.488,11.161l12.361,5.688c0.432,0.192,0.48,0.36,0.48,0.504c0,0.264-0.192,0.456-0.456,0.456   c-0.048,0-0.096-0.024-0.408-0.168L0.48,11.665C0.024,11.449,0,11.305,0,11.137c0-0.144,0.048-0.312,0.48-0.504l12.985-5.977   c0.336-0.144,0.36-0.168,0.408-0.168c0.264,0,0.456,0.192,0.456,0.456c0,0.144-0.048,0.312-0.48,0.504L1.488,11.161z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 21, 27 ],
    box: "M 0 0 L 21 0 L 21 27 L 0 27 Z"
});
/**
 * 字符data: leq
 */
define("char/data/symbol/relational/sim", [], {
    path: "M11.977,13.945c-1.632,0-2.88-1.104-4.104-2.208c-1.176-1.032-2.328-2.064-3.84-2.064c-1.464,0-3.264,1.056-3.36,3.696   c0,0.072-0.072,0.552-0.336,0.552c-0.024,0-0.336,0-0.336-0.768c0-2.184,1.416-4.824,4.032-4.824c1.632,0,2.88,1.104,4.104,2.208   c1.176,1.032,2.328,2.064,3.84,2.064c1.68,0,3.264-1.32,3.36-3.624c0.024-0.456,0.216-0.624,0.336-0.624   c0.192,0,0.336,0.24,0.336,0.768C16.009,11.305,14.593,13.945,11.977,13.945z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 22, 27 ],
    box: "M 0 0 L 22 0 L 22 27 L 0 27 Z"
});
/**
 * 字符data: simeq
 */
define("char/data/symbol/relational/simeq", [], {
    path: "M12.001,11.137c-1.608,0-2.88-0.984-4.152-1.992c-1.248-0.96-2.4-1.8-3.84-1.8c-1.296,0-3.216,0.864-3.336,3.216   c0,0.072-0.072,0.552-0.336,0.552C0.312,11.113,0,11.089,0,10.369c0-2.256,1.656-4.368,4.008-4.368c1.608,0,2.88,0.984,4.152,1.992   c1.248,0.96,2.4,1.8,3.84,1.8c1.56,0,3.24-1.128,3.336-3.12c0.024-0.552,0.24-0.648,0.336-0.648c0.168,0,0.336,0.216,0.336,0.744   C16.009,9.025,14.353,11.137,12.001,11.137z M15.145,15.313c0.408,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H0.84   c-0.408,0-0.84,0-0.84-0.48s0.48-0.48,0.864-0.48H15.145z",
    offset: {
        x: 3,
        y: 2
    },
    size: [ 22, 27 ],
    box: "M 0 0 L 22 0 L 22 27 L 0 27 Z"
});
/**
 * 字符data: cap
 */
define("char/data/symbol/set/cap", [], {
    path: "M13.345,16.802c0,0.432,0,0.864-0.48,0.864s-0.48-0.432-0.48-0.864V8.137c0-0.648,0-2.184-1.848-3.36   C9.265,3.96,7.752,3.745,6.672,3.745c-1.8,0-5.712,0.768-5.712,4.368v8.689c0,0.432,0,0.864-0.48,0.864S0,17.234,0,16.802V7.993   c0-3.528,3.552-5.208,6.672-5.208c3,0,6.672,1.584,6.672,5.232V16.802z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 20 0 L 20 27 L 0 27 Z"
});
/**
 * 字符data: cap
 */
define("char/data/symbol/set/cup", [], {
    path: "M13.345,12.458c0,3.528-3.552,5.208-6.672,5.208c-3,0-6.672-1.584-6.672-5.232V3.648c0-0.432,0-0.864,0.48-0.864   s0.48,0.432,0.48,0.864v8.665c0,0.648,0,2.184,1.848,3.36c1.272,0.816,2.784,1.032,3.864,1.032c1.8,0,5.712-0.768,5.712-4.368   V3.648c0-0.432,0-0.864,0.48-0.864s0.48,0.432,0.48,0.864V12.458z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 20 0 L 20 27 L 0 27 Z"
});
/**
 * 字符data: in
 */
define("char/data/symbol/set/in", [], {
    path: "M0.984,11.617c0.288,3.216,3.048,5.521,6.433,5.521h3.745c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H7.369   c-4.104,0-7.369-3.12-7.369-6.96s3.264-6.96,7.369-6.96h3.792c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H7.417   c-3.384,0-6.145,2.304-6.433,5.521h10.177c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H0.984z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 19 0 L 19 27 L 0 27 Z"
});
/**
 * 字符data: ni
 */
define("char/data/symbol/set/ni", [], {
    path: "M0.84,5.137c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h3.792c4.104,0,7.369,3.12,7.369,6.96s-3.264,6.96-7.369,6.96   H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h3.745c3.384,0,6.145-2.304,6.433-5.521H0.84c-0.408,0-0.84,0-0.84-0.48   s0.432-0.48,0.84-0.48h10.177c-0.288-3.216-3.048-5.521-6.433-5.521H0.84z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 19 0 L 19 27 L 0 27 Z"
});
/**
 * 字符data: sqcap
 */
define("char/data/symbol/set/sqcap", [], {
    path: "M13.057,16.273c0,0.432,0,0.864-0.48,0.864c-0.48,0-0.48-0.504-0.48-0.864V3.745H0.96v12.529c0,0.432,0,0.864-0.48,0.864   S0,16.634,0,16.273V3.648c0-0.792,0.072-0.864,0.84-0.864h11.377c0.768,0,0.84,0.072,0.84,0.864V16.273z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 20 0 L 20 27 L 0 27 Z"
});
/**
 * 字符data: sqcup
 */
define("char/data/symbol/set/sqcup", [], {
    path: "M13.057,16.273c0,0.792-0.072,0.864-0.864,0.864H0.864C0.096,17.138,0,17.042,0,16.273V3.648c0-0.432,0-0.864,0.48-0.864   s0.48,0.432,0.48,0.864v12.529h11.137V3.648c0-0.432,0-0.864,0.48-0.864c0.48,0,0.48,0.432,0.48,0.864V16.273z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 20 0 L 20 27 L 0 27 Z"
});
/**
 * 字符data: ⊏
 */
define("char/data/symbol/set/sqsubset", [], {
    path: "M0.96,5.161v11.977h12.841c0.408,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H0.84c-0.768,0-0.84-0.096-0.84-0.84V5.064   c0-0.792,0.096-0.864,0.864-0.864h12.961c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H0.96z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 21 0 L 21 27 L 0 27 Z"
});
/**
 * 字符data: ⊑
 */
define("char/data/symbol/set/sqsubseteq", [], {
    path: "M0.84,20.426c-0.408,0-0.84,0-0.84-0.48s0.48-0.48,0.864-0.48h13.417c0.36,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48   H0.84z M1.224,2.833V14.81h13.057c0.408,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H1.104c-0.768,0-0.84-0.072-0.84-0.864V2.736   c0-0.768,0.096-0.864,0.864-0.864h13.177c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H1.224z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 22 0 L 22 27 L 0 27 Z"
});
/**
 * 字符data: ⊏
 */
define("char/data/symbol/set/sqsupset", [], {
    path: "M15.625,17.603c0,0.768-0.096,0.84-0.84,0.84H0.84c-0.408,0-0.84,0-0.84-0.48s0.456-0.48,0.864-0.48h13.801V5.506H0.84   c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h13.945c0.768,0,0.84,0.096,0.84,0.84V17.603z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 21 0 L 21 27 L 0 27 Z"
});
/**
 * 字符data: ⊒
 */
define("char/data/symbol/set/sqsupseteq", [], {
    path: "M14.881,14.905c0,0.792-0.072,0.864-0.84,0.864H0.84c-0.408,0-0.84,0-0.84-0.48s0.48-0.48,0.864-0.48h13.057V2.833H0.84   c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h13.201c0.768,0,0.84,0.072,0.84,0.864V14.905z M14.281,19.466   c0.408,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H0.84c-0.408,0-0.84,0-0.84-0.48s0.504-0.48,0.864-0.48H14.281z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 22 0 L 22 27 L 0 27 Z"
});
/**
 * 字符data: ⊂
 */
define("char/data/symbol/set/subset", [], {
    path: "M7.417,5.137c-3.744,0-6.457,2.784-6.457,6s2.712,6,6.457,6h6.409c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H7.369   c-4.104,0-7.369-3.12-7.369-6.96s3.264-6.96,7.369-6.96h6.457c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H7.417z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 21 0 L 21 27 L 0 27 Z"
});
/**
 * 字符data: ⊆
 */
define("char/data/symbol/set/subseteq", [], {
    path: "M7.417,2.833c-3.72,0-6.457,2.736-6.457,6c0,3.168,2.665,5.977,6.457,5.977h6.409c0.408,0,0.84,0,0.84,0.48   s-0.432,0.48-0.84,0.48H7.369C3.313,15.77,0,12.673,0,8.809c0-3.792,3.24-6.937,7.369-6.937h6.457c0.408,0,0.84,0,0.84,0.48   s-0.432,0.48-0.84,0.48H7.417z M13.825,19.466c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H1.32c-0.408,0-0.84,0-0.84-0.48   s0.432-0.48,0.84-0.48H13.825z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 21 0 L 21 27 L 0 27 Z"
});
/**
 * 字符data: ⊃
 */
define("char/data/symbol/set/supset", [], {
    path: "M0.84,5.137c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h6.457c4.104,0,7.369,3.12,7.369,6.96s-3.264,6.96-7.369,6.96   H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h6.409c3.745,0,6.457-2.784,6.457-6s-2.712-6-6.457-6H0.84z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 21 0 L 21 27 L 0 27 Z"
});
/**
 * 字符data: ⊇
 */
define("char/data/symbol/set/supseteq", [], {
    path: "M0.84,2.833c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h6.457c4.057,0,7.369,3.096,7.369,6.96   c0,3.792-3.24,6.937-7.369,6.937H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h6.409c3.72,0,6.457-2.736,6.457-6   c0-3.168-2.664-5.977-6.457-5.977H0.84z M0.84,20.426c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h12.505   c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H0.84z",
    offset: {
        x: 3,
        y: 2
    },
    box: "M 0 0 L 21 0 L 21 27 L 0 27 Z"
});
/**
 * Created by hn on 14-4-4.
 */
define("char/def", [], function(require) {
    return {
        KF_AMS_MAIN: "KF AMS MAIN",
        KF_AMS_SYMBOL: "KF AMS SYMBOL"
    };
});
/*!
 * Created by hn on 14-4-4.
 */
define("char/map", [], function(require) {
    return {
        Alpha: "Α",
        Beta: "Β",
        Gamma: "Γ",
        Delta: "Δ",
        Epsilon: "Ε",
        Zeta: "Ζ",
        Eta: "Η",
        Theta: "Θ",
        Iota: "Ι",
        Kappa: "Κ",
        Lambda: "Λ",
        Mu: "Μ",
        Nu: "Ν",
        Xi: "Ξ",
        Omicron: "Ο",
        Pi: "Π",
        Rho: "Ρ",
        Sigma: "Σ",
        Tau: "Τ",
        Upsilon: "Υ",
        Phi: "Φ",
        Chi: "Χ",
        Psi: "Ψ",
        Omega: "Ω",
        alpha: "α",
        beta: "β",
        gamma: "γ",
        delta: "δ",
        epsilon: "ε",
        varepsilon: "ε",
        zeta: "ζ",
        eta: "η",
        theta: "θ",
        iota: "ι",
        kappa: "κ",
        lambda: "λ",
        mu: "μ",
        nu: "ν",
        xi: "ξ",
        omicron: "ο",
        pi: "π",
        rho: "ρ",
        sigma: "σ",
        tau: "τ",
        upsilon: "υ",
        phi: "φ",
        varphi: "φ",
        chi: "χ",
        psi: "ψ",
        omega: "ω",
        // symbol
        times: "×",
        div: "÷",
        pm: "±",
        mp: "∓",
        ast: "*",
        cdot: "·",
        // logic
        wedge: "∧",
        vee: "∨",
        mid: "∣"
    };
});
/**
 * 罗马文本
 */
define("char/roman", [ "kity", "char/char", "char/data", "signgroup", "def/gtype" ], function(require, exports, module) {
    var kity = require("kity"), Char = require("char/char");
    return kity.createClass("RomanText", {
        base: require("signgroup"),
        constructor: function(content) {
            this.callBase();
            this.chars = null;
            this.contentText = content || "";
            this.contentShape = new kity.Group();
            initContentShape.call(this);
            this.addShape(this.contentShape);
        },
        getBaseWidth: function() {
            return this.getWidth();
        },
        getBaseHeight: function() {
            var chars = this.contentShape.getItems(), currentChar = null, index = 0, height = 0;
            while (currentChar = chars[index]) {
                height = Math.max(height, currentChar.getBaseHeight());
                index++;
            }
            return height;
        },
        addedCall: function() {
            var offset = 0;
            kity.Utils.each(this.chars, function(charData, index) {
                var charShape = this.contentShape.getItem(index);
                charShape.translate(offset, 0);
                offset += charShape.getBoxWidth() + 1;
            }, this);
        }
    });
    function initContentShape() {
        var match = null, content = this.contentText, chars = [];
        while (match = /^([^\\]*)(\\[^\\]+\\)([\s\S]*)/.exec(content)) {
            content = match[3];
            chars = chars.concat(match[1].split(""));
            chars.push(match[2]);
        }
        chars = chars.concat(content.split(""));
        // 字符数组
        this.chars = chars;
        kity.Utils.each(chars, function(charData, index) {
            var charShape = new Char(charData, "roman");
            this.contentShape.addShape(charShape);
        }, this);
    }
});
/**
 * 文本
 */
define("char/text", [ "kity", "char/map", "char/def", "signgroup", "def/gtype" ], function(require, exports, module) {
    var kity = require("kity"), CHAR_ALIASE = require("char/map"), FONT_DEFINE = require("char/def");
    return kity.createClass("Text", {
        base: require("signgroup"),
        constructor: function(content, fontFamily) {
            this.callBase();
            this.fontFamily = fontFamily || FONT_DEFINE.KF_AMS_MAIN;
            this.content = content || "";
            this.transformContent = transform(this.content);
            this.contentShape = new kity.Group();
            this.contentNode = this.createContent();
            this.contentShape.addShape(this.contentNode);
            this.addShape(this.contentShape);
        },
        createContent: function() {
            var contentNode = new kity.Text(this.transformContent);
            contentNode.setAttr({
                "font-family": this.fontFamily,
                "font-size": 50,
                x: 0,
                y: 40
            });
            return contentNode;
        },
        getBaseHeight: function() {
            var chars = this.contentShape.getItems(), currentChar = null, index = 0, height = 0;
            while (currentChar = chars[index]) {
                height = Math.max(height, currentChar.getHeight());
                index++;
            }
            return height;
        }
    });
    function transform(content) {
        return content.replace(/\\([a-zA-Z]+)\\/g, function(match, input) {
            return CHAR_ALIASE[input];
        });
    }
});
/**
 * 文本
 */
define("char/text1", [ "kity", "char/char", "char/data", "signgroup", "def/gtype" ], function(require, exports, module) {
    var kity = require("kity"), Char = require("char/char");
    return kity.createClass("Text", {
        base: require("signgroup"),
        constructor: function(content) {
            this.callBase();
            this.chars = null;
            this.contentText = content || "";
            this.contentShape = new kity.Group();
            initContentShape.call(this);
            this.addShape(this.contentShape);
        },
        getBaseHeight: function() {
            var chars = this.contentShape.getItems(), currentChar = null, index = 0, height = 0;
            while (currentChar = chars[index]) {
                height = Math.max(height, currentChar.getBaseHeight());
                index++;
            }
            return height;
        },
        addedCall: function() {
            var offset = 0;
            kity.Utils.each(this.chars, function(charData, index) {
                var charShape = this.contentShape.getItem(index);
                charShape.translate(offset, 0);
                offset += charShape.getBoxWidth();
            }, this);
        }
    });
    function initContentShape() {
        var match = null, content = this.contentText, chars = [];
        while (match = /^([^\\]*)(\\[^\\]+\\)([\s\S]*)/.exec(content)) {
            content = match[3];
            chars = chars.concat(match[1].split(""));
            chars.push(match[2]);
        }
        chars = chars.concat(content.split(""));
        // 字符数组
        this.chars = chars;
        kity.Utils.each(chars, function(charData, index) {
            var charShape = new Char(charData);
            this.contentShape.addShape(charShape);
        }, this);
    }
});
/**
 * 定义公式中各种对象的类型
 */
define("def/gtype", [], function() {
    return {
        UNKNOWN: -1,
        EXP: 0,
        COMPOUND_EXP: 1,
        OP: 2
    };
});
/**
 * 定义公式中上下标的类型
 */
define("def/script-type", [], function() {
    return {
        SIDE: "side",
        FOLLOW: "follow"
    };
});
/**
 * 分数表达式
 */
define("expression/compound-exp/binary-exp/fraction", [ "kity", "operator/binary-opr/fraction", "operator/binary-opr/up-down", "expression/compound-exp/binary-exp/up-down", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), FractionOperator = require("operator/binary-opr/fraction");
    return kity.createClass("FractionExpression", {
        base: require("expression/compound-exp/binary-exp/up-down"),
        constructor: function(upOperand, downOperand) {
            this.callBase(upOperand, downOperand);
            this.setFlag("Fraction");
            this.setOperator(new FractionOperator());
        },
        addedCall: function() {
            this.callBase();
            var renderBox = this.expContent.getRenderBox();
            this.setBoxSize(renderBox.width + 6, renderBox.height + 6);
            this.expContent.translate(3, 3);
        }
    });
});
/**
 * 左右结合二元表达式
 * @abstract
 */
define("expression/compound-exp/binary-exp/left-right", [ "kity", "expression/compound-exp/binary", "expression/compound" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("LeftRightExpression", {
        base: require("expression/compound-exp/binary"),
        getLeftOperand: function() {
            return this.getFirstOperand();
        },
        setLeftOperand: function(operand) {
            return this.setFirstOperand(operand);
        },
        getRightOperand: function() {
            return this.getLastOperand();
        },
        setRightOperand: function(operand) {
            return this.setLastOperand(operand);
        }
    });
});
/**
 * “平行”表达式
 */
define("expression/compound-exp/binary-exp/parallel", [ "kity", "operator/binary-opr/parallel", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), ParallelOperator = require("operator/binary-opr/parallel");
    return kity.createClass("ParallelExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setFlag("Parallel");
            this.setOperator(new ParallelOperator());
        }
    });
});
/**
 * 方根表达式
 */
define("expression/compound-exp/binary-exp/radical", [ "kity", "operator/binary-opr/radical", "operator/binary", "expression/compound-exp/binary", "expression/compound" ], function(require, exports, modules) {
    var kity = require("kity"), RadicalOperator = require("operator/binary-opr/radical");
    return kity.createClass("RadicalExpression", {
        base: require("expression/compound-exp/binary"),
        /**
         * 构造开方表达式
         * @param radicand 被开方数
         * @param exponent 指数
         */
        constructor: function(radicand, exponent) {
            this.callBase(radicand, exponent);
            this.setFlag("Radicand");
            this.setOperator(new RadicalOperator());
        },
        setRadicand: function(operand) {
            return this.setFirstOperand(operand);
        },
        getRadicand: function() {
            return this.getFirstOperand();
        },
        setExponent: function(operand) {
            return this.setLastOperand(operand);
        },
        getExponent: function() {
            return this.getLastOperand();
        }
    });
});
/**
 * 下标表达式
 */
define("expression/compound-exp/binary-exp/subscript", [ "kity", "expression/compound-exp/script", "operator/script", "expression/compound" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("SubscriptExpression", {
        base: require("expression/compound-exp/script"),
        constructor: function(operand, subscript) {
            this.callBase(operand, null, subscript);
            this.setFlag("Subscript");
        }
    });
});
/**
 * 减法表达式
 */
define("expression/compound-exp/binary-exp/subtraction", [ "kity", "operator/binary-opr/subtraction", "char/data", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), SubtractionOperator = require("operator/binary-opr/subtraction");
    return kity.createClass("SubtractionExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setFlag("Subtraction");
            this.setOperator(new SubtractionOperator());
        }
    });
});
/**
 * 上标表达式
 */
define("expression/compound-exp/binary-exp/superscript", [ "kity", "expression/compound-exp/script", "operator/script", "expression/compound" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("SuperscriptExpression", {
        base: require("expression/compound-exp/script"),
        constructor: function(operand, superscript) {
            this.callBase(operand, superscript, null);
            this.setFlag("Superscript");
        }
    });
});
/**
 * 上下结合二元表达式
 * @abstract
 */
define("expression/compound-exp/binary-exp/up-down", [ "kity", "expression/compound-exp/binary", "expression/compound" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("UpDownExpression", {
        base: require("expression/compound-exp/binary"),
        getUpOperand: function() {
            return this.getFirstOperand();
        },
        setUpOperand: function(operand) {
            return this.setFirstOperand(operand);
        },
        getDownOperand: function() {
            return this.getLastOperand();
        },
        setDownOperand: function(operand) {
            return this.setLastOperand(operand);
        }
    });
});
/**
 * 二元操作表达式
 * @abstract
 */
define("expression/compound-exp/binary", [ "kity", "expression/compound", "def/gtype", "expression/expression" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("BinaryExpression", {
        base: require("expression/compound"),
        constructor: function(firstOperand, lastOperand) {
            this.callBase();
            this.setFirstOperand(firstOperand);
            this.setLastOperand(lastOperand);
        },
        setFirstOperand: function(operand) {
            return this.setOperand(operand, 0);
        },
        getFirstOperand: function() {
            return this.getOperand(0);
        },
        setLastOperand: function(operand) {
            return this.setOperand(operand, 1);
        },
        getLastOperand: function() {
            return this.getOperand(1);
        }
    });
});
/**
 * 自动增长括号表达式
 */
define("expression/compound-exp/brackets", [ "kity", "operator/brackets", "char/data", "operator/operator", "expression/compound", "def/gtype", "expression/expression" ], function(require, exports, modules) {
    var kity = require("kity"), BracketsOperator = require("operator/brackets");
    return kity.createClass("BracketsExpression", {
        base: require("expression/compound"),
        /**
         * 构造函数调用方式：
         *  new Constructor( 左括号, 右括号, 表达式 )
         *  或者
         *  new Constructor( 括号, 表达式 ), 该构造函数转换成上面的构造函数，是： new Constructor( 括号, 括号, 表达式 )
         * @param left 左括号
         * @param right 右括号
         * @param exp 表达式
         */
        constructor: function(left, right, exp) {
            this.callBase();
            this.setFlag("Brackets");
            // 参数整理
            if (arguments.length === 2) {
                exp = right;
                right = left;
            }
            this.leftSymbol = left;
            this.rightSymbol = right;
            this.setOperator(new BracketsOperator());
            this.setOperand(exp, 0);
        },
        getLeftSymbol: function() {
            return this.leftSymbol;
        },
        getRightSymbol: function() {
            return this.rightSymbol;
        }
    });
});
/**
 * 组合表达式
 * 可以组合多个表达式
 */
define("expression/compound-exp/combination", [ "kity", "operator/combination", "operator/operator", "expression/compound", "def/gtype", "expression/expression" ], function(require, exports, modules) {
    var kity = require("kity"), CombinationOperator = require("operator/combination");
    return kity.createClass("CombinationExpression", {
        base: require("expression/compound"),
        constructor: function() {
            this.callBase();
            this.setFlag("Combination");
            this.setOperator(new CombinationOperator());
            kity.Utils.each(arguments, function(operand, index) {
                this.setOperand(operand, index);
            }, this);
        }
    });
});
/**
 * 函数表达式
 */
define("expression/compound-exp/func", [ "kity", "operator/func", "char/roman", "operator/operator", "expression/compound", "def/gtype", "expression/expression" ], function(require, exports, modules) {
    var kity = require("kity"), FunctionOperator = require("operator/func");
    return kity.createClass("FunctionExpression", {
        base: require("expression/compound"),
        /**
         * function表达式构造函数
         * @param funcName function名称
         * @param funcExp function表达式
         * @param sup 上标
         * @param sub 下标
         */
        constructor: function(funcName, funcExp, sup, sub) {
            this.callBase();
            this.setFlag("Func");
            this.setOperator(new FunctionOperator(funcName));
            this.setFuncExp(funcExp);
            this.setSuperscript(sup);
            this.setSubscript(sub);
        },
        setFuncExp: function(funcExp) {
            return this.setOperand(funcExp, 0);
        },
        getFuncExp: function() {
            return this.getOperand(0);
        },
        setSuperscript: function(sub) {
            return this.setOperand(sub, 1);
        },
        getSuperscript: function() {
            return this.getOperand(1);
        },
        setSubscript: function(sub) {
            return this.setOperand(sub, 2);
        },
        getSubscript: function() {
            return this.getOperand(2);
        }
    });
});
/**
 * 积分表达式
 */
define("expression/compound-exp/integration", [ "kity", "operator/integration", "operator/scriptable-func", "expression/compound-exp/scriptable-func", "expression/compound-exp/scriptable" ], function(require, exports, modules) {
    var kity = require("kity"), IntegrationOperator = require("operator/integration"), IntegrationExpression = kity.createClass("IntegrationExpression", {
        base: require("expression/compound-exp/scriptable-func"),
        /**
             * 构造积分表达式
             * @param integrand 被积函数
             * @param supOperand 上限
             * @param subOperand 下限
             */
        constructor: function(integrand, superscript, subscript) {
            var operator = new IntegrationOperator();
            this.callBase(operator, integrand, superscript, subscript);
            this.setFlag("Integration");
            this.setScriptOperand(operator);
            this.setOperator(operator);
            this.setIntegrand(integrand);
            this.setSuperscript(superscript);
            this.setSubscript(subscript);
            this.setScriptOperand(operator);
            this.setOperator(operator);
            // 设置下标偏移
            this.setSubOffset(-20);
        },
        setType: function(type) {
            this.getOperator().setType(type);
        },
        resetType: function() {
            this.getOperator().resetType();
        },
        setIntegrand: function(exp) {
            this.setOperand(exp, 0);
        },
        setSuperscript: function(sup) {
            this.setOperand(sup, 1);
            this.setScriptSup(this.getOperand(1));
        },
        setSubscript: function(sub) {
            this.setOperand(sub, 2);
            this.setScriptSub(this.getOperand(2));
        }
    });
    kity.Utils.extend(IntegrationExpression, IntegrationOperator.types);
    return IntegrationExpression;
});
/**
 * 上标表达式
 */
define("expression/compound-exp/script", [ "kity", "operator/script", "operator/operator", "expression/compound", "def/gtype", "expression/expression" ], function(require, exports, modules) {
    var kity = require("kity"), ScriptOperator = require("operator/script");
    return kity.createClass("ScriptExpression", {
        base: require("expression/compound"),
        constructor: function(operand, superscript, subscript) {
            this.callBase();
            this.setFlag("Script");
            this.setOperator(new ScriptOperator());
            this.setOpd(operand);
            this.setSuperscript(superscript);
            this.setSubscript(subscript);
        },
        setOpd: function(operand) {
            this.setOperand(operand, 0);
        },
        setSuperscript: function(sup) {
            this.setOperand(sup, 1);
        },
        setSubscript: function(sub) {
            this.setOperand(sub, 2);
        },
        getOpd: function() {
            this.getOperand(0);
        },
        getSuperscript: function() {
            this.getOperand(1);
        },
        getSubscript: function() {
            this.getOperand(2);
        },
        applyOperand: function() {}
    });
});
/**
 * 可以带上下表的函数表达式
 * @abstract
 */
define("expression/compound-exp/scriptable-func", [ "kity", "expression/compound-exp/scriptable", "def/script-type", "operator/scriptable", "expression/compound" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("ScriptableFuncExpression", {
        base: require("expression/compound-exp/scriptable"),
        /**
         * 构造表达式
         * @param exp 函数表达式操作符
         * @param upOperand 上标
         * @param downOperand 下标
         */
        constructor: function(operator, exp, superscript, subscript) {
            var operator = operator;
            this.callBase();
            this.setExp(exp);
            this.setSuperscript(superscript);
            this.setSubscript(subscript);
            this.setScriptOperand(operator);
            this.setOperator(operator);
        },
        setExp: function(exp) {
            this.setOperand(exp, 0);
        },
        setSuperscript: function(sup) {
            this.setOperand(sup, 1);
            this.setScriptSup(this.getOperand(1));
        },
        setSubscript: function(sub) {
            this.setOperand(sub, 2);
            this.setScriptSub(this.getOperand(2));
        }
    });
});
/**
 * 上标表达式
 */
define("expression/compound-exp/scriptable", [ "kity", "def/script-type", "operator/scriptable", "operator/operator", "expression/compound", "def/gtype", "expression/expression" ], function(require, exports, modules) {
    var kity = require("kity"), SCRIPT_TYPE = require("def/script-type"), ScriptableOperator = require("operator/scriptable");
    return kity.createClass("ScriptableExpression", {
        base: require("expression/compound"),
        constructor: function(operand, superscript, subscript) {
            this.callBase();
            this.scriptOperator = new ScriptableOperator();
            this.scriptOperator.parentExpression = this;
            // 上下标类型， 默认为侧面依附
            this.scriptType = SCRIPT_TYPE.SIDE;
            // 下标偏移修正
            this.subOffset = 0;
            this.scriptOperand = operand;
            this.scriptSup = superscript;
            this.scriptSub = subscript;
            // 整体所占空间大小
            this.space = {
                width: 0,
                height: 0
            };
        },
        setSubOffset: function(offset) {
            this.subOffset = offset;
        },
        getSubOffset: function() {
            return this.subOffset;
        },
        updateSpace: function(space) {
            this.space.width = space.width;
            this.space.height = space.height;
        },
        getSpace: function() {
            return this.space;
        },
        setScriptType: function(type) {
            this.scriptType = type;
        },
        getScriptType: function() {
            return this.scriptType;
        },
        setScriptOperand: function(operand) {
            this.scriptOperand = operand;
        },
        setScriptSup: function(sup) {
            this.scriptSup = sup;
        },
        setScriptSub: function(sub) {
            this.scriptSub = sub;
        },
        addedCall: function() {
            this.scriptOperator.applyOperand(this.scriptOperand, this.scriptSup, this.scriptSub);
            this.callBase();
            return this;
        }
    });
});
/**
 * 求和表达式
 * @abstract
 */
define("expression/compound-exp/summation", [ "kity", "def/script-type", "operator/summation", "operator/scriptable-func", "expression/compound-exp/scriptable-func", "expression/compound-exp/scriptable" ], function(require, exports, modules) {
    var kity = require("kity"), SCRIPT_TYPE = require("def/script-type"), SummationOperator = require("operator/summation");
    return kity.createClass("SummationExpression", {
        base: require("expression/compound-exp/scriptable-func"),
        /**
         * 构造求和表达式
         * @param exp 求和主题表达式
         * @param upOperand 上标
         * @param downOperand 下标
         */
        constructor: function(exp, superscript, subscript) {
            var operator = new SummationOperator();
            this.callBase(operator, exp, superscript, subscript);
            this.setFlag("Summation");
            this.setScriptType(SCRIPT_TYPE.FOLLOW);
            this.setExp(exp);
            this.setSuperscript(superscript);
            this.setSubscript(subscript);
            this.setScriptOperand(operator);
            this.setOperator(operator);
        },
        setExp: function(exp) {
            this.setOperand(exp, 0);
        },
        setSuperscript: function(sup) {
            this.setOperand(sup, 1);
            this.setScriptSup(this.getOperand(1));
        },
        setSubscript: function(sub) {
            this.setOperand(sub, 2);
            this.setScriptSub(this.getOperand(2));
        }
    });
});
/**
 * 复合表达式
 * @abstract
 */
define("expression/compound", [ "kity", "def/gtype", "expression/expression", "signgroup" ], function(require, exports, modules) {
    var kity = require("kity"), GTYPE = require("def/gtype"), Expression = require("expression/expression");
    return kity.createClass("CompoundExpression", {
        base: require("expression/expression"),
        constructor: function() {
            this.callBase();
            this.type = GTYPE.COMPOUND_EXP;
            this.operands = [];
            this.operator = null;
            this.operatorBox = new kity.Group();
            this.operatorBox.setAttr("data-type", "kf-editor-exp-op-box");
            this.operandBox = new kity.Group();
            this.operandBox.setAttr("data-type", "kf-editor-exp-operand-box");
            this.setChildren(0, this.operatorBox);
            this.setChildren(1, this.operandBox);
        },
        // 操作符存储在第1位置
        setOperator: function(operator) {
            if (operator === undefined) {
                return this;
            }
            if (this.operator) {
                this.operator.remove();
            }
            this.operatorBox.addShape(operator);
            this.operator = operator;
            this.operator.setParentExpression(this);
            // 表达式关联到操作符
            operator.expression = this;
            return this;
        },
        getOperator: function() {
            return this.operator;
        },
        // 操作数存储位置是从1开始
        setOperand: function(operand, index, isWrap) {
            // 不包装操作数
            if (isWrap === false) {
                this.operands[index] = operand;
                return this;
            }
            operand = Expression.wrap(operand);
            if (this.operands[index]) {
                this.operands[index].remove();
            }
            this.operands[index] = operand;
            this.operandBox.addShape(operand);
            return this;
        },
        getOperand: function(index) {
            return this.operands[index];
        },
        getOperands: function() {
            return this.operands;
        },
        addedCall: function() {
            this.operator.applyOperand.apply(this.operator, this.operands);
            return this;
        }
    });
});
/**
 * 空表达式
 * 该表达式主要用途是用于站位
 */
define("expression/empty", [ "kity", "expression/expression", "def/gtype", "signgroup" ], function(require, exports, module) {
    var kity = require("kity"), Expression = require("expression/expression"), EmptyExpression = kity.createClass("EmptyExpression", {
        base: Expression,
        constructor: function() {
            this.callBase();
            this.setFlag("Empty");
        }
    });
    // 注册打包函数
    Expression.registerWrap("empty", function(operand) {
        if (operand === null || operand === undefined) {
            return new EmptyExpression();
        }
    });
    return EmptyExpression;
});
/**
 * 基础表达式， 该类是表达式和操作数的高层抽象
 * @abstract
 */
define("expression/expression", [ "kity", "def/gtype", "signgroup" ], function(require, exports, module) {
    var kity = require("kity"), GTYPE = require("def/gtype"), // 打包函数列表
    WRAP_FN = [], // 注册的打包函数的名称与其在注册器列表中的索引之间的对应关系
    WRAP_FN_INDEX = {}, Expression = kity.createClass("Expression", {
        base: require("signgroup"),
        constructor: function() {
            this.callBase();
            this.type = GTYPE.EXP;
            this.children = [];
            this.box.fill("transparent").setAttr("data-type", "kf-editor-exp-box");
            this.box.setAttr("data-type", "kf-editor-exp-bg-box");
            this.expContent = new kity.Group();
            this.expContent.setAttr("data-type", "kf-editor-exp-content-box");
            this.addShape(this.expContent);
        },
        getChildren: function() {
            return this.children;
        },
        getChild: function(index) {
            return this.children[index] || null;
        },
        setFlag: function(flag) {
            this.setAttr("data-flag", flag || "Expression");
        },
        setChildren: function(index, exp) {
            // 首先清理掉之前的表达式
            if (this.children[index]) {
                this.children[index].remove();
            }
            this.children[index] = exp;
            this.expContent.addShape(exp);
        },
        translateElement: function(x, y) {
            this.expContent.translate(x, y);
        },
        getBaseWidth: function() {
            return this.getWidth();
        },
        getBaseHeight: function() {
            return this.getHeight();
        },
        updateBoxSize: function() {
            var renderBox = this.expContent.getRenderBox();
            this.setBoxSize(renderBox.width, renderBox.height);
        },
        getBox: function() {
            return this.box;
        }
    });
    // 表达式自动打包
    kity.Utils.extend(Expression, {
        registerWrap: function(name, fn) {
            WRAP_FN_INDEX[name] = WRAP_FN.length;
            WRAP_FN.push(fn);
        },
        revokeWrap: function(name) {
            var fn = null;
            if (name in WRAP_FN_INDEX) {
                fn = WRAP_FN[WRAP_FN_INDEX[name]];
                WRAP_FN[WRAP_FN_INDEX[name]] = null;
                delete WRAP_FN_INDEX[name];
            }
            return fn;
        },
        // 打包函数
        wrap: function(operand) {
            var result = undefined;
            kity.Utils.each(WRAP_FN, function(fn) {
                if (!fn) {
                    return;
                }
                result = fn(operand);
                if (result) {
                    return false;
                }
            });
            return result;
        }
    });
    return Expression;
});
/**
 * 罗马文本表达式
 */
define("expression/roman", [ "char/roman", "kity", "char/char", "signgroup", "expression/expression", "def/gtype" ], function(require, exports, module) {
    var RomanText = require("char/roman"), kity = require("kity");
    return kity.createClass("RomanTextExpression", {
        base: require("expression/expression"),
        constructor: function(content) {
            this.callBase();
            this.setFlag("RomanText");
            this.content = content + "";
            this.setChildren(0, new RomanText(this.content));
        }
    });
});
/**
 * Text表达式
 */
define("expression/text", [ "char/text", "kity", "char/map", "char/def", "signgroup", "expression/expression", "def/gtype" ], function(require, exports, module) {
    var Text = require("char/text"), kity = require("kity"), FONT_DEFINE = require("char/def"), Expression = require("expression/expression"), TextExpression = kity.createClass("TextExpression", {
        base: require("expression/expression"),
        constructor: function(content, fontFamily) {
            this.callBase();
            this.fontFamily = fontFamily || FONT_DEFINE.KF_AMS_MAIN;
            this.setFlag("Text");
            this.content = content + "";
            this.textContent = new Text(this.content, this.fontFamily);
            this.setChildren(0, this.textContent);
            this.setChildren(1, new kity.Rect(0, 0, 0, 0).fill("transparent"));
        },
        addedCall: function() {
            var box = this.textContent.getRenderBox();
            this.getChild(1).setSize(box.width, box.height);
            this.updateBoxSize();
            return this;
        }
    });
    // 注册文本表达式的打包函数
    Expression.registerWrap("text", function(operand) {
        var operandType = typeof operand;
        if (operandType === "number" || operandType === "string") {
            operand = new TextExpression(operand);
        }
        return operand;
    });
    return TextExpression;
});
/**
 * Created by hn on 14-4-4.
 */
define("font/kf-ams-main", [], function(require) {
    return {
        meta: {
            fontFamily: "KF AMS MAIN",
            x: 911,
            "units-per-em": 1e3
        },
        data: {
            "0": {
                x: 482,
                d: "M432 321c0 -96.6667 -11.3333 -171 -34 -223c-32.6667 -76 -85 -114 -157 -114c-73.3333 0 -126.333 39 -159 117c-21.3333 52 -32 125.333 -32 220c0 108.667 14.6667 190.667 44 246c33.3333 62.6667 82.3333 94 147 94c65.3333 0 114.667 -31.6667 148 -95\nc28.6667 -54.6667 43 -136.333 43 -245zM241 0c23.3333 0 46 9.16667 68 27.5c22 18.3333 37.6667 51.8333 47 100.5c8 39.3333 12 107.333 12 204c0 95.3333 -4.66667 163.333 -14 204c-8.66667 37.3333 -23.6667 64.8333 -45 82.5s-44 26.5 -68 26.5\nc-23.3333 0 -46 -8.83333 -68 -26.5s-37.3333 -45.8333 -46 -84.5c-8.66667 -40.6667 -13 -108 -13 -202c0 -94.6667 3.66667 -161.667 11 -201c7.33333 -40 20.8333 -71.8333 40.5 -95.5c19.6667 -23.6667 44.8333 -35.5 75.5 -35.5z"
            },
            "1": {
                x: 397,
                d: "M229 639v-566c0 -19.3333 4.5 -32 13.5 -38s33.8333 -9 74.5 -9h30v-26c-64 1.33333 -112.667 2 -146 2s-82 -0.666667 -146 -2v26h30c40 0 64.6667 3 74 9s14 18.6667 14 38v527c-33.3333 -20 -74.3333 -30 -123 -30c0 15.3333 0.333333 23.6667 1 25s3.66667 2 9 2\nc69.3333 2.66667 120.667 24 154 64c7.33333 0 11.6667 -1 13 -3s2 -8.33333 2 -19z"
            },
            "2": {
                x: 476,
                d: "M426 155l-24 -155h-352v23l199 225c72 82 108 157.667 108 227c0 46 -13.3333 84.1667 -40 114.5s-61.3333 45.5 -104 45.5c-32 0 -60.6667 -11 -86 -33c-25.3333 -22 -42.6667 -53.3333 -52 -94c4 2 9.33333 3 16 3c9.33333 0 18.3333 -3.16667 27 -9.5\ns13 -16.5 13 -30.5c0 -15.3333 -4.5 -26 -13.5 -32s-17.8333 -9 -26.5 -9c-5.33333 0 -10.6667 0.833333 -16 2.5s-10.8333 6 -16.5 13c-5.66667 7 -8.5 16.5 -8.5 28.5c0 48 16.5 91.1667 49.5 129.5s75.5 57.5 127.5 57.5c55.3333 0 102.333 -16.8333 141 -50.5\ns58 -78.8333 58 -135.5c0 -30.6667 -7.66667 -61.1667 -23 -91.5s-30.5 -53.6667 -45.5 -70s-36.1667 -37.5 -63.5 -63.5c-84 -80.6667 -147.667 -144.667 -191 -192h192c57.3333 0 87.6667 2.66667 91 8c8 12 15.3333 41.6667 22 89h18z"
            },
            "3": {
                x: 492,
                d: "M238 340h-49c-10 0 -16 0.5 -18 1.5s-3 3.16667 -3 6.5c0 4.66667 3.66667 7.66667 11 9c1.33333 0 6.5 0.333333 15.5 1s14.5 1 16.5 1c15.3333 1.33333 26.8333 2.66667 34.5 4s17.6667 5.33333 30 12s23.1667 16 32.5 28c25.3333 32.6667 38 73.3333 38 122\nc0 42 -10.6667 71.3333 -32 88s-44.3333 25 -69 25c-26 0 -53.1667 -5.83333 -81.5 -17.5s-48.8333 -31.8333 -61.5 -60.5c2.66667 1.33333 7 2 13 2c11.3333 0 20.6667 -3.33333 28 -10s11 -16.3333 11 -29c0 -12.6667 -3.66667 -22.3333 -11 -29s-16.6667 -10 -28 -10\nc-9.33333 0 -18.1667 3 -26.5 9s-12.5 16.6667 -12.5 32c0 39.3333 16.8333 71.8333 50.5 97.5c33.6667 25.6667 73.8333 38.5 120.5 38.5c46 0 85.6667 -13 119 -39s50 -58 50 -96c0 -43.3333 -14.8333 -81.1667 -44.5 -113.5s-64.5 -52.8333 -104.5 -61.5\nc49.3333 -6 90.8333 -25.3333 124.5 -58s50.5 -72.6667 50.5 -120c0 -51.3333 -19 -95.6667 -57 -133c-38 -37.3333 -84.3333 -56 -139 -56c-53.3333 0 -99.3333 16 -138 48c-38.6667 32 -58 70.6667 -58 116c0 16.6667 4.33333 28.3333 13 35\nc8.66667 6.66667 18.6667 10 30 10c11.3333 0 21.1667 -3.66667 29.5 -11c8.33333 -7.33333 12.5 -17.6667 12.5 -31c0 -12.6667 -4 -22.8333 -12 -30.5c-8 -7.66667 -18 -11.5 -30 -11.5c-6.66667 0 -11.6667 0.666667 -15 2c12 -34.6667 34.5 -60.5 67.5 -77.5\ns65.8333 -25.5 98.5 -25.5c32.6667 0 61.1667 13.8333 85.5 41.5c24.3333 27.6667 36.5 69.1667 36.5 124.5c0 48 -10.8333 87.6667 -32.5 119s-53.5 47 -95.5 47z"
            },
            "4": {
                x: 518,
                d: "M366 647v-451h102v-26h-102v-98c0 -19.3333 3.66667 -31.8333 11 -37.5c7.33333 -5.66667 27.6667 -8.5 61 -8.5h19v-26c-21.3333 1.33333 -61.3333 2 -120 2s-98.6667 -0.666667 -120 -2v26h19c33.3333 0 53.6667 2.83333 61 8.5c7.33333 5.66667 11 18.1667 11 37.5v98\nh-258v26l297 473c9.33333 0 14.8333 -1 16.5 -3s2.5 -8.33333 2.5 -19zM311 581l-241 -385h241v385z"
            },
            "5": {
                x: 476,
                d: "M123 585v-225c34.6667 36.6667 77.3333 55 128 55c48.6667 0 90 -20.5 124 -61.5s51 -91.5 51 -151.5c0 -62.6667 -20.1667 -114.667 -60.5 -156c-40.3333 -41.3333 -87.1667 -62 -140.5 -62c-50.6667 0 -92.5 18.1667 -125.5 54.5c-33 36.3333 -49.5 77.5 -49.5 123.5\nc0 28 12.6667 42 38 42c10.6667 0 19.6667 -3.16667 27 -9.5s11 -15.8333 11 -28.5c0 -14 -4 -23.8333 -12 -29.5s-16.6667 -8.5 -26 -8.5c-2.66667 0 -8 1 -16 3c8.66667 -37.3333 27.5 -67.1667 56.5 -89.5c29 -22.3333 60.5 -33.5 94.5 -33.5\nc46 0 81.6667 20.6667 107 62c20 30.6667 30 76 30 136c0 40 -3.83333 73.8333 -11.5 101.5s-17.8333 47.5 -30.5 59.5s-24.3333 20.3333 -35 25s-21.6667 7 -33 7c-53.3333 0 -95.3333 -21.3333 -126 -64c-4 -6 -8 -9 -12 -9c-4.66667 0 -7.5 1.33333 -8.5 4\ns-1.5 9 -1.5 19v290c0 14 2 21 6 21c2 0 6.66667 -1.66667 14 -5c38.6667 -17.3333 80 -26 124 -26c42 0 84 9 126 27c5.33333 2.66667 9 4 11 4c4 0 6 -4.33333 6 -13c-14 -14 -26.6667 -25.5 -38 -34.5s-29.5 -18.6667 -54.5 -29s-51.8333 -15.5 -80.5 -15.5\nc-34 0 -65 5.66667 -93 17z"
            },
            "6": {
                x: 482,
                d: "M118 345v-34c26 73.3333 69.6667 110 131 110c51.3333 0 94.6667 -20.5 130 -61.5s53 -92.5 53 -154.5c0 -64.6667 -18.8333 -117.667 -56.5 -159c-37.6667 -41.3333 -81.8333 -62 -132.5 -62c-17.3333 0 -34.3333 2.66667 -51 8\nc-16.6667 5.33333 -33.8333 15.6667 -51.5 31c-17.6667 15.3333 -33 34.8333 -46 58.5c-13 23.6667 -23.6667 55.6667 -32 96c-8.33333 40.3333 -12.5 86.5 -12.5 138.5c0 104.667 24.6667 188.333 74 251c49.3333 62.6667 106 94 170 94c35.3333 0 64 -8.83333 86 -26.5\ns33 -41.8333 33 -72.5c0 -14.6667 -4 -24.6667 -12 -30s-16 -8 -24 -8c-8.66667 0 -16.8333 3 -24.5 9s-11.5 15 -11.5 27c0 23.3333 15.3333 35 46 35c-14.6667 28.6667 -45.3333 43 -92 43c-14.6667 0 -29.1667 -2.33333 -43.5 -7\nc-14.3333 -4.66667 -29.8333 -13.8333 -46.5 -27.5s-31.1667 -31 -43.5 -52s-22.6667 -49.3333 -31 -85c-8.33333 -35.6667 -12.5 -76.1667 -12.5 -121.5zM243 8c44 0 77.3333 21.3333 100 64c14 26.6667 21 71.3333 21 134c0 60.6667 -6 104 -18 130c-22 46 -55 69 -99 69\nc-42 0 -73.6667 -18.5 -95 -55.5s-32 -77.1667 -32 -120.5c0 -14 0.333333 -26.8333 1 -38.5s3.16667 -29.8333 7.5 -54.5c4.33333 -24.6667 10.3333 -45.3333 18 -62c7.66667 -16.6667 19.8333 -31.8333 36.5 -45.5c16.6667 -13.6667 36.6667 -20.5 60 -20.5z"
            },
            "7": {
                x: 505,
                d: "M455 623l-138 -205c-49.3333 -74 -74 -187.667 -74 -341v-46c0 -31.3333 -12 -47 -36 -47s-36 15.3333 -36 46c0 64 11.3333 131.167 34 201.5c22.6667 70.3333 53 133.833 91 190.5l111 165h-220c-60.6667 0 -93 -2.66667 -97 -8\nc-7.33333 -11.3333 -14.6667 -41 -22 -89h-18l29 187h18c2 -8 4.66667 -13.8333 8 -17.5s14.1667 -7 32.5 -10c18.3333 -3 45.8333 -4.5 82.5 -4.5h235v-22z"
            },
            "8": {
                x: 492,
                d: "M289 360l52 -37c14 -9.33333 25.1667 -17.5 33.5 -24.5s18.6667 -17.1667 31 -30.5c12.3333 -13.3333 21.5 -28.8333 27.5 -46.5s9 -37.1667 9 -58.5c0 -50.6667 -19.3333 -93.1667 -58 -127.5c-38.6667 -34.3333 -85 -51.5 -139 -51.5\nc-51.3333 0 -96.6667 15.5 -136 46.5c-39.3333 31 -59 71.1667 -59 120.5c0 26 5.16667 49.8333 15.5 71.5c10.3333 21.6667 25 40.3333 44 56s34.5 27.5 46.5 35.5s26.6667 16.3333 44 25c-44.6667 31.3333 -71 51 -79 59c-30 29.3333 -45 64.6667 -45 106\nc0 44.6667 16.8333 82 50.5 112c33.6667 30 73.8333 45 120.5 45c43.3333 0 82.3333 -13.1667 117 -39.5s52 -61.1667 52 -104.5c0 -61.3333 -42.3333 -113.667 -127 -157zM158 448l105 -71c5.33333 -4 8.66667 -6 10 -6c4 0 14.1667 5.33333 30.5 16s33.5 28 51.5 52\ns27 50 27 78c0 33.3333 -13.1667 61.8333 -39.5 85.5s-58.8333 35.5 -97.5 35.5c-36.6667 0 -68.3333 -10.3333 -95 -31c-26.6667 -20.6667 -40 -46 -40 -76c0 -14 3.66667 -27.6667 11 -41c7.33333 -13.3333 14.1667 -23 20.5 -29s11.8333 -10.3333 16.5 -13zM342 243\nl-125 85c-36.6667 -16.6667 -67.5 -40.8333 -92.5 -72.5c-25 -31.6667 -37.5 -66.1667 -37.5 -103.5c0 -40 15.3333 -74 46 -102c30.6667 -28 68.6667 -42 114 -42c42.6667 0 79.6667 12.5 111 37.5s47 55.8333 47 92.5c0 39.3333 -21 74.3333 -63 105z"
            },
            "9": {
                x: 482,
                d: "M364 296v39c-3.33333 -10 -7.83333 -20.5 -13.5 -31.5s-13.5 -23 -23.5 -36s-23.3333 -23.5 -40 -31.5s-34.6667 -12 -54 -12c-51.3333 0 -94.6667 20.6667 -130 62c-35.3333 41.3333 -53 92.6667 -53 154c0 64.6667 19.3333 117.667 58 159\nc38.6667 41.3333 84 62 136 62c21.3333 0 42 -4.66667 62 -14s40 -25.1667 60 -47.5s36 -56.6667 48 -103c12 -46.3333 18 -101.833 18 -166.5c0 -104.667 -23.3333 -188.5 -70 -251.5s-100.667 -94.5 -162 -94.5c-38 0 -69.3333 8.33333 -94 25\nc-24.6667 16.6667 -37 41.3333 -37 74c0 14.6667 4 24.6667 12 30s16 8 24 8c8.66667 0 16.8333 -3 24.5 -9c7.66667 -6 11.5 -15 11.5 -27c0 -12.6667 -4.16667 -22.1667 -12.5 -28.5c-8.33333 -6.33333 -19.1667 -8.5 -32.5 -6.5c16.6667 -28 50.6667 -42 102 -42\nc44.6667 0 83.5 23 116.5 69s49.5 119 49.5 219zM235 240c29.3333 0 54.1667 10.1667 74.5 30.5c20.3333 20.3333 34.1667 43.1667 41.5 68.5s11 51.3333 11 78c0 11.3333 -0.166667 21.6667 -0.5 31s-1.5 23.8333 -3.5 43.5s-5.66667 36.8333 -11 51.5\ns-12 29.8333 -20 45.5s-19.1667 27.8333 -33.5 36.5s-30.8333 13 -49.5 13c-40.6667 0 -73.3333 -18.3333 -98 -55c-8.66667 -14 -15.1667 -29.1667 -19.5 -45.5c-4.33333 -16.3333 -6.83333 -30.6667 -7.5 -43s-1 -30.8333 -1 -55.5c0 -63.3333 7 -108 21 -134\nc22.6667 -43.3333 54.6667 -65 96 -65z"
            },
            ff: {
                x: 640,
                d: "M430 404v-333c0 -21.3333 4.5 -34.1667 13.5 -38.5c9 -4.33333 32.5 -6.5 70.5 -6.5v-26c-18 1.33333 -53.6667 2 -107 2c-48 0 -80 -0.666667 -96 -2v26c31.3333 0 50.5 2.33333 57.5 7c7 4.66667 10.5 16.6667 10.5 36v335h-198v-335c0 -20 3.5 -32.1667 10.5 -36.5\nc7 -4.33333 26.1667 -6.5 57.5 -6.5v-26c-16 1.33333 -47.3333 2 -94 2c-46 0 -77 -0.666667 -93 -2v26c31.3333 0 50.5 2.33333 57.5 7c7 4.66667 10.5 16.6667 10.5 36v335h-80v26h80v117c0 50 19.8333 88.3333 59.5 115s82.5 40 128.5 40c46.6667 0 80 -14.3333 100 -43\nc30 28.6667 62 43 96 43c20.6667 0 38.5 -5.66667 53.5 -17s22.5 -26 22.5 -44c0 -12 -3.5 -20.6667 -10.5 -26s-14.8333 -8 -23.5 -8s-16.5 2.66667 -23.5 8s-10.5 14 -10.5 26c0 18 9.66667 29.3333 29 34c-10.6667 7.33333 -23.3333 11 -38 11\nc-22.6667 0 -42.5 -12.5 -59.5 -37.5s-25.5 -57.5 -25.5 -97.5v-121h116v-26h-114zM179 430h200v119c0 18 1.66667 33 5 45c-1.33333 0 -3.83333 0.833333 -7.5 2.5s-7.5 5.16667 -11.5 10.5s-6 12 -6 20c0 21.3333 11.6667 32.6667 35 34c-18 16.6667 -44 25 -78 25\nc-36 0 -67.8333 -12.5 -95.5 -37.5s-41.5 -58.8333 -41.5 -101.5v-117z"
            },
            fi: {
                x: 548,
                d: "M430 439v-370c0 -20 3.5 -32.1667 10.5 -36.5c7 -4.33333 26.1667 -6.5 57.5 -6.5v-26c-16 1.33333 -47.3333 2 -94 2c-46 0 -77 -0.666667 -93 -2v26c31.3333 0 50.5 2.33333 57.5 7c7 4.66667 10.5 16.6667 10.5 36v282c0 22 -3.16667 36.3333 -9.5 43\ns-20.1667 10 -41.5 10h-147v-335c0 -20 3.5 -32.1667 10.5 -36.5c7 -4.33333 26.1667 -6.5 57.5 -6.5v-26c-16 1.33333 -47.3333 2 -94 2c-46 0 -77 -0.666667 -93 -2v26c31.3333 0 50.5 2.33333 57.5 7c7 4.66667 10.5 16.6667 10.5 36v335h-80v26h80v117\nc0 50 19.8333 88.3333 59.5 115s82.8333 40 129.5 40c30.6667 0 56.6667 -8.5 78 -25.5s32 -38.1667 32 -63.5c0 -12.6667 -3.5 -22 -10.5 -28s-15.5 -9 -25.5 -9c-10.6667 0 -19.3333 3.16667 -26 9.5s-10 15.1667 -10 26.5c0 23.3333 14 35 42 35\nc-16.6667 26 -44.6667 39 -84 39c-34 0 -65.1667 -12.1667 -93.5 -36.5s-42.5 -58.5 -42.5 -102.5v-117h114c9.33333 0 16 0.333333 20 1c32.6667 3.33333 71.6667 6 117 8z"
            },
            fl: {
                x: 548,
                d: "M430 694v-625c0 -20 3.5 -32.1667 10.5 -36.5c7 -4.33333 26.1667 -6.5 57.5 -6.5v-26c-16 1.33333 -47.3333 2 -94 2c-46 0 -77 -0.666667 -93 -2v26c31.3333 0 50.5 2.33333 57.5 7c7 4.66667 10.5 16.6667 10.5 36v335h-198v-335c0 -20 3.5 -32.1667 10.5 -36.5\nc7 -4.33333 26.1667 -6.5 57.5 -6.5v-26c-16 1.33333 -47.3333 2 -94 2c-46 0 -77 -0.666667 -93 -2v26c31.3333 0 50.5 2.33333 57.5 7c7 4.66667 10.5 16.6667 10.5 36v335h-80v26h80v117c0 49.3333 19.5 87.5 58.5 114.5s82.8333 40.5 131.5 40.5c32 0 57.6667 -5 77 -15\nc13.3333 3.33333 24.3333 5.66667 33 7zM179 430h200v180c-13.3333 5.33333 -20 15.6667 -20 31c0 11.3333 4.33333 20 13 26c4 4 6 6.33333 6 7c0 8 -20 12 -60 12c-38 0 -70.6667 -12.6667 -98 -38s-41 -59 -41 -101v-117z"
            },
            ffi: {
                x: 798,
                d: "M680 439v-370c0 -20 3.5 -32.1667 10.5 -36.5c7 -4.33333 26.1667 -6.5 57.5 -6.5v-26c-16 1.33333 -47.3333 2 -94 2c-46 0 -77 -0.666667 -93 -2v26c31.3333 0 50.5 2.33333 57.5 7c7 4.66667 10.5 16.6667 10.5 36v282c0 22 -3.16667 36.3333 -9.5 43\ns-20.1667 10 -41.5 10h-147v-335c0 -20 3.5 -32.1667 10.5 -36.5c7 -4.33333 26.1667 -6.5 57.5 -6.5v-26c-16 1.33333 -47.3333 2 -94 2c-46 0 -77 -0.666667 -93 -2v26c31.3333 0 50.5 2.33333 57.5 7c7 4.66667 10.5 16.6667 10.5 36v335h-199v-335\nc0 -20 3.5 -32.1667 10.5 -36.5c7 -4.33333 26.1667 -6.5 57.5 -6.5v-26c-16 1.33333 -47.3333 2 -94 2c-46 0 -77 -0.666667 -93 -2v26c31.3333 0 50.5 2.33333 57.5 7c7 4.66667 10.5 16.6667 10.5 36v335h-80v26h80v117c0 50 19.8333 88.3333 59.5 115s82.5 40 128.5 40\nc26 0 47.8333 -5.5 65.5 -16.5s30.1667 -24.1667 37.5 -39.5c39.3333 37.3333 88.6667 56 148 56c30.6667 0 56.6667 -8.5 78 -25.5s32 -38.1667 32 -63.5c0 -12.6667 -3.5 -22 -10.5 -28s-15.5 -9 -25.5 -9c-10.6667 0 -19.3333 3.16667 -26 9.5s-10 15.1667 -10 26.5\nc0 23.3333 14 35 42 35c-16.6667 26 -44.6667 39 -84 39c-34 0 -65.1667 -12.1667 -93.5 -36.5s-42.5 -58.5 -42.5 -102.5v-117h114c9.33333 0 16 0.333333 20 1c32.6667 3.33333 71.6667 6 117 8zM179 430h201v117c0 14 0.666667 24 2 30c-17.3333 5.33333 -26 17 -26 35\nc0 23.3333 14.3333 35 43 35c-16 26 -44 39 -84 39c-34.6667 0 -66 -12.1667 -94 -36.5s-42 -58.5 -42 -102.5v-117z"
            },
            ffl: {
                x: 798,
                d: "M680 694v-625c0 -20 3.5 -32.1667 10.5 -36.5c7 -4.33333 26.1667 -6.5 57.5 -6.5v-26c-16 1.33333 -47.3333 2 -94 2c-46 0 -77 -0.666667 -93 -2v26c31.3333 0 50.5 2.33333 57.5 7c7 4.66667 10.5 16.6667 10.5 36v335h-198v-335c0 -20 3.5 -32.1667 10.5 -36.5\nc7 -4.33333 26.1667 -6.5 57.5 -6.5v-26c-16 1.33333 -47.3333 2 -94 2c-46 0 -77 -0.666667 -93 -2v26c31.3333 0 50.5 2.33333 57.5 7c7 4.66667 10.5 16.6667 10.5 36v335h-199v-335c0 -20 3.5 -32.1667 10.5 -36.5c7 -4.33333 26.1667 -6.5 57.5 -6.5v-26\nc-16 1.33333 -47.3333 2 -94 2c-46 0 -77 -0.666667 -93 -2v26c31.3333 0 50.5 2.33333 57.5 7c7 4.66667 10.5 16.6667 10.5 36v335h-80v26h80v117c0 50 19.6667 88.3333 59 115s82.6667 40 130 40c27.3333 0 50.1667 -5 68.5 -15s30.8333 -22.3333 37.5 -37\nc39.3333 34.6667 87.6667 52 145 52c32 0 57.6667 -5 77 -15c13.3333 3.33333 24.3333 5.66667 33 7zM179 430h201v117c0 18.6667 2.33333 34.3333 7 47c-18 4.66667 -27 15.6667 -27 33c0 20.6667 11.6667 32 35 34c-18.6667 16.6667 -44.6667 25 -78 25\nc-37.3333 0 -69.6667 -12.5 -97 -37.5s-41 -58.8333 -41 -101.5v-117zM429 547v-117h200v180c-13.3333 5.33333 -20 15.6667 -20 31c0 11.3333 4.33333 20 13 26c4 4 6 6.33333 6 7c0 8 -20 12 -60 12c-38 0 -70.6667 -12.6667 -98 -38s-41 -59 -41 -101z"
            },
            "≰": {
                x: null,
                d: "M452 191l-119 -288h393c8 0 14 -0.166667 18 -0.5s7.83333 -2.16667 11.5 -5.5c3.66667 -3.33333 5.5 -8 5.5 -14c0 -13.3333 -12.3333 -20 -37 -20h-408l-59 -142c-6.66667 -16 -14.3333 -24 -23 -24c-6 0 -10.8333 2 -14.5 6s-5.5 8.66667 -5.5 14s19.6667 54 59 146\nh-86c-24.6667 0 -37 6.66667 -37 20c0 6 1.83333 10.6667 5.5 14c3.66667 3.33333 7.5 5.16667 11.5 5.5s10 0.5 18 0.5h104l128 305l-246 116c-14 6.66667 -21 14.3333 -21 23s7 16.3333 21 23l389 183l102 244c4 4 9 6 15 6s10.8333 -2 14.5 -6s5.5 -8.66667 5.5 -14\nc0 -3.33333 -2 -9.66667 -6 -19l-77 -186l108 52c6.66667 4 13 6 19 6c5.33333 0 10 -1.83333 14 -5.5s6 -8.5 6 -14.5c0 -5.33333 -1.33333 -9.16667 -4 -11.5s-8.66667 -5.83333 -18 -10.5l-148 -71l-123 -295l271 -127c5.33333 -2.66667 8.66667 -4.5 10 -5.5l6 -4.5\nc2.66667 -2 4.33333 -4 5 -6s1 -4.66667 1 -8c0 -5.33333 -2 -10 -6 -14s-8.66667 -6 -14 -6c-3.33333 0 -49 21 -137 63zM537 498l-320 -151l215 -102z"
            },
            "≱": {
                x: null,
                d: "M451 188l-118 -285h393c8 0 14 -0.166667 18 -0.5s7.83333 -2.16667 11.5 -5.5c3.66667 -3.33333 5.5 -8 5.5 -14c0 -13.3333 -12.3333 -20 -37 -20h-408l-59 -142c-6.66667 -16 -14.3333 -24 -23 -24c-6 0 -10.8333 2 -14.5 6s-5.5 8.66667 -5.5 14s19.6667 54 59 146\nh-86c-24.6667 0 -37 6.66667 -37 20c0 6 1.83333 10.6667 5.5 14c3.66667 3.33333 7.5 5.16667 11.5 5.5s10 0.5 18 0.5h104l109 260l-212 -100c-8 -4 -13.3333 -6 -16 -6c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 9.33333 6.66667 17 20 23l250 118l90 216l-338 160\nc-6 2.66667 -10.3333 4.83333 -13 6.5s-4.83333 3.66667 -6.5 6s-2.5 5.5 -2.5 9.5c0 6 2 10.8333 6 14.5s8.66667 5.5 14 5.5c4.66667 0 11.6667 -2.33333 21 -7l335 -158l136 326c4 4 9 6 15 6s10.8333 -2 14.5 -6s5.5 -8.66667 5.5 -14c0 -3.33333 -2 -9.66667 -6 -19\nl-129 -311l180 -84c12.6667 -6 19 -13.3333 19 -22c0 -6 -1.5 -10.3333 -4.5 -13s-8.83333 -6 -17.5 -10zM546 417l-72 -174l220 104z"
            },
            "≮": {
                x: null,
                d: "M560 412l-132 -261c14 -7.33333 47.1667 -23.3333 99.5 -48c52.3333 -24.6667 101.833 -47.8333 148.5 -69.5c46.6667 -21.6667 71.6667 -33.5 75 -35.5c6.66667 -6.66667 10 -12.3333 10 -17c0 -6.66667 -2.16667 -11.6667 -6.5 -15\nc-4.33333 -3.33333 -8.83333 -5 -13.5 -5c-4 0 -12.3333 3 -25 9l-36 17l-271 128c-101.333 -202.667 -155 -307.333 -161 -314c-3.33333 -4.66667 -8 -7 -14 -7c-5.33333 0 -10 1.83333 -14 5.5s-6 8.5 -6 14.5c0 4.66667 4.66667 15.6667 14 33l145 285l-203 96\nc-0.666667 0 -1.33333 0.333333 -2 1c-12 6 -18 13 -18 21s6.33333 15.3333 19 22l362 170l125 245c6.66667 12.6667 13.6667 19 21 19c5.33333 0 10 -1.83333 14 -5.5s6 -8.5 6 -14.5c0 -4 -2.66667 -10.6667 -8 -20l-99 -196l135 64c8 3.33333 13.3333 5 16 5\nc4.66667 0 9.16667 -1.66667 13.5 -5s6.5 -8.33333 6.5 -15c0 -8.66667 -6.66667 -16 -20 -22zM502 384l-285 -134l174 -82z"
            },
            "≯": {
                x: null,
                d: "M742 228l-362 -171l-123 -241c-5.33333 -9.33333 -9.33333 -15.3333 -12 -18c-3.33333 -2.66667 -7 -4 -11 -4c-5.33333 0 -10 1.83333 -14 5.5s-6 8.5 -6 14.5c0 10 35.6667 81.6667 107 215l-81 -37c-5.33333 -3.33333 -17.5 -9.33333 -36.5 -18\nc-19 -8.66667 -30.1667 -13 -33.5 -13c-5.33333 0 -10 2 -14 6s-6 8.33333 -6 13c0 9.33333 6.66667 17 20 23l181 85l133 261l-314 148c-13.3333 6 -20 13.6667 -20 23c0 4.66667 2 9 6 13s8.66667 6 14 6c4 0 10 -2 18 -6l314 -148l154 302\nc6.66667 12.6667 13.6667 19 21 19c5.33333 0 10 -1.83333 14 -5.5s6 -8.5 6 -14.5c0 -4 -2.66667 -10.6667 -8 -20l-151 -298l203 -96c0.666667 0 1.33333 -0.333333 2 -1c12 -6 18 -13 18 -21c0 -9.33333 -6.33333 -16.6667 -19 -22zM520 332l-111 -216l285 134z"
            },
            "⊀": {
                x: null,
                d: "M455 206l-206 -406c-4 -4 -9 -6 -15 -6s-10.8333 2 -14.5 6s-5.5 8.66667 -5.5 14c0 4 2.66667 10.6667 8 20l192 379c-68 11.3333 -141.333 17 -220 17c-11.3333 0 -19.5 0.166667 -24.5 0.5s-9.5 2 -13.5 5s-6 7.83333 -6 14.5c0 6 2 10.6667 6 14s8 5.16667 12 5.5\ns10 0.5 18 0.5c120 0 209.333 8 268 24c1.33333 1.33333 4 5.66667 8 13l200 393c4 4 9 6 15 6s10.8333 -2 14.5 -6s5.5 -8.66667 5.5 -14c0 -4 -2.66667 -10.6667 -8 -20l-181 -358c36 10.6667 67.5 24 94.5 40s47.3333 30.8333 61 44.5s25 30 34 49s14.6667 33.3333 17 43\ns4.5 21.5 6.5 35.5c2 12.6667 8.66667 19 20 19c13.3333 0 20 -7 20 -21c0 -25.3333 -8.33333 -55 -25 -89c-22 -44 -53.6667 -79 -95 -105s-94.3333 -47.6667 -159 -65c-2 -4 -3.66667 -7.66667 -5 -11l-3 -6c39.3333 -8 74.8333 -19 106.5 -33s57.1667 -28.5 76.5 -43.5\ns36.1667 -31.5 50.5 -49.5s24.6667 -34 31 -48s11.5 -28.3333 15.5 -43c4 -14.6667 6.16667 -24.6667 6.5 -30c0.333333 -5.33333 0.5 -9.66667 0.5 -13c0 -7.33333 -2.16667 -12.8333 -6.5 -16.5c-4.33333 -3.66667 -8.83333 -5.5 -13.5 -5.5\nc-11.3333 0 -18.3333 9.33333 -21 28c-17.3333 111.333 -105.667 184 -265 218z"
            },
            "⊁": {
                x: null,
                d: "M455 206l-206 -406c-4 -4 -9 -6 -15 -6s-10.8333 2 -14.5 6s-5.5 8.66667 -5.5 14c0 1.33333 5.66667 14.3333 17 39l67 131l18.5 37c9 18 17 33.8333 24 47.5c7 13.6667 10.8333 20.8333 11.5 21.5l51 102c-36 -10.6667 -67.3333 -23.8333 -94 -39.5\ns-47 -30.5 -61 -44.5s-25.5 -30.5 -34.5 -49.5s-14.6667 -33.5 -17 -43.5s-4.5 -22.3333 -6.5 -37c-2 -12 -8.66667 -18 -20 -18c-4.66667 0 -9.16667 1.83333 -13.5 5.5c-4.33333 3.66667 -6.5 9.16667 -6.5 16.5c0 26 8.33333 55.6667 25 89c22.6667 45.3333 55 81 97 107\ns94.3333 47 157 63c2 4 4 7.66667 6 11l2 6c-39.3333 8 -74.8333 19 -106.5 33s-57.1667 28.5 -76.5 43.5c-19.3333 15 -36.1667 31.5 -50.5 49.5s-24.6667 34 -31 48s-11.5 28.3333 -15.5 43s-6.16667 24.6667 -6.5 30s-0.5 9.66667 -0.5 13c0 14 6.66667 21 20 21\nc5.33333 0 9.5 -1.5 12.5 -4.5s5 -6 6 -9s1.83333 -7.5 2.5 -13.5c17.3333 -112 105.667 -184.667 265 -218l206 406c4 4 9 6 15 6s10.8333 -2 14.5 -6s5.5 -8.66667 5.5 -14c0 -4 -2.66667 -10.6667 -8 -20l-192 -379c75.3333 -11.3333 148.667 -17 220 -17\nc11.3333 0 19.5 -0.166667 24.5 -0.5s9.5 -2 13.5 -5s6 -7.83333 6 -14.5c0 -6 -2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-10 -0.5 -18 -0.5c-103.333 0 -193.333 -8 -270 -24z"
            },
            "⋠": {
                x: null,
                d: "M495 293l-162 -390h393c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-410l-59 -142c-6.66667 -16 -14.3333 -24 -23 -24c-6 0 -10.8333 2 -14.5 6\ns-5.5 8.66667 -5.5 14s19.6667 54 59 146h-88c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2 10.6667 6 14c4 3.33333 8 5.16667 12 5.5s9.66667 0.5 17 0.5h104l167 400c-75.3333 16 -161.333 24 -258 24\nc-13.3333 0 -22.6667 0.333333 -28 1s-10 2.33333 -14 5s-6 7.33333 -6 14c0 9.33333 3.16667 15 9.5 17s19.1667 3 38.5 3c114.667 0 214.333 11.3333 299 34l165 396c4 4 9 6 15 6s10.8333 -2 14.5 -6s5.5 -8.66667 5.5 -14c0 -3.33333 -2 -9.66667 -6 -19l-144 -346\nc35.3333 14 64.8333 29.8333 88.5 47.5s41.1667 36.6667 52.5 57c11.3333 20.3333 19 36.6667 23 49s7.33333 27.5 10 45.5c2 12.6667 8.66667 19 20 19c13.3333 0 20 -7 20 -21c0 -26.6667 -9.33333 -58.6667 -28 -96c-35.3333 -69.3333 -104.333 -119.333 -207 -150\nl-15 -39c77.3333 -22 138.333 -55.3333 183 -100c22.6667 -24 39.5 -51.3333 50.5 -82c11 -30.6667 16.5 -53.6667 16.5 -69c0 -7.33333 -2.16667 -12.8333 -6.5 -16.5c-4.33333 -3.66667 -8.83333 -5.5 -13.5 -5.5c-11.3333 0 -18.3333 9.33333 -21 28\nc-16 102.667 -91 172 -225 208zM442 346l30 -6l5 15l-35 -8v-1z"
            },
            "⋡": {
                x: null,
                d: "M502 311l-169 -408h393c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-410l-59 -142c-6.66667 -16 -14.3333 -24 -23 -24c-6 0 -10.8333 2 -14.5 6\ns-5.5 8.66667 -5.5 14s19.6667 54 59 146h-88c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2 10.6667 6 14c4 3.33333 8 5.16667 12 5.5s9.66667 0.5 17 0.5h104l166 399c-76.6667 -14 -138.667 -40.3333 -186 -79\nc-43.3333 -34.6667 -69.6667 -84 -79 -148c-2 -12 -8.66667 -18 -20 -18c-4.66667 0 -9.16667 1.83333 -13.5 5.5c-4.33333 3.66667 -6.5 9.16667 -6.5 16.5c0 25.3333 8 54.3333 24 87c21.3333 43.3333 54.3333 80.1667 99 110.5c44.6667 30.3333 109.667 53.5 195 69.5v1\nc-143.333 28.6667 -238.667 83.3333 -286 164c-8.66667 15.3333 -15.6667 31.8333 -21 49.5s-8.5 30.5 -9.5 38.5s-1.5 13.3333 -1.5 16c0 14 6.66667 21 20 21c5.33333 0 9.5 -1.5 12.5 -4.5s5 -6 6 -9s1.83333 -7.5 2.5 -13.5c9.33333 -60.6667 38.5 -109.167 87.5 -145.5\ns119.5 -62.5 211.5 -78.5l172 412c4 4 9 6 15 6s10.8333 -2 14.5 -6s5.5 -8.66667 5.5 -14c0 -3.33333 -2 -9.66667 -6 -19l-160 -385c40 -5.33333 70.3333 -8.33333 91 -9l109 -3c20 0 30 -6.66667 30 -20c0 -9.33333 -3 -15 -9 -17s-16.6667 -3 -32 -3\nc-86 0 -158.667 -5.33333 -218 -16z"
            },
            "⋨": {
                x: 965,
                d: "M486 -144l-97 -177c-6.66667 -12 -11.1667 -19.3333 -13.5 -22s-6.5 -4 -12.5 -4c-13.3333 0 -20 6.66667 -20 20c0 4 3 11 9 21l104 190c-52.6667 44.6667 -99.3333 67 -140 67c-20 0 -39.5 -4.5 -58.5 -13.5s-36.6667 -25.5 -53 -49.5s-25.1667 -54 -26.5 -90\nc0 -4 -1.16667 -8.83333 -3.5 -14.5s-5.83333 -8.5 -10.5 -8.5c-9.33333 0 -14 10.6667 -14 32c0 50.6667 15.3333 96.6667 46 138c30.6667 41.3333 70.6667 62 120 62c28.6667 0 54.8333 -6.66667 78.5 -20c23.6667 -13.3333 51.8333 -34 84.5 -62l97 177\nc6.66667 12 11.1667 19.3333 13.5 22s6.5 4 12.5 4c13.3333 0 20 -6.66667 20 -20c0 -4 -3 -11 -9 -21l-104 -190c52.6667 -44.6667 99.3333 -67 140 -67c36.6667 0 68.3333 13.8333 95 41.5c26.6667 27.6667 41 62.5 43 104.5c0 20 4.66667 30 14 30s14 -10.6667 14 -32\nc0 -50.6667 -15.3333 -96.6667 -46 -138c-30.6667 -41.3333 -70.6667 -62 -120 -62c-28.6667 0 -54.8333 6.66667 -78.5 20s-51.8333 34 -84.5 62zM467 442c150 -29.3333 248 -87 294 -173c18 -34.6667 27 -66.3333 27 -95c0 -14 -6.66667 -21 -20 -21\nc-11.3333 0 -18.3333 8.66667 -21 26c-7.33333 45.3333 -26.3333 85.6667 -57 121s-82.6667 63.6667 -156 85c-80.6667 23.3333 -183 35.6667 -307 37c-22 0 -33.3333 0.333333 -34 1c-2.66667 0 -5.33333 1.33333 -8 4c-5.33333 3.33333 -8 8.33333 -8 15\nc0 13.3333 9.66667 20 29 20c126.667 0 228.333 10.3333 305 31c38.6667 10 72.3333 22.3333 101 37s51 29 67 43s29.1667 30.3333 39.5 49s17.1667 34.3333 20.5 47s6.33333 27.6667 9 45c2.66667 12 9.33333 18 20 18c5.33333 0 10 -2 14 -6s6 -9 6 -15\nc0 -27.3333 -8 -56.6667 -24 -88c-22 -43.3333 -55.5 -80.1667 -100.5 -110.5c-45 -30.3333 -110.5 -53.8333 -196.5 -70.5z"
            },
            "⋩": {
                x: 965,
                d: "M486 -144l-97 -177c-6.66667 -12 -11.1667 -19.3333 -13.5 -22s-6.5 -4 -12.5 -4c-13.3333 0 -20 6.66667 -20 20c0 4 3 11 9 21l104 190c-52.6667 44.6667 -99.3333 67 -140 67c-20 0 -39.5 -4.5 -58.5 -13.5s-36.6667 -25.5 -53 -49.5s-25.1667 -54 -26.5 -90\nc0 -4 -1.16667 -8.83333 -3.5 -14.5s-5.83333 -8.5 -10.5 -8.5c-9.33333 0 -14 10.6667 -14 32c0 50.6667 15.3333 96.6667 46 138c30.6667 41.3333 70.6667 62 120 62c28.6667 0 54.8333 -6.66667 78.5 -20c23.6667 -13.3333 51.8333 -34 84.5 -62l97 177\nc6.66667 12 11.1667 19.3333 13.5 22s6.5 4 12.5 4c13.3333 0 20 -6.66667 20 -20c0 -4 -3 -11 -9 -21l-104 -190c52.6667 -44.6667 99.3333 -67 140 -67c36.6667 0 68.3333 13.8333 95 41.5c26.6667 27.6667 41 62.5 43 104.5c0 20 4.66667 30 14 30s14 -10.6667 14 -32\nc0 -50.6667 -15.3333 -96.6667 -46 -138c-30.6667 -41.3333 -70.6667 -62 -120 -62c-28.6667 0 -54.8333 6.66667 -78.5 20s-51.8333 34 -84.5 62zM498 442c-96.6667 18.6667 -172 49.3333 -226 92c-27.3333 21.3333 -48.8333 47.5 -64.5 78.5s-24.6667 53.3333 -27 67\ns-3.5 24.1667 -3.5 31.5c0 6 2 11 6 15s8.66667 6 14 6c11.3333 0 18.3333 -7.66667 21 -23c10.6667 -72.6667 48.5 -128.667 113.5 -168c65 -39.3333 160.5 -64 286.5 -74c42.6667 -3.33333 82.6667 -5 120 -5c22 0 33.3333 -0.333333 34 -1\nc2.66667 0 5.33333 -1.33333 8 -4c5.33333 -3.33333 8 -8.33333 8 -15c0 -13.3333 -9.66667 -20 -29 -20c-334.667 -2 -514.333 -79.6667 -539 -233c-2 -14 -4.33333 -23.5 -7 -28.5s-8 -7.5 -16 -7.5c-13.3333 0 -20 7 -20 21c0 34 12.3333 71 37 111\nc46.6667 77.3333 141.333 129.667 284 157z"
            },
            "⋦": {
                x: 965,
                d: "M769 690l-525 -248l524 -247c13.3333 -6 20 -13.3333 20 -22c0 -5.33333 -2 -10 -6 -14s-8.66667 -6 -14 -6c-3.33333 0 -9.33333 2.33333 -18 7l-553 260c-13.3333 6 -20 13.3333 -20 22c0 9.33333 6.66667 17 20 23l553 261c8 4 14 6 18 6c5.33333 0 10 -2 14 -6\ns6 -8.66667 6 -14c0 -8 -6.33333 -15.3333 -19 -22zM486 -144l-97 -177c-6.66667 -12 -11.1667 -19.3333 -13.5 -22s-6.5 -4 -12.5 -4c-13.3333 0 -20 6.66667 -20 20c0 4 3 11 9 21l104 190c-52.6667 44.6667 -99.3333 67 -140 67c-20 0 -39.5 -4.5 -58.5 -13.5\ns-36.6667 -25.5 -53 -49.5s-25.1667 -54 -26.5 -90c0 -4 -1.16667 -8.83333 -3.5 -14.5s-5.83333 -8.5 -10.5 -8.5c-9.33333 0 -14 10.6667 -14 32c0 50.6667 15.3333 96.6667 46 138c30.6667 41.3333 70.6667 62 120 62c28.6667 0 54.8333 -6.66667 78.5 -20\nc23.6667 -13.3333 51.8333 -34 84.5 -62l97 177c6.66667 12 11.1667 19.3333 13.5 22s6.5 4 12.5 4c13.3333 0 20 -6.66667 20 -20c0 -4 -3 -11 -9 -21l-104 -190c52.6667 -44.6667 99.3333 -67 140 -67c36.6667 0 68.3333 13.8333 95 41.5\nc26.6667 27.6667 41 62.5 43 104.5c0 20 4.66667 30 14 30s14 -10.6667 14 -32c0 -50.6667 -15.3333 -96.6667 -46 -138c-30.6667 -41.3333 -70.6667 -62 -120 -62c-28.6667 0 -54.8333 6.66667 -78.5 20s-51.8333 34 -84.5 62z"
            },
            "⋧": {
                x: 965,
                d: "M768 420l-553 -260c-8.66667 -4.66667 -14.6667 -7 -18 -7c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 8.66667 6.33333 16 19 22l525 248l-524 247c-0.666667 0 -1.33333 0.333333 -2 1c-12 6 -18 13 -18 21c0 5.33333 2 10 6 14s8.66667 6 14 6\nc4 0 10.6667 -2.33333 20 -7l551 -260c13.3333 -6.66667 20 -14.3333 20 -23s-6.66667 -16 -20 -22zM486 -144l-97 -177c-6.66667 -12 -11.1667 -19.3333 -13.5 -22s-6.5 -4 -12.5 -4c-13.3333 0 -20 6.66667 -20 20c0 4 3 11 9 21l104 190\nc-52.6667 44.6667 -99.3333 67 -140 67c-20 0 -39.5 -4.5 -58.5 -13.5s-36.6667 -25.5 -53 -49.5s-25.1667 -54 -26.5 -90c0 -4 -1.16667 -8.83333 -3.5 -14.5s-5.83333 -8.5 -10.5 -8.5c-9.33333 0 -14 10.6667 -14 32c0 50.6667 15.3333 96.6667 46 138\nc30.6667 41.3333 70.6667 62 120 62c28.6667 0 54.8333 -6.66667 78.5 -20c23.6667 -13.3333 51.8333 -34 84.5 -62l97 177c6.66667 12 11.1667 19.3333 13.5 22s6.5 4 12.5 4c13.3333 0 20 -6.66667 20 -20c0 -4 -3 -11 -9 -21l-104 -190\nc52.6667 -44.6667 99.3333 -67 140 -67c36.6667 0 68.3333 13.8333 95 41.5c26.6667 27.6667 41 62.5 43 104.5c0 20 4.66667 30 14 30s14 -10.6667 14 -32c0 -50.6667 -15.3333 -96.6667 -46 -138c-30.6667 -41.3333 -70.6667 -62 -120 -62\nc-28.6667 0 -54.8333 6.66667 -78.5 20s-51.8333 34 -84.5 62z"
            },
            "≨": {
                x: 965,
                d: "M765 719l-516 -217l518 -217l8 -4c1.33333 -0.666667 3.33333 -2 6 -4s4.5 -4 5.5 -6s1.5 -4.66667 1.5 -8c0 -5.33333 -2 -10 -6 -14s-8.66667 -6 -14 -6c-3.33333 0 -9.66667 2 -19 6l-550 231c-14.6667 6.66667 -22 14 -22 22c0 9.33333 7.33333 17 22 23l551 231\nc10.6667 4 16.6667 6 18 6c5.33333 0 10 -2 14 -6s6 -8.66667 6 -14c0 -6 -1.66667 -10.5 -5 -13.5s-9.33333 -6.16667 -18 -9.5zM445 -214l-60 -145c-5.33333 -13.3333 -12.6667 -20 -22 -20c-4.66667 0 -9.16667 1.83333 -13.5 5.5s-6.5 8.16667 -6.5 13.5\nc0 2 24.6667 62.3333 74 181c-33.3333 20 -67 30 -101 30c-32 0 -62.5 -9.66667 -91.5 -29s-44.5 -47.6667 -46.5 -85c0 -4 -1.16667 -8.83333 -3.5 -14.5s-5.83333 -8.5 -10.5 -8.5c-9.33333 0 -14 10 -14 30c0 45.3333 16.1667 83.8333 48.5 115.5\nc32.3333 31.6667 71.5 47.5 117.5 47.5c34.6667 0 69.6667 -10 105 -30c8 -4.66667 12.6667 -7 14 -7c0.666667 0 3.33333 4.33333 8 13l51 123c-46 30 -80.3333 50.5 -103 61.5s-47.6667 16.5 -75 16.5c-32 0 -62.5 -9.66667 -91.5 -29\nc-29 -19.3333 -44.5 -47.6667 -46.5 -85c0 -4 -1.16667 -8.83333 -3.5 -14.5s-5.83333 -8.5 -10.5 -8.5c-9.33333 0 -14 10 -14 30c0 45.3333 16.1667 83.8333 48.5 115.5c32.3333 31.6667 71.5 47.5 117.5 47.5c43.3333 0 95.3333 -20 156 -60\nc23.3333 -17.3333 36.6667 -26 40 -26c2 0 4.66667 4.33333 8 13l60 145c5.33333 13.3333 12.6667 20 22 20c4.66667 0 9.16667 -1.83333 13.5 -5.5s6.5 -8.16667 6.5 -13.5c0 -2 -24.6667 -62.3333 -74 -181c33.3333 -20 67 -30 101 -30c36 0 67.3333 10.5 94 31.5\ns41.3333 45.5 44 73.5c1.33333 21.3333 6 32 14 32c9.33333 0 14 -10.3333 14 -31c0 -44.6667 -16 -82.8333 -48 -114.5c-32 -31.6667 -71.3333 -47.5 -118 -47.5c-34.6667 0 -69.6667 10 -105 30c-8 4.66667 -12.6667 7 -14 7s-4 -4.33333 -8 -13l-51 -123\nc46 -30 80.3333 -50.5 103 -61.5s47.6667 -16.5 75 -16.5c36 0 67.3333 10.5 94 31.5s41.3333 45.5 44 73.5c1.33333 21.3333 6 32 14 32c9.33333 0 14 -10.3333 14 -31c0 -44.6667 -16 -82.8333 -48 -114.5c-32 -31.6667 -71.3333 -47.5 -118 -47.5\nc-43.3333 0 -95.3333 20 -156 60c-23.3333 17.3333 -36.6667 26 -40 26c-2 0 -4.66667 -4.33333 -8 -13z"
            },
            "≩": {
                x: 965,
                d: "M766 480l-550 -231c-9.33333 -4 -15.6667 -6 -19 -6c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 4 1.16667 7.5 3.5 10.5s4.66667 5.16667 7 6.5s6.5 3.33333 12.5 6l516 217l-518 217c-14 6 -21 13.3333 -21 22c0 5.33333 2 10 6 14s8.66667 6 14 6\nc0.666667 0 6.66667 -2 18 -6l551 -231c14.6667 -6 22 -13.6667 22 -23c0 -8 -7.33333 -15.3333 -22 -22zM445 -214l-60 -145c-5.33333 -13.3333 -12.6667 -20 -22 -20c-4.66667 0 -9.16667 1.83333 -13.5 5.5s-6.5 8.16667 -6.5 13.5c0 2 24.6667 62.3333 74 181\nc-33.3333 20 -67 30 -101 30c-32 0 -62.5 -9.66667 -91.5 -29s-44.5 -47.6667 -46.5 -85c0 -4 -1.16667 -8.83333 -3.5 -14.5s-5.83333 -8.5 -10.5 -8.5c-9.33333 0 -14 10 -14 30c0 45.3333 16.1667 83.8333 48.5 115.5c32.3333 31.6667 71.5 47.5 117.5 47.5\nc34.6667 0 69.6667 -10 105 -30c8 -4.66667 12.6667 -7 14 -7c0.666667 0 3.33333 4.33333 8 13l51 123c-46 30 -80.3333 50.5 -103 61.5s-47.6667 16.5 -75 16.5c-32 0 -62.5 -9.66667 -91.5 -29c-29 -19.3333 -44.5 -47.6667 -46.5 -85c0 -4 -1.16667 -8.83333 -3.5 -14.5\ns-5.83333 -8.5 -10.5 -8.5c-9.33333 0 -14 10 -14 30c0 45.3333 16.1667 83.8333 48.5 115.5c32.3333 31.6667 71.5 47.5 117.5 47.5c43.3333 0 95.3333 -20 156 -60c23.3333 -17.3333 36.6667 -26 40 -26c2 0 4.66667 4.33333 8 13l60 145\nc5.33333 13.3333 12.6667 20 22 20c4.66667 0 9.16667 -1.83333 13.5 -5.5s6.5 -8.16667 6.5 -13.5c0 -2 -24.6667 -62.3333 -74 -181c33.3333 -20 67 -30 101 -30c36 0 67.3333 10.5 94 31.5s41.3333 45.5 44 73.5c1.33333 21.3333 6 32 14 32\nc9.33333 0 14 -10.3333 14 -31c0 -44.6667 -16 -82.8333 -48 -114.5c-32 -31.6667 -71.3333 -47.5 -118 -47.5c-34.6667 0 -69.6667 10 -105 30c-8 4.66667 -12.6667 7 -14 7s-4 -4.33333 -8 -13l-51 -123c46 -30 80.3333 -50.5 103 -61.5s47.6667 -16.5 75 -16.5\nc36 0 67.3333 10.5 94 31.5s41.3333 45.5 44 73.5c1.33333 21.3333 6 32 14 32c9.33333 0 14 -10.3333 14 -31c0 -44.6667 -16 -82.8333 -48 -114.5c-32 -31.6667 -71.3333 -47.5 -118 -47.5c-43.3333 0 -95.3333 20 -156 60c-23.3333 17.3333 -36.6667 26 -40 26\nc-2 0 -4.66667 -4.33333 -8 -13z"
            },
            "≁": {
                x: 965,
                d: "M478 214l-140 -167c-8 -10 -15.3333 -15 -22 -15c-6 0 -10.8333 2.16667 -14.5 6.5s-5.5 8.83333 -5.5 13.5c0 5.33333 4 12.6667 12 22l138 165c-47.3333 35.3333 -90.3333 53 -129 53c-36.6667 0 -68.6667 -12.6667 -96 -38c-24.6667 -24 -37.6667 -54 -39 -90\nc-2 -20 -7.33333 -30 -16 -30c-10.6667 0 -16 13.3333 -16 40c0 52 15.6667 97.1667 47 135.5s71.3333 57.5 120 57.5c20 0 40.8333 -4.5 62.5 -13.5s39.1667 -18 52.5 -27s31.6667 -22.5 55 -40.5l140 167c8.66667 10 16 15 22 15s10.8333 -2.16667 14.5 -6.5\ns5.5 -8.83333 5.5 -13.5c0 -5.33333 -4 -12.6667 -12 -22l-138 -165c47.3333 -35.3333 90.3333 -53 129 -53c36.6667 0 68.6667 12.6667 96 38c24.6667 24 37.6667 54 39 90c1.33333 20 6.66667 30 16 30c10.6667 0 16 -13.3333 16 -40c0 -52 -15.6667 -97.1667 -47 -135.5\ns-71.3333 -57.5 -120 -57.5c-20 0 -40.8333 4.5 -62.5 13.5s-39.1667 18 -52.5 27s-31.6667 22.5 -55 40.5z"
            },
            "≇": {
                x: 965,
                d: "M477 201l-88 -154h389c8 0 14 -0.166667 18 -0.5s8.16667 -2.16667 12.5 -5.5s6.5 -8 6.5 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-414l-80 -140c-8.66667 -16 -17 -24 -25 -24c-6 0 -10.8333 2 -14.5 6s-5.5 8.66667 -5.5 14\nc0 2 2 7.66667 6 17c12 19.3333 36.3333 61.6667 73 127h-135c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2.16667 10.6667 6.5 14s8.5 5.16667 12.5 5.5s10 0.5 18 0.5h156l88 154h-246c-7.33333 0 -13 0.166667 -17 0.5\ns-8 2.16667 -12 5.5s-6 8 -6 14s2.16667 10.6667 6.5 14s8.5 5.16667 12.5 5.5s10 0.5 18 0.5h267l98 172c-14 6.66667 -26.6667 13.5 -38 20.5c-11.3333 7 -23.6667 15 -37 24s-25 16.5 -35 22.5c-47.3333 30 -89 45 -125 45c-19.3333 0 -38.6667 -3.5 -58 -10.5\nc-19.3333 -7 -37.3333 -19.5 -54 -37.5s-25.6667 -40 -27 -66c0 -15.3333 -4.66667 -23 -14 -23s-14 10 -14 30c0 46 16.1667 84.6667 48.5 116c32.3333 31.3333 71.8333 47 118.5 47c20 0 41.1667 -4.16667 63.5 -12.5s40.5 -16.6667 54.5 -25s33 -20.5 57 -36.5\nc47.3333 -32 75.6667 -48 85 -48c0.666667 0 3.66667 4 9 12l96 167c6.66667 12.6667 14 19 22 19c6 0 10.8333 -2 14.5 -6s5.5 -8.66667 5.5 -14c0 -3.33333 -2.66667 -10 -8 -20l-98 -171c8.66667 -2 19 -3 31 -3c35.3333 0 66.6667 10.3333 94 31s42 47 44 79\nc0.666667 18 5.33333 27 14 27c9.33333 0 14 -10.3333 14 -31c0 -44 -15.6667 -82 -47 -114s-71 -48 -119 -48c-21.3333 0 -41.3333 3.33333 -60 10l-89 -156h278c8 0 14 -0.166667 18 -0.5s8.16667 -2.16667 12.5 -5.5s6.5 -8 6.5 -14s-2 -10.6667 -6 -14\ns-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-303z"
            },
            "⊊": {
                x: null,
                d: "M726 596h-267c-76.6667 0 -140.667 -24.5 -192 -73.5c-51.3333 -49 -77 -107.833 -77 -176.5c0 -67.3333 25.3333 -125.667 76 -175c50.6667 -49.3333 115.333 -74 194 -74h266c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14\nc-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-269c-84.6667 0 -157 28 -217 84s-90 124.667 -90 206c0 80.6667 29.8333 149 89.5 205c59.6667 56 131.833 84 216.5 84h270c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14\ns-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5zM726 -137h-263l-85 -78c-14 -12.6667 -23.6667 -19 -29 -19c-13.3333 0 -20 6.66667 -20 20c0 4.66667 4.66667 12.3333 14 23l60 54h-198c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14\ns2 10.6667 6 14c4 3.33333 8 5.16667 12 5.5s9.66667 0.5 17 0.5h243l85 78c14 12.6667 23.6667 19 29 19c4.66667 0 8.66667 -1.33333 12 -4c3.33333 -2.66667 5.5 -5.5 6.5 -8.5s1.5 -5.5 1.5 -7.5c0 -6 -4.66667 -13.6667 -14 -23l-60 -54h218\nc7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "⊋": {
                x: null,
                d: "M451 596h-266c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h269c85.3333 0 157.833 -28 217.5 -84s89.5 -124.667 89.5 -206c0 -80.6667 -29.8333 -149 -89.5 -205s-131.833 -84 -216.5 -84h-270\nc-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h267c76.6667 0 140.667 24.3333 192 73c51.3333 48.6667 77 107.667 77 177c0 67.3333 -25.3333 125.667 -76 175\nc-50.6667 49.3333 -115.333 74 -194 74zM706 -137h-242c-44.6667 -50.6667 -68 -77 -70 -79c-11.3333 -12 -19.6667 -18 -25 -18c-13.3333 0 -20 6.66667 -20 20c0 4 4 11 12 21c3.33333 4.66667 11.1667 13.8333 23.5 27.5s20.8333 23.1667 25.5 28.5h-225\nc-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2 10.6667 6 14c4 3.33333 8 5.16667 12 5.5s9.66667 0.5 17 0.5h262c30.6667 35.3333 54 61.3333 70 78c12 12.6667 20.3333 19 25 19s8.66667 -1.33333 12 -4\nc3.33333 -2.66667 5.5 -5.5 6.5 -8.5s1.5 -5.5 1.5 -7.5c0 -6 -4 -13 -12 -21l-49 -56h205c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "⊈": {
                x: null,
                d: "M621 596l-206 -496c13.3333 -2 28.3333 -3 45 -3h266c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-269c-21.3333 0 -40.6667 1.66667 -58 5l-66 -159h393\nc7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-410l-59 -142c-6.66667 -16 -14.3333 -24 -23 -24c-6 0 -10.8333 2 -14.5 6s-5.5 8.66667 -5.5 14\ns19.6667 54 59 146h-68c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2 10.6667 6 14c4 3.33333 8 5.16667 12 5.5s9.66667 0.5 17 0.5h84l71 169c-57.3333 16 -106.667 48.8333 -148 98.5c-41.3333 49.6667 -62 108.5 -62 176.5\nc0 80.6667 29.8333 149 89.5 205c59.6667 56 131.833 84 216.5 84h138l68 161c4 4 9 6 15 6s10.8333 -2 14.5 -6s5.5 -8.66667 5.5 -14c0 -3.33333 -2 -9.66667 -6 -19l-53 -128h88c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14\ns-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-105zM578 596h-119c-76.6667 0 -140.667 -24.5 -192 -73.5c-51.3333 -49 -77 -107.833 -77 -176.5c0 -56.6667 17.6667 -106.5 53 -149.5c35.3333 -43 79.3333 -72.1667 132 -87.5z"
            },
            "⊉": {
                x: null,
                d: "M691 764l-72 -173c39.3333 -22.6667 72.8333 -55.5 100.5 -98.5s41.5 -91.8333 41.5 -146.5c0 -80.6667 -29.8333 -149 -89.5 -205s-131.833 -84 -216.5 -84h-58l-64 -154h373c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14\ns-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-390l-59 -142c-6.66667 -16 -14.3333 -24 -23 -24c-6 0 -10.8333 2 -14.5 6s-5.5 8.66667 -5.5 14s19.6667 54 59 146h-88c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5\nc-4 3.33333 -6 8 -6 14s2 10.6667 6 14c4 3.33333 8 5.16667 12 5.5s9.66667 0.5 17 0.5h104l65 154h-169c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h185l198 476\nc-36.6667 15.3333 -75.6667 23 -117 23h-266c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h269c48 0 91.3333 -9 130 -27l78 188c4 4 9 6 15 6s10.8333 -2 14.5 -6s5.5 -8.66667 5.5 -14\nc0 -3.33333 -2 -9.66667 -6 -19zM603 554l-189 -457c31.3333 0 56 0.666667 74 2c18 1.33333 41 7.16667 69 17.5s53.6667 25.5 77 45.5c58 49.3333 87 111 87 185c0 38 -9.5 75.5 -28.5 112.5s-48.8333 68.5 -89.5 94.5z"
            },
            "∦": {
                x: 839,
                d: "M675 478l-138 -138v-552c0 -25.3333 -6.66667 -38 -20 -38c-6 0 -10.6667 1.83333 -14 5.5s-5.16667 7.5 -5.5 11.5s-0.5 9.66667 -0.5 17v516l-155 -157v-359c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -7.83333 -5.5 -11.5s-8 -5.5 -14 -5.5\nc-13.3333 0 -20 12.6667 -20 38v315l-104 -103c-13.3333 -13.3333 -22.6667 -20 -28 -20s-10 2 -14 6s-6 8.66667 -6 14c0 6 4.66667 13.6667 14 23l138 137v552c0 25.3333 6.66667 38 20 38c6 0 10.6667 -1.83333 14 -5.5s5.16667 -7.5 5.5 -11.5s0.5 -9.66667 0.5 -17\nv-516l155 157v359c0 7.33333 0.166667 13 0.5 17s2.16667 7.83333 5.5 11.5s8 5.5 14 5.5c13.3333 0 20 -12.6667 20 -38v-315l100 100c16 15.3333 26.6667 23 32 23s10 -2 14 -6s6 -8.66667 6 -14s-4.66667 -12.6667 -14 -22z"
            },
            "∤": {
                x: 617,
                d: "M453 478l-124 -111v-582c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 9.66667 -0.5 17v545l-89 -80c-13.3333 -13.3333 -23.3333 -20 -30 -20c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14\ns5 12.6667 15 22l124 112v331c0 7.33333 0.166667 13 0.5 17s2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-294l89 79c13.3333 13.3333 23 20 29 20c5.33333 0 10 -2 14 -6s6 -8.66667 6 -14c0 -6 -4.66667 -13.3333 -14 -22z"
            },
            "⊬": {
                x: 909,
                d: "M464 327l-163 -187v-105c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v58l-66 -75c-10.6667 -12.6667 -19.3333 -19 -26 -19c-5.33333 0 -9.83333 2 -13.5 6s-5.5 8.66667 -5.5 14c0 4.66667 1.33333 9.33333 4 14\nc9.33333 9.33333 15 15.6667 17 19c52 59.3333 82 93.3333 90 102v503c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-292h144l272 311c9.33333 10.6667 16.6667 16 22 16s10 -1.83333 14 -5.5s6 -8.5 6 -14.5s-4 -13.3333 -12 -22\nl-248 -285h225c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-260zM410 327h-109v-125z"
            },
            "⊯": {
                x: 1020,
                d: "M619 424l-124 -119v-35h339c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-340v-195c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v230l-154 -148v-83\nc0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v44l-45 -44c-24.6667 -24 -40 -36 -46 -36c-13.3333 0 -20 6.66667 -20 20c0 6.66667 10.3333 19.6667 31 39l73 70c4.66667 4 7 12.6667 7 26v503c0 24 6.66667 36 20 36\nc6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-485l154 148v336c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-195h108c16 14 39.3333 36.3333 70 67c8 8 33 32 75 72l76 73c12 12 20.6667 18 26 18\ns10 -1.83333 14 -5.5s6 -8.5 6 -14.5s-4.33333 -13 -13 -21l-196 -189h174c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14c0 -13.3333 -12 -20 -36 -20h-215zM561 424h-66v-63z"
            },
            "⋭": {
                x: null,
                d: "M739 324l-284 -134l-105 -287h376c8 0 14 -0.166667 18 -0.5s7.83333 -2.16667 11.5 -5.5c3.66667 -3.33333 5.5 -8 5.5 -14c0 -13.3333 -12.3333 -20 -37 -20h-388l-52 -142c-2 -6 -3.66667 -10.3333 -5 -13s-3.5 -5.16667 -6.5 -7.5s-6.83333 -3.5 -11.5 -3.5\nc-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 1.33333 8.66667 26 26 74c2.66667 7.33333 11.3333 31.3333 26 72h-106c-24.6667 0 -37 6.66667 -37 20c0 6 1.83333 10.6667 5.5 14c3.66667 3.33333 7.5 5.16667 11.5 5.5s10 0.5 18 0.5h123l95 262l-217 -102\nc-8 -4 -13.3333 -6 -16 -6c-13.3333 0 -20 12 -20 36v508c0 7.33333 0.166667 13 0.5 17s2.16667 8 5.5 12s8 6 14 6c4.66667 0 11.6667 -2.33333 21 -7l325 -154l112 305c5.33333 12.6667 10 20 14 22c2.66667 0.666667 5.33333 1 8 1c5.33333 0 10 -2 14 -6\ns6 -8.66667 6 -14c0 -2.66667 -1.66667 -8.33333 -5 -17l-113 -308l190 -89c12.6667 -6 19 -13.3333 19 -22c0 -6 -1.5 -10.3333 -4.5 -13s-8.83333 -6 -17.5 -10zM694 347l-155 73l-65 -177zM190 109l233 110l80 218l-313 148v-476z"
            },
            "⋬": {
                x: null,
                d: "M419 207l-248 117c-14 6.66667 -21 14.3333 -21 23s7 16.3333 21 23l370 174l87 236c5.33333 12.6667 10 20 14 22c2.66667 0.666667 5.33333 1 8 1c5.33333 0 10 -2 14 -6s6 -8.66667 6 -14c0 -3.33333 -1.66667 -9 -5 -17l-72 -198l129 62c6.66667 4 13 6 19 6\ns10.6667 -1.83333 14 -5.5s5.16667 -7.5 5.5 -11.5s0.5 -10 0.5 -18v-508c0 -24 -6.66667 -36 -20 -36c-3.33333 0 -13.3333 4.33333 -30 13l-256 120l-105 -287h376c8 0 14 -0.166667 18 -0.5s7.83333 -2.16667 11.5 -5.5c3.66667 -3.33333 5.5 -8 5.5 -14\nc0 -13.3333 -12.3333 -20 -37 -20h-388l-52 -142c-2 -6 -3.66667 -10.3333 -5 -13s-3.5 -5.16667 -6.5 -7.5s-6.83333 -3.5 -11.5 -3.5c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 1.33333 8.66667 26 26 74c2.66667 7.33333 11.3333 31.3333 26 72h-106\nc-24.6667 0 -37 6.66667 -37 20c0 6 1.83333 10.6667 5.5 14c3.66667 3.33333 7.5 5.16667 11.5 5.5s10 0.5 18 0.5h123zM522 491l-305 -144l215 -102zM469 228l252 -119v476l-148 -70z"
            },
            "⋪": {
                x: null,
                d: "M516 435l111 250c6.66667 14 14.3333 21 23 21c5.33333 0 10 -2 14 -6s6 -8.66667 6 -14c0 -2.66667 -2.33333 -9 -7 -19l-91 -206l150 72c6.66667 4 13 6 19 6s10.6667 -1.83333 14 -5.5s5.16667 -7.5 5.5 -11.5s0.5 -10 0.5 -18v-508c0 -24 -6.66667 -36 -20 -36\nc-3.33333 0 -28 11 -74 33l-251 118c-12.6667 -27.3333 -30.5 -66.8333 -53.5 -118.5s-42.6667 -96.1667 -59 -133.5c-16.3333 -37.3333 -25.1667 -56.6667 -26.5 -58c-9.33333 -4.66667 -14.6667 -7 -16 -7c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14\nc0 2.66667 9.33333 24.6667 28 66l111 249l-209 98c-14 6.66667 -21 14.3333 -21 23c0 8.66667 7 16.3333 21 23zM491 379l-274 -129l179 -85zM547 406l-115 -258l289 -136v476z"
            },
            "⋫": {
                x: null,
                d: "M663 667l-132 -296l211 -99c12.6667 -6.66667 19 -14 19 -22c0 -9.33333 -6 -16.3333 -18 -21l-315 -149l-30 -14c-2 -2 -5.66667 -8 -11 -18l-50 -114c-2.66667 -5.33333 -12.8333 -27.8333 -30.5 -67.5c-17.6667 -39.6667 -26.8333 -60.1667 -27.5 -61.5\nc-4 -7.33333 -10 -11 -18 -11c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 3.33333 7.33333 20.6667 22 52l76 172c-109.333 -52 -165.667 -78 -169 -78c-13.3333 0 -20 12 -20 36v508c0 7.33333 0.166667 13 0.5 17s2.16667 8 5.5 12s8 6 14 6s12.3333 -2 19 -6l306 -145\nl132 297c6.66667 14 14.3333 21 23 21c5.33333 0 10 -2 14 -6s6 -8.66667 6 -14c0 -2.66667 -2.33333 -9 -7 -19zM419 120l275 130l-179 84zM364 94l115 258l-289 136v-476z"
            },
            "⇍": {
                x: 1186,
                d: "M745 327l-65 -154h320c8 0 14 -0.166667 18 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-338l-62 -147c-5.33333 -12.6667 -12.3333 -19 -21 -19c-4.66667 0 -9.16667 1.66667 -13.5 5s-6.5 8.33333 -6.5 15\nc0 2 20 50.6667 60 146h-207c24 -26.6667 44.3333 -52.1667 61 -76.5c16.6667 -24.3333 27.3333 -41.5 32 -51.5s7 -16 7 -18c0 -8 -6.66667 -12 -20 -12c-7.33333 0 -12.3333 1 -15 3l-13 22c-64.6667 120 -164.333 199 -299 237c-10.6667 2.66667 -16 7 -16 13\ns5.66667 10.3333 17 13c136 38.6667 236.333 119.667 301 243c5.33333 9.33333 9 14.8333 11 16.5s6.66667 2.5 14 2.5c13.3333 0 20 -4 20 -12c0 -2 -2.33333 -8.16667 -7 -18.5s-15.3333 -27.6667 -32 -52s-37 -49.5 -61 -75.5h306l61 144c3.33333 8 6.5 13.6667 9.5 17\ns7.16667 5 12.5 5c4.66667 0 9.16667 -1.66667 13.5 -5s6.5 -8.33333 6.5 -15c0 -1.33333 -2 -7.33333 -6 -18l-54 -128h239c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-10 -0.5 -18 -0.5h-255zM702 327h-314\nc-11.3333 0 -18.3333 -0.666667 -21 -2c-1.33333 0 -7.66667 -4.66667 -19 -14c-21.3333 -16 -57 -36.3333 -107 -61c49.3333 -24.6667 87.3333 -47 114 -67c8.66667 -6.66667 19.6667 -10 33 -10h249z"
            },
            "⇏": {
                x: 1186,
                d: "M620 495l-54 -128h207c-24 26.6667 -44.3333 52.1667 -61 76.5s-27.3333 41.5 -32 51.5s-7 16 -7 18c0 8 6.66667 12 20 12c7.33333 0 12.3333 -1 15 -3l13 -22c64.6667 -120 164.333 -199 299 -237c10.6667 -2.66667 16 -7 16 -13s-5.66667 -10.3333 -17 -13\nc-136 -38.6667 -236.333 -119.667 -301 -243c-5.33333 -9.33333 -9 -14.8333 -11 -16.5s-6.66667 -2.5 -14 -2.5c-13.3333 0 -20 4 -20 12c0 2 2.33333 8.16667 7 18.5c4.66667 10.3333 15.3333 27.6667 32 52c16.6667 24.3333 37 49.5 61 75.5h-306l-62 -147\nc-5.33333 -12.6667 -12.3333 -19 -21 -19c-4.66667 0 -9.16667 1.66667 -13.5 5s-6.5 8.33333 -6.5 15c0 2 20 50.6667 60 146h-239c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20h255l65 154h-320c-24 0 -36 6.66667 -36 20\nc0 6 2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h338l61 144c3.33333 8 6.5 13.6667 9.5 17s7.16667 5 12.5 5c4.66667 0 9.16667 -1.66667 13.5 -5s6.5 -8.33333 6.5 -15c0 -1.33333 -2 -7.33333 -6 -18zM484 173h314c11.3333 0 18.3333 0.666667 21 2\nc0.666667 0 7 4.66667 19 14c21.3333 16 57 36.3333 107 61c-49.3333 24.6667 -87.3333 47 -114 67c-8.66667 6.66667 -19.6667 10 -33 10h-249z"
            },
            "⇎": {
                x: 1229,
                d: "M713 497l-41 -130h186c-18 20.6667 -34 43 -48 67s-23.8333 42.5 -29.5 55.5s-8.5 20.8333 -8.5 23.5c0 8 6.33333 12 19 12c7.33333 0 12.1667 -0.833333 14.5 -2.5s5.5 -7.16667 9.5 -16.5c50 -114 135.667 -196 257 -246c4.66667 0 7 -3.33333 7 -10\nc0 -4.66667 -2 -8 -6 -10c-121.333 -49.3333 -207.333 -131.667 -258 -247c-4 -8.66667 -7 -13.8333 -9 -15.5s-7 -2.5 -15 -2.5c-12.6667 0 -19 4 -19 12c0 2.66667 2.83333 10.6667 8.5 24c5.66667 13.3333 15.6667 31.8333 30 55.5\nc14.3333 23.6667 30.1667 45.8333 47.5 66.5h-260c-2.66667 -10 -17.6667 -58.3333 -45 -145c-5.33333 -14 -12.6667 -21 -22 -21c-2 0 -4.5 0.5 -7.5 1.5s-5.83333 3.16667 -8.5 6.5s-4 7.33333 -4 12c0 7.33333 7.33333 31 22 71c2.66667 8 7 22 13 42s9.33333 31 10 33\nh-185c18 -20.6667 34 -43 48 -67s23.8333 -42.5 29.5 -55.5s8.5 -20.8333 8.5 -23.5c0 -8 -6.33333 -12 -19 -12c-7.33333 0 -12.1667 0.833333 -14.5 2.5s-5.5 7.16667 -9.5 16.5c-50 114 -135.667 196 -257 246c-4.66667 0 -7 3.33333 -7 10c0 4.66667 2 8 6 10\nc121.333 49.3333 207.333 131.667 258 247c4 8.66667 7 13.8333 9 15.5s7 2.5 15 2.5c12.6667 0 19 -4 19 -12c0 -2.66667 -2.83333 -10.6667 -8.5 -24s-15.6667 -31.8333 -30 -55.5s-30.1667 -45.8333 -47.5 -66.5h260c2.66667 10 17.6667 58.3333 45 145\nc5.33333 14 12.6667 21 22 21c2 0 4.5 -0.5 7.5 -1.5s5.83333 -3.16667 8.5 -6.5s4 -7.33333 4 -12c0 -4 -1.66667 -9.33333 -5 -16zM331 173h238l49 154h-287c-26.6667 -26.6667 -61.6667 -52.3333 -105 -77c43.3333 -24.6667 78.3333 -50.3333 105 -77zM660 327l-49 -154\nh287c26.6667 26.6667 61.6667 52.3333 105 77c-43.3333 24.6667 -78.3333 50.3333 -105 77h-238z"
            },
            "↮": {
                x: 1185,
                d: "M603 230l-100 -151c-6.66667 -10 -14 -15 -22 -15c-5.33333 0 -9.83333 1.83333 -13.5 5.5s-5.5 8.5 -5.5 14.5c0 4 5.66667 15 17 33l76 113h-321c22.6667 -16.6667 42.8333 -36.6667 60.5 -60s30 -42.5 37 -57.5s10.5 -24.5 10.5 -28.5c0 -8 -5 -12 -15 -12\nc-7.33333 0 -13 4.66667 -17 14c-15.3333 33.3333 -34.3333 62.3333 -57 87c-22.6667 24.6667 -53 46 -91 64c-8 4.66667 -12 9 -12 13c0 3.33333 0.833333 5.66667 2.5 7c1.66667 1.33333 5.5 3.66667 11.5 7c30.6667 14 57.1667 32.1667 79.5 54.5\nc22.3333 22.3333 37.3333 40 45 53s15.1667 28.5 22.5 46.5c3.33333 6.66667 8.66667 10 16 10c10 0 15 -4 15 -12c0 -4 -3.5 -13.5 -10.5 -28.5s-19.3333 -34.1667 -37 -57.5s-37.8333 -43.3333 -60.5 -60h348l100 151c6.66667 10 14 15 22 15\nc5.33333 0 9.83333 -1.83333 13.5 -5.5s5.5 -8.5 5.5 -14.5c0 -4 -5.66667 -15 -17 -33l-76 -113h321c-22.6667 16.6667 -42.8333 36.6667 -60.5 60s-30 42.5 -37 57.5s-10.5 24.5 -10.5 28.5c0 8 5 12 15 12c7.33333 0 13 -4.66667 17 -14\nc18.6667 -42 40.6667 -74.3333 66 -97s54.3333 -41.6667 87 -57c0.666667 0 1.5 -0.333333 2.5 -1s2 -1.83333 3 -3.5c1 -1.66667 1.5 -3.5 1.5 -5.5c0 -4.66667 -4.66667 -9.33333 -14 -14c-66.6667 -31.3333 -115.667 -82.6667 -147 -154\nc-3.33333 -6.66667 -8.66667 -10 -16 -10c-10 0 -15 4 -15 12c0 4 3.5 13.5 10.5 28.5s19.3333 34.1667 37 57.5s37.8333 43.3333 60.5 60h-348z"
            },
            "⋇": {
                x: 965,
                d: "M545 466c0 -17.3333 -6.16667 -32 -18.5 -44s-26.8333 -18 -43.5 -18s-31.1667 6 -43.5 18s-18.5 26.6667 -18.5 44s6.16667 32 18.5 44s26.8333 18 43.5 18s31.1667 -6 43.5 -18s18.5 -26.6667 18.5 -44zM545 34c0 -17.3333 -6.16667 -32 -18.5 -44\ns-26.8333 -18 -43.5 -18s-31.1667 6 -43.5 18s-18.5 26.6667 -18.5 44c0 17.3333 6.16667 32 18.5 44s26.8333 18 43.5 18s31.1667 -6 43.5 -18s18.5 -26.6667 18.5 -44zM710 449l-178 -179h248c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14\ns-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-248l178 -179c9.33333 -9.33333 14 -16.6667 14 -22c0 -5.33333 -1.83333 -10 -5.5 -14s-8.5 -6 -14.5 -6c-7.33333 0 -12 2 -14 6l-46 46c-27.3333 27.3333 -57.8333 57.6667 -91.5 91\nc-33.6667 33.3333 -57.1667 56.6667 -70.5 70l-199 -199c-9.33333 -9.33333 -16.6667 -14 -22 -14c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 6 4.66667 13.6667 14 23l178 178h-248c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14\ns8 5.16667 12 5.5s9.66667 0.5 17 0.5h248l-178 179c-9.33333 9.33333 -14 16.6667 -14 22s2 10 6 14s8.66667 6 14 6c5.33333 0 12.6667 -4.66667 22 -14l200 -199l199 199c9.33333 9.33333 16.6667 14 22 14s10 -2 14 -6s6 -8.66667 6 -14s-4.66667 -12.6667 -14 -22z"
            },
            "∅": {
                x: 965,
                d: "M801 543l-73 -64l-6 -6l-5 -4c39.3333 -56 59 -115.333 59 -178c0 -79.3333 -28.1667 -148 -84.5 -206s-126.167 -87 -209.5 -87c-37.3333 0 -73 7 -107 21s-57.3333 26.1667 -70 36.5c-12.6667 10.3333 -22.6667 19.5 -30 27.5l-78 -68c-12 -11.3333 -21 -17 -27 -17\nc-13.3333 0 -20 6.66667 -20 20c0 4.66667 1.16667 8.33333 3.5 11s8.5 8.66667 18.5 18c38.6667 33.3333 64 55.6667 76 67c-39.3333 57.3333 -59 116.667 -59 178c0 82 28.8333 151.333 86.5 208c57.6667 56.6667 126.833 85 207.5 85c34 0 66.8333 -6 98.5 -18\ns55.1667 -23.5 70.5 -34.5s28 -21.8333 38 -32.5l77 67c13.3333 12 22.6667 18 28 18c2 0 4.16667 -0.333333 6.5 -1s5.16667 -2.5 8.5 -5.5s5 -7.5 5 -13.5c0 -6.66667 -4.66667 -14 -14 -22zM278 140l381 333c-4.66667 5.33333 -10.6667 10.8333 -18 16.5\ns-18.3333 13.3333 -33 23c-14.6667 9.66667 -33.1667 17.5 -55.5 23.5s-45.8333 9 -70.5 9c-69.3333 0 -128.833 -24.5 -178.5 -73.5c-49.6667 -49 -74.5 -109.167 -74.5 -180.5c0 -54.6667 16.3333 -105 49 -151zM686 443l-380 -333\nc4.66667 -5.33333 10.6667 -10.8333 18 -16.5s18.3333 -13.3333 33 -23c14.6667 -9.66667 33.1667 -17.5 55.5 -23.5s45.8333 -9 70.5 -9c69.3333 0 128.833 24.5 178.5 73.5s74.5 109.167 74.5 180.5c0 56 -16.6667 106.333 -50 151z"
            },
            "∄": {
                x: 743,
                d: "M498 819l-28 -125h88c16 0 25.8333 -2 29.5 -6s5.5 -13.6667 5.5 -29v-624c0 -16 -2 -25.8333 -6 -29.5c-4 -3.66667 -13.6667 -5.5 -29 -5.5h-244c-6.66667 -31.3333 -17.3333 -78.6667 -32 -142c-3.33333 -16 -10.3333 -24 -21 -24c-2.66667 0 -5.33333 0.5 -8 1.5\ns-5.33333 3 -8 6s-4 7.16667 -4 12.5l15 72c4 15.3333 7 27.8333 9 37.5c2 9.66667 4.66667 21.8333 8 36.5h-88c-7.33333 0 -13 0.166667 -17 0.5c-4 0.333333 -8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2 10.6667 6 14c4 3.33333 8 5.16667 12 5.5s9.66667 0.5 17 0.5h97\nl64 287h-147c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h156l65 287h-235c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5\nh244l31 140c3.33333 17.3333 10.6667 26 22 26c2.66667 0 5.33333 -0.5 8 -1.5s5.33333 -3 8 -6s4 -7.16667 4 -12.5c0 -1.33333 -1.33333 -8.33333 -4 -21zM397 367h156v287h-92zM323 40h230v287h-165z"
            },
            A: {
                x: 772,
                d: "M186 111l350 586c6.66667 11.3333 15 17 25 17c6 0 10.1667 -1.33333 12.5 -4s3.83333 -8.66667 4.5 -18l61 -624c1.33333 -16.6667 5 -27.3333 11 -32c6 -4.66667 22 -7 48 -7c16 0 24 -3.33333 24 -10c0 -6 -1.16667 -10.5 -3.5 -13.5s-4.5 -4.66667 -6.5 -5\nc-2 -0.333333 -4.66667 -0.5 -8 -0.5h-3c-2 0 -4.66667 0.166667 -8 0.5c-3.33333 0.333333 -7.33333 0.5 -12 0.5h-16c-6 0 -12.5 0.166667 -19.5 0.5s-14.6667 0.5 -23 0.5h-24.5h-57c-6 0 -15 -0.333333 -27 -1c-12 -0.666667 -21 -1 -27 -1c-10 0 -15 3.66667 -15 11\nc0 12 7.33333 18 22 18c44.6667 0 67 10.6667 67 32c0 12.6667 -5 62.3333 -15 149c0 2.66667 -0.333333 7 -1 13s-1 10.3333 -1 13h-255l-76 -126c-12.6667 -21.3333 -19 -37 -19 -47c0 -20 14 -31.3333 42 -34c9.33333 0 14 -3.33333 14 -10c0 -12.6667 -6 -19 -18 -19\nc-9.33333 0 -24 0.333333 -44 1c-20 0.666667 -35 1 -45 1c-6 0 -19.5 -0.333333 -40.5 -1c-21 -0.666667 -34.5 -1 -40.5 -1c-8 0 -12 3.33333 -12 10c0 8 1.33333 13 4 15s7.66667 3.33333 15 4c24.6667 1.33333 46 8.16667 64 20.5s35.6667 32.8333 53 61.5zM306 265h235\nl-34 336z"
            },
            B: {
                x: 795,
                d: "M368 615l-62 -250h144c62 0 113 19.5 153 58.5s60 80.8333 60 125.5c0 4.66667 -0.166667 9.66667 -0.5 15s-2.66667 13.8333 -7 25.5s-10 21.8333 -17 30.5s-18.1667 16.5 -33.5 23.5s-33.6667 10.5 -55 10.5h-130c-20 0 -32.5 -2 -37.5 -6s-9.83333 -15 -14.5 -33z\nM537 357c42.6667 -4 78.8333 -18.5 108.5 -43.5s44.5 -57.1667 44.5 -96.5c0 -52.6667 -26.8333 -102 -80.5 -148s-117.167 -69 -190.5 -69h-343c-10.6667 0 -17.6667 0.5 -21 1.5s-5 4.16667 -5 9.5c0 8 2 13 6 15s11.6667 3 23 3c32.6667 0 53.1667 2.66667 61.5 8\nc8.33333 5.33333 14.8333 17.6667 19.5 37l135 538c2.66667 10 4 17.6667 4 23c0 4.66667 -0.666667 8 -2 10s-6.66667 4 -16 6s-23.6667 3 -43 3c-16 0 -24 3.33333 -24 10c0 8.66667 2 14 6 16s11.3333 3 22 3h321c55.3333 0 99.5 -13 132.5 -39s49.5 -59 49.5 -99\nc0 -44.6667 -20.5 -84.5 -61.5 -119.5s-89.8333 -57.8333 -146.5 -68.5zM395 29c59.3333 0 109.333 20.3333 150 61c40.6667 40.6667 61 86.3333 61 137c0 4.66667 -0.166667 9.83333 -0.5 15.5s-2.66667 15.3333 -7 29s-10.1667 25.3333 -17.5 35s-19.1667 18.5 -35.5 26.5\ns-35.5 12 -57.5 12h-188l-70 -282c-2.66667 -12 -4 -19.3333 -4 -22c0 -4 0.666667 -6.66667 2 -8c1.33333 -1.33333 4.66667 -2.33333 10 -3c4 -0.666667 11.3333 -1 22 -1h135z"
            },
            C: {
                x: 797,
                d: "M747 695l-63 -255c-2 -8.66667 -3.83333 -14 -5.5 -16s-5.16667 -3 -10.5 -3c-8.66667 0 -13 3 -13 9c0 0.666667 0.166667 3.66667 0.5 9s0.833333 12 1.5 20s1 15.6667 1 23c0 55.3333 -13.5 101.333 -40.5 138s-66.5 55 -118.5 55c-45.3333 0 -90 -11.5 -134 -34.5\ns-80.6667 -51.5 -110 -85.5c-26 -30 -48.1667 -63.8333 -66.5 -101.5s-31 -73 -38 -106s-11.8333 -59.5 -14.5 -79.5s-4 -36.6667 -4 -50c0 -67.3333 18.8333 -119.167 56.5 -155.5c37.6667 -36.3333 84.8333 -54.5 141.5 -54.5c55.3333 0 110.667 20.3333 166 61\nc55.3333 40.6667 93.6667 97.3333 115 170c3.33333 6.66667 7.33333 10 12 10c7.33333 0 11 -3 11 -9c0 -5.33333 -3 -16.3333 -9 -33s-18.3333 -39.5 -37 -68.5s-41 -54.5 -67 -76.5c-65.3333 -55.3333 -134.667 -83 -208 -83c-74.6667 0 -137.167 24.8333 -187.5 74.5\nc-50.3333 49.6667 -75.5 115.167 -75.5 196.5c0 57.3333 12.8333 114 38.5 170c25.6667 56 59 104.5 100 145.5s88.3333 74.3333 142 100s106.833 38.5 159.5 38.5c73.3333 0 128.333 -31.3333 165 -94l69 84c5.33333 6.66667 10 10 14 10c6 0 9 -3 9 -9z"
            },
            D: {
                x: 842,
                d: "M160 74l135 538c2.66667 10 4 17.6667 4 23c0 4.66667 -0.666667 8 -2 10s-6.66667 4 -16 6s-23.6667 3 -43 3c-16 0 -24 3.33333 -24 10c0 8.66667 1.83333 14 5.5 16s11.1667 3 22.5 3h321c70 0 125.667 -23.5 167 -70.5s62 -107.167 62 -180.5\nc0 -72.6667 -19 -142.5 -57 -209.5s-88 -120.833 -150 -161.5c-62 -40.6667 -126 -61 -192 -61h-317c-11.3333 0 -18.5 0.5 -21.5 1.5s-4.5 4.16667 -4.5 9.5c0 8 2 13 6 15s11.6667 3 23 3c32.6667 0 53.1667 2.66667 61.5 8c8.33333 5.33333 14.8333 17.6667 19.5 37z\nM371 615l-138 -552c-2.66667 -12 -4 -19.3333 -4 -22c0 -4 0.666667 -6.66667 2 -8c1.33333 -1.33333 4.66667 -2.33333 10 -3c4 -0.666667 11.3333 -1 22 -1h114c50 0 93.8333 10.8333 131.5 32.5c37.6667 21.6667 66.8333 44.8333 87.5 69.5c42 48 72 105.333 90 172\nc18 66.6667 27 120.667 27 162c0 64.6667 -17 112.333 -51 143s-77 46 -129 46h-110c-20 0 -32.5 -2 -37.5 -6s-9.83333 -15 -14.5 -33z"
            },
            E: {
                x: 807,
                d: "M699 232l-91 -215c-3.33333 -8 -6.5 -12.8333 -9.5 -14.5c-3 -1.66667 -9.83333 -2.5 -20.5 -2.5h-502c-10.6667 0 -17.6667 0.5 -21 1.5s-5 4.16667 -5 9.5c0 8 2 13 6 15s11.6667 3 23 3c32.6667 0 53.1667 2.66667 61.5 8c8.33333 5.33333 14.8333 17.6667 19.5 37\nl135 540c2.66667 10 4 16.6667 4 20c0 4.66667 -0.666667 8 -2 10s-6.83333 3.83333 -16.5 5.5s-24.1667 2.5 -43.5 2.5c-10 0 -16.5 0.5 -19.5 1.5s-4.5 4.16667 -4.5 9.5c0 8 2 13 6 15s11.6667 3 23 3h488c10.6667 0 17.8333 -0.5 21.5 -1.5s5.5 -4.16667 5.5 -9.5\nc0 -0.666667 -0.333333 -3 -1 -7s-1 -6.66667 -1 -8l-21 -175c-1.33333 -14.6667 -5.66667 -22 -13 -22s-11 3.66667 -11 11c0 2.66667 0.666667 6.66667 2 12c2.66667 22 4 42.6667 4 62c0 40 -10 68.1667 -30 84.5s-59.3333 24.5 -118 24.5h-143\nc-20 0 -32.5 -1.83333 -37.5 -5.5s-9.83333 -14.5 -14.5 -32.5l-62 -246h95c43.3333 0 73.1667 6.5 89.5 19.5s29.5 39.5 39.5 79.5c2 8 3.83333 13 5.5 15s4.5 3 8.5 3c6.66667 0 10 -3.33333 10 -10l-57 -232c-6 -13.3333 -10.6667 -20.3333 -14 -21\nc-7.33333 0 -11 3.33333 -11 10c0 3.33333 1 7 3 11c4.66667 20 7 36.3333 7 49c0 17.3333 -5 29.5 -15 36.5s-33 10.5 -69 10.5h-99l-69 -276c-2.66667 -12 -4 -19.3333 -4 -22c0 -4 0.666667 -6.66667 2 -8c1.33333 -1.33333 4.66667 -2.33333 10 -3\nc4 -0.666667 11.3333 -1 22 -1h146c40 0 73.3333 3.5 100 10.5c26.6667 7 49.8333 19.6667 69.5 38c19.6667 18.3333 35.8333 38.5 48.5 60.5s27.3333 52.3333 44 91c6.66667 15.3333 10.3333 23 11 23c2.66667 2.66667 5.66667 4 9 4c6.66667 0 10 -3.33333 10 -10\nc0 -1.33333 -1.33333 -6 -4 -14z"
            },
            F: {
                x: 793,
                d: "M301 326l-64 -255c-2.66667 -9.33333 -4 -16 -4 -20c0 -6 1.16667 -10.3333 3.5 -13s9.5 -4.83333 21.5 -6.5c12 -1.66667 30.6667 -2.5 56 -2.5c12 0 19.6667 -0.5 23 -1.5s5 -4.16667 5 -9.5c0 -12 -7 -18 -21 -18c-7.33333 0 -18.6667 0.333333 -34 1\nc-15.3333 0.666667 -26.6667 1 -34 1h-130c-6 0 -15.6667 -0.333333 -29 -1c-13.3333 -0.666667 -23 -1 -29 -1c-10 0 -15 3.66667 -15 11c0 8 2 13 6 15s11.6667 3 23 3c32.6667 0 53.1667 2.66667 61.5 8c8.33333 5.33333 14.8333 17.6667 19.5 37l135 540\nc2.66667 10 4 16.6667 4 20c0 4.66667 -0.666667 8 -2 10s-6.83333 3.83333 -16.5 5.5s-24.1667 2.5 -43.5 2.5c-10 0 -16.5 0.5 -19.5 1.5s-4.5 4.16667 -4.5 9.5c0 8 2 13 6 15s11.6667 3 23 3h474c10.6667 0 17.8333 -0.5 21.5 -1.5s5.5 -4.16667 5.5 -9.5\nc0 -0.666667 -0.333333 -3 -1 -7s-1 -6.66667 -1 -8l-21 -175c-1.33333 -14.6667 -5.66667 -22 -13 -22s-11 3.66667 -11 11c0 6 1 13 3 21c2 17.3333 3 35.3333 3 54c0 38.6667 -9.16667 66.3333 -27.5 83s-56.8333 25 -115.5 25h-134c-20 0 -32.5 -1.83333 -37.5 -5.5\ns-9.83333 -14.5 -14.5 -32.5l-65 -259h91c42.6667 0 72 6.33333 88 19s29.3333 38.3333 40 77c2 9.33333 3.83333 15.1667 5.5 17.5s4.5 3.5 8.5 3.5c6.66667 0 10 -3.33333 10 -10l-58 -233c-2 -8.66667 -3.66667 -14.1667 -5 -16.5s-4 -3.5 -8 -3.5\nc-7.33333 0 -11 3.66667 -11 11c0 3.33333 1 7 3 11c4.66667 20.6667 7 37 7 49c0 16.6667 -4.83333 28.5 -14.5 35.5s-32.1667 10.5 -67.5 10.5h-96z"
            },
            G: {
                x: 796,
                d: "M746 695l-63 -255c-2 -8.66667 -3.83333 -14 -5.5 -16s-5.16667 -3 -10.5 -3c-8.66667 0 -13 3 -13 9c0 4.66667 0.666667 13.1667 2 25.5s2 21.1667 2 26.5c0 33.3333 -4.83333 63.8333 -14.5 91.5s-27 51.5 -52 71.5s-56.1667 30 -93.5 30\nc-43.3333 0 -86.8333 -11 -130.5 -33s-81.5 -51.3333 -113.5 -88c-42.6667 -50 -73.5 -106.667 -92.5 -170s-28.5 -117.667 -28.5 -163c0 -40.6667 6.66667 -75.8333 20 -105.5c13.3333 -29.6667 30.8333 -51.8333 52.5 -66.5s43.1667 -25.1667 64.5 -31.5\nc21.3333 -6.33333 43 -9.5 65 -9.5c33.3333 0 66.6667 6.66667 100 20c33.3333 13.3333 58.6667 33 76 59c5.33333 8.66667 11.1667 24.1667 17.5 46.5c6.33333 22.3333 11.3333 41.8333 15 58.5s5.5 25.6667 5.5 27c0 6 -1 10.3333 -3 13s-8.83333 5 -20.5 7\ns-30.1667 3 -55.5 3h-25h-1c-1.33333 0.666667 -2.33333 1.33333 -3 2s-1.5 1.83333 -2.5 3.5s-1.5 3.5 -1.5 5.5c0 12 7 18 21 18c13.3333 0 34.3333 -0.333333 63 -1c28.6667 -0.666667 50 -1 64 -1h54c6 0 15.1667 0.333333 27.5 1s21.1667 1 26.5 1\nc8.66667 0 13 -3.33333 13 -10c0 -12.6667 -5.33333 -19 -16 -19c-27.3333 -0.666667 -44 -3 -50 -7s-11.6667 -15.6667 -17 -35c-2.66667 -11.3333 -6 -24.6667 -10 -40s-7 -27.6667 -9 -37l-16 -64c-1.33333 -5.33333 -3.16667 -12.5 -5.5 -21.5s-4.33333 -16.6667 -6 -23\nc-1.66667 -6.33333 -2.5 -9.83333 -2.5 -10.5l-2 -2c-1.33333 -0.666667 -3 -1 -5 -1c-4 0 -10.3333 6.5 -19 19.5s-15.6667 28.1667 -21 45.5c-23.3333 -29.3333 -54.6667 -51.1667 -94 -65.5s-79 -21.5 -119 -21.5c-76 0 -139 24.8333 -189 74.5\nc-50 49.6667 -75 115.167 -75 196.5c0 76.6667 21.6667 150.333 65 221c43.3333 70.6667 98.8333 127.167 166.5 169.5c67.6667 42.3333 136.833 63.5 207.5 63.5c38.6667 0 72.3333 -9 101 -27c24 -14 45.3333 -36 64 -66l69 83c5.33333 6.66667 10 10 14 10c6 0 9 -3 9 -9\nz"
            },
            H: {
                x: 912,
                d: "M752 610l-137 -547c-1.33333 -5.33333 -2 -10.6667 -2 -16c0 -4 0.666667 -7 2 -9s6.66667 -4 16 -6s23.6667 -3 43 -3c16 0 24 -3.33333 24 -10c0 -8.66667 -1.66667 -14 -5 -16s-8 -3 -14 -3s-15.6667 0.333333 -29 1c-13.3333 0.666667 -23.3333 1 -30 1h-118\nc-6.66667 0 -16.5 -0.333333 -29.5 -1c-13 -0.666667 -22.5 -1 -28.5 -1c-9.33333 0 -14 3.33333 -14 10c0 8.66667 1.66667 14 5 16s8.66667 3 16 3c23.3333 0.666667 39.1667 1.33333 47.5 2s16 3.16667 23 7.5s12.1667 11.5 15.5 21.5\nc0.666667 1.33333 5.5 20.5 14.5 57.5s19.3333 78.8333 31 125.5l24.5 98h-303l-69 -278c-1.33333 -5.33333 -2 -10.6667 -2 -16c0 -4 0.666667 -7 2 -9s6.66667 -4 16 -6c9.33333 -2 23.6667 -3 43 -3c16 0 24 -3.33333 24 -10c0 -8.66667 -1.66667 -14 -5 -16\ns-8 -3 -14 -3s-15.6667 0.333333 -29 1c-13.3333 0.666667 -23.3333 1 -30 1h-118c-6.66667 0 -16.5 -0.333333 -29.5 -1c-13 -0.666667 -22.5 -1 -28.5 -1c-9.33333 0 -14 3.33333 -14 10c0 8.66667 1.83333 14 5.5 16s11.8333 3 24.5 3c32.6667 0 53 2.66667 61 8\nc8 5.33333 14.3333 17.6667 19 37l135 538c2.66667 10 4 17.6667 4 23c0 4.66667 -0.666667 8 -2 10s-6.66667 4 -16 6s-23.3333 3 -42 3h-12.5c-2.33333 0 -4.83333 0.333333 -7.5 1s-4.33333 1.66667 -5 3s-1 3.33333 -1 6c0 12.6667 6.33333 19 19 19\nc6.66667 0 16.6667 -0.333333 30 -1c13.3333 -0.666667 23 -1 29 -1h118c6.66667 0 16.5 0.333333 29.5 1s22.5 1 28.5 1c10 0 15 -3.66667 15 -11c0 -8 -2 -13 -6 -15s-11.3333 -3 -22 -3c-33.3333 0 -54.1667 -2.66667 -62.5 -8s-14.8333 -17.3333 -19.5 -36l-60 -240h302\nl61 242c2.66667 10 4 17.6667 4 23c0 4.66667 -0.666667 8 -2 10s-6.66667 4 -16 6s-23.3333 3 -42 3h-12.5c-2.33333 0 -4.83333 0.333333 -7.5 1s-4.33333 1.66667 -5 3s-1 3.33333 -1 6c0 12.6667 6.33333 19 19 19c6.66667 0 16.6667 -0.333333 30 -1s23 -1 29 -1h118\nc6.66667 0 16.5 0.333333 29.5 1s22.5 1 28.5 1c10 0 15 -3.66667 15 -11c0 -8 -2 -13 -6 -15s-11.3333 -3 -22 -3c-33.3333 0 -54.1667 -2.66667 -62.5 -8s-14.8333 -17.3333 -19.5 -36z"
            },
            I: {
                x: 541,
                d: "M377 609l-135 -537c-2.66667 -10.6667 -4 -18.3333 -4 -23c0 -5.33333 0.666667 -9 2 -11s6.83333 -4 16.5 -6c9.66667 -2 24.1667 -3 43.5 -3c12 0 19.6667 -0.5 23 -1.5s5 -4.16667 5 -9.5c0 -12 -6.66667 -18 -20 -18c-6.66667 0 -17 0.333333 -31 1\nc-14 0.666667 -24.3333 1 -31 1h-123c-6 0 -15.6667 -0.333333 -29 -1c-13.3333 -0.666667 -23 -1 -29 -1c-10 0 -15 3.33333 -15 10c0 8.66667 2 14 6 16s12.3333 3 25 3c34 0 55.3333 2.66667 64 8c8.66667 5.33333 15.3333 17.6667 20 37l135 539\nc2.66667 12 4 19.3333 4 22c0 4.66667 -0.666667 8 -2 10s-6.83333 4 -16.5 6s-24.1667 3 -43.5 3h-13c-2.66667 0 -5.33333 0.333333 -8 1s-4.5 1.66667 -5.5 3s-1.5 3.33333 -1.5 6c0 8.66667 1.66667 14 5 16s8 3 14 3c6.66667 0 17.1667 -0.333333 31.5 -1\nc14.3333 -0.666667 24.8333 -1 31.5 -1h123c6 0 15.6667 0.333333 29 1s23 1 29 1c9.33333 0 14 -3.33333 14 -10c0 -8.66667 -2 -14 -6 -16s-12 -3 -24 -3c-34 0 -55.3333 -2.66667 -64 -8s-15.3333 -17.6667 -20 -37z"
            },
            J: {
                x: 640,
                d: "M505 614l-118 -471c-12 -46.6667 -38.8333 -85.6667 -80.5 -117c-41.6667 -31.3333 -85.8333 -47 -132.5 -47c-36 0 -65.6667 10 -89 30c-23.3333 20 -35 45.6667 -35 77c0 28 6.5 47.5 19.5 58.5s26.5 16.5 40.5 16.5c13.3333 0 23.3333 -3.83333 30 -11.5\ns10 -16.1667 10 -25.5c0 -14.6667 -5.83333 -28 -17.5 -40c-11.6667 -12 -25.5 -18 -41.5 -18c-3.33333 0 -7.66667 0.666667 -13 2c5.33333 -24 17.1667 -41.5 35.5 -52.5c18.3333 -11 37.8333 -16.5 58.5 -16.5c26.6667 0 53.8333 13.3333 81.5 40\nc27.6667 26.6667 47.5 63.6667 59.5 111l115 457c2.66667 10.6667 4 18.6667 4 24c0 6 -1 10.3333 -3 13s-9 5 -21 7s-30.6667 3 -56 3h-25h-1c-0.666667 0.666667 -1.66667 1.33333 -3 2s-2.33333 1.83333 -3 3.5s-1 3.5 -1 5.5c0 12 7 18 21 18s35.3333 -0.333333 64 -1\ns50 -1 64 -1h55c6 0 15.1667 0.333333 27.5 1s21.1667 1 26.5 1c8.66667 0 13 -3.66667 13 -11c0 -8 -1.83333 -13 -5.5 -15s-10.5 -3 -20.5 -3c-22.6667 0 -37 -2.5 -43 -7.5s-11.3333 -15.8333 -16 -32.5z"
            },
            K: {
                x: 928,
                d: "M504 404l139 -330c7.33333 -18 15.3333 -29.8333 24 -35.5s22.3333 -8.83333 41 -9.5c12.6667 0 19 -3.33333 19 -10c0 -12.6667 -5.66667 -19 -17 -19c-5.33333 0 -13.3333 0.333333 -24 1c-10.6667 0.666667 -18.3333 1 -23 1h-48c-11.3333 0 -29 -0.333333 -53 -1\nc-24 -0.666667 -42 -1 -54 -1c-9.33333 0 -14 3.33333 -14 10c0 8.66667 1.66667 14 5 16s8 3 14 3c32.6667 0 49 10.3333 49 31c0 6 -1.66667 12.3333 -5 19c-67.3333 161.333 -108.333 258 -123 290l-152 -119l-39 -155c-6.66667 -26.6667 -10 -42.6667 -10 -48\nc0 -4 0.666667 -7 2 -9s6.66667 -4 16 -6c9.33333 -2 23.6667 -3 43 -3c16 0 24 -3.33333 24 -10c0 -8.66667 -1.66667 -14 -5 -16s-8 -3 -14 -3s-15.6667 0.333333 -29 1c-13.3333 0.666667 -23.3333 1 -30 1h-117c-6 0 -15.6667 -0.333333 -29 -1\nc-13.3333 -0.666667 -23 -1 -29 -1c-10 0 -15 3.66667 -15 11c0 8 2 13 6 15s11.6667 3 23 3c32.6667 0 53.1667 2.66667 61.5 8c8.33333 5.33333 14.8333 17.6667 19.5 37l135 538c2.66667 10 4 17.6667 4 23c0 4.66667 -0.666667 8 -2 10s-6.66667 4 -16 6\ns-23.6667 3 -43 3c-16 0 -24 3.33333 -24 10c0 8.66667 1.66667 14 5 16s8 3 14 3s15.6667 -0.333333 29 -1c13.3333 -0.666667 23 -1 29 -1h118c6.66667 0 16.5 0.333333 29.5 1s22.5 1 28.5 1c10 0 15 -3.33333 15 -10c0 -8.66667 -2 -14 -6 -16s-11.3333 -3 -22 -3\nc-33.3333 0 -54.1667 -2.66667 -62.5 -8s-14.8333 -17.3333 -19.5 -36l-83 -330l392 305c25.3333 19.3333 38 36 38 50c0 11.3333 -8 17.6667 -24 19c-8.66667 0 -13 3.66667 -13 11c0 12 6.33333 18 19 18c10 0 25.5 -0.333333 46.5 -1s36.8333 -1 47.5 -1h38\nc3.33333 0 9 0.333333 17 1s13.6667 1 17 1c7.33333 0 11 -3.66667 11 -11c0 -5.33333 -1.16667 -9.33333 -3.5 -12s-4.16667 -4.16667 -5.5 -4.5s-4 -0.833333 -8 -1.5c-32 -2.66667 -62.3333 -12.8333 -91 -30.5s-80.6667 -55.8333 -156 -114.5l-97 -76\nc-12 -9.33333 -18 -14.3333 -18 -15s0.333333 -2 1 -4s1.5 -4 2.5 -6s1.5 -3.33333 1.5 -4z"
            },
            L: {
                x: 685,
                d: "M371 606l-136 -543c-2.66667 -12 -4 -19.3333 -4 -22c0 -4 0.666667 -6.66667 2 -8c1.33333 -1.33333 4.66667 -2.33333 10 -3c4 -0.666667 11.3333 -1 22 -1h96c32.6667 0 62 4.5 88 13.5s46.8333 19.3333 62.5 31c15.6667 11.6667 30.3333 27.8333 44 48.5\nc13.6667 20.6667 23.5 38.1667 29.5 52.5s13.3333 32.8333 22 55.5c6 14.6667 9.33333 22 10 22c1.33333 2.66667 4 4 8 4c6.66667 0 10 -3.33333 10 -10c0 -2.66667 -1.33333 -7.33333 -4 -14l-77 -213c-3.33333 -9.33333 -6.5 -14.8333 -9.5 -16.5\nc-3 -1.66667 -9.83333 -2.5 -20.5 -2.5h-448c-10.6667 0 -17.6667 0.5 -21 1.5s-5 4.16667 -5 9.5c0 8 2 13 6 15s11.6667 3 23 3c32.6667 0 53.1667 2.66667 61.5 8c8.33333 5.33333 14.8333 17.6667 19.5 37l135 538c2.66667 10 4 17.6667 4 23\nc0 4.66667 -0.666667 8 -2 10s-6.66667 4 -16 6s-23.6667 3 -43 3c-16 0 -24 3.33333 -24 10c0 8.66667 1.66667 14 5 16s8 3 14 3s16 -0.333333 30 -1s24 -1 30 -1h134c6.66667 0 17.1667 0.333333 31.5 1s24.8333 1 31.5 1c10 0 15 -3.33333 15 -10\nc0 -8.66667 -2 -14 -6 -16s-13.3333 -3 -28 -3c-41.3333 0 -67.1667 -2.83333 -77.5 -8.5s-17.8333 -18.8333 -22.5 -39.5z"
            },
            M: {
                x: 1069,
                d: "M909 610l-137 -547c-1.33333 -5.33333 -2 -10.6667 -2 -16c0 -4 0.666667 -7 2 -9s6.66667 -4 16 -6s23.6667 -3 43 -3c16 0 24 -3.33333 24 -10c0 -8.66667 -1.66667 -14 -5 -16s-8 -3 -14 -3s-15.3333 0.333333 -28 1c-12.6667 0.666667 -21.6667 1 -27 1h-118\nc-5.33333 0 -14.3333 -0.333333 -27 -1c-12.6667 -0.666667 -21.6667 -1 -27 -1c-10 0 -15 3.66667 -15 11c0 8 2 13 6 15s11.6667 3 23 3c32.6667 0 53.1667 2.66667 61.5 8c8.33333 5.33333 14.8333 17.6667 19.5 37l145 579h-1l-402 -636c-6 -11.3333 -13 -17 -21 -17\nc-4.66667 0 -7.66667 1.5 -9 4.5s-2.66667 10.5 -4 22.5l-83 621h-1l-138 -551c-2.66667 -9.33333 -4 -17.6667 -4 -25c0 -27.3333 21.6667 -41.6667 65 -43c9.33333 0 14 -3.33333 14 -10c0 -6 -1.16667 -10.5 -3.5 -13.5s-4.5 -4.66667 -6.5 -5\nc-2 -0.333333 -4.66667 -0.5 -8 -0.5c-4.66667 0 -12.1667 0.333333 -22.5 1c-10.3333 0.666667 -17.8333 1 -22.5 1h-48c-6.66667 0 -21.8333 -0.333333 -45.5 -1c-23.6667 -0.666667 -38.8333 -1 -45.5 -1c-8.66667 0 -13 3.66667 -13 11c0 12 5 18 15 18\nc32.6667 1.33333 56.3333 7.66667 71 19c14.6667 11.3333 25 29.3333 31 54l128 510c2.66667 10 4 17.6667 4 23c0 4.66667 -0.666667 8 -2 10s-6.66667 4 -16 6s-23.6667 3 -43 3c-16 0 -24 3.33333 -24 10c0 8.66667 1.83333 14 5.5 16s11.1667 3 22.5 3h124\nc13.3333 0 21.3333 -1 24 -3s4.66667 -8.33333 6 -19l75 -572l365 577c5.33333 8 9.83333 12.8333 13.5 14.5s11.5 2.5 23.5 2.5h120h12.5c2.33333 0 4.83333 -0.333333 7.5 -1s4.33333 -1.66667 5 -3s1 -3.33333 1 -6c0 -8.66667 -2 -14 -6 -16s-11.3333 -3 -22 -3\nc-33.3333 0 -54.1667 -2.66667 -62.5 -8s-14.8333 -17.3333 -19.5 -36z"
            },
            N: {
                x: 912,
                d: "M744 578l-140 -558c-2 -8.66667 -3.83333 -14.1667 -5.5 -16.5c-1.66667 -2.33333 -4.83333 -3.5 -9.5 -3.5c-6 0 -11.3333 6 -16 18l-238 593c-4.66667 11.3333 -8 18.3333 -10 21l-135 -535c-2.66667 -10.6667 -4 -19 -4 -25c0 -27.3333 21.6667 -41.6667 65 -43\nc9.33333 0 14 -3.33333 14 -10c0 -6 -1.16667 -10.5 -3.5 -13.5s-4.5 -4.66667 -6.5 -5c-2 -0.333333 -4.66667 -0.5 -8 -0.5c-4.66667 0 -12.1667 0.333333 -22.5 1c-10.3333 0.666667 -17.8333 1 -22.5 1h-48c-6.66667 0 -21.8333 -0.333333 -45.5 -1\nc-23.6667 -0.666667 -38.8333 -1 -45.5 -1c-8.66667 0 -13 3.33333 -13 10c0 12.6667 5 19 15 19c32 1.33333 55.5 7.5 70.5 18.5s25.5 29.1667 31.5 54.5l133 530c2 6 3 10.3333 3 13c0 6 -21.3333 9 -64 9h-12.5c-2.33333 0 -4.83333 0.333333 -7.5 1\ns-4.33333 1.66667 -5 3s-1 3.33333 -1 6c0 8.66667 2 14 6 16s11.6667 3 23 3h122c10.6667 0 17.5 -0.833333 20.5 -2.5s6.16667 -6.5 9.5 -14.5l214 -532l113 451c2.66667 12.6667 4 21.3333 4 26c0 8 -1 14.5 -3 19.5s-8 10 -18 15s-24.3333 7.83333 -43 8.5\nc-10 0 -15 3.33333 -15 10c0 12.6667 6 19 18 19c4.66667 0 12.3333 -0.333333 23 -1s18.3333 -1 23 -1h48c6.66667 0 21.8333 0.333333 45.5 1s38.8333 1 45.5 1c8.66667 0 13 -3.66667 13 -11c0 -12 -5 -18 -15 -18c-34.6667 -1.33333 -58.8333 -8.16667 -72.5 -20.5\ns-23.8333 -30.8333 -30.5 -55.5z"
            },
            O: {
                x: 778,
                d: "M728 438c0 -58 -12.5 -115.5 -37.5 -172.5s-57.6667 -106.167 -98 -147.5c-40.3333 -41.3333 -86.5 -74.8333 -138.5 -100.5c-52 -25.6667 -103.667 -38.5 -155 -38.5c-72.6667 0 -132.333 24.5 -179 73.5c-46.6667 49 -70 112.5 -70 190.5\nc0 75.3333 20.8333 148.833 62.5 220.5c41.6667 71.6667 95.8333 129.667 162.5 174c66.6667 44.3333 135 66.5 205 66.5c72 0 131.333 -24.1667 178 -72.5s70 -112.833 70 -193.5zM305 2c39.3333 0 80 12.6667 122 38c42 25.3333 80.6667 62.3333 116 111\nc32 45.3333 57.5 98.6667 76.5 160c19 61.3333 28.5 115.667 28.5 163c0 68 -16.8333 119.667 -50.5 155s-74.5 53 -122.5 53c-36 0 -73.6667 -10.1667 -113 -30.5s-76.3333 -51.5 -111 -93.5c-38 -46 -66.6667 -101.167 -86 -165.5s-29 -122.5 -29 -174.5\nc0 -72.6667 16.6667 -126.833 50 -162.5c33.3333 -35.6667 73 -53.5 119 -53.5z"
            },
            P: {
                x: 793,
                d: "M299 318l-64 -255c-1.33333 -6.66667 -2 -12.3333 -2 -17c0 -4 0.833333 -7 2.5 -9s7.16667 -3.83333 16.5 -5.5c9.33333 -1.66667 23.3333 -2.5 42 -2.5c16 0 24 -3.33333 24 -10c0 -8.66667 -1.66667 -14 -5 -16s-8 -3 -14 -3c-6.66667 0 -16.6667 0.333333 -30 1\nc-13.3333 0.666667 -23 1 -29 1h-117c-6.66667 0 -16.3333 -0.333333 -29 -1c-12.6667 -0.666667 -22.3333 -1 -29 -1c-10 0 -15 3.66667 -15 11c0 8 2 13 6 15s11.6667 3 23 3c32.6667 0 53.1667 2.66667 61.5 8c8.33333 5.33333 14.8333 17.6667 19.5 37l135 538\nc2.66667 10 4 17.6667 4 23c0 4.66667 -0.666667 8 -2 10s-6.66667 4 -16 6s-23.6667 3 -43 3c-16 0 -24 3.33333 -24 10c0 8.66667 1.83333 14 5.5 16s11.1667 3 22.5 3h309c60 0 107 -14.5 141 -43.5s51 -64.1667 51 -105.5c0 -56 -28.5 -106 -85.5 -150\ns-120.5 -66 -190.5 -66h-168zM371 615l-68 -273h141c68.6667 0 120.667 18.6667 156 56c20 20 34.8333 46.1667 44.5 78.5s14.5 58.5 14.5 78.5c0 66 -45.6667 99 -137 99h-99c-20 0 -32.5 -2 -37.5 -6s-9.83333 -15 -14.5 -33z"
            },
            Q: {
                x: 778,
                d: "M428 6c2.66667 -40.6667 8.66667 -69.5 18 -86.5s26.3333 -25.5 51 -25.5c23.3333 0 46.1667 9 68.5 27s38.8333 42 49.5 72c2.66667 10.6667 6.33333 16 11 16c6 0 9 -3.33333 9 -10c0 -2.66667 -1.83333 -10.1667 -5.5 -22.5\nc-3.66667 -12.3333 -9.66667 -28.3333 -18 -48c-8.33333 -19.6667 -18.5 -38.5 -30.5 -56.5s-27.6667 -33.5 -47 -46.5s-40 -19.5 -62 -19.5c-53.3333 0 -80 34.6667 -80 104c0 16 2 44 6 84c-32 -10 -65 -15 -99 -15c-72.6667 0 -132.333 24.5 -179 73.5\nc-46.6667 49 -70 112.5 -70 190.5c0 75.3333 20.8333 148.833 62.5 220.5c41.6667 71.6667 95.8333 129.667 162.5 174c66.6667 44.3333 135 66.5 205 66.5c72 0 131.333 -24.1667 178 -72.5s70 -112.833 70 -193.5c0 -90 -28.5 -175.833 -85.5 -257.5\nc-57 -81.6667 -128.5 -139.833 -214.5 -174.5zM248 11c-5.33333 9.33333 -8 20.3333 -8 33c0 25.3333 10.1667 48.8333 30.5 70.5c20.3333 21.6667 43.5 32.5 69.5 32.5c49.3333 0 77.6667 -37 85 -111c44 25.3333 81.8333 59.1667 113.5 101.5\nc31.6667 42.3333 54.8333 85.5 69.5 129.5s25 82.6667 31 116s9 61.6667 9 85c0 64.6667 -16 116.5 -48 155.5s-74 58.5 -126 58.5c-42 0 -85.5 -14 -130.5 -42s-85.1667 -69 -120.5 -123c-30 -46 -52.8333 -97.8333 -68.5 -155.5s-23.5 -107.167 -23.5 -148.5\nc0 -48 10 -90.3333 30 -127c20 -36.6667 49 -61.6667 87 -75zM400 23c0.666667 4 1 10.6667 1 20c0 27.3333 -4.33333 48.1667 -13 62.5c-8.66667 14.3333 -24.6667 21.5 -48 21.5c-21.3333 0 -40 -8.83333 -56 -26.5c-16 -17.6667 -24 -36.1667 -24 -55.5\nc0 -29.3333 15 -44 45 -44s61.6667 7.33333 95 22z"
            },
            R: {
                x: 793,
                d: "M371 615l-66 -263h113c38 0 71.5 5.33333 100.5 16s51.1667 23.5 66.5 38.5s27.8333 32.3333 37.5 52s15.8333 36.6667 18.5 51c2.66667 14.3333 4 27.8333 4 40.5c0 69.3333 -50 104 -150 104h-72c-20 0 -32.5 -2 -37.5 -6s-9.83333 -15 -14.5 -33zM510 340\nc64.6667 -20.6667 97 -59.3333 97 -116c0 -8 -1.66667 -24.3333 -5 -49c-0.666667 -4.66667 -3 -23.3333 -7 -56c-4 -32.6667 -6 -54 -6 -64c0 -21.3333 3.5 -36 10.5 -44s17.1667 -12 30.5 -12c15.3333 0 31.5 6.83333 48.5 20.5c17 13.6667 30.8333 36.5 41.5 68.5\nc2 9.33333 6 14 12 14c7.33333 0 11 -3.33333 11 -10c0 -7.33333 -3.66667 -19.1667 -11 -35.5c-7.33333 -16.3333 -20.6667 -33.3333 -40 -51s-41 -26.5 -65 -26.5c-36 0 -65.8333 8.83333 -89.5 26.5s-35.5 43.5 -35.5 77.5c0 11.3333 4.66667 36.6667 14 76\nc11.3333 42 17 68.6667 17 80c0 22.6667 -8.33333 43.8333 -25 63.5c-16.6667 19.6667 -46 29.5 -88 29.5h-120l-67 -269c-1.33333 -5.33333 -2 -10.6667 -2 -16c0 -4 0.666667 -7 2 -9s6.66667 -4 16 -6c9.33333 -2 23.6667 -3 43 -3c16 0 24 -3.33333 24 -10\nc0 -8.66667 -1.66667 -14 -5 -16s-8 -3 -14 -3s-15.5 0.333333 -28.5 1c-13 0.666667 -22.5 1 -28.5 1h-118c-6.66667 0 -16.5 -0.333333 -29.5 -1c-13 -0.666667 -22.5 -1 -28.5 -1c-9.33333 0 -14 3.33333 -14 10c0 8.66667 1.83333 14 5.5 16s11.8333 3 24.5 3\nc32.6667 0 53 2.66667 61 8c8 5.33333 14.3333 17.6667 19 37l135 538c2.66667 10 4 17.6667 4 23c0 4.66667 -0.666667 8 -2 10s-6.66667 4 -16 6s-23.3333 3 -42 3h-12.5c-2.33333 0 -4.83333 0.333333 -7.5 1s-4.33333 1.66667 -5 3s-1 3.33333 -1 6c0 8.66667 2 14 6 16\ns11.6667 3 23 3h271c66.6667 0 119.667 -14.6667 159 -44s59 -64.6667 59 -106c0 -42.6667 -21.1667 -82 -63.5 -118s-94.8333 -61 -157.5 -75z"
            },
            S: {
                x: 684,
                d: "M634 695l-54 -220c-2 -8.66667 -3.83333 -14 -5.5 -16s-4.5 -3 -8.5 -3c-7.33333 0 -11 3 -11 9c0 0.666667 0.333333 4 1 10l2.5 22.5c1 9 1.5 17.1667 1.5 24.5c0 48.6667 -12 86.6667 -36 114s-60 41 -108 41c-46.6667 0 -88.3333 -17.6667 -125 -53\nc-36.6667 -35.3333 -55 -74.3333 -55 -117c0 -30 10 -55 30 -75c8.66667 -8 18 -13.8333 28 -17.5s32 -10.1667 66 -19.5c48.6667 -12.6667 80.1667 -21.6667 94.5 -27s26.5 -13 36.5 -23c32 -31.3333 48 -70 48 -116c0 -63.3333 -25.1667 -120.833 -75.5 -172.5\nc-50.3333 -51.6667 -107.5 -77.5 -171.5 -77.5c-78.6667 0 -135 25.3333 -169 76l-46 -60c-8.66667 -10.6667 -14.3333 -16 -17 -16c-6.66667 0 -10 3 -10 9l2 7c1.33333 4.66667 2 7.33333 2 8l51 205c2 8.66667 3.66667 14 5 16s4.33333 3 9 3c6.66667 0 10 -3 10 -9\nc0 -0.666667 -0.166667 -2.16667 -0.5 -4.5s-0.5 -4.16667 -0.5 -5.5c-4.66667 -15.3333 -7 -33 -7 -53c0 -51.3333 16.8333 -88.6667 50.5 -112c33.6667 -23.3333 74.5 -35 122.5 -35c49.3333 0 92.6667 19.6667 130 59c37.3333 39.3333 56 82.6667 56 130\nc0 30 -8 55 -24 75c-10 10.6667 -19.8333 18.1667 -29.5 22.5s-28.1667 10.1667 -55.5 17.5c-48 11.3333 -81.3333 20.3333 -100 27c-27.3333 9.33333 -49.8333 25.5 -67.5 48.5s-26.5 52.1667 -26.5 87.5c0 57.3333 24.6667 109.833 74 157.5\nc49.3333 47.6667 105.333 71.5 168 71.5c68 0 115 -25.3333 141 -76l11 14c7.33333 8.66667 14.8333 18 22.5 28s12.5 16 14.5 18c8.66667 10.6667 14.3333 16 17 16c6 0 9 -3 9 -9z"
            },
            T: {
                x: 768,
                d: "M443 610l-134 -533c-2.66667 -10.6667 -4 -18.6667 -4 -24c0 -6 1 -10.3333 3 -13s9.83333 -5.16667 23.5 -7.5c13.6667 -2.33333 34.8333 -3.5 63.5 -3.5h16.5c3 0 6.16667 -0.333333 9.5 -1s5.33333 -1.66667 6 -3s1 -3.33333 1 -6c0 -8.66667 -1.66667 -14 -5 -16\ns-8.66667 -3 -16 -3c-8.66667 0 -21.6667 0.333333 -39 1c-17.3333 0.666667 -30 1 -38 1h-156c-8 0 -20.6667 -0.333333 -38 -1c-17.3333 -0.666667 -30 -1 -38 -1c-10.6667 0 -16 3.33333 -16 10c0 8.66667 2 14 6 16s12.6667 3 26 3c35.3333 0 60.6667 1.66667 76 5\nc15.3333 3.33333 25.1667 7.66667 29.5 13s8.5 15.6667 12.5 31l134 537c3.33333 12 5 19.6667 5 23c0 5.33333 -2.16667 8.5 -6.5 9.5s-13.5 1.5 -27.5 1.5h-67c-22 0 -41.1667 -1.33333 -57.5 -4s-30.8333 -7.83333 -43.5 -15.5s-23 -15.1667 -31 -22.5\ns-16.1667 -19.3333 -24.5 -36s-14.8333 -31.1667 -19.5 -43.5s-11.3333 -30.8333 -20 -55.5c-3.33333 -11.3333 -8 -17 -14 -17c-6.66667 0 -10 3.33333 -10 10c0 4 1.33333 8.66667 4 14l61 180c3.33333 9.33333 6.33333 14.8333 9 16.5s9.66667 2.5 21 2.5h547\nc10.6667 0 17.6667 -0.5 21 -1.5s5 -4.16667 5 -9.5c0 -3.33333 -0.666667 -8 -2 -14l-29 -177c-2.66667 -12.6667 -5.33333 -19.3333 -8 -20c-1.33333 -0.666667 -3 -1 -5 -1c-6.66667 0 -10 3.33333 -10 10l1 12c6.66667 41.3333 10 71.3333 10 90\nc0 36 -10.5 58.6667 -31.5 68s-59.5 14 -115.5 14c-36 0 -56.6667 -0.666667 -62 -2c-6.66667 -2 -11.3333 -5.33333 -14 -10s-5.66667 -13.6667 -9 -27z"
            },
            U: {
                x: 771,
                d: "M488 230l89 355c2.66667 9.33333 4 18 4 26s-1 14.5 -3 19.5s-8 10 -18 15s-24.3333 7.83333 -43 8.5c-10 0 -15 3.33333 -15 10c0 12.6667 6 19 18 19h2c1.33333 0 3.5 -0.166667 6.5 -0.5s6.33333 -0.5 10 -0.5h13.5c5.33333 0 11 -0.166667 17 -0.5s13 -0.5 21 -0.5\nh25h47c4.66667 0 12.3333 0.333333 23 1s18.3333 1 23 1c8.66667 0 13 -3.66667 13 -11c0 -10.6667 -4 -16.6667 -12 -18c-21.3333 -0.666667 -38.6667 -3 -52 -7s-23.6667 -10.8333 -31 -20.5s-12.5 -18.1667 -15.5 -25.5s-6.5 -19.3333 -10.5 -36l-38 -150\nc-2 -6.66667 -7.83333 -30 -17.5 -70s-16.5 -66.6667 -20.5 -80c-8 -37.3333 -15.3333 -63.6667 -22 -79c-24.6667 -62 -61.8333 -112 -111.5 -150s-100.5 -57 -152.5 -57c-54.6667 0 -99.6667 17.8333 -135 53.5c-35.3333 35.6667 -53 80.8333 -53 135.5\nc0 21.3333 3 43 9 65l87 350c8 27.3333 12 44.6667 12 52c0 4.66667 -0.666667 8 -2 10s-6.66667 4 -16 6s-23.3333 3 -42 3h-12.5c-2.33333 0 -4.83333 0.333333 -7.5 1s-4.33333 1.66667 -5 3s-1 3.33333 -1 6c0 12.6667 6.33333 19 19 19c6 0 15.6667 -0.333333 29 -1\nc13.3333 -0.666667 23.3333 -1 30 -1h118c6.66667 0 16.5 0.333333 29.5 1s22.5 1 28.5 1c10 0 15 -3.66667 15 -11c0 -8 -2 -13 -6 -15s-11.3333 -3 -22 -3c-33.3333 0 -54.1667 -2.66667 -62.5 -8c-8.33333 -5.33333 -14.8333 -17.3333 -19.5 -36l-98 -393\nc-7.33333 -29.3333 -11 -55.3333 -11 -78c0 -40.6667 11 -72.6667 33 -96c22 -23.3333 51.3333 -35 88 -35c50 0 99.1667 20.3333 147.5 61c48.3333 40.6667 80.8333 94.3333 97.5 161z"
            },
            V: {
                x: 799,
                d: "M615 572l-361 -574c-8 -12.6667 -17 -19 -27 -19c-6.66667 0 -10.8333 1.16667 -12.5 3.5s-3.16667 9.16667 -4.5 20.5l-80 617c-1.33333 14 -5.16667 23.1667 -11.5 27.5s-21.5 6.5 -45.5 6.5c-9.33333 0 -15.5 0.5 -18.5 1.5s-4.5 4.16667 -4.5 9.5c0 12 6 18 18 18h2\nc1.33333 0 3.33333 -0.166667 6 -0.5s6 -0.5 10 -0.5h14.5c5.66667 0 12 -0.166667 19 -0.5s15 -0.5 24 -0.5h28.5h56c5.33333 0 14.3333 0.333333 27 1c12.6667 0.666667 21.6667 1 27 1c9.33333 0 14 -3.33333 14 -10c0 -8.66667 -1.66667 -14 -5 -16s-9.66667 -3 -19 -3\nc-42 0 -63 -10.3333 -63 -31l70 -539l314 498c0.666667 0.666667 2.16667 3 4.5 7s4.66667 9.16667 7 15.5s3.5 11.8333 3.5 16.5c0 20 -13.6667 31 -41 33c-8.66667 0 -13 3.33333 -13 10c0 8.66667 1.66667 14 5 16s7.66667 3 13 3c9.33333 0 23.6667 -0.333333 43 -1\ns34 -1 44 -1c6 0 19.1667 0.333333 39.5 1s33.5 1 39.5 1c7.33333 0 11 -3.33333 11 -10c0 -8 -1.33333 -13 -4 -15s-7.33333 -3.33333 -14 -4c-25.3333 -2 -46.6667 -9.33333 -64 -22s-34.6667 -32.6667 -52 -60z"
            },
            W: {
                x: 1073,
                d: "M900 572l-329 -574c-7.33333 -12.6667 -14.3333 -19 -21 -19c-4 0 -7 0.833333 -9 2.5s-3.16667 3.83333 -3.5 6.5c-0.333333 2.66667 -0.833333 7.33333 -1.5 14l-37 517l-298 -521c-7.33333 -12.6667 -14.3333 -19 -21 -19c-4 0 -7 0.833333 -9 2.5\ns-3.16667 3.83333 -3.5 6.5c-0.333333 2.66667 -0.833333 7.33333 -1.5 14l-44 614c-1.33333 16.6667 -4.33333 27.1667 -9 31.5s-18.3333 6.5 -41 6.5c-14.6667 0 -22 3.33333 -22 10c0 12.6667 6 19 18 19c4.66667 0 12.6667 -0.333333 24 -1\nc11.3333 -0.666667 19.3333 -1 24 -1h52c12 0 30.1667 0.333333 54.5 1s42.1667 1 53.5 1c10 0 15 -3.66667 15 -11c0 -12 -7.33333 -18 -22 -18c-16 0 -29 -1.33333 -39 -4s-16.8333 -6.33333 -20.5 -11s-6 -8.5 -7 -11.5s-1.5 -6.5 -1.5 -10.5l37 -516l259 455l-3 36\nc-2 30.6667 -5.16667 48.6667 -9.5 54s-17.8333 8 -40.5 8c-6.66667 0 -11.3333 0.166667 -14 0.5s-5 1.16667 -7 2.5s-3 3.66667 -3 7c0 12.6667 6 19 18 19c4.66667 0 12.6667 -0.333333 24 -1s19.3333 -1 24 -1h52c12 0 30.1667 0.333333 54.5 1s42.1667 1 53.5 1\nc10 0 15 -3.33333 15 -10c0 -8.66667 -1.83333 -14 -5.5 -16s-9.5 -3 -17.5 -3c-44.6667 -0.666667 -67 -11.3333 -67 -32l36 -521l273 478c9.33333 16 14 28.3333 14 37c0 23.3333 -17.3333 36 -52 38c-9.33333 0 -14 3.33333 -14 10c0 12.6667 6 19 18 19\nc9.33333 0 24.1667 -0.333333 44.5 -1s35.5 -1 45.5 -1h32.5c9.66667 0 17 0.166667 22 0.5s9 0.666667 12 1s5.16667 0.5 6.5 0.5h2c8 0 12 -3.66667 12 -11s-1.5 -12 -4.5 -14s-7.5 -3.33333 -13.5 -4c-18.6667 -2 -35.1667 -7.5 -49.5 -16.5s-24.6667 -17.8333 -31 -26.5\ns-14.5 -21.6667 -24.5 -39z"
            },
            X: {
                x: 913,
                d: "M500 406l175 188c8 8.66667 12.6667 18.3333 14 29l1 2c0 16.6667 -11 26.3333 -33 29c-8.66667 0 -13 3.66667 -13 11c0 12 6.33333 18 19 18c10 0 26.1667 -0.333333 48.5 -1s38.8333 -1 49.5 -1h46c4.66667 0 11.8333 0.333333 21.5 1s16.8333 1 21.5 1\nc8.66667 0 13 -3.66667 13 -11c0 -5.33333 -1.16667 -9.33333 -3.5 -12s-4.5 -4.16667 -6.5 -4.5s-5.33333 -0.833333 -10 -1.5c-25.3333 -1.33333 -48.6667 -7 -70 -17s-37.6667 -20 -49 -30s-26.3333 -24.6667 -45 -44c-18 -20 -32 -35 -42 -45l-127 -136l132 -310\nc8.66667 -19.3333 16.8333 -31.1667 24.5 -35.5s25.8333 -6.83333 54.5 -7.5c12.6667 0 19 -3.33333 19 -10c0 -6 -1.16667 -10.5 -3.5 -13.5s-4.5 -4.66667 -6.5 -5c-2 -0.333333 -4.66667 -0.5 -8 -0.5c-5.33333 0 -14.1667 0.333333 -26.5 1\nc-12.3333 0.666667 -21.5 1 -27.5 1h-110c-6 0 -15 -0.333333 -27 -1c-12 -0.666667 -21 -1 -27 -1c-10 0 -15 3.33333 -15 10c0 12.6667 5.66667 19 17 19c14.6667 0.666667 27.3333 4.33333 38 11s16 12.6667 16 18c0 2 -1.66667 6.33333 -5 13l-105 246\nc-8.66667 -8.66667 -25.8333 -26.8333 -51.5 -54.5c-25.6667 -27.6667 -40.8333 -43.8333 -45.5 -48.5l-89 -97c-12 -12.6667 -20.1667 -21.3333 -24.5 -26s-8.16667 -10 -11.5 -16s-5 -11.6667 -5 -17c0 -17.3333 11 -27 33 -29c8.66667 0 13 -3.66667 13 -11\nc0 -12 -6.33333 -18 -19 -18c-10 0 -26.1667 0.333333 -48.5 1c-22.3333 0.666667 -38.8333 1 -49.5 1h-47c-4.66667 0 -11.8333 -0.333333 -21.5 -1c-9.66667 -0.666667 -16.8333 -1 -21.5 -1c-8 0 -12 3.33333 -12 10c0 8 1.5 13 4.5 15s8.16667 3.33333 15.5 4\nc54.6667 2.66667 105.667 29.6667 153 81l217 232l-119 278c-4 9.33333 -7.5 16 -10.5 20s-9.33333 7.33333 -19 10s-23.8333 4 -42.5 4c-14.6667 0 -22 3.33333 -22 10c0 8.66667 1.66667 14 5 16s7.66667 3 13 3h3c2 0 4.66667 -0.166667 8 -0.5\nc3.33333 -0.333333 7.33333 -0.5 12 -0.5h16c6 0 12.5 -0.166667 19.5 -0.5s14.6667 -0.5 23 -0.5h24.5h58c5.33333 0 14.3333 0.333333 27 1s21.6667 1 27 1c10 0 15 -3.66667 15 -11c0 -12 -5.66667 -18 -17 -18c-27.3333 -2 -45.6667 -11.6667 -55 -29z"
            },
            Y: {
                x: 814,
                d: "M605 572l-251 -289c-5.33333 -6 -10.3333 -17 -15 -33l-36 -144c-8.66667 -34.6667 -13 -54.3333 -13 -59s0.666667 -8 2 -10s6.83333 -3.83333 16.5 -5.5c9.66667 -1.66667 24.1667 -2.5 43.5 -2.5c10 0 16.5 -0.5 19.5 -1.5s4.5 -4.16667 4.5 -9.5\nc0 -12 -6.33333 -18 -19 -18c-6 0 -15.5 0.333333 -28.5 1c-13 0.666667 -22.5 1 -28.5 1h-118c-6.66667 0 -16.5 -0.333333 -29.5 -1c-13 -0.666667 -22.5 -1 -28.5 -1c-9.33333 0 -14 3.33333 -14 10c0 8.66667 1.66667 14 5 16s10 3 20 3\nc31.3333 0.666667 51.8333 3 61.5 7s16.5 12.6667 20.5 26l27 108c16.6667 66.6667 25 100.667 25 102c0 3.33333 -1.33333 9 -4 17l-124 333c-4.66667 12.6667 -11.1667 21.1667 -19.5 25.5c-8.33333 4.33333 -24.1667 6.5 -47.5 6.5c-16 0 -24 3.33333 -24 10\nc0 6 1.16667 10.5 3.5 13.5s4.5 4.66667 6.5 5s4.66667 0.5 8 0.5c5.33333 0 14.1667 -0.333333 26.5 -1c12.3333 -0.666667 21.5 -1 27.5 -1h111c5.33333 0 14.3333 0.333333 27 1c12.6667 0.666667 21.6667 1 27 1c10 0 15 -3.66667 15 -11c0 -8 -1.83333 -13 -5.5 -15\ns-9.5 -3 -17.5 -3c-35.3333 0 -53 -7.66667 -53 -23c0 -2.66667 2 -8.66667 6 -18l113 -304l238 273c18.6667 21.3333 28 37.6667 28 49c0 14 -10 21.6667 -30 23c-8.66667 0 -13 3.33333 -13 10c0 6 1.16667 10.5 3.5 13.5s4.5 4.66667 6.5 5s4.66667 0.5 8 0.5\nc9.33333 0 23.8333 -0.333333 43.5 -1s34.5 -1 44.5 -1h41c4 0 10.1667 0.333333 18.5 1s14.5 1 18.5 1c8 0 12 -3.33333 12 -10c0 -5.33333 -1 -9.33333 -3 -12s-4.16667 -4.33333 -6.5 -5s-5.83333 -1.33333 -10.5 -2c-42.6667 -3.33333 -81.3333 -23 -116 -59z"
            },
            Z: {
                x: 754,
                d: "M693 652l-549 -621h173c42.6667 0 78.5 4.33333 107.5 13s53.1667 23 72.5 43c19.3333 20 34.5 41 45.5 63s22.5 51.3333 34.5 88c4 12.6667 6.83333 20.1667 8.5 22.5s4.5 3.5 8.5 3.5c6.66667 0 10 -3.33333 10 -10c0 -3.33333 -1 -8 -3 -14l-70 -221\nc-3.33333 -9.33333 -6.33333 -14.8333 -9 -16.5c-2.66667 -1.66667 -9.66667 -2.5 -21 -2.5h-427c-10 0 -16.5 0.333333 -19.5 1c-3 0.666667 -4.5 3 -4.5 7c0 6.66667 4.33333 15.3333 13 26l548 620h-164c-73.3333 0 -127.167 -14.3333 -161.5 -43\nc-34.3333 -28.6667 -61.8333 -73.3333 -82.5 -134c-3.33333 -11.3333 -8 -17 -14 -17c-6.66667 0 -10 3.33333 -10 10c0 2.66667 1 7.33333 3 14l55 180c3.33333 9.33333 6.33333 14.8333 9 16.5s9.66667 2.5 21 2.5h413c11.3333 0 18.1667 -0.5 20.5 -1.5\ns3.5 -3.16667 3.5 -6.5c0 -6.66667 -3.66667 -14.3333 -11 -23z"
            },
            "Ⅎ": {
                x: 743,
                d: "M593 659v-624c0 -16 -2 -25.8333 -6 -29.5c-4 -3.66667 -13.6667 -5.5 -29 -5.5h-373c-7.33333 0 -13 0.166667 -17 0.5c-4 0.333333 -8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2 10.6667 6 14c4 3.33333 8 5.16667 12 5.5s9.66667 0.5 17 0.5h368v287h-218\nc-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h218v291c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17z"
            },
            "℧": {
                x: 933,
                d: "M753 662l27 -110c2 -8 3 -13 3 -15c0 -8 -4.33333 -12 -13 -12c-5.33333 0 -9 2.66667 -11 8c-0.666667 1.33333 -2.66667 8.66667 -6 22c-8 32 -14.3333 51.3333 -19 58c-3.33333 6 -23 9 -59 9h-82c6 -26.6667 15.5 -52 28.5 -76s33.5 -56.6667 61.5 -98\nc28.6667 -43.3333 50.5 -81.6667 65.5 -115s22.5 -68 22.5 -104c0 -69.3333 -29.5 -128.5 -88.5 -177.5s-131.167 -73.5 -216.5 -73.5c-84.6667 0 -156.5 24.5 -215.5 73.5s-88.5 108.167 -88.5 177.5c0 36 7.5 70.6667 22.5 104s36.8333 71.6667 65.5 115\nc28 40.6667 48.5 73.1667 61.5 97.5s22.5 49.8333 28.5 76.5h-82c-36 0 -56 -3.33333 -60 -10c-4.66667 -9.33333 -10.6667 -29 -18 -59c-3.33333 -13.3333 -5.83333 -21.3333 -7.5 -24s-4.83333 -4 -9.5 -4c-8.66667 0 -13 4 -13 12c0 2 1 7 3 15l27 109\nc2.66667 10.6667 5.33333 17 8 19s10.3333 3 23 3h130c12.6667 0 20.3333 -0.833333 23 -2.5s4 -7.5 4 -17.5c0 -47.3333 -18.3333 -119.333 -55 -216c-36 -94 -54 -167 -54 -219c0 -71.3333 20.6667 -127.167 62 -167.5c41.3333 -40.3333 90 -60.5 146 -60.5\nc54 0 102 20 144 60s63 96 63 168c0 49.3333 -18.3333 123 -55 221c-36 96 -54 167.333 -54 214c0 10 1.5 15.8333 4.5 17.5s10.8333 2.5 23.5 2.5h130c12 0 19.3333 -1 22 -3s5.33333 -8 8 -18z"
            },
            "≂": {
                x: 965,
                d: "M780 424h-595c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h595c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5\ns-9.66667 -0.5 -17 -0.5zM815 226c0 -49.3333 -15.5 -93.3333 -46.5 -132c-31 -38.6667 -71.1667 -58 -120.5 -58c-20.6667 0 -41.8333 4.66667 -63.5 14s-38.8333 18.5 -51.5 27.5s-29 21.8333 -49 38.5c-25.3333 20.6667 -44.6667 35.8333 -58 45.5s-30 18.8333 -50 27.5\ns-39.6667 13 -59 13c-32.6667 0 -63.5 -11.8333 -92.5 -35.5s-44.5 -59.1667 -46.5 -106.5c0 -3.33333 -1.16667 -8 -3.5 -14s-5.83333 -9 -10.5 -9c-9.33333 0 -14 10.6667 -14 32c0 48.6667 15.3333 92.3333 46 131s71 58 121 58c20.6667 0 41.8333 -4.66667 63.5 -14\ns38.8333 -18.5 51.5 -27.5s29 -21.8333 49 -38.5c25.3333 -20.6667 44.6667 -35.8333 58 -45.5c13.3333 -9.66667 30 -18.8333 50 -27.5c20 -8.66667 39.6667 -13 59 -13c32.6667 0 63.5 11.8333 92.5 35.5c29 23.6667 44.5 59.1667 46.5 106.5\nc0 4 1.16667 8.83333 3.5 14.5s5.83333 8.5 10.5 8.5c9.33333 0 14 -10.3333 14 -31z"
            },
            "ℶ": {
                x: 978,
                d: "M766 604v-500h40c14.6667 -1.33333 22 -8 22 -20c0 -6.66667 -5 -14.6667 -15 -24l-68 -68c-6 -6 -10.6667 -9.5 -14 -10.5s-10.6667 -1.5 -22 -1.5h-524c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 5.33333 5.66667 13.6667 17 25l67 68\nc6 5.33333 10.6667 8.5 14 9.5s11 1.5 23 1.5h455v449c0 16.6667 -3.33333 27.3333 -10 32c-6.66667 5.33333 -13.1667 8.5 -19.5 9.5s-20.1667 1.5 -41.5 1.5h-324c-20 0 -34.5 0.333333 -43.5 1s-19.5 3 -31.5 7s-20.5 10.1667 -25.5 18.5s-9.33333 20.1667 -13 35.5\ns-5.5 35 -5.5 59c0 13.3333 0.333333 22.6667 1 28s2.33333 9.66667 5 13s7.33333 5 14 5c8.66667 0 15 -5.33333 19 -16c4 -10 9.5 -17.6667 16.5 -23s13.1667 -8.33333 18.5 -9s12.6667 -1 22 -1h367c30 0 52.6667 -7.33333 68 -22s23 -44 23 -88z"
            },
            "ג": {
                x: 707,
                d: "M308 714h170c14.6667 0 27.5 -2 38.5 -6s19 -8.33333 24 -13s8.83333 -10.3333 11.5 -17s4.16667 -11.5 4.5 -14.5s0.5 -5.83333 0.5 -8.5c0 -5.33333 -1 -11.3333 -3 -18s-7 -14 -15 -22s-18.3333 -13.6667 -31 -17c0.666667 -8.66667 1.16667 -24 1.5 -46\ns1.16667 -39.3333 2.5 -52c19.3333 -234 29 -375.667 29 -425c0 -38.6667 -1.66667 -63.6667 -5 -75c-8 -28 -19.6667 -42 -35 -42c-7.33333 0 -12.5 2.5 -15.5 7.5s-5.5 12.8333 -7.5 23.5l-7 49c-34 -34 -51.6667 -51.3333 -53 -52c-4.66667 -4 -14.3333 -6 -29 -6h-204\nc-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 5.33333 5.66667 13.6667 17 25l67 68c6 5.33333 10.6667 8.5 14 9.5s11 1.5 23 1.5h197v492h-165c-36.6667 0 -61 9.5 -73 28.5s-18 49.8333 -18 92.5c0 13.3333 0.333333 22.6667 1 28\ns2.33333 9.66667 5 13s7.33333 5 14 5c8.66667 0 15 -5.33333 19 -16c4 -10 9.5 -17.6667 16.5 -23s13.1667 -8.33333 18.5 -9s12.6667 -1 22 -1z"
            },
            "ℸ": {
                x: 868,
                d: "M629 596h-388c-36.6667 0 -61 9.5 -73 28.5s-18 49.8333 -18 92.5c0 13.3333 0.333333 22.6667 1 28s2.33333 9.66667 5 13s7.33333 5 14 5c8.66667 0 15 -5.33333 19 -16c4 -10 9.5 -17.6667 16.5 -23s13.1667 -8.33333 18.5 -9s12.6667 -1 22 -1h393\nc14.6667 0 27.5 -2 38.5 -6s19 -8.33333 24 -13s8.83333 -10.3333 11.5 -17s4.16667 -11.5 4.5 -14.5s0.5 -5.83333 0.5 -8.5c0 -5.33333 -1 -11.3333 -3 -18s-7 -14 -15 -22s-18.3333 -13.6667 -31 -17c0.666667 -8.66667 1.16667 -24 1.5 -46s1.16667 -39.3333 2.5 -52\nc19.3333 -234 29 -375.667 29 -425c0 -38.6667 -1.66667 -63.6667 -5 -75c-8 -28 -19.6667 -42 -35 -42c-8 0 -13.5 3.33333 -16.5 10c-3 6.66667 -6.5 21.3333 -10.5 44c-4 27.3333 -6 53.3333 -6 78v506z"
            },
            "⋖": {
                x: null,
                d: "M662 250c0 -17.3333 -6.16667 -32.1667 -18.5 -44.5s-27.5 -18.5 -45.5 -18.5c-16.6667 0 -31.3333 6 -44 18s-19 27 -19 45s6.33333 33 19 45s27.3333 18 44 18c18 0 33.1667 -6.16667 45.5 -18.5s18.5 -27.1667 18.5 -44.5zM741 497l-524 -247l524 -248\nc13.3333 -6 20 -13 20 -21c0 -6.66667 -2.16667 -11.6667 -6.5 -15c-4.33333 -3.33333 -8.83333 -5 -13.5 -5c-3.33333 0 -9.33333 2 -18 6l-553 261c-0.666667 0 -1.33333 0.333333 -2 1c-12 6 -18 13 -18 21s6.33333 15.3333 19 22l556 262c8 3.33333 13.3333 5 16 5\nc4.66667 0 9.16667 -1.66667 13.5 -5s6.5 -8.33333 6.5 -15c0 -8.66667 -6.66667 -16 -20 -22z"
            },
            "⋗": {
                x: null,
                d: "M376 250c0 -18 -6.33333 -33 -19 -45s-27.3333 -18 -44 -18c-18 0 -33.1667 6.16667 -45.5 18.5c-12.3333 12.3333 -18.5 27.1667 -18.5 44.5c0 17.3333 6.16667 32.1667 18.5 44.5c12.3333 12.3333 27.5 18.5 45.5 18.5c16.6667 0 31.3333 -6 44 -18s19 -27 19 -45z\nM188 533l553 -261c0.666667 0 1.33333 -0.333333 2 -1c12 -6 18 -13 18 -21s-6.33333 -15.3333 -19 -22l-556 -262c-8 -3.33333 -13.3333 -5 -16 -5c-5.33333 0 -10 2 -14 6s-6 8.33333 -6 13c0 9.33333 6.66667 17 20 23l524 247l-524 247c-13.3333 6 -20 13.6667 -20 23\nc0 4.66667 2 9 6 13s8.66667 6 14 6c3.33333 0 9.33333 -2 18 -6z"
            },
            "⋉": {
                x: 783,
                d: "M619 449l-198 -199l73.5 -73.5c34.3333 -34.3333 64.6667 -64.8333 91 -91.5c26.3333 -26.6667 40.5 -41 42.5 -43c3.33333 -4 5 -8.33333 5 -13c0 -5.33333 -1.83333 -10 -5.5 -14s-8.5 -6 -14.5 -6c-7.33333 0 -12 2 -14 6l-46 46\nc-27.3333 27.3333 -57.8333 57.6667 -91.5 91c-33.6667 33.3333 -57.1667 56.6667 -70.5 70l-199 -199c-9.33333 -9.33333 -16.6667 -14 -22 -14c-13.3333 0 -20 12 -20 36v410c0 24 6.66667 36 20 36c5.33333 0 12.6667 -4.66667 22 -14l200 -199l199 199\nc9.33333 9.33333 16.6667 14 22 14s10 -2 14 -6s6 -8.66667 6 -14s-4.66667 -12.6667 -14 -22zM190 77l172 173l-172 172v-345z"
            },
            "⋊": {
                x: 783,
                d: "M392 278l199 199c9.33333 9.33333 16.6667 14 22 14c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-412c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-7.33333 0 -12 2 -14 6l-46 46\nc-27.3333 27.3333 -57.8333 57.6667 -91.5 91c-33.6667 33.3333 -57.1667 56.6667 -70.5 70l-199 -199c-9.33333 -9.33333 -16.6667 -14 -22 -14s-10 2 -14 6s-6 8.66667 -6 14c0 6 4.66667 13.6667 14 23l198 198l-198 199c-9.33333 9.33333 -14 16.6667 -14 22s2 10 6 14\ns8.66667 6 14 6s12.6667 -4.66667 22 -14zM421 250l172 -172v345z"
            },
            "∼": {
                x: 965,
                d: "M815 326c0 -52 -15.6667 -97.1667 -47 -135.5s-71.3333 -57.5 -120 -57.5c-20.6667 0 -42.1667 4.66667 -64.5 14s-40.6667 19 -55 29s-34.8333 25.6667 -61.5 47c-29.3333 22.6667 -55.3333 39.8333 -78 51.5s-46.6667 17.5 -72 17.5\nc-36.6667 0 -68.6667 -12.6667 -96 -38c-24.6667 -24 -37.6667 -54 -39 -90c-2 -20 -7.33333 -30 -16 -30c-10.6667 0 -16 13.3333 -16 40c0 52 15.6667 97.1667 47 135.5s71.3333 57.5 120 57.5c45.3333 0 98.6667 -24.3333 160 -73c28 -21.3333 48.3333 -36.5 61 -45.5\ns29.3333 -18 50 -27s40.6667 -13.5 60 -13.5c36.6667 0 68.6667 12.6667 96 38c24.6667 24 37.6667 54 39 90c1.33333 20 6.66667 30 16 30c10.6667 0 16 -13.3333 16 -40z"
            },
            "≈": {
                x: 965,
                d: "M815 443c0 -49.3333 -16.5 -87.3333 -49.5 -114s-71.8333 -40 -116.5 -40c-19.3333 0 -39.8333 3.33333 -61.5 10s-39.1667 13.3333 -52.5 20s-32 16.6667 -56 30c-35.3333 20.6667 -64.8333 35.6667 -88.5 45s-48.5 14 -74.5 14c-34 0 -64.3333 -8.33333 -91 -25\ns-41 -37.6667 -43 -63c-2 -20 -7.33333 -30 -16 -30c-10.6667 0 -16 13 -16 39c0 49.3333 16.5 87.3333 49.5 114s71.8333 40 116.5 40c19.3333 0 39.8333 -3.33333 61.5 -10s39.1667 -13.3333 52.5 -20s32 -16.6667 56 -30c35.3333 -20.6667 64.8333 -35.6667 88.5 -45\ns48.5 -14 74.5 -14c34 0 64.3333 8.33333 91 25s41 37.6667 43 63c2.66667 20 8 30 16 30c10.6667 0 16 -13 16 -39zM815 210c0 -49.3333 -16.5 -87.3333 -49.5 -114c-33 -26.6667 -71.8333 -40 -116.5 -40c-19.3333 0 -39.8333 3.33333 -61.5 10\nc-21.6667 6.66667 -39.1667 13.3333 -52.5 20s-32 16.6667 -56 30c-35.3333 20.6667 -64.8333 35.6667 -88.5 45s-48.5 14 -74.5 14c-34 0 -64.3333 -8.33333 -91 -25s-41 -37.6667 -43 -63c-2 -20 -7.33333 -30 -16 -30c-10.6667 0 -16 13 -16 39\nc0 49.3333 16.5 87.3333 49.5 114s71.8333 40 116.5 40c19.3333 0 39.8333 -3.33333 61.5 -10s39.1667 -13.3333 52.5 -20s32 -16.6667 56 -30c35.3333 -20.6667 64.8333 -35.6667 88.5 -45s48.5 -14 74.5 -14c34 0 64.3333 8.33333 91 25s41 37.6667 43 63\nc2.66667 20 8 30 16 30c2 0 4.16667 -1 6.5 -3s4.5 -6.16667 6.5 -12.5s3 -14.1667 3 -23.5z"
            },
            "≅": {
                x: 977,
                d: "M821 549c0 -46 -16.1667 -84.6667 -48.5 -116s-71.5 -47 -117.5 -47c-20 0 -40.6667 3.83333 -62 11.5s-38 14.8333 -50 21.5s-28 16.6667 -48 30c-28.6667 19.3333 -50 33 -64 41s-31 15.6667 -51 23c-20 7.33333 -39.3333 11 -58 11s-37.6667 -3.5 -57 -10.5\nc-19.3333 -7 -37.3333 -19.5 -54 -37.5s-25.6667 -40 -27 -66c0 -15.3333 -4.66667 -23 -14 -23s-14 10 -14 30c0 46 16.1667 84.6667 48.5 116c32.3333 31.3333 71.5 47 117.5 47c20 0 40.6667 -3.83333 62 -11.5s38 -14.8333 50 -21.5s28 -16.6667 48 -30\nc28.6667 -19.3333 50 -33 64 -41s31 -15.6667 51 -23s39.3333 -11 58 -11c34 0 65 10.1667 93 30.5s43 46.8333 45 79.5c2 18 6.66667 27 14 27c9.33333 0 14 -10 14 -30zM186 7h605c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5\ns-9.66667 -0.5 -17 -0.5h-607c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20zM821 315c0 -44.6667 -16 -82.8333 -48 -114.5s-71.3333 -47.5 -118 -47.5c-20 0 -40.6667 3.83333 -62 11.5s-38 14.8333 -50 21.5s-28 16.6667 -48 30\nc-28.6667 19.3333 -50 33 -64 41s-31 15.6667 -51 23s-39.3333 11 -58 11s-37.6667 -3.5 -57 -10.5c-19.3333 -7 -37.3333 -19.5 -54 -37.5s-25.6667 -40 -27 -66c0 -15.3333 -4.66667 -23 -14 -23s-14 10 -14 30c0 46 16.1667 84.6667 48.5 116s71.5 47 117.5 47\nc20 0 40.6667 -3.83333 62 -11.5s38 -14.8333 50 -21.5s28 -16.6667 48 -30c28.6667 -19.3333 50 -33 64 -41s31 -15.6667 51 -23s39.3333 -11 58 -11c35.3333 0 66.5 10.3333 93.5 31c27 20.6667 41.8333 45.3333 44.5 74c1.33333 21.3333 6 32 14 32\nc9.33333 0 14 -10.3333 14 -31z"
            },
            "≽": {
                x: 965,
                d: "M815 -125c0 -44.6667 -16 -82.8333 -48 -114.5c-32 -31.6667 -71.3333 -47.5 -118 -47.5c-20 0 -40.6667 3.83333 -62 11.5s-38 14.8333 -50 21.5c-12 6.66667 -28 16.6667 -48 30c-28.6667 19.3333 -50 33 -64 41s-31 15.6667 -51 23s-39.3333 11 -58 11\ns-37.6667 -3.5 -57 -10.5c-19.3333 -7 -37.3333 -19.5 -54 -37.5s-25.6667 -40 -27 -66c0 -15.3333 -4.66667 -23 -14 -23s-14 10 -14 30c0 46 16.1667 84.6667 48.5 116c32.3333 31.3333 71.5 47 117.5 47c20 0 40.6667 -3.83333 62 -11.5\nc21.3333 -7.66667 38 -14.8333 50 -21.5c12 -6.66667 28 -16.6667 48 -30c28.6667 -19.3333 50 -33 64 -41s31 -15.6667 51 -23s39.3333 -11 58 -11c35.3333 0 66.5 10.3333 93.5 31s41.8333 45.3333 44.5 74c1.33333 21.3333 6 32 14 32c9.33333 0 14 -10.3333 14 -31z\nM815 108c0 -44.6667 -16 -82.8333 -48 -114.5c-32 -31.6667 -71.3333 -47.5 -118 -47.5c-20 0 -40.6667 3.83333 -62 11.5s-38 14.8333 -50 21.5s-28 16.6667 -48 30c-28.6667 19.3333 -50 33 -64 41s-31 15.6667 -51 23s-39.3333 11 -58 11s-37.6667 -3.5 -57 -10.5\nc-19.3333 -7 -37.3333 -19.5 -54 -37.5s-25.6667 -40 -27 -66c0 -15.3333 -4.66667 -23 -14 -23s-14 10 -14 30c0 46 16.1667 84.6667 48.5 116c32.3333 31.3333 71.5 47 117.5 47c20 0 40.6667 -3.83333 62 -11.5c21.3333 -7.66667 38 -14.8333 50 -21.5\ns28 -16.6667 48 -30c28.6667 -19.3333 50 -33 64 -41s31 -15.6667 51 -23c20 -7.33333 39.3333 -11 58 -11c35.3333 0 66.5 10.3333 93.5 31c27 20.6667 41.8333 45.3333 44.5 74c1.33333 21.3333 6 32 14 32c9.33333 0 14 -10.3333 14 -31zM693 482\nc-100.667 0 -187 -8.33333 -259 -25c-36 -8.66667 -67.5 -19.6667 -94.5 -33s-47.5 -26.1667 -61.5 -38.5s-25.6667 -27.5 -35 -45.5s-15.3333 -31.8333 -18 -41.5s-5.33333 -22.5 -8 -38.5c-2.66667 -11.3333 -9.33333 -17 -20 -17c-13.3333 0 -20 7 -20 21\nc0 6 1.16667 15.6667 3.5 29s9.83333 32.8333 22.5 58.5s29.3333 47.1667 50 64.5c49.3333 42 116.667 70.6667 202 86v1c-86 14.6667 -154 44.3333 -204 89c-20.6667 18.6667 -37.1667 40.8333 -49.5 66.5s-19.5 44.5 -21.5 56.5s-3 20.6667 -3 26c0 6 2 11 6 15\ns8.66667 6 14 6c10.6667 0 17 -5.66667 19 -17c4.66667 -25.3333 10.5 -46.6667 17.5 -64s21.3333 -36.8333 43 -58.5c21.6667 -21.6667 49.3333 -39 83 -52s81.3333 -24.1667 143 -33.5c61.6667 -9.33333 134.5 -14 218.5 -14c30 0 47.3333 -0.666667 52 -2\nc10 -2 15 -8.33333 15 -19c0 -13.3333 -12.6667 -20 -38 -20h-57z"
            },
            "≾": {
                x: 965,
                d: "M815 -125c0 -44.6667 -16 -82.8333 -48 -114.5c-32 -31.6667 -71.3333 -47.5 -118 -47.5c-20 0 -40.6667 3.83333 -62 11.5s-38 14.8333 -50 21.5c-12 6.66667 -28 16.6667 -48 30c-28.6667 19.3333 -50 33 -64 41s-31 15.6667 -51 23s-39.3333 11 -58 11\ns-37.6667 -3.5 -57 -10.5c-19.3333 -7 -37.3333 -19.5 -54 -37.5s-25.6667 -40 -27 -66c0 -15.3333 -4.66667 -23 -14 -23s-14 10 -14 30c0 46 16.1667 84.6667 48.5 116c32.3333 31.3333 71.5 47 117.5 47c20 0 40.6667 -3.83333 62 -11.5\nc21.3333 -7.66667 38 -14.8333 50 -21.5c12 -6.66667 28 -16.6667 48 -30c28.6667 -19.3333 50 -33 64 -41s31 -15.6667 51 -23s39.3333 -11 58 -11c35.3333 0 66.5 10.3333 93.5 31s41.8333 45.3333 44.5 74c1.33333 21.3333 6 32 14 32c9.33333 0 14 -10.3333 14 -31z\nM815 108c0 -44.6667 -16 -82.8333 -48 -114.5c-32 -31.6667 -71.3333 -47.5 -118 -47.5c-20 0 -40.6667 3.83333 -62 11.5s-38 14.8333 -50 21.5s-28 16.6667 -48 30c-28.6667 19.3333 -50 33 -64 41s-31 15.6667 -51 23s-39.3333 11 -58 11s-37.6667 -3.5 -57 -10.5\nc-19.3333 -7 -37.3333 -19.5 -54 -37.5s-25.6667 -40 -27 -66c0 -15.3333 -4.66667 -23 -14 -23s-14 10 -14 30c0 46 16.1667 84.6667 48.5 116c32.3333 31.3333 71.5 47 117.5 47c20 0 40.6667 -3.83333 62 -11.5c21.3333 -7.66667 38 -14.8333 50 -21.5\ns28 -16.6667 48 -30c28.6667 -19.3333 50 -33 64 -41s31 -15.6667 51 -23c20 -7.33333 39.3333 -11 58 -11c35.3333 0 66.5 10.3333 93.5 31c27 20.6667 41.8333 45.3333 44.5 74c1.33333 21.3333 6 32 14 32c9.33333 0 14 -10.3333 14 -31zM507 502\nc88 -14.6667 157 -44.3333 207 -89c20.6667 -18.6667 37.1667 -40.8333 49.5 -66.5s19.5 -44.5 21.5 -56.5s3 -20.6667 3 -26c0 -14 -6.66667 -21 -20 -21c-6.66667 0 -11.5 2 -14.5 6s-4.5 7.66667 -4.5 11c-2.66667 15.3333 -5.33333 27.5 -8 36.5s-8.5 22.5 -17.5 40.5\ns-20 33 -33 45s-32 24.8333 -57 38.5s-54.1667 24.5 -87.5 32.5c-82 19.3333 -173.333 29 -274 29h-57c-25.3333 0 -38 6.66667 -38 20c0 6.66667 2.16667 11.6667 6.5 15s9 5.16667 14 5.5s12.5 0.5 22.5 0.5c136.667 0 239 8 307 24\nc37.3333 8.66667 69.6667 19.8333 97 33.5s48.1667 26.6667 62.5 39s26.3333 27.3333 36 45s15.6667 31.5 18 41.5s4.83333 22.6667 7.5 38c2 12 8.66667 18 20 18c5.33333 0 10 -2 14 -6s6 -9 6 -15s-1.16667 -15.6667 -3.5 -29s-9.83333 -32.8333 -22.5 -58.5\ns-29.3333 -47.1667 -50 -64.5c-49.3333 -42 -117.667 -71 -205 -87z"
            },
            "↶": {
                x: 1235,
                d: "M350 88c20 25.3333 42.1667 46.6667 66.5 64s42.6667 28.5 55 33.5s19.8333 7.5 22.5 7.5c7.33333 0 11 -5 11 -15c0 -6 -0.833333 -9.83333 -2.5 -11.5s-6.5 -4.5 -14.5 -8.5c-66 -28.6667 -114.667 -75.3333 -146 -140c-3.33333 -8 -5.83333 -12.8333 -7.5 -14.5\nc-1.66667 -1.66667 -4.16667 -2.5 -7.5 -2.5c-4 0 -8 3.33333 -12 10c-32 70 -83.6667 120.333 -155 151c-6.66667 2 -10 7 -10 15c0 10.6667 3.66667 16 11 16c4 0 13.5 -3.5 28.5 -10.5s34.3333 -19.5 58 -37.5c23.6667 -18 43.8333 -38.6667 60.5 -62\nc13.3333 118 57.8333 210.667 133.5 278c75.6667 67.3333 160.5 101 254.5 101c58.6667 0 113.167 -13.1667 163.5 -39.5s91.5 -60.3333 123.5 -102s57 -87.3333 75 -137s27 -98.8333 27 -147.5c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -7.83333 -5.5 -11.5\nc-3.33333 -3.66667 -8 -5.5 -14 -5.5s-10.5 2 -13.5 6s-4.83333 8.66667 -5.5 14s-1 13.3333 -1 24c-0.666667 31.3333 -5.83333 64 -15.5 98s-24.3333 67.6667 -44 101c-19.6667 33.3333 -42.8333 63 -69.5 89s-59.1667 47.1667 -97.5 63.5s-79.1667 24.5 -122.5 24.5\nc-90.6667 0 -168.833 -32.5 -234.5 -97.5c-65.6667 -65 -102.833 -143.833 -111.5 -236.5z"
            },
            "↷": {
                x: 1236,
                d: "M928 83c16.6667 23.3333 36.8333 44 60.5 62c23.6667 18 43 30.5 58 37.5s24.5 10.5 28.5 10.5c7.33333 0 11 -5.33333 11 -16c0 -5.33333 -0.833333 -8.83333 -2.5 -10.5s-5.83333 -3.83333 -12.5 -6.5c-68.6667 -30 -119.333 -81 -152 -153c-2 -4 -5.33333 -6 -10 -6\ns-9 4 -13 12c-31.3333 68 -79.6667 116 -145 144c-10 4.66667 -15.8333 7.83333 -17.5 9.5s-2.5 5.5 -2.5 11.5c0 10 3.66667 15 11 15c3.33333 0 11.1667 -2.5 23.5 -7.5s30.5 -16.3333 54.5 -34s46 -38.8333 66 -63.5c-8 92 -44.8333 170.667 -110.5 236\ns-144.5 98 -236.5 98c-98 0 -180.333 -38.6667 -247 -116c-66.6667 -77.3333 -100.667 -168.667 -102 -274c0 -20 -6.66667 -30 -20 -30c-6 0 -10.6667 1.83333 -14 5.5c-3.33333 3.66667 -5.16667 7.5 -5.5 11.5s-0.5 9.66667 -0.5 17c0 49.3333 9 98.8333 27 148.5\ns43.1667 95.3333 75.5 137c32.3333 41.6667 73.6667 75.5 124 101.5s104.5 39 162.5 39c98 0 184.333 -34.8333 259 -104.5s118 -161.167 130 -274.5z"
            },
            "Ϝ": {
                x: 964,
                d: "M330 251l-78 -309c-2.66667 -8.66667 -4.83333 -14.1667 -6.5 -16.5s-5.16667 -4.16667 -10.5 -5.5c-9.33333 -2 -21.3333 -3 -36 -3c-32.6667 0 -49 4 -49 12c0 4 0.666667 8.66667 2 14l164 654c12 5.33333 30 8 54 8h390c18.6667 0 33.3333 -1.33333 44 -4\nc5.33333 -1.33333 8 -2.33333 8 -3c0 -1.33333 0.666667 -2.33333 2 -3c-1.33333 -0.666667 -2 -1.66667 -2 -3c0 -0.666667 -2.66667 -1.66667 -8 -3c-10.6667 -2.66667 -25.3333 -4 -44 -4h-347l-78 -314h182c18.6667 0 33.3333 -1.33333 44 -4\nc5.33333 -1.33333 8 -2.33333 8 -3c0 -1.33333 0.666667 -2.33333 2 -3c-1.33333 -0.666667 -2 -1.66667 -2 -3c0 -0.666667 -2.66667 -1.66667 -8 -3c-10.6667 -2.66667 -25.3333 -4 -44 -4h-187z"
            },
            "κ": {
                x: 580,
                d: "M208 250c22.6667 -1.33333 42.5 -3 59.5 -5s37 -6.33333 60 -13s40.8333 -17.1667 53.5 -31.5s19 -32.1667 19 -53.5c0 -5.33333 -1.66667 -16.3333 -5 -33c-5.33333 -20 -8 -38.6667 -8 -56c0 -32 11 -48 33 -48c12 0 22.8333 3.83333 32.5 11.5s18 18.5 25 32.5\ns12.5 26.5 16.5 37.5s8 24.5 12 40.5c2 8.66667 3.83333 14.1667 5.5 16.5c1.66667 2.33333 4.5 3.5 8.5 3.5c6.66667 0 10 -3 10 -9c0 -2 -1.33333 -8 -4 -18s-6.83333 -22.8333 -12.5 -38.5c-5.66667 -15.6667 -11.5 -29.5 -17.5 -41.5\nc-21.3333 -36.6667 -47.6667 -55 -79 -55c-25.3333 0 -46.3333 8.83333 -63 26.5c-16.6667 17.6667 -25 41.1667 -25 70.5c0 11.3333 1.33333 23.3333 4 36c2 7.33333 3 14.3333 3 21c0 52.6667 -56.6667 81.6667 -170 87c-0.666667 -2 -8.5 -33 -23.5 -93\ns-23.5 -93.6667 -25.5 -101c-2 -10 -4 -17.5 -6 -22.5s-6 -10.3333 -12 -16s-13.6667 -8.5 -23 -8.5c-7.33333 0 -13.5 2.33333 -18.5 7c-5 4.66667 -7.5 10.6667 -7.5 18c0 5.33333 1 12 3 20l93 371c6 23.3333 19 35 39 35c6.66667 0 12.6667 -2.33333 18 -7\ns8 -10.6667 8 -18l-38 -159c19.3333 6 37.8333 15 55.5 27s41.8333 31.6667 72.5 59c22 18 38.8333 31.6667 50.5 41s28.6667 19.5 51 30.5s42.8333 16.5 61.5 16.5c10.6667 0 19 -2.5 25 -7.5s9.5 -9.33333 10.5 -13s1.5 -7.5 1.5 -11.5\nc0 -11.3333 -4.66667 -22.3333 -14 -33s-21.3333 -16 -36 -16c-7.33333 0 -14.6667 2.33333 -22 7s-11 13 -11 25c0 9.33333 1.66667 16.3333 5 21c-18.6667 -7.33333 -35.6667 -16.3333 -51 -27s-38.3333 -29.3333 -69 -56c-41.3333 -34.6667 -73 -58 -95 -70z"
            },
            k: {
                x: 546,
                d: "M276 669l-103 -411c30 11.3333 58 32.6667 84 64c38 42.6667 69.5 73.1667 94.5 91.5s50.5 27.5 76.5 27.5c21.3333 0 38 -5.83333 50 -17.5s18 -25.5 18 -41.5s-5 -29.1667 -15 -39.5s-22 -15.5 -36 -15.5c-8.66667 0 -16.3333 2.66667 -23 8s-10 13.3333 -10 24\nc0 11.3333 4.33333 22 13 32s21.3333 16 38 18c-9.33333 8 -21.3333 12 -36 12c-22 0 -43.6667 -7.5 -65 -22.5s-47 -39.5 -77 -73.5c-34 -36.6667 -62.6667 -62 -86 -76c96.6667 -12.6667 145 -47.3333 145 -104c0 -8.66667 -1.33333 -19 -4 -31\nc-5.33333 -20 -8 -38.6667 -8 -56c0 -32 11 -48 33 -48c16 0 30.1667 7.33333 42.5 22c12.3333 14.6667 21.1667 29.1667 26.5 43.5c5.33333 14.3333 11 33.1667 17 56.5c2 8.66667 3.83333 14.1667 5.5 16.5s4.5 3.5 8.5 3.5c6.66667 0 10 -3 10 -9\nc0 -2 -1.33333 -8 -4 -18s-6.83333 -22.8333 -12.5 -38.5c-5.66667 -15.6667 -11.5 -29.1667 -17.5 -40.5c-21.3333 -37.3333 -47.3333 -56 -78 -56c-26 0 -47.3333 9 -64 27s-25 41.3333 -25 70c0 11.3333 1.33333 22 4 32c2 10 3 18.3333 3 25c0 24 -10 43.3333 -30 58\ns-48.3333 24 -85 28l-47 -187c-3.33333 -12.6667 -6.16667 -22 -8.5 -28s-6.33333 -11.6667 -12 -17c-5.66667 -5.33333 -12.8333 -8 -21.5 -8c-18 0 -27 8.66667 -27 26c0 5.33333 1.33333 13 4 23l143 572c3.33333 12 5 20 5 24c0 4.66667 -0.5 8 -1.5 10s-5.5 4 -13.5 6\ns-20 3 -36 3c-13.3333 0 -20 3.33333 -20 10c0 8.66667 1.83333 14 5.5 16s12.1667 3.66667 25.5 5c6 0.666667 14.5 1.5 25.5 2.5s19.1667 1.5 24.5 1.5c30 3.33333 48.3333 5 55 5c8 0 12 -3.33333 12 -10c0 -2 -1 -7 -3 -15z"
            },
            "ℏ": {
                x: 791,
                d: "M342 519l-38 -153c42 50.6667 91.3333 76 148 76c35.3333 0 63.3333 -9.16667 84 -27.5s31 -45.1667 31 -80.5c0 -40 -20.6667 -113.333 -62 -220c-11.3333 -32 -17 -55.3333 -17 -70c0 -22 8.33333 -33 25 -33c17.3333 0 35.3333 9.33333 54 28\nc18.6667 18.6667 34.3333 50.6667 47 96c3.33333 10.6667 6.66667 16.3333 10 17c1.33333 0.666667 3 1 5 1c8 0 12 -3.33333 12 -10c0 -2 -1.33333 -8 -4 -18s-7.5 -22.8333 -14.5 -38.5c-7 -15.6667 -15.1667 -30.6667 -24.5 -45\nc-9.33333 -14.3333 -21.8333 -26.6667 -37.5 -37c-15.6667 -10.3333 -32.5 -15.5 -50.5 -15.5c-23.3333 0 -42.8333 7.5 -58.5 22.5s-23.5 35.1667 -23.5 60.5c0 13.3333 3.66667 29.6667 11 49c42.6667 109.333 64 186 64 230c0 46 -18 69 -54 69\nc-23.3333 0 -45.1667 -5.16667 -65.5 -15.5s-37.3333 -23.6667 -51 -40s-23.6667 -29.5 -30 -39.5s-11.5 -19 -15.5 -27c0 -0.666667 -0.833333 -4 -2.5 -10s-3.5 -13 -5.5 -21s-3.66667 -14.3333 -5 -19c-0.666667 -5.33333 -3.33333 -16.6667 -8 -34\ns-7.33333 -28.6667 -8 -34l-23 -89c-10.6667 -46 -17 -71 -19 -75c-2 -7.33333 -6.5 -13.6667 -13.5 -19c-7 -5.33333 -14.8333 -8 -23.5 -8c-19.3333 0 -29 9.33333 -29 28c0 5.33333 1.33333 13 4 23l114 456c-44 -14.6667 -68.6667 -22 -74 -22c-8 0 -12 4 -12 12\nc0 5.33333 5.66667 10.3333 17 15c4 1.33333 15.8333 4.83333 35.5 10.5c19.6667 5.66667 33.5 9.83333 41.5 12.5c17.3333 70.6667 26 107.667 26 111c0 4 -0.666667 7 -2 9s-5.83333 3.83333 -13.5 5.5s-19.1667 2.5 -34.5 2.5c-16 0 -24 3.66667 -24 11\nc0 12.6667 6.33333 19.6667 19 21c80 6.66667 120.667 10 122 10c9.33333 0 14 -4 14 -12l-34 -135l220 69c7.33333 2 12 3 14 3c8 0 12 -4 12 -12c0 -6 -6.33333 -11 -19 -15z"
            },
            "∊": {
                x: 629,
                d: "M385 174h-162c-11.3333 0 -19.1667 0.666667 -23.5 2s-6.5 5.33333 -6.5 12c0 11.3333 11.3333 17 34 17h166c7.33333 31.3333 11 59.3333 11 84c0 47.3333 -11.1667 81 -33.5 101s-47.1667 30 -74.5 30c-32.6667 0 -68.6667 -13 -108 -39\nc-3.33333 -2.66667 -6.66667 -4 -10 -4c-6.66667 0 -10 4.66667 -10 14c0 4 6.16667 10 18.5 18s29.1667 15.5 50.5 22.5c21.3333 7 41.6667 10.5 61 10.5c53.3333 0 96.8333 -17.6667 130.5 -53s50.5 -80.6667 50.5 -136c0 -73.3333 -27 -133.833 -81 -181.5\nc-54 -47.6667 -115 -71.5 -183 -71.5h-35c-11.3333 0 -19.1667 0.666667 -23.5 2c-4.33333 1.33333 -6.5 5.33333 -6.5 12c0 7.33333 2.5 12 7.5 14s13.5 3 25.5 3h30c45.3333 0 82.3333 13.1667 111 39.5c28.6667 26.3333 49 60.8333 61 103.5z"
            },
            " ": {
                x: 965,
                d: "M815 652v-617c0 -16 -1.83333 -25.8333 -5.5 -29.5c-3.66667 -3.66667 -13.8333 -5.5 -30.5 -5.5h-593c-16.6667 0 -26.8333 2 -30.5 6s-5.5 14 -5.5 30v616c0 16 2 25.8333 6 29.5s13.6667 5.5 29 5.5h595c16 0 25.8333 -2 29.5 -6s5.5 -13.6667 5.5 -29zM190 647v-607\nh585v607h-585zM536 344c0 -14.6667 -5.16667 -27.1667 -15.5 -37.5c-10.3333 -10.3333 -22.8333 -15.5 -37.5 -15.5s-27.1667 5.16667 -37.5 15.5s-15.5 22.8333 -15.5 37.5s5.16667 27.1667 15.5 37.5s22.8333 15.5 37.5 15.5s27.1667 -5.16667 37.5 -15.5\nc10.3333 -10.3333 15.5 -22.8333 15.5 -37.5z"
            },
            "⊞": {
                x: 965,
                d: "M815 652v-617c0 -16 -1.83333 -25.8333 -5.5 -29.5c-3.66667 -3.66667 -13.8333 -5.5 -30.5 -5.5h-593c-16.6667 0 -26.8333 2 -30.5 6s-5.5 14 -5.5 30v616c0 16 2 25.8333 6 29.5s13.6667 5.5 29 5.5h595c16 0 25.8333 -2 29.5 -6s5.5 -13.6667 5.5 -29zM190 364h273\nv283h-273v-283zM775 647h-272v-283h272v283zM190 40h273v284h-273v-284zM775 324h-272v-284h272v284z"
            },
            "⊠": {
                x: 965,
                d: "M815 652v-617c0 -16 -2 -25.8333 -6 -29.5c-4 -3.66667 -13.6667 -5.5 -29 -5.5h-594c-16.6667 0 -26.8333 2 -30.5 6s-5.5 14 -5.5 30v616c0 16 2 25.8333 6 29.5s13.6667 5.5 29 5.5h595c16 0 25.8333 -2 29.5 -6s5.5 -13.6667 5.5 -29zM217 647l266 -274l265 274h-531\nzM190 70l264 273l-264 274v-547zM775 617l-264 -273l264 -274v547zM748 40l-266 274l-265 -274h531z"
            },
            "□": {
                x: 965,
                d: "M815 652v-617c0 -16 -1.83333 -25.8333 -5.5 -29.5c-3.66667 -3.66667 -13.8333 -5.5 -30.5 -5.5h-593c-16.6667 0 -26.8333 2 -30.5 6s-5.5 14 -5.5 30v616c0 16 2 25.8333 6 29.5s13.6667 5.5 29 5.5h595c16 0 25.8333 -2 29.5 -6s5.5 -13.6667 5.5 -29zM190 647v-607\nh585v607h-585z"
            },
            "■": {
                x: 965,
                d: "M815 652v-617c0 -16 -1.83333 -25.8333 -5.5 -29.5c-3.66667 -3.66667 -13.8333 -5.5 -30.5 -5.5h-593c-16.6667 0 -26.8333 2 -30.5 6s-5.5 14 -5.5 30v616c0 16 2 25.8333 6 29.5s13.6667 5.5 29 5.5h595c16 0 25.8333 -2 29.5 -6s5.5 -13.6667 5.5 -29z"
            },
            "▪": {
                x: 465,
                d: "M315 152v-117c0 -16 -2 -25.8333 -6 -29.5c-4 -3.66667 -13.6667 -5.5 -29 -5.5h-94c-16.6667 0 -26.8333 2 -30.5 6s-5.5 14 -5.5 30v116c0 16 2 25.8333 6 29.5s13.6667 5.5 29 5.5h95c16 0 25.8333 -2 29.5 -6s5.5 -13.6667 5.5 -29z"
            },
            "♦": {
                x: 854,
                d: "M695 272l-246 -388c-7.33333 -11.3333 -14.6667 -17 -22 -17s-14.6667 5.66667 -22 17l-248 390l-1 3c-1.33333 2 -2.66667 4.33333 -4 7s-2 5 -2 7c0 4.66667 3 11.3333 9 20l246 388c7.33333 11.3333 14.6667 17 22 17s14.6667 -5.66667 22 -17l248 -390l1 -3\nc1.33333 -2 2.66667 -4.33333 4 -7s2 -5 2 -7c0 -4.66667 -3 -11.3333 -9 -20zM194 291l232 -366h2l232 367l-233 367z"
            },
            "◆": {
                x: 854,
                d: "M695 272l-246 -388c-7.33333 -11.3333 -14.6667 -17 -22 -17s-14.6667 5.66667 -22 17l-248 390l-1 3c-1.33333 2 -2.66667 4.33333 -4 7s-2 5 -2 7c0 4.66667 3 11.3333 9 20l246 388c7.33333 11.3333 14.6667 17 22 17s14.6667 -5.66667 22 -17l248 -390l1 -3\nc1.33333 -2 2.66667 -4.33333 4 -7s2 -5 2 -7c0 -4.66667 -3 -11.3333 -9 -20z"
            },
            "↻": {
                x: 965,
                d: "M400 525l-5 20c-66.6667 -20 -120 -57.5 -160 -112.5s-60 -115.833 -60 -182.5c0 -84.6667 30 -157.167 90 -217.5c60 -60.3333 132.667 -90.5 218 -90.5c84 0 156.167 30 216.5 90s90.5 132.667 90.5 218c0 20 -2.33333 40.6667 -7 62s-12.5 45 -23.5 71\ns-28.3333 51.5 -52 76.5s-52.1667 46.8333 -85.5 65.5c-8.66667 4.66667 -13 9.33333 -13 14c0 8 4 12 12 12c4.66667 0 13.6667 -3.66667 27 -11s29.6667 -19.3333 49 -36c19.3333 -16.6667 37.6667 -36.3333 55 -59s32.1667 -51.1667 44.5 -85.5\ns18.5 -70.8333 18.5 -109.5c0 -91.3333 -32.5 -169.667 -97.5 -235c-65 -65.3333 -143.5 -98 -235.5 -98c-90.6667 0 -168.667 32.5 -234 97.5c-65.3333 65 -98 143.5 -98 235.5c0 66.6667 19.5 129.5 58.5 188.5s96.1667 101.833 171.5 128.5\nc-46.6667 23.3333 -83 50 -109 80c2 0.666667 11.6667 3.33333 29 8c16.6667 -18.6667 35.6667 -34.1667 57 -46.5s37.5 -20.3333 48.5 -24s18.1667 -5.5 21.5 -5.5c0.666667 0 3.83333 0.333333 9.5 1s12.1667 1.33333 19.5 2s13.3333 1 18 1c14 0 21 -4.33333 21 -13\nc0 -8 -7 -12 -21 -12c-8.66667 0 -20.6667 -8 -36 -24c-34.6667 -38.6667 -56.3333 -82.6667 -65 -132l-30 -9c8 47.3333 27 91.3333 57 132z"
            },
            "↺": {
                x: 965,
                d: "M622 393l-30 9c-10 54.6667 -34.3333 101 -73 139c-8 8 -13.3333 12.6667 -16 14s-7.33333 2.33333 -14 3c-12.6667 0 -19 4 -19 12c0 8.66667 7 13 21 13c4.66667 0 10.6667 -0.333333 18 -1c7.33333 -0.666667 13.8333 -1.33333 19.5 -2s8.83333 -1 9.5 -1\nc3.33333 0 10.3333 1.83333 21 5.5s26.6667 11.6667 48 24s40.6667 27.8333 58 46.5c17.3333 -4.66667 27 -7.33333 29 -8c-26 -30 -62.3333 -56.6667 -109 -80c75.3333 -26.6667 132.5 -69.5 171.5 -128.5s58.5 -121.833 58.5 -188.5c0 -91.3333 -32.5 -169.667 -97.5 -235\nc-65 -65.3333 -143.5 -98 -235.5 -98c-90.6667 0 -168.667 32.5 -234 97.5c-65.3333 65 -98 143.5 -98 235.5c0 38.6667 6.16667 75.3333 18.5 110s27.1667 63.1667 44.5 85.5s35.6667 41.8333 55 58.5c19.3333 16.6667 35.6667 28.6667 49 36s22.3333 11 27 11\nc8 0 12 -4 12 -12c0 -5.33333 -4.66667 -10.3333 -14 -15c-32.6667 -18 -60.6667 -39.3333 -84 -64c-23.3333 -24.6667 -40.6667 -49.8333 -52 -75.5s-19.3333 -49.3333 -24 -71s-7 -42.8333 -7 -63.5c0 -84.6667 30 -157.167 90 -217.5\nc60 -60.3333 132.667 -90.5 218 -90.5c84 0 156.167 30 216.5 90s90.5 132.667 90.5 218c0 66.6667 -20 127.5 -60 182.5s-93.3333 92.5 -160 112.5l-5 -20c30 -40 49 -84 57 -132z"
            },
            "⇋": {
                x: 1187,
                d: "M1037 327h-852c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s1.83333 10.6667 5.5 14s7.5 5.16667 11.5 5.5s10 0.5 18 0.5h766c-45.3333 40 -77.3333 89 -96 147h31c14.6667 -40 35.6667 -74.1667 63 -102.5s56.6667 -49.8333 88 -64.5v-20z\nM1002 133h-766c45.3333 -40 77.3333 -89 96 -147h-31c-14.6667 40 -35.6667 74.1667 -63 102.5c-27.3333 28.3333 -56.6667 49.8333 -88 64.5v20h852c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-1.83333 -10.6667 -5.5 -14s-7.5 -5.16667 -11.5 -5.5\ns-10 -0.5 -18 -0.5z"
            },
            "⇌": {
                x: 1187,
                d: "M1002 327h-852v20c31.3333 15.3333 60.6667 37 88 65c27.3333 28 48.3333 62 63 102h31c-18.6667 -58 -50.6667 -107 -96 -147h766c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-1.83333 -10.6667 -5.5 -14s-7.5 -5.16667 -11.5 -5.5\ns-10 -0.5 -18 -0.5zM951 133h-766c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s1.83333 10.6667 5.5 14s7.5 5.16667 11.5 5.5s10 0.5 18 0.5h852v-20c-31.3333 -15.3333 -60.6667 -37 -88 -65s-48.3333 -62 -63 -102h-31\nc18.6667 58 50.6667 107 96 147z"
            },
            "⊟": {
                x: 965,
                d: "M815 652v-617c0 -16 -1.83333 -25.8333 -5.5 -29.5c-3.66667 -3.66667 -13.8333 -5.5 -30.5 -5.5h-593c-16.6667 0 -26.8333 2 -30.5 6s-5.5 14 -5.5 30v616c0 16 2 25.8333 6 29.5s13.6667 5.5 29 5.5h595c16 0 25.8333 -2 29.5 -6s5.5 -13.6667 5.5 -29zM190 364h585\nv283h-585v-283zM190 40h585v284h-585v-284z"
            },
            "⊩": {
                x: 909,
                d: "M190 659v-624c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v622c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17zM384 327v-292c0 -7.33333 -0.166667 -13 -0.5 -17\ns-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v622c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-292h340c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14\ns-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-340z"
            },
            "⊪": {
                x: 1076,
                d: "M190 659v-624c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v622c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17zM552 327v-292c0 -7.33333 -0.166667 -13 -0.5 -17\ns-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v622c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-292h339c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14\ns-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-339zM371 659v-624c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v622c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17z"
            },
            "⊨": {
                x: 798,
                d: "M613 230h-423v-195c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v622c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-195h423c7.33333 0 13 -0.166667 17 -0.5\ns8 -2.16667 12 -5.5s6 -8 6 -14c0 -13.3333 -12 -20 -36 -20h-422v-154h422c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "↠": {
                x: 1186,
                d: "M820 270h136c-44.6667 40 -78.3333 89 -101 147h31c25.3333 -70.6667 75.3333 -126.333 150 -167c-73.3333 -38.6667 -123.333 -94.3333 -150 -167h-31c22.6667 58 56.3333 107 101 147h-136c-55.3333 -38 -94 -87 -116 -147h-31c21.3333 58.6667 55 107.667 101 147\nh-589c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s1.83333 10.6667 5.5 14s7.5 5.16667 11.5 5.5s10 0.5 18 0.5h589c-6.66667 5.33333 -14.6667 12.6667 -24 22s-22.1667 26 -38.5 50s-29.1667 49 -38.5 75h31c23.3333 -62 62 -111 116 -147z"
            },
            "↞": {
                x: 1186,
                d: "M1001 230h-589c6.66667 -5.33333 14.6667 -12.6667 24 -22s22.1667 -26 38.5 -50s29.1667 -49 38.5 -75h-31c-23.3333 62 -62 111 -116 147h-136c44.6667 -40 78.3333 -89 101 -147h-31c-25.3333 70.6667 -75.3333 126.333 -150 167\nc73.3333 38.6667 123.333 94.3333 150 167h31c-22.6667 -58 -56.3333 -107 -101 -147h136c55.3333 38 94 87 116 147h31c-21.3333 -58.6667 -55 -107.667 -101 -147h589c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-1.83333 -10.6667 -5.5 -14\ns-7.5 -5.16667 -11.5 -5.5s-10 -0.5 -18 -0.5z"
            },
            "⇔": {
                x: 1187,
                d: "M1004 397h-774c49.3333 -47.3333 83.3333 -96.3333 102 -147c-18.6667 -50.6667 -52.6667 -99.6667 -102 -147h774c8 0 13.8333 -0.166667 17.5 -0.5s7.16667 -2.16667 10.5 -5.5c3.33333 -3.33333 5 -8 5 -14s-2.16667 -10.6667 -6.5 -14s-8.5 -5.16667 -12.5 -5.5\ns-10.3333 -0.5 -19 -0.5h-768c48 -45.3333 81.6667 -94 101 -146h-31c-14.6667 37.3333 -34 69.3333 -58 96c-24 26.6667 -55 50.3333 -93 71c70 32.6667 120.333 88 151 166c-29.3333 74.6667 -79.6667 130.333 -151 167c70.6667 35.3333 121 90.6667 151 166h31\nc-19.3333 -52 -53 -100.667 -101 -146h768c8.66667 0 15 -0.166667 19 -0.5s8.16667 -2.16667 12.5 -5.5s6.5 -8 6.5 -14s-1.66667 -10.6667 -5 -14s-6.83333 -5.16667 -10.5 -5.5s-9.5 -0.5 -17.5 -0.5z"
            },
            "⇒": {
                x: 1187,
                d: "M957 397h-774c-8 0 -13.8333 0.166667 -17.5 0.5s-7.16667 2.16667 -10.5 5.5s-5 8 -5 14s2.16667 10.6667 6.5 14s8.5 5.16667 12.5 5.5s10.3333 0.5 19 0.5h768c-48 45.3333 -81.6667 94 -101 146h31c14.6667 -37.3333 34 -69.3333 58 -96\nc24 -26.6667 55 -50.3333 93 -71c-70 -32.6667 -120.333 -88 -151 -166c29.3333 -74.6667 79.6667 -130.333 151 -167c-70.6667 -35.3333 -121 -90.6667 -151 -166h-31c19.3333 52 53 100.667 101 146h-768c-8.66667 0 -15 0.166667 -19 0.5s-8.16667 2.16667 -12.5 5.5\ns-6.5 8 -6.5 14s1.66667 10.6667 5 14c3.33333 3.33333 6.83333 5.16667 10.5 5.5s9.5 0.5 17.5 0.5h774c-49.3333 47.3333 -83.3333 96.3333 -102 147c18.6667 50.6667 52.6667 99.6667 102 147z"
            },
            "⇈": {
                x: 966,
                d: "M670 613v-770c0 -8.66667 -0.166667 -15 -0.5 -19s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 1.83333 -14 5.5s-5.16667 7.33333 -5.5 11s-0.5 9.5 -0.5 17.5v774c-46.6667 -48.6667 -95.6667 -82.6667 -147 -102c-51.3333 19.3333 -100.333 53.3333 -147 102v-774\nc0 -8 -0.166667 -13.8333 -0.5 -17.5s-2.16667 -7.33333 -5.5 -11s-8 -5.5 -14 -5.5s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 10.3333 -0.5 19v770c-40 -44.6667 -88.6667 -78.3333 -146 -101v31c72.6667 27.3333 128.333 77.6667 167 151\nc16 -34.6667 38.6667 -65 68 -91s62 -46 98 -60c75.3333 28.6667 131 79 167 151c36.6667 -73.3333 92 -123.667 166 -151v-31c-59.3333 24.6667 -108 58.3333 -146 101z"
            },
            "⇊": {
                x: 966,
                d: "M670 657v-770c40 44.6667 88.6667 78.3333 146 101v-31c-74.6667 -28 -130 -78.3333 -166 -151h-1c-16 34.6667 -38.6667 65 -68 91s-62 46 -98 60c-75.3333 -28.6667 -131 -79 -167 -151c-36.6667 73.3333 -92 123.667 -166 151v31\nc59.3333 -24.6667 108 -58.3333 146 -101v770c0 8.66667 0.166667 15 0.5 19s2.16667 8 5.5 12s8 6 14 6s10.6667 -1.83333 14 -5.5s5.16667 -7.33333 5.5 -11s0.5 -9.5 0.5 -17.5v-774c46.6667 48.6667 95.6667 82.6667 147 102\nc51.3333 -19.3333 100.333 -53.3333 147 -102v774c0 8 0.166667 13.8333 0.5 17.5s2.16667 7.33333 5.5 11s8 5.5 14 5.5s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10.3333 0.5 -19z"
            },
            "↾": {
                x: 487,
                d: "M190 608v-767c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 1.83333 -14 5.5s-5.16667 7.5 -5.5 11.5s-0.5 10 -0.5 18v853h20c15.3333 -31.3333 37 -60.6667 65 -88s62 -48.3333 102 -63v-31c-58 18.6667 -107 50.6667 -147 96z"
            },
            "⇂": {
                x: 487,
                d: "M190 659v-767c40 45.3333 89 77.3333 147 96v-31c-40 -14.6667 -74.1667 -35.6667 -102.5 -63c-28.3333 -27.3333 -49.8333 -56.6667 -64.5 -88h-20v853c0 7.33333 0.166667 13 0.5 17s2.16667 8 5.5 12s8 6 14 6s10.6667 -1.83333 14 -5.5s5.16667 -7.5 5.5 -11.5\ns0.5 -10 0.5 -18z"
            },
            "↿": {
                x: 487,
                d: "M337 694v-853c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 1.83333 -14 5.5s-5.16667 7.5 -5.5 11.5s-0.5 10 -0.5 18v767c-40 -45.3333 -89 -77.3333 -147 -96v31c40 14.6667 74.1667 35.6667 102.5 63\nc28.3333 27.3333 49.8333 56.6667 64.5 88h20z"
            },
            "⇃": {
                x: 487,
                d: "M337 659v-853h-20c-15.3333 31.3333 -37 60.6667 -65 88c-28 27.3333 -62 48.3333 -102 63v31c58 -18.6667 107 -50.6667 147 -96v767c0 7.33333 0.166667 13 0.5 17s2.16667 8 5.5 12s8 6 14 6s10.6667 -1.83333 14 -5.5s5.16667 -7.5 5.5 -11.5s0.5 -10 0.5 -18z"
            },
            "↣": {
                x: 1283,
                d: "M297 270h756c-44 40 -77.6667 89 -101 147h31c28 -74.6667 78 -130.333 150 -167c-72.6667 -37.3333 -122.667 -93 -150 -167h-31c22.6667 58.6667 56.3333 107.667 101 147h-756c-52.6667 -35.3333 -91.3333 -84.3333 -116 -147h-31\nc21.3333 59.3333 55.3333 108.333 102 147v40c-47.3333 41.3333 -81.3333 90.3333 -102 147h31c24.6667 -63.3333 63.3333 -112.333 116 -147z"
            },
            "↢": {
                x: 1283,
                d: "M986 230h-756c44 -40 77.6667 -89 101 -147h-31c-28 74.6667 -78 130.333 -150 167c72.6667 37.3333 122.667 93 150 167h31c-22.6667 -58.6667 -56.3333 -107.667 -101 -147h756c52.6667 35.3333 91.3333 84.3333 116 147h31\nc-21.3333 -59.3333 -55.3333 -108.333 -102 -147v-40c47.3333 -41.3333 81.3333 -90.3333 102 -147h-31c-24.6667 63.3333 -63.3333 112.333 -116 147z"
            },
            "⇆": {
                x: 1187,
                d: "M1002 480h-771c44.6667 -40 78.3333 -89 101 -147h-31c-25.3333 70.6667 -75.3333 126.333 -150 167c73.3333 38.6667 123.333 94.3333 150 167h31c-22.6667 -58 -56.3333 -107 -101 -147h771c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14\ns-1.83333 -10.6667 -5.5 -14s-7.5 -5.16667 -11.5 -5.5s-10 -0.5 -18 -0.5zM956 147h-771c-8 0 -14 0.166667 -18 0.5s-7.83333 2.16667 -11.5 5.5s-5.5 8 -5.5 14s2 10.6667 6 14s8 5.16667 12 5.5s10 0.5 18 0.5h770c-45.3333 40 -79 88.6667 -101 146h31\nc14 -37.3333 34.5 -70.3333 61.5 -99c27 -28.6667 56.5 -51 88.5 -67c-74 -40 -124 -95.6667 -150 -167h-31c22.6667 58 56.3333 107 101 147z"
            },
            "⇄": {
                x: 1187,
                d: "M956 480h-771c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s1.83333 10.6667 5.5 14c3.66667 3.33333 7.5 5.16667 11.5 5.5s10 0.5 18 0.5h771c-44 39.3333 -77.6667 88.3333 -101 147h31c25.3333 -70.6667 75.3333 -126.333 150 -167\nc-73.3333 -38.6667 -123.333 -94.3333 -150 -167h-31c22.6667 58 56.3333 107 101 147zM1002 147h-771c46 -41.3333 79.6667 -90.3333 101 -147h-31c-27.3333 72 -77.3333 127.667 -150 167c32.6667 16.6667 62.3333 39.1667 89 67.5c26.6667 28.3333 47 61.1667 61 98.5h31\nc-21.3333 -58 -55 -106.667 -101 -146h770c8 0 14 -0.166667 18 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-1.83333 -10.6667 -5.5 -14s-7.5 -5.16667 -11.5 -5.5s-10 -0.5 -18 -0.5z"
            },
            "↖": {
                x: 686,
                d: "M536 540v-505c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 1.83333 -14 5.5c-3.33333 3.66667 -5.16667 7.5 -5.5 11.5s-0.5 10 -0.5 18v500h-266c45.3333 -39.3333 79 -88 101 -146h-31c-14 37.3333 -34.3333 70.3333 -61 99\nc-26.6667 28.6667 -56.3333 51 -89 67c73.3333 38.6667 123.333 94.3333 150 167h31c-24.6667 -60 -58.3333 -109 -101 -147h271c16 0 25.8333 -1.83333 29.5 -5.5s5.5 -13.5 5.5 -29.5z"
            },
            "↗": {
                x: 686,
                d: "M456 535h-266v-500c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 1.83333 -14 5.5c-3.33333 3.66667 -5.16667 7.5 -5.5 11.5s-0.5 10 -0.5 18v505c0 16 1.83333 25.8333 5.5 29.5s13.5 5.5 29.5 5.5h271\nc-46 41.3333 -79.6667 90.3333 -101 147h31c26.6667 -72.6667 76.6667 -128.333 150 -167c-71.3333 -36.6667 -121.333 -92 -150 -166h-31c21.3333 56.6667 55 105.333 101 146z"
            },
            "⇝": {
                x: 1187,
                d: "M284 342l164 -148c6 5.33333 22.6667 20.3333 50 45c27.3333 24.6667 53.1667 47.8333 77.5 69.5s36.8333 32.8333 37.5 33.5c8.66667 7.33333 15.3333 11 20 11c6 0 15 -5.33333 27 -16c4.66667 -4 29 -26.3333 73 -67h224c-44.6667 40 -78.3333 89 -101 147h31\nc25.3333 -70.6667 75.3333 -126.333 150 -167c-73.3333 -38.6667 -123.333 -94.3333 -150 -167h-31c22.6667 58 56.3333 107 101 147h-216c-15.3333 0 -26.6667 3.33333 -34 10l-74 66l-75 -68l-79 -71c-14.6667 -13.3333 -25 -20 -31 -20s-13.6667 4.66667 -23 14\nc-1.33333 1.33333 -4 3.66667 -8 7s-7.66667 6.5 -11 9.5s-5.33333 4.5 -6 4.5l-137 124c-10 -8.66667 -22.6667 -19.8333 -38 -33.5s-25.3333 -22.5 -30 -26.5c-11.3333 -10.6667 -19.6667 -16 -25 -16s-10 2 -14 6s-6 8.66667 -6 14c0 6 5.33333 14 16 24l68 60\nc13.3333 12.6667 23 19 29 19s13 -3.66667 21 -11z"
            },
            "↭": {
                x: 1574,
                d: "M1344 230h-134c-12.6667 0 -21.3333 1.5 -26 4.5s-14.3333 12.1667 -29 27.5l-42 42l-78 -79c-40 -42.6667 -64.3333 -67.3333 -73 -74c-3.33333 -2.66667 -7.33333 -4 -12 -4c-5.33333 0 -12.6667 4.33333 -22 13c-4.66667 5.33333 -15.8333 16.8333 -33.5 34.5\ns-29.5 29.8333 -35.5 36.5c-20.6667 22 -44.6667 46.3333 -72 73c-26.6667 -26 -50.3333 -50 -71 -72l-40 -40c-2 -2.66667 -7.33333 -8.5 -16 -17.5s-14.3333 -14.8333 -17 -17.5c-8 -6.66667 -14.3333 -10 -19 -10c-5.33333 0 -9.66667 1.33333 -13 4\nc-12.6667 12 -34.3333 34.3333 -65 67c-43.3333 42 -71.6667 70.6667 -85 86c-22.6667 -22 -38.1667 -37.3333 -46.5 -46c-8.33333 -8.66667 -14.5 -15 -18.5 -19c-6.66667 -6 -17.3333 -9 -32 -9h-134c44.6667 -40 78.3333 -89 101 -147h-31\nc-25.3333 70.6667 -75.3333 126.333 -150 167c73.3333 38.6667 123.333 94.3333 150 167h31c-22.6667 -58 -56.3333 -107 -101 -147h141l54 55c13.3333 14 21.6667 22.1667 25 24.5s7 3.5 11 3.5c6 0 13.3333 -4.66667 22 -14l141 -143l150 153l1 1\nc0.666667 0 1.5 0.333333 2.5 1s2.33333 1.16667 4 1.5s3.5 0.5 5.5 0.5c6 0 13.3333 -4.33333 22 -13l142 -144c9.33333 10 36 37.5 80 82.5s67 68.1667 69 69.5c4 3.33333 8.33333 5 13 5c4 0 8 -1.66667 12 -5s15.3333 -14 34 -32l44 -46h141\nc-44 39.3333 -77.6667 88.3333 -101 147h31c27.3333 -72 77.3333 -127.667 150 -167c-72 -36.6667 -122 -92.3333 -150 -167h-31c23.3333 59.3333 57 108.333 101 147z"
            },
            "↫": {
                x: 1206,
                d: "M755 230v-237c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 9.66667 -0.5 17v237h-485c44.6667 -40 78.3333 -89 101 -147h-31c-25.3333 70.6667 -75.3333 126.333 -150 167\nc73.3333 38.6667 123.333 94.3333 150 167h31c-22.6667 -58 -56.3333 -107 -101 -147h485v60c0 84 11.8333 146 35.5 186s68.8333 60 135.5 60c113.333 0 170 -57.3333 170 -172c0 -65.3333 -19 -110.667 -57 -136c-38 -25.3333 -98.6667 -38 -182 -38h-62zM755 270h59\nc78 0 131.167 9.83333 159.5 29.5c28.3333 19.6667 42.5 54.5 42.5 104.5c0 47.3333 -10.3333 81.1667 -31 101.5c-20.6667 20.3333 -53.6667 30.5 -99 30.5c-50 0 -84.3333 -14.5 -103 -43.5s-28 -84.1667 -28 -165.5v-57z"
            },
            "↬": {
                x: 1206,
                d: "M491 230v-237c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v236h-62c-83.3333 0 -144 12.6667 -182 38c-38 25.3333 -57 70.6667 -57 136c0 114.667 56.6667 172 170 172c66.6667 0 111.833 -20 135.5 -60\ns35.5 -102 35.5 -186v-60h485c-44.6667 40 -78.3333 89 -101 147h31c25.3333 -70.6667 75.3333 -126.333 150 -167c-73.3333 -38.6667 -123.333 -94.3333 -150 -167h-31c22.6667 58 56.3333 107 101 147h-485zM392 270h59v57c0 80.6667 -9.5 135.667 -28.5 165\nc-19 29.3333 -53.1667 44 -102.5 44c-45.3333 0 -78.3333 -10.1667 -99 -30.5c-20.6667 -20.3333 -31 -54.1667 -31 -101.5c0 -50 14.1667 -84.8333 42.5 -104.5c28.3333 -19.6667 81.5 -29.5 159.5 -29.5z"
            },
            "⊜": {
                x: 965,
                d: "M592 611c0 -29.3333 -10.6667 -54.8333 -32 -76.5s-47.3333 -32.5 -78 -32.5c-30 0 -55.6667 10.8333 -77 32.5s-32 47.1667 -32 76.5c0 30.6667 10.8333 56.6667 32.5 78s47.5 32 77.5 32c28.6667 0 54 -10.5 76 -31.5s33 -47.1667 33 -78.5zM483 542\nc24.6667 0 42.3333 5.33333 53 16s16 28.3333 16 53s-5 42.5 -15 53.5s-28.3333 16.5 -55 16.5c-27.3333 0 -45.6667 -5.66667 -55 -17s-14 -29 -14 -53c0 -26 5.5 -44 16.5 -54s28.8333 -15 53.5 -15zM186 173h593c8 0 14 -0.166667 18 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14\ns-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-595c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20zM185 367h595c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14\ns-8 -5.16667 -12 -5.5s-10 -0.5 -18 -0.5h-593c-24 0 -36 6.66667 -36 20c0 6 2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5z"
            },
            "≳": {
                x: 965,
                d: "M768 420l-553 -260c-8.66667 -4.66667 -14.6667 -7 -18 -7c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 8.66667 6.33333 16 19 22l525 248l-524 247c-0.666667 0 -1.33333 0.333333 -2 1c-12 6 -18 13 -18 21c0 5.33333 2 10 6 14s8.66667 6 14 6\nc4 0 10.6667 -2.33333 20 -7l551 -260c13.3333 -6.66667 20 -14.3333 20 -23s-6.66667 -16 -20 -22zM815 -26c0 -50.6667 -15.3333 -96.6667 -46 -138c-30.6667 -41.3333 -70.6667 -62 -120 -62c-22 0 -44.1667 5.16667 -66.5 15.5s-40.3333 20.8333 -54 31.5\ns-32.5 26.6667 -56.5 48c-20 18 -35.8333 31.5 -47.5 40.5s-27.6667 18.1667 -48 27.5c-20.3333 9.33333 -40.5 14 -60.5 14s-39.5 -4.5 -58.5 -13.5s-36.6667 -25.5 -53 -49.5s-25.1667 -54 -26.5 -90c0 -4 -1.16667 -8.83333 -3.5 -14.5s-5.83333 -8.5 -10.5 -8.5\nc-9.33333 0 -14 10.6667 -14 32c0 50.6667 15.3333 96.6667 46 138c30.6667 41.3333 70.6667 62 120 62c22 0 44.1667 -5.16667 66.5 -15.5c22.3333 -10.3333 40.3333 -20.8333 54 -31.5c13.6667 -10.6667 32.5 -26.6667 56.5 -48c20 -18 35.8333 -31.5 47.5 -40.5\ns27.6667 -18.1667 48 -27.5s40.5 -14 60.5 -14c36.6667 0 68.3333 13.8333 95 41.5c26.6667 27.6667 41 62.5 43 104.5c0 20 4.66667 30 14 30s14 -10.6667 14 -32z"
            },
            "⊸": {
                x: 1298,
                d: "M832 230h-647c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s1.83333 10.6667 5.5 14s7.5 5.16667 11.5 5.5s10 0.5 18 0.5h647c5.33333 40.6667 23.1667 74 53.5 100s65.1667 39 104.5 39c43.3333 0 80.5 -15.3333 111.5 -46s46.5 -68.3333 46.5 -113\nc0 -44 -15.3333 -81.5 -46 -112.5s-68.3333 -46.5 -113 -46.5c-38.6667 0 -73 12.6667 -103 38c-30 25.3333 -48 59 -54 101zM990 131c32 0 59.6667 11.5 83 34.5s35 51.1667 35 84.5c0 32.6667 -11.5 60.6667 -34.5 84s-51.1667 35 -84.5 35\nc-32 0 -59.6667 -11.5 -83 -34.5s-35 -51.1667 -35 -84.5c0 -32.6667 11.5 -60.6667 34.5 -84s51.1667 -35 84.5 -35z"
            },
            "∴": {
                x: 906,
                d: "M506 411c0 -14.6667 -5.33333 -27.1667 -16 -37.5s-23 -15.5 -37 -15.5c-14.6667 0 -27.1667 5.16667 -37.5 15.5s-15.5 22.8333 -15.5 37.5s5.16667 27.1667 15.5 37.5s22.8333 15.5 37.5 15.5s27.1667 -5.16667 37.5 -15.5s15.5 -22.8333 15.5 -37.5zM756 -22\nc0 -14.6667 -5.16667 -27.1667 -15.5 -37.5c-10.3333 -10.3333 -22.8333 -15.5 -37.5 -15.5s-27.1667 5.16667 -37.5 15.5c-10.3333 10.3333 -15.5 22.8333 -15.5 37.5c0 14.6667 5.16667 27.1667 15.5 37.5c10.3333 10.3333 22.8333 15.5 37.5 15.5\ns27.1667 -5.16667 37.5 -15.5c10.3333 -10.3333 15.5 -22.8333 15.5 -37.5zM256 -22c0 -14.6667 -5.16667 -27.1667 -15.5 -37.5c-10.3333 -10.3333 -22.8333 -15.5 -37.5 -15.5s-27.1667 5.16667 -37.5 15.5c-10.3333 10.3333 -15.5 22.8333 -15.5 37.5\nc0 14.6667 5.16667 27.1667 15.5 37.5c10.3333 10.3333 22.8333 15.5 37.5 15.5s27.1667 -5.16667 37.5 -15.5c10.3333 -10.3333 15.5 -22.8333 15.5 -37.5z"
            },
            "∵": {
                x: 906,
                d: "M256 411c0 -14.6667 -5.33333 -27.1667 -16 -37.5s-23 -15.5 -37 -15.5c-14.6667 0 -27.1667 5.16667 -37.5 15.5s-15.5 22.8333 -15.5 37.5s5.16667 27.1667 15.5 37.5s22.8333 15.5 37.5 15.5s27.1667 -5.16667 37.5 -15.5s15.5 -22.8333 15.5 -37.5zM506 -22\nc0 -14.6667 -5.16667 -27.1667 -15.5 -37.5c-10.3333 -10.3333 -22.8333 -15.5 -37.5 -15.5s-27.1667 5.16667 -37.5 15.5c-10.3333 10.3333 -15.5 22.8333 -15.5 37.5c0 14.6667 5.16667 27.1667 15.5 37.5c10.3333 10.3333 22.8333 15.5 37.5 15.5\ns27.1667 -5.16667 37.5 -15.5c10.3333 -10.3333 15.5 -22.8333 15.5 -37.5zM756 411c0 -14.6667 -5.33333 -27.1667 -16 -37.5s-23 -15.5 -37 -15.5c-14.6667 0 -27.1667 5.16667 -37.5 15.5s-15.5 22.8333 -15.5 37.5s5.16667 27.1667 15.5 37.5s22.8333 15.5 37.5 15.5\ns27.1667 -5.16667 37.5 -15.5s15.5 -22.8333 15.5 -37.5z"
            },
            "≑": {
                x: 965,
                d: "M537 541c0 -16 -5.5 -29.1667 -16.5 -39.5s-23.8333 -15.5 -38.5 -15.5c-13.3333 0 -25.6667 5 -37 15s-17 23.3333 -17 40c0 16 5.5 29.1667 16.5 39.5s23.8333 15.5 38.5 15.5c13.3333 0 25.6667 -5 37 -15c11.3333 -10 17 -23.3333 17 -40zM537 -41\nc0 -16.6667 -5.66667 -30 -17 -40c-11.3333 -10 -23.6667 -15 -37 -15c-14.6667 0 -27.5 5.16667 -38.5 15.5s-16.5 23.5 -16.5 39.5s5.5 29.1667 16.5 39.5c11 10.3333 23.8333 15.5 38.5 15.5c13.3333 0 25.6667 -5 37 -15c11.3333 -10 17 -23.3333 17 -40zM186 173h593\nc8 0 14 -0.166667 18 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-595c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20zM185 367h595c7.33333 0 13 -0.166667 17 -0.5\ns8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-10 -0.5 -18 -0.5h-593c-24 0 -36 6.66667 -36 20c0 6 2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5z"
            },
            "≜": {
                x: 966,
                d: "M505 842l192 -334c0 -12 -2.5 -19.3333 -7.5 -22s-14.5 -4 -28.5 -4h-356c-8 0 -14 0.166667 -18 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 4.66667 2.66667 11.6667 8 21l184 319c6.66667 11.3333 14 17 22 17s15.3333 -5.66667 22 -17zM483 799l-160 -277h320zM186 173\nh594c8 0 14 -0.166667 18 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-596c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20zM185 367h596\nc7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-10 -0.5 -18 -0.5h-594c-24 0 -36 6.66667 -36 20c0 6 2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5z"
            },
            "≲": {
                x: 965,
                d: "M769 690l-525 -248l524 -247c13.3333 -6 20 -13.3333 20 -22c0 -5.33333 -2 -10 -6 -14s-8.66667 -6 -14 -6c-3.33333 0 -9.33333 2.33333 -18 7l-553 260c-13.3333 6 -20 13.3333 -20 22c0 9.33333 6.66667 17 20 23l553 261c8 4 14 6 18 6c5.33333 0 10 -2 14 -6\ns6 -8.66667 6 -14c0 -8 -6.33333 -15.3333 -19 -22zM815 -26c0 -50.6667 -15.3333 -96.6667 -46 -138c-30.6667 -41.3333 -70.6667 -62 -120 -62c-22 0 -44.1667 5.16667 -66.5 15.5s-40.3333 20.8333 -54 31.5s-32.5 26.6667 -56.5 48c-20 18 -35.8333 31.5 -47.5 40.5\ns-27.6667 18.1667 -48 27.5c-20.3333 9.33333 -40.5 14 -60.5 14s-39.5 -4.5 -58.5 -13.5s-36.6667 -25.5 -53 -49.5s-25.1667 -54 -26.5 -90c0 -4 -1.16667 -8.83333 -3.5 -14.5s-5.83333 -8.5 -10.5 -8.5c-9.33333 0 -14 10.6667 -14 32c0 50.6667 15.3333 96.6667 46 138\nc30.6667 41.3333 70.6667 62 120 62c22 0 44.1667 -5.16667 66.5 -15.5c22.3333 -10.3333 40.3333 -20.8333 54 -31.5c13.6667 -10.6667 32.5 -26.6667 56.5 -48c20 -18 35.8333 -31.5 47.5 -40.5s27.6667 -18.1667 48 -27.5s40.5 -14 60.5 -14\nc36.6667 0 68.3333 13.8333 95 41.5c26.6667 27.6667 41 62.5 43 104.5c0 20 4.66667 30 14 30s14 -10.6667 14 -32z"
            },
            "⋝": {
                x: null,
                d: "M723 333l-553 261c-0.666667 0 -1.33333 0.333333 -2 1c-12 6 -18 13 -18 21c0 5.33333 2 10 6 14s8.66667 6 14 6c4 0 10.6667 -2.33333 20 -7l551 -261c13.3333 -6 20 -13 20 -21c0 -6.66667 -2.16667 -11.6667 -6.5 -15s-8.83333 -5 -13.5 -5\nc-3.33333 0 -9.33333 2 -18 6zM741 130l-553 -260c-8.66667 -4.66667 -14.6667 -7 -18 -7c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 8.66667 6.33333 16 19 22l525 248l-524 247c-0.666667 0 -1.33333 0.333333 -2 1c-12 6 -18 13 -18 21c0 6 2.16667 10.8333 6.5 14.5\ns8.83333 5.5 13.5 5.5c4 0 10.6667 -2.33333 20 -7l551 -260c13.3333 -6 20 -13.6667 20 -23c0 -8.66667 -6.66667 -16 -20 -22z"
            },
            "≦": {
                x: null,
                d: "M742 711l-525 -248l524 -247c13.3333 -6 20 -13.3333 20 -22c0 -5.33333 -2 -10 -6 -14s-8.66667 -6 -14 -6c-3.33333 0 -9.33333 2.33333 -18 7l-553 260c-13.3333 6 -20 13.3333 -20 22c0 9.33333 6.66667 17 20 23l553 261c8 4 14 6 18 6c5.33333 0 10 -2 14 -6\ns6 -8.66667 6 -14c0 -8.66667 -6.33333 -16 -19 -22zM726 -174h-541c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20h539c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5zM726 20\nh-541c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20h539c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "≤": {
                x: null,
                d: "M742 594l-525 -248l524 -247c13.3333 -6 20 -13.3333 20 -22c0 -5.33333 -2 -10 -6 -14s-8.66667 -6 -14 -6c-3.33333 0 -9.33333 2.33333 -18 7l-553 260c-13.3333 6 -20 13.3333 -20 22c0 9.33333 6.66667 17 20 23l553 261c8 4 14 6 18 6c5.33333 0 10 -2 14 -6\ns6 -8.66667 6 -14c0 -8 -6.33333 -15.3333 -19 -22zM723 -130l-553 260c-13.3333 6 -20 13.3333 -20 22c0 5.33333 1.83333 10 5.5 14s8.5 6 14.5 6c4 0 10.3333 -2.33333 19 -7l552 -260c13.3333 -6 20 -13.3333 20 -22c0 -5.33333 -2 -10 -6 -14s-8.66667 -6 -14 -6\nc-3.33333 0 -9.33333 2.33333 -18 7z"
            },
            "≶": {
                x: 990,
                d: "M816 639l-589 -218l589 -217c6.66667 -2.66667 11.1667 -4.5 13.5 -5.5s4.66667 -3 7 -6s3.5 -6.5 3.5 -10.5c0 -4.66667 -2 -9.16667 -6 -13.5s-9 -6.5 -15 -6.5c-2 0 -8 2 -18 6l-631 232c-13.3333 4.66667 -20 12 -20 22c0 9.33333 7 16.6667 21 22l630 231\nc10 4 16 6 18 6c6 0 11 -2.16667 15 -6.5s6 -8.83333 6 -13.5c0 -4 -1.16667 -7.5 -3.5 -10.5s-4.66667 -5 -7 -6s-6.83333 -2.83333 -13.5 -5.5zM762 9l-592 218c-13.3333 4.66667 -20 11.6667 -20 21c0 13.3333 6.33333 20 19 20c3.33333 0 10 -2 20 -6l627 -231\nc6.66667 -2.66667 11.1667 -4.5 13.5 -5.5s4.66667 -3 7 -6s3.5 -6.5 3.5 -10.5s-1.16667 -7.5 -3.5 -10.5s-4.66667 -5 -7 -6s-6.83333 -2.83333 -13.5 -5.5l-632 -233c-7.33333 -2.66667 -12.3333 -4 -15 -4c-5.33333 0 -9.83333 1.83333 -13.5 5.5s-5.5 8.5 -5.5 14.5\nc0 9.33333 7 16.6667 21 22z"
            },
            "‵": {
                x: 533,
                d: "M260 511l119 -434c0 -0.666667 0.666667 -3 2 -7l2 -7c0 -4.66667 -4 -8.66667 -12 -12c-0.666667 -0.666667 -1.33333 -1 -2 -1c-10.6667 -3.33333 -17.3333 -5 -20 -5s-4.66667 0.833333 -6 2.5s-3.66667 6.16667 -7 13.5l-179 417c-4.66667 10.6667 -7 20.3333 -7 29\nc0 14.6667 5.66667 27 17 37s24.3333 15 39 15c27.3333 0 45.3333 -16 54 -48z"
            },
            "≓": {
                x: 1031,
                d: "M881 541c0 -14.6667 -5.16667 -27.1667 -15.5 -37.5c-10.3333 -10.3333 -22.8333 -15.5 -37.5 -15.5s-27.1667 5.16667 -37.5 15.5c-10.3333 10.3333 -15.5 22.8333 -15.5 37.5s5.16667 27.1667 15.5 37.5s22.8333 15.5 37.5 15.5s27.1667 -5.16667 37.5 -15.5\ns15.5 -22.8333 15.5 -37.5zM256 -41c0 -14.6667 -5.16667 -27.1667 -15.5 -37.5s-22.8333 -15.5 -37.5 -15.5s-27.1667 5.16667 -37.5 15.5s-15.5 22.8333 -15.5 37.5c0 14.6667 5.16667 27.1667 15.5 37.5c10.3333 10.3333 22.8333 15.5 37.5 15.5\ns27.1667 -5.16667 37.5 -15.5c10.3333 -10.3333 15.5 -22.8333 15.5 -37.5zM813 133h-595c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20h593c8 0 14 -0.166667 18 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14\ns-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5zM812 327h-593c-24 0 -36 6.66667 -36 20c0 6 2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h595c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5\ns-10 -0.5 -18 -0.5z"
            },
            "≒": {
                x: 1031,
                d: "M256 541c0 -14.6667 -5.16667 -27.1667 -15.5 -37.5c-10.3333 -10.3333 -22.8333 -15.5 -37.5 -15.5s-27.1667 5.16667 -37.5 15.5c-10.3333 10.3333 -15.5 22.8333 -15.5 37.5s5.16667 27.1667 15.5 37.5s22.8333 15.5 37.5 15.5s27.1667 -5.16667 37.5 -15.5\ns15.5 -22.8333 15.5 -37.5zM881 -41c0 -14.6667 -5.16667 -27.1667 -15.5 -37.5s-22.8333 -15.5 -37.5 -15.5s-27.1667 5.16667 -37.5 15.5s-15.5 22.8333 -15.5 37.5c0 14.6667 5.16667 27.1667 15.5 37.5c10.3333 10.3333 22.8333 15.5 37.5 15.5\ns27.1667 -5.16667 37.5 -15.5c10.3333 -10.3333 15.5 -22.8333 15.5 -37.5zM219 173h593c8 0 14 -0.166667 18 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-595c-7.33333 0 -13 0.166667 -17 0.5\ns-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20zM218 367h595c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-10 -0.5 -18 -0.5h-593c-24 0 -36 6.66667 -36 20c0 6 2 10.6667 6 14s8 5.16667 12 5.5\ns9.66667 0.5 17 0.5z"
            },
            "≧": {
                x: null,
                d: "M741 441l-553 -260c-8.66667 -4.66667 -14.6667 -7 -18 -7c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 8.66667 6.33333 16 19 22l525 248l-524 247c-0.666667 0 -1.33333 0.333333 -2 1c-12 6 -18 13 -18 21c0 5.33333 2 10 6 14s8.66667 6 14 6\nc4 0 10.6667 -2.33333 20 -7l551 -260c13.3333 -6.66667 20 -14.3333 20 -23s-6.66667 -16 -20 -22zM726 -174h-541c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20h539c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14\ns-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5zM726 20h-541c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20h539c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "≥": {
                x: null,
                d: "M741 324l-553 -260c-8.66667 -4.66667 -14.6667 -7 -18 -7c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 8.66667 6.33333 16 19 22l525 248l-524 247c-0.666667 0 -1.33333 0.333333 -2 1c-12 6 -18 13 -18 21c0 5.33333 2 10 6 14s8.66667 6 14 6\nc4 0 10.6667 -2.33333 20 -7l551 -261c13.3333 -6 20 -13.3333 20 -22s-6.66667 -16 -20 -22zM741 130l-553 -260c-8.66667 -4.66667 -14.6667 -7 -18 -7c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 8.66667 6.33333 16 19 22l566 267c17.3333 0 26 -6.66667 26 -20\nc0 -8.66667 -6.66667 -16 -20 -22z"
            },
            "≷": {
                x: null,
                d: "M739 399l-550 -231c-9.33333 -4 -15.6667 -6 -19 -6c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 4 1.16667 7.5 3.5 10.5s4.66667 5.16667 7 6.5s6.5 3.33333 12.5 6l516 217l-518 217c-14 6 -21 13.3333 -21 22c0 5.33333 2 10 6 14s8.66667 6 14 6\nc0.666667 0 6.66667 -2 18 -6l551 -231c14.6667 -6 22 -13.6667 22 -23c0 -8 -7.33333 -15.3333 -22 -22zM728 -246l-557 233c-14 6 -21 13.3333 -21 22c0 6 1.66667 10.3333 5 13s9.66667 6 19 10l547 230c9.33333 4 16 6 20 6c5.33333 0 10 -2 14 -6s6 -8.66667 6 -14\nc0 -8 -7.33333 -15.3333 -22 -22l-517 -217l517 -217c14.6667 -6 22 -13.6667 22 -23c0 -4.66667 -2 -9 -6 -13s-8.66667 -6 -14 -6c-2 0 -6.33333 1.33333 -13 4z"
            },
            "⊏": {
                x: null,
                d: "M726 499h-536v-499h535c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-541c-16 0 -25.8333 2 -29.5 6s-5.5 13.6667 -5.5 29v508c0 16.6667 2 26.8333 6 30.5s14 5.5 30 5.5h540\nc7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "⊐": {
                x: 951,
                d: "M801 504v-509c0 -16 -2 -25.8333 -6 -29.5c-4 -3.66667 -13.6667 -5.5 -29 -5.5h-581c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14c0 13.3333 12 20 36 20h575v499h-576c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14\ns2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h581c16 0 25.8333 -2 29.5 -6s5.5 -13.6667 5.5 -29z"
            },
            "⊲": {
                x: null,
                d: "M741 227l-553 -260c-8.66667 -4.66667 -14.6667 -7 -18 -7c-6 0 -10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 9.66667 -0.5 17v508c0 8 0.166667 14 0.5 18s2.16667 8 5.5 12s8.33333 6 15 6c2.66667 0 8.33333 -2.33333 17 -7l553 -260c13.3333 -6 20 -13.6667 20 -23\nc0 -8.66667 -6.66667 -16 -20 -22zM694 250l-504 238v-477z"
            },
            "⊳": {
                x: null,
                d: "M170 272l553 261c8 4 14 6 18 6c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-509c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-3.33333 0 -9.33333 2.33333 -18 7l-553 260c-13.3333 6 -20 13.3333 -20 22\nc0 9.33333 6.66667 17 20 23zM217 249l504 -238v477z"
            },
            "⊵": {
                x: null,
                d: "M741 324l-553 -260c-8.66667 -4.66667 -14.6667 -7 -18 -7c-6 0 -10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 9.66667 -0.5 17v508c0 8 0.166667 14 0.5 18s2.16667 8 5.5 12s8.33333 6 15 6c2.66667 0 8.33333 -2.33333 17 -7l553 -260c13.3333 -6 20 -13.6667 20 -23\nc0 -8.66667 -6.66667 -16 -20 -22zM694 347l-504 238v-477zM726 -137h-541c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14c0 13.3333 12 20 36 20h539c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5\ns-9.66667 -0.5 -17 -0.5z"
            },
            "⊴": {
                x: null,
                d: "M170 369l553 261c8 4 14 6 18 6c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-509c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-3.33333 0 -9.33333 2.33333 -18 7l-553 260c-13.3333 6 -20 13.3333 -20 22\nc0 9.33333 6.66667 17 20 23zM217 346l504 -238v477zM186 -97h539c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-541c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14\nc0 13.3333 12 20 36 20z"
            },
            "≬": {
                x: 651,
                d: "M346 -129c32.6667 -34.6667 72 -65.6667 118 -93c9.33333 -5.33333 14 -10.3333 14 -15c0 -8.66667 -4 -13 -12 -13c-3.33333 0 -11.8333 4 -25.5 12s-31.5 20.3333 -53.5 37s-42.6667 34 -62 52c-18 -18 -38 -35.1667 -60 -51.5s-40 -28.6667 -54 -37\ns-22.6667 -12.5 -26 -12.5c-8 0 -12 4.33333 -12 13c0 4.66667 4 9.33333 12 14c48.6667 29.3333 88.6667 60.6667 120 94c-17.3333 20 -32 38.1667 -44 54.5c-12 16.3333 -28 41.1667 -48 74.5s-35.5 71.5 -46.5 114.5s-16.5 88.1667 -16.5 135.5\nc0 47.3333 5.5 92.5 16.5 135.5s26.5 81.1667 46.5 114.5c20 33.3333 36 58.1667 48 74.5s26.6667 34.5 44 54.5c-32.6667 34.6667 -72 65.6667 -118 93c-9.33333 5.33333 -14 10.3333 -14 15c0 8.66667 4 13 12 13c3.33333 0 11.8333 -4 25.5 -12s31.5 -20.3333 53.5 -37\ns42.6667 -34 62 -52c18 18 38 35.1667 60 51.5s40 28.6667 54 37s22.6667 12.5 26 12.5c8 0 12 -4.33333 12 -13c0 -4.66667 -4 -9.33333 -12 -14c-48.6667 -29.3333 -88.6667 -60.6667 -120 -94c17.3333 -20 32 -38.1667 44 -54.5s28 -41.1667 48 -74.5\nc20 -33.3333 35.5 -71.5 46.5 -114.5s16.5 -88.1667 16.5 -135.5c0 -47.3333 -5.5 -92.5 -16.5 -135.5s-26.5 -81.1667 -46.5 -114.5s-36 -58.1667 -48 -74.5c-12 -16.3333 -26.6667 -34.5 -44 -54.5zM326 -107c19.3333 22 37.3333 46.6667 54 74\nc16.6667 27.3333 33.5 67.3333 50.5 120c17 52.6667 25.5 107 25.5 163c0 44.6667 -5 88 -15 130s-22.8333 78.1667 -38.5 108.5c-15.6667 30.3333 -29.5 54.3333 -41.5 72s-24 33.1667 -36 46.5c-19.3333 -22 -37.3333 -46.6667 -54 -74\nc-16.6667 -27.3333 -33.5 -67.3333 -50.5 -120s-25.5 -107 -25.5 -163c0 -44.6667 5 -88 15 -130s22.8333 -78.1667 38.5 -108.5c15.6667 -30.3333 29.5 -54.3333 41.5 -72c12 -17.6667 24 -33.1667 36 -46.5z"
            },
            "▼": {
                x: 853,
                d: "M697 538l-255 -552c-4 -4 -9 -6 -15 -6c-9.33333 0 -17 6.66667 -23 20l-249 540c-3.33333 6.66667 -5 12 -5 16c0 13.3333 11.6667 20 35 20h483c23.3333 0 35 -6.66667 35 -20c0 -4 -2 -10 -6 -18z"
            },
            "◮": {
                x: null,
                d: "M741 227l-553 -260c-8.66667 -4.66667 -14.6667 -7 -18 -7c-6 0 -10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 9.66667 -0.5 17v508c0 8 0.166667 14 0.5 18s2.16667 8 5.5 12s8.33333 6 15 6c2.66667 0 8.33333 -2.33333 17 -7l553 -260c13.3333 -6 20 -13.6667 20 -23\nc0 -8.66667 -6.66667 -16 -20 -22z"
            },
            "◭": {
                x: null,
                d: "M170 272l553 261c8 4 14 6 18 6c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-509c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-3.33333 0 -9.33333 2.33333 -18 7l-553 260c-13.3333 6 -20 13.3333 -20 22\nc0 9.33333 6.66667 17 20 23z"
            },
            "→": {
                x: 659,
                d: "M374 225h-184c-26.6667 0 -40 8.33333 -40 25c0 16.6667 13.3333 25 40 25h184c-22.6667 22 -42.8333 48.8333 -60.5 80.5s-26.5 52.1667 -26.5 61.5c0 13.3333 11.6667 20 35 20c12.6667 0 21 -1 25 -3s8 -7 12 -15c28 -66.6667 74 -116.667 138 -150\nc8 -4.66667 12 -11 12 -19c0 -7.33333 -5.33333 -14 -16 -20c-1.33333 -0.666667 -2.33333 -1.33333 -3 -2c-60.6667 -33.3333 -105 -83.6667 -133 -151c-4 -9.33333 -15.6667 -14 -35 -14c-23.3333 0 -35 6.66667 -35 20c0 9.33333 8.83333 29.6667 26.5 61\nc17.6667 31.3333 37.8333 58.3333 60.5 81z"
            },
            "←": {
                x: 659,
                d: "M469 225h-184c22.6667 -22 42.8333 -48.8333 60.5 -80.5c17.6667 -31.6667 26.5 -52.1667 26.5 -61.5c0 -13.3333 -11.6667 -20 -35 -20c-12.6667 0 -21 1 -25 3s-8 7 -12 15c-28 66.6667 -74 116.667 -138 150c-8 4.66667 -12 11 -12 19c0 7.33333 5.33333 14 16 20\nc1.33333 0.666667 2.33333 1.33333 3 2c60.6667 33.3333 105 83.6667 133 151c4 9.33333 15.6667 14 35 14c23.3333 0 35 -6.66667 35 -20c0 -9.33333 -8.83333 -29.6667 -26.5 -61s-37.8333 -58.3333 -60.5 -81h184c26.6667 0 40 -8.33333 40 -25\nc0 -16.6667 -13.3333 -25 -40 -25z"
            },
            "△": {
                x: 853,
                d: "M448 556l250 -540c3.33333 -6.66667 5 -12 5 -16c0 -13.3333 -11.6667 -20 -35 -20h-483c-23.3333 0 -35 6.66667 -35 20c0 4 2 10 6 18l248 538c6 13.3333 13.6667 20 23 20c4 0 7.33333 -1 10 -3s4.5 -3.83333 5.5 -5.5s2.83333 -5.5 5.5 -11.5zM426 509l-225 -489h451\nz"
            },
            "▲": {
                x: 853,
                d: "M448 556l250 -540c3.33333 -6.66667 5 -12 5 -16c0 -13.3333 -11.6667 -20 -35 -20h-483c-23.3333 0 -35 6.66667 -35 20c0 4 2 10 6 18l248 538c6 13.3333 13.6667 20 23 20c4 0 7.33333 -1 10 -3s4.5 -3.83333 5.5 -5.5s2.83333 -5.5 5.5 -11.5z"
            },
            "▽": {
                x: 853,
                d: "M697 538l-255 -552c-4 -4 -9 -6 -15 -6c-9.33333 0 -17 6.66667 -23 20l-249 540c-3.33333 6.66667 -5 12 -5 16c0 13.3333 11.6667 20 35 20h483c23.3333 0 35 -6.66667 35 -20c0 -4 -2 -10 -6 -18zM201 536l226 -489l225 489h-451z"
            },
            "≖": {
                x: 965,
                d: "M559 173h220c8 0 14 -0.166667 18 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-595c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20h220\nc-21.3333 21.3333 -32 47 -32 77c0 26.6667 10.6667 52.3333 32 77h-220c-24 0 -36 6.66667 -36 20c0 6 2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h595c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5\ns-10 -0.5 -18 -0.5h-220c21.3333 -21.3333 32 -47 32 -77c0 -26.6667 -10.6667 -52.3333 -32 -77zM502 327h-39c-8 0 -13.8333 -0.333333 -17.5 -1s-8.16667 -2.66667 -13.5 -6s-11.3333 -9 -18 -17c-11.3333 -15.3333 -17 -33 -17 -53c0 -21.3333 6.33333 -39.3333 19 -54\nc8.66667 -10.6667 15.8333 -17.1667 21.5 -19.5s14.1667 -3.5 25.5 -3.5h39c8 0 13.8333 0.333333 17.5 1s8.16667 2.66667 13.5 6s11.3333 9 18 17c11.3333 15.3333 17 33 17 53c0 21.3333 -6.33333 39.3333 -19 54c-8.66667 10.6667 -16 17.1667 -22 19.5\ns-14.3333 3.5 -25 3.5z"
            },
            "⋚": {
                x: 891,
                d: "M718 843l-492 -188l494 -189c14 -5.33333 21 -12.6667 21 -22c0 -5.33333 -2 -10 -6 -14s-8.66667 -6 -14 -6c-3.33333 0 -9.66667 2 -19 6l-531 203c-14 5.33333 -21 12.6667 -21 22s7.66667 17 23 23l530 202c9.33333 4 15.3333 6 18 6c5.33333 0 10 -2 14 -6\ns6 -8.66667 6 -14c0 -10 -7.66667 -17.6667 -23 -23zM718 -178l-529 -202c-9.33333 -4 -15.6667 -6 -19 -6c-5.33333 0 -10 1.83333 -14 5.5s-6 8.5 -6 14.5c0 9.33333 8 17 24 23l491 188l-494 189c-14 5.33333 -21 12.6667 -21 22c0 5.33333 2 10 6 14s8.66667 6 14 6\nc2.66667 0 8.66667 -2 18 -6l532 -203c14 -6 21 -13.3333 21 -22c0 -10 -7.66667 -17.6667 -23 -23zM706 230h-521c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20h519c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14\ns-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "⋛": {
                x: 891,
                d: "M718 632l-529 -202c-9.33333 -4 -15.6667 -6 -19 -6c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 9.33333 7.66667 17 23 23l492 188l-494 189c-14 5.33333 -21 12.6667 -21 22c0 5.33333 2 10 6 14s8.66667 6 14 6c2.66667 0 8.66667 -2 18 -6l532 -203\nc14 -5.33333 21 -12.6667 21 -22c0 -10 -7.66667 -17.6667 -23 -23zM718 33l-492 -188l494 -189c14 -6 21 -13.3333 21 -22c0 -6 -2 -10.8333 -6 -14.5s-8.66667 -5.5 -14 -5.5c-3.33333 0 -9.66667 2 -19 6l-531 203c-14 5.33333 -21 12.6667 -21 22s8 17 24 23l529 202\nc9.33333 4 15.3333 6 18 6c5.33333 0 10 -2 14 -6s6 -8.66667 6 -14c0 -10 -7.66667 -17.6667 -23 -23zM706 230h-521c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20h519c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14\ns-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "⇛": {
                x: 1166,
                d: "M741 424h-556c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s1.83333 10.6667 5.5 14s7.5 5.16667 11.5 5.5s10 0.5 18 0.5h547c-31.3333 51.3333 -55.3333 100.333 -72 147h47c56 -158 159 -278.333 309 -361c-150 -82 -253 -202.333 -309 -361h-47\nc15.3333 44 39.3333 93 72 147h-547c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s1.83333 10.6667 5.5 14s7.5 5.16667 11.5 5.5s10 0.5 18 0.5h556c9.33333 0 15.3333 0.5 18 1.5s6 4.16667 10 9.5c50 60 101.333 107.667 154 143h-738\nc-8.66667 0 -14.8333 0.166667 -18.5 0.5s-7.33333 2.16667 -11 5.5s-5.5 8 -5.5 14c0 9.33333 2.66667 15 8 17s14.3333 3 27 3h738c-54 36.6667 -105.333 84.6667 -154 144c-4 4.66667 -7.33333 7.5 -10 8.5s-8.66667 1.5 -18 1.5z"
            },
            "⇚": {
                x: 1166,
                d: "M981 230h-738c54 -36.6667 105.333 -84.6667 154 -144c4 -4.66667 7.33333 -7.5 10 -8.5s8.66667 -1.5 18 -1.5h555c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-547c31.3333 -51.3333 55.3333 -100.333 72 -147h-47\nc-56 158 -159 278.333 -309 361c150 82 253 202.333 309 361h47c-15.3333 -44 -39.3333 -93 -72 -147h547c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14c0 -13.3333 -12 -20 -36 -20h-555c-9.33333 0 -15.3333 -0.5 -18 -1.5s-6 -4.16667 -10 -9.5\nc-50 -60 -101.333 -107.667 -154 -143h738c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-1.83333 -10.6667 -5.5 -14s-7.5 -5.16667 -11.5 -5.5s-10 -0.5 -18 -0.5z"
            },
            "✓": {
                x: 964,
                d: "M240 263l94 -154c48.6667 142 122.667 271.333 222 388c34.6667 40.6667 79.1667 84.5 133.5 131.5s92.1667 70.5 113.5 70.5c7.33333 0 11 -2.33333 11 -7c0 -6 -9.66667 -16.3333 -29 -31c-81.3333 -60.6667 -154 -135 -218 -223c-86.6667 -120 -147 -259 -181 -417\nc-2.66667 -10 -12.6667 -20.5 -30 -31.5s-31.6667 -16.5 -43 -16.5c-6.66667 0 -10.6667 1.33333 -12 4c-2 2 -7.33333 10.6667 -16 26l-127 209c-5.33333 8.66667 -8 14.3333 -8 17c0 8 9.33333 18.1667 28 30.5c18.6667 12.3333 34 18.5 46 18.5c4 0 9.33333 -5 16 -15z\n"
            },
            "⊻": {
                x: 798,
                d: "M641 676l-220 -462c-6 -13.3333 -13.3333 -20 -22 -20s-16 6.33333 -22 19l-221 465c-4 10 -6 16 -6 18c0 5.33333 2 10 6 14s8.66667 6 14 6c9.33333 0 16.6667 -6.33333 22 -19l207 -437l207 436c0 0.666667 0.333333 1.33333 1 2c6 12 13 18 21 18\nc5.33333 0 10 -2 14 -6s6 -8.66667 6 -14c0 -4 -2.33333 -10.6667 -7 -20zM186 40h427c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5c-4 -0.333333 -9.66667 -0.5 -17 -0.5h-427\nc-24 0 -36 6.66667 -36 20c0 13.3333 12 20 36 20z"
            },
            "⊼": {
                x: 798,
                d: "M612 676h-426c-24 0 -36 6.66667 -36 20c0 6 2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h428c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14c0 -13.3333 -12 -20 -36 -20zM421 503l220 -465c4.66667 -8.66667 7 -14.6667 7 -18\nc0 -5.33333 -1.83333 -10 -5.5 -14s-8.5 -6 -14.5 -6c-8 0 -15.3333 6.33333 -22 19l-207 437l-207 -436c0 -0.666667 -0.333333 -1.33333 -1 -2c-6 -12 -13 -18 -21 -18c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 4 2.33333 10.6667 7 20l220 462\nc6 13.3333 13.3333 20 22 20s16 -6.33333 22 -19z"
            },
            "∠": {
                x: 909,
                d: "M748 653l-534 -613h510c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5c-4 -0.333333 -9.66667 -0.5 -17 -0.5h-538c-24 0 -36 6.66667 -36 20c0 5.33333 4 12.3333 12 21l555 639\nc8.66667 9.33333 16 14 22 14c5.33333 0 10 -2 14 -6s6 -8.66667 6 -14c0 -6 -3.66667 -13 -11 -21z"
            },
            "∡": {
                x: 909,
                d: "M748 673l-325 -385c61.3333 -74 96.6667 -156.667 106 -248h195c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5c-4 -0.333333 -9.66667 -0.5 -17 -0.5h-193\nc-1.33333 -13.3333 -8 -20 -20 -20c-11.3333 0 -18 6.66667 -20 20h-305c-24 0 -36 6.66667 -36 20c0 4.66667 4 11.6667 12 21l555 659c8 9.33333 15.3333 14 22 14c5.33333 0 10 -2 14 -6s6 -8.66667 6 -14s-3.66667 -12.3333 -11 -21zM213 40h276\nc-8 82.6667 -39 154.667 -93 216z"
            },
            "∢": {
                x: 909,
                d: "M738 508l-118 -58c28 -62.6667 42 -129.333 42 -200c0 -70.6667 -14 -137.333 -42 -200l116 -58c15.3333 -6.66667 23 -14.3333 23 -23c0 -6 -2 -10.8333 -6 -14.5s-8.66667 -5.5 -14 -5.5c-3.33333 0 -9.33333 2.33333 -18 7l-551 272c-13.3333 6.66667 -20 14 -20 22\ns6.33333 15.3333 19 22l552 272c8.66667 4.66667 14.6667 7 18 7c5.33333 0 10 -1.83333 14 -5.5s6 -8.5 6 -14.5c0 -8.66667 -7 -16.3333 -21 -23zM215 250l369 -182c25.3333 59.3333 38 120 38 182c0 62.6667 -12.6667 123.333 -38 182z"
            },
            "∝": {
                x: 965,
                d: "M584 316c14 47.3333 41.1667 85.1667 81.5 113.5s81.5 42.5 123.5 42.5c17.3333 0 26 -6.66667 26 -20c0 -12 -9 -18.6667 -27 -20c-50.6667 -2.66667 -92.3333 -21.8333 -125 -57.5s-49 -77.1667 -49 -124.5c0 -42.6667 15 -82.8333 45 -120.5\nc30 -37.6667 76 -58.1667 138 -61.5c12 -1.33333 18 -8 18 -20c0 -13.3333 -8.66667 -20 -26 -20c-40.6667 0 -81.1667 13.5 -121.5 40.5s-68.5 65.5 -84.5 115.5c-14.6667 -47.3333 -41.8333 -85.1667 -81.5 -113.5c-39.6667 -28.3333 -82.8333 -42.5 -129.5 -42.5\nc-60 0 -112 21.3333 -156 64c-44 42.6667 -66 95.3333 -66 158c0 62.6667 22 115.333 66 158s96 64 156 64c44.6667 0 87 -13.5 127 -40.5s68.3333 -65.5 85 -115.5zM372 68c48.6667 0 91 17.3333 127 52c36 34.6667 54 78 54 130s-18 95.3333 -54 130s-78.3333 52 -127 52\nc-49.3333 0 -92 -17.5 -128 -52.5s-54 -78.1667 -54 -129.5c0 -51.3333 18 -94.5 54 -129.5s78.6667 -52.5 128 -52.5z"
            },
            "☺": {
                x: 965,
                d: "M815 358c0 -4.66667 -4.33333 -14.5 -13 -29.5s-22.3333 -33.1667 -41 -54.5c-18.6667 -21.3333 -40.5 -41.8333 -65.5 -61.5s-56.5 -36.3333 -94.5 -50s-77.6667 -20.5 -119 -20.5c-41.3333 0 -80.8333 6.83333 -118.5 20.5s-69 30.1667 -94 49.5\ns-46.8333 39.6667 -65.5 61c-18.6667 21.3333 -32.3333 39.6667 -41 55s-13 25.3333 -13 30c0 5.33333 2 10 6 14s8.66667 6 14 6s9.33333 -1.33333 12 -4s6.66667 -8.66667 12 -18c30.6667 -52.6667 71.5 -94.8333 122.5 -126.5c51 -31.6667 106.5 -47.5 166.5 -47.5\nc19.3333 0 39.1667 2 59.5 6s44.6667 11.8333 73 23.5s56.6667 30.6667 85 57c28.3333 26.3333 53.5 58.8333 75.5 97.5c6 8 12.3333 12 19 12c5.33333 0 10 -2 14 -6s6 -8.66667 6 -14z"
            },
            "⌢": {
                x: 965,
                d: "M815 142c0 -5.33333 -1.83333 -10 -5.5 -14s-8.5 -6 -14.5 -6c-2.66667 0 -5 0.333333 -7 1s-4 2.33333 -6 5l-4.5 6c-1 1.33333 -2.83333 4.66667 -5.5 10c-33.3333 62.6667 -75.8333 110.667 -127.5 144c-51.6667 33.3333 -105.5 50 -161.5 50\nc-62.6667 0 -119.333 -18.3333 -170 -55c-50.6667 -36.6667 -91 -83.6667 -121 -141c-2.66667 -5.33333 -4.66667 -9.16667 -6 -11.5s-3.33333 -4.33333 -6 -6s-6 -2.5 -10 -2.5c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 4.66667 4.16667 15.1667 12.5 31.5\ns22 36.1667 41 59.5c19 23.3333 40.8333 45.6667 65.5 67c24.6667 21.3333 56 39.6667 94 55s78 23 120 23c41.3333 0 81 -7.5 119 -22.5s69.3333 -33.3333 94 -55s46.3333 -44.1667 65 -67.5c18.6667 -23.3333 32.3333 -43.1667 41 -59.5s13 -26.8333 13 -31.5z"
            },
            "⋐": {
                x: null,
                d: "M470 155h256c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-107c-20 0 -49.6667 -0.166667 -89 -0.5c-39.3333 -0.333333 -69 -0.5 -89 -0.5c-38.6667 0 -71.1667 13.3333 -97.5 40\nc-26.3333 26.6667 -39.5 58.6667 -39.5 96c0 37.3333 13.1667 69.3333 39.5 96s58.8333 40 97.5 40c3.33333 0 8.5 -0.166667 15.5 -0.5s12.5 -0.5 16.5 -0.5h253c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5\ns-9.66667 -0.5 -17 -0.5h-256c-3.33333 0 -8.33333 0.166667 -15 0.5s-11.3333 0.5 -14 0.5c-27.3333 0 -50.3333 -9.5 -69 -28.5s-28 -41.5 -28 -67.5s9.33333 -48.5 28 -67.5s41.6667 -28.5 69 -28.5c2.66667 0 7.33333 0.166667 14 0.5s11.6667 0.5 15 0.5zM459 0h267\nc7.33333 0 13 -0.166667 17 -0.5c4 -0.333333 8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-270c-84 0 -156 28 -216 84s-90 124.667 -90 206c0 81.3333 30 150 90 206s132 84 216 84h270\nc7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-267c-77.3333 0 -141.5 -24.5 -192.5 -73.5s-76.5 -107.833 -76.5 -176.5c0 -68.6667 25.6667 -127.5 77 -176.5\nc51.3333 -49 115.333 -73.5 192 -73.5z"
            },
            "⋑": {
                x: null,
                d: "M441 345h-256c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h253c4 0 9.5 0.166667 16.5 0.5s12.1667 0.5 15.5 0.5c38.6667 0 71.1667 -13.3333 97.5 -40s39.5 -58.6667 39.5 -96\nc0 -37.3333 -13.1667 -69.3333 -39.5 -96c-26.3333 -26.6667 -58.8333 -40 -97.5 -40c-3.33333 0 -8.5 0.166667 -15.5 0.5s-12.5 0.5 -16.5 0.5h-253c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5\nh256c3.33333 0 8.33333 -0.166667 15 -0.5s11.3333 -0.5 14 -0.5c27.3333 0 50.3333 9.5 69 28.5s28 41.5 28 67.5s-9.33333 48.5 -28 67.5s-41.6667 28.5 -69 28.5c-2.66667 0 -7.33333 -0.166667 -14 -0.5s-11.6667 -0.5 -15 -0.5zM452 500h-267\nc-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h270c84 0 156 -28 216 -84s90 -124.667 90 -206c0 -81.3333 -30 -150 -90 -206s-132 -84 -216 -84h-270c-7.33333 0 -13 0.166667 -17 0.5\ns-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2 10.6667 6 14c4 3.33333 8 5.16667 12 5.5c4 0.333333 9.66667 0.5 17 0.5h267c77.3333 0 141.5 24.5 192.5 73.5s76.5 107.833 76.5 176.5c0 68.6667 -25.6667 127.5 -77 176.5s-115.333 73.5 -192 73.5z"
            },
            "⋒": {
                x: 854,
                d: "M550 563v-307c0 -23.3333 -4.5 -43.6667 -13.5 -61s-20.3333 -30.1667 -34 -38.5c-13.6667 -8.33333 -26.8333 -14.5 -39.5 -18.5s-24.6667 -6 -36 -6c-16 0 -32.5 3 -49.5 9s-33.5 19 -49.5 39s-24 45.3333 -24 76v307c0 7.33333 0.166667 13 0.5 17s2.16667 8 5.5 12\ns8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-304c0 -27.3333 7.66667 -48.3333 23 -63c16 -16 36 -24 60 -24c24.6667 0 45 8.33333 61 25c14.6667 14.6667 22 35.3333 22 62v304c0 7.33333 0.166667 13 0.5 17s2.16667 8 5.5 12s8 6 14 6\ns10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17zM704 563v-366c0 -48 -14.8333 -89.1667 -44.5 -123.5c-29.6667 -34.3333 -64.8333 -58.8333 -105.5 -73.5s-83 -22 -127 -22c-32 0 -63.8333 4.33333 -95.5 13c-31.6667 8.66667 -61.3333 21.5 -89 38.5\nc-27.6667 17 -50 40 -67 69s-25.5 61.8333 -25.5 98.5v366c0 7.33333 0.166667 13 0.5 17s2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-363c0 -57.3333 24.3333 -102.667 73 -136c46.6667 -30.6667 101.333 -46 164 -46\nc24 0 48.6667 3 74 9c25.3333 6 50.6667 15.5 76 28.5s46.1667 32 62.5 57s24.5 54.1667 24.5 87.5v363c0 7.33333 0.166667 13 0.5 17s2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17z"
            },
            "⋓": {
                x: 854,
                d: "M550 320v-307c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 9.66667 -0.5 17v304c0 27.3333 -7.66667 48.3333 -23 63c-16 16 -36 24 -60 24c-24.6667 0 -45 -8.33333 -61 -25\nc-14.6667 -14.6667 -22 -35.3333 -22 -62v-304c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 9.66667 -0.5 17v307c0 23.3333 4.5 43.6667 13.5 61s20.3333 30.1667 34 38.5s26.8333 14.5 39.5 18.5\ns24.6667 6 36 6c16 0 32.5 -3 49.5 -9s33.5 -19 49.5 -39s24 -45.3333 24 -76zM704 379v-366c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 9.66667 -0.5 17v363c0 57.3333 -24.3333 102.667 -73 136\nc-46.6667 30.6667 -101.333 46 -164 46c-24 0 -48.6667 -3 -74 -9s-50.6667 -15.5 -76 -28.5c-25.3333 -13 -46.1667 -32 -62.5 -57s-24.5 -54.1667 -24.5 -87.5v-363c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6\ns-5.16667 8 -5.5 12s-0.5 9.66667 -0.5 17v366c0 48 14.8333 89.1667 44.5 123.5c29.6667 34.3333 64.8333 58.8333 105.5 73.5s83 22 127 22c32 0 63.8333 -4.33333 95.5 -13c31.6667 -8.66667 61.3333 -21.5 89 -38.5s50 -40 67 -69s25.5 -61.8333 25.5 -98.5z"
            },
            "⋏": {
                x: 891,
                d: "M446 305c-19.3333 -98.6667 -50.6667 -175 -94 -229c-22.6667 -28.6667 -49.8333 -51.1667 -81.5 -67.5c-31.6667 -16.3333 -54.3333 -25.5 -68 -27.5s-24.1667 -3 -31.5 -3c-14 0 -21 6.66667 -21 20c0 11.3333 7.33333 18.3333 22 21\nc49.3333 7.33333 91.6667 26.6667 127 58c35.3333 31.3333 64.3333 82 87 152c25.3333 80 38.6667 179.333 40 298c0 22.6667 0.333333 34.3333 1 35c0 2.66667 1.33333 5.33333 4 8c3.33333 5.33333 8.33333 8 15 8c13.3333 0 20 -8 20 -24\nc1.33333 -140 16 -251.667 44 -335c11.3333 -34 25 -63.5 41 -88.5s31 -44 45 -57s30.3333 -23.8333 49 -32.5s33 -14.1667 43 -16.5s22 -4.5 36 -6.5c11.3333 -2 17 -8.66667 17 -20c0 -13.3333 -7 -20 -21 -20c-2.66667 0 -8.16667 0.666667 -16.5 2\ns-21.3333 4.66667 -39 10c-17.6667 5.33333 -33.8333 12 -48.5 20c-84 49.3333 -140.667 147.667 -170 295z"
            },
            "⋎": {
                x: 891,
                d: "M446 251c20.6667 103.333 54.3333 182.333 101 237c13.3333 16 28.5 30 45.5 42s32.3333 21 46 27s27.1667 10.6667 40.5 14s22.8333 5.33333 28.5 6s9.83333 1 12.5 1c14 0 21 -6.66667 21 -20c0 -11.3333 -9 -18.3333 -27 -21\nc-48.6667 -8 -90.3333 -28.8333 -125 -62.5s-62.6667 -83.8333 -84 -150.5c-24.6667 -79.3333 -37.6667 -177.667 -39 -295c0 -22.6667 -0.333333 -34.3333 -1 -35c0 -2.66667 -1.33333 -5.33333 -4 -8c-3.33333 -5.33333 -8.33333 -8 -15 -8c-13.3333 0 -20 8 -20 24\nc-1.33333 142 -17 257 -47 345c-38.6667 113.333 -109.333 177 -212 191c-11.3333 2 -17 8.66667 -17 20c0 13.3333 7 20 21 20c8.66667 0 21 -1.66667 37 -5s38.1667 -12.5 66.5 -27.5c28.3333 -15 52.1667 -34.5 71.5 -58.5c48 -58.6667 81.3333 -137.333 100 -236z"
            },
            "⋋": {
                x: 965,
                d: "M455 336l-293 316c-8 8.66667 -12 16 -12 22s2 10.8333 6 14.5s8.66667 5.5 14 5.5c6 0 13.3333 -4.66667 22 -14l611 -660c8 -8.66667 12 -16 12 -22s-2 -10.8333 -6 -14.5s-8.66667 -5.5 -14 -5.5c-6 0 -13 4.33333 -21 13l-292 315l-291 -315\nc-8 -8.66667 -15 -13 -21 -13c-5.33333 0 -10 1.83333 -14 5.5s-6 8.5 -6 14.5s4 13.3333 12 22z"
            },
            "⋌": {
                x: 965,
                d: "M510 336l293 -316c8 -8.66667 12 -16 12 -22s-2 -10.8333 -6 -14.5s-8.66667 -5.5 -14 -5.5c-6 0 -13 4.33333 -21 13l-292 315l-291 -315c-8 -8.66667 -15 -13 -21 -13c-5.33333 0 -10 1.83333 -14 5.5s-6 8.5 -6 14.5s4 13.3333 12 22l611 660\nc8.66667 9.33333 16 14 22 14c5.33333 0 10 -1.83333 14 -5.5s6 -8.5 6 -14.5s-4 -13.3333 -12 -22z"
            },
            "⊆": {
                x: null,
                d: "M460 214h266c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-269c-84.6667 0 -157 28 -217 84s-90 124.667 -90 206c0 80.6667 29.8333 149 89.5 205c59.6667 56 131.833 84 216.5 84\nh270c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-267c-76.6667 0 -140.667 -24.5 -192 -73.5c-51.3333 -49 -77 -107.833 -77 -176.5c0 -67.3333 25.3333 -125.667 76 -175\nc50.6667 -49.3333 115.333 -74 194 -74zM185 -174h541c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-541c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14\ns2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5zM185 20h541c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-541c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14\ns2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5z"
            },
            "⊇": {
                x: null,
                d: "M451 713h-266c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h269c85.3333 0 157.833 -28 217.5 -84s89.5 -124.667 89.5 -206c0 -80.6667 -29.8333 -149 -89.5 -205s-131.833 -84 -216.5 -84h-270\nc-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h267c76.6667 0 140.667 24.3333 192 73c51.3333 48.6667 77 107.667 77 177c0 67.3333 -25.3333 125.667 -76 175s-115.333 74 -194 74zM726 -214h-541\nc-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h541c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5zM726 -20\nh-541c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h541c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "≎": {
                x: 965,
                d: "M626 367h154c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-10 -0.5 -18 -0.5h-156c-16 0 -25.6667 1.66667 -29 5s-5.66667 12 -7 26c-1.33333 23.3333 -11.8333 44.8333 -31.5 64.5\ns-44.1667 29.5 -73.5 29.5c-28 0 -52 -9.66667 -72 -29s-30.6667 -41.3333 -32 -66c-0.666667 -14 -3.16667 -22.5 -7.5 -25.5s-13.8333 -4.5 -28.5 -4.5h-156c-24 0 -36 6.66667 -36 20c0 6 2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h154c6 39.3333 23 70 51 92\ns59 33 93 33c32.6667 0 63 -10.8333 91 -32.5s45.3333 -52.5 52 -92.5zM623 173h156c8 0 14 -0.166667 18 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-154c-6 -39.3333 -23 -70 -51 -92s-59 -33 -93 -33\nc-32.6667 0 -63 10.8333 -91 32.5c-28 21.6667 -45.3333 52.5 -52 92.5h-154c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20h156c16 0 25.6667 -1.66667 29 -5s5.66667 -12 7 -26c1.33333 -23.3333 11.8333 -44.8333 31.5 -64.5\nc19.6667 -19.6667 44.1667 -29.5 73.5 -29.5c28 0 52 9.66667 72 29c20 19.3333 30.6667 41.3333 32 66c0.666667 14 3.16667 22.5 7.5 25.5s13.8333 4.5 28.5 4.5z"
            },
            "≪": {
                x: 1520,
                d: "M712 524l-500 -274l500 -274c13.3333 -7.33333 20 -14.6667 20 -22c0 -13.3333 -6.66667 -20 -20 -20c-4.66667 0 -11 2.33333 -19 7l-523 287c-8.66667 4.66667 -14.1667 8.16667 -16.5 10.5s-3.5 6.16667 -3.5 11.5c0 7.33333 5.33333 14 16 20\nc1.33333 0.666667 2.33333 1.33333 3 2l525 287c8.66667 4.66667 14.6667 7 18 7c4.66667 0 9.16667 -1.83333 13.5 -5.5s6.5 -8.5 6.5 -14.5c0 -7.33333 -6.66667 -14.6667 -20 -22zM1350 524l-500 -274l500 -274c13.3333 -7.33333 20 -14.6667 20 -22\nc0 -13.3333 -6.66667 -20 -20 -20c-4.66667 0 -11 2.33333 -19 7l-523 287c-8.66667 4.66667 -14.1667 8.16667 -16.5 10.5s-3.5 6.16667 -3.5 11.5c0 7.33333 5.33333 14 16 20c1.33333 0.666667 2.33333 1.33333 3 2l525 287c8.66667 4.66667 14.6667 7 18 7\nc4.66667 0 9.16667 -1.83333 13.5 -5.5s6.5 -8.5 6.5 -14.5c0 -7.33333 -6.66667 -14.6667 -20 -22zM1031 524l-500 -274l500 -274c13.3333 -7.33333 20 -14.6667 20 -22c0 -13.3333 -6.66667 -20 -20 -20c-4.66667 0 -11 2.33333 -19 7l-523 287\nc-8.66667 4.66667 -14.1667 8.16667 -16.5 10.5s-3.5 6.16667 -3.5 11.5c0 7.33333 5.33333 14 16 20c1.33333 0.666667 2.33333 1.33333 3 2l525 287c8.66667 4.66667 14.6667 7 18 7c4.66667 0 9.16667 -1.83333 13.5 -5.5s6.5 -8.5 6.5 -14.5\nc0 -7.33333 -6.66667 -14.6667 -20 -22z"
            },
            "≫": {
                x: 1520,
                d: "M733 228l-544 -287c-8.66667 -4.66667 -15 -7 -19 -7c-13.3333 0 -20 6.66667 -20 20c0 7.33333 6.66667 14.6667 20 22l520 274l-520 274c-13.3333 7.33333 -20 14.6667 -20 22c0 6 2.16667 10.8333 6.5 14.5s8.83333 5.5 13.5 5.5c2 0 8 -2 18 -6l545 -288\nc12.6667 -6.66667 19 -14 19 -22s-6.33333 -15.3333 -19 -22zM1351 228l-544 -287c-8.66667 -4.66667 -15 -7 -19 -7c-13.3333 0 -20 6.66667 -20 20c0 2.66667 0.333333 5 1 7s2.16667 4 4.5 6s4 3.33333 5 4s3.5 2 7.5 4l521 275l-520 275\nc-4.66667 2.66667 -7.83333 4.5 -9.5 5.5s-3.5 2.33333 -5.5 4s-3.16667 3.33333 -3.5 5s-0.5 3.83333 -0.5 6.5c0 6 1.66667 10.5 5 13.5s6.16667 4.83333 8.5 5.5s4.5 1 6.5 1s8 -2 18 -6l544 -288c12 -6.66667 18.3333 -12 19 -16c0.666667 -2 1 -4 1 -6\nc0 -8 -6.33333 -15.3333 -19 -22zM1042 228l-544 -287c-8.66667 -4.66667 -15 -7 -19 -7c-13.3333 0 -20 6.66667 -20 20c0 5.33333 1.33333 9.33333 4 12c2.66667 2.66667 8 6 16 10l519 274l-521 275c-12 6 -18 13 -18 21c0 6.66667 2.16667 11.6667 6.5 15\ns8.83333 5 13.5 5c2 0 8 -2 18 -6l544 -288c8.66667 -4 14.1667 -7.33333 16.5 -10s3.5 -6.66667 3.5 -12c0 -8 -6.33333 -15.3333 -19 -22z"
            },
            "┌": {
                x: 687,
                d: "M502 654h-312v-310c0 -25.3333 -6.66667 -38 -20 -38c-6 0 -10.6667 1.83333 -14 5.5s-5.16667 7.5 -5.5 11.5s-0.5 9.66667 -0.5 17v320c0 15.3333 1.83333 24.8333 5.5 28.5s13.5 5.5 29.5 5.5h317c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14\ns-1.83333 -10.6667 -5.5 -14s-7.5 -5.16667 -11.5 -5.5s-10 -0.5 -18 -0.5z"
            },
            "┐": {
                x: 687,
                d: "M537 660v-320c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -7.83333 -5.5 -11.5s-8 -5.5 -14 -5.5c-13.3333 0 -20 12.6667 -20 38v310h-312c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s1.83333 10.6667 5.5 14s7.5 5.16667 11.5 5.5\ns10 0.5 18 0.5h317c16 0 25.8333 -1.83333 29.5 -5.5s5.5 -13.1667 5.5 -28.5z"
            },
            "Ⓢ": {
                x: 1186,
                d: "M1036 267c0 -122.667 -43.5 -227.167 -130.5 -313.5c-87 -86.3333 -191.167 -129.5 -312.5 -129.5c-79.3333 0 -153 19.6667 -221 59c-68 39.3333 -122 93 -162 161s-60 142.333 -60 223c0 60 11.6667 117.167 35 171.5s54.6667 101.333 94 141\nc39.3333 39.6667 86.3333 71.3333 141 95s112.333 35.5 173 35.5c122.667 0 227.167 -43.5 313.5 -130.5s129.5 -191.167 129.5 -312.5zM593 -136c111.333 0 206.333 39.3333 285 118c78.6667 78.6667 118 173.667 118 285c0 110.667 -39.1667 205.5 -117.5 284.5\ns-173.5 118.5 -285.5 118.5s-207.167 -39.5 -285.5 -118.5c-78.3333 -79 -117.5 -173.833 -117.5 -284.5c0 -111.333 39.3333 -206.333 118 -285c78.6667 -78.6667 173.667 -118 285 -118zM601 226c-50 11.3333 -82.6667 19.8333 -98 25.5\nc-15.3333 5.66667 -30 15.5 -44 29.5c-29.3333 29.3333 -44 63 -44 101c0 40 15 74.3333 45 103c30 28.6667 67.3333 43 112 43c50 0 91.6667 -16.3333 125 -49l14 19c9.33333 13.3333 14.3333 20.3333 15 21c4 6 8 9 12 9c4.66667 0 7.5 -1.66667 8.5 -5\ns1.5 -10.3333 1.5 -21v-132c0 -8 -0.166667 -13.5 -0.5 -16.5s-1.33333 -5.33333 -3 -7s-4.83333 -2.5 -9.5 -2.5c-6.66667 0 -10.6667 3.33333 -12 10c-0.666667 1.33333 -1 2.33333 -1 3c-1.33333 10 -3 19.5 -5 28.5s-6.33333 21.5 -13 37.5s-14.8333 29.5 -24.5 40.5\ns-23.8333 20.8333 -42.5 29.5s-40 13 -64 13c-32 0 -57.8333 -9.66667 -77.5 -29c-19.6667 -19.3333 -29.5 -41.3333 -29.5 -66c0 -17.3333 5.33333 -34.1667 16 -50.5s27.3333 -29.1667 50 -38.5c1.33333 -0.666667 22 -5.66667 62 -15c46 -10.6667 76.1667 -19 90.5 -25\ns30.1667 -18 47.5 -36l2 -2c1.33333 -2 3.16667 -4.66667 5.5 -8s5 -7.16667 8 -11.5s5.83333 -9.5 8.5 -15.5s5.16667 -12.3333 7.5 -19s4.16667 -14.1667 5.5 -22.5s2 -16.8333 2 -25.5c0 -41.3333 -14.8333 -77.6667 -44.5 -109\nc-29.6667 -31.3333 -67.8333 -47 -114.5 -47c-60.6667 0 -109.333 16.3333 -146 49l-14 -19c-9.33333 -13.3333 -14.3333 -20.3333 -15 -21c-4 -6 -8 -9 -12 -9c-4.66667 0 -7.5 1.66667 -8.5 5c-1 3.33333 -1.5 10.3333 -1.5 21v131c0 8 0.166667 13.5 0.5 16.5\ns1.5 5.5 3.5 7.5s5 3 9 3c7.33333 0 11.3333 -3 12 -9c2 -50 18.3333 -87 49 -111c32 -26 73 -39 123 -39c32.6667 0 58.8333 10.5 78.5 31.5s29.5 45.1667 29.5 72.5c0 32.6667 -10.6667 57.6667 -32 75c-10.6667 10 -20.5 16.6667 -29.5 20s-28.1667 8.66667 -57.5 16z\n"
            },
            "⋔": {
                x: 855,
                d: "M705 332v-319c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 9.66667 -0.5 17v316c0 48 -19.6667 85.6667 -59 113c-41.3333 27.3333 -94 42.3333 -158 45v-474c0 -7.33333 -0.166667 -13 -0.5 -17\ns-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 9.66667 -0.5 17v474c-62.6667 -2 -113.333 -15.6667 -152 -41c-15.3333 -10 -28 -20.5 -38 -31.5s-16.6667 -22.1667 -20 -33.5s-5.5 -20.3333 -6.5 -27s-1.5 -15 -1.5 -25v-316\nc0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 9.66667 -0.5 17v319c0 32.6667 7.66667 61.3333 23 86s33.1667 43.6667 53.5 57s43.8333 24.1667 70.5 32.5c26.6667 8.33333 48.3333 13.6667 65 16\ns32 3.83333 46 4.5v173c0 7.33333 0.166667 13 0.5 17s2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-173c12 -0.666667 25.6667 -1.83333 41 -3.5s36.6667 -6.66667 64 -15c27.3333 -8.33333 51.5 -18.8333 72.5 -31.5\ns39.5 -31.8333 55.5 -57.5s24 -55.1667 24 -88.5z"
            },
            "∔": {
                x: 966,
                d: "M503 230v-289c0 -7.33333 -0.166667 -13 -0.5 -17s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 9.66667 -0.5 17v289h-278c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5\ns9.66667 0.5 17 0.5h278v289c0 7.33333 0.166667 13 0.5 17s2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-289h278c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5\ns-9.66667 -0.5 -17 -0.5h-278zM533 716c0 -14 -5 -25.8333 -15 -35.5s-21.6667 -14.5 -35 -14.5s-25 4.66667 -35 14s-15 21.3333 -15 36c0 14 4.83333 25.8333 14.5 35.5s21.5 14.5 35.5 14.5s25.8333 -4.83333 35.5 -14.5c9.66667 -9.66667 14.5 -21.5 14.5 -35.5z"
            },
            "∽": {
                x: 966,
                d: "M816 166c0 -21.3333 -4.66667 -32 -14 -32c-7.33333 0 -12 11 -14 33c-2.66667 41.3333 -17.3333 75.6667 -44 103c-26.6667 27.3333 -58 41 -94 41c-20 0 -40.1667 -4.66667 -60.5 -14s-36.6667 -18.8333 -49 -28.5s-29.5 -24.5 -51.5 -44.5\nc-23.3333 -20.6667 -41.6667 -36 -55 -46s-31 -20 -53 -30s-43.6667 -15 -65 -15c-49.3333 0 -89.3333 20.6667 -120 62s-46 87.6667 -46 139c0 21.3333 4.66667 32 14 32c8 0 12.6667 -11 14 -33c2.66667 -40.6667 17.1667 -74.8333 43.5 -102.5\nc26.3333 -27.6667 57.8333 -41.5 94.5 -41.5c20 0 40.1667 4.66667 60.5 14s36.6667 18.8333 49 28.5s29.5 24.5 51.5 44.5c23.3333 20.6667 41.6667 36 55 46s31 20 53 30s43.6667 15 65 15c49.3333 0 89.3333 -20.6667 120 -62s46 -87.6667 46 -139z"
            },
            "⋍": {
                x: 966,
                d: "M816 282c0 -20.6667 -4.66667 -31 -14 -31c-8 0 -12.6667 11 -14 33c-2.66667 33.3333 -17 62.3333 -43 87s-58 37 -96 37c-41.3333 0 -91 -22.6667 -149 -68c-28 -22 -49.5 -38 -64.5 -48s-33.3333 -19.5 -55 -28.5s-42.8333 -13.5 -63.5 -13.5\nc-49.3333 0 -89.5 18.5 -120.5 55.5s-46.5 78.8333 -46.5 125.5c0 21.3333 4.66667 32 14 32c8 0 12.6667 -11 14 -33c2 -32.6667 16.1667 -61.5 42.5 -86.5s58.5 -37.5 96.5 -37.5c41.3333 0 91 22.6667 149 68c28 22 49.5 38 64.5 48s33.3333 19.5 55 28.5\ns42.8333 13.5 63.5 13.5c48.6667 0 88.6667 -18.3333 120 -55s47 -79 47 -127zM186 76h594c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-596c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14\nc0 13.3333 12 20 36 20z"
            },
            "└": {
                x: 687,
                d: "M190 328v-310h312c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-1.83333 -10.6667 -5.5 -14s-7.5 -5.16667 -11.5 -5.5s-10 -0.5 -18 -0.5h-317c-16 0 -25.8333 1.83333 -29.5 5.5s-5.5 13.1667 -5.5 28.5v320\nc0 7.33333 0.166667 13 0.5 17s2.16667 7.83333 5.5 11.5s8 5.5 14 5.5c13.3333 0 20 -12.6667 20 -38z"
            },
            "┘": {
                x: 687,
                d: "M537 332v-320c0 -15.3333 -1.83333 -24.8333 -5.5 -28.5s-13.5 -5.5 -29.5 -5.5h-317c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s1.83333 10.6667 5.5 14c3.66667 3.33333 7.5 5.16667 11.5 5.5s10 0.5 18 0.5h312v310c0 25.3333 6.66667 38 20 38\nc6 0 10.6667 -1.83333 14 -5.5s5.16667 -7.5 5.5 -11.5s0.5 -9.66667 0.5 -17z"
            },
            "∁": {
                x: 688,
                d: "M538 218v-96c0 -35.3333 -11.5 -64.5 -34.5 -87.5s-48 -38.1667 -75 -45.5c-27 -7.33333 -55.1667 -11 -84.5 -11c-20.6667 0 -41.3333 2.16667 -62 6.5s-41.3333 11.5 -62 21.5s-37.5 25 -50.5 45s-19.5 43.6667 -19.5 71v581c0 35.3333 11.5 64.5 34.5 87.5\ns48 38.1667 75 45.5s55.1667 11 84.5 11c20.6667 0 41.3333 -2.16667 62 -6.5s41.3333 -11.5 62 -21.5s37.5 -25 50.5 -45s19.5 -43.6667 19.5 -71v-96c0 -34 -13.3333 -51 -40 -51c-26.6667 0 -40 18.6667 -40 56v84c0 9.33333 -0.5 16.5 -1.5 21.5\ns-4.33333 10.8333 -10 17.5s-14.5 12.6667 -26.5 18c-22.6667 9.33333 -48 14 -76 14c-32 0 -59 -5.33333 -81 -16c-10.6667 -5.33333 -18.5 -11.1667 -23.5 -17.5s-7.83333 -11.8333 -8.5 -16.5s-1 -11.6667 -1 -21v-567c0 -9.33333 0.5 -16.5 1.5 -21.5\ns4.33333 -10.8333 10 -17.5s14.5 -12.6667 26.5 -18c22.6667 -9.33333 48 -14 76 -14c32 0 59 5.33333 81 16c10.6667 5.33333 18.5 11.1667 23.5 17.5s7.83333 11.8333 8.5 16.5s1 11.6667 1 21v84c0 37.3333 13.3333 56 40 56c26.6667 0 40 -17 40 -51z"
            },
            "⊺": {
                x: 744,
                d: "M412 351v-511c0 -35.3333 -13.3333 -53 -40 -53s-40 17.6667 -40 53v511h-129c-35.3333 0 -53 13.3333 -53 40s17.6667 40 53 40h338c35.3333 0 53 -13.3333 53 -40s-17.6667 -40 -53 -40h-129z"
            },
            "⊚": {
                x: 966,
                d: "M816 250c0 -91.3333 -32.5 -169.667 -97.5 -235c-65 -65.3333 -143.5 -98 -235.5 -98c-91.3333 0 -169.667 32.5 -235 97.5c-65.3333 65 -98 143.5 -98 235.5c0 91.3333 32.5 169.667 97.5 235c65 65.3333 143.5 98 235.5 98c91.3333 0 169.667 -32.5 235 -97.5\ns98 -143.5 98 -235.5zM483 -58c84.6667 0 157.167 30 217.5 90s90.5 132.667 90.5 218c0 85.3333 -30.1667 158 -90.5 218s-132.833 90 -217.5 90c-84.6667 0 -157.167 -30 -217.5 -90c-60.3333 -60 -90.5 -132.667 -90.5 -218c0 -85.3333 30.1667 -158 90.5 -218\nc60.3333 -60 132.833 -90 217.5 -90zM622 250c0 -38 -13.6667 -70.6667 -41 -98c-27.3333 -27.3333 -60 -41 -98 -41s-70.6667 13.5 -98 40.5s-41 59.8333 -41 98.5c0 38 13.6667 70.6667 41 98s60 41 98 41s70.6667 -13.5 98 -40.5s41 -59.8333 41 -98.5zM483 151\nc27.3333 0 50.6667 9.66667 70 29s29 42.6667 29 70c0 26.6667 -9.66667 49.8333 -29 69.5s-42.6667 29.5 -70 29.5s-50.6667 -9.66667 -70 -29s-29 -42.6667 -29 -70c0 -26.6667 9.66667 -49.8333 29 -69.5s42.6667 -29.5 70 -29.5z"
            },
            "⊛": {
                x: 966,
                d: "M816 250c0 -91.3333 -32.5 -169.667 -97.5 -235c-65 -65.3333 -143.5 -98 -235.5 -98c-91.3333 0 -169.667 32.5 -235 97.5c-65.3333 65 -98 143.5 -98 235.5c0 91.3333 32.5 169.667 97.5 235c65 65.3333 143.5 98 235.5 98c91.3333 0 169.667 -32.5 235 -97.5\ns98 -143.5 98 -235.5zM483 -58c84.6667 0 157.167 30 217.5 90s90.5 132.667 90.5 218c0 85.3333 -30.1667 158 -90.5 218s-132.833 90 -217.5 90c-84.6667 0 -157.167 -30 -217.5 -90c-60.3333 -60 -90.5 -132.667 -90.5 -218c0 -85.3333 30.1667 -158 90.5 -218\nc60.3333 -60 132.833 -90 217.5 -90zM604 150l-109 79l5 -54c0 -6 0.5 -13.8333 1.5 -23.5s1.83333 -18.1667 2.5 -25.5l1 -11c0 -1.33333 0.833333 -10.5 2.5 -27.5s2.5 -25.8333 2.5 -26.5c0 -8 -2.83333 -14.3333 -8.5 -19s-11.8333 -7 -18.5 -7\ns-12.8333 2.33333 -18.5 7s-8.5 11 -8.5 19l15 168l-111 -80c-18.6667 -13.3333 -30 -20 -34 -20c-7.33333 0 -13.6667 2.83333 -19 8.5s-8 12.1667 -8 19.5c0 6.66667 1.33333 11.5 4 14.5s8.33333 6.83333 17 11.5l140 67l-141 68c-13.3333 6.66667 -20 15 -20 25\nc0 7.33333 2.66667 13.8333 8 19.5s11.6667 8.5 19 8.5c2.66667 0 14.6667 -7 36 -21l109 -79l-14 156v13c-1.33333 6.66667 0.833333 12.6667 6.5 18s12.1667 8 19.5 8c19.3333 0 28 -13 26 -39l-14 -157l127 94c6.66667 4.66667 12.6667 7 18 7\nc7.33333 0 13.6667 -2.83333 19 -8.5s8 -12.1667 8 -19.5c0 -6.66667 -1.33333 -11.5 -4 -14.5s-8.33333 -6.83333 -17 -11.5l-140 -67c18 -9.33333 37.6667 -19.1667 59 -29.5s39 -18.6667 53 -25s22.6667 -10.5 26 -12.5c6.66667 -3.33333 11.1667 -5.66667 13.5 -7\ns4.5 -3.66667 6.5 -7s3 -7.33333 3 -12c0 -7.33333 -2.66667 -13.8333 -8 -19.5s-11.6667 -8.5 -19 -8.5c-2.66667 0 -14.6667 7 -36 21z"
            },
            "⊖": {
                x: 966,
                d: "M816 250c0 -91.3333 -32.5 -169.667 -97.5 -235c-65 -65.3333 -143.5 -98 -235.5 -98c-91.3333 0 -169.667 32.5 -235 97.5c-65.3333 65 -98 143.5 -98 235.5c0 91.3333 32.5 169.667 97.5 235c65 65.3333 143.5 98 235.5 98c91.3333 0 169.667 -32.5 235 -97.5\ns98 -143.5 98 -235.5zM483 -58c84.6667 0 157.167 30 217.5 90s90.5 132.667 90.5 218c0 85.3333 -30.1667 158 -90.5 218s-132.833 90 -217.5 90c-84.6667 0 -157.167 -30 -217.5 -90c-60.3333 -60 -90.5 -132.667 -90.5 -218c0 -85.3333 30.1667 -158 90.5 -218\nc60.3333 -60 132.833 -90 217.5 -90zM346 263h274c8 0 13.5 -0.166667 16.5 -0.5s5.83333 -1.5 8.5 -3.5s4 -5 4 -9c0 -5.33333 -2.16667 -8.66667 -6.5 -10s-11.8333 -2 -22.5 -2h-274c-8 0 -13.5 0.166667 -16.5 0.5s-5.83333 1.5 -8.5 3.5s-4 5 -4 9\nc0 5.33333 2.16667 8.66667 6.5 10s11.8333 2 22.5 2z"
            },
            "Γ": {
                x: 591,
                d: "M517 681l24 -221h-18c-2.66667 23.3333 -4.83333 40.3333 -6.5 51c-1.66667 10.6667 -4.33333 24.6667 -8 42c-3.66667 17.3333 -7.83333 29.6667 -12.5 37s-11.3333 16.3333 -20 27s-18.6667 18 -30 22s-25.1667 7.66667 -41.5 11s-35.1667 5 -56.5 5h-110\nc-19.3333 0 -31.1667 -2.16667 -35.5 -6.5s-6.5 -15.1667 -6.5 -32.5v-544c0 -19.3333 4 -31.8333 12 -37.5c8 -5.66667 30 -8.5 66 -8.5h22v-26c-27.3333 1.33333 -70.6667 2 -130 2c-58 0 -96.6667 -0.666667 -116 -2v26c36.6667 0 59.1667 2.16667 67.5 6.5\nc8.33333 4.33333 12.5 17.1667 12.5 38.5v539c0 21.3333 -4.16667 34.1667 -12.5 38.5s-30.8333 6.5 -67.5 6.5v26h467z"
            },
            "∆": {
                x: 797,
                d: "M419 690l323 -673c3.33333 -6.66667 5 -10.6667 5 -12c0 -3.33333 -6.33333 -5 -19 -5h-659c-12.6667 0 -19 1.66667 -19 5c0 1.33333 1.66667 5.33333 5 12l324 674c4 7.33333 6.83333 11.8333 8.5 13.5s5.5 2.5 11.5 2.5c8 0 14.6667 -5.66667 20 -17zM374 631\nl-278 -575h555z"
            },
            "Θ": {
                x: 727,
                d: "M677 340c0 -99.3333 -30.8333 -183.5 -92.5 -252.5s-135.5 -103.5 -221.5 -103.5c-84.6667 0 -158 34.3333 -220 103c-62 68.6667 -93 153 -93 253c0 100.667 30.8333 185.667 92.5 255c61.6667 69.3333 135.5 104 221.5 104c84.6667 0 158 -34.6667 220 -104\ns93 -154.333 93 -255zM364 1c28.6667 0 56.8333 6.83333 84.5 20.5c27.6667 13.6667 53.1667 33.8333 76.5 60.5c23.3333 26.6667 42.3333 62.3333 57 107s22 95 22 151c0 109.333 -24.3333 193.833 -73 253.5c-48.6667 59.6667 -104.667 89.5 -168 89.5\nc-28.6667 0 -56.6667 -7 -84 -21c-27.3333 -14 -52.8333 -34.3333 -76.5 -61s-42.8333 -62.6667 -57.5 -108c-14.6667 -45.3333 -22 -96.3333 -22 -153c0 -108 24.3333 -191.5 73 -250.5s104.667 -88.5 168 -88.5zM551 404v-124h-18v34h-339v-34h-18v124h18v-34h339v34h18z\n"
            },
            "Λ": {
                x: 694,
                d: "M363 690l207 -629c5.33333 -16 12.8333 -25.8333 22.5 -29.5c9.66667 -3.66667 26.8333 -5.5 51.5 -5.5v-26c-15.3333 1.33333 -46.6667 2 -94 2c-54.6667 0 -91.6667 -0.666667 -111 -2v26c42 0 63 9.33333 63 28c0 3.33333 -1.66667 9.66667 -5 19l-174 528l-166 -505\nc-3.33333 -11.3333 -5 -19 -5 -23c0 -4.66667 0.833333 -9.83333 2.5 -15.5s7 -12.1667 16 -19.5c9 -7.33333 21.5 -11.3333 37.5 -12v-26c-16 1.33333 -45.3333 2 -88 2c-24 0 -47.3333 -0.666667 -70 -2v26c41.3333 1.33333 69.3333 23.3333 84 66l197 598\nc2.66667 8 4.66667 12.8333 6 14.5s4.66667 2.5 10 2.5s8.66667 -0.833333 10 -2.5s3.33333 -6.5 6 -14.5z"
            },
            "Ξ": {
                x: 648,
                d: "M586 680l1 -19c1.33333 -37.3333 3.33333 -77 6 -119h-18c-2 40 -5.33333 65.3333 -10 76c-4 6.66667 -29 10 -75 10h-332c-44.6667 0 -69 -3 -73 -9c-5.33333 -7.33333 -9.33333 -33 -12 -77h-18l1 19c1.33333 37.3333 3.33333 77 6 119h524zM57 0l-7 149h18\nc2 -46 5.33333 -74 10 -84c4 -8.66667 30.3333 -13 79 -13h334c48 0 74 4 78 12s7.66667 36.3333 11 85h18l-7 -149h-534zM506 420v-132h-18v40h-328v-40h-18v132h18v-40h328v40h18z"
            },
            "Π": {
                x: 690,
                d: "M560 610v-539c0 -21.3333 4.16667 -34.1667 12.5 -38.5c8.33333 -4.33333 30.8333 -6.5 67.5 -6.5v-26c-19.3333 1.33333 -57 2 -113 2s-93.6667 -0.666667 -113 -2v26c36.6667 0 59.1667 2.16667 67.5 6.5c8.33333 4.33333 12.5 17.1667 12.5 38.5v584h-298v-584\nc0 -21.3333 4.16667 -34.1667 12.5 -38.5c8.33333 -4.33333 30.8333 -6.5 67.5 -6.5v-26c-19.3333 1.33333 -57 2 -113 2s-93.6667 -0.666667 -113 -2v26c36.6667 0 59.1667 2.16667 67.5 6.5c8.33333 4.33333 12.5 17.1667 12.5 38.5v539\nc0 21.3333 -4.16667 34.1667 -12.5 38.5s-30.8333 6.5 -67.5 6.5v26h590v-26c-36.6667 0 -59.1667 -2.16667 -67.5 -6.5s-12.5 -17.1667 -12.5 -38.5z"
            },
            "Σ": {
                x: 675,
                d: "M327 329l-231 -295h276c83.3333 0 141.333 12.8333 174 38.5c32.6667 25.6667 53 77.8333 61 156.5h18l-24 -229h-529c-14 0 -21 2.33333 -21 7c0 2 2.33333 6 7 12l223 286l-231 356c0 10.6667 1 17 3 19s8.33333 3 19 3h529l24 -221h-18\nc-8.66667 78.6667 -28.6667 130.833 -60 156.5s-89 38.5 -173 38.5h-242l197 -303c3.33333 -6.66667 5 -10.6667 5 -12c0 -3.33333 -2.33333 -7.66667 -7 -13z"
            },
            "Υ": {
                x: 727,
                d: "M397 353v-281c0 -19.3333 4 -31.8333 12 -37.5c8 -5.66667 30 -8.5 66 -8.5h22v-26c-28 1.33333 -72.3333 2 -133 2s-105 -0.666667 -133 -2v26h22c36 0 58 2.83333 66 8.5c8 5.66667 12 18.1667 12 37.5v281c0 17.3333 -0.666667 35.3333 -2 54s-5.16667 43 -11.5 73\ns-14.6667 56.1667 -25 78.5s-26.1667 41.8333 -47.5 58.5c-21.3333 16.6667 -46 25 -74 25c-21.3333 0 -42.3333 -7 -63 -21c-20.6667 -14 -33 -37.3333 -37 -70c-0.666667 -3.33333 -1.16667 -5.5 -1.5 -6.5s-1.16667 -2 -2.5 -3s-3.33333 -1.5 -6 -1.5\nc-4.66667 0 -7.66667 0.833333 -9 2.5s-2 5.16667 -2 10.5c0 32.6667 10.5 65.1667 31.5 97.5s51.1667 48.5 90.5 48.5c28.6667 0 54.5 -7.16667 77.5 -21.5s40.8333 -30.5 53.5 -48.5s23.8333 -40.3333 33.5 -67s16 -47.1667 19 -61.5\nc3 -14.3333 5.83333 -29.8333 8.5 -46.5h1c2 12.6667 4.16667 24.8333 6.5 36.5s6.33333 28 12 49s13.1667 39.8333 22.5 56.5s20.5 33.3333 33.5 50s29.5 29.6667 49.5 39s42 14 66 14c26.6667 0 49.8333 -8.83333 69.5 -26.5s33.3333 -37 41 -58s11.5 -41.5 11.5 -61.5\nc0 -5.33333 -0.666667 -8.83333 -2 -10.5s-4.33333 -2.5 -9 -2.5c-2 0 -3.66667 0.166667 -5 0.5s-2.33333 1 -3 2s-1.16667 2 -1.5 3s-0.5 2.83333 -0.5 5.5c-4 32.6667 -16.3333 56 -37 70s-41.6667 21 -63 21c-56.6667 0 -98.6667 -31.6667 -126 -95\nc-22 -52.6667 -33 -117.333 -33 -194z"
            },
            "Φ": {
                x: 675,
                d: "M368 129v-57c0 -19.3333 4 -31.8333 12 -37.5c8 -5.66667 30 -8.5 66 -8.5h22v-26c-27.3333 1.33333 -71 2 -131 2c-60.6667 0 -104.667 -0.666667 -132 -2v26h22c36 0 58 2.83333 66 8.5c8 5.66667 12 18.1667 12 37.5v57c-74.6667 6.66667 -135.833 30.6667 -183.5 72\nc-47.6667 41.3333 -71.5 88.3333 -71.5 141c0 51.3333 23.5 97.8333 70.5 139.5c47 41.6667 108.5 65.8333 184.5 72.5v57c0 19.3333 -4 31.8333 -12 37.5s-30 8.5 -66 8.5h-22v26c27.3333 -1.33333 71.3333 -2 132 -2c60 0 103.667 0.666667 131 2v-26h-22\nc-36 0 -58 -2.83333 -66 -8.5s-12 -18.1667 -12 -37.5v-57c76.6667 -6.66667 138.667 -30.6667 186 -72c47.3333 -41.3333 71 -88.3333 71 -141c0 -51.3333 -23.5 -97.8333 -70.5 -139.5s-109.167 -65.8333 -186.5 -72.5zM305 146v391\nc-50.6667 -5.33333 -93.5 -23.6667 -128.5 -55c-35 -31.3333 -52.5 -78.3333 -52.5 -141c0 -61.3333 17.3333 -107.667 52 -139s77.6667 -50 129 -56zM368 537v-391c21.3333 2 41.6667 6.5 61 13.5s38.6667 17.5 58 31.5s34.8333 34 46.5 60s17.5 56.3333 17.5 91\nc0 34 -5.66667 63.8333 -17 89.5s-26.5 45.5 -45.5 59.5s-38.3333 24.6667 -58 32s-40.5 12 -62.5 14z"
            },
            "Ψ": {
                x: 726,
                d: "M393 611v-464c96.6667 20.6667 145.667 105.333 147 254c0.666667 53.3333 7.5 92.5 20.5 117.5s35.5 37.5 67.5 37.5h26c9.33333 0 15.3333 -0.333333 18 -1s4 -3 4 -7s-4 -6.66667 -12 -8c-40.6667 -8 -61 -48.3333 -61 -121c0 -12.6667 -0.166667 -23.8333 -0.5 -33.5\ns-2 -24.5 -5 -44.5s-6.83333 -37.8333 -11.5 -53.5s-12.3333 -33 -23 -52s-23.1667 -35.3333 -37.5 -49c-14.3333 -13.6667 -32.8333 -25.6667 -55.5 -36s-48.3333 -17.1667 -77 -20.5v-58c0 -19.3333 4 -31.8333 12 -37.5c8 -5.66667 30 -8.5 66 -8.5h22v-26\nc-27.3333 1.33333 -71 2 -131 2c-60.6667 0 -104.667 -0.666667 -132 -2v26h22c36 0 58 2.83333 66 8.5c8 5.66667 12 18.1667 12 37.5v58c-41.3333 4.66667 -76.5 16.6667 -105.5 36s-50.3333 43 -64 71s-23.5 54.6667 -29.5 80s-9 51.6667 -9 79\nc0 31.3333 -2 57.1667 -6 77.5s-10 35 -18 44s-14.6667 14.6667 -20 17s-13 4.5 -23 6.5c-3.33333 0 -5 2.33333 -5 7c0 4 1.33333 6.33333 4 7s8.33333 1 17 1h26c30.6667 0 52.8333 -11.8333 66.5 -35.5c13.6667 -23.6667 20.8333 -59.8333 21.5 -108.5\nc0 -157.333 48.3333 -245.667 145 -265v464c0 19.3333 -4 31.8333 -12 37.5s-30 8.5 -66 8.5h-22v26c27.3333 -1.33333 71.3333 -2 132 -2c60 0 103.667 0.666667 131 2v-26h-22c-36 0 -58 -2.83333 -66 -8.5s-12 -18.1667 -12 -37.5z"
            },
            "Ω": {
                x: 695,
                d: "M645 146l-29 -146h-151c-10.6667 0 -17 0.666667 -19 2c-2 1.33333 -3 6 -3 14c0 46 17.3333 113.333 52 202c15.3333 37.3333 26.6667 66.3333 34 87s14.1667 44.8333 20.5 72.5s9.5 53.5 9.5 77.5c0 70 -20.8333 125.5 -62.5 166.5c-41.6667 41 -91.5 61.5 -149.5 61.5\nc-56 0 -105.167 -20.3333 -147.5 -61s-63.5 -96.3333 -63.5 -167c0 -54 20.6667 -131.333 62 -232c36 -91.3333 54 -160.333 54 -207c0 -7.33333 -1 -11.8333 -3 -13.5c-2 -1.66667 -8.33333 -2.5 -19 -2.5h-151l-29 146h18c9.33333 -42.6667 15.3333 -67.6667 18 -75\nc2 -6 4.16667 -10.1667 6.5 -12.5s8.16667 -4.5 17.5 -6.5s23 -3 41 -3h81c-5.33333 27.3333 -13.6667 53 -25 77s-29.3333 55.6667 -54 95c-21.3333 34.6667 -37.1667 61.1667 -47.5 79.5c-10.3333 18.3333 -20.5 42 -30.5 71s-15 56.5 -15 82.5\nc0 67.3333 27.8333 125 83.5 173c55.6667 48 123.833 72 204.5 72c79.3333 0 147 -24 203 -72s84 -105.667 84 -173c0 -26 -5 -53.5 -15 -82.5s-20.1667 -52.6667 -30.5 -71s-26.8333 -46.1667 -49.5 -83.5c-43.3333 -68.6667 -69 -124.667 -77 -168h81\nc26.6667 0 43.6667 1.66667 51 5s12.3333 9.33333 15 18c4.66667 14.6667 10.3333 39.3333 17 74h18z"
            },
            "ı": {
                x: 280,
                d: "M169 438v-370c0 -18.6667 3 -30.3333 9 -35c6 -4.66667 23.3333 -7 52 -7v-26c-15.3333 1.33333 -44.6667 2 -88 2c-45.3333 0 -76 -0.666667 -92 -2v26c31.3333 0 50.5 2.33333 57.5 7c7 4.66667 10.5 16.6667 10.5 36v278c0 24 -3.66667 39 -11 45\nc-7.33333 6 -25 9 -53 9v26z"
            },
            "ȷ": {
                x: 315,
                d: "M265 438v-493c0 -42.6667 -11.3333 -78 -34 -106s-51.3333 -42 -86 -42c-26 0 -48.3333 6.16667 -67 18.5c-18.6667 12.3333 -28 28.1667 -28 47.5c0 11.3333 3.33333 20.3333 10 27c6.66667 6.66667 15.3333 10 26 10c11.3333 0 20.1667 -3.5 26.5 -10.5\ns9.5 -15.5 9.5 -25.5c0 -8.66667 -2.33333 -15.8333 -7 -21.5s-9.16667 -9.33333 -13.5 -11c-4.33333 -1.66667 -8.16667 -2.83333 -11.5 -3.5c16 -10 34.6667 -15 56 -15c45.3333 0 68 42.6667 68 128v405c0 24 -4.16667 39.1667 -12.5 45.5s-28.8333 9.5 -61.5 9.5v26z\n"
            },
            "`": {
                x: 274,
                d: "M212 512l-76 67c-52 48 -78.3333 72 -79 72c-4.66667 9.33333 -7 15.3333 -7 18c0 7.33333 2.66667 13.6667 8 19s11.6667 8 19 8c6 0 10.5 -1.16667 13.5 -3.5s9.83333 -10.1667 20.5 -23.5l113 -145z"
            },
            "ˇ": {
                x: 344,
                d: "M172 559l112 76l10 -14l-122 -102l-122 102l10 14z"
            },
            "˘": {
                x: 378,
                d: "M312 694h16c-0.666667 -50.6667 -14.3333 -92.3333 -41 -125s-59.3333 -49 -98 -49s-71.3333 16.3333 -98 49c-26.6667 32.6667 -40.3333 74.3333 -41 125h16c0.666667 -43.3333 13 -78.5 37 -105.5s52.6667 -40.5 86 -40.5s62 13.5 86 40.5s36.3333 62.1667 37 105.5z\n"
            },
            "˚": {
                x: 274,
                d: "M224 622c0 -24.6667 -8.5 -45.5 -25.5 -62.5s-37.5 -25.5 -61.5 -25.5s-44.5 8.5 -61.5 25.5s-25.5 37.8333 -25.5 62.5s8.5 45.5 25.5 62.5s37.5 25.5 61.5 25.5s44.5 -8.5 61.5 -25.5s25.5 -37.8333 25.5 -62.5zM137 550c21.3333 0 38.1667 6.33333 50.5 19\ns18.5 30.3333 18.5 53s-6.16667 40.3333 -18.5 53s-29.1667 19 -50.5 19c-21.3333 0 -38.1667 -6.33333 -50.5 -19s-18.5 -30.3333 -18.5 -53s6.16667 -40.3333 18.5 -53s29.1667 -19 50.5 -19z"
            },
            "œ": {
                x: 772,
                d: "M700 235h-265v-19c0 -68.6667 15.5 -120.167 46.5 -154.5c31 -34.3333 65.1667 -51.5 102.5 -51.5c25.3333 0 48.8333 8.66667 70.5 26c21.6667 17.3333 37.5 43 47.5 77c1.33333 6 2.66667 9.66667 4 11s3.66667 2 7 2c5.33333 0 8 -2.66667 8 -8\ns-2.66667 -14.1667 -8 -26.5c-5.33333 -12.3333 -13.1667 -26.3333 -23.5 -42c-10.3333 -15.6667 -25.3333 -29.1667 -45 -40.5c-19.6667 -11.3333 -41.8333 -17 -66.5 -17c-34.6667 0 -67 10.1667 -97 30.5c-30 20.3333 -54 46.8333 -72 79.5\nc-17.3333 -33.3333 -40.5 -60 -69.5 -80s-60.8333 -30 -95.5 -30c-52 0 -97.3333 21.5 -136 64.5c-38.6667 43 -58 96.5 -58 160.5c0 64.6667 19.5 118.333 58.5 161s84.1667 64 135.5 64c34.6667 0 66.3333 -9.83333 95 -29.5s51.6667 -45.8333 69 -78.5\nc16.6667 32 38.8333 58 66.5 78s58.5 30 92.5 30c49.3333 0 87.5 -18.1667 114.5 -54.5s40.5 -81.1667 40.5 -134.5c0 -8.66667 -1 -13.8333 -3 -15.5s-8.33333 -2.5 -19 -2.5zM436 250h232c-3.33333 117.333 -37.6667 176 -103 176c-28 0 -55.3333 -13.5 -82 -40.5\ns-42.3333 -72.1667 -47 -135.5zM245 8c13.3333 0 27 3.16667 41 9.5s28.6667 16.6667 44 31s27.8333 36.5 37.5 66.5s14.5 65.6667 14.5 107c0 38 -4.83333 71 -14.5 99s-20.3333 48.5 -32 61.5s-25.3333 23.1667 -41 30.5s-26.6667 11.3333 -33 12\nc-6.33333 0.666667 -11.8333 1 -16.5 1c-7.33333 0 -15 -0.666667 -23 -2s-19.1667 -6 -33.5 -14s-26.8333 -18.6667 -37.5 -32s-20 -33.5 -28 -60.5s-12 -58.8333 -12 -95.5c0 -38 4 -71 12 -99s17.3333 -49.1667 28 -63.5c10.6667 -14.3333 23 -25.6667 37 -34\nc14 -8.33333 25.1667 -13.3333 33.5 -15c8.33333 -1.66667 16.1667 -2.5 23.5 -2.5z"
            },
            "&#xf8;": {
                x: 492,
                d: "M422 524l-65 -122c56.6667 -46.6667 85 -109.333 85 -188c0 -62.6667 -19.3333 -115.333 -58 -158c-38.6667 -42.6667 -84.6667 -64 -138 -64c-34 0 -66.3333 9.66667 -97 29l-66 -122l-13 8l66 123c-57.3333 44.6667 -86 106 -86 184\nc0 63.3333 19.1667 117.167 57.5 161.5c38.3333 44.3333 84.5 66.5 138.5 66.5c36 0 68.6667 -10 98 -30l65 120zM149 54l183 337c-25.3333 23.3333 -54 35 -86 35c-7.33333 0 -15 -0.666667 -23 -2s-19.8333 -6 -35.5 -14s-29.1667 -18.6667 -40.5 -32\ns-21.5 -34.3333 -30.5 -63s-13.5 -62.3333 -13.5 -101c0 -72.6667 15.3333 -126 46 -160zM344 378l-183 -337c24 -22 52.3333 -33 85 -33c49.3333 0 87.3333 23 114 69c19.3333 32.6667 29 78.3333 29 137c0 73.3333 -15 128 -45 164z"
            },
            "Œ": {
                x: 962,
                d: "M912 253l-36 -253h-376c-17.3333 0 -38.3333 -2.33333 -63 -7c-33.3333 -6 -58.3333 -9 -75 -9c-83.3333 0 -156.167 34.1667 -218.5 102.5c-62.3333 68.3333 -93.5 152.833 -93.5 253.5c0 101.333 31.1667 186.5 93.5 255.5c62.3333 69 135.167 103.5 218.5 103.5\nc18 0 42.3333 -3 73 -9c25.3333 -4.66667 47 -7 65 -7h362l24 -221h-18c-4 38 -8.33333 66.8333 -13 86.5s-13 39 -25 58s-29.1667 32.1667 -51.5 39.5s-51.5 11 -87.5 11h-125c-19.3333 0 -31.1667 -2.16667 -35.5 -6.5s-6.5 -15.1667 -6.5 -32.5v-250h115\nc47.3333 0 77.8333 8.16667 91.5 24.5s20.5 47.1667 20.5 92.5h18v-260h-18c0 45.3333 -6.83333 76.1667 -20.5 92.5s-44.1667 24.5 -91.5 24.5h-115v-277c0 -17.3333 2.16667 -28.1667 6.5 -32.5c4.33333 -4.33333 16.1667 -6.5 35.5 -6.5h124\nc18.6667 0 35.6667 1.16667 51 3.5s28.8333 5 40.5 8s22.3333 8 32 15s17.8333 13.3333 24.5 19s12.6667 14.5 18 26.5s9.66667 22 13 30s6.66667 20.3333 10 37s5.83333 30.1667 7.5 40.5s4.16667 26.1667 7.5 47.5h18zM468 186v311c0 74 -7.16667 123.5 -21.5 148.5\ns-42.1667 37.5 -83.5 37.5c-63.3333 0 -119 -31.1667 -167 -93.5s-72 -140.833 -72 -235.5c0 -99.3333 23.6667 -183.167 71 -251.5c47.3333 -68.3333 103.667 -102.5 169 -102.5c40.6667 0 68.1667 12.6667 82.5 38c14.3333 25.3333 21.5 74.6667 21.5 148z"
            },
            "!": {
                x: 182,
                d: "M132 670l-31 -483c-0.666667 -5.33333 -1.16667 -9 -1.5 -11s-1.16667 -3.66667 -2.5 -5s-3.33333 -2 -6 -2s-4.66667 0.666667 -6 2s-2.16667 3 -2.5 5s-0.833333 5.66667 -1.5 11l-31 483c0 13.3333 4.33333 23.3333 13 30c8.66667 6.66667 18 10 28 10\ns19.3333 -3.33333 28 -10s13 -16.6667 13 -30zM132 41c0 -11.3333 -4 -21 -12 -29s-17.6667 -12 -29 -12c-11.3333 0 -21 4 -29 12s-12 17.6667 -12 29c0 11.3333 4 21 12 29s17.6667 12 29 12c11.3333 0 21 -4 29 -12s12 -17.6667 12 -29z"
            },
            "”": {
                x: 378,
                d: "M126 631c-7.33333 -12.6667 -19 -19 -35 -19c-11.3333 0 -21 3.66667 -29 11s-12 17.3333 -12 30s4 22.6667 12 30s17.6667 11 29 11c36 0 54 -32 54 -96c0 -20.6667 -2.5 -40.8333 -7.5 -60.5s-11 -36.5 -18 -50.5s-14.3333 -26.3333 -22 -37\nc-7.66667 -10.6667 -14.1667 -18.6667 -19.5 -24s-9 -8 -11 -8c-5.33333 0 -8 2.66667 -8 8c0 3.33333 2 7 6 11c42.6667 44.6667 64 98.6667 64 162c0 10 -1 20.6667 -3 32zM309 631c-7.33333 -12.6667 -19 -19 -35 -19c-11.3333 0 -21 3.66667 -29 11s-12 17.3333 -12 30\ns4 22.6667 12 30s17.6667 11 29 11c36 0 54 -32 54 -96c0 -20.6667 -2.5 -40.8333 -7.5 -60.5s-11 -36.5 -18 -50.5s-14.3333 -26.3333 -22 -37s-14.1667 -18.6667 -19.5 -24c-5.33333 -5.33333 -9 -8 -11 -8c-5.33333 0 -8 2.66667 -8 8c0 3.33333 2 7 6 11\nc42.6667 44.6667 64 98.6667 64 162c0 10 -1 20.6667 -3 32z"
            },
            "#": {
                x: 779,
                d: "M489 143l-80 -316c-3.33333 -14.6667 -9.66667 -22 -19 -22c-5.33333 0 -9.66667 1.83333 -13 5.5s-5 7.83333 -5 12.5c0 3.33333 1.33333 9.33333 4 18l77 302h-181l-80 -316c-4 -14.6667 -10.3333 -22 -19 -22c-4.66667 0 -8.83333 1.83333 -12.5 5.5\ns-5.5 7.83333 -5.5 12.5c0 3.33333 1.33333 9.33333 4 18l77 302h-152c-22.6667 0 -34 6 -34 18c0 11.3333 10 17 30 17h166l34 143h-200c-20 0 -30 5.66667 -30 17c0 12 11.3333 18 34 18h206l80 316c4 14.6667 10.3333 22 19 22c4.66667 0 8.83333 -1.66667 12.5 -5\ns5.5 -7.66667 5.5 -13c0 -3.33333 -1.33333 -9.33333 -4 -18l-77 -302h181l80 316c3.33333 14.6667 9.66667 22 19 22c5.33333 0 9.66667 -1.66667 13 -5s5 -7.66667 5 -13c0 -3.33333 -1.33333 -9.33333 -4 -18l-77 -302h152c22.6667 0 34 -6 34 -18\nc0 -11.3333 -10 -17 -30 -17h-166l-34 -143h200c20 0 30 -5.66667 30 -17c0 -12 -11.3333 -18 -34 -18h-206zM282 178h181l34 143h-181z"
            },
            $: {
                x: 466,
                d: "M246 676v-285c19.3333 -4.66667 34.1667 -8.66667 44.5 -12s22.8333 -9.5 37.5 -18.5s27.6667 -20.1667 39 -33.5c32.6667 -38.6667 49 -84 49 -136c0 -51.3333 -15.6667 -96 -47 -134s-72.3333 -59.3333 -123 -64v-48h-26v47c-53.3333 2.66667 -95 21.5 -125 56.5\ns-45 78.1667 -45 129.5c0 27.3333 12 41 36 41c8.66667 0 16.8333 -2.83333 24.5 -8.5s11.5 -14.8333 11.5 -27.5c0 -11.3333 -3.66667 -20.1667 -11 -26.5s-15.6667 -9.5 -25 -9.5c-6.66667 0 -12 1 -16 3c8 -45.3333 26.5 -78.1667 55.5 -98.5\nc29 -20.3333 60.5 -31.5 94.5 -33.5v312c-24 6.66667 -41 11.6667 -51 15s-21.3333 8.83333 -34 16.5c-12.6667 7.66667 -25 17.8333 -37 30.5c-32 36 -48 78 -48 126s16 89.5 48 124.5s72.6667 54.8333 122 59.5v47h26v-47c56 -3.33333 98.3333 -21.5 127 -54.5\ns43 -72.1667 43 -117.5c0 -27.3333 -12 -41 -36 -41c-9.33333 0 -17.6667 3.16667 -25 9.5s-11 15.1667 -11 26.5c0 12.6667 3.83333 21.8333 11.5 27.5s15.8333 8.5 24.5 8.5c6 0 11 -1 15 -3c-15.3333 74 -65 113.333 -149 118zM220 399v276\nc-40 -4 -71.6667 -19.6667 -95 -47c-23.3333 -27.3333 -35 -57.3333 -35 -90c0 -35.3333 13 -67 39 -95c19.3333 -20 49.6667 -34.6667 91 -44zM246 323v-304c38.6667 4 70 21 94 51s36 63.3333 36 100c0 40 -13.3333 75.3333 -40 106\nc-21.3333 22.6667 -51.3333 38.3333 -90 47z"
            },
            "%": {
                x: 779,
                d: "M729 146c0 -57.3333 -12.1667 -105.167 -36.5 -143.5s-53.5 -57.5 -87.5 -57.5c-36 0 -67.8333 18.8333 -95.5 56.5c-27.6667 37.6667 -41.5 85.8333 -41.5 144.5c0 58.6667 13.8333 106.833 41.5 144.5c27.6667 37.6667 59.5 56.5 95.5 56.5\nc34 0 63.1667 -19.1667 87.5 -57.5c24.3333 -38.3333 36.5 -86.1667 36.5 -143.5zM606 -39c28 0 52.5 17.8333 73.5 53.5c21 35.6667 31.5 79.5 31.5 131.5s-10.5 95.8333 -31.5 131.5c-21 35.6667 -45.5 53.5 -73.5 53.5c-8 0 -16.5 -2.33333 -25.5 -7\ns-18.8333 -12.8333 -29.5 -24.5s-19.3333 -30.6667 -26 -57c-6.66667 -26.3333 -10 -58.5 -10 -96.5c0 -37.3333 3.33333 -69.3333 10 -96c6.66667 -26.6667 15.3333 -45.8333 26 -57.5c10.6667 -11.6667 20.5 -19.8333 29.5 -24.5c9 -4.66667 17.5 -7 25.5 -7zM642 714\nl-476 -753c-6.66667 -10.6667 -13 -16 -19 -16c-4.66667 0 -8.83333 1.66667 -12.5 5s-5.5 7.66667 -5.5 13c0 3.33333 3 9.66667 9 19l432 684l-1 1c-40 -27.3333 -85 -41 -135 -41c-52 0 -101 14.6667 -147 44c16 -32 24 -72.6667 24 -122\nc0 -57.3333 -12.1667 -105.167 -36.5 -143.5c-24.3333 -38.3333 -53.5 -57.5 -87.5 -57.5c-36 0 -67.8333 18.8333 -95.5 56.5c-27.6667 37.6667 -41.5 85.8333 -41.5 144.5c0 58.6667 13.8333 106.833 41.5 144.5c27.6667 37.6667 59.5 56.5 95.5 56.5\nc21.3333 0 43.3333 -10.3333 66 -31c53.3333 -50.6667 113.333 -76 180 -76c76.6667 0 136.333 30.6667 179 92c8.66667 10 15.6667 15 21 15c11.3333 0 17 -6 17 -18c0 -2.66667 -2.66667 -8.33333 -8 -17zM188 363c28 0 52.5 17.8333 73.5 53.5s31.5 79.5 31.5 131.5\ns-10.5 95.8333 -31.5 131.5s-45.5 53.5 -73.5 53.5c-8 0 -16.5 -2.33333 -25.5 -7s-18.8333 -12.8333 -29.5 -24.5c-10.6667 -11.6667 -19.3333 -30.6667 -26 -57s-10 -58.5 -10 -96.5c0 -37.3333 3.33333 -69.3333 10 -96s15.3333 -45.8333 26 -57.5\nc10.6667 -11.6667 20.5 -19.8333 29.5 -24.5s17.5 -7 25.5 -7z"
            },
            "&#x26;": {
                x: 745,
                d: "M84 214l124 144c-25.3333 73.3333 -38 140.333 -38 201c0 46 12 82.6667 36 110s52 41 84 41c15.3333 0 28.5 -4.33333 39.5 -13s19 -19.8333 24 -33.5s8.66667 -26.6667 11 -39s3.5 -24.5 3.5 -36.5c0 -42.6667 -38 -109.667 -114 -201\nc33.3333 -88 87.6667 -179.667 163 -275c25.3333 28 53.6667 69.3333 85 124c44 74 66 116.333 66 127c0 12.6667 -5.66667 22.6667 -17 30s-25.6667 11 -43 11v26c19.3333 -1.33333 54.6667 -2 106 -2c41.3333 0 68.3333 0.666667 81 2v-26\nc-35.3333 -0.666667 -64.3333 -10.6667 -87 -30c-8.66667 -8 -29.3333 -40 -62 -96c-44 -80 -83 -140.333 -117 -181c13.3333 -15.3333 24.3333 -27.6667 33 -37c8.66667 -9.33333 22.8333 -20 42.5 -32c19.6667 -12 38.5 -18 56.5 -18c26 0 50.8333 9.66667 74.5 29\nc23.6667 19.3333 35.8333 46.6667 36.5 82h18c-0.666667 -40.6667 -13.8333 -73.6667 -39.5 -99c-25.6667 -25.3333 -56.8333 -38 -93.5 -38c-52.6667 0 -106.667 25.6667 -162 77c-54 -51.3333 -112 -77 -174 -77c-47.3333 0 -87.6667 13.8333 -121 41.5\nc-33.3333 27.6667 -50 61.8333 -50 102.5c0 31.3333 11.3333 60 34 86zM248 406c68 79.3333 102 140.333 102 183c0 6.66667 -0.5 14.5 -1.5 23.5s-3.16667 20.3333 -6.5 34s-9.5 25 -18.5 34s-19.8333 13.5 -32.5 13.5c-19.3333 0 -36.3333 -9.33333 -51 -28\ns-22 -48 -22 -88c0 -60 10 -117.333 30 -172zM215 341l-62 -71c-26 -30 -39 -67.3333 -39 -112c0 -37.3333 10 -71.3333 30 -102c20 -30.6667 48.6667 -46 86 -46c55.3333 0 106 21.6667 152 65c-67.3333 77.3333 -123 166 -167 266z"
            },
            "’": {
                x: 195,
                d: "M126 631c-7.33333 -12.6667 -19 -19 -35 -19c-11.3333 0 -21 3.66667 -29 11s-12 17.3333 -12 30s4 22.6667 12 30s17.6667 11 29 11c36 0 54 -32 54 -96c0 -20.6667 -2.5 -40.8333 -7.5 -60.5s-11 -36.5 -18 -50.5s-14.3333 -26.3333 -22 -37\nc-7.66667 -10.6667 -14.1667 -18.6667 -19.5 -24s-9 -8 -11 -8c-5.33333 0 -8 2.66667 -8 8c0 3.33333 2 7 6 11c42.6667 44.6667 64 98.6667 64 162c0 10 -1 20.6667 -3 32z"
            },
            "(": {
                x: 316,
                d: "M266 -244c0 -4 -2.33333 -6 -7 -6c-4.66667 0 -14.8333 7.16667 -30.5 21.5s-34.5 36 -56.5 65s-40.3333 59.1667 -55 90.5c-44.6667 96 -67 203.667 -67 323c0 115.333 21.3333 220.333 64 315c14.6667 33.3333 33.3333 65 56 95s42 52.3333 58 67s26.3333 22 31 22\nc4.66667 0 7 -1.66667 7 -5c0 -1.33333 -0.333333 -2.66667 -1 -4l-1 -2c-14.6667 -14.6667 -27.1667 -28.1667 -37.5 -40.5s-24.6667 -33.3333 -43 -63s-33.1667 -60.6667 -44.5 -93c-11.3333 -32.3333 -21.6667 -74.3333 -31 -126\nc-9.33333 -51.6667 -14 -107.167 -14 -166.5c0 -209.333 56.3333 -371.667 169 -487c2 -2 3 -4 3 -6z"
            },
            ")": {
                x: 316,
                d: "M266 249c0 -115.333 -21.3333 -220.333 -64 -315c-14.6667 -33.3333 -33.3333 -65 -56 -95c-22.6667 -30 -42 -52.3333 -58 -67s-26.3333 -22 -31 -22s-7 2 -7 6c0 0.666667 0.666667 2.33333 2 5c14.6667 14.6667 27.1667 28.1667 37.5 40.5s24.6667 33.3333 43 63\nc18.3333 29.6667 33.1667 60.6667 44.5 93c11.3333 32.3333 21.6667 74.3333 31 126c9.33333 51.6667 14 107.167 14 166.5c0 58.6667 -4.66667 113.833 -14 165.5s-19.6667 93.5 -31 125.5s-26.3333 63.1667 -45 93.5c-18.6667 30.3333 -33 51.3333 -43 63\ns-22.3333 25.1667 -37 40.5c-1.33333 2.66667 -2 4.33333 -2 5c0 4 2.33333 6 7 6s14.8333 -7.16667 30.5 -21.5c15.6667 -14.3333 34.5 -36 56.5 -65s40.3333 -59.1667 55 -90.5c44.6667 -96 67 -203.667 67 -323z"
            },
            "*": {
                x: 669,
                d: "M360 427l-14 -156l112 81c16.6667 12.6667 28 19 34 19c7.33333 0 13.6667 -2.83333 19 -8.5c5.33333 -5.66667 8 -12.1667 8 -19.5c0 -4.66667 -1 -8.66667 -3 -12s-4.33333 -5.83333 -7 -7.5s-7.33333 -4.16667 -14 -7.5l-138 -67c74 -34.6667 121 -57 141 -67\nc14 -6.66667 21 -15.3333 21 -26c0 -7.33333 -2.83333 -13.8333 -8.5 -19.5c-5.66667 -5.66667 -11.8333 -8.5 -18.5 -8.5c-3.33333 0 -9.33333 2.33333 -18 7l-128 93l15 -168c0 -17.3333 -9 -26 -27 -26c-6 0 -11.8333 2 -17.5 6s-8.5 10.6667 -8.5 20l15 168l-112 -81\nc-16.6667 -12.6667 -28 -19 -34 -19c-7.33333 0 -13.6667 2.83333 -19 8.5s-8 12.1667 -8 19.5c0 4.66667 1 8.66667 3 12s4.33333 5.83333 7 7.5s7.33333 4.16667 14 7.5l138 67l-142 68c-13.3333 6.66667 -20 15 -20 25c0 7.33333 2.83333 13.8333 8.5 19.5\ns11.8333 8.5 18.5 8.5c3.33333 0 9.33333 -2.33333 18 -7l128 -93l-14 155v13c-1.33333 6.66667 0.666667 12.6667 6 18s12 8 20 8c18.6667 0 27 -12.6667 25 -38z"
            },
            "+": {
                x: 927,
                d: "M481 232v-265c0 -20.6667 -6 -31 -18 -31c-11.3333 0 -17 10.3333 -17 31v265h-265c-20.6667 0 -31 6 -31 18c0 11.3333 10.3333 17 31 17h265v265c0 20.6667 6 31 18 31c11.3333 0 17 -10.3333 17 -31v-265h265c20.6667 0 31 -6 31 -18c0 -11.3333 -10.3333 -17 -31 -17\nh-265z"
            },
            ",": {
                x: 192,
                d: "M124 16c-8 -10.6667 -19 -16 -33 -16c-11.3333 0 -21 3.66667 -29 11c-8 7.33333 -12 17.3333 -12 30c0 12.6667 4 22.6667 12 30c8 7.33333 17.6667 11 29 11c34 0 51 -31.6667 51 -95c0 -33.3333 -6 -65 -18 -95s-23.6667 -51.8333 -35 -65.5\nc-11.3333 -13.6667 -18.6667 -20.5 -22 -20.5c-5.33333 0 -8 2.66667 -8 8c0 2.66667 1.66667 5.66667 5 9c41.3333 49.3333 62 104.333 62 165c0 12.6667 -0.666667 22 -2 28z"
            },
            "-": {
                x: null,
                d: "M726 230h-541c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h541c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5\ns-9.66667 -0.5 -17 -0.5z"
            },
            ".": {
                x: 182,
                d: "M132 41c0 -12 -4.16667 -21.8333 -12.5 -29.5c-8.33333 -7.66667 -17.8333 -11.5 -28.5 -11.5c-10.6667 0 -20.1667 3.83333 -28.5 11.5c-8.33333 7.66667 -12.5 17.5 -12.5 29.5s4.16667 21.8333 12.5 29.5c8.33333 7.66667 17.8333 11.5 28.5 11.5\nc10.6667 0 20.1667 -3.83333 28.5 -11.5c8.33333 -7.66667 12.5 -17.5 12.5 -29.5z"
            },
            "/": {
                x: 466,
                d: "M411 714l-324 -943c-4.66667 -13.3333 -11.3333 -20 -20 -20c-11.3333 0 -17 6 -17 18c0 2.66667 1.66667 8.33333 5 17l324 943c4.66667 13.3333 11.3333 20 20 20c11.3333 0 17 -6 17 -18c0 -2.66667 -1.66667 -8.33333 -5 -17z"
            },
            ":": {
                x: 182,
                d: "M132 389c0 -12 -4.16667 -21.8333 -12.5 -29.5s-17.8333 -11.5 -28.5 -11.5c-10.6667 0 -20.1667 3.83333 -28.5 11.5c-8.33333 7.66667 -12.5 17.5 -12.5 29.5s4.16667 21.8333 12.5 29.5c8.33333 7.66667 17.8333 11.5 28.5 11.5\nc10.6667 0 20.1667 -3.83333 28.5 -11.5s12.5 -17.5 12.5 -29.5zM132 41c0 -12 -4.16667 -21.8333 -12.5 -29.5c-8.33333 -7.66667 -17.8333 -11.5 -28.5 -11.5c-10.6667 0 -20.1667 3.83333 -28.5 11.5c-8.33333 7.66667 -12.5 17.5 -12.5 29.5s4.16667 21.8333 12.5 29.5\nc8.33333 7.66667 17.8333 11.5 28.5 11.5c10.6667 0 20.1667 -3.83333 28.5 -11.5c8.33333 -7.66667 12.5 -17.5 12.5 -29.5z"
            },
            ";": {
                x: 185,
                d: "M132 389c0 -12 -4.16667 -21.8333 -12.5 -29.5s-17.8333 -11.5 -28.5 -11.5c-10.6667 0 -20.1667 3.83333 -28.5 11.5c-8.33333 7.66667 -12.5 17.5 -12.5 29.5s4.16667 21.8333 12.5 29.5c8.33333 7.66667 17.8333 11.5 28.5 11.5\nc10.6667 0 20.1667 -3.83333 28.5 -11.5s12.5 -17.5 12.5 -29.5zM119 -11v21c-6.66667 -6.66667 -16 -10 -28 -10c-11.3333 0 -21 3.66667 -29 11c-8 7.33333 -12 17.3333 -12 30c0 12.6667 4 22.6667 12 30c8 7.33333 17.6667 11 29 11c29.3333 0 44 -30.3333 44 -91\nc0 -34.6667 -5.5 -67.3333 -16.5 -98c-11 -30.6667 -21.6667 -52.8333 -32 -66.5s-16.8333 -20.5 -19.5 -20.5c-5.33333 0 -8 3 -8 9c0 2 2 5.33333 6 10c36 50.6667 54 105.333 54 164z"
            },
            "=": {
                x: 727,
                d: "M647 321h-567c-20 0 -30 5.66667 -30 17c0 12 11.3333 18 34 18h559c22.6667 0 34 -6 34 -18c0 -11.3333 -10 -17 -30 -17zM643 143h-559c-22.6667 0 -34 6 -34 18c0 11.3333 10 17 30 17h567c20 0 30 -5.66667 30 -17c0 -12 -11.3333 -18 -34 -18z"
            },
            "?": {
                x: 439,
                d: "M215 225v-35c0 -6.66667 -0.166667 -11.1667 -0.5 -13.5s-1 -4.16667 -2 -5.5s-3.16667 -2 -6.5 -2c-4 0 -6.5 1.16667 -7.5 3.5s-1.5 8.16667 -1.5 17.5v39c0 94 30 173.333 90 238c8 8.66667 14.1667 16 18.5 22s8.66667 16.1667 13 30.5\nc4.33333 14.3333 6.5 30.8333 6.5 49.5c0 10.6667 -0.333333 19.6667 -1 27s-3 17.1667 -7 29.5s-9.83333 22.5 -17.5 30.5s-19.3333 15 -35 21c-15.6667 6 -34.5 9 -56.5 9c-29.3333 0 -56.5 -7.33333 -81.5 -22s-42.5 -36.6667 -52.5 -66c4 1.33333 8 2 12 2\nc9.33333 0 17.6667 -3.16667 25 -9.5s11 -15.1667 11 -26.5c0 -12.6667 -4 -21.8333 -12 -27.5s-16 -8.5 -24 -8.5c-3.33333 0 -7 0.333333 -11 1s-9.16667 4.33333 -15.5 11c-6.33333 6.66667 -9.5 15.6667 -9.5 27c0 35.3333 14.8333 66.6667 44.5 94\nc29.6667 27.3333 68.1667 41 115.5 41c57.3333 0 101.5 -12.5 132.5 -37.5s46.5 -58.5 46.5 -100.5c0 -43.3333 -18 -78.3333 -54 -105c-37.3333 -29.3333 -66.6667 -64.1667 -88 -104.5c-21.3333 -40.3333 -32 -83.5 -32 -129.5zM247 41c0 -11.3333 -4 -21 -12 -29\ns-17.6667 -12 -29 -12s-21 4 -29 12s-12 17.6667 -12 29c0 11.3333 4 21 12 29s17.6667 12 29 12s21 -4 29 -12s12 -17.6667 12 -29z"
            },
            "@": {
                x: 727,
                d: "M551 457v-242c0 -45.3333 12 -68 36 -68c16.6667 0 30.1667 5.5 40.5 16.5s17.6667 27.1667 22 48.5s7 40 8 56s1.5 36.6667 1.5 62c0 108.667 -29.6667 195.333 -89 260c-61.3333 64 -130.333 96 -207 96c-80 0 -149.167 -33 -207.5 -99\nc-58.3333 -66 -87.5 -146 -87.5 -240c0 -91.3333 28.5 -170.667 85.5 -238c57 -67.3333 128.5 -101 214.5 -101c86.6667 0 174.333 21 263 63c3.33333 2 11.3333 3 24 3c14 0 21 -2 21 -6c0 -3.33333 -13.6667 -11 -41 -23s-66.3333 -23.8333 -117 -35.5\nc-50.6667 -11.6667 -100.333 -17.5 -149 -17.5c-91.3333 0 -167.333 34.8333 -228 104.5c-60.6667 69.6667 -91 153.167 -91 250.5c0 100.667 31 185 93 253s135.667 102 221 102c36 0 72 -7.66667 108 -23s69.5 -37.5 100.5 -66.5s56.1667 -67.6667 75.5 -116\nc19.3333 -48.3333 29 -102.5 29 -162.5c0 -30.6667 -1 -56.6667 -3 -78c-2 -21.3333 -6.16667 -42.3333 -12.5 -63s-16 -36.1667 -29 -46.5s-29.5 -15.5 -49.5 -15.5c-22 0 -41.6667 7.16667 -59 21.5c-17.3333 14.3333 -26.3333 34.5 -27 60.5\nc-12 -20 -29.6667 -38.6667 -53 -56s-50.3333 -26 -81 -26c-49.3333 0 -92.8333 20.5 -130.5 61.5c-37.6667 41 -56.5 92.5 -56.5 154.5s18.6667 113.5 56 154.5c37.3333 41 81 61.5 131 61.5c52.6667 0 96.6667 -26 132 -78c4 -5.33333 6.33333 -8 7 -8h28\nc10 0 16 -1 18 -3s3 -7.66667 3 -17zM498 271v152c0 28.6667 -14.6667 57 -44 85c-28 26 -58 39 -90 39c-37.3333 0 -69.1667 -19.5 -95.5 -58.5c-26.3333 -39 -39.5 -86.1667 -39.5 -141.5s13.1667 -102.5 39.5 -141.5c26.3333 -39 58.1667 -58.5 95.5 -58.5\nc22.6667 0 45 7 67 21s40.3333 34.6667 55 62c8 14 12 27.6667 12 41z"
            },
            "[": {
                x: 229,
                d: "M179 -249h-129v998h129v-35h-94v-928h94v-35z"
            },
            "“": {
                x: 378,
                d: "M69 480c7.33333 12.6667 19 19 35 19c11.3333 0 21 -3.66667 29 -11s12 -17.3333 12 -30s-4 -22.6667 -12 -30s-17.6667 -11 -29 -11c-36 0 -54 32 -54 96c0 20.6667 2.5 40.8333 7.5 60.5s11 36.5 18 50.5s14.3333 26.3333 22 37\nc7.66667 10.6667 14.1667 18.6667 19.5 24s9 8 11 8c5.33333 0 8 -2.66667 8 -8c0 -3.33333 -2 -7 -6 -11c-42.6667 -44.6667 -64 -98.6667 -64 -162c0 -10.6667 1 -21.3333 3 -32zM252 480c7.33333 12.6667 19 19 35 19c11.3333 0 21 -3.66667 29 -11s12 -17.3333 12 -30\ns-4 -22.6667 -12 -30s-17.6667 -11 -29 -11c-36 0 -54 32 -54 96c0 20.6667 2.5 40.8333 7.5 60.5s11 36.5 18 50.5s14.3333 26.3333 22 37s14.1667 18.6667 19.5 24s9 8 11 8c5.33333 0 8 -2.66667 8 -8c0 -3.33333 -2 -7 -6 -11c-42.6667 -44.6667 -64 -98.6667 -64 -162\nc0 -10.6667 1 -21.3333 3 -32z"
            },
            "]": {
                x: 229,
                d: "M179 749v-998h-129v35h94v928h-94v35h129z"
            },
            "ˆ": {
                x: 346,
                d: "M173 694l123 -136l-12 -12l-111 108l-111 -108l-12 12z"
            },
            "˙": {
                x: 181,
                d: "M131 616c0 -11.3333 -3.83333 -21 -11.5 -29s-17.5 -12 -29.5 -12c-10.6667 0 -20 3.83333 -28 11.5s-12 17.5 -12 29.5c0 11.3333 3.83333 21 11.5 29c7.66667 8 17.5 12 29.5 12c10.6667 0 20 -3.83333 28 -11.5s12 -17.5 12 -29.5z"
            },
            "‘": {
                x: 195,
                d: "M69 480c7.33333 12.6667 19 19 35 19c11.3333 0 21 -3.66667 29 -11s12 -17.3333 12 -30s-4 -22.6667 -12 -30s-17.6667 -11 -29 -11c-36 0 -54 32 -54 96c0 20.6667 2.5 40.8333 7.5 60.5s11 36.5 18 50.5s14.3333 26.3333 22 37\nc7.66667 10.6667 14.1667 18.6667 19.5 24s9 8 11 8c5.33333 0 8 -2.66667 8 -8c0 -3.33333 -2 -7 -6 -11c-42.6667 -44.6667 -64 -98.6667 -64 -162c0 -10.6667 1 -21.3333 3 -32z"
            },
            a: {
                x: 545,
                d: "M311 119l49 196c2.66667 5.33333 4 10.6667 4 16c0 6 -1.66667 15.1667 -5 27.5s-11.5 25.8333 -24.5 40.5s-29.5 22 -49.5 22s-40.8333 -9.16667 -62.5 -27.5s-40.8333 -44.5 -57.5 -78.5c-10.6667 -23.3333 -21.6667 -57.5 -33 -102.5\nc-11.3333 -45 -17 -80.5 -17 -106.5c0 -30 5.66667 -53.5 17 -70.5c11.3333 -17 27 -25.5 47 -25.5c38 0 75.6667 23.6667 113 71c8.66667 12 15 24.6667 19 38zM375 375c5.33333 31.3333 19.3333 47 42 47c7.33333 0 13.5 -2.33333 18.5 -7s7.5 -10.6667 7.5 -18\nc0 -4 -15.3333 -68 -46 -192c-2.66667 -9.33333 -6 -22.1667 -10 -38.5s-7.33333 -28.8333 -10 -37.5c-8 -34.6667 -12 -59 -12 -73c0 -30.6667 10.3333 -46 31 -46c12.6667 0 24.1667 6.66667 34.5 20c10.3333 13.3333 18.1667 27.5 23.5 42.5s11 34.8333 17 59.5\nc2 8.66667 3.83333 14.1667 5.5 16.5s4.5 3.5 8.5 3.5c6.66667 0 10 -3 10 -9c0 -2 -1.33333 -8.5 -4 -19.5s-6.5 -24.5 -11.5 -40.5s-9.83333 -29 -14.5 -39c-18 -36 -42 -54 -72 -54c-18.6667 0 -36.6667 6 -54 18s-28.3333 31.3333 -33 58\nc-42.6667 -50.6667 -86 -76 -130 -76c-35.3333 0 -65.1667 14.1667 -89.5 42.5c-24.3333 28.3333 -36.5 66.5 -36.5 114.5c0 73.3333 24.8333 140.667 74.5 202c49.6667 61.3333 103.167 92 160.5 92c41.3333 0 71.3333 -22 90 -66z"
            },
            b: {
                x: 458,
                d: "M236 669l-73 -291c40 42 79.3333 63 118 63c37.3333 0 67.8333 -14.6667 91.5 -44s35.5 -67 35.5 -113c0 -72.6667 -24.8333 -139.833 -74.5 -201.5c-49.6667 -61.6667 -103.5 -92.5 -161.5 -92.5c-34.6667 0 -63.6667 13.6667 -87 41\nc-23.3333 27.3333 -35 65.3333 -35 114c0 20 1.66667 38.3333 5 55c1.33333 6 25 101 71 285l24 96c0.666667 4 2.16667 10.5 4.5 19.5s4.16667 16.5 5.5 22.5s2 10 2 12c0 4.66667 -0.5 8 -1.5 10s-5.5 4 -13.5 6s-20 3 -36 3c-13.3333 0 -20 3.33333 -20 10\nc0 8.66667 1.83333 14 5.5 16c3.66667 2 12.1667 3.66667 25.5 5c6 0.666667 14.5 1.5 25.5 2.5s19.1667 1.5 24.5 1.5c30 3.33333 48.3333 5 55 5c8 0 12 -3.33333 12 -10c0 -2 -1 -7 -3 -15zM173 10c22 0 43.6667 9.83333 65 29.5\nc21.3333 19.6667 38.6667 43.8333 52 72.5c12.6667 26 24.6667 62 36 108s17 81 17 105c0 28 -5.5 51 -16.5 69s-26.8333 27 -47.5 27c-20 0 -40.6667 -7.83333 -62 -23.5s-37.5 -30.6667 -48.5 -45s-17.1667 -23.8333 -18.5 -28.5c-6 -19.3333 -13.6667 -49.3333 -23 -90\nc-14 -54.6667 -21 -95.3333 -21 -122c0 -36 6.5 -62 19.5 -78s28.8333 -24 47.5 -24z"
            },
            c: {
                x: 478,
                d: "M401 376c-14 30 -43.3333 45 -88 45c-29.3333 0 -56.8333 -10.1667 -82.5 -30.5c-25.6667 -20.3333 -45.8333 -43.8333 -60.5 -70.5c-16 -30.6667 -28.8333 -66.3333 -38.5 -107c-9.66667 -40.6667 -14.5 -71.6667 -14.5 -93c0 -29.3333 7.33333 -55 22 -77\nc14.6667 -22 37.6667 -33 69 -33c28.6667 0 61.6667 7.33333 99 22c37.3333 14.6667 70 40.6667 98 78c6.66667 6.66667 11 10 13 10s4.16667 -1.16667 6.5 -3.5s3.5 -4.83333 3.5 -7.5c0 -3.33333 -3.16667 -9.16667 -9.5 -17.5s-16.1667 -18.3333 -29.5 -30\nc-13.3333 -11.6667 -28.5 -22.8333 -45.5 -33.5c-17 -10.6667 -37.8333 -19.6667 -62.5 -27s-49.6667 -11 -75 -11c-48.6667 0 -86.8333 16.1667 -114.5 48.5c-27.6667 32.3333 -41.5 71.5 -41.5 117.5c0 71.3333 27.3333 136.667 82 196c54.6667 59.3333 114.667 89 180 89\nc34 0 61.6667 -8 83 -24s32 -36.3333 32 -61c0 -18.6667 -5.16667 -33.3333 -15.5 -44s-22.1667 -16 -35.5 -16c-10 0 -18.1667 2.83333 -24.5 8.5s-9.5 13.5 -9.5 23.5c0 14.6667 5.66667 26.6667 17 36c9.33333 8 23.3333 12 42 12z"
            },
            d: {
                x: 566,
                d: "M513 669l-141 -560c-4.66667 -18.6667 -7 -36.3333 -7 -53c0 -30.6667 10.3333 -46 31 -46c12.6667 0 24.1667 6.66667 34.5 20c10.3333 13.3333 18.1667 27.5 23.5 42.5s11 34.8333 17 59.5c2 8.66667 3.83333 14.1667 5.5 16.5s4.5 3.5 8.5 3.5c6.66667 0 10 -3 10 -9\nc0 -2 -1.33333 -8.5 -4 -19.5s-6.5 -24.5 -11.5 -40.5s-9.83333 -29 -14.5 -39c-18 -36 -42 -54 -72 -54c-18.6667 0 -36.6667 6 -54 18s-28.3333 31.3333 -33 58c-42.6667 -50.6667 -86 -76 -130 -76c-35.3333 0 -65.1667 14.1667 -89.5 42.5\nc-24.3333 28.3333 -36.5 66.5 -36.5 114.5c0 73.3333 24.8333 140.667 74.5 202c49.6667 61.3333 103.167 92 160.5 92c41.3333 0 71.3333 -22 90 -66l61 243c2 6 3 11.6667 3 17c0 4 -0.666667 7.16667 -2 9.5s-5.83333 4.5 -13.5 6.5s-19.1667 3 -34.5 3\nc-14.6667 0 -22 3.33333 -22 10c0 8.66667 2 14 6 16s12.6667 3.66667 26 5c6 0.666667 14.5 1.5 25.5 2.5s19.1667 1.5 24.5 1.5c16.6667 3.33333 35 5 55 5c8 0 12 -3.33333 12 -10c0 -2 -1 -7 -3 -15zM311 119l49 196c2.66667 5.33333 4 10.6667 4 16\nc0 6 -1.66667 15.1667 -5 27.5s-11.5 25.8333 -24.5 40.5s-29.5 22 -49.5 22s-40.8333 -9.16667 -62.5 -27.5s-40.8333 -44.5 -57.5 -78.5c-10.6667 -23.3333 -21.6667 -57.5 -33 -102.5c-11.3333 -45 -17 -80.5 -17 -106.5c0 -30 5.66667 -53.5 17 -70.5\nc11.3333 -17 27 -25.5 47 -25.5c38 0 75.6667 23.6667 113 71c8.66667 12 15 24.6667 19 38z"
            },
            e: {
                x: 473,
                d: "M184 232h-53c-10 -42.6667 -15 -77 -15 -103c0 -37.3333 7.5 -66.5 22.5 -87.5s36.5 -31.5 64.5 -31.5c28.6667 0 61.6667 7.33333 99 22c37.3333 14.6667 70 40.6667 98 78c6.66667 6.66667 11 10 13 10s4.16667 -1.16667 6.5 -3.5s3.5 -4.83333 3.5 -7.5\nc0 -3.33333 -3.16667 -9.16667 -9.5 -17.5s-16.1667 -18.3333 -29.5 -30c-13.3333 -11.6667 -28.5 -22.8333 -45.5 -33.5c-17 -10.6667 -37.8333 -19.6667 -62.5 -27c-24.6667 -7.33333 -49.6667 -11 -75 -11c-45.3333 0 -81.8333 16.5 -109.5 49.5\nc-27.6667 33 -41.5 75.8333 -41.5 128.5c0 56 14.3333 105.5 43 148.5c28.6667 43 62 74.5 100 94.5s75.6667 30 113 30c32 0 57.3333 -8.16667 76 -24.5s28 -36.1667 28 -59.5c0 -9.33333 -1.33333 -19.1667 -4 -29.5s-10.8333 -23.3333 -24.5 -39\ns-31.8333 -27.8333 -54.5 -36.5c-35.3333 -13.3333 -83 -20 -143 -20zM136 252h42c134.667 0 202 35 202 105c0 19.3333 -6.83333 34.8333 -20.5 46.5s-31.5 17.5 -53.5 17.5c-10.6667 0 -22.1667 -1.83333 -34.5 -5.5s-27.3333 -10.5 -45 -20.5s-34.6667 -27.3333 -51 -52\ns-29.5 -55 -39.5 -91z"
            },
            f: {
                x: 595,
                d: "M445 402h-85c-25.3333 -150.667 -49.3333 -275 -72 -373c-34 -155.333 -85.6667 -233 -155 -233c-21.3333 0 -40.5 5.83333 -57.5 17.5s-25.5 27.5 -25.5 47.5c0 17.3333 5.33333 30.8333 16 40.5c10.6667 9.66667 22 14.5 34 14.5c10 0 18.1667 -2.83333 24.5 -8.5\nc6.33333 -5.66667 9.5 -13.5 9.5 -23.5c0 -3.33333 -0.5 -7.66667 -1.5 -13c-1 -5.33333 -5.66667 -12.3333 -14 -21s-20.1667 -13.6667 -35.5 -15c12 -12.6667 28.6667 -19 50 -19c12 0 22.3333 3.83333 31 11.5s16.1667 20.1667 22.5 37.5\nc6.33333 17.3333 11.3333 33.1667 15 47.5c3.66667 14.3333 8.16667 35.5 13.5 63.5c6.66667 31.3333 15.3333 74.6667 26 130c10.6667 55.3333 21.8333 113.833 33.5 175.5c11.6667 61.6667 19.1667 101.833 22.5 120.5h-64c-10.6667 0 -17.6667 0.5 -21 1.5\ns-5 4.16667 -5 9.5c0 8 2 13 6 15s11.6667 3 23 3h67c18 104 35 171.333 51 202c10.6667 20 25.6667 36.8333 45 50.5s39.3333 20.5 60 20.5c23.3333 0 43.5 -5.83333 60.5 -17.5s25.5 -27.5 25.5 -47.5c0 -17.3333 -5.33333 -30.8333 -16 -40.5s-22 -14.5 -34 -14.5\nc-10 0 -18.1667 2.83333 -24.5 8.5s-9.5 13.5 -9.5 23.5c0 10.6667 4.16667 21.1667 12.5 31.5s21.1667 16.5 38.5 18.5c-13.3333 12 -30.6667 18 -52 18c-12.6667 0 -23.8333 -4.66667 -33.5 -14s-16.1667 -20.3333 -19.5 -33c-7.33333 -30.6667 -21 -99.3333 -41 -206h81\nh11.5c2.33333 0 4.83333 -0.333333 7.5 -1s4.5 -1.66667 5.5 -3s1.5 -3.33333 1.5 -6c0 -8.66667 -1.83333 -14 -5.5 -16s-11.1667 -3 -22.5 -3z"
            },
            g: {
                x: 549,
                d: "M370 127l47 192l3 14c0 5.33333 -1.66667 14 -5 26s-11.6667 25.3333 -25 40s-29.6667 22 -49 22c-20.6667 0 -41.5 -8.83333 -62.5 -26.5s-38.8333 -40.8333 -53.5 -69.5c-11.3333 -23.3333 -22.8333 -57.8333 -34.5 -103.5\nc-11.6667 -45.6667 -17.5 -81.1667 -17.5 -106.5c0 -32 6.16667 -55.8333 18.5 -71.5c12.3333 -15.6667 27.5 -23.5 45.5 -23.5c38.6667 0 76.6667 24 114 72c9.33333 11.3333 15.6667 23 19 35zM432 375c3.33333 31.3333 17 47 41 47c7.33333 0 13.5 -2.33333 18.5 -7\ns7.5 -10.6667 7.5 -18c0 -2.66667 -1 -8 -3 -16l-111 -448c-8 -33.3333 -30.3333 -64.5 -67 -93.5s-84 -43.5 -142 -43.5c-43.3333 0 -75.1667 4.5 -95.5 13.5c-20.3333 9 -30.5 23.5 -30.5 43.5c0 16 5.16667 28.8333 15.5 38.5c10.3333 9.66667 21.8333 14.5 34.5 14.5\nc10.6667 0 19 -3.16667 25 -9.5c6 -6.33333 9 -13.8333 9 -22.5c0 -8 -3.16667 -17 -9.5 -27c-6.33333 -10 -16.5 -17 -30.5 -21c20.6667 -6.66667 47.3333 -10 80 -10c40 0 73.6667 13.6667 101 41c16.6667 16 28.1667 31.1667 34.5 45.5\nc6.33333 14.3333 13.5 37.5 21.5 69.5l22 90c-37.3333 -41.3333 -76.6667 -62 -118 -62c-34.6667 0 -64.5 13.5 -89.5 40.5s-37.5 65.1667 -37.5 114.5c0 72.6667 24.8333 138.5 74.5 197.5s102.5 88.5 158.5 88.5c40.6667 0 71 -22 91 -66z"
            },
            h: {
                x: 580,
                d: "M276 669l-77 -307c41.3333 52.6667 90.6667 79 148 79c36.6667 0 64.3333 -9.66667 83 -29s28 -44.6667 28 -76c0 -37.3333 -21 -112 -63 -224c-10.6667 -29.3333 -16 -52.3333 -16 -69c0 -22 8.66667 -33 26 -33c20 0 38.8333 10.5 56.5 31.5s32.1667 51.1667 43.5 90.5\nc2 6.66667 3.5 11 4.5 13s2.16667 3.66667 3.5 5c1.33333 1.33333 3.66667 2 7 2c6.66667 0 10 -3 10 -9c0 -2 -1.33333 -8 -4 -18s-7.5 -22.8333 -14.5 -38.5c-7 -15.6667 -15 -30.5 -24 -44.5s-21.1667 -26.1667 -36.5 -36.5c-15.3333 -10.3333 -31.6667 -15.5 -49 -15.5\nc-23.3333 0 -42.3333 7.66667 -57 23c-14.6667 15.3333 -22 34.6667 -22 58c0 12 4.66667 30.3333 14 55c40.6667 110.667 61 185.667 61 225c0 46.6667 -18 70 -54 70c-55.3333 0 -102.333 -29.6667 -141 -89c-12.6667 -18.6667 -22.6667 -42.6667 -30 -72\nc-1.33333 -7.33333 -4 -18.1667 -8 -32.5s-6.66667 -25.1667 -8 -32.5l-45 -181c-7.33333 -16 -19 -24 -35 -24c-18 0 -27 8.66667 -27 26c0 5.33333 1.33333 13 4 23l145 579c2 6 3 11.6667 3 17c0 4 -0.666667 7.16667 -2 9.5s-5.83333 4.5 -13.5 6.5s-19.1667 3 -34.5 3\nc-14.6667 0 -22 3.33333 -22 10c0 8.66667 2 14 6 16s12.6667 3.66667 26 5c6 0.666667 14.5 1.5 25.5 2.5s19.1667 1.5 24.5 1.5c16.6667 3.33333 35 5 55 5c8 0 12 -3.33333 12 -10c0 -2 -1 -7 -3 -15z"
            },
            i: {
                x: 356,
                d: "M306 143c0 -3.33333 -2.5 -12.3333 -7.5 -27c-5 -14.6667 -12.1667 -31.8333 -21.5 -51.5c-9.33333 -19.6667 -22.8333 -37 -40.5 -52s-37.1667 -22.5 -58.5 -22.5c-23.3333 0 -42.3333 7.66667 -57 23c-14.6667 15.3333 -22 34.6667 -22 58c0 12 4 28.6667 12 50l70 186\nc14 38.6667 21 65.6667 21 81c0 22 -8.66667 33 -26 33c-20 0 -39 -10.5 -57 -31.5s-32.6667 -51.8333 -44 -92.5c-2 -8 -3.83333 -13 -5.5 -15s-4.5 -3 -8.5 -3c-7.33333 0 -11 3 -11 9c0 4 2.5 13.3333 7.5 28s12.3333 31.6667 22 51s23.3333 36.5 41 51.5\nc17.6667 15 37.1667 22.5 58.5 22.5c23.3333 0 42.3333 -7.83333 57 -23.5s22 -34.5 22 -56.5c0 -12 -3.33333 -27 -10 -45l-70 -186c-15.3333 -42 -23 -71 -23 -87c0 -22 8.66667 -33 26 -33c18.6667 0 37 9.83333 55 29.5c18 19.6667 33 50.5 45 92.5\nc2 6.66667 3.5 11 4.5 13s2.16667 3.66667 3.5 5s3.66667 2 7 2c6.66667 0 10 -3 10 -9zM298 624c0 -11.3333 -5 -22.1667 -15 -32.5s-21.6667 -15.5 -35 -15.5c-8 0 -15.5 2.66667 -22.5 8s-10.5 13.6667 -10.5 25c0 12.6667 5.16667 23.8333 15.5 33.5\ns21.5 14.5 33.5 14.5c10 0 18.1667 -3.5 24.5 -10.5s9.5 -14.5 9.5 -22.5z"
            },
            j: {
                x: 504,
                d: "M413 317l-93 -370c-12 -46.6667 -36.3333 -83.5 -73 -110.5c-36.6667 -27 -74 -40.5 -112 -40.5c-22.6667 0 -42.5 4.83333 -59.5 14.5s-25.5 24.1667 -25.5 43.5c0 14.6667 5 27 15 37s21.6667 15 35 15c10.6667 0 19 -3.16667 25 -9.5c6 -6.33333 9 -13.8333 9 -22.5\nc0 -12 -4.16667 -22.3333 -12.5 -31c-8.33333 -8.66667 -18.5 -14.3333 -30.5 -17c12.6667 -6.66667 27.3333 -10 44 -10c26.6667 0 51 12.1667 73 36.5c22 24.3333 38 55.5 48 93.5l95 377c4.66667 20.6667 7 38 7 52c0 30.6667 -10.6667 46 -32 46\ns-43.3333 -10.1667 -66 -30.5c-22.6667 -20.3333 -43.3333 -52.8333 -62 -97.5c-6 -8.66667 -10.6667 -13.3333 -14 -14c-6.66667 0 -10 3 -10 9c0 2 2 8.16667 6 18.5s10.5 23.1667 19.5 38.5s19.3333 30.1667 31 44.5s26.3333 26.5 44 36.5s35.8333 15 54.5 15\nc24 0 44.6667 -8.16667 62 -24.5s26 -38.1667 26 -65.5c0 -12 -1.33333 -23.3333 -4 -34zM454 624c0 -12.6667 -5.16667 -23.8333 -15.5 -33.5s-21.5 -14.5 -33.5 -14.5c-10 0 -18.1667 3.5 -24.5 10.5s-9.5 14.5 -9.5 22.5c0 11.3333 5 22.1667 15 32.5\ns21.6667 15.5 35 15.5c8 0 15.5 -2.66667 22.5 -8s10.5 -13.6667 10.5 -25z"
            },
            l: {
                x: 311,
                d: "M258 669l-141 -560c-4.66667 -18.6667 -7 -36.3333 -7 -53c0 -30.6667 10 -46 30 -46c18 0 32.5 10.1667 43.5 30.5c11 20.3333 21.8333 50.8333 32.5 91.5c2 8.66667 3.83333 14.1667 5.5 16.5s4.5 3.5 8.5 3.5c6.66667 0 10 -3 10 -9c0 -2 -1.33333 -8.66667 -4 -20\nc-2.66667 -11.3333 -6.5 -25 -11.5 -41s-10.1667 -29 -15.5 -39c-18 -35.3333 -41.6667 -53 -71 -53c-25.3333 0 -46.3333 8.66667 -63 26c-16.6667 17.3333 -25 38.6667 -25 64c0 11.3333 1.66667 23 5 35l124 496c3.33333 12 5 20 5 24c0 4.66667 -0.5 8 -1.5 10\ns-5.5 4 -13.5 6s-20 3 -36 3c-13.3333 0 -20 3.33333 -20 10c0 8.66667 1.83333 14 5.5 16s12.1667 3.66667 25.5 5c6 0.666667 14.5 1.5 25.5 2.5s19.1667 1.5 24.5 1.5c30 3.33333 48.3333 5 55 5c8 0 12 -3.33333 12 -10c0 -2 -1 -7 -3 -15z"
            },
            m: {
                x: 900,
                d: "M229 293l-33 -132l-22 -90c-8.66667 -35.3333 -14 -55.3333 -16 -60c-7.33333 -14 -18.6667 -21 -34 -21c-7.33333 0 -13.5 2.33333 -18.5 7c-5 4.66667 -7.5 10.6667 -7.5 18c0 7.33333 6 33.3333 18 78c7.33333 27.3333 14 54.6667 20 82l28 108\nc11.3333 50 17 80.6667 17 92c0 30.6667 -10.3333 46 -31 46c-18 0 -32.5 -10.5 -43.5 -31.5s-21.1667 -49.8333 -30.5 -86.5c-2.66667 -11.3333 -4.83333 -18.1667 -6.5 -20.5s-4.5 -3.5 -8.5 -3.5c-7.33333 0 -11 3 -11 9c0 2 1.33333 8.5 4 19.5s6.66667 24.6667 12 41\nc5.33333 16.3333 10.6667 29.8333 16 40.5c17.3333 34.6667 41 52 71 52c23.3333 0 43.5 -7.83333 60.5 -23.5s26.1667 -37.1667 27.5 -64.5c42 58.6667 93.3333 88 154 88c35.3333 0 62.3333 -9 81 -27s28.6667 -41.3333 30 -70c44 64.6667 97.6667 97 161 97\nc36.6667 0 64.3333 -9.66667 83 -29s28 -44.6667 28 -76c0 -37.3333 -21 -112 -63 -224c-10.6667 -29.3333 -16 -52.3333 -16 -69c0 -22 8.66667 -33 26 -33c20 0 38.8333 10.5 56.5 31.5s32.1667 51.1667 43.5 90.5c2 6.66667 3.5 11 4.5 13s2.16667 3.66667 3.5 5\ns3.66667 2 7 2c6.66667 0 10 -3 10 -9c0 -2 -1.33333 -8 -4 -18s-7.5 -22.8333 -14.5 -38.5c-7 -15.6667 -15 -30.5 -24 -44.5s-21.1667 -26.1667 -36.5 -36.5c-15.3333 -10.3333 -31.6667 -15.5 -49 -15.5c-23.3333 0 -42.3333 7.66667 -57 23\nc-14.6667 15.3333 -22 34.6667 -22 58c0 12 4.66667 30.3333 14 55c40.6667 110.667 61 185.667 61 225c0 46.6667 -18 70 -54 70c-20.6667 0 -40.3333 -4.33333 -59 -13s-34 -19 -46 -31s-22.6667 -24.8333 -32 -38.5s-16 -24.8333 -20 -33.5s-6.33333 -14.3333 -7 -17\nl-60 -239c-4 -15.3333 -7 -26.1667 -9 -32.5s-6 -12.3333 -12 -18s-13.6667 -8.5 -23 -8.5c-7.33333 0 -13.5 2.33333 -18.5 7c-5 4.66667 -7.5 10.6667 -7.5 18c0 4.66667 3.33333 19.6667 10 45c2.66667 13.3333 12.3333 51.6667 29 115l25 103\nc8 31.3333 12 55.6667 12 73c0 46.6667 -18 70 -54 70c-37.3333 0 -70.3333 -13.3333 -99 -40c-11.3333 -9.33333 -22.1667 -21.1667 -32.5 -35.5c-10.3333 -14.3333 -17.8333 -25.8333 -22.5 -34.5s-7.66667 -14.6667 -9 -18z"
            },
            n: {
                x: 628,
                d: "M229 293l-33 -132l-22 -90c-8.66667 -35.3333 -14 -55.3333 -16 -60c-7.33333 -14 -18.6667 -21 -34 -21c-7.33333 0 -13.5 2.33333 -18.5 7c-5 4.66667 -7.5 10.6667 -7.5 18c0 7.33333 6 33.3333 18 78c7.33333 27.3333 14 54.6667 20 82l28 108\nc11.3333 50 17 80.6667 17 92c0 30.6667 -10.3333 46 -31 46c-18 0 -32.3333 -10.1667 -43 -30.5c-10.6667 -20.3333 -21 -49.5 -31 -87.5c-2.66667 -11.3333 -4.83333 -18.1667 -6.5 -20.5s-4.5 -3.5 -8.5 -3.5c-7.33333 0 -11 3 -11 9c0 2 1.33333 8.33333 4 19\ns6.66667 24.1667 12 40.5c5.33333 16.3333 10.6667 29.8333 16 40.5c18 35.3333 41.6667 53 71 53c23.3333 0 43.5 -7.83333 60.5 -23.5s26.1667 -37.1667 27.5 -64.5c42 58.6667 93.3333 88 154 88c36.6667 0 64.3333 -9.66667 83 -29s28 -44.6667 28 -76\nc0 -36 -20.6667 -110.667 -62 -224c-11.3333 -26.6667 -17 -49.6667 -17 -69c0 -22 8.66667 -33 26 -33c20 0 38.8333 10.3333 56.5 31c17.6667 20.6667 32.1667 51 43.5 91c2 6.66667 3.5 11 4.5 13s2.16667 3.66667 3.5 5s3.66667 2 7 2c6.66667 0 10 -3 10 -9\nc0 -2 -1.33333 -8 -4 -18s-7.5 -22.8333 -14.5 -38.5c-7 -15.6667 -15 -30.5 -24 -44.5s-21.1667 -26.1667 -36.5 -36.5c-15.3333 -10.3333 -31.6667 -15.5 -49 -15.5c-23.3333 0 -42.3333 7.66667 -57 23c-14.6667 15.3333 -22 34.6667 -22 58c0 12 4.66667 30.3333 14 55\nc40.6667 110 61 185 61 225c0 46.6667 -18 70 -54 70c-37.3333 0 -70.3333 -13.3333 -99 -40c-11.3333 -9.33333 -22.1667 -21.1667 -32.5 -35.5c-10.3333 -14.3333 -17.8333 -25.8333 -22.5 -34.5s-7.66667 -14.6667 -9 -18z"
            },
            o: {
                x: 515,
                d: "M465 275c0 -70.6667 -27.1667 -135.833 -81.5 -195.5c-54.3333 -59.6667 -114.5 -89.5 -180.5 -89.5c-45.3333 0 -82.1667 15.6667 -110.5 47c-28.3333 31.3333 -42.5 71 -42.5 119c0 70.6667 27.1667 135.833 81.5 195.5c54.3333 59.6667 114.5 89.5 180.5 89.5\nc45.3333 0 82.1667 -15.6667 110.5 -47s42.5 -71 42.5 -119zM204 10c22 0 45.1667 7.66667 69.5 23c24.3333 15.3333 46.1667 38.6667 65.5 70c17.3333 28 31.5 63.6667 42.5 107s16.5 77 16.5 101c0 34 -8.16667 60.8333 -24.5 80.5s-37.1667 29.5 -62.5 29.5\nc-23.3333 0 -47.6667 -8.16667 -73 -24.5c-25.3333 -16.3333 -48.3333 -42.5 -69 -78.5c-13.3333 -24 -25.3333 -57 -36 -99c-10.6667 -42 -16 -75 -16 -99c0 -34 8.16667 -60.8333 24.5 -80.5c16.3333 -19.6667 37.1667 -29.5 62.5 -29.5z"
            },
            p: {
                x: 609,
                d: "M124 -127l113 450c4.66667 20.6667 7 38 7 52c0 30.6667 -10.3333 46 -31 46c-18 0 -32.5 -10.5 -43.5 -31.5s-21.1667 -49.8333 -30.5 -86.5c-2.66667 -11.3333 -4.83333 -18.1667 -6.5 -20.5s-4.5 -3.5 -8.5 -3.5c-7.33333 0 -11 3 -11 9c0 2 1.33333 8.5 4 19.5\ns6.66667 24.6667 12 41c5.33333 16.3333 10.6667 29.8333 16 40.5c17.3333 34.6667 41 52 71 52c21.3333 0 40.1667 -6.66667 56.5 -20s26.5 -32 30.5 -56c6.66667 8.66667 14.8333 17.6667 24.5 27s24.6667 19.8333 45 31.5s40.1667 17.5 59.5 17.5\nc37.3333 0 67.8333 -14.6667 91.5 -44c23.6667 -29.3333 35.5 -67 35.5 -113c0 -72.6667 -25 -139.833 -75 -201.5c-50 -61.6667 -103.333 -92.5 -160 -92.5c-42.6667 0 -72.6667 22.3333 -90 67c-34 -130 -51 -199 -51 -207c0 -10 16.3333 -15 49 -15\nc10 0 16.5 -0.5 19.5 -1.5s4.5 -4.16667 4.5 -9.5c0 -12 -6 -18 -18 -18c-7.33333 0 -23 0.333333 -47 1s-39.3333 1 -46 1h-43c-4.66667 0 -11.3333 -0.333333 -20 -1s-15.3333 -1 -20 -1c-8 0 -12 3.33333 -12 10c0 8.66667 1.83333 14 5.5 16s9.16667 3 16.5 3\nc19.3333 0 31.8333 2.33333 37.5 7s10.5 15 14.5 31zM297 312l-49 -196c-2 -10 -3 -15.3333 -3 -16c0 -5.33333 1.5 -14 4.5 -26s11.1667 -25.6667 24.5 -41c13.3333 -15.3333 30 -23 50 -23c22 0 43.6667 9.83333 65 29.5c21.3333 19.6667 38.6667 43.8333 52 72.5\nc12.6667 26 24.6667 62 36 108s17 81 17 105c0 28 -5.5 51 -16.5 69s-26.8333 27 -47.5 27c-26.6667 0 -54 -12.6667 -82 -38c-28.6667 -24.6667 -45.6667 -48.3333 -51 -71z"
            },
            q: {
                x: 502,
                d: "M452 431l-139 -562c-2.66667 -11.3333 -4 -17.6667 -4 -19c0 -10 16.6667 -15 50 -15c15.3333 0 23 -3.33333 23 -10c0 -12.6667 -6 -19 -18 -19c-4.66667 0 -12.3333 0.333333 -23 1s-18.6667 1 -24 1h-102c-4.66667 0 -12.3333 -0.333333 -23 -1s-18.3333 -1 -23 -1\nc-8.66667 0 -13 3.33333 -13 10c0 8.66667 1.66667 14 5 16s8.66667 3 16 3c18.6667 0.666667 31.5 1.33333 38.5 2s13.5 3.16667 19.5 7.5s10.3333 11.5 13 21.5l9 36l38 150l-1 1c-38.6667 -42 -78 -63 -118 -63c-35.3333 0 -65.1667 14.1667 -89.5 42.5\nc-24.3333 28.3333 -36.5 66.5 -36.5 114.5c0 73.3333 24.8333 140.667 74.5 202c49.6667 61.3333 103.167 92 160.5 92c42 0 72.6667 -24 92 -72c8.66667 16 20.6667 31.8333 36 47.5s25.3333 23.5 30 23.5c6 0 9 -3 9 -9zM311 119l49 196c2.66667 5.33333 4 10.6667 4 16\nc0 6 -1.66667 15.1667 -5 27.5s-11.5 25.8333 -24.5 40.5s-29.5 22 -49.5 22s-40.8333 -9.16667 -62.5 -27.5s-40.8333 -44.5 -57.5 -78.5c-10.6667 -23.3333 -21.6667 -57.5 -33 -102.5c-11.3333 -45 -17 -80.5 -17 -106.5c0 -30 5.66667 -53.5 17 -70.5\nc11.3333 -17 27 -25.5 47 -25.5c38 0 75.6667 23.6667 113 71c8.66667 12 15 24.6667 19 38z"
            },
            r: {
                x: 499,
                d: "M412 409c-11.3333 8 -26.3333 12 -45 12c-28 0 -54.3333 -11.3333 -79 -34c-10.6667 -9.33333 -22 -23.3333 -34 -42s-19 -31.3333 -21 -38c-3.33333 -15.3333 -7 -29.6667 -11 -43c-2 -7.33333 -4.66667 -18.1667 -8 -32.5s-6 -25.1667 -8 -32.5\nc-1.33333 -5.33333 -5.83333 -23.1667 -13.5 -53.5c-7.66667 -30.3333 -14.8333 -58.6667 -21.5 -85c-6.66667 -26.3333 -10.3333 -40.8333 -11 -43.5c-5.33333 -18 -17.3333 -27 -36 -27c-7.33333 0 -13.5 2.33333 -18.5 7c-5 4.66667 -7.5 10.6667 -7.5 18\nc0 7.33333 6 33.3333 18 78c7.33333 27.3333 14 54.6667 20 82l28 108c11.3333 50 17 80.6667 17 92c0 30.6667 -10.3333 46 -31 46c-18 0 -32.5 -10.5 -43.5 -31.5s-21.1667 -49.8333 -30.5 -86.5c-2.66667 -11.3333 -4.83333 -18.1667 -6.5 -20.5s-4.5 -3.5 -8.5 -3.5\nc-7.33333 0 -11 3 -11 9c0 2 1.5 8.5 4.5 19.5s7 24.6667 12 41s10.1667 29.8333 15.5 40.5c18.6667 34.6667 42.3333 52 71 52c21.3333 0 40.3333 -6.83333 57 -20.5s26.6667 -33.1667 30 -58.5c36 52.6667 78.6667 79 128 79c24 0 43.5 -5.83333 58.5 -17.5\ns22.5 -25.8333 22.5 -42.5c0 -14.6667 -5 -27.3333 -15 -38s-22 -16 -36 -16c-8.66667 0 -16.3333 2.66667 -23 8s-10 13.3333 -10 24c0 11.3333 4.16667 21.8333 12.5 31.5s19.8333 15.8333 34.5 18.5z"
            },
            s: {
                x: 462,
                d: "M227 200c-64.6667 14 -97 46.3333 -97 97c0 12 2.66667 25.3333 8 40s13.8333 30.1667 25.5 46.5s29 30 52 41s49.8333 16.5 80.5 16.5c36.6667 0 65.1667 -8.5 85.5 -25.5s30.5 -36.8333 30.5 -59.5c0 -18.6667 -4.66667 -32.1667 -14 -40.5s-18.6667 -12.5 -28 -12.5\nc-6 0 -12.1667 2.16667 -18.5 6.5s-9.5 11.1667 -9.5 20.5c0 2.66667 0.5 6.33333 1.5 11s5.33333 10.5 13 17.5s18.1667 10.5 31.5 10.5c-4.66667 17.3333 -15.6667 30.3333 -33 39s-37.3333 13 -60 13c-18 0 -34 -2.66667 -48 -8s-25 -11.6667 -33 -19\ns-14.5 -15.5 -19.5 -24.5s-8.33333 -16.8333 -10 -23.5s-2.5 -12.3333 -2.5 -17c0 -14 4.5 -25.5 13.5 -34.5s17.3333 -14.8333 25 -17.5s18.1667 -5.33333 31.5 -8c30.6667 -6 52.6667 -11.3333 66 -16c13.3333 -4.66667 25.6667 -12.6667 37 -24\nc21.3333 -21.3333 32 -46.3333 32 -75c0 -14.6667 -3.33333 -30.6667 -10 -48c-6.66667 -17.3333 -17 -35 -31 -53s-34.6667 -33 -62 -45s-58.6667 -18 -94 -18c-40.6667 0 -74.1667 8.66667 -100.5 26c-26.3333 17.3333 -39.5 40.6667 -39.5 70\nc0 20.6667 5.33333 36.1667 16 46.5c10.6667 10.3333 22.3333 15.5 35 15.5c22.6667 0 34 -10.6667 34 -32c0 -12.6667 -5.5 -24.3333 -16.5 -35s-25.5 -15 -43.5 -13c14 -38.6667 52.6667 -58 116 -58c27.3333 0 51 4.33333 71 13s35 19.3333 45 32\nc10 12.6667 17.1667 24.6667 21.5 36c4.33333 11.3333 6.5 21.6667 6.5 31c0 33.3333 -19.3333 56 -58 68c-1.33333 0 -8.33333 1.33333 -21 4c-12.6667 2.66667 -22.3333 4.66667 -29 6z"
            },
            t: {
                x: 400,
                d: "M229 402l-78 -313c-2 -8 -3 -18.6667 -3 -32c0 -31.3333 10.6667 -47 32 -47c26 0 50.1667 12.3333 72.5 37c22.3333 24.6667 39.8333 52.3333 52.5 83c4.66667 10.6667 7.66667 16.6667 9 18c1.33333 2.66667 4 4 8 4c6.66667 0 10 -3 10 -9c0 -2 -2 -8.16667 -6 -18.5\nc-4 -10.3333 -10.5 -23.1667 -19.5 -38.5c-9 -15.3333 -19.3333 -30.1667 -31 -44.5c-11.6667 -14.3333 -26.3333 -26.5 -44 -36.5s-35.8333 -15 -54.5 -15c-26.6667 0 -48.1667 8.83333 -64.5 26.5c-16.3333 17.6667 -24.5 38.8333 -24.5 63.5c0 6.66667 3.66667 26 11 58\nl66 264h-89h-12.5c-2.33333 0 -4.83333 0.333333 -7.5 1s-4.33333 1.66667 -5 3s-1 3.33333 -1 6c0 8.66667 2 14 6 16s11.6667 3 23 3h94l39 159c6 23.3333 19 35 39 35c6.66667 0 12.6667 -2.33333 18 -7s8 -10.6667 8 -18c0 -6 -1.33333 -13.6667 -4 -23l-37 -146h88\nc10.6667 0 17.6667 -0.5 21 -1.5s5 -4.16667 5 -9.5c0 -8 -2 -13 -6 -15s-11.6667 -3 -23 -3h-92z"
            },
            u: {
                x: 601,
                d: "M364 58c-8 -9.33333 -14.3333 -16.5 -19 -21.5s-12.3333 -11.8333 -23 -20.5c-10.6667 -8.66667 -22.5 -15.1667 -35.5 -19.5c-13 -4.33333 -26.8333 -6.5 -41.5 -6.5c-12.6667 0 -24.8333 1.5 -36.5 4.5s-24.1667 8.33333 -37.5 16\nc-13.3333 7.66667 -24 19.8333 -32 36.5c-8 16.6667 -12 37 -12 61c0 36 16.3333 98.3333 49 187c17.3333 44 26 75 26 93c0 22 -8.66667 33 -26 33c-20 0 -39 -10.3333 -57 -31s-32.6667 -51.6667 -44 -93c-2 -8 -3.83333 -13 -5.5 -15s-4.5 -3 -8.5 -3\nc-7.33333 0 -11 3 -11 9c0 4 2.5 13.3333 7.5 28s12.3333 31.6667 22 51s23.3333 36.5 41 51.5c17.6667 15 37.1667 22.5 58.5 22.5c23.3333 0 42.3333 -7.83333 57 -23.5s22 -34.5 22 -56.5c0 -13.3333 -5.66667 -35 -17 -65c-36 -92.6667 -54 -160.667 -54 -204\nc0 -54.6667 20.6667 -82 62 -82c10 0 19.6667 1.5 29 4.5s17.6667 7 25 12s14.1667 10.3333 20.5 16s11.8333 11.3333 16.5 17c4.66667 5.66667 8.66667 11 12 16s5.66667 9.16667 7 12.5l3 4c7.33333 36.6667 31 133 71 289c2.66667 10.6667 5.16667 19 7.5 25\ns6.33333 11.6667 12 17s13.1667 8 22.5 8c7.33333 0 13.6667 -2.33333 19 -7s8 -10.6667 8 -18c0 -3.33333 -2.33333 -13.3333 -7 -30l-41 -163c-4 -18.6667 -10.6667 -46 -20 -82c-8.66667 -36.6667 -13 -61.6667 -13 -75c0 -30.6667 10 -46 30 -46\nc18 0 32.5 10.1667 43.5 30.5c11 20.3333 21.8333 50.8333 32.5 91.5c2 8.66667 3.83333 14.1667 5.5 16.5s4.5 3.5 8.5 3.5c6.66667 0 10 -3 10 -9c0 -1.33333 -1.16667 -7.33333 -3.5 -18c-2.33333 -10.6667 -6 -24 -11 -40s-10.1667 -29.3333 -15.5 -40\nc-17.3333 -36.6667 -41.3333 -55 -72 -55c-16.6667 0 -33.5 5.16667 -50.5 15.5c-17 10.3333 -28.5 27.8333 -34.5 52.5z"
            },
            v: {
                x: 530,
                d: "M480 374c0 -14 -2.33333 -34.6667 -7 -62s-12.6667 -59.8333 -24 -97.5s-25.1667 -73 -41.5 -106s-37.6667 -61 -64 -84s-55.1667 -34.5 -86.5 -34.5c-39.3333 0 -71 10.3333 -95 31c-22.6667 20.6667 -34 51 -34 91c0 36.6667 16 97.6667 48 183c17.3333 44 26 75 26 93\nc0 10 -1.66667 17.6667 -5 23s-6.5 8.33333 -9.5 9s-6.83333 1 -11.5 1c-20 0 -39 -10.3333 -57 -31s-32.6667 -51.6667 -44 -93c-2 -8 -3.83333 -13 -5.5 -15s-4.5 -3 -8.5 -3c-7.33333 0 -11 3 -11 9c0 4 2.5 13.3333 7.5 28s12.3333 31.6667 22 51s23.3333 36.5 41 51.5\nc17.6667 15 37.1667 22.5 58.5 22.5c23.3333 0 42.3333 -7.83333 57 -23.5s22 -34.5 22 -56.5c0 -13.3333 -6.66667 -37 -20 -71c-33.3333 -88.6667 -50 -152.667 -50 -192c0 -58.6667 24.3333 -88 73 -88c28 0 54.1667 12.1667 78.5 36.5c24.3333 24.3333 43.3333 53 57 86\ns24.5 63.6667 32.5 92s12 48.8333 12 61.5c0 37.3333 -12 66.6667 -36 88c-7.33333 7.33333 -11 15 -11 23c0 10 4.83333 19.8333 14.5 29.5s20.1667 14.5 31.5 14.5c4.66667 0 9.5 -1 14.5 -3s10.5 -8.5 16.5 -19.5s9 -25.8333 9 -44.5z"
            },
            w: {
                x: 748,
                d: "M367 61c-26.6667 -47.3333 -60.6667 -71 -102 -71c-14.6667 0 -29.1667 1.66667 -43.5 5c-14.3333 3.33333 -29 9.16667 -44 17.5c-15 8.33333 -27 21.1667 -36 38.5c-9 17.3333 -13.5 38.3333 -13.5 63c0 34.6667 19 102.667 57 204c11.3333 29.3333 17 52.6667 17 70\nc0 22 -8.66667 33 -26 33c-20 0 -38.8333 -10.1667 -56.5 -30.5c-17.6667 -20.3333 -32.5 -51.5 -44.5 -93.5c-2 -8 -3.83333 -13 -5.5 -15s-4.5 -3 -8.5 -3c-7.33333 0 -11 3 -11 9c0 4 2.5 13.3333 7.5 28s12.3333 31.6667 22 51s23.3333 36.5 41 51.5\nc17.6667 15 37.1667 22.5 58.5 22.5c23.3333 0 42.3333 -7.83333 57 -23.5s22 -34.5 22 -56.5c0 -13.3333 -5.66667 -34.6667 -17 -64c-34.6667 -92 -52 -157 -52 -195c0 -61.3333 26.3333 -92 79 -92c20 0 39.3333 9.33333 58 28l3 5\nc2.66667 3.33333 5.66667 7.16667 9 11.5s6.5 9.33333 9.5 15c3 5.66667 5.66667 11.3333 8 17s3.5 10.8333 3.5 15.5c0 22 1.33333 38.6667 4 50c4.66667 26.6667 23.3333 103.333 56 230c2.66667 10.6667 5 18.8333 7 24.5s6 11.1667 12 16.5s13.6667 8 23 8\nc7.33333 0 13.6667 -2.33333 19 -7s8 -10.6667 8 -18c0 -2 -4.66667 -21.6667 -14 -59l-42 -168c-8.66667 -36.6667 -13 -63.6667 -13 -81c0 -58.6667 24.6667 -88 74 -88c47.3333 0 86.3333 33.6667 117 101c11.3333 24.6667 22.3333 55.8333 33 93.5s16 64.8333 16 81.5\nc0 35.3333 -11.6667 64.6667 -35 88c-8 6.66667 -12 14.3333 -12 23c0 10 4.83333 19.8333 14.5 29.5s20.1667 14.5 31.5 14.5c4.66667 0 9.5 -1.16667 14.5 -3.5s10.5 -8.83333 16.5 -19.5s9 -25.3333 9 -44c0 -27.3333 -6.66667 -67.5 -20 -120.5\ns-26.6667 -95.8333 -40 -128.5c-36.6667 -90 -86.3333 -135 -149 -135c-64 0 -104.667 23.6667 -122 71z"
            },
            x: {
                x: 586,
                d: "M496 408c-14 8.66667 -31 13 -51 13c-22 0 -41.3333 -9.5 -58 -28.5s-29 -44.1667 -37 -75.5l-35 -136c-13.3333 -55.3333 -20 -90 -20 -104c0 -20.6667 4.66667 -37 14 -49s22.6667 -18 40 -18c24.6667 0 49.3333 11.1667 74 33.5\nc24.6667 22.3333 43.3333 54.1667 56 95.5c3.33333 8.66667 7.66667 13 13 13c6.66667 0 10 -3 10 -9c0 -6.66667 -3.5 -17.8333 -10.5 -33.5c-7 -15.6667 -16.6667 -32.6667 -29 -51c-12.3333 -18.3333 -29 -34.3333 -50 -48c-21 -13.6667 -43.1667 -20.5 -66.5 -20.5\nc-22 0 -42.8333 6.33333 -62.5 19c-19.6667 12.6667 -33.1667 32.6667 -40.5 60c-26.6667 -52.6667 -61 -79 -103 -79c-24 0 -45 5.33333 -63 16c-18 10.6667 -27 25.6667 -27 45c0 15.3333 5.16667 28 15.5 38c10.3333 10 21.8333 15 34.5 15\nc10 0 18.1667 -2.83333 24.5 -8.5c6.33333 -5.66667 9.5 -13.5 9.5 -23.5c0 -8.66667 -3.33333 -18.1667 -10 -28.5c-6.66667 -10.3333 -18 -17.1667 -34 -20.5c14 -8.66667 31 -13 51 -13c45.3333 0 77.6667 38.3333 97 115l34 137c12 48 18 79 18 93\nc0 16.6667 -4 31.8333 -12 45.5s-22 20.5 -42 20.5c-12.6667 0 -25.8333 -2.83333 -39.5 -8.5s-29.5 -19.1667 -47.5 -40.5s-32.3333 -49 -43 -83c-3.33333 -6.66667 -7.33333 -10 -12 -10c-7.33333 0 -11 3 -11 9c0 6.66667 3.5 17.8333 10.5 33.5s16.6667 32.6667 29 51\nc12.3333 18.3333 29 34.3333 50 48s43.1667 20.5 66.5 20.5c52.6667 0 87 -26.3333 103 -79c4.66667 10 10.5 20 17.5 30s18.5 20.6667 34.5 32s33.3333 17 52 17c23.3333 0 44.1667 -5.33333 62.5 -16c18.3333 -10.6667 27.5 -25.6667 27.5 -45\nc0 -14 -4.83333 -26.3333 -14.5 -37c-9.66667 -10.6667 -21.8333 -16 -36.5 -16c-8.66667 0 -16.3333 2.66667 -23 8s-10 13.3333 -10 24s3.66667 20.8333 11 30.5s18.3333 15.8333 33 18.5z"
            },
            y: {
                x: 551,
                d: "M286 -112c11.3333 15.3333 20.8333 31.5 28.5 48.5s13.3333 31.5 17 43.5s8.5 30.3333 14.5 55l-1 1c-29.3333 -30.6667 -62.6667 -46 -100 -46c-31.3333 0 -58.8333 8.83333 -82.5 26.5c-23.6667 17.6667 -35.5 47.8333 -35.5 90.5c0 38 16.3333 100.667 49 188\nc17.3333 44 26 75 26 93c0 10 -1.66667 17.6667 -5 23s-6.5 8.33333 -9.5 9s-6.83333 1 -11.5 1c-20 0 -39 -10.5 -57 -31.5s-32.6667 -51.8333 -44 -92.5c-2 -8 -3.83333 -13 -5.5 -15s-4.5 -3 -8.5 -3c-7.33333 0 -11 3 -11 9c0 4 2.5 13.3333 7.5 28\ns12.3333 31.6667 22 51s23.3333 36.5 41 51.5c17.6667 15 37.1667 22.5 58.5 22.5c23.3333 0 42.3333 -7.83333 57 -23.5s22 -34.5 22 -56.5c0 -12 -5.66667 -33 -17 -63c-36 -96 -54 -164.667 -54 -206c0 -54.6667 20.3333 -82 61 -82c38 0 71.6667 20.6667 101 62\nc4.66667 6.66667 9 17 13 31l74 294c6 22.6667 18.6667 34 38 34c7.33333 0 13.6667 -2.33333 19 -7s8 -10.6667 8 -18c0 -1.33333 -1 -7 -3 -17l-98 -390c-14 -56 -43.1667 -103.833 -87.5 -143.5c-44.3333 -39.6667 -91.5 -59.5 -141.5 -59.5c-28.6667 0 -52.5 8 -71.5 24\ns-28.5 36.6667 -28.5 62c0 21.3333 5.66667 36.8333 17 46.5c11.3333 9.66667 22.6667 14.5 34 14.5c8.66667 0 16.5 -2.5 23.5 -7.5s10.5 -12.8333 10.5 -23.5c0 -12 -4.83333 -23.1667 -14.5 -33.5c-9.66667 -10.3333 -21.5 -15.5 -35.5 -15.5\nc-4.66667 0 -8 0.333333 -10 1c10.6667 -32 35.6667 -48 75 -48c42.6667 0 81 24 115 72z"
            },
            z: {
                x: 517,
                d: "M134 81c6 2.66667 16 4 30 4c16 0 37.3333 -5.33333 64 -16c24.6667 -10.6667 45.3333 -16 62 -16c22.6667 0 45.8333 7 69.5 21s40.5 34.6667 50.5 62c2.66667 9.33333 6.66667 14 12 14c7.33333 0 11 -3.33333 11 -10c0 -20.6667 -15.1667 -50.8333 -45.5 -90.5\nc-30.3333 -39.6667 -66.5 -59.5 -108.5 -59.5c-10 0 -19.5 2.5 -28.5 7.5s-15.6667 9.66667 -20 14c-4.33333 4.33333 -10.8333 11.5 -19.5 21.5c-10 12.6667 -18.3333 21.1667 -25 25.5s-15.3333 6.5 -26 6.5c-30 0 -58.3333 -20.6667 -85 -62\nc-5.33333 -8.66667 -10 -13 -14 -13c-7.33333 0 -11 2.66667 -11 8c0 2.66667 3.66667 10 11 22c7.33333 12 19 28 35 48s33.3333 39.3333 52 58l101 93c68.6667 62.6667 112.667 105.333 132 128c-3.33333 -0.666667 -8.66667 -1 -16 -1\nc-17.3333 0 -38.6667 5.33333 -64 16c-24.6667 10.6667 -45.3333 16 -62 16c-14.6667 0 -30.5 -3.5 -47.5 -10.5s-29.1667 -19.1667 -36.5 -36.5c-3.33333 -7.33333 -7.33333 -11 -12 -11c-6.66667 0 -10 3 -10 9c0 16.6667 11.5 39.5 34.5 68.5s50.5 43.5 82.5 43.5\nc21.3333 0 43.6667 -14 67 -42c17.3333 -22 34.3333 -33 51 -33c25.3333 0 50.3333 21.3333 75 64c5.33333 7.33333 10 11 14 11c6.66667 0 10 -2.66667 10 -8c0 -3.33333 -3.66667 -10.8333 -11 -22.5s-19.5 -28 -36.5 -49s-36.1667 -42.1667 -57.5 -63.5\nc-17.3333 -18.6667 -50.6667 -49.3333 -100 -92c-58 -52 -100.667 -93.6667 -128 -125z"
            },
            "–": {
                x: 570,
                d: "M520 258h-470v16h470v-16z"
            },
            "—": {
                x: 1040,
                d: "M990 258h-940v16h940v-16z"
            },
            "˝": {
                x: 370,
                d: "M54 536l55 137c2.66667 6 4.66667 10.3333 6 13s3.66667 5.16667 7 7.5s7.66667 3.5 13 3.5c6.66667 0 13 -2.5 19 -7.5s9 -11.1667 9 -18.5c0 -6.66667 -3.33333 -14.6667 -10 -24l-89 -133c-9.33333 3.33333 -14 6.66667 -14 10zM211 536l55 137\nc2.66667 6 4.66667 10.3333 6 13s3.66667 5.16667 7 7.5s7.66667 3.5 13 3.5c6.66667 0 13 -2.5 19 -7.5s9 -11.1667 9 -18.5c0 -6.66667 -3.33333 -14.6667 -10 -24l-89 -133c-9.33333 3.33333 -14 6.66667 -14 10z"
            },
            "˜": {
                x: 414,
                d: "M353 656l11 -11c-18.6667 -20 -31.6667 -33.8333 -39 -41.5s-17 -15.1667 -29 -22.5s-23.6667 -11 -35 -11c-14 0 -33.3333 8.66667 -58 26c-24 17.3333 -43.3333 26 -58 26c-14 0 -26.3333 -3.66667 -37 -11c-10.6667 -7.33333 -26.3333 -21 -47 -41l-11 11\nc18.6667 20 31.6667 33.8333 39 41.5s17 15.1667 29 22.5s23.6667 11 35 11c14 0 33.3333 -8.66667 58 -26c24 -17.3333 43.3333 -26 58 -26c14 0 26.3333 3.66667 37 11s26.3333 21 47 41z"
            },
            "Α": {
                x: 746,
                d: "M390 691l222 -628c6 -17.3333 14.1667 -27.8333 24.5 -31.5c10.3333 -3.66667 30.1667 -5.5 59.5 -5.5v-26c-16 1.33333 -49.3333 2 -100 2c-55.3333 0 -92.6667 -0.666667 -112 -2v26c41.3333 0 62 9 62 27c0 4 -1.66667 10 -5 18l-60 170h-262l-53 -149\nc-2.66667 -8 -4 -14.6667 -4 -20s1 -11 3 -17s7.5 -12.1667 16.5 -18.5c9 -6.33333 20.5 -9.83333 34.5 -10.5v-26c-16 1.33333 -45.6667 2 -89 2c-39.3333 0 -65 -0.666667 -77 -2v26c47.3333 0 78.6667 21.6667 94 65l212 600c4 10.6667 9.66667 16 17 16\ns13 -5.33333 17 -16zM350 611l-122 -344h244z"
            },
            "Β": {
                x: 655,
                d: "M50 683h318c62 0 112.667 -17 152 -51c39.3333 -34 59 -73 59 -117c0 -38 -15.1667 -71.6667 -45.5 -101c-30.3333 -29.3333 -69.5 -48.6667 -117.5 -58c53.3333 -3.33333 98.1667 -21.8333 134.5 -55.5s54.5 -73.1667 54.5 -118.5c0 -48 -19.8333 -90.3333 -59.5 -127\nc-39.6667 -36.6667 -90.1667 -55 -151.5 -55h-344v26c36 0 58.3333 2.16667 67 6.5c8.66667 4.33333 13 17.1667 13 38.5v541c0 21.3333 -4.33333 34.1667 -13 38.5s-31 6.5 -67 6.5v26zM193 363h144c51.3333 0 92.3333 15.1667 123 45.5s46 65.8333 46 106.5\nc0 35.3333 -12.5 67.8333 -37.5 97.5s-60.1667 44.5 -105.5 44.5h-128c-19.3333 0 -31.1667 -2.16667 -35.5 -6.5s-6.5 -15.1667 -6.5 -32.5v-255zM235 26h130c51.3333 0 91.8333 16.1667 121.5 48.5c29.6667 32.3333 44.5 68.5 44.5 108.5c0 41.3333 -13.5 79 -40.5 113\ns-64.5 51 -112.5 51h-185v-282c0 -17.3333 2.16667 -28.1667 6.5 -32.5c4.33333 -4.33333 16.1667 -6.5 35.5 -6.5z"
            },
            "Ε": {
                x: 656,
                d: "M606 253l-36 -253h-520v26c36.6667 0 59.1667 2.16667 67.5 6.5c8.33333 4.33333 12.5 17.1667 12.5 38.5v539c0 21.3333 -4.16667 34.1667 -12.5 38.5s-30.8333 6.5 -67.5 6.5v26h506l24 -221h-18c-4 38 -8.5 67.3333 -13.5 88s-14 40.1667 -27 58.5\ns-31.1667 31 -54.5 38s-54 10.5 -92 10.5h-137c-19.3333 0 -31.1667 -2.16667 -35.5 -6.5s-6.5 -15.1667 -6.5 -32.5v-249h94c44 0 72.1667 8.16667 84.5 24.5s18.5 47.1667 18.5 92.5h18v-260h-18c0 45.3333 -6.16667 76.1667 -18.5 92.5s-40.5 24.5 -84.5 24.5h-94v-276\nc0 -17.3333 2.16667 -28.1667 6.5 -32.5c4.33333 -4.33333 16.1667 -6.5 35.5 -6.5h139c24.6667 0 46.6667 1.83333 66 5.5c19.3333 3.66667 35.6667 8 49 13s25 13.3333 35 25c10 11.6667 18 22.1667 24 31.5c6 9.33333 11.5 23.8333 16.5 43.5c5 19.6667 8.66667 36 11 49\ns5.5 32.8333 9.5 59.5h18z"
            },
            "Ζ": {
                x: 575,
                d: "M520 663l-394 -635h174c26.6667 0 50.3333 2.33333 71 7c20.6667 4.66667 38 10 52 16s26 15.5 36 28.5s17.6667 24.3333 23 34s9.83333 24.5 13.5 44.5s6 36 7 48s2.5 30.3333 4.5 55h18l-14 -261h-439c-7.33333 0 -12.3333 0.166667 -15 0.5\nc-2.66667 0.333333 -4.5 1.33333 -5.5 3c-1 1.66667 -1.5 4.83333 -1.5 9.5c0 5.33333 2.33333 11.6667 7 19l387 625h-165c-39.3333 0 -72 -4.5 -98 -13.5s-45.8333 -23 -59.5 -42c-13.6667 -19 -23.5 -39.1667 -29.5 -60.5s-9.66667 -47.6667 -11 -79h-18l10 221h425\nc10.6667 0 17 -1 19 -3s3 -7.66667 3 -17z"
            },
            "Η": {
                x: 690,
                d: "M560 612v-541c0 -21.3333 4.16667 -34.1667 12.5 -38.5c8.33333 -4.33333 30.8333 -6.5 67.5 -6.5v-26c-19.3333 1.33333 -57 2 -113 2s-93.6667 -0.666667 -113 -2v26c36.6667 0 59.1667 2.16667 67.5 6.5c8.33333 4.33333 12.5 17.1667 12.5 38.5v271h-298v-271\nc0 -21.3333 4.16667 -34.1667 12.5 -38.5c8.33333 -4.33333 30.8333 -6.5 67.5 -6.5v-26c-19.3333 1.33333 -57 2 -113 2s-93.6667 -0.666667 -113 -2v26c36.6667 0 59.1667 2.16667 67.5 6.5c8.33333 4.33333 12.5 17.1667 12.5 38.5v541\nc0 21.3333 -4.16667 34.1667 -12.5 38.5s-30.8333 6.5 -67.5 6.5v26c19.3333 -1.33333 57 -2 113 -2s93.6667 0.666667 113 2v-26c-36.6667 0 -59.1667 -2.16667 -67.5 -6.5s-12.5 -17.1667 -12.5 -38.5v-244h298v244c0 21.3333 -4.16667 34.1667 -12.5 38.5\ns-30.8333 6.5 -67.5 6.5v26c19.3333 -1.33333 57 -2 113 -2s93.6667 0.666667 113 2v-26c-36.6667 0 -59.1667 -2.16667 -67.5 -6.5s-12.5 -17.1667 -12.5 -38.5z"
            },
            "Ι": {
                x: 334,
                d: "M200 612v-541c0 -21.3333 4.5 -34.1667 13.5 -38.5c9 -4.33333 32.5 -6.5 70.5 -6.5v-26c-21.3333 1.33333 -60.3333 2 -117 2c-56.6667 0 -95.6667 -0.666667 -117 -2v26c38 0 61.5 2.16667 70.5 6.5c9 4.33333 13.5 17.1667 13.5 38.5v541\nc0 21.3333 -4.5 34.1667 -13.5 38.5s-32.5 6.5 -70.5 6.5v26c21.3333 -1.33333 60.3333 -2 117 -2c56.6667 0 95.6667 0.666667 117 2v-26c-38 0 -61.5 -2.16667 -70.5 -6.5s-13.5 -17.1667 -13.5 -38.5z"
            },
            "Κ": {
                x: 734,
                d: "M368 419l223 -341c14.6667 -22.6667 27.6667 -37 39 -43s29.3333 -9 54 -9v-26c-15.3333 1.33333 -44.6667 2 -88 2c-52.6667 0 -89.6667 -0.666667 -111 -2v26c27.3333 0 41 8.66667 41 26c0 7.33333 -4.33333 18.3333 -13 33l-189 290l-128 -127v-177\nc0 -21.3333 4.16667 -34.1667 12.5 -38.5c8.33333 -4.33333 30.8333 -6.5 67.5 -6.5v-26c-19.3333 1.33333 -57 2 -113 2s-93.6667 -0.666667 -113 -2v26c36.6667 0 59.1667 2.16667 67.5 6.5c8.33333 4.33333 12.5 17.1667 12.5 38.5v541\nc0 21.3333 -4.16667 34.1667 -12.5 38.5s-30.8333 6.5 -67.5 6.5v26c19.3333 -1.33333 57 -2 113 -2s93.6667 0.666667 113 2v-26c-36.6667 0 -59.1667 -2.16667 -67.5 -6.5s-12.5 -17.1667 -12.5 -38.5v-339l332 333c5.33333 8 8 16 8 24\nc0 3.33333 -0.666667 6.66667 -2 10s-4.33333 6.83333 -9 10.5s-11 5.83333 -19 6.5v26c17.3333 -1.33333 50.6667 -2 100 -2c16.6667 0 38.3333 0.666667 65 2v-26c-44 -1.33333 -87.3333 -23 -130 -65z"
            },
            "Μ": {
                x: 843,
                d: "M206 667l216 -586l216 586c3.33333 7.33333 6.16667 11.8333 8.5 13.5s8.83333 2.5 19.5 2.5h127v-26c-36 0 -58.3333 -2.16667 -67 -6.5s-13 -17.1667 -13 -38.5v-541c0 -21.3333 4.33333 -34.1667 13 -38.5c8.66667 -4.33333 31 -6.5 67 -6.5v-26\nc-18 1.33333 -55 2 -111 2c-55.3333 0 -92 -0.666667 -110 -2v26c36.6667 0 59.1667 2.16667 67.5 6.5c8.33333 4.33333 12.5 17.1667 12.5 38.5v587h-1l-237 -642c-4 -10.6667 -8.66667 -16 -14 -16s-10 5.33333 -14 16l-235 637h-1v-555\nc0 -9.33333 0.5 -16.8333 1.5 -22.5s3.66667 -13 8 -22s12.5 -15.8333 24.5 -20.5c12 -4.66667 27.3333 -7 46 -7v-26c-15.3333 1.33333 -45.3333 2 -90 2c-44.6667 0 -74.6667 -0.666667 -90 -2v26c18.6667 0 34 2.33333 46 7c12 4.66667 20.1667 11.5 24.5 20.5\ns7 16.3333 8 22s1.5 13.1667 1.5 22.5v514c0 21.3333 -4.16667 34.1667 -12.5 38.5s-30.8333 6.5 -67.5 6.5v26h128c10.6667 0 17.1667 -0.833333 19.5 -2.5s5.16667 -6.16667 8.5 -13.5z"
            },
            "Ν": {
                x: 690,
                d: "M204 671l336 -549v463c0 9.33333 -0.5 16.8333 -1.5 22.5s-3.66667 13 -8 22s-12.5 15.8333 -24.5 20.5s-27.3333 7 -46 7v26c15.3333 -1.33333 45.3333 -2 90 -2c44.6667 0 74.6667 0.666667 90 2v-26c-18.6667 0 -34 -2.33333 -46 -7s-20.1667 -11.5 -24.5 -20.5\ns-7 -16.3333 -8 -22s-1.5 -13.1667 -1.5 -22.5v-563c0 -7.33333 -0.166667 -12.1667 -0.5 -14.5s-1.16667 -4.16667 -2.5 -5.5c-1.33333 -1.33333 -3.66667 -2 -7 -2c-5.33333 0 -10.3333 4 -15 12l-371 607c-7.33333 10 -12 16 -14 18v-539\nc0 -9.33333 0.5 -16.8333 1.5 -22.5s3.66667 -13 8 -22s12.5 -15.8333 24.5 -20.5c12 -4.66667 27.3333 -7 46 -7v-26c-15.3333 1.33333 -45.3333 2 -90 2c-44.6667 0 -74.6667 -0.666667 -90 -2v26c18.6667 0 34 2.33333 46 7c12 4.66667 20.1667 11.5 24.5 20.5\ns7 16.3333 8 22s1.5 13.1667 1.5 22.5v553c-12 4 -32.3333 6 -61 6h-19v26h127c9.33333 0 15.3333 -0.666667 18 -2s5.66667 -4.66667 9 -10z"
            },
            "Ο": {
                x: 727,
                d: "M677 340c0 -99.3333 -30.8333 -183.5 -92.5 -252.5s-135.5 -103.5 -221.5 -103.5c-84.6667 0 -158 34.3333 -220 103c-62 68.6667 -93 153 -93 253c0 100.667 30.8333 185.667 92.5 255c61.6667 69.3333 135.5 104 221.5 104c84.6667 0 158 -34.6667 220 -104\ns93 -154.333 93 -255zM364 2c28.6667 0 56.6667 7.16667 84 21.5c27.3333 14.3333 52.5 35.3333 75.5 63c23 27.6667 41.6667 64.5 56 110.5s21.5 98 21.5 156c0 55.3333 -7.33333 104.833 -22 148.5c-14.6667 43.6667 -33.8333 78.1667 -57.5 103.5\nc-23.6667 25.3333 -49 44.3333 -76 57s-54.5 19 -82.5 19c-26.6667 0 -53.3333 -6.33333 -80 -19s-52 -31.3333 -76 -56s-43.5 -59 -58.5 -103s-22.5 -94 -22.5 -150c0 -110.667 24 -196.833 72 -258.5c48 -61.6667 103.333 -92.5 166 -92.5z"
            },
            "Ρ": {
                x: 629,
                d: "M196 321v-250c0 -21.3333 4.33333 -34.1667 13 -38.5c8.66667 -4.33333 31 -6.5 67 -6.5v-26c-19.3333 1.33333 -57 2 -113 2s-93.6667 -0.666667 -113 -2v26c36 0 58.3333 2.16667 67 6.5c8.66667 4.33333 13 17.1667 13 38.5v541c0 21.3333 -4.33333 34.1667 -13 38.5\ns-31 6.5 -67 6.5v26h306c64 0 117.167 -18.3333 159.5 -55c42.3333 -36.6667 63.5 -79.3333 63.5 -128c0 -48.6667 -21.3333 -90.6667 -64 -126c-42.6667 -35.3333 -95.6667 -53 -159 -53h-160zM194 342h143c110.667 0 166 52.6667 166 158c0 104.667 -55.3333 157 -166 157\nh-101c-19.3333 0 -31.1667 -2.16667 -35.5 -6.5s-6.5 -15.1667 -6.5 -32.5v-276z"
            },
            "Τ": {
                x: 711,
                d: "M644 680l17 -221h-18c-3.33333 46 -7.16667 79.8333 -11.5 101.5s-13.1667 40.6667 -26.5 57s-30.5 26.5 -51.5 30.5s-51.5 6 -91.5 6c-31.3333 0 -49.6667 -0.333333 -55 -1c-8 -2 -13 -5.66667 -15 -11s-3 -14.3333 -3 -27v-542c0 -19.3333 4.5 -32 13.5 -38\ns33.1667 -9 72.5 -9h28v-26c-64 1.33333 -113 2 -147 2s-83 -0.666667 -147 -2v26h28c39.3333 0 63.5 3 72.5 9s13.5 18.6667 13.5 38v542c0 9.33333 -0.166667 16 -0.5 20s-2 7.83333 -5 11.5s-7.5 5.83333 -13.5 6.5c-5.33333 0.666667 -23.6667 1 -55 1\nc-26.6667 0 -48.6667 -0.833333 -66 -2.5s-32.8333 -5.5 -46.5 -11.5c-13.6667 -6 -24 -12.8333 -31 -20.5s-13.1667 -19.8333 -18.5 -36.5s-9.16667 -33.8333 -11.5 -51.5s-4.83333 -41.8333 -7.5 -72.5h-18l17 221h577z"
            },
            "Χ": {
                x: 766,
                d: "M402 379l220 -320c10 -14 20.3333 -23 31 -27s31.6667 -6 63 -6v-26c-16 1.33333 -49.3333 2 -100 2c-54.6667 0 -92.6667 -0.666667 -114 -2v26c15.3333 0.666667 26.5 4 33.5 10s10.5 11.6667 10.5 17c0 4 -2.66667 9.66667 -8 17l-174 254l-160 -232\nc-6.66667 -9.33333 -10 -18.3333 -10 -27c0 -23.3333 13.3333 -36.3333 40 -39v-26c-16.6667 1.33333 -49.6667 2 -99 2c-41.3333 0 -69.6667 -0.666667 -85 -2v26c55.3333 0 97.6667 21 127 63l174 253l-193 282c-10.6667 14.6667 -21.8333 23.8333 -33.5 27.5\nc-11.6667 3.66667 -32.1667 5.5 -61.5 5.5v26c16 -1.33333 49.3333 -2 100 -2c54.6667 0 92.6667 0.666667 114 2v-26c-14.6667 -0.666667 -25.6667 -3.83333 -33 -9.5s-11 -11.5 -11 -17.5c0 -2.66667 2.66667 -8.33333 8 -17l148 -216l132 191c8 11.3333 12 21.3333 12 30\nc0 23.3333 -13.3333 36.3333 -40 39v26c16.6667 -1.33333 49.6667 -2 99 -2c41.3333 0 69.6667 0.666667 85 2v-26c-24.6667 0 -46.6667 -4.5 -66 -13.5s-32.3333 -17 -39 -24s-14 -16.1667 -22 -27.5z"
            },
            "Ω": {
                x: 695,
                d: "M645 146l-29 -146h-151c-10.6667 0 -17 0.666667 -19 2c-2 1.33333 -3 6 -3 14c0 46 17.3333 113.333 52 202c15.3333 37.3333 26.6667 66.3333 34 87s14.1667 44.8333 20.5 72.5s9.5 53.5 9.5 77.5c0 70 -20.8333 125.5 -62.5 166.5c-41.6667 41 -91.5 61.5 -149.5 61.5\nc-56 0 -105.167 -20.3333 -147.5 -61s-63.5 -96.3333 -63.5 -167c0 -54 20.6667 -131.333 62 -232c36 -91.3333 54 -160.333 54 -207c0 -7.33333 -1 -11.8333 -3 -13.5c-2 -1.66667 -8.33333 -2.5 -19 -2.5h-151l-29 146h18c9.33333 -42.6667 15.3333 -67.6667 18 -75\nc2 -6 4.16667 -10.1667 6.5 -12.5s8.16667 -4.5 17.5 -6.5s23 -3 41 -3h81c-5.33333 27.3333 -13.6667 53 -25 77s-29.3333 55.6667 -54 95c-21.3333 34.6667 -37.1667 61.1667 -47.5 79.5c-10.3333 18.3333 -20.5 42 -30.5 71s-15 56.5 -15 82.5\nc0 67.3333 27.8333 125 83.5 173c55.6667 48 123.833 72 204.5 72c79.3333 0 147 -24 203 -72s84 -105.667 84 -173c0 -26 -5 -53.5 -15 -82.5s-20.1667 -52.6667 -30.5 -71s-26.8333 -46.1667 -49.5 -83.5c-43.3333 -68.6667 -69 -124.667 -77 -168h81\nc26.6667 0 43.6667 1.66667 51 5s12.3333 9.33333 15 18c4.66667 14.6667 10.3333 39.3333 17 74h18z"
            },
            "Δ": {
                x: 797,
                d: "M419 690l323 -673c3.33333 -6.66667 5 -10.6667 5 -12c0 -3.33333 -6.33333 -5 -19 -5h-659c-12.6667 0 -19 1.66667 -19 5c0 1.33333 1.66667 5.33333 5 12l324 674c4 7.33333 6.83333 11.8333 8.5 13.5s5.5 2.5 11.5 2.5c8 0 14.6667 -5.66667 20 -17zM374 631\nl-278 -575h555z"
            },
            "α": {
                x: 649,
                d: "M473 253v-85c44.6667 58.6667 78.3333 126.667 101 204c2 9.33333 3.66667 15.1667 5 17.5s4.33333 3.5 9 3.5c7.33333 0 11 -3 11 -9c0 -4 -3 -16.3333 -9 -37s-19.5 -52.1667 -40.5 -94.5c-21 -42.3333 -46.5 -81.5 -76.5 -117.5v-30.5c0 -7 0.333333 -16.5 1 -28.5\ns1.66667 -21 3 -27s3 -12.5 5 -19.5s4.83333 -12 8.5 -15s8.16667 -4.5 13.5 -4.5c11.3333 0 22.3333 4.66667 33 14c10.6667 9.33333 18.3333 20.3333 23 33c2.66667 7.33333 6.66667 11 12 11c6.66667 0 10 -3 10 -9c0 -10.6667 -7.66667 -24.8333 -23 -42.5\nc-15.3333 -17.6667 -34.6667 -26.5 -58 -26.5c-44.6667 0 -74 28 -88 84c-66 -56 -135 -84 -207 -84c-48.6667 0 -86.8333 16.1667 -114.5 48.5c-27.6667 32.3333 -41.5 71.5 -41.5 117.5c0 71.3333 27.3333 136.667 82 196c54.6667 59.3333 114.667 89 180 89\nc50.6667 0 90.1667 -18.3333 118.5 -55s42.5 -81 42.5 -133zM410 98c-1.33333 14.6667 -2 26.6667 -2 36c0 8 0.166667 20.6667 0.5 38s0.5 30 0.5 38c0 23.3333 -0.166667 41.6667 -0.5 55c-0.333333 13.3333 -2.16667 31.3333 -5.5 54s-8.16667 40.3333 -14.5 53\ns-16 24 -29 34s-28.8333 15 -47.5 15c-24 0 -48.8333 -8.5 -74.5 -25.5c-25.6667 -17 -48.1667 -42.1667 -67.5 -75.5c-14.6667 -26 -27.1667 -59.8333 -37.5 -101.5c-10.3333 -41.6667 -15.5 -74.5 -15.5 -98.5c0 -28.6667 7.16667 -54.1667 21.5 -76.5\nc14.3333 -22.3333 37.5 -33.5 69.5 -33.5c69.3333 0 136.667 29.3333 202 88z"
            },
            "β": {
                x: 640,
                d: "M590 582c0 -78 -38.6667 -137.333 -116 -178c18.6667 -14 33 -29 43 -45c20 -30.6667 30 -66.6667 30 -108c0 -72.6667 -28 -134.333 -84 -185c-56 -50.6667 -120.667 -76 -194 -76c-29.3333 0 -56 10 -80 30s-38.6667 44 -44 72l-70 -280c-0.666667 -4 -5 -6 -13 -6\ns-11 3.33333 -9 10l158 627c7.33333 28 17.5 56.3333 30.5 85c13 28.6667 29.1667 56.6667 48.5 84s42.8333 49.6667 70.5 67s56.8333 26 87.5 26c43.3333 0 77.8333 -12.5 103.5 -37.5s38.5 -53.5 38.5 -85.5zM416 405c-14 4 -30.6667 6 -50 6c-22 0 -37.3333 -3 -46 -9\nc10 -3.33333 25 -5 45 -5s37 2.66667 51 8zM538 591c0 26 -7.16667 48.1667 -21.5 66.5c-14.3333 18.3333 -37.8333 27.5 -70.5 27.5c-46.6667 0 -89.6667 -24.1667 -129 -72.5s-67.6667 -107.167 -85 -176.5l-65 -263c-2.66667 -10 -4 -22.3333 -4 -37\nc0 -36 9.66667 -66 29 -90s46.6667 -36 82 -36c35.3333 0 70.1667 11.3333 104.5 34c34.3333 22.6667 59.5 52 75.5 88c23.3333 52.6667 35 102 35 148c0 48.6667 -15.3333 85.3333 -46 110c-30 -8.66667 -54.3333 -13 -73 -13c-48 0 -72 8 -72 24c0 20 27 30 81 30\nc22.6667 0 45 -4 67 -12c30 17.3333 52.8333 42.5 68.5 75.5c15.6667 33 23.5 65.1667 23.5 96.5z"
            },
            "γ": {
                x: 613,
                d: "M409 122c21.3333 57.3333 44 113 68 167c37.3333 84.6667 59.6667 130.667 67 138c1.33333 2.66667 4.33333 4 9 4c6.66667 0 10 -2.66667 10 -8c0 -0.666667 -1.16667 -3.66667 -3.5 -9s-5.33333 -11.8333 -9 -19.5s-6.5 -13.5 -8.5 -17.5\nc-35.3333 -70 -66.8333 -141.167 -94.5 -213.5c-27.6667 -72.3333 -42.5 -116.5 -44.5 -132.5c-6.66667 -54 -18.3333 -111.333 -35 -172c-13.3333 -48.6667 -25 -73 -35 -73c-7.33333 0 -11 5.66667 -11 17c0 29.3333 17.3333 100.667 52 214\nc8.66667 28.6667 13 63.3333 13 104c0 22.6667 -1 44.3333 -3 65s-6.33333 43 -13 67s-15.5 44.5 -26.5 61.5s-26.5 31.3333 -46.5 43s-43.3333 17.5 -70 17.5c-34 0 -65.5 -10.6667 -94.5 -32s-48.8333 -47.6667 -59.5 -79c-6.66667 -9.33333 -11.3333 -14.3333 -14 -15\nc-6.66667 0 -10 3 -10 9c0 8 4.33333 21.3333 13 40c8.66667 18.6667 20.5 39 35.5 61s35.1667 41.1667 60.5 57.5s52.3333 24.5 81 24.5c57.3333 0 99.6667 -34.3333 127 -103c24.6667 -58 38.6667 -130 42 -216z"
            },
            "δ": {
                x: 504,
                d: "M270 436c-39.3333 76.6667 -59 134 -59 172c0 19.3333 3.66667 35.8333 11 49.5s15.3333 23.8333 24 30.5s19.5 11.8333 32.5 15.5s22.5 5.66667 28.5 6s12.3333 0.5 19 0.5c20.6667 0 46.6667 -3.33333 78 -10c14.6667 -3.33333 24.6667 -5.83333 30 -7.5\ns10 -4.33333 14 -8s6 -8.5 6 -14.5c0 -8.66667 -3.5 -17 -10.5 -25s-15.5 -12 -25.5 -12c-10.6667 0 -25.6667 6.33333 -45 19c-32.6667 18.6667 -59.3333 28 -80 28c-19.3333 0 -33.6667 -5 -43 -15c-9.33333 -10 -14 -20.6667 -14 -32c0 -32.6667 32.3333 -90 97 -172\nc44.6667 -58.6667 67 -118 67 -178c0 -45.3333 -8 -90.3333 -24 -135c-16 -44.6667 -39.6667 -82.5 -71 -113.5s-65.6667 -46.5 -103 -46.5c-42 0 -77.8333 15 -107.5 45c-29.6667 30 -44.5 70.6667 -44.5 122c0 60 21.1667 118 63.5 174c42.3333 56 94.5 91.6667 156.5 107\nzM281 417c-32 -8.66667 -60 -25.5 -84 -50.5s-42 -53.1667 -54 -84.5c-12 -31.3333 -20.8333 -60.1667 -26.5 -86.5s-8.5 -49.1667 -8.5 -68.5c0 -42 9.83333 -72.3333 29.5 -91c19.6667 -18.6667 41.5 -28 65.5 -28c27.3333 0 51.5 14.5 72.5 43.5s36 60.8333 45 95.5\nc9 34.6667 13.5 66.6667 13.5 96c0 30 -3.33333 55.1667 -10 75.5s-21 53.1667 -43 98.5z"
            },
            "ζ": {
                x: 521,
                d: "M194 49l92 -32c12.6667 -4 23.1667 -7.83333 31.5 -11.5c8.33333 -3.66667 18 -9.33333 29 -17c11 -7.66667 19.5 -17.6667 25.5 -30c6 -12.3333 9 -26.8333 9 -43.5c0 -28 -10.5 -54.8333 -31.5 -80.5s-46.5 -38.5 -76.5 -38.5c-15.3333 0 -30.5 3.33333 -45.5 10\ns-26.6667 13.6667 -35 21s-12.5 13 -12.5 17c0 6.66667 3.33333 10 10 10c3.33333 0 7 -2 11 -6c21.3333 -21.3333 45.3333 -32 72 -32c17.3333 0 31.3333 7.33333 42 22s16 30 16 46c0 14.6667 -4.33333 27.3333 -13 38s-17.5 18 -26.5 22s-22.5 9 -40.5 15\nc-18.6667 7.33333 -38 14 -58 20c-14.6667 5.33333 -26.5 9.83333 -35.5 13.5c-9 3.66667 -21.1667 10.5 -36.5 20.5c-15.3333 10 -27.5 21 -36.5 33s-17 28.5 -24 49.5s-10.5 44.5 -10.5 70.5c0 87.3333 27.6667 173.167 83 257.5c55.3333 84.3333 115 143.167 179 176.5\nc-8 14 -12 31 -12 51c0 30 5.33333 45 16 45c6.66667 0 10 -3.33333 10 -10c0 -0.666667 -0.333333 -2.66667 -1 -6s-1.33333 -7.66667 -2 -13s-1 -10.6667 -1 -16c0 -15.3333 3 -29.3333 9 -42c17.3333 7.33333 38.3333 11 63 11c51.3333 0 77 -8.33333 77 -25\nc0 -19.3333 -28.6667 -29 -86 -29c-28 0 -48 5.66667 -60 17c-60.6667 -35.3333 -113.167 -92 -157.5 -170c-44.3333 -78 -66.5 -151.667 -66.5 -221c0 -71.3333 31 -119 93 -143zM347 593c7.33333 -4.66667 20.3333 -7 39 -7c28.6667 0 49.3333 2.66667 62 8\nc-16 4 -34.3333 6 -55 6s-36 -2.33333 -46 -7z"
            },
            "η": {
                x: 556,
                d: "M498 277l-115 -458c-6 -22.6667 -18.6667 -34 -38 -34c-7.33333 0 -13.6667 2.33333 -19 7s-8 10.6667 -8 18c0 1.33333 1 7 3 17l116 460c6 22.6667 9 44 9 64c0 46.6667 -18 70 -54 70c-37.3333 0 -70.3333 -13.3333 -99 -40\nc-11.3333 -9.33333 -22.1667 -21.1667 -32.5 -35.5c-10.3333 -14.3333 -17.8333 -25.8333 -22.5 -34.5s-7.66667 -14.6667 -9 -18l-33 -132l-22 -90c-8.66667 -35.3333 -14 -55.3333 -16 -60c-7.33333 -14 -18.6667 -21 -34 -21c-7.33333 0 -13.5 2.33333 -18.5 7\nc-5 4.66667 -7.5 10.6667 -7.5 18c0 7.33333 6 33.3333 18 78c7.33333 27.3333 14 54.6667 20 82l28 108c11.3333 50 17 80.6667 17 92c0 30.6667 -10.3333 46 -31 46c-18 0 -32.5 -10.5 -43.5 -31.5s-21.1667 -49.8333 -30.5 -86.5\nc-2.66667 -11.3333 -4.83333 -18.1667 -6.5 -20.5s-4.5 -3.5 -8.5 -3.5c-7.33333 0 -11 3 -11 9c0 2 1.33333 8.5 4 19.5s6.66667 24.6667 12 41c5.33333 16.3333 10.6667 29.8333 16 40.5c17.3333 34.6667 41 52 71 52c23.3333 0 43.5 -7.83333 60.5 -23.5\ns26.1667 -37.1667 27.5 -64.5c42 58.6667 93.3333 88 154 88c36.6667 0 64.3333 -9.66667 83 -29s28 -44.6667 28 -76c0 -18 -2.66667 -37.6667 -8 -59z"
            },
            "θ": {
                x: 503,
                d: "M453 503c0 -74 -14.3333 -151.167 -43 -231.5c-28.6667 -80.3333 -65.6667 -147.333 -111 -201c-45.3333 -53.6667 -90 -80.5 -134 -80.5c-24.6667 0 -45.3333 7.83333 -62 23.5c-16.6667 15.6667 -28.5 36 -35.5 61s-11.6667 46.5 -14 64.5s-3.5 35.3333 -3.5 52\nc0 72.6667 14.1667 149 42.5 229c28.3333 80 65.3333 147.333 111 202s90.8333 82 135.5 82c38 0 66.5 -19.3333 85.5 -58s28.5 -86.3333 28.5 -143zM150 362h211c21.3333 82.6667 32 148.667 32 198c0 82.6667 -18.3333 124 -55 124c-35.3333 0 -72.6667 -36 -112 -108\nc-26 -46.6667 -51.3333 -118 -76 -214zM354 332h-212c-21.3333 -88 -32 -154.333 -32 -199c0 -82 18.6667 -123 56 -123c33.3333 0 68.6667 32.6667 106 98c30 52.6667 57.3333 127.333 82 224z"
            },
            "ι": {
                x: 361,
                d: "M311 143c0 -24 -17.8333 -55.5 -53.5 -94.5c-35.6667 -39 -77.8333 -58.5 -126.5 -58.5c-26 0 -46 8.16667 -60 24.5c-14 16.3333 -21 35.1667 -21 56.5c0 13.3333 5 33.3333 15 60c10 26.6667 15.6667 42.6667 17 48c2 8 4 14.8333 6 20.5s4.33333 13.1667 7 22.5\nc8.66667 26 18.6667 61.6667 30 107c1.33333 5.33333 4.83333 19.1667 10.5 41.5s9.83333 37.1667 12.5 44.5c6.66667 17.3333 18.6667 26 36 26c6.66667 0 12.6667 -2.33333 18 -7s8 -10.6667 8 -18c0 -3.33333 -3.66667 -20 -11 -50s-18.1667 -69.8333 -32.5 -119.5\nc-14.3333 -49.6667 -29.1667 -94.8333 -44.5 -135.5c-10.6667 -30 -16 -52.6667 -16 -68c0 -9.33333 1.5 -16.6667 4.5 -22s6.16667 -8.5 9.5 -9.5s7.66667 -1.5 13 -1.5c26.6667 0 55.5 10.6667 86.5 32c31 21.3333 53.8333 53.6667 68.5 97c2.66667 8.66667 7 13 13 13\nc6.66667 0 10 -3 10 -9z"
            },
            "λ": {
                x: 582,
                d: "M306 623l201 -575c6 -18.6667 12.6667 -32.3333 20 -41c3.33333 -3.33333 5 -6.33333 5 -9c0 -5.33333 -3.66667 -8 -11 -8h-19c-14 0 -23 0.333333 -27 1s-8.33333 3.33333 -13 8c-9.33333 8.66667 -17.3333 22.6667 -24 42c-30 80.6667 -59.6667 165.333 -89 254\nc-22.6667 -26.6667 -55.3333 -65.6667 -98 -117c-42.6667 -51.3333 -77.5 -93.1667 -104.5 -125.5c-27 -32.3333 -42.8333 -50.8333 -47.5 -55.5c-5.33333 -5.33333 -12.3333 -8 -21 -8c-8 0 -14.6667 2.5 -20 7.5s-8 11.1667 -8 18.5c0 8.66667 6.66667 19.6667 20 33\nl260 263c6 6 9 9.33333 9 10s-8.66667 26.1667 -26 76.5s-35.3333 102 -54 155c-18.6667 53 -29.6667 82.5 -33 88.5c-7.33333 13.3333 -14 21.8333 -20 25.5s-13.6667 6.16667 -23 7.5c-7.33333 1.33333 -11 4.66667 -11 10c0 6.66667 5.66667 10 17 10\nc61.3333 0 100.333 -23.6667 117 -71z"
            },
            "ν": {
                x: 561,
                d: "M217 431l-99 -401c72 24 137.833 68.1667 197.5 132.5c59.6667 64.3333 103.5 145.833 131.5 244.5c6.66667 22.6667 19.3333 34 38 34c6.66667 0 12.6667 -2.33333 18 -7s8 -10.6667 8 -18c0 -2 -0.833333 -7.16667 -2.5 -15.5s-5.66667 -21.5 -12 -39.5\ns-14.5 -37 -24.5 -57s-24.5 -43.5 -43.5 -70.5s-40.5 -52.8333 -64.5 -77.5c-34.6667 -36 -75 -66.8333 -121 -92.5c-46 -25.6667 -82.3333 -42.6667 -109 -51c-26.6667 -8.33333 -44.3333 -12.5 -53 -12.5h-21c-6.66667 0 -10 3.33333 -10 10l88 353c2 8 3 14.6667 3 20\nc0 4 -0.833333 7.16667 -2.5 9.5s-6.33333 4.33333 -14 6c-7.66667 1.66667 -18.8333 2.5 -33.5 2.5c-14.6667 0 -22 3.33333 -22 10c0 5.33333 1.16667 9.5 3.5 12.5s4.66667 4.83333 7 5.5s5.83333 1.33333 10.5 2c4 0 23.6667 1.66667 59 5\nc35.3333 3.33333 54.3333 5 57 5c7.33333 0 11 -3.33333 11 -10z"
            },
            "ξ": {
                x: 517,
                d: "M289 -5l60 -24c32.6667 -14 49 -37.3333 49 -70c0 -24 -9.66667 -47.5 -29 -70.5s-44 -34.5 -74 -34.5c-16.6667 0 -33.6667 3.33333 -51 10c-17.3333 6.66667 -30.8333 13.6667 -40.5 21s-14.5 13 -14.5 17c0 6.66667 3.33333 10 10 10\nc2.66667 0 6.66667 -2.33333 12 -7c27.3333 -20.6667 55.3333 -31 84 -31c16 0 28.5 6 37.5 18s13.5 24.3333 13.5 37c0 14.6667 -6 26.3333 -18 35c-12 6.66667 -36.3333 16.6667 -73 30l-90 36c-14.6667 6 -26.1667 11.1667 -34.5 15.5c-8.33333 4.33333 -20 12 -35 23\ns-26.3333 24.5 -34 40.5c-7.66667 16 -11.5 34 -11.5 54c0 19.3333 4.83333 41.3333 14.5 66c9.66667 24.6667 26.1667 50.8333 49.5 78.5c23.3333 27.6667 51 50.1667 83 67.5c-44.6667 24.6667 -67 60.6667 -67 108c0 36 14.8333 71.8333 44.5 107.5\nc29.6667 35.6667 72.5 61.5 128.5 77.5c-4.66667 10 -7 23.6667 -7 41c0 30 5.33333 45 16 45c6.66667 0 10 -3.33333 10 -10c0 -0.666667 -0.333333 -2.66667 -1 -6s-1.33333 -7.66667 -2 -13s-1 -10.6667 -1 -16c0 -14.6667 2 -26.6667 6 -36\nc18.6667 3.33333 39.6667 5 63 5c53.3333 0 80 -8.33333 80 -25c0 -19.3333 -28.6667 -29 -86 -29c-30 0 -51 7 -63 21c-36.6667 -17.3333 -65 -42.3333 -85 -75c-20 -32.6667 -30 -64.3333 -30 -95c0 -36 11.3333 -63.3333 34 -82c24 8 51.6667 12 83 12\nc52.6667 0 79 -8.33333 79 -25c0 -19.3333 -30 -29 -90 -29c-29.3333 0 -53 2.66667 -71 8c-6 2 -10.6667 3 -14 3c-8 0 -21.8333 -8.16667 -41.5 -24.5s-38.6667 -38.6667 -57 -67c-18.3333 -28.3333 -27.5 -55.5 -27.5 -81.5c0 -40.6667 28.6667 -72 86 -94zM340 595\nc7.33333 -6 21.3333 -9 42 -9c28.6667 0 49.3333 2.66667 62 8c-16 4 -34.6667 6 -56 6c-20.6667 0 -36.6667 -1.66667 -48 -5zM261 321c12 -5.33333 29.3333 -8 52 -8c30 0 51 2.66667 63 8c-17.3333 4 -36.3333 6 -57 6c-22.6667 0 -42 -2 -58 -6z"
            },
            "π": {
                x: 627,
                d: "M283 377l-58 -226c-8 -33.3333 -16.6667 -64.3333 -26 -93c-4.66667 -17.3333 -8.5 -29.8333 -11.5 -37.5s-7.66667 -14.6667 -14 -21s-14.1667 -9.5 -23.5 -9.5c-18 0 -27 8.66667 -27 26c0 5.33333 2.66667 13.3333 8 24c54 114.667 97 227 129 337h-57\nc-51.3333 0 -94.3333 -27.3333 -129 -82c-5.33333 -6 -9.66667 -9 -13 -9c-7.33333 0 -11 2.66667 -11 8c0 3.33333 6.66667 15.5 20 36.5c13.3333 21 26 38.1667 38 51.5c30.6667 32.6667 65 49 103 49h329c8 0 14 -0.166667 18 -0.5s8.16667 -2.33333 12.5 -6\ns6.5 -8.83333 6.5 -15.5c0 -21.3333 -15.3333 -32 -46 -32h-112c-14 -60 -21 -115.667 -21 -167c0 -62 9 -116 27 -162c4.66667 -10 7 -17.3333 7 -22c0 -8.66667 -4 -16.8333 -12 -24.5s-17 -11.5 -27 -11.5c-27.3333 0 -41 40.6667 -41 122c0 54.6667 14.6667 143 44 265\nh-113z"
            },
            "ρ": {
                x: 563,
                d: "M53 -173l98 390c16 64.6667 46.5 118.167 91.5 160.5s90.5 63.5 136.5 63.5c37.3333 0 69 -14 95 -42s39 -67.3333 39 -118c0 -74 -25.6667 -141 -77 -201s-106 -90 -164 -90c-45.3333 0 -77.3333 23.6667 -96 71c-8.66667 -33.3333 -18.3333 -71.5 -29 -114.5\ns-18.8333 -76 -24.5 -99c-5.66667 -23 -9.16667 -35.8333 -10.5 -38.5c-6.66667 -16 -18.3333 -24 -35 -24c-7.33333 0 -13.6667 2.33333 -19 7s-8 10.6667 -8 18c0 1.33333 1 7 3 17zM271 10c25.3333 0 50 11 74 33s43.6667 50.6667 59 86c10 24 19.8333 56.1667 29.5 96.5\nc9.66667 40.3333 14.5 72.1667 14.5 95.5c0 30 -6.16667 54.1667 -18.5 72.5s-29.5 27.5 -51.5 27.5c-5.33333 0 -11.3333 -0.5 -18 -1.5s-17 -5.33333 -31 -13s-27.1667 -18 -39.5 -31s-25.6667 -33.3333 -40 -61c-14.3333 -27.6667 -26.1667 -60.1667 -35.5 -97.5\nc-0.666667 -4 -3.33333 -15.3333 -8 -34s-9.16667 -36.5 -13.5 -53.5s-6.5 -26.5 -6.5 -28.5c0 -6.66667 2 -16.3333 6 -29c4 -12.6667 13 -26.1667 27 -40.5c14 -14.3333 31.3333 -21.5 52 -21.5z"
            },
            "σ": {
                x: 616,
                d: "M520 377h-111c22 -30 33 -66.6667 33 -110c0 -73.3333 -26 -137.833 -78 -193.5c-52 -55.6667 -108.333 -83.5 -169 -83.5c-44 0 -79.1667 15 -105.5 45c-26.3333 30 -39.5 67 -39.5 111c0 30 6.5 61.5 19.5 94.5s30.5 63.6667 52.5 92s49.5 51.8333 82.5 70.5\ns67.5 28 103.5 28h221c8 0 14 -0.166667 18 -0.5s8.16667 -2.33333 12.5 -6s6.5 -8.83333 6.5 -15.5c0 -21.3333 -15.3333 -32 -46 -32zM196 10c23.3333 0 47.3333 8.16667 72 24.5c24.6667 16.3333 45.6667 38.8333 63 67.5c16 26 28.5 56.6667 37.5 92\ns13.5 63.6667 13.5 85c0 35.3333 -8.83333 60.5 -26.5 75.5s-39.1667 22.5 -64.5 22.5c-28 0 -53.1667 -7.16667 -75.5 -21.5s-40 -31.8333 -53 -52.5s-23.8333 -43.5 -32.5 -68.5c-8.66667 -25 -14.5 -47.1667 -17.5 -66.5s-4.5 -36 -4.5 -50\nc0 -34 8.16667 -60.5 24.5 -79.5c16.3333 -19 37.5 -28.5 63.5 -28.5z"
            },
            "τ": {
                x: 573,
                d: "M311 377l-68 -346c-5.33333 -28 -18.3333 -42 -39 -42c-9.33333 0 -16.1667 2.5 -20.5 7.5s-6.5 10.8333 -6.5 17.5c0 3.33333 1.66667 10 5 20l104 343h-83c-51.3333 0 -94.3333 -27.3333 -129 -82c-5.33333 -6 -9.66667 -9 -13 -9c-7.33333 0 -11 2.66667 -11 8\nc0 3.33333 6.66667 15.5 20 36.5c13.3333 21 26 38.1667 38 51.5c30.6667 32.6667 65 49 103 49h275c8 0 14 -0.166667 18 -0.5s8.16667 -2.33333 12.5 -6s6.5 -8.83333 6.5 -15.5c0 -21.3333 -15.3333 -32 -46 -32h-166z"
            },
            "υ": {
                x: 585,
                d: "M535 374c0 -28 -7 -70 -21 -126s-36.3333 -106.333 -67 -151c-48.6667 -71.3333 -103 -107 -163 -107c-43.3333 0 -80 10 -110 30s-45 53 -45 99c0 34.6667 18.6667 101 56 199c11.3333 29.3333 17 52.6667 17 70c0 22 -8.66667 33 -26 33\nc-20 0 -38.8333 -10.1667 -56.5 -30.5c-17.6667 -20.3333 -32.5 -51.5 -44.5 -93.5c-2 -8 -3.83333 -13 -5.5 -15s-4.5 -3 -8.5 -3c-7.33333 0 -11 3 -11 9c0 4 2.5 13.3333 7.5 28s12.3333 31.6667 22 51s23.3333 36.5 41 51.5c17.6667 15 37.1667 22.5 58.5 22.5\nc23.3333 0 42.3333 -7.83333 57 -23.5s22 -34.5 22 -56.5c0 -12 -5.66667 -33.6667 -17 -65c-34 -88 -51 -150.667 -51 -188c0 -31.3333 8.33333 -55.6667 25 -73c17.3333 -16.6667 41.3333 -25 72 -25c30 0 58.6667 11.1667 86 33.5c27.3333 22.3333 49.6667 49 67 80\ns31 61.3333 41 91s15 53.5 15 71.5c0 35.3333 -11.6667 64.6667 -35 88c-8 6.66667 -12 14.3333 -12 23c0 10 4.66667 19.8333 14 29.5s20 14.5 32 14.5c4.66667 0 9.5 -1.16667 14.5 -3.5s10.5 -8.83333 16.5 -19.5s9 -25.3333 9 -44z"
            },
            "φ": {
                x: 611,
                d: "M433 685l-59 -242c55.3333 -3.33333 100.333 -21.5 135 -54.5c34.6667 -33 52 -74.8333 52 -125.5c0 -65.3333 -29.5 -126.333 -88.5 -183c-59 -56.6667 -129.833 -87.3333 -212.5 -92l-37 -149l-12 -39c-1.33333 -2.66667 -4.33333 -4 -9 -4\nc-6.66667 0 -10 2.66667 -10 8c0 4.66667 7.33333 34.6667 22 90c2.66667 10.6667 6.5 26.3333 11.5 47c5 20.6667 8.83333 36.3333 11.5 47c-54 3.33333 -98.6667 21 -134 53c-35.3333 32 -53 74.3333 -53 127c0 64.6667 28.3333 124.833 85 180.5\nc56.6667 55.6667 125 86.8333 205 93.5c6 0 9.33333 1 10 3c1.33333 1.33333 3 6.33333 5 15l54 215c2 8.66667 3.66667 14 5 16s4.33333 3 9 3c6.66667 0 10 -3 10 -9zM368 423l-103 -414c37.3333 2.66667 71.3333 13.1667 102 31.5c30.6667 18.3333 55.5 41 74.5 68\ns33.5 55.6667 43.5 86s15 60.1667 15 89.5c0 45.3333 -12.6667 79.3333 -38 102s-56.6667 35 -94 37zM242 8l104 414c-46 -2.66667 -87.3333 -18.1667 -124 -46.5c-36.6667 -28.3333 -64.3333 -62.8333 -83 -103.5c-18.6667 -40.6667 -28 -82.3333 -28 -125\nc0 -26 4.33333 -48.5 13 -67.5c8.66667 -19 20.1667 -33.1667 34.5 -42.5c14.3333 -9.33333 28.3333 -16.3333 42 -21s27.5 -7.33333 41.5 -8z"
            },
            "χ": {
                x: 651,
                d: "M349 161l226 258c6.66667 7.33333 12 11 16 11c6.66667 0 10 -3.33333 10 -10c0 -2.66667 -3 -7.33333 -9 -14l-237 -270c24 -88.6667 46 -158.333 66 -209c10.6667 -26 20 -47.1667 28 -63.5c8 -16.3333 14.8333 -27.6667 20.5 -34s10 -10.1667 13 -11.5\ns6.83333 -2 11.5 -2c9.33333 0 19.1667 3.83333 29.5 11.5s18.1667 17.8333 23.5 30.5c2.66667 8 6.66667 12 12 12c7.33333 0 11 -3 11 -9c0 -10.6667 -7.66667 -24.1667 -23 -40.5s-35.3333 -24.5 -60 -24.5c-26 0 -48 5.16667 -66 15.5s-30 20.5 -36 30.5\ns-12.6667 23.6667 -20 41c-8 20 -29.3333 84.3333 -64 193l-116 -132c-69.3333 -80 -108 -124 -116 -132c-3.33333 -3.33333 -6.66667 -5 -10 -5c-6 0 -9 3.33333 -9 10c0 3.33333 3 8.66667 9 16l236 268c-25.3333 90.6667 -46.3333 157.333 -63 200\nc-30 80 -55 120 -75 120c-4.66667 0 -9.83333 -0.833333 -15.5 -2.5s-12.5 -6.16667 -20.5 -13.5s-14.3333 -17 -19 -29c-1.33333 -6 -5 -9 -11 -9c-7.33333 0 -11 3 -11 9c0 10.6667 7.66667 24.1667 23 40.5c15.3333 16.3333 35.3333 24.5 60 24.5\nc37.3333 0 66.3333 -9.33333 87 -28c6 -6 10.5 -11.1667 13.5 -15.5s7.83333 -13.8333 14.5 -28.5s15 -35.6667 25 -63c9.33333 -25.3333 17.5 -50 24.5 -74s14.1667 -47.6667 21.5 -71z"
            },
            "ψ": {
                x: 693,
                d: "M493 670l-164 -660c71.3333 0 135 31.3333 191 94c28.6667 32.6667 49.8333 65.6667 63.5 99s20.5 61 20.5 83c0 34.6667 -12 64 -36 88c-7.33333 7.33333 -11 15 -11 23c0 10 4.66667 19.8333 14 29.5s20 14.5 32 14.5c4.66667 0 9.66667 -1.16667 15 -3.5\ns10.8333 -9 16.5 -20s8.5 -25.5 8.5 -43.5c0 -22.6667 -4 -51.8333 -12 -87.5c-8 -35.6667 -15.3333 -61.8333 -22 -78.5c-17.3333 -44 -44 -85.6667 -80 -125c-60 -62 -128.667 -93 -206 -93c-3.33333 -16 -11.8333 -51.1667 -25.5 -105.5\nc-13.6667 -54.3333 -21.5 -82.5 -23.5 -84.5c-1.33333 -2.66667 -4 -4 -8 -4c-7.33333 0 -11 3 -11 9c0 4 7.66667 34.6667 23 92c2.66667 10 6.5 25.6667 11.5 47c5 21.3333 8.83333 37 11.5 47c-50 4 -90.8333 17.1667 -122.5 39.5\nc-31.6667 22.3333 -47.5 55.8333 -47.5 100.5c0 30 18 92.3333 54 187c11.3333 29.3333 17 52.6667 17 70c0 22 -8.66667 33 -26 33c-20 0 -39 -10.3333 -57 -31s-32.6667 -51.6667 -44 -93c-2 -8 -3.83333 -13 -5.5 -15s-4.5 -3 -8.5 -3c-7.33333 0 -11 3 -11 9\nc0 4 2.5 13.3333 7.5 28s12.3333 31.6667 22 51s23.3333 36.5 41 51.5c17.6667 15 37.1667 22.5 58.5 22.5c23.3333 0 42.3333 -7.83333 57 -23.5s22 -34.8333 22 -57.5c0 -11.3333 -6 -33.6667 -18 -67c-31.3333 -82.6667 -47 -139 -47 -169\nc0 -65.3333 38 -102.667 114 -112l165 662c2 8.66667 3.83333 14.1667 5.5 16.5s4.5 3.5 8.5 3.5c7.33333 0 11 -3 11 -9c0 -0.666667 -0.666667 -3.33333 -2 -8z"
            },
            "ω": {
                x: 682,
                d: "M632 376c0 -27.3333 -6.16667 -66.5 -18.5 -117.5s-25.1667 -91.1667 -38.5 -120.5c-44 -98.6667 -97.3333 -148 -160 -148c-63.3333 0 -100.333 36.3333 -111 109c-15.3333 -27.3333 -36 -52.3333 -62 -75c-26 -22.6667 -57.3333 -34 -94 -34\nc-34 0 -58.8333 13.5 -74.5 40.5c-15.6667 27 -23.5 58.8333 -23.5 95.5c0 47.3333 8 96.8333 24 148.5c16 51.6667 37 97.5 63 137.5c0.666667 1.33333 2.16667 3.66667 4.5 7s4 5.66667 5 7s2.5 3.16667 4.5 5.5s4.16667 3.83333 6.5 4.5s5.16667 1 8.5 1\nc8.66667 0 13 -6 13 -18c0 -0.666667 -5.66667 -9.66667 -17 -27c-55.3333 -76.6667 -83 -150 -83 -220c0 -77.3333 28.3333 -116 85 -116c28.6667 0 55.6667 10.6667 81 32c25.3333 21.3333 44 43.6667 56 67c-0.666667 12 1.83333 32.8333 7.5 62.5\ns11.8333 49.5 18.5 59.5c4.66667 8 11.3333 12 20 12c11.3333 0 17 -6.66667 17 -20c0 -24.6667 -11.3333 -63.6667 -34 -117c6 -30.6667 16.5 -54.3333 31.5 -71s37.1667 -25 66.5 -25c24.6667 0 48 9.66667 70 29c22 19.3333 40.6667 43.6667 56 73\nc25.3333 49.3333 38 90.6667 38 124c0 34.6667 -11.3333 65 -34 91c-8 8.66667 -12 16.6667 -12 24c0 10 4.66667 20 14 30s19 15 29 15c28.6667 0 43 -22 43 -66z"
            },
            "ε": {
                x: 496,
                d: "M163 228c-30 -16 -52.5 -35 -67.5 -57s-22.5 -42.6667 -22.5 -62c0 -16.6667 4.5 -31 13.5 -43s21 -21 36 -27s30.1667 -10.3333 45.5 -13s31.6667 -4 49 -4c81.3333 0 133.333 19.6667 156 59c4 6 7.66667 9 11 9c6 0 9 -3 9 -9c0 -3.33333 -2.16667 -8.66667 -6.5 -16\nc-4.33333 -7.33333 -11.3333 -16 -21 -26s-21.3333 -19.3333 -35 -28c-13.6667 -8.66667 -31.3333 -16.1667 -53 -22.5c-21.6667 -6.33333 -44.8333 -9.5 -69.5 -9.5c-47.3333 0 -85.5 11.8333 -114.5 35.5c-29 23.6667 -43.5 53.1667 -43.5 88.5\nc0 24.6667 8.16667 49.5 24.5 74.5c16.3333 25 38.8333 45.5 67.5 61.5c-27.3333 19.3333 -41 43.3333 -41 72c0 36.6667 22.3333 69.3333 67 98c44.6667 28.6667 95 43 151 43c32 0 61.1667 -6.66667 87.5 -20s39.5 -25.3333 39.5 -36c0 -6 -2.66667 -11.6667 -8 -17\ns-11 -8 -17 -8c-3.33333 0 -8.66667 2.33333 -16 7c-28 20.6667 -59.6667 31 -95 31c-48 0 -91.1667 -9 -129.5 -27s-57.5 -41.6667 -57.5 -71c0 -26 14.3333 -46 43 -60c28 12 58 18 90 18c46.6667 0 70 -8.33333 70 -25c0 -19.3333 -26 -29 -78 -29\nc-35.3333 0 -63.6667 4.33333 -85 13zM194 240c13.3333 -3.33333 31.3333 -5 54 -5c25.3333 0 43.6667 2.66667 55 8c-16 4 -32.3333 6 -49 6c-22 0 -42 -3 -60 -9z"
            },
            "ϑ": {
                x: 620,
                d: "M520 356l28 -7c14.6667 -2.66667 22 -6.33333 22 -11c0 -7.33333 -3 -11 -9 -11c-3.33333 0 -18.6667 3 -46 9c-14 -54.6667 -33.5 -107.667 -58.5 -159c-25 -51.3333 -55.6667 -95.3333 -92 -132c-36.3333 -36.6667 -72.5 -55 -108.5 -55c-40 0 -71.3333 8.33333 -94 25\nc-24 18.6667 -36 47.6667 -36 87c0 18 2.66667 38.6667 8 62l18 73c1.33333 4.66667 4.16667 16 8.5 34s7.5 31 9.5 39c7.33333 29.3333 11 51 11 65c0 30.6667 -10.3333 46 -31 46c-18 0 -32.5 -10.5 -43.5 -31.5s-21.1667 -49.8333 -30.5 -86.5\nc-2.66667 -11.3333 -4.83333 -18.1667 -6.5 -20.5s-4.5 -3.5 -8.5 -3.5c-7.33333 0 -11 3 -11 9c0 2 1.33333 8.5 4 19.5s6.66667 24.6667 12 41c5.33333 16.3333 10.6667 29.8333 16 40.5c17.3333 34.6667 41 52 71 52c22.6667 0 42.8333 -7.83333 60.5 -23.5\ns26.5 -37.8333 26.5 -66.5c0 -12 -3.33333 -30 -10 -54c-2.66667 -13.3333 -6.66667 -29.3333 -12 -48c-2.66667 -11.3333 -6.16667 -25.3333 -10.5 -42s-7.16667 -28.3333 -8.5 -35c-8.66667 -38 -13 -65.3333 -13 -82c0 -53.3333 24.3333 -80 73 -80\nc20 0 39 9.33333 57 28c18 18.6667 37.6667 48.6667 59 90c28 57.3333 53 133 75 227c-18 6 -35.1667 13.1667 -51.5 21.5s-33.3333 19 -51 32s-31.6667 29.3333 -42 49s-15.5 41.1667 -15.5 64.5c0 40.6667 14.3333 81.1667 43 121.5s62.3333 60.5 101 60.5\nc21.3333 0 39.5 -6.66667 54.5 -20s26 -30.8333 33 -52.5s11.8333 -42.3333 14.5 -62s4 -39.8333 4 -60.5c0 -44.6667 -6.66667 -95.6667 -20 -153zM456 375c19.3333 86 29 149.333 29 190c0 16.6667 -0.5 31 -1.5 43s-3.16667 24.3333 -6.5 37s-8.83333 22.3333 -16.5 29\ns-17.1667 10 -28.5 10c-31.3333 0 -59.1667 -18 -83.5 -54s-36.5 -71.6667 -36.5 -107c0 -66.6667 48 -116 144 -148z"
            },
            "ϖ": {
                x: 872,
                d: "M211 431h574c8 0 14 -0.166667 18 -0.5s8.16667 -2.33333 12.5 -6s6.5 -8.83333 6.5 -15.5c0 -15.3333 -7.33333 -25.3333 -22 -30c-4 -1.33333 -20.6667 -2 -50 -2c7.33333 -25.3333 11 -50.3333 11 -75c0 -26.6667 -5.5 -57.3333 -16.5 -92s-26 -68.6667 -45 -102\nc-19 -33.3333 -43.5 -61.3333 -73.5 -84c-30 -22.6667 -61.6667 -34 -95 -34c-67.3333 0 -101 44 -101 132c0 12 0.666667 24 2 36l-1 1c-26 -50.6667 -57.6667 -91.5 -95 -122.5s-77 -46.5 -119 -46.5c-56.6667 0 -85 37.3333 -85 112c0 90.6667 35.6667 182.333 107 275\nc-34 0 -56.3333 -0.833333 -67 -2.5s-22.3333 -6.5 -35 -14.5c-24.6667 -14.6667 -45.6667 -36 -63 -64c-4 -6.66667 -8.33333 -10 -13 -10c-7.33333 0 -11 2.66667 -11 8c0 3.33333 6.66667 15.5 20 36.5c13.3333 21 26 38.1667 38 51.5c30.6667 32.6667 65 49 103 49z\nM727 377h-461c-71.3333 -86 -107 -166.667 -107 -242c0 -60.6667 22.3333 -91 67 -91c42 0 84.6667 19.5 128 58.5s76.6667 99.1667 100 180.5c2.66667 6.66667 6.66667 10 12 10c7.33333 0 11 -3 11 -9c0 -2 -2 -11.3333 -6 -28c-8 -32 -12 -64.6667 -12 -98\nc0 -76 27 -114 81 -114c34.6667 0 67.8333 13.8333 99.5 41.5c31.6667 27.6667 56.1667 61.3333 73.5 101s26 78.1667 26 115.5c0 26.6667 -4 51.6667 -12 75z"
            },
            "ς": {
                x: 470,
                d: "M240 25l-97 55c-11.3333 6.66667 -20.6667 12.5 -28 17.5s-16.8333 13.1667 -28.5 24.5c-11.6667 11.3333 -20.6667 24.8333 -27 40.5c-6.33333 15.6667 -9.5 33.1667 -9.5 52.5c0 57.3333 27 109.333 81 156s117 70 189 70c24 0 46.6667 -2.66667 68 -8\ns32 -12.6667 32 -22c0 -3.33333 -1.5 -6.66667 -4.5 -10s-6.5 -5 -10.5 -5c-2.66667 0 -6.33333 1.33333 -11 4c-30.6667 14 -57 21 -79 21c-54.6667 0 -104.333 -17.8333 -149 -53.5c-44.6667 -35.6667 -67 -76.5 -67 -122.5c0 -15.3333 1.83333 -28.5 5.5 -39.5\ns10.8333 -21.3333 21.5 -31c10.6667 -9.66667 20 -17 28 -22s21 -12.8333 39 -23.5l56 -31c0.666667 -0.666667 7.83333 -4.83333 21.5 -12.5s22.5 -12.8333 26.5 -15.5c27.3333 -14.6667 41 -38.3333 41 -71c0 -25.3333 -9.83333 -49.3333 -29.5 -72\nc-19.6667 -22.6667 -43.5 -34 -71.5 -34c-10.6667 0 -23 2.16667 -37 6.5c-14 4.33333 -21 9.5 -21 15.5s3.33333 9 10 9c2.66667 0 6 -1 10 -3c12.6667 -5.33333 25.3333 -8 38 -8c15.3333 0 27.1667 6 35.5 18s12.5 24.3333 12.5 37c0 10 -2.33333 18.6667 -7 26\nc-4.66667 7.33333 -9.33333 12.6667 -14 16c-4.66667 3.33333 -12.6667 8.33333 -24 15z"
            },
            "ϕ": {
                x: 658,
                d: "M302 44c74.6667 0 140.167 25.1667 196.5 75.5c56.3333 50.3333 84.5 104.833 84.5 163.5c0 29.3333 -8.16667 54 -24.5 74s-39.8333 30 -70.5 30c-42.6667 0 -81.8333 -20.3333 -117.5 -61s-61.5 -93.6667 -77.5 -159c-2 -6.66667 -4.83333 -19.6667 -8.5 -39\nc-3.66667 -19.3333 -7 -37.1667 -10 -53.5c-3 -16.3333 -4.5 -24.8333 -4.5 -25.5c0 -3.33333 10.6667 -5 32 -5zM259 -8c-0.666667 -4 -3.83333 -21.3333 -9.5 -52c-5.66667 -30.6667 -11.1667 -59.6667 -16.5 -87c-5.33333 -27.3333 -8.33333 -42.3333 -9 -45\nc-6.66667 -16 -18.6667 -24 -36 -24s-26 8.33333 -26 25c0 4 1.66667 11 5 21l52 169c-46 10 -85.6667 31.3333 -119 64c-33.3333 32.6667 -50 75 -50 127c0 44.6667 13.5 96 40.5 154s47.8333 87 62.5 87c6.66667 0 10 -2.66667 10 -8\nc0 -2.66667 -3.66667 -8.33333 -11 -17c-25.3333 -31.3333 -44.8333 -68.3333 -58.5 -111c-13.6667 -42.6667 -20.5 -74.3333 -20.5 -95c0 -36 13.5 -67.3333 40.5 -94c27 -26.6667 67.8333 -45.3333 122.5 -56c10.6667 35.3333 19 62.5 25 81.5s14.6667 44.6667 26 77\ns21.3333 57.5 30 75.5s20 38.5 34 61.5s27.8333 40.3333 41.5 52s29.5 21.8333 47.5 30.5s37 13 57 13c38.6667 0 66.8333 -13.5 84.5 -40.5s26.5 -58.5 26.5 -94.5c0 -80 -32.1667 -152.667 -96.5 -218c-64.3333 -65.3333 -137.167 -98 -218.5 -98\nc-14.6667 0 -26 0.666667 -34 2z"
            },
            "↼": {
                x: 970,
                d: "M886 231h-810c-12 0 -19.3333 0.666667 -22 2s-4 5.33333 -4 12s3.33333 11.6667 10 15c45.3333 28 83.8333 60.1667 115.5 96.5s58.5 82.5 80.5 138.5c2.66667 6 5 9.83333 7 11.5s6.66667 2.5 14 2.5c12 0 18 -3.33333 18 -10c0 -6 -4.66667 -20.1667 -14 -42.5\ns-27.1667 -52.5 -53.5 -90.5s-56.8333 -70.6667 -91.5 -98h750c7.33333 0 13 -0.166667 17 -0.5s7.83333 -2 11.5 -5s5.5 -7.5 5.5 -13.5c0 -12 -11.3333 -18 -34 -18z"
            },
            "↽": {
                x: 970,
                d: "M886 231h-750c34.6667 -27.3333 65.1667 -60 91.5 -98s44.1667 -68.1667 53.5 -90.5c9.33333 -22.3333 14 -36.5 14 -42.5c0 -6.66667 -6 -10 -18 -10c-6.66667 0 -11.1667 1 -13.5 3s-5.5 8 -9.5 18c-13.3333 33.3333 -29.1667 63.5 -47.5 90.5s-37.8333 50 -58.5 69\nc-20.6667 19 -37 32.8333 -49 41.5s-26 18 -42 28c-4.66667 3.33333 -7 8 -7 14c0 6.66667 1.33333 10.6667 4 12s10 2 22 2h810c7.33333 0 13 -0.166667 17 -0.5s7.83333 -2 11.5 -5s5.5 -7.5 5.5 -13.5c0 -12 -11.3333 -18 -34 -18z"
            },
            "⇀": {
                x: 970,
                d: "M894 231h-810c-22.6667 0 -34 6 -34 18c0 8.66667 2.83333 14 8.5 16c5.66667 2 14.1667 3 25.5 3h750c-34.6667 27.3333 -65.1667 60 -91.5 98s-44.1667 68.1667 -53.5 90.5s-14 36.5 -14 42.5c0 6.66667 6 10 18 10c6.66667 0 11.1667 -1 13.5 -3s5.5 -8 9.5 -18\nc38.6667 -96 105 -172.667 199 -230c3.33333 -2 5 -6.33333 5 -13s-1.33333 -10.6667 -4 -12s-10 -2 -22 -2z"
            },
            "⇁": {
                x: 970,
                d: "M834 231h-750c-22.6667 0 -34 6 -34 18c0 8.66667 2.83333 14 8.5 16c5.66667 2 14.1667 3 25.5 3h810c12 0 19.3333 -0.666667 22 -2s4 -5.33333 4 -12c0 -6 -3.33333 -11 -10 -15c-47.3333 -30 -86.6667 -63.5 -118 -100.5s-57.3333 -81.8333 -78 -134.5\nc-2.66667 -6 -5 -9.83333 -7 -11.5s-6.66667 -2.5 -14 -2.5c-12 0 -18 3.33333 -18 10c0 6 4.66667 20.1667 14 42.5c9.33333 22.3333 27.1667 52.5 53.5 90.5s56.8333 70.6667 91.5 98z"
            },
            "↩": {
                x: 263,
                d: "M213 250c0 -12.6667 -8 -19 -24 -19c-32.6667 0 -64 9.66667 -94 29c-30 19.3333 -45 47 -45 83c0 34.6667 14.8333 61.8333 44.5 81.5c29.6667 19.6667 61.1667 29.5 94.5 29.5c16 0 24 -6.33333 24 -19c0 -3.33333 -1.5 -7 -4.5 -11s-8.16667 -6.33333 -15.5 -7\nc-35.3333 -2 -61.8333 -10 -79.5 -24c-17.6667 -14 -26.5 -31 -26.5 -51c0 -19.3333 8.83333 -36 26.5 -50c17.6667 -14 42.5 -22 74.5 -24c16.6667 0 25 -6 25 -18z"
            },
            "↪": {
                x: 263,
                d: "M213 342c0 -34.6667 -14.8333 -61.8333 -44.5 -81.5c-29.6667 -19.6667 -61.1667 -29.5 -94.5 -29.5c-16 0 -24 6.33333 -24 19c0 4 1.5 7.83333 4.5 11.5s8.16667 5.83333 15.5 6.5c35.3333 2 61.8333 10 79.5 24s26.5 31 26.5 51c0 19.3333 -8.83333 36 -26.5 50\ns-42.5 22 -74.5 24c-16.6667 0 -25 6 -25 18c0 12.6667 8 19 24 19c32.6667 0 64 -9.66667 94 -29s45 -47 45 -83z"
            },
            "&#x3c;": {
                x: 697,
                d: "M627 487l-515 -238l515 -237c13.3333 -6 20 -13 20 -21c0 -12.6667 -6.33333 -19 -19 -19c-1.33333 0 -7 2.33333 -17 7l-541 249c-13.3333 6 -20 13.3333 -20 22c0 8 6.66667 15 20 21l541 249c10.6667 4.66667 16.3333 7 17 7c12.6667 0 19 -6.33333 19 -19\nc0 -8 -6.66667 -15 -20 -21z"
            },
            "&#x3e;": {
                x: 697,
                d: "M627 228l-541 -249c-10.6667 -4.66667 -16.3333 -7 -17 -7c-5.33333 0 -9.83333 1.83333 -13.5 5.5s-5.5 7.83333 -5.5 12.5c0 8.66667 6.66667 16 20 22l515 238l-514 237c-14 6.66667 -21 14 -21 22c0 4.66667 1.83333 8.83333 5.5 12.5s8.16667 5.5 13.5 5.5\nc1.33333 0 7 -2.33333 17 -7l541 -249c13.3333 -6 20 -13 20 -21c0 -8.66667 -6.66667 -16 -20 -22z"
            },
            "∂": {
                x: 615,
                d: "M466 334h1c19.3333 71.3333 29 129.667 29 175c0 56 -13 100.333 -39 133s-61 49 -105 49c-66 0 -114 -27 -144 -81c29.3333 0 44 -10.3333 44 -31c0 -10.6667 -4.33333 -21.5 -13 -32.5s-21 -16.5 -37 -16.5c-12 0 -20.6667 3.5 -26 10.5s-8 13.8333 -8 20.5\nc0 8.66667 3.16667 20.6667 9.5 36s16.1667 32.1667 29.5 50.5s33.1667 34.1667 59.5 47.5c26.3333 13.3333 56.1667 20 89.5 20c62.6667 0 113.167 -24.1667 151.5 -72.5c38.3333 -48.3333 57.5 -109.167 57.5 -182.5c0 -29.3333 -4 -63.5 -12 -102.5\ns-21 -80.8333 -39 -125.5c-18 -44.6667 -39.6667 -85.6667 -65 -123c-25.3333 -37.3333 -57.3333 -68.3333 -96 -93c-38.6667 -24.6667 -80.3333 -37 -125 -37c-32 0 -60.1667 6.16667 -84.5 18.5c-24.3333 12.3333 -43 28 -56 47s-22.5 38 -28.5 57s-9 36.8333 -9 53.5\nc0 78.6667 29.6667 148.667 89 210c59.3333 61.3333 124.667 92 196 92c41.3333 0 72.6667 -12.1667 94 -36.5s33.6667 -53.1667 37 -86.5zM231 6c36 0 68.8333 11.8333 98.5 35.5c29.6667 23.6667 52.8333 52.5 69.5 86.5s29.3333 66.6667 38 98\nc8.66667 31.3333 13 57.3333 13 78c0 34.6667 -8.5 65.5 -25.5 92.5s-45.8333 40.5 -86.5 40.5c-24 0 -46.8333 -5.16667 -68.5 -15.5c-21.6667 -10.3333 -39.5 -23.5 -53.5 -39.5s-25 -30.1667 -33 -42.5s-14.3333 -23.5 -19 -33.5c-8.66667 -21.3333 -18 -52.3333 -28 -93\ns-15 -71 -15 -91c0 -12.6667 1.5 -24.8333 4.5 -36.5s8 -24 15 -37s18.3333 -23.3333 34 -31c15.6667 -7.66667 34.5 -11.5 56.5 -11.5z"
            },
            "⌣": {
                x: 968,
                d: "M918 358c0 -3.33333 -5.5 -12.6667 -16.5 -28s-28.6667 -34.1667 -53 -56.5c-24.3333 -22.3333 -52.6667 -43.8333 -85 -64.5s-73.3333 -38.3333 -123 -53s-101.833 -22 -156.5 -22c-54.6667 0 -106.833 7.33333 -156.5 22s-90.6667 32.5 -123 53.5\ns-60.6667 42.6667 -85 65c-24.3333 22.3333 -42 41 -53 56s-16.5 24.1667 -16.5 27.5c0 6.66667 3.33333 10 10 10c4 0 7.33333 -1.66667 10 -5c42.6667 -56.6667 94 -100.333 154 -131c76 -37.3333 162.667 -56 260 -56c182.667 0 320 61.3333 412 184\nc3.33333 5.33333 7.33333 8 12 8c6.66667 0 10 -3.33333 10 -10z"
            },
            "ℓ": {
                x: 481,
                d: "M129 170c-2 37.3333 1.83333 80.5 11.5 129.5s18.3333 85 26 108s13.8333 40.5 18.5 52.5c6 16.6667 13.6667 35.3333 23 56c9.33333 20.6667 22.6667 46.8333 40 78.5c17.3333 31.6667 37.1667 57.8333 59.5 78.5s44.1667 31 65.5 31c38.6667 0 58 -25 58 -75\nc0 -118 -81.3333 -261 -244 -429c-4.66667 -5.33333 -7 -25.3333 -7 -60c0 -88 20.3333 -132 61 -132c32 0 71.6667 23 119 69c12.6667 12.6667 20.3333 19 23 19s5 -1.16667 7 -3.5s3 -4.83333 3 -7.5c0 -4 -7.66667 -13 -23 -27s-28 -25 -38 -33\nc-32.6667 -24.6667 -63.3333 -37 -92 -37c-18.6667 0 -35 4.66667 -49 14c-14 9.33333 -25 22 -33 38s-14 32.3333 -18 49c-4 16.6667 -7 34.3333 -9 53c-5.33333 -6 -17.8333 -18.1667 -37.5 -36.5c-19.6667 -18.3333 -30.5 -27.5 -32.5 -27.5\nc-7.33333 0 -11 3.66667 -11 11c0 2 26.3333 29 79 81zM189 232c50.6667 53.3333 91.6667 102.333 123 147c64.6667 93.3333 97 177 97 251c0 36 -12 54 -36 54c-17.3333 0 -35.3333 -14.6667 -54 -44c-24.6667 -41.3333 -48.1667 -97.8333 -70.5 -169.5\nc-22.3333 -71.6667 -37 -124.333 -44 -158s-12.1667 -60.5 -15.5 -80.5z"
            },
            "℘": {
                x: 630,
                d: "M139 121c19.3333 -26.6667 39.6667 -53 61 -79c18.6667 -25.3333 30.5 -43.1667 35.5 -53.5c5 -10.3333 7.5 -23.8333 7.5 -40.5c0 -39.3333 -13.5 -76.3333 -40.5 -111s-56.8333 -52 -89.5 -52c-42 0 -63 25.6667 -63 77c0 50.6667 16.3333 122.667 49 216\nc-17.3333 22.6667 -28.6667 40.3333 -34 53c-5.33333 12.6667 -8 31 -8 55c0 62.6667 17.8333 122.667 53.5 180c35.6667 57.3333 71.5 86 107.5 86c7.33333 0 11 -2.66667 11 -8c0 -6.66667 -4 -10.6667 -12 -12c-32 -6.66667 -59.5 -34.1667 -82.5 -82.5\ns-34.5 -93.5 -34.5 -135.5c0 -30.6667 8 -55 24 -73c40.6667 78.6667 84 138.667 130 180c63.3333 58.6667 129.667 88 199 88c40 0 71.1667 -14.5 93.5 -43.5s33.5 -63.8333 33.5 -104.5c0 -67.3333 -23.6667 -129.333 -71 -186c-47.3333 -56.6667 -98.6667 -85 -154 -85\nc-24 0 -44.6667 7.16667 -62 21.5c-17.3333 14.3333 -26 34.5 -26 60.5c0 27.3333 8.33333 41 25 41c11.3333 0 17 -5.66667 17 -17c0 -12 -6.66667 -19.3333 -20 -22c0 -24 7.16667 -40.6667 21.5 -50c14.3333 -9.33333 29.1667 -14 44.5 -14c22 0 43.3333 8.5 64 25.5\ns38 37.8333 52 62.5c14.6667 27.3333 27 60.5 37 99.5s15 70.5 15 94.5c0 29.3333 -6 52.8333 -18 70.5s-30 26.5 -54 26.5c-63.3333 0 -122.833 -25.6667 -178.5 -77c-55.6667 -51.3333 -100.167 -115 -133.5 -191zM114 57c-8.66667 -24 -17.8333 -57.1667 -27.5 -99.5\nc-9.66667 -42.3333 -14.5 -73.8333 -14.5 -94.5c0 -38.6667 13.6667 -58 41 -58c21.3333 0 41 12 59 36s27 50.3333 27 79c0 16.6667 -4 30.6667 -12 42z"
            },
            "⁀": {
                x: 475,
                d: "M425 564c0 -10.6667 -1.16667 -17.3333 -3.5 -20s-5.5 -4 -9.5 -4c-7.33333 0 -11 3 -11 9c0 0.666667 0.333333 2.66667 1 6s1 5.33333 1 6c0 20.6667 -13.1667 38.3333 -39.5 53s-60.8333 22 -103.5 22c-38.6667 0 -77 -7.33333 -115 -22s-62.6667 -37 -74 -67\nc-2 -4.66667 -5.66667 -7 -11 -7c-6.66667 0 -10 3 -10 9c0 21.3333 20 46 60 74s91 42 153 42c49.3333 0 88.6667 -9.83333 118 -29.5s44 -43.5 44 -71.5z"
            },
            "ο": {
                x: 515,
                d: "M465 275c0 -70.6667 -27.1667 -135.833 -81.5 -195.5c-54.3333 -59.6667 -114.5 -89.5 -180.5 -89.5c-45.3333 0 -82.1667 15.6667 -110.5 47c-28.3333 31.3333 -42.5 71 -42.5 119c0 70.6667 27.1667 135.833 81.5 195.5c54.3333 59.6667 114.5 89.5 180.5 89.5\nc45.3333 0 82.1667 -15.6667 110.5 -47s42.5 -71 42.5 -119zM204 10c22 0 45.1667 7.66667 69.5 23c24.3333 15.3333 46.1667 38.6667 65.5 70c17.3333 28 31.5 63.6667 42.5 107s16.5 77 16.5 101c0 34 -8.16667 60.8333 -24.5 80.5s-37.1667 29.5 -62.5 29.5\nc-23.3333 0 -47.6667 -8.16667 -73 -24.5c-25.3333 -16.3333 -48.3333 -42.5 -69 -78.5c-13.3333 -24 -25.3333 -57 -36 -99c-10.6667 -42 -16 -75 -16 -99c0 -34 8.16667 -60.8333 24.5 -80.5c16.3333 -19.6667 37.1667 -29.5 62.5 -29.5z"
            },
            "μ": {
                x: 632,
                d: "M166 22l-47 -186c-2.66667 -12 -5.16667 -20.8333 -7.5 -26.5s-6.33333 -11.1667 -12 -16.5c-5.66667 -5.33333 -13.1667 -8 -22.5 -8c-7.33333 0 -13.6667 2.33333 -19 7s-8 10.6667 -8 18c0 1.33333 1 7 3 17l145 579c6 23.3333 19 35 39 35\nc6.66667 0 12.6667 -2.33333 18 -7c5.33333 -4.66667 8 -10.6667 8 -18c0 -5.33333 -4.33333 -24.3333 -13 -57l-45 -180c-8.66667 -36.6667 -13 -63.6667 -13 -81c0 -58.6667 24.6667 -88 74 -88c42.6667 0 80.6667 23.6667 114 71c8 10 14 22.6667 18 38l70 278\nc6 22.6667 18.6667 34 38 34c7.33333 0 13.6667 -2.33333 19 -7s8 -10.6667 8 -18c0 -2 -5.66667 -25.6667 -17 -71c-7.33333 -27.3333 -14 -54.6667 -20 -82l-28 -108c-10.6667 -46 -16 -75.6667 -16 -89c0 -30.6667 10.3333 -46 31 -46c12.6667 0 24.1667 6.66667 34.5 20\nc10.3333 13.3333 18.1667 27.5 23.5 42.5s11 34.8333 17 59.5c2 8.66667 3.83333 14.1667 5.5 16.5s4.5 3.5 8.5 3.5c6.66667 0 10 -3 10 -9c0 -2 -1.33333 -8.5 -4 -19.5s-6.5 -24.5 -11.5 -40.5s-9.83333 -29 -14.5 -39c-18 -36 -42 -54 -72 -54\nc-20 0 -38.3333 6.16667 -55 18.5c-16.6667 12.3333 -27.3333 30.8333 -32 55.5c-36.6667 -49.3333 -80.3333 -74 -131 -74c-40.6667 0 -72.6667 10.6667 -96 32z"
            },
            "&#xb7;": {
                x: 406,
                d: "M256 250c0 -14.6667 -5.16667 -27.1667 -15.5 -37.5s-22.8333 -15.5 -37.5 -15.5s-27.1667 5.16667 -37.5 15.5s-15.5 22.8333 -15.5 37.5c0 14.6667 5.16667 27.1667 15.5 37.5s22.8333 15.5 37.5 15.5s27.1667 -5.16667 37.5 -15.5s15.5 -22.8333 15.5 -37.5z"
            },
            "&#xd7;": {
                x: 783,
                d: "M392 278l198 198c10 10 17.6667 15 23 15c6 0 10.8333 -2 14.5 -6s5.5 -8.66667 5.5 -14c0 -2 -1.66667 -6.33333 -5 -13c-2 -2 -6.33333 -6.16667 -13 -12.5s-10.6667 -10.5 -12 -12.5l-183 -183l74 -74c35.3333 -35.3333 66.8333 -66.6667 94.5 -94\nc27.6667 -27.3333 41.5 -41.3333 41.5 -42c2 -3.33333 3 -7 3 -11c0 -5.33333 -1.83333 -10 -5.5 -14s-8.5 -6 -14.5 -6c-2 0 -7 2 -15 6l-207 207l-199 -199c-9.33333 -9.33333 -16.6667 -14 -22 -14s-10 2 -14 6s-6 8.66667 -6 14c0 4.66667 4.33333 11.3333 13 20\nl200 201l-200 201c-8.66667 8.66667 -13 15.3333 -13 20c0 5.33333 2 10 6 14s8.66667 6 14 6s12.6667 -4.66667 22 -14z"
            },
            "&#xf7;": {
                x: 968,
                d: "M548 466c0 -16.6667 -6 -31.3333 -18 -44s-27.3333 -19 -46 -19c-18 0 -33.1667 6.33333 -45.5 19s-18.5 27.3333 -18.5 44s6 31.3333 18 44c12 12.6667 27.3333 19 46 19c18 0 33.1667 -6.33333 45.5 -19c12.3333 -12.6667 18.5 -27.3333 18.5 -44zM548 34\nc0 -16.6667 -6 -31.3333 -18 -44c-12 -12.6667 -27.3333 -19 -46 -19c-18 0 -33.1667 6.33333 -45.5 19c-12.3333 12.6667 -18.5 27.3333 -18.5 44c0 16.6667 6 31.3333 18 44s27.3333 19 46 19c18 0 33.1667 -6.33333 45.5 -19s18.5 -27.3333 18.5 -44zM185 270h598\nc7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-598c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5z"
            },
            "⋄": {
                x: 776,
                d: "M410 474l203 -203c8.66667 -8.66667 13 -15.6667 13 -21s-1.66667 -9.66667 -5 -13l-24 -25l-171 -171l-25 -24c-3.33333 -3.33333 -7.66667 -5 -13 -5c-2 0 -3.83333 0.333333 -5.5 1s-3.16667 1.33333 -4.5 2l-2 1c-3.33333 4.66667 -11.6667 13 -25 25l-142 143\nc-34.6667 34.6667 -53 52.6667 -55 54c-2.66667 5.33333 -4 9.33333 -4 12c0 4.66667 4.33333 11.3333 13 20l205 205c8.66667 8.66667 15.3333 13 20 13c5.33333 0 12.6667 -4.66667 22 -14zM388 440l-189 -190l190 -190l189 190z"
            },
            "&#xb1;": {
                x: 967,
                d: "M504 313v-273h278c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5c-4 -0.333333 -9.66667 -0.5 -17 -0.5h-597c-7.33333 0 -13 0.166667 -17 0.5c-4 0.333333 -8 2.16667 -12 5.5\nc-4 3.33333 -6 8 -6 14s2 10.6667 6 14c4 3.33333 8 5.16667 12 5.5s9.66667 0.5 17 0.5h279v273h-279c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h279v279c0 22.6667 6.66667 34 20 34\ns20 -12.3333 20 -37v-276h278c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-278z"
            },
            "∓": {
                x: 967,
                d: "M504 147v-276c0 -24.6667 -6.66667 -37 -20 -37s-20 11.3333 -20 34v279h-279c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h279v273h-279c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5\ns-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h597c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-278v-273h278c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5\ns6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-278z"
            },
            "⊕": {
                x: 967,
                d: "M817 250c0 -91.3333 -32.5 -169.667 -97.5 -235c-65 -65.3333 -143.833 -98 -236.5 -98c-91.3333 0 -169.667 32.5 -235 97.5c-65.3333 65 -98 143.5 -98 235.5c0 91.3333 32.5 169.667 97.5 235c65 65.3333 143.833 98 236.5 98c91.3333 0 169.667 -32.5 235 -97.5\ns98 -143.5 98 -235.5zM175 263h296v295c-79.3333 -4 -147.333 -33.5 -204 -88.5c-56.6667 -55 -87.3333 -123.833 -92 -206.5zM496 558v-295h296c-4.66667 82.6667 -35.3333 151.5 -92 206.5s-124.667 84.5 -204 88.5zM471 -58v296h-296\nc4.66667 -84 35.3333 -153.333 92 -208c56.6667 -54.6667 124.667 -84 204 -88zM792 238h-296v-296c78.6667 4 146.5 33.3333 203.5 88c57 54.6667 87.8333 124 92.5 208z"
            },
            "⊗": {
                x: 967,
                d: "M817 250c0 -91.3333 -32.5 -169.667 -97.5 -235c-65 -65.3333 -143.833 -98 -236.5 -98c-91.3333 0 -169.667 32.5 -235 97.5c-65.3333 65 -98 143.5 -98 235.5c0 91.3333 32.5 169.667 97.5 235c65 65.3333 143.833 98 236.5 98c91.3333 0 169.667 -32.5 235 -97.5\ns98 -143.5 98 -235.5zM285 465l199 -198l208 209c-58 54.6667 -127.667 82 -209 82c-37.3333 0 -73.1667 -6.66667 -107.5 -20s-59.5 -26.3333 -75.5 -39s-24 -20.3333 -24 -23c0 -1.33333 3 -5 9 -11zM256 41l209 209l-209 209c-54 -61.3333 -81 -131 -81 -209\nc0 -79.3333 27 -149 81 -209zM710 459l-208 -209l209 -209c54 61.3333 81 131 81 209c0 81.3333 -27.3333 151 -82 209zM682 35l-199 198l-208 -209c58 -54.6667 127.667 -82 209 -82c37.3333 0 73.1667 6.66667 107.5 20c34.3333 13.3333 59.5 26.3333 75.5 39\ns24 20.3333 24 23c0 1.33333 -3 5 -9 11z"
            },
            "⊘": {
                x: 967,
                d: "M817 250c0 -91.3333 -32.5 -169.667 -97.5 -235c-65 -65.3333 -143.833 -98 -236.5 -98c-91.3333 0 -169.667 32.5 -235 97.5c-65.3333 65 -98 143.5 -98 235.5c0 91.3333 32.5 169.667 97.5 235c65 65.3333 143.833 98 236.5 98c91.3333 0 169.667 -32.5 235 -97.5\ns98 -143.5 98 -235.5zM266 51l426 425c-58 54.6667 -127.667 82 -209 82c-84.6667 0 -157.167 -30 -217.5 -90c-60.3333 -60 -90.5 -132.667 -90.5 -218c0 -38 6.83333 -74.1667 20.5 -108.5c13.6667 -34.3333 26.6667 -59.3333 39 -75\nc12.3333 -15.6667 19.8333 -23.5 22.5 -23.5l2 1c2 2.66667 4.33333 5 7 7zM710 459l-435 -435c58 -54.6667 127.667 -82 209 -82c84.6667 0 157.167 30 217.5 90s90.5 132.667 90.5 218c0 81.3333 -27.3333 151 -82 209z"
            },
            "⊙": {
                x: 967,
                d: "M817 250c0 -91.3333 -32.5 -169.667 -97.5 -235c-65 -65.3333 -143.833 -98 -236.5 -98c-91.3333 0 -169.667 32.5 -235 97.5c-65.3333 65 -98 143.5 -98 235.5c0 91.3333 32.5 169.667 97.5 235c65 65.3333 143.833 98 236.5 98c91.3333 0 169.667 -32.5 235 -97.5\ns98 -143.5 98 -235.5zM484 -58c84.6667 0 157.167 30 217.5 90s90.5 132.667 90.5 218c0 84.6667 -30 157.167 -90 217.5c-60 60.3333 -133 90.5 -219 90.5c-84.6667 0 -157.167 -30 -217.5 -90c-60.3333 -60 -90.5 -132.667 -90.5 -218c0 -84.6667 30 -157.167 90 -217.5\nc60 -60.3333 133 -90.5 219 -90.5zM552 250c0 -18.6667 -6.66667 -34.8333 -20 -48.5s-29.6667 -20.5 -49 -20.5c-18.6667 0 -34.6667 6.83333 -48 20.5s-20 29.8333 -20 48.5c0 18.6667 6.66667 34.8333 20 48.5s29.6667 20.5 49 20.5c18.6667 0 34.6667 -6.83333 48 -20.5\ns20 -29.8333 20 -48.5z"
            },
            "&#xa9;": {
                x: 1189,
                d: "M1039 250c0 -129.333 -43.5 -239.333 -130.5 -330c-87 -90.6667 -191.833 -136 -314.5 -136c-79.3333 0 -153.167 20.5 -221.5 61.5s-122.5 97.3333 -162.5 169c-40 71.6667 -60 150.167 -60 235.5c0 129.333 43.5 239.333 130.5 330c87 90.6667 191.833 136 314.5 136\nc79.3333 0 153.167 -20.5 221.5 -61.5s122.5 -97.3333 162.5 -169c40 -71.6667 60 -150.167 60 -235.5zM595 -176c111.333 0 206.5 41.3333 285.5 124c79 82.6667 118.5 183.333 118.5 302c0 118 -39.5 218.5 -118.5 301.5s-174.5 124.5 -286.5 124.5\nc-111.333 0 -206.5 -41.3333 -285.5 -124c-79 -82.6667 -118.5 -183.333 -118.5 -302c0 -118 39.5 -218.5 118.5 -301.5s174.5 -124.5 286.5 -124.5z"
            },
            "◦": {
                x: 689,
                d: "M539 250c0 -53.3333 -19.1667 -99 -57.5 -137c-38.3333 -38 -83.8333 -57 -136.5 -57c-54 0 -100 19 -138 57s-57 83.6667 -57 137c0 52.6667 19 98.1667 57 136.5s84 57.5 138 57.5c52.6667 0 98.1667 -19 136.5 -57c38.3333 -38 57.5 -83.6667 57.5 -137zM345 96\nc42 0 78.1667 15 108.5 45s45.5 66.3333 45.5 109c0 42.6667 -15.1667 79 -45.5 109s-66.5 45 -108.5 45c-42.6667 0 -79.1667 -15.1667 -109.5 -45.5c-30.3333 -30.3333 -45.5 -66.5 -45.5 -108.5s15 -78.1667 45 -108.5c30 -30.3333 66.6667 -45.5 110 -45.5z"
            },
            "•": {
                x: 689,
                d: "M539 250c0 -53.3333 -19.1667 -99 -57.5 -137c-38.3333 -38 -83.8333 -57 -136.5 -57c-54 0 -100 19 -138 57s-57 83.6667 -57 137c0 52.6667 19 98.1667 57 136.5s84 57.5 138 57.5c52.6667 0 98.1667 -19 136.5 -57c38.3333 -38 57.5 -83.6667 57.5 -137z"
            },
            "≍": {
                x: 967,
                d: "M817 464c0 -5.33333 -1.66667 -9.66667 -5 -13l-35 -28c-98 -71.3333 -196 -107 -294 -107c-59.3333 0 -119.667 13.6667 -181 41c-15.3333 6.66667 -30.6667 14.5 -46 23.5c-15.3333 9 -28.8333 17.3333 -40.5 25s-22 14.8333 -31 21.5s-16.1667 12.3333 -21.5 17l-8 6\nc-3.33333 4 -5 8.66667 -5 14s1.83333 10 5.5 14s8.5 6 14.5 6c4 0 11.3333 -4.33333 22 -13c99.3333 -76.6667 196.667 -115 292 -115c95.3333 0 191 37.3333 287 112c12 10.6667 20.6667 16 26 16c6 0 10.8333 -2 14.5 -6s5.5 -8.66667 5.5 -14zM817 36\nc0 -5.33333 -1.83333 -10 -5.5 -14s-8.5 -6 -14.5 -6c-4 0 -11.3333 4.33333 -22 13c-100 76.6667 -197.333 115 -292 115c-95.3333 0 -191 -37.3333 -287 -112c-12 -10.6667 -20.6667 -16 -26 -16c-6 0 -10.8333 2 -14.5 6s-5.5 8.66667 -5.5 14\nc0 5.33333 1.66667 9.66667 5 13l35 28c98 71.3333 196 107 294 107c59.3333 0 119.667 -13.6667 181 -41c15.3333 -6.66667 30.6667 -14.5 46 -23.5s28.8333 -17.3333 40.5 -25c11.6667 -7.66667 22 -14.8333 31 -21.5s16.1667 -12.3333 21.5 -17l8 -6\nc3.33333 -4 5 -8.66667 5 -14z"
            },
            "≡": {
                x: 967,
                d: "M781 424h-595c-24 0 -36 6.66667 -36 20c0 6 2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h597c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14c0 -13.3333 -12 -20 -36 -20zM782 36h-597c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5\ns-6 8 -6 14c0 13.3333 12 20 36 20h595c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5zM782 230h-597c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5\ns9.66667 0.5 17 0.5h597c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "≼": {
                x: null,
                d: "M439 346c96.6667 -18.6667 171.667 -48.6667 225 -90c27.3333 -21.3333 49 -47 65 -77s25.3333 -52.1667 28 -66.5c2.66667 -14.3333 4 -25.5 4 -33.5c0 -14.6667 -6.66667 -22 -20 -22c-11.3333 0 -18.3333 7.33333 -21 22c-2 13.3333 -4 24.8333 -6 34.5\ns-7.66667 23.6667 -17 42s-20.8333 34.6667 -34.5 49s-33.8333 29.3333 -60.5 45c-26.6667 15.6667 -58 28.8333 -94 39.5c-80.6667 23.3333 -183.333 35.6667 -308 37c-14.6667 0 -24.8333 0.333333 -30.5 1s-10.3333 2.33333 -14 5s-5.5 7.33333 -5.5 14\nc0 13.3333 9.66667 20 29 20c164 1.33333 291.5 20.3333 382.5 57s143.5 98 157.5 184c2.66667 19.3333 10 29 22 29c5.33333 0 10 -2 14 -6s6 -9.33333 6 -16c0 -7.33333 -2.33333 -20.6667 -7 -40s-11.3333 -37.3333 -20 -54c-48 -88 -146.333 -146 -295 -174zM185 -97\nh541c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-541c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2 10.6667 6 14\nc4 3.33333 8 5.16667 12 5.5s9.66667 0.5 17 0.5z"
            },
            "⊂": {
                x: null,
                d: "M726 500h-267c-76.6667 0 -140.667 -24.6667 -192 -74c-51.3333 -49.3333 -77 -108 -77 -176s25.6667 -126.667 77 -176c51.3333 -49.3333 115.333 -74 192 -74h267c7.33333 0 13 -0.166667 17 -0.5c4 -0.333333 8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14\ns-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-269c-85.3333 0 -157.833 28.3333 -217.5 85c-59.6667 56.6667 -89.5 125 -89.5 205s29.8333 148.333 89.5 205c59.6667 56.6667 132.167 85 217.5 85h269c7.33333 0 13 -0.166667 17 -0.5\ns8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "⊃": {
                x: null,
                d: "M452 500h-267c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h269c85.3333 0 157.833 -28.3333 217.5 -85s89.5 -125 89.5 -205s-29.8333 -148.333 -89.5 -205\nc-59.6667 -56.6667 -132.167 -85 -217.5 -85h-269c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2 10.6667 6 14c4 3.33333 8 5.16667 12 5.5c4 0.333333 9.66667 0.5 17 0.5h267c76.6667 0 140.667 24.6667 192 74\nc51.3333 49.3333 77 108 77 176s-25.6667 126.667 -77 176s-115.333 74 -192 74z"
            },
            "≺": {
                x: null,
                d: "M439 249c96.6667 -18.6667 171.667 -48.6667 225 -90c27.3333 -21.3333 49 -47 65 -77s25.3333 -52.1667 28 -66.5c2.66667 -14.3333 4 -25.5 4 -33.5c0 -14.6667 -6.66667 -22 -20 -22c-11.3333 0 -18.3333 7.33333 -21 22c-2 14 -4.16667 25.6667 -6.5 35\nc-2.33333 9.33333 -8 23.3333 -17 42c-9 18.6667 -20.3333 35 -34 49s-33.8333 28.8333 -60.5 44.5s-58 28.8333 -94 39.5c-80.6667 23.3333 -183.333 35.6667 -308 37c-14.6667 0 -24.8333 0.333333 -30.5 1s-10.3333 2.33333 -14 5s-5.5 7.33333 -5.5 14\nc0 13.3333 9.66667 20 29 20c164 1.33333 291.5 20.3333 382.5 57s143.5 98 157.5 184c2.66667 19.3333 10 29 22 29c5.33333 0 10 -2 14 -6s6 -9.33333 6 -16c0 -7.33333 -2.33333 -20.6667 -7 -40s-11.3333 -37.3333 -20 -54c-48 -88 -146.333 -146 -295 -174z"
            },
            "≻": {
                x: null,
                d: "M472 249c-56.6667 10.6667 -105.5 25.5 -146.5 44.5s-71.8333 38.3333 -92.5 58s-38.3333 42.1667 -53 67.5c-8.66667 15.3333 -15.8333 33.1667 -21.5 53.5s-8.5 35.1667 -8.5 44.5c0 6.66667 2 12 6 16s8.66667 6 14 6c11.3333 0 18.3333 -8 21 -24\nc8.66667 -52.6667 29.6667 -95.6667 63 -129c77.3333 -76.6667 229.667 -115.667 457 -117c14.6667 0 24.8333 -0.333333 30.5 -1s10.3333 -2.33333 14 -5s5.5 -7.33333 5.5 -14c0 -13.3333 -9.66667 -20 -29 -20c-144 -1.33333 -255.667 -14.3333 -335 -39\nc-34.6667 -10.6667 -65 -23.8333 -91 -39.5s-45.6667 -30.3333 -59 -44c-13.3333 -13.6667 -24.5 -29.8333 -33.5 -48.5c-9 -18.6667 -14.5 -32.6667 -16.5 -42c-2 -9.33333 -4.33333 -21.3333 -7 -36c-1.33333 -13.3333 -8 -20 -20 -20c-13.3333 0 -20 7.33333 -20 22\nc0 7.33333 1.33333 18.1667 4 32.5c2.66667 14.3333 12 36.5 28 66.5s37.3333 55.6667 64 77c52 40.6667 127.333 71 226 91z"
            },
            "↑": {
                x: 766,
                d: "M403 555v-713c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 10 -0.5 18v713c-22.6667 -35.3333 -50 -65 -82 -89c-16.6667 -12 -35 -22.3333 -55 -31s-35 -14.3333 -45 -17s-16.3333 -4 -19 -4\nc-8 0 -12 6.33333 -12 19c0 8 0.833333 13 2.5 15s6.5 4.33333 14.5 7c54.6667 15.3333 99.5 41.8333 134.5 79.5c35 37.6667 58.1667 84.5 69.5 140.5c2 12 6 18 12 18s9.66667 -3 11 -9c11.3333 -60.6667 34.3333 -109.667 69 -147c36 -39.3333 79.3333 -66 130 -80\nc11.3333 -3.33333 18 -6.16667 20 -8.5s3 -7.5 3 -15.5c0 -12.6667 -4 -19 -12 -19c-2.66667 0 -9 1.33333 -19 4s-25.5 8.5 -46.5 17.5s-40.5 20.5 -58.5 34.5c-30 22.6667 -55.6667 51 -77 85z"
            },
            "↓": {
                x: 766,
                d: "M403 658v-713c22.6667 35.3333 50 65 82 89c16.6667 12 35 22.3333 55 31c20 8.66667 35 14.3333 45 17s16.3333 4 19 4c8 0 12 -6.33333 12 -19c0 -8 -0.833333 -13 -2.5 -15s-6.5 -4.33333 -14.5 -7c-55.3333 -15.3333 -100.5 -42 -135.5 -80\ns-57.8333 -85.3333 -68.5 -142c-2.66667 -10.6667 -6.66667 -16 -12 -16c-6 0 -9.66667 3.33333 -11 10c-12 60 -35 108.667 -69 146c-36 39.3333 -79.3333 66 -130 80c-11.3333 3.33333 -18 6.16667 -20 8.5s-3 7.5 -3 15.5c0 12.6667 4 19 12 19\nc2.66667 0 9 -1.33333 19 -4s25.5 -8.5 46.5 -17.5s40.5 -20.5 58.5 -34.5c30 -22.6667 55.6667 -51 77 -85v713c0 8 0.166667 14 0.5 18s2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18z"
            },
            "↔": {
                x: 1187,
                d: "M259 270h669c-36 26.6667 -66.6667 59 -92 97c-12.6667 20 -23.1667 41 -31.5 63s-13.6667 38.3333 -16 49s-3.5 17.3333 -3.5 20c0 8 6.66667 12 20 12c8 0 13.1667 -0.833333 15.5 -2.5s4.16667 -5.83333 5.5 -12.5c26 -114.667 93.6667 -193 203 -235\nc5.33333 -2.66667 8 -6.33333 8 -11c0 -5.33333 -5 -9.66667 -15 -13c-104 -42.6667 -169 -118.667 -195 -228c-2 -9.33333 -4.16667 -15 -6.5 -17s-7.5 -3 -15.5 -3c-13.3333 0 -20 4 -20 12c0 2.66667 1.16667 9.16667 3.5 19.5s7.83333 26.6667 16.5 49\nc8.66667 22.3333 19.6667 43.8333 33 64.5c21.3333 34 51.3333 66 90 96h-669c36 -26.6667 66.6667 -59 92 -97c12.6667 -20 23.1667 -41 31.5 -63s13.6667 -38.3333 16 -49s3.5 -17.3333 3.5 -20c0 -8 -6.66667 -12 -20 -12c-8 0 -13.1667 0.833333 -15.5 2.5\nc-2.33333 1.66667 -4.16667 5.83333 -5.5 12.5c-24.6667 111.333 -90 189 -196 233c-10 4 -15 8.33333 -15 13c0 5.33333 5 9.66667 15 13c104.667 43.3333 169.667 119.333 195 228c2 9.33333 4.16667 15 6.5 17s7.5 3 15.5 3c13.3333 0 20 -4 20 -12\nc0 -2.66667 -1.16667 -9.16667 -3.5 -19.5s-7.83333 -26.6667 -16.5 -49s-19.6667 -43.8333 -33 -64.5c-21.3333 -34 -51.3333 -66 -90 -96z"
            },
            "↘": {
                x: 1214,
                d: "M944 -128l-779 780c-10 10 -15 17.6667 -15 23s1.83333 10 5.5 14s8.5 6 14.5 6c5.33333 0 12.6667 -4.66667 22 -14l781 -780c-3.33333 16.6667 -5 36 -5 58c0 44 7.66667 86.3333 23 127c22.6667 54 39.3333 81 50 81c3.33333 0 8 -3 14 -9s9 -10.6667 9 -14\nc0 -2.66667 -1.66667 -7 -5 -13c-34.6667 -53.3333 -52 -111 -52 -173c0 -47.3333 9.33333 -90.3333 28 -129c2 -5.33333 3 -9.33333 3 -12c0 -6.66667 -3.33333 -10 -10 -10c-2.66667 0 -6.66667 1.33333 -12 4c-37.3333 18 -80.3333 27 -129 27\nc-62.6667 0 -120.333 -17.3333 -173 -52c-4.66667 -3.33333 -9 -5 -13 -5c-3.33333 0 -8 3 -14 9s-9 10.6667 -9 14c0 10 27 26.6667 81 50c42.6667 15.3333 85 23 127 23c20 0 39.3333 -1.66667 58 -5z"
            },
            "≃": {
                x: 967,
                d: "M817 432c0 -48.6667 -15.8333 -91.1667 -47.5 -127.5s-71.5 -54.5 -119.5 -54.5c-20.6667 0 -42 4.5 -64 13.5s-40 18.3333 -54 28s-32.3333 23.5 -55 41.5c-21.3333 16.6667 -38.8333 29.5 -52.5 38.5s-30.3333 17.3333 -50 25s-38.8333 11.5 -57.5 11.5\nc-20 0 -39.6667 -4.16667 -59 -12.5c-19.3333 -8.33333 -37.1667 -23 -53.5 -44s-25.1667 -46.8333 -26.5 -77.5c0 -3.33333 -1.16667 -8 -3.5 -14s-5.83333 -9 -10.5 -9c-9.33333 0 -14 10.3333 -14 31c0 48.6667 15.8333 91.1667 47.5 127.5s71.5 54.5 119.5 54.5\nc20.6667 0 42 -4.5 64 -13.5s40 -18.3333 54 -28s32.3333 -23.5 55 -41.5c21.3333 -16.6667 38.8333 -29.5 52.5 -38.5s30.3333 -17.3333 50 -25s38.8333 -11.5 57.5 -11.5c34.6667 0 66 11.8333 94 35.5s43 55.1667 45 94.5c0.666667 18 5.33333 27 14 27\nc9.33333 0 14 -10.3333 14 -31zM186 76h595c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-597c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 13.3333 12 20 36 20z"
            },
            "⇐": {
                x: 1188,
                d: "M1003 133h-591c22 -21.3333 44.1667 -49.1667 66.5 -83.5c22.3333 -34.3333 33.5 -55.5 33.5 -63.5c0 -7.33333 -6.33333 -11 -19 -11c-6.66667 0 -11.3333 1 -14 3s-6.66667 8 -12 18c-29.3333 55.3333 -68.8333 104 -118.5 146s-107.167 72.6667 -172.5 92\nc-10.6667 3.33333 -18 6 -22 8l-3 2c-0.666667 1.33333 -1 3.33333 -1 6c0 3.33333 0.666667 5.33333 2 6c2 2 8.66667 5 20 9c70.6667 20.6667 133.333 55 188 103c20 18 38.1667 37.3333 54.5 58s27.6667 36.1667 34 46.5s14.8333 25.1667 25.5 44.5\nc2.66667 5.33333 9 8 19 8c12.6667 0 19 -3.66667 19 -11c0 -8 -11.1667 -29.3333 -33.5 -64s-44.5 -62.3333 -66.5 -83h591c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-10 -0.5 -18 -0.5h-635\nc-34 -29.3333 -76 -55 -126 -77c51.3333 -23.3333 93.3333 -49 126 -77h635c8 0 14 -0.166667 18 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "⇑": {
                x: 848,
                d: "M541 430v-588c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v634c-29.3333 34.6667 -55 76.6667 -77 126c-21.3333 -48.6667 -47 -90.6667 -77 -126v-634c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6\ns-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 10 -0.5 18v588c-26 -24 -49 -43 -69 -57c-42 -28.6667 -67.6667 -43 -77 -43c-7.33333 0 -11 6.66667 -11 20c0 10.6667 2.66667 17.3333 8 20c128.667 66 213.667 170 255 312c2 7.33333 5.66667 11 11 11\nc6 0 9.33333 -2.66667 10 -8c42 -144 126 -248.333 252 -313c6 -2.66667 9.5 -5.16667 10.5 -7.5s1.5 -7.16667 1.5 -14.5c0 -13.3333 -3.66667 -20 -11 -20c-9.33333 0 -35 14.6667 -77 44c-22 14.6667 -45 33.3333 -69 56z"
            },
            "⇓": {
                x: 848,
                d: "M541 658v-588c26 24 49 43 69 57c42 28.6667 67.6667 43 77 43c7.33333 0 11 -6.66667 11 -20c0 -10.6667 -2.66667 -17.3333 -8 -20c-129.333 -66.6667 -214.333 -170.667 -255 -312c-2 -7.33333 -5.66667 -11 -11 -11c-6 0 -9.33333 2.66667 -10 8\nc-40.6667 143.333 -124.667 247.667 -252 313c-6 2.66667 -9.5 5.16667 -10.5 7.5s-1.5 7.16667 -1.5 14.5c0 13.3333 3.66667 20 11 20c9.33333 0 35 -14.6667 77 -44c22 -14.6667 45 -33.3333 69 -56v588c0 8 0.166667 14 0.5 18s2.16667 8 5.5 12s8 6 14 6\ns10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18v-634c29.3333 -34.6667 55 -76.6667 77 -126c21.3333 48.6667 47 90.6667 77 126v634c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18z"
            },
            "↙": {
                x: 1214,
                d: "M1049 652l-779 -780c16.6667 3.33333 36 5 58 5c42.6667 0 84.3333 -7.66667 125 -23c16 -6 33.8333 -14.3333 53.5 -25c19.6667 -10.6667 29.5 -19 29.5 -25c0 -3.33333 -3 -8 -9 -14s-10.6667 -9 -14 -9c-3.33333 0 -7.66667 1.66667 -13 5\nc-52.6667 34.6667 -110.333 52 -173 52c-47.3333 0 -90.3333 -9.33333 -129 -28c-5.33333 -2 -9.33333 -3 -12 -3c-6.66667 0 -10 3.33333 -10 10c0 2.66667 1.33333 6.66667 4 12c18 37.3333 27 80.3333 27 129c0 61.3333 -17.3333 119 -52 173\nc-3.33333 6 -5 10.3333 -5 13c0 3.33333 3 8 9 14s10.6667 9 14 9c10.6667 0 27.3333 -27 50 -81c15.3333 -42.6667 23 -85 23 -127c0 -20 -1.66667 -39.3333 -5 -58l781 780c9.33333 9.33333 16.6667 14 22 14s10 -2 14 -6s6 -8.66667 6 -14s-5 -13 -15 -23z"
            },
            "′": {
                x: 533,
                d: "M374 475l-177 -414c-4.66667 -10.6667 -9 -16 -13 -16c-5.33333 0 -12.3333 1.83333 -21 5.5s-13 7.83333 -13 12.5l2 7c1.33333 4 2 6.33333 2 7l119 437c8 30 25.6667 45 53 45c15.3333 0 28.6667 -5.16667 40 -15.5s17 -22.8333 17 -37.5c0 -6 -3 -16.3333 -9 -31z\n"
            },
            "∞": {
                x: 1189,
                d: "M603 271c70 114 152.333 171 247 171c55.3333 0 100.667 -22.6667 136 -68c35.3333 -45.3333 53 -98 53 -158c0 -60.6667 -18 -113.667 -54 -159c-36 -45.3333 -82.3333 -68 -139 -68s-111 21 -163 63c-14.6667 12 -27.3333 23.8333 -38 35.5s-30.3333 35.8333 -59 72.5\nc-70 -114 -152.333 -171 -247 -171c-55.3333 0 -100.667 22.6667 -136 68c-35.3333 45.3333 -53 98 -53 158c0 60.6667 18 113.667 54 159s82.3333 68 139 68s111 -21 163 -63c14.6667 -12 27.3333 -23.8333 38 -35.5s30.3333 -35.8333 59 -72.5zM629 237\nc60 -77.3333 96.3333 -123 109 -137c42 -42 83.3333 -63 124 -63c43.3333 0 80 17.5 110 52.5s45 77.1667 45 126.5c0 50 -14.3333 94.8333 -43 134.5c-28.6667 39.6667 -67.6667 59.5 -117 59.5c-86 0 -162 -57.6667 -228 -173zM560 194c-60 77.3333 -96.3333 123 -109 137\nc-42 42 -83.3333 63 -124 63c-43.3333 0 -80 -17.5 -110 -52.5s-45 -77.1667 -45 -126.5c0 -50 14.3333 -94.8333 43 -134.5c28.6667 -39.6667 67.6667 -59.5 117 -59.5c86 0 162 57.6667 228 173z"
            },
            "∈": {
                x: 800,
                d: "M615 230h-424c6 -66.6667 34.5 -121.667 85.5 -165c51 -43.3333 111.833 -65 182.5 -65h156c7.33333 0 13 -0.166667 17 -0.5c4 -0.333333 8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-158\nc-85.3333 0 -157.833 28.3333 -217.5 85c-59.6667 56.6667 -89.5 125 -89.5 205s29.8333 148.333 89.5 205c59.6667 56.6667 132.167 85 217.5 85h158c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5\ns-9.66667 -0.5 -17 -0.5h-156c-70.6667 0 -131.5 -21.6667 -182.5 -65s-79.5 -98.3333 -85.5 -165h424c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "∋": {
                x: 800,
                d: "M341 500h-156c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h158c85.3333 0 157.833 -28.3333 217.5 -85c59.6667 -56.6667 89.5 -125 89.5 -205s-29.8333 -148.333 -89.5 -205\nc-59.6667 -56.6667 -132.167 -85 -217.5 -85h-158c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2 10.6667 6 14c4 3.33333 8 5.16667 12 5.5c4 0.333333 9.66667 0.5 17 0.5h156c70.6667 0 131.5 21.6667 182.5 65\nc51 43.3333 79.5 98.3333 85.5 165h-424c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h424c-6 66.6667 -34.5 121.667 -85.5 165s-111.833 65 -182.5 65z"
            },
            "∕": {
                x: 799,
                d: "M641 677l-449 -873c-2.66667 -5.33333 -4.66667 -9.16667 -6 -11.5s-3.33333 -4.33333 -6 -6s-6 -2.5 -10 -2.5c-6 0 -10.8333 2.16667 -14.5 6.5s-5.5 8.83333 -5.5 13.5c0 3.33333 2.66667 9.66667 8 19l449 873c2.66667 5.33333 4.66667 9.16667 6 11.5\ns3.33333 4.33333 6 6s6 2.5 10 2.5c6 0 10.8333 -2.16667 14.5 -6.5s5.5 -8.83333 5.5 -13.5c0 -3.33333 -2.66667 -9.66667 -8 -19z"
            },
            "∀": {
                x: 856,
                d: "M701 656l-251 -657c-5.33333 -14 -12.6667 -21 -22 -21c-10 0 -17.6667 7.66667 -23 23l-249 655c-4 9.33333 -6 15.3333 -6 18c0 5.33333 2 10 6 14s8.66667 6 14 6c10 0 17.6667 -7.66667 23 -23l83 -220h304l83 220c5.33333 15.3333 13 23 23 23\nc6 0 10.8333 -2 14.5 -6s5.5 -8.66667 5.5 -14c0 -4.66667 -1.66667 -10.6667 -5 -18zM292 411l136 -356l136 356h-272z"
            },
            "∃": {
                x: 745,
                d: "M595 658v-622c0 -16.6667 -1.83333 -26.8333 -5.5 -30.5c-3.66667 -3.66667 -13.5 -5.5 -29.5 -5.5h-375c-7.33333 0 -13 0.166667 -17 0.5c-4 0.333333 -8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14s2 10.6667 6 14c4 3.33333 8 5.16667 12 5.5s9.66667 0.5 17 0.5h370\nv287h-356c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h356v287h-370c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h375\nc16 0 25.8333 -1.83333 29.5 -5.5s5.5 -13.8333 5.5 -30.5z"
            },
            "&#xac;": {
                x: 856,
                d: "M706 320v-195c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 10 -0.5 18v191h-481c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5\nh486c16 0 25.8333 -1.83333 29.5 -5.5s5.5 -13.8333 5.5 -30.5z"
            },
            "ℜ": {
                x: 968,
                d: "M677 701l134 -241c4.66667 -4.66667 7 -9.66667 7 -15c0 -3.33333 -1.66667 -6.66667 -5 -10l-7 -4l-17.5 -10c-7 -4 -15.1667 -8.5 -24.5 -13.5s-19.1667 -10.1667 -29.5 -15.5s-20.6667 -10.5 -31 -15.5s-20.6667 -9.66667 -31 -14s-19.1667 -7.83333 -26.5 -10.5\nc0 -0.666667 1 -17.8333 3 -51.5s3.33333 -54.5 4 -62.5c0 -8 1 -26 3 -54s3 -47.3333 3 -58c0 -2.66667 -0.666667 -7 -2 -13s-2 -12.6667 -2 -20c0 -34.6667 15.3333 -62 46 -82c53.3333 44 82 66 86 66c2.66667 0 6.5 -1.5 11.5 -4.5s7.5 -6.16667 7.5 -9.5\nc0 -2.66667 -4.33333 -7.66667 -13 -15l-72 -56c-12.6667 -9.33333 -24 -14 -34 -14c-32.6667 0 -60.1667 11.5 -82.5 34.5s-33.5 49.8333 -33.5 80.5c0 7.33333 0.666667 14.3333 2 21s2 10.6667 2 12l-13 219h-115v-73c0 -94.6667 -15.1667 -167.333 -45.5 -218\nc-30.3333 -50.6667 -65.1667 -76 -104.5 -76c-52.6667 0 -92 35.6667 -118 107c-6 -4 -12 -6 -18 -6c-2.66667 0 -5.16667 1.16667 -7.5 3.5s-3.5 4.83333 -3.5 7.5c0 3.33333 2.5 6.5 7.5 9.5s9.5 4.83333 13.5 5.5c-2.66667 4 -4 8.33333 -4 13c0 2.66667 1.5 5.5 4.5 8.5\ns5.83333 4.5 8.5 4.5c6.66667 0 11 -5.66667 13 -17c9.33333 4.66667 16.3333 7 21 7c2 0 4.33333 -1.16667 7 -3.5s4 -4.83333 4 -7.5c0 -4 -3.16667 -7.66667 -9.5 -11c-6.33333 -3.33333 -10.8333 -5 -13.5 -5c10 -30.6667 23.5 -54 40.5 -70s35.1667 -24 54.5 -24\nc14.6667 0 27 9 37 27s16.6667 40.8333 20 68.5c3.33333 27.6667 5.5 48.3333 6.5 62s1.5 25.5 1.5 35.5v295c0 58 -8.66667 105 -26 141s-39.3333 54 -66 54c-24 0 -43.5 -10 -58.5 -30s-22.5 -42 -22.5 -66c0 -18 13 -38.6667 39 -62c21.3333 -19.3333 37.5 -38 48.5 -56\ns17.3333 -31.6667 19 -41s2.5 -20.6667 2.5 -34c0 -12 -0.5 -23.6667 -1.5 -35s-3.66667 -27.1667 -8 -47.5s-12.6667 -36.8333 -25 -49.5c-12.3333 -12.6667 -27.8333 -19 -46.5 -19c-14.6667 0 -26.8333 5.5 -36.5 16.5s-15.6667 21.8333 -18 32.5s-3.5 20.3333 -3.5 29\nc0 10 4 15 12 15c8.66667 0 13 -5.33333 13 -16c2 -36.6667 13 -55 33 -55c32.6667 0 49 39.6667 49 119c0 14.6667 -0.666667 25.6667 -2 33s-6.16667 17.3333 -14.5 30c-8.33333 12.6667 -21.5 28 -39.5 46c-11.3333 12 -20 21.6667 -26 29s-11.6667 16.6667 -17 28\ns-8 23 -8 35c0 30.6667 10.5 58.3333 31.5 83s47.8333 37 80.5 37c33.3333 0 62 -11.1667 86 -33.5s42 -45.1667 54 -68.5c23.3333 38 59 66.3333 107 85s93.3333 28 136 28c6.66667 0 11.1667 -0.666667 13.5 -2s5.5 -5.66667 9.5 -13zM734 427l-133 240l-2 3\nc-1.33333 2 -2.66667 3.83333 -4 5.5s-2.33333 2.5 -3 2.5c-1.33333 0 -6 -0.833333 -14 -2.5s-19.5 -5.16667 -34.5 -10.5s-29.6667 -11.8333 -44 -19.5c-14.3333 -7.66667 -28.3333 -18.6667 -42 -33s-23.8333 -30.5 -30.5 -48.5c13.3333 -37.3333 20 -83.6667 20 -139\nv-49h145c12 0 22 0.666667 30 2s21.3333 5.83333 40 13.5s42.6667 19.5 72 35.5z"
            },
            "ℑ": {
                x: 938,
                d: "M382 336c0 -7.33333 -5.66667 -11 -17 -11c-32 0 -64.1667 7 -96.5 21c-32.3333 14 -60.1667 36 -83.5 66s-35 64.3333 -35 103c0 52.6667 21 97.5 63 134.5s93.3333 55.5 154 55.5c12 0 24.1667 -0.666667 36.5 -2s29.5 -5.5 51.5 -12.5s42.8333 -16.1667 62.5 -27.5\nc19.6667 -11.3333 40.8333 -28.6667 63.5 -52s42.3333 -50.6667 59 -82c7.33333 -14 13.3333 -22.8333 18 -26.5s10.6667 -5.5 18 -5.5c2.66667 0 5.66667 0.166667 9 0.5s9.33333 1.33333 18 3s16.3333 3.83333 23 6.5s13.1667 7.33333 19.5 14s10.1667 14.3333 11.5 23\nl1.5 7.5c0.333333 1.66667 1.66667 3.16667 4 4.5s5.5 2 9.5 2c10.6667 0 16 -4.33333 16 -13c0 -19.3333 -10.5 -35.8333 -31.5 -49.5s-48.5 -20.5 -82.5 -20.5c-26.6667 0 -52 6.66667 -76 20s-42.1667 26.5 -54.5 39.5s-28.5 32.5 -48.5 58.5\nc-25.3333 32 -47.1667 55 -65.5 69s-40.5 21 -66.5 21c-47.3333 0 -89.5 -16 -126.5 -48s-55.5 -72 -55.5 -120c0 -12.6667 1.66667 -25.6667 5 -39s9.66667 -27.5 19 -42.5s20.8333 -28.5 34.5 -40.5s32 -22.1667 55 -30.5s48.8333 -13.5 77.5 -15.5\nc6.66667 -2 10 -5.66667 10 -11zM177 183h40c32.6667 0 61 -7 85 -21s56 -39.6667 96 -77c0.666667 -0.666667 4 -3.66667 10 -9s12.8333 -11.1667 20.5 -17.5c7.66667 -6.33333 14.1667 -11.5 19.5 -15.5c28.6667 -20.6667 50.6667 -31 66 -31\nc9.33333 0 22.6667 3.66667 40 11s35.1667 21.3333 53.5 42c18.3333 20.6667 27.5 45 27.5 73c0 22.6667 -13.3333 49 -40 79c-13.3333 15.3333 -22.8333 26.5 -28.5 33.5s-11.1667 16.5 -16.5 28.5s-8 24.3333 -8 37c0 31.3333 12.6667 58.3333 38 81s56 34 92 34\nc34 0 61.8333 -9.33333 83.5 -28s32.5 -39.6667 32.5 -63c0 -9.33333 -5.33333 -14 -16 -14c-8.66667 0 -13.6667 4.33333 -15 13c-2 13.3333 -6.16667 24.6667 -12.5 34s-13 16.3333 -20 21s-14.8333 8.16667 -23.5 10.5s-14.8333 3.66667 -18.5 4s-6.5 0.5 -8.5 0.5\nc-32 0 -48 -30 -48 -90c0 -13.3333 2.5 -25.6667 7.5 -37s16.5 -27 34.5 -47c19.3333 -21.3333 32.6667 -38.5 40 -51.5s11 -28.1667 11 -45.5c0 -47.3333 -21.3333 -85.6667 -64 -115c-15.3333 -10.6667 -31.6667 -18.6667 -49 -24s-31.6667 -8.33333 -43 -9\nc-11.3333 -0.666667 -28.3333 -1 -51 -1c-43.3333 0 -76.3333 4.83333 -99 14.5c-22.6667 9.66667 -59 37.1667 -109 82.5c-24.6667 22 -46.5 38.6667 -65.5 50c-19 11.3333 -33.3333 18.1667 -43 20.5s-21.8333 3.83333 -36.5 4.5c-6 0.666667 -9 4.33333 -9 11\nc0 5.33333 1.83333 8.5 5.5 9.5s10.8333 1.5 21.5 1.5z"
            },
            "⊤": {
                x: 968,
                d: "M504 628v-592c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v592h-278c-24 0 -36 6.66667 -36 20s12 20 36 20h597c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5\ns-9.66667 -0.5 -17 -0.5h-279z"
            },
            "⊥": {
                x: 968,
                d: "M504 632v-592h279c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5c4 -3.33333 6 -8 6 -14s-2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5c-4 -0.333333 -9.66667 -0.5 -17 -0.5h-597c-24 0 -36 6.66667 -36 20c0 13.3333 12 20 36 20h278v592\nc0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18z"
            },
            "ℵ": {
                x: 800,
                d: "M565 112l-283 323c-24.6667 -52.6667 -37 -115.333 -37 -188c0 -16.6667 2.5 -30.6667 7.5 -42s17.1667 -28.6667 36.5 -52c30.6667 -37.3333 46 -68.6667 46 -94c0 -39.3333 -34 -59 -102 -59h-56c-10.6667 0 -17.8333 0.5 -21.5 1.5s-5.5 4.16667 -5.5 9.5\nc0 7.33333 5.66667 11 17 11c16.6667 0.666667 30.3333 2.33333 41 5s17.8333 6.5 21.5 11.5s6 9 7 12s1.5 6.5 1.5 10.5c0 20 -8.33333 45 -25 75c-23.3333 44 -35 79 -35 105c0 61.3333 27 134.667 81 220l-59 68c-15.3333 18.6667 -27 35 -35 49\ns-12.5 23.8333 -13.5 29.5s-1.5 12.8333 -1.5 21.5c0 16 2 29.1667 6 39.5s7.66667 17 11 20s6.33333 4.5 9 4.5c6 0 9.33333 -3.33333 10 -10c2 -32.6667 18.3333 -66.3333 49 -101l278 -317c3.33333 28.6667 10.3333 73.3333 21 134c8 45.3333 13.3333 86.3333 16 123\nc-27.3333 26.6667 -45.3333 47.1667 -54 61.5s-13 29.5 -13 45.5s2 29.1667 6 39.5s7.66667 17 11 20s6.33333 4.5 9 4.5c4 0 7.33333 -3.33333 10 -10c4.66667 -11.3333 16 -31.6667 34 -61s32.3333 -48.6667 43 -58c22.6667 -20.6667 37.3333 -36.5 44 -47.5\ns10 -25.1667 10 -42.5c0 -16 -2 -29.1667 -6 -39.5s-7.66667 -17 -11 -20s-6.33333 -4.5 -9 -4.5c-6.66667 0 -10 4.33333 -10 13c-2 26 -13.3333 49.3333 -34 70l-39 -260l59 -68c15.3333 -18.6667 27 -35 35 -49s12.5 -23.8333 13.5 -29.5s1.5 -12.8333 1.5 -21.5\nc0 -16 -2 -29.1667 -6 -39.5c-4 -10.3333 -7.66667 -17 -11 -20s-6.33333 -4.5 -9 -4.5c-6 0 -9.33333 3.33333 -10 10c-2 32.6667 -18.3333 66.3333 -49 101z"
            },
            "∪": {
                x: 856,
                d: "M706 562v-367c0 -46.6667 -14.5 -87 -43.5 -121s-64 -58.5 -105 -73.5s-84.1667 -22.5 -129.5 -22.5c-32.6667 0 -64.8333 4.33333 -96.5 13c-31.6667 8.66667 -61.3333 21.5 -89 38.5c-27.6667 17 -50 40 -67 69s-25.5 61.5 -25.5 97.5v366c0 8 0.166667 14 0.5 18\ns2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18v-361c0 -60.6667 25.6667 -107.333 77 -140c44.6667 -28.6667 98.3333 -43 161 -43c22 0 45.1667 2.66667 69.5 8c24.3333 5.33333 49.8333 14 76.5 26s48.6667 30.8333 66 56.5\nc17.3333 25.6667 26 56.1667 26 91.5v362c0 8 0.166667 14 0.5 18s2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18z"
            },
            "∩": {
                x: 856,
                d: "M706 380v-366c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 10 -0.5 18v361c0 60.6667 -25.6667 107.333 -77 140c-44.6667 28.6667 -98.3333 43 -161 43c-22 0 -45.1667 -2.66667 -69.5 -8\ns-49.8333 -14 -76.5 -26c-26.6667 -12 -48.6667 -30.8333 -66 -56.5s-26 -56.1667 -26 -91.5v-362c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 10 -0.5 18v367c0 46.6667 14.5 87 43.5 121s64 58.5 105 73.5\ns84.1667 22.5 129.5 22.5c32.6667 0 64.8333 -4.33333 96.5 -13c31.6667 -8.66667 61.3333 -21.5 89 -38.5s50 -40 67 -69s25.5 -61.5 25.5 -97.5z"
            },
            "⊎": {
                x: 856,
                d: "M448 285v-142c0 -23.3333 -6.66667 -35 -20 -35s-20 11.6667 -20 35v142h-142c-24 0 -36 6.66667 -36 20s12 20 36 20h142v143c0 7.33333 0.166667 13 0.5 17s2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -9.66667 0.5 -17v-143h142\nc24 0 36 -6.66667 36 -20s-12 -20 -36 -20h-142zM706 562v-367c0 -46.6667 -14.5 -87 -43.5 -121s-64 -58.5 -105 -73.5s-84.1667 -22.5 -129.5 -22.5c-32.6667 0 -64.8333 4.33333 -96.5 13c-31.6667 8.66667 -61.3333 21.5 -89 38.5c-27.6667 17 -50 40 -67 69\ns-25.5 61.5 -25.5 97.5v366c0 8 0.166667 14 0.5 18s2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18v-361c0 -60.6667 25.6667 -107.333 77 -140c44.6667 -28.6667 98.3333 -43 161 -43c22 0 45.1667 2.66667 69.5 8\nc24.3333 5.33333 49.8333 14 76.5 26s48.6667 30.8333 66 56.5c17.3333 25.6667 26 56.1667 26 91.5v362c0 8 0.166667 14 0.5 18s2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18z"
            },
            "∧": {
                x: 856,
                d: "M451 577l249 -563c4 -8 6 -13.3333 6 -16c0 -5.33333 -2 -10 -6 -14s-8.66667 -6 -14 -6c-9.33333 0 -17 7 -23 21l-235 530l-235 -530c-6 -14 -13.6667 -21 -23 -21c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 3.33333 2.33333 10 7 20l249 559\nc3.33333 8 6.33333 13.5 9 16.5s7 4.5 13 4.5c8.66667 0 16.3333 -7 23 -21z"
            },
            "∨": {
                x: 856,
                d: "M699 558l-249 -559c-3.33333 -8 -6.33333 -13.5 -9 -16.5s-7 -4.5 -13 -4.5c-8.66667 0 -16.3333 7 -23 21l-249 563c-4 8 -6 13.3333 -6 16c0 5.33333 2 10 6 14s8.66667 6 14 6c9.33333 0 17 -7 23 -21l235 -530l235 529c6.66667 14.6667 14.3333 22 23 22\nc5.33333 0 10 -2 14 -6s6 -8.66667 6 -14c0 -3.33333 -2.33333 -10 -7 -20z"
            },
            "⊢": {
                x: 800,
                d: "M615 327h-425v-291c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v622c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18v-291h425c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5\ns6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "⊣": {
                x: 800,
                d: "M650 658v-622c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v291h-424c-24 0 -36 6.66667 -36 20s12 20 36 20h424v291c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18z"
            },
            "⌊": {
                x: 548,
                d: "M362 -250h-176c-16 0 -26 2 -30 6s-6 14 -6 30v928c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18v-924h172c24 0 36 -6.66667 36 -20s-12 -20 -36 -20z"
            },
            "⌋": {
                x: 548,
                d: "M398 714v-928c0 -16.6667 -1.83333 -26.8333 -5.5 -30.5s-13.5 -5.5 -29.5 -5.5h-177c-24 0 -36 6.66667 -36 20s12 20 36 20h172v924c0 24 6.66667 36 20 36c6 0 10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18z"
            },
            "⌈": {
                x: 548,
                d: "M362 710h-172v-924c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v928c0 16 2 26 6 30s14 6 30 6h176c24 0 36 -6.66667 36 -20s-12 -20 -36 -20z"
            },
            "⌉": {
                x: 548,
                d: "M398 714v-928c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v924h-172c-24 0 -36 6.66667 -36 20s12 20 36 20h177c16 0 25.8333 -1.83333 29.5 -5.5s5.5 -13.8333 5.5 -30.5z"
            },
            "{": {
                x: 655,
                d: "M361 617v-240c0 -62.6667 -39.3333 -105 -118 -127c36.6667 -10.6667 62.6667 -23.6667 78 -39c16 -16 26.6667 -30.1667 32 -42.5s8 -29.8333 8 -52.5v-210c0 -25.3333 1 -41 3 -47c6.66667 -25.3333 21.1667 -45.6667 43.5 -61s49.5 -24 81.5 -26\nc3.33333 -0.666667 5.66667 -1 7 -1s2.83333 -0.333333 4.5 -1s2.83333 -1.66667 3.5 -3s1 -3.33333 1 -6c0 -7.33333 -6.33333 -11 -19 -11c-23.3333 0 -48.6667 3.33333 -76 10s-50 17 -68 31c-21.3333 17.3333 -34.6667 33.8333 -40 49.5s-8 36.5 -8 62.5v198\nc0 25.3333 -1 41.6667 -3 49c-5.33333 24.6667 -19.3333 45.1667 -42 61.5c-22.6667 16.3333 -50.3333 25.5 -83 27.5c-3.33333 0.666667 -5.66667 1 -7 1s-2.83333 0.333333 -4.5 1s-2.83333 1.66667 -3.5 3s-1 3.33333 -1 6c0 6 3 9.66667 9 11\nc40 2 71.6667 12.6667 95 32c18 14.6667 29.1667 29.5 33.5 44.5s6.5 34.8333 6.5 59.5v228c0.666667 36 20 65.8333 58 89.5s82.6667 35.5 134 35.5c12.6667 0 19 -3.66667 19 -11c0 -6 -3 -9.66667 -9 -11c-48.6667 -3.33333 -83.3333 -16.1667 -104 -38.5\ns-31 -46.5 -31 -72.5z"
            },
            "}": {
                x: 655,
                d: "M294 -117v240c0 62.6667 39.3333 105 118 127c-36.6667 10.6667 -62.6667 23.6667 -78 39c-16 16 -26.6667 30.1667 -32 42.5s-8 29.8333 -8 52.5v210c0 25.3333 -1 41 -3 47c-6.66667 25.3333 -21.1667 45.6667 -43.5 61c-22.3333 15.3333 -49.5 24 -81.5 26\nc-3.33333 0.666667 -5.66667 1 -7 1s-2.83333 0.333333 -4.5 1s-2.83333 1.66667 -3.5 3s-1 3.33333 -1 6c0 7.33333 6.66667 11 20 11c21.3333 0 46 -3.33333 74 -10s51 -17 69 -31c21.3333 -17.3333 34.6667 -33.8333 40 -49.5s8 -36.5 8 -62.5v-198\nc0 -25.3333 1 -41.6667 3 -49c5.33333 -24.6667 19.3333 -45.1667 42 -61.5s50.3333 -25.5 83 -27.5c3.33333 -0.666667 5.66667 -1 7 -1s2.83333 -0.333333 4.5 -1s2.83333 -1.66667 3.5 -3c0.666667 -1.33333 1 -3.33333 1 -6c0 -6 -3 -9.66667 -9 -11\nc-40 -2 -71.6667 -12.6667 -95 -32c-18 -14.6667 -29.1667 -29.5 -33.5 -44.5s-6.5 -34.8333 -6.5 -59.5v-228c-0.666667 -36.6667 -20 -66.6667 -58 -90s-82.3333 -35 -133 -35c-13.3333 0 -20 3.66667 -20 11c0 6 3 9.66667 9 11\nc48.6667 3.33333 83.3333 16.1667 104 38.5c20.6667 22.3333 31 46.5 31 72.5z"
            },
            "〈": {
                x: 523,
                d: "M368 712l-177 -462l177 -464c3.33333 -7.33333 5 -12.6667 5 -16c0 -5.33333 -2 -10 -6 -14s-8.66667 -6 -14 -6c-9.33333 0 -17 8 -23 24l-175 459c-3.33333 8 -5 13.6667 -5 17c0 2 1.66667 8 5 18l175 459c6 15.3333 13.6667 23 23 23c5.33333 0 10 -2 14 -6\ns6 -8.66667 6 -14c0 -4.66667 -1.66667 -10.6667 -5 -18z"
            },
            "〉": {
                x: 523,
                d: "M368 233l-177 -463c-5.33333 -13.3333 -12.3333 -20 -21 -20c-5.33333 0 -10 2 -14 6s-6 8.66667 -6 14c0 4.66667 1.66667 10.6667 5 18l177 462l-177 464c-3.33333 7.33333 -5 12.6667 -5 16c0 5.33333 2 10 6 14s8.66667 6 14 6c10 0 17.6667 -7.66667 23 -23\nl175 -460c3.33333 -8 5 -13.6667 5 -17s-1.66667 -9 -5 -17z"
            },
            "|": {
                x: 140,
                d: "M50 -219v931c0 24.6667 6.66667 37 20 37c13.3333 0 20 -10 20 -30v-931c0 -24.6667 -6.66667 -37 -20 -37c-13.3333 0 -20 10 -20 30z"
            },
            "↕": {
                x: 766,
                d: "M403 633v-766c22.6667 35.3333 50 65 82 89c16.6667 12 35 22.3333 55 31c20 8.66667 35 14.3333 45 17c10 2.66667 16.3333 4 19 4c8 0 12 -6.33333 12 -19c0 -8 -0.833333 -13 -2.5 -15s-6.5 -4.33333 -14.5 -7c-54.6667 -15.3333 -99.6667 -42.1667 -135 -80.5\nc-35.3333 -38.3333 -58.3333 -85.5 -69 -141.5c-2.66667 -10.6667 -6.66667 -16 -12 -16c-6 0 -9.66667 3.33333 -11 10c-12 60 -35 108.667 -69 146c-36.6667 39.3333 -80 66 -130 80c-11.3333 3.33333 -18 6.16667 -20 8.5s-3 7.5 -3 15.5c0 12.6667 4 19 12 19\nc2 0 8.16667 -1.33333 18.5 -4c10.3333 -2.66667 26 -8.66667 47 -18c21 -9.33333 40.5 -20.6667 58.5 -34c30 -22.6667 55.6667 -51 77 -85v766c-22.6667 -35.3333 -50 -65 -82 -89c-16.6667 -12 -35 -22.3333 -55 -31c-20 -8.66667 -35 -14.3333 -45 -17\ns-16.3333 -4 -19 -4c-8 0 -12 6.33333 -12 19c0 11.3333 3.33333 18 10 20c56 15.3333 103 42.3333 141 81c35.3333 39.3333 58.6667 86.3333 70 141c2 12 6 18 12 18s9.66667 -3 11 -9c10.6667 -59.3333 33.3333 -108.333 68 -147c37.3333 -40 81 -66.6667 131 -80\nc11.3333 -3.33333 18 -6.16667 20 -8.5s3 -7.5 3 -15.5c0 -12.6667 -4 -19 -12 -19c-2 0 -8.16667 1.33333 -18.5 4s-26 8.66667 -47 18c-21 9.33333 -40.5 20.6667 -58.5 34c-30 22.6667 -55.6667 51 -77 85z"
            },
            "⇕": {
                x: 848,
                d: "M541 550v-600c20 16.6667 41.8333 32.1667 65.5 46.5s42.3333 24.5 56 30.5s21.8333 9 24.5 9c7.33333 0 11 -6.33333 11 -19c0 -9.33333 -1 -14.6667 -3 -16c-1.33333 -1.33333 -8 -5 -20 -11c-109.333 -48 -188.333 -130 -237 -246c-4.66667 -10 -9.33333 -15 -14 -15\nc-5.33333 0 -10 5.33333 -14 16c-50 116.667 -133.667 200.333 -251 251c-6 2.66667 -9 9.66667 -9 21c0 12.6667 3.66667 19 11 19c2.66667 0 10.8333 -3 24.5 -9s32.3333 -16 56 -30c23.6667 -14 45.5 -29.6667 65.5 -47v600c-20 -16.6667 -41.8333 -32.1667 -65.5 -46.5\nc-23.6667 -14.3333 -42.3333 -24.5 -56 -30.5s-21.8333 -9 -24.5 -9c-7.33333 0 -11 6.33333 -11 19c0 9.33333 1 14.6667 3 16c1.33333 1.33333 8 5 20 11c109.333 48 188.333 130 237 246c4.66667 10 9.33333 15 14 15c5.33333 0 10 -5.33333 14 -16\nc50 -116.667 133.667 -200.333 251 -251c6 -2.66667 9 -9.66667 9 -21c0 -12.6667 -3.66667 -19 -11 -19c-2.66667 0 -10.8333 3 -24.5 9s-32.3333 16 -56 30s-45.5 29.6667 -65.5 47zM347 590v-680c30 -30.6667 55.6667 -65.6667 77 -105\nc21.3333 39.3333 47 74.3333 77 105v680c-30 30.6667 -55.6667 65.6667 -77 105c-21.3333 -39.3333 -47 -74.3333 -77 -105z"
            },
            "\\": {
                x: 689,
                d: "M496 - 226l-341 940c - 3.33333 8 -5 13.3333 -5 16c0 5.33333 2 10 6 14s8.66667 6 14 6c6 0 10.3333 -1.66667 13 -5s5.66667 - 9.66667 9 -19l342 -940c3.33333 - 8 5 -13.3333 5 -16c0 -5.33333 - 2 - 10 - 6 - 14s-8.66667 - 6 - 14 - 6c-9.33333 0 -17 8 -23 24z"
            },
            "≀": {
                x: 467,
                d: "M316 -69c0 -9.33333 -9.66667 -14 -29 -14c-44 0 -77.8333 17.1667 -101.5 51.5c-23.6667 34.3333 -35.5 74.5 -35.5 120.5c0 19.3333 3 39.1667 9 59.5s12.3333 37.5 19 51.5s17.3333 34 32 60c34 62 51 112.333 51 151c0 34.6667 -7.66667 66.8333 -23 96.5\nc-15.3333 29.6667 -35.3333 45.5 -60 47.5c-18 2 -27 6.66667 -27 14c0 9.33333 10 14 30 14c43.3333 0 76.8333 -16.8333 100.5 -50.5c23.6667 -33.6667 35.5 -74.1667 35.5 -121.5c0 -19.3333 -3 -39.1667 -9 -59.5s-12.3333 -37.5 -19 -51.5s-17.3333 -34 -32 -60\nc-34 -62 -51 -112.333 -51 -151c0 -35.3333 7 -67 21 -95c16.6667 -31.3333 39.3333 -47.6667 68 -49c14 -2 21 -6.66667 21 -14z"
            },
            "√": {
                x: 1080,
                d: "M466 -855l421 874c6.66667 14 14.3333 21 23 21c6 0 10.8333 -2 14.5 -6s5.5 -8.66667 5.5 -14c0 -4 -2.33333 -10.6667 -7 -20l-454 -940c-2.66667 -5.33333 -4.83333 -9.16667 -6.5 -11.5s-4 -4.33333 -7 -6s-6.83333 -2.5 -11.5 -2.5\nc-9.33333 0 -16.3333 5.33333 -21 16l-197 433c-16.6667 -12 -27.3333 -20 -32 -24c-20 -14.6667 -31.3333 -22 -34 -22c-6.66667 0 -10 3.66667 -10 11c0 4 4.33333 9.33333 13 16l95 72c7.33333 5.33333 13 8 17 8c5.33333 0 10.3333 -5.33333 15 -16z"
            },
            "∐": {
                x: 979,
                d: "M726 605v-527c0 -21.3333 3.33333 -34.5 10 -39.5s27.3333 -7.5 62 -7.5c10 0 16.6667 -0.166667 20 -0.5s6 -1.66667 8 -4s3 -6.16667 3 -11.5c0 -7.33333 -1.66667 -11.6667 -5 -13c-3.33333 -1.33333 -11 -2 -23 -2h-623c-11.3333 0 -18.8333 0.666667 -22.5 2\nc-3.66667 1.33333 -5.5 5.66667 -5.5 13c0 5.33333 1 9.16667 3 11.5s4.5 3.66667 7.5 4s8.16667 0.5 15.5 0.5c37.3333 0 59.5 2.5 66.5 7.5s10.5 18.1667 10.5 39.5v527c0 21.3333 -3.33333 34.5 -10 39.5s-27.3333 7.5 -62 7.5c-10 0 -16.6667 0.166667 -20 0.5\ns-6 1.66667 -8 4s-3 6.16667 -3 11.5c0 10 5.66667 15 17 15c6.66667 0 17.3333 -0.333333 32 -1s25.3333 -1 32 -1s17.3333 -0.166667 32 -0.5c14.6667 -0.333333 25.3333 -0.5 32 -0.5c9.33333 0 30.6667 0.5 64 1.5s54.6667 1.5 64 1.5c11.3333 0 17 -5 17 -15\nc0 -5.33333 -1 -9.16667 -3 -11.5s-4.5 -3.66667 -7.5 -4s-8.16667 -0.5 -15.5 -0.5c-37.3333 0 -59.5 -2.5 -66.5 -7.5s-10.5 -18.1667 -10.5 -39.5v-574h305v574c0 21.3333 -3.33333 34.5 -10 39.5s-27.3333 7.5 -62 7.5c-10 0 -16.6667 0.166667 -20 0.5s-6 1.66667 -8 4\ns-3 6.16667 -3 11.5c0 10 5.66667 15 17 15c7.33333 0 18 -0.333333 32 -1s24.6667 -1 32 -1s18 -0.166667 32 -0.5s24.6667 -0.5 32 -0.5c9.33333 0 30.6667 0.5 64 1.5s54.6667 1.5 64 1.5c11.3333 0 17 -5 17 -15c0 -5.33333 -1 -9.16667 -3 -11.5s-4.5 -3.66667 -7.5 -4\ns-8.16667 -0.5 -15.5 -0.5c-37.3333 0 -59.5 -2.5 -66.5 -7.5s-10.5 -18.1667 -10.5 -39.5z"
            },
            "∇": {
                x: 1038,
                d: "M883 661l-337 -675c-4 -7.33333 -7.5 -12.3333 -10.5 -15s-8.5 -4 -16.5 -4s-13.5 1.33333 -16.5 4s-6.5 7.66667 -10.5 15l-337 675c-3.33333 4.66667 -5 9.33333 -5 14c0 3.33333 1.16667 5.5 3.5 6.5s9.16667 1.5 20.5 1.5h690c11.3333 0 18.1667 -0.5 20.5 -1.5\ns3.5 -3.16667 3.5 -6.5c0 -4.66667 -1.66667 -9.33333 -5 -14zM274 611l275 -550l274 550h-549z"
            },
            "∫": {
                x: 717,
                d: "M528 675c-10 12.6667 -23 19 -39 19c-16.6667 0 -29.6667 -9.33333 -39 -28s-16.3333 -47.6667 -21 -87c-6 -42 -12 -94.6667 -18 -158c-11.3333 -126 -32.6667 -275 -64 -447c-3.33333 -19.3333 -6 -34 -8 -44s-5.33333 -23.8333 -10 -41.5\nc-4.66667 -17.6667 -9.66667 -31.5 -15 -41.5s-12 -20.5 -20 -31.5s-17.5 -19 -28.5 -24s-23.1667 -7.5 -36.5 -7.5c-22.6667 0 -41.5 8.16667 -56.5 24.5s-22.5 34.8333 -22.5 55.5c0 13.3333 4 23.6667 12 31c8 7.33333 17.6667 11 29 11c10.6667 0 20 -3.83333 28 -11.5\nc8 -7.66667 12 -17.1667 12 -28.5c0 -10 -3.16667 -19.1667 -9.5 -27.5s-17.1667 -12.8333 -32.5 -13.5c10 -12.6667 23 -19 39 -19c16.6667 0 29.6667 9.33333 39 28s16.3333 47.6667 21 87c6 42 12 94.6667 18 158c12 128.667 33.3333 278.667 64 450\nc4 19.3333 6.83333 33.3333 8.5 42s4.83333 22.1667 9.5 40.5s9.66667 32.1667 15 41.5s12 19.6667 20 31s17.5 19.5 28.5 24.5s23.1667 7.5 36.5 7.5c22.6667 0 41.5 -8.16667 56.5 -24.5s22.5 -34.8333 22.5 -55.5c0 -13.3333 -4 -23.6667 -12 -31s-17.6667 -11 -29 -11\nc-10.6667 0 -20 3.83333 -28 11.5s-12 17.1667 -12 28.5c0 10 3.16667 19.1667 9.5 27.5s17.1667 12.8333 32.5 13.5z"
            },
            "⊔": {
                x: 844,
                d: "M694 562v-526c0 -16.6667 -1.83333 -26.8333 -5.5 -30.5c-3.66667 -3.66667 -13.8333 -5.5 -30.5 -5.5h-472c-16 0 -26 2 -30 6s-6 14 -6 30v526c0 8 0.166667 14 0.5 18s2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18v-522h464v522\nc0 8 0.166667 14 0.5 18s2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18z"
            },
            "⊓": {
                x: 844,
                d: "M694 562v-526c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v522h-464v-522c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6c-13.3333 0 -20 12 -20 36v526c0 16.6667 1.83333 26.8333 5.5 30.5\ns13.5 5.5 29.5 5.5h474c16 0 25.8333 -1.83333 29.5 -5.5s5.5 -13.8333 5.5 -30.5z"
            },
            "⊑": {
                x: 931,
                d: "M746 596h-545v-499h544c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5h-550c-16 0 -25.8333 1.83333 -29.5 5.5c-3.66667 3.66667 -5.5 13.8333 -5.5 30.5v507c0 16 2 26 6 30s14 6 30 6h549\nc7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5zM746 -137h-561c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14c0 13.3333 12 20 36 20h559\nc24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "⊒": {
                x: 931,
                d: "M770 600v-507c0 -16.6667 -1.83333 -26.8333 -5.5 -30.5c-3.66667 -3.66667 -13.5 -5.5 -29.5 -5.5h-550c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14c0 13.3333 12 20 36 20h544v499h-545c-7.33333 0 -13 0.166667 -17 0.5\ns-8 2.16667 -12 5.5s-6 8 -6 14s2 10.6667 6 14s8 5.16667 12 5.5s9.66667 0.5 17 0.5h550c16 0 25.8333 -1.83333 29.5 -5.5s5.5 -13.8333 5.5 -30.5zM186 -97h559c24 0 36 -6.66667 36 -20c0 -6 -2 -10.6667 -6 -14c-4 -3.33333 -8 -5.16667 -12 -5.5\ns-9.66667 -0.5 -17 -0.5h-561c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5c-4 3.33333 -6 8 -6 14c0 13.3333 12 20 36 20z"
            },
            "&#xa7;": {
                x: 605,
                d: "M342 96c75.3333 -40 113 -89.6667 113 -149c0 -40.6667 -14.6667 -76.1667 -44 -106.5s-65.6667 -45.5 -109 -45.5c-38 0 -70.5 12 -97.5 36s-40.5 51.6667 -40.5 83c0 12.6667 3.33333 21.8333 10 27.5c6.66667 5.66667 14.6667 8.5 24 8.5c10 0 18 -3.16667 24 -9.5\nc6 -6.33333 9 -14.1667 9 -23.5c0 -4 -0.5 -8 -1.5 -12s-4.5 -8.5 -10.5 -13.5s-14 -7.5 -24 -7.5c10.6667 -24.6667 26.5 -42 47.5 -52s40.5 -15 58.5 -15c31.3333 0 55.3333 13.5 72 40.5s25 56.8333 25 89.5c0 30 -8.33333 58 -25 84s-41.3333 46 -74 60\nc-13.3333 6 -24.1667 11 -32.5 15s-20.8333 11.5 -37.5 22.5s-29.8333 21.8333 -39.5 32.5s-18.6667 24.6667 -27 42s-12.5 35.3333 -12.5 54c0 32.6667 10.3333 62.8333 31 90.5s48 46.5 82 56.5c-75.3333 40 -113 89.6667 -113 149c0 40.6667 14.6667 76.1667 44 106.5\ns65.6667 45.5 109 45.5c38 0 70.5 -12 97.5 -36s40.5 -51.6667 40.5 -83c0 -12.6667 -3.33333 -21.8333 -10 -27.5s-14.6667 -8.5 -24 -8.5c-10 0 -18 3.16667 -24 9.5s-9 14.1667 -9 23.5c0 4 0.5 8 1.5 12s4.5 8.5 10.5 13.5s14 7.5 24 7.5\nc-10.6667 24.6667 -26.5 42 -47.5 52s-40.5 15 -58.5 15c-31.3333 0 -55.3333 -13.5 -72 -40.5s-25 -56.8333 -25 -89.5c0 -30 8.33333 -58 25 -84s41.3333 -46 74 -60c13.3333 -6 24.1667 -11 32.5 -15s20.8333 -11.5 37.5 -22.5s29.8333 -21.8333 39.5 -32.5\ns18.6667 -24.6667 27 -42s12.5 -35.3333 12.5 -54c0 -32.6667 -10.3333 -62.8333 -31 -90.5c-20.6667 -27.6667 -48 -46.5 -82 -56.5zM308 113c23.3333 0 44.1667 12.5 62.5 37.5s27.5 55.8333 27.5 92.5c0 22.6667 -4.5 43.8333 -13.5 63.5s-19.6667 35 -32 46\ns-23.5 19.5 -33.5 25.5s-17.3333 9 -22 9c-23.3333 0 -44.1667 -12.5 -62.5 -37.5s-27.5 -55.8333 -27.5 -92.5c0 -22.6667 4.5 -43.8333 13.5 -63.5s19.6667 -35 32 -46c12.3333 -11 23.5 -19.5 33.5 -25.5s17.3333 -9 22 -9z"
            },
            "†": {
                x: 633,
                d: "M327 420c1.33333 -20.6667 5.33333 -49 12 -85c7.33333 -38 11 -77 11 -117c0 -66.6667 -3 -154 -9 -262c-2.66667 -57.3333 -6.33333 -108.667 -11 -154c-0.666667 -5.33333 -1.33333 -8.83333 -2 -10.5s-1.83333 -3.33333 -3.5 -5s-4.5 -2.5 -8.5 -2.5\nc-8 0 -12.3333 6.66667 -13 20c-13.3333 145.333 -20 283.333 -20 414c0 40 3.66667 79.3333 11 118c7.33333 36.6667 11.3333 64.6667 12 84c-18.6667 -2.66667 -38.6667 -6.66667 -60 -12c-26 -7.33333 -45.6667 -11 -59 -11s-22.8333 3.5 -28.5 10.5\ns-8.5 14.8333 -8.5 23.5c0 4 0.666667 8.16667 2 12.5s5 8.83333 11 13.5s14 7 24 7c16 0 40.3333 -4.66667 73 -14c10 -3.33333 25.3333 -6.33333 46 -9c0 22 -3.33333 55 -10 99c-8.66667 58.6667 -13 99.6667 -13 123c0 28 11.3333 42 34 42c22 0 33 -14 33 -42\nc0 -19.3333 -4 -58.6667 -12 -118c-7.33333 -44 -11 -78.6667 -11 -104c18.6667 2.66667 38.6667 6.66667 60 12c26 7.33333 45.6667 11 59 11s22.8333 -3.5 28.5 -10.5s8.5 -14.8333 8.5 -23.5c0 -4 -0.666667 -8.16667 -2 -12.5s-5 -8.83333 -11 -13.5s-14 -7 -24 -7\nc-16 0 -40.3333 4.66667 -73 14c-10 3.33333 -25.3333 6.33333 -46 9z"
            },
            "‡": {
                x: 633,
                d: "M327 467c0.666667 -20 4.66667 -50.6667 12 -92c7.33333 -36 11 -64.3333 11 -85c0 -26.6667 -11.3333 -40 -34 -40c-22 0 -33 13.3333 -33 40c0 21.3333 4.33333 54.6667 13 100c6 31.3333 9.33333 57 10 77c-18.6667 -2.66667 -38.6667 -6.66667 -60 -12\nc-26 -7.33333 -45.6667 -11 -59 -11s-22.8333 3.5 -28.5 10.5s-8.5 14.8333 -8.5 23.5c0 4 0.666667 8.16667 2 12.5s5 8.83333 11 13.5s14 7 24 7c16 0 40.3333 -4.66667 73 -14c10 -3.33333 25.3333 -6.33333 46 -9c-0.666667 20 -4.66667 50.6667 -12 92\nc-7.33333 36 -11 64.3333 -11 85c0 26.6667 11.3333 40 34 40c22 0 33 -13.3333 33 -40c0 -21.3333 -4.33333 -54.6667 -13 -100c-6 -31.3333 -9.33333 -57 -10 -77c18.6667 2.66667 38.6667 6.66667 60 12c26 7.33333 45.6667 11 59 11s22.8333 -3.5 28.5 -10.5\ns8.5 -14.8333 8.5 -23.5c0 -4 -0.666667 -8.16667 -2 -12.5s-5 -8.83333 -11 -13.5s-14 -7 -24 -7c-16 0 -40.3333 4.66667 -73 14c-10 3.33333 -25.3333 6.33333 -46 9zM327 12c0.666667 -22 5 -55 13 -99c6.66667 -35.3333 10 -61.3333 10 -78\nc0 -26.6667 -11.3333 -40 -34 -40c-22 0 -33 13.3333 -33 40c0 18.6667 4 48.3333 12 89c6 36.6667 9.66667 66 11 88c-14.6667 -1.33333 -30 -4.66667 -46 -10c-34 -8.66667 -59.3333 -13 -76 -13c-10.6667 0 -19 3.5 -25 10.5s-9 14.5 -9 22.5\nc0 8.66667 2.83333 16.3333 8.5 23s14.1667 10 25.5 10c16.6667 0 38 -3.66667 64 -11c1.33333 0 5.33333 -1 12 -3c6.66667 -2 14.3333 -3.83333 23 -5.5s16.3333 -2.83333 23 -3.5c-0.666667 22 -5 55 -13 99c-6.66667 35.3333 -10 61.3333 -10 78c0 26.6667 11 40 33 40\nc22.6667 0 34 -13.3333 34 -40c0 -18.6667 -4 -48.3333 -12 -89c-6 -36.6667 -9.66667 -66 -11 -88c14.6667 1.33333 30 4.66667 46 10c34 8.66667 59.3333 13 76 13c10.6667 0 19 -3.5 25 -10.5s9 -14.5 9 -22.5c0 -8.66667 -2.83333 -16.3333 -8.5 -23\ns-14.1667 -10 -25.5 -10c-17.3333 0 -38.6667 3.66667 -64 11c-1.33333 0 -5.33333 1 -12 3s-14.3333 3.83333 -23 5.5c-8.66667 1.66667 -16.3333 2.83333 -23 3.5z"
            },
            "&#xb6;": {
                x: 827,
                d: "M594 654v-812c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 10 -0.5 18v812h-70v-812c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12\ns-0.5 10 -0.5 18v388c-78 3.33333 -146.5 25.6667 -205.5 67c-59 41.3333 -88.5 96.6667 -88.5 166c0 62.6667 24 116.833 72 162.5s108.333 68.5 181 68.5h239c7.33333 0 13 -0.166667 17 -0.5s8 -2.16667 12 -5.5s6 -8 6 -14s-2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5\ns-9.66667 -0.5 -17 -0.5h-48z"
            },
            "♣": {
                x: 1022,
                d: "M524 -130h-26c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 2.66667 1 6.66667 3 12c16 56 24.3333 112 25 168h-50c-0.666667 -19.3333 -6 -35.6667 -16 -49c-10 -13.3333 -22.1667 -22.8333 -36.5 -28.5\nc-14.3333 -5.66667 -26.8333 -9.5 -37.5 -11.5s-20.6667 -3 -30 -3c-48 0 -88.5 19.1667 -121.5 57.5c-33 38.3333 -49.5 84.5 -49.5 138.5c0 52 13.1667 97.3333 39.5 136s61.8333 58 106.5 58c37.3333 0 68 -14.3333 92 -43l22 46c-50.6667 40.6667 -76 94.3333 -76 161\nc0 52.6667 17 98.3333 51 137s76 58 126 58s92 -19.1667 126 -57.5s51 -84.1667 51 -137.5c0 -66.6667 -25.3333 -120.333 -76 -161l22 -46c24 28.6667 54.6667 43 92 43c44.6667 0 80.1667 -19.3333 106.5 -58s39.5 -84 39.5 -136c0 -54 -16.5 -100.167 -49.5 -138.5\nc-33 -38.3333 -73.5 -57.5 -121.5 -57.5c-14 0 -28.5 1.5 -43.5 4.5s-31.1667 12 -48.5 27s-26.6667 35.1667 -28 60.5h-50c0 -54 8 -108.667 24 -164c2.66667 -7.33333 4 -12.6667 4 -16c0 -6 -2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "♥": {
                x: 968,
                d: "M484 605c13.3333 28 34.3333 53.5 63 76.5s63.3333 34.5 104 34.5c55.3333 0 97 -20.8333 125 -62.5s42 -96.5 42 -164.5c0 -28.6667 -4.5 -57.3333 -13.5 -86s-19.1667 -53.5 -30.5 -74.5s-28.3333 -44.8333 -51 -71.5c-22.6667 -26.6667 -41.6667 -47.6667 -57 -63\ns-37.3333 -36.6667 -66 -64c-40 -37.3333 -72 -86 -96 -146c-4 -11.3333 -10.6667 -17 -20 -17s-16.6667 7.33333 -22 22c-17.3333 44 -39 81.3333 -65 112c-7.33333 9.33333 -28.3333 29.6667 -63 61c-69.3333 66 -117.333 124.5 -144 175.5s-40 101.5 -40 151.5\nc0 66.6667 14 121.167 42 163.5s69.6667 63.5 125 63.5c40.6667 0 75.5 -11.6667 104.5 -35s49.8333 -48.6667 62.5 -76zM484 39c14.6667 30.6667 30 55.3333 46 74c16 18.6667 42.3333 45.3333 79 80c68.6667 64.6667 114 120.167 136 166.5s33 89.5 33 129.5\nc0 52 -9 95.3333 -27 130c-20 38 -53.3333 57 -100 57c-30 0 -59.3333 -10.6667 -88 -32s-48 -57 -58 -107c-3.33333 -15.3333 -10.3333 -23 -21 -23s-17.3333 6.66667 -20 20c-4.66667 24.6667 -12.1667 46.1667 -22.5 64.5s-21 32.3333 -32 42s-23.1667 17.3333 -36.5 23\ns-24.1667 9.16667 -32.5 10.5s-16.1667 2 -23.5 2c-26.6667 0 -49 -6.33333 -67 -19s-31 -29.6667 -39 -51s-13.5 -41.1667 -16.5 -59.5s-4.5 -37.5 -4.5 -57.5c0 -47.3333 14.5 -96.3333 43.5 -147s83.8333 -112 164.5 -184c35.3333 -32 64 -71.6667 86 -119z"
            },
            "♠": {
                x: 968,
                d: "M497 -130h-26c-7.33333 0 -13 0.166667 -17 0.5s-8 2.16667 -12 5.5s-6 8 -6 14c0 2.66667 1 6.66667 3 12c16 56 24.3333 112 25 168h-50c-0.666667 -19.3333 -6.16667 -35.6667 -16.5 -49c-10.3333 -13.3333 -23.1667 -22.8333 -38.5 -28.5\nc-15.3333 -5.66667 -29 -9.5 -41 -11.5s-23.3333 -3 -34 -3c-27.3333 0 -50.6667 7.83333 -70 23.5s-33.1667 36.3333 -41.5 62c-8.33333 25.6667 -14.1667 49.5 -17.5 71.5s-5 44.6667 -5 68c0 54 14.5 103.333 43.5 148s75.1667 95 138.5 151\nc51.3333 45.3333 95.3333 114.667 132 208c4 11.3333 10.6667 17 20 17c10 0 16 -4.33333 18 -13c12 -30 22 -53.5 30 -70.5s21.6667 -40 41 -69s40.6667 -53.8333 64 -74.5c62.6667 -55.3333 108.5 -105 137.5 -149s43.5 -93.3333 43.5 -148\nc0 -21.3333 -1.5 -42.5 -4.5 -63.5s-8.5 -45 -16.5 -72s-21.6667 -48.6667 -41 -65s-43.3333 -24.5 -72 -24.5c-8.66667 0 -18.1667 0.833333 -28.5 2.5s-24 5 -41 10s-31.1667 14.5 -42.5 28.5s-17.3333 31 -18 51h-50c0 -54 8 -108.667 24 -164\nc2.66667 -7.33333 4 -12.6667 4 -16c0 -6 -2 -10.6667 -6 -14s-8 -5.16667 -12 -5.5s-9.66667 -0.5 -17 -0.5z"
            },
            "∣": {
                x: 340,
                d: "M190 714v-928c0 -8 -0.166667 -14 -0.5 -18s-2.16667 -8 -5.5 -12s-8 -6 -14 -6s-10.6667 2 -14 6s-5.16667 8 -5.5 12s-0.5 10 -0.5 18v928c0 8 0.166667 14 0.5 18s2.16667 8 5.5 12s8 6 14 6s10.6667 -2 14 -6s5.16667 -8 5.5 -12s0.5 -10 0.5 -18z"
            }
        }
    };
});
/**
 * 公式对象，表达式容器
 */
define("formula", [ "kity", "def/gtype", "fpaper", "string/installer", "font/kf-ams-main" ], function(require, exports, module) {
    var kity = require("kity"), GTYPE = require("def/gtype"), DEFAULT_OPTIONS = {
        fontsize: 20,
        autoresize: true,
        padding: [ 0 ]
    }, EXPRESSION_INTERVAL = 10, ExpressionWrap = kity.createClass("ExpressionWrap", {
        constructor: function(exp, config) {
            this.wrap = new kity.Group();
            this.bg = new kity.Rect(0, 0, 0, 0).fill("transparent");
            this.exp = exp;
            this.config = config;
            this.wrap.setAttr("data-type", "kf-exp-wrap");
            this.bg.setAttr("data-type", "kf-exp-wrap-bg");
            this.wrap.addShape(this.bg);
            this.wrap.addShape(this.exp);
        },
        getWrapShape: function() {
            return this.wrap;
        },
        getExpression: function() {
            return this.exp;
        },
        getBackground: function() {
            return this.bg;
        },
        resize: function() {
            var padding = this.config.padding, expBox = this.exp.getRenderBox();
            if (padding.length === 1) {
                padding[1] = padding[0];
            }
            this.bg.setSize(padding[1] * 2 + expBox.width, padding[0] * 2 + expBox.height);
            this.exp.translate(padding[1], padding[0]);
        }
    });
    return kity.createClass("Formula", {
        base: require("fpaper"),
        constructor: function(container, config) {
            this.callBase(container);
            this.expressions = [];
            this.config = kity.Utils.extend({}, DEFAULT_OPTIONS, config);
            this.zoom = (this.config.fontsize || 20) / 20;
            if ("width" in this.config) {
                this.setWidth(this.config.width);
            }
            if ("height" in this.config) {
                this.setHeight(this.config.height);
            }
        },
        insertExpression: function(expression, index) {
            var expWrap = this.wrap(expression);
            // clear zoom
            this.container.resetTransform();
            this.expressions.splice(index, 0, expWrap.getWrapShape());
            this.addShape(expWrap.getWrapShape());
            notifyExpression.call(this, expWrap.getExpression());
            expWrap.resize();
            correctOffset.call(this);
            this.resetZoom();
            this.config.autoresize && this.resize();
        },
        appendExpression: function(expression) {
            this.insertExpression(expression, this.expressions.length);
        },
        resize: function() {
            var renderBox = this.container.getRenderBox();
            this.node.setAttribute("width", renderBox.width);
            this.node.setAttribute("height", renderBox.height);
        },
        resetZoom: function() {
            var zoomLevel = this.zoom / this.getBaseZoom();
            if (zoomLevel !== 0) {
                this.container.setAnchor(0, 0);
                this.container.scale(zoomLevel);
            }
        },
        wrap: function(exp) {
            return new ExpressionWrap(exp, this.config);
        },
        clear: function() {
            this.callBase();
            this.expressions = [];
        },
        clearExpressions: function() {
            kity.Utils.each(this.expressions, function(exp, i) {
                exp.remove();
            });
            this.expressions = [];
        }
    });
    // 调整表达式之间的偏移
    function correctOffset() {
        var exprOffset = 0;
        kity.Utils.each(this.expressions, function(expr) {
            var box = null;
            if (!expr) {
                return;
            }
            expr.setTransform(new kity.Matrix(1, 0, 0, 1, 0, 0));
            box = expr.getRenderBox();
            expr.translate(0 - box.x, exprOffset);
            exprOffset += box.height + EXPRESSION_INTERVAL;
        });
        return this;
    }
    // 通知表达式已接入到paper
    function notifyExpression(expression) {
        var len = 0, childGroup = null;
        if (!expression) {
            return;
        }
        if (expression.getType() === GTYPE.EXP) {
            for (var i = 0, len = expression.getChildren().length; i < len; i++) {
                notifyExpression(expression.getChild(i));
            }
        } else if (expression.getType() === GTYPE.COMPOUND_EXP) {
            // 操作数处理
            for (var i = 0, len = expression.getOperands().length; i < len; i++) {
                notifyExpression(expression.getOperand(i));
            }
            // 处理操作符
            notifyExpression(expression.getOperator());
        }
        expression.addedCall && expression.addedCall();
    }
});
/**
 * 公式专用paper
 */
define("fpaper", [ "kity", "string/installer", "font/kf-ams-main" ], function(require, exports, module) {
    var kity = require("kity"), FontInstall = require("string/installer");
    return kity.createClass("FPaper", {
        base: kity.Paper,
        constructor: function(container) {
            this.callBase(container);
            this.container = new kity.Group();
            this.container.setAttr("data-type", "kf-container");
            this.background = new kity.Group();
            this.background.setAttr("data-type", "kf-bg");
            this.baseZoom = 1;
            this.zoom = 1;
            this.base("addShape", this.background);
            this.base("addShape", this.container);
            this.initFont();
        },
        initFont: function() {
            this.fontManager = new FontInstall(this);
            this.fontManager.mount(require("font/kf-ams-main"));
        },
        getZoom: function() {
            return this.zoom;
        },
        getBaseZoom: function() {
            return this.baseZoom;
        },
        addShape: function(shape, pos) {
            return this.container.addShape(shape, pos);
        },
        getBackground: function() {
            return this.background;
        },
        removeShape: function(pos) {
            return this.container.removeShape(pos);
        },
        clear: function() {
            return this.container.clear();
        }
    });
});
/**
 * kity库封包
 */
define("kity", [], function(require, exports, module) {
    if (!window.kity) {
        throw new Error("Missing Kity Graphic Lib");
    }
    return window.kity;
});
/**
 * 分数操作符
 */
define("operator/binary-opr/fraction", [ "kity", "operator/binary-opr/up-down", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("FractionOperator", {
        base: require("operator/binary-opr/up-down"),
        constructor: function() {
            this.callBase("Fraction");
        },
        applyOperand: function(upOperand, downOperand) {
            var upWidth = upOperand.getWidth(), downWidth = downOperand.getWidth(), upHeight = upOperand.getHeight(), downHeight = downOperand.getHeight(), maxWidth = Math.max(upWidth, downWidth), maxHeight = Math.max(upHeight, downHeight), operatorShape = generateOperator(maxWidth);
            this.addOperatorShape(operatorShape);
            upOperand.translate((maxWidth - upWidth) / 2, maxHeight - upHeight);
            operatorShape.translate(0, maxHeight);
            downOperand.translate((maxWidth - downWidth) / 2, maxHeight + operatorShape.getHeight());
        }
    });
    function generateOperator(width) {
        return new kity.Rect(width, 1).fill("black");
    }
});
/**
 * 左右结合二元操作符
 * @abstract
 */
define("operator/binary-opr/left-right", [ "kity", "operator/binary", "operator/operator" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("LeftRightOperator", {
        base: require("operator/binary"),
        applyOperand: function(leftOperand, rightOperand) {
            var operator = this, operatorBox = operator.getRenderBox(), // 操作数特殊处理
            leftOperandBox = leftOperand.getRenderBox(), rightOperandBox = rightOperand.getRenderBox(), // 偏移量
            offset = 0, // 操作对象最大高度
            maxHeight = Math.max(leftOperandBox.height, rightOperandBox.height, operatorBox.height);
            // 左操作数
            leftOperand.translate(offset, (maxHeight - leftOperandBox.height) / 2);
            // 操作符
            offset += leftOperandBox.width + leftOperandBox.x;
            operator.translate(offset, (maxHeight - operatorBox.height) / 2);
            // 右操作数
            offset += operatorBox.width + operatorBox.x;
            rightOperand.translate(offset, (maxHeight - rightOperandBox.height) / 2);
        }
    });
});
/**
 * 负正操作符
 */
define("operator/binary-opr/minus-plus", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("MinusPlusOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            this.callBase("Mp");
            // 绘制符号图形
            this.addOperatorShape(new kity.Path(pathData).fill("black").translate(5, 2));
        }
    });
});
/**
 * 乘法操作符
 */
define("operator/binary-opr/multiplication", [ "kity", "char/data", "char/data/number/0", "char/data/number/1", "char/data/number/2", "char/data/number/3", "char/data/number/4", "char/data/number/5", "char/data/number/6", "char/data/number/7", "char/data/number/8", "char/data/number/9", "char/data/character/a", "char/data/character/b", "char/data/character/c", "char/data/character/d", "char/data/character/e", "char/data/character/f", "char/data/character/g", "char/data/character/h", "char/data/character/i", "char/data/character/j", "char/data/character/k", "char/data/character/l", "char/data/character/m", "char/data/character/n", "char/data/character/o", "char/data/character/p", "char/data/character/q", "char/data/character/r", "char/data/character/s", "char/data/character/t", "char/data/character/u", "char/data/character/v", "char/data/character/w", "char/data/character/x", "char/data/character/y", "char/data/character/z", "char/data/character/ua", "char/data/character/ub", "char/data/character/uc", "char/data/character/ud", "char/data/character/ue", "char/data/character/uf", "char/data/character/ug", "char/data/character/uh", "char/data/character/ui", "char/data/character/uj", "char/data/character/uk", "char/data/character/ul", "char/data/character/um", "char/data/character/un", "char/data/character/uo", "char/data/character/up", "char/data/character/uq", "char/data/character/ur", "char/data/character/us", "char/data/character/ut", "char/data/character/uu", "char/data/character/uv", "char/data/character/uw", "char/data/character/ux", "char/data/character/uy", "char/data/character/uz", "char/data/symbol/base/l-parentheses", "char/data/symbol/base/r-parentheses", "char/data/symbol/base/negative", "char/data/symbol/relational/eq", "char/data/symbol/base/positive", "char/data/symbol/base/vertical", "char/data/symbol/base/slash", "char/data/symbol/base/exclamation", "char/data/symbol/base/l-brackets", "char/data/symbol/base/r-brackets", "char/data/symbol/base/colon", "char/data/symbol/base/quotation", "char/data/symbol/relational/lt", "char/data/symbol/relational/gt", "char/data/symbol/base/point", "char/data/symbol/base/l-braces", "char/data/symbol/base/r-braces", "char/data/symbol/base/comma", "char/data/symbol/base/times", "char/data/symbol/base/div", "char/data/symbol/base/pm", "char/data/symbol/base/mp", "char/data/symbol/base/ast", "char/data/symbol/base/cdot", "char/data/symbol/base/cdots", "char/data/symbol/base/ddots", "char/data/symbol/base/ldots", "char/data/symbol/base/vdots", "char/data/symbol/base/wedge", "char/data/symbol/base/vee", "char/data/symbol/base/mid", "char/data/symbol/relational/approx", "char/data/symbol/relational/equiv", "char/data/symbol/relational/geq", "char/data/symbol/relational/gg", "char/data/symbol/relational/leq", "char/data/symbol/relational/ll", "char/data/symbol/relational/sim", "char/data/symbol/relational/simeq", "char/data/symbol/set/cap", "char/data/symbol/set/cup", "char/data/symbol/set/in", "char/data/symbol/set/ni", "char/data/symbol/set/sqcap", "char/data/symbol/set/sqcup", "char/data/symbol/set/sqsubset", "char/data/symbol/set/sqsubseteq", "char/data/symbol/set/sqsupset", "char/data/symbol/set/sqsupseteq", "char/data/symbol/set/subset", "char/data/symbol/set/subseteq", "char/data/symbol/set/supset", "char/data/symbol/set/supseteq", "char/data/symbol/not/ncong", "char/data/symbol/not/neq", "char/data/symbol/not/nequiv", "char/data/symbol/not/nge", "char/data/symbol/not/ngt", "char/data/symbol/not/nlt", "char/data/symbol/not/nle", "char/data/symbol/not/nsim", "char/data/symbol/not/nsubseteq", "char/data/symbol/not/nsupseteq", "char/data/symbol/not/nin", "char/data/symbol/base/infty", "char/data/symbol/base/to", "char/data/greek/alpha", "char/data/greek/beta", "char/data/greek/gamma", "char/data/greek/delta", "char/data/greek/epsilon", "char/data/greek/varepsilon", "char/data/greek/zeta", "char/data/greek/eta", "char/data/greek/theta", "char/data/greek/iota", "char/data/greek/kappa", "char/data/greek/lambda", "char/data/greek/mu", "char/data/greek/nu", "char/data/greek/xi", "char/data/greek/pi", "char/data/greek/rho", "char/data/greek/sigma", "char/data/greek/tau", "char/data/greek/upsilon", "char/data/greek/phi", "char/data/greek/varphi", "char/data/greek/chi", "char/data/greek/psi", "char/data/greek/omega", "char/data/roman/ua", "char/data/roman/ub", "char/data/greek/u-gamma", "char/data/greek/u-delta", "char/data/roman/ue", "char/data/roman/uz", "char/data/roman/uh", "char/data/greek/u-theta", "char/data/roman/ui", "char/data/roman/uk", "char/data/greek/u-lambda", "char/data/roman/um", "char/data/roman/un", "char/data/greek/u-xi", "char/data/roman/uo", "char/data/greek/u-pi", "char/data/roman/up", "char/data/greek/u-sigma", "char/data/roman/ut", "char/data/greek/u-upsilon", "char/data/greek/u-phi", "char/data/roman/ux", "char/data/greek/u-psi", "char/data/greek/u-omega", "char/data/roman/a", "char/data/roman/b", "char/data/roman/c", "char/data/roman/d", "char/data/roman/e", "char/data/roman/f", "char/data/roman/g", "char/data/roman/h", "char/data/roman/i", "char/data/roman/j", "char/data/roman/k", "char/data/roman/l", "char/data/roman/m", "char/data/roman/n", "char/data/roman/o", "char/data/roman/p", "char/data/roman/q", "char/data/roman/r", "char/data/roman/s", "char/data/roman/t", "char/data/roman/u", "char/data/roman/v", "char/data/roman/w", "char/data/roman/x", "char/data/roman/y", "char/data/roman/z", "char/data/roman/uc", "char/data/roman/ud", "char/data/roman/uf", "char/data/roman/ug", "char/data/roman/uj", "char/data/roman/ul", "char/data/roman/uq", "char/data/roman/ur", "char/data/roman/us", "char/data/roman/uu", "char/data/roman/uv", "char/data/roman/uw", "char/data/roman/uy", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity"), CHAR_DATA = require("char/data");
    return kity.createClass("MultiplicationOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            var opData = CHAR_DATA.std["\\times\\"], opShape = null;
            this.callBase("Multiplication");
            opShape = new kity.Path(opData.path).fill("black");
            opShape.translate(opData.offset.x, opData.offset.y);
            // 绘制符号图形
            this.addOperatorShape(opShape);
        }
    });
});
/**
 * "平行"操作符
 */
define("operator/binary-opr/parallel", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("ParallelOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            var pathData = "M0.96,23.186c0,0.384,0,0.816-0.48,0.816S0,23.498,0,23.114V0.888C0,0.528,0,0,0.48,0s0.48,0.432,0.48,0.816V23.186z    M5.64,23.114c0,0.36,0,0.888-0.48,0.888s-0.48-0.432-0.48-0.816V0.816C4.68,0.432,4.68,0,5.16,0s0.48,0.504,0.48,0.888V23.114z", opShape = new kity.Path(pathData).fill("black");
            this.callBase("Parallel");
            opShape.translate(11.5, 0);
            // 绘制符号图形
            this.addOperatorShape(opShape);
        }
    });
});
/**
 * 开方操作符
 */
define("operator/binary-opr/radical", [ "kity", "operator/binary", "operator/operator" ], function(require, exports, modules) {
    var kity = require("kity"), // 符号图形属性
    // 线条宽度
    SHAPE_DATA_WIDTH = .5, // 计算公式
    radians = 2 * Math.PI / 360, sin20 = Math.sin(20 * radians), cos20 = Math.cos(20 * radians), tan20 = Math.tan(20 * radians), atan20 = Math.atan(20 * radians);
    return kity.createClass("RadicalOperator", {
        base: require("operator/binary"),
        constructor: function() {
            this.callBase("Radical");
        },
        applyOperand: function(radicand, exponent) {
            generateOperator.call(this, radicand, exponent);
        }
    });
    // 根据给定的操作数生成操作符的pathData
    // radicand 表示被开方数
    // exponent 表示指数
    function generateOperator(radicand, exponent) {
        var decoration = generateDecoration(radicand), vLine = generateVLine(radicand), hLine = generateHLine(radicand);
        this.addOperatorShape(decoration);
        this.addOperatorShape(vLine);
        this.addOperatorShape(hLine);
        adjustmentPosition.call(this, mergeShape(decoration, vLine, hLine), this.operatorShape, radicand, exponent);
    }
    // 生成根号中的左边装饰部分
    function generateDecoration(radicand) {
        var shape = new kity.Path(), // 命名为a以便于精简表达式
        a = SHAPE_DATA_WIDTH, h = radicand.getHeight() / 3, drawer = shape.getDrawer();
        // 根号尾部左上角开始
        drawer.moveTo(0, cos20 * a * 6);
        drawer.lineBy(sin20 * a, cos20 * a);
        drawer.lineBy(cos20 * a * 3, -sin20 * a * 3);
        drawer.lineBy(tan20 * h, h);
        drawer.lineBy(sin20 * a * 3, -cos20 * a * 3);
        drawer.lineBy(-sin20 * h, -h);
        drawer.close();
        return shape.fill("black");
    }
    // 根据操作数生成根号的竖直线部分
    function generateVLine(operand) {
        var shape = new kity.Path(), h = operand.getHeight(), drawer = shape.getDrawer();
        drawer.moveTo(tan20 * h, 0);
        drawer.lineTo(0, h);
        drawer.lineBy(sin20 * SHAPE_DATA_WIDTH * 3, cos20 * SHAPE_DATA_WIDTH * 3);
        drawer.lineBy(tan20 * h + sin20 * SHAPE_DATA_WIDTH * 3, -(h + 3 * SHAPE_DATA_WIDTH * cos20));
        drawer.close();
        return shape.fill("black");
    }
    // 根据操作数生成根号的水平线部分
    function generateHLine(operand) {
        // 表达式宽度
        var w = operand.getWidth() + 2 * SHAPE_DATA_WIDTH;
        return new kity.Rect(w, 2 * SHAPE_DATA_WIDTH).fill("black");
    }
    // 合并根号的各个部分， 并返回根号的关键点位置数据
    function mergeShape(decoration, vLine, hLine) {
        var decoBox = decoration.getRenderBox(), vLineBox = vLine.getRenderBox();
        vLine.translate(decoBox.width - sin20 * SHAPE_DATA_WIDTH * 3, 0);
        decoration.translate(0, vLineBox.height - decoBox.height);
        vLineBox = vLine.getRenderBox();
        hLine.translate(vLineBox.x + vLineBox.width - SHAPE_DATA_WIDTH / cos20, 0);
        // 返回关键点数据
        return {
            x: vLineBox.x + vLineBox.width - SHAPE_DATA_WIDTH / cos20,
            y: 0
        };
    }
    // 调整整个根号表达式的各个部分： 位置、操作符、被开方数、指数
    function adjustmentPosition(position, operator, radicand, exponent) {
        var exponentBox = null, opOffset = {
            x: 0,
            y: 0
        }, opBox = operator.getRenderBox();
        exponent.setAnchor(0, 0);
        exponent.scale(.7);
        exponentBox = exponent.getRenderBox();
        if (exponentBox.width > 0 && exponentBox.height > 0) {
            opOffset.y = exponentBox.height - opBox.height / 2;
            // 指数不超出根号， 则移动指数
            if (opOffset.y < 0) {
                exponent.translate(0, -opOffset.y);
                opOffset.y = 0;
            }
            opOffset.x = exponentBox.width + opBox.height / 2 * tan20 - position.x;
        }
        operator.translate(opOffset.x, opOffset.y);
        radicand.translate(opOffset.x + position.x + SHAPE_DATA_WIDTH, opOffset.y + 2 * SHAPE_DATA_WIDTH);
    }
});
/**
 * 减法操作符
 */
define("operator/binary-opr/subtraction", [ "kity", "char/data", "char/data/number/0", "char/data/number/1", "char/data/number/2", "char/data/number/3", "char/data/number/4", "char/data/number/5", "char/data/number/6", "char/data/number/7", "char/data/number/8", "char/data/number/9", "char/data/character/a", "char/data/character/b", "char/data/character/c", "char/data/character/d", "char/data/character/e", "char/data/character/f", "char/data/character/g", "char/data/character/h", "char/data/character/i", "char/data/character/j", "char/data/character/k", "char/data/character/l", "char/data/character/m", "char/data/character/n", "char/data/character/o", "char/data/character/p", "char/data/character/q", "char/data/character/r", "char/data/character/s", "char/data/character/t", "char/data/character/u", "char/data/character/v", "char/data/character/w", "char/data/character/x", "char/data/character/y", "char/data/character/z", "char/data/character/ua", "char/data/character/ub", "char/data/character/uc", "char/data/character/ud", "char/data/character/ue", "char/data/character/uf", "char/data/character/ug", "char/data/character/uh", "char/data/character/ui", "char/data/character/uj", "char/data/character/uk", "char/data/character/ul", "char/data/character/um", "char/data/character/un", "char/data/character/uo", "char/data/character/up", "char/data/character/uq", "char/data/character/ur", "char/data/character/us", "char/data/character/ut", "char/data/character/uu", "char/data/character/uv", "char/data/character/uw", "char/data/character/ux", "char/data/character/uy", "char/data/character/uz", "char/data/symbol/base/l-parentheses", "char/data/symbol/base/r-parentheses", "char/data/symbol/base/negative", "char/data/symbol/relational/eq", "char/data/symbol/base/positive", "char/data/symbol/base/vertical", "char/data/symbol/base/slash", "char/data/symbol/base/exclamation", "char/data/symbol/base/l-brackets", "char/data/symbol/base/r-brackets", "char/data/symbol/base/colon", "char/data/symbol/base/quotation", "char/data/symbol/relational/lt", "char/data/symbol/relational/gt", "char/data/symbol/base/point", "char/data/symbol/base/l-braces", "char/data/symbol/base/r-braces", "char/data/symbol/base/comma", "char/data/symbol/base/times", "char/data/symbol/base/div", "char/data/symbol/base/pm", "char/data/symbol/base/mp", "char/data/symbol/base/ast", "char/data/symbol/base/cdot", "char/data/symbol/base/cdots", "char/data/symbol/base/ddots", "char/data/symbol/base/ldots", "char/data/symbol/base/vdots", "char/data/symbol/base/wedge", "char/data/symbol/base/vee", "char/data/symbol/base/mid", "char/data/symbol/relational/approx", "char/data/symbol/relational/equiv", "char/data/symbol/relational/geq", "char/data/symbol/relational/gg", "char/data/symbol/relational/leq", "char/data/symbol/relational/ll", "char/data/symbol/relational/sim", "char/data/symbol/relational/simeq", "char/data/symbol/set/cap", "char/data/symbol/set/cup", "char/data/symbol/set/in", "char/data/symbol/set/ni", "char/data/symbol/set/sqcap", "char/data/symbol/set/sqcup", "char/data/symbol/set/sqsubset", "char/data/symbol/set/sqsubseteq", "char/data/symbol/set/sqsupset", "char/data/symbol/set/sqsupseteq", "char/data/symbol/set/subset", "char/data/symbol/set/subseteq", "char/data/symbol/set/supset", "char/data/symbol/set/supseteq", "char/data/symbol/not/ncong", "char/data/symbol/not/neq", "char/data/symbol/not/nequiv", "char/data/symbol/not/nge", "char/data/symbol/not/ngt", "char/data/symbol/not/nlt", "char/data/symbol/not/nle", "char/data/symbol/not/nsim", "char/data/symbol/not/nsubseteq", "char/data/symbol/not/nsupseteq", "char/data/symbol/not/nin", "char/data/symbol/base/infty", "char/data/symbol/base/to", "char/data/greek/alpha", "char/data/greek/beta", "char/data/greek/gamma", "char/data/greek/delta", "char/data/greek/epsilon", "char/data/greek/varepsilon", "char/data/greek/zeta", "char/data/greek/eta", "char/data/greek/theta", "char/data/greek/iota", "char/data/greek/kappa", "char/data/greek/lambda", "char/data/greek/mu", "char/data/greek/nu", "char/data/greek/xi", "char/data/greek/pi", "char/data/greek/rho", "char/data/greek/sigma", "char/data/greek/tau", "char/data/greek/upsilon", "char/data/greek/phi", "char/data/greek/varphi", "char/data/greek/chi", "char/data/greek/psi", "char/data/greek/omega", "char/data/roman/ua", "char/data/roman/ub", "char/data/greek/u-gamma", "char/data/greek/u-delta", "char/data/roman/ue", "char/data/roman/uz", "char/data/roman/uh", "char/data/greek/u-theta", "char/data/roman/ui", "char/data/roman/uk", "char/data/greek/u-lambda", "char/data/roman/um", "char/data/roman/un", "char/data/greek/u-xi", "char/data/roman/uo", "char/data/greek/u-pi", "char/data/roman/up", "char/data/greek/u-sigma", "char/data/roman/ut", "char/data/greek/u-upsilon", "char/data/greek/u-phi", "char/data/roman/ux", "char/data/greek/u-psi", "char/data/greek/u-omega", "char/data/roman/a", "char/data/roman/b", "char/data/roman/c", "char/data/roman/d", "char/data/roman/e", "char/data/roman/f", "char/data/roman/g", "char/data/roman/h", "char/data/roman/i", "char/data/roman/j", "char/data/roman/k", "char/data/roman/l", "char/data/roman/m", "char/data/roman/n", "char/data/roman/o", "char/data/roman/p", "char/data/roman/q", "char/data/roman/r", "char/data/roman/s", "char/data/roman/t", "char/data/roman/u", "char/data/roman/v", "char/data/roman/w", "char/data/roman/x", "char/data/roman/y", "char/data/roman/z", "char/data/roman/uc", "char/data/roman/ud", "char/data/roman/uf", "char/data/roman/ug", "char/data/roman/uj", "char/data/roman/ul", "char/data/roman/uq", "char/data/roman/ur", "char/data/roman/us", "char/data/roman/uu", "char/data/roman/uv", "char/data/roman/uw", "char/data/roman/uy", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, module) {
    var kity = require("kity"), CHAR_DATA = require("char/data");
    return kity.createClass("SubtractionOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            var opData = CHAR_DATA.std["-"], opShape = null;
            this.callBase("Subtraction");
            opShape = new kity.Path(opData.path).fill("black");
            opShape.translate(opData.offset.x, opData.offset.y);
            // 绘制符号图形
            this.addOperatorShape(opShape);
        }
    });
});
/**
 * 上下结合二元操作符
 * @abstract
 */
define("operator/binary-opr/up-down", [ "kity", "operator/binary", "operator/operator" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("UpDownOperator", {
        base: require("operator/binary"),
        applyOperand: function(upOperand, downOperand) {
            throw new Error("applyOperand is abstract");
        }
    });
});
/**
 * 二元操作符抽象类
 * @abstract
 */
define("operator/binary", [ "kity", "operator/operator", "def/gtype", "signgroup" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("BinaryOperator", {
        base: require("operator/operator"),
        setParentExpression: function(exp) {
            this.callBase(exp);
        }
    });
});
/**
 * 小括号操作符：()
 */
define("operator/brackets", [ "kity", "char/data", "char/data/number/0", "char/data/number/1", "char/data/number/2", "char/data/number/3", "char/data/number/4", "char/data/number/5", "char/data/number/6", "char/data/number/7", "char/data/number/8", "char/data/number/9", "char/data/character/a", "char/data/character/b", "char/data/character/c", "char/data/character/d", "char/data/character/e", "char/data/character/f", "char/data/character/g", "char/data/character/h", "char/data/character/i", "char/data/character/j", "char/data/character/k", "char/data/character/l", "char/data/character/m", "char/data/character/n", "char/data/character/o", "char/data/character/p", "char/data/character/q", "char/data/character/r", "char/data/character/s", "char/data/character/t", "char/data/character/u", "char/data/character/v", "char/data/character/w", "char/data/character/x", "char/data/character/y", "char/data/character/z", "char/data/character/ua", "char/data/character/ub", "char/data/character/uc", "char/data/character/ud", "char/data/character/ue", "char/data/character/uf", "char/data/character/ug", "char/data/character/uh", "char/data/character/ui", "char/data/character/uj", "char/data/character/uk", "char/data/character/ul", "char/data/character/um", "char/data/character/un", "char/data/character/uo", "char/data/character/up", "char/data/character/uq", "char/data/character/ur", "char/data/character/us", "char/data/character/ut", "char/data/character/uu", "char/data/character/uv", "char/data/character/uw", "char/data/character/ux", "char/data/character/uy", "char/data/character/uz", "char/data/symbol/base/l-parentheses", "char/data/symbol/base/r-parentheses", "char/data/symbol/base/negative", "char/data/symbol/relational/eq", "char/data/symbol/base/positive", "char/data/symbol/base/vertical", "char/data/symbol/base/slash", "char/data/symbol/base/exclamation", "char/data/symbol/base/l-brackets", "char/data/symbol/base/r-brackets", "char/data/symbol/base/colon", "char/data/symbol/base/quotation", "char/data/symbol/relational/lt", "char/data/symbol/relational/gt", "char/data/symbol/base/point", "char/data/symbol/base/l-braces", "char/data/symbol/base/r-braces", "char/data/symbol/base/comma", "char/data/symbol/base/times", "char/data/symbol/base/div", "char/data/symbol/base/pm", "char/data/symbol/base/mp", "char/data/symbol/base/ast", "char/data/symbol/base/cdot", "char/data/symbol/base/cdots", "char/data/symbol/base/ddots", "char/data/symbol/base/ldots", "char/data/symbol/base/vdots", "char/data/symbol/base/wedge", "char/data/symbol/base/vee", "char/data/symbol/base/mid", "char/data/symbol/relational/approx", "char/data/symbol/relational/equiv", "char/data/symbol/relational/geq", "char/data/symbol/relational/gg", "char/data/symbol/relational/leq", "char/data/symbol/relational/ll", "char/data/symbol/relational/sim", "char/data/symbol/relational/simeq", "char/data/symbol/set/cap", "char/data/symbol/set/cup", "char/data/symbol/set/in", "char/data/symbol/set/ni", "char/data/symbol/set/sqcap", "char/data/symbol/set/sqcup", "char/data/symbol/set/sqsubset", "char/data/symbol/set/sqsubseteq", "char/data/symbol/set/sqsupset", "char/data/symbol/set/sqsupseteq", "char/data/symbol/set/subset", "char/data/symbol/set/subseteq", "char/data/symbol/set/supset", "char/data/symbol/set/supseteq", "char/data/symbol/not/ncong", "char/data/symbol/not/neq", "char/data/symbol/not/nequiv", "char/data/symbol/not/nge", "char/data/symbol/not/ngt", "char/data/symbol/not/nlt", "char/data/symbol/not/nle", "char/data/symbol/not/nsim", "char/data/symbol/not/nsubseteq", "char/data/symbol/not/nsupseteq", "char/data/symbol/not/nin", "char/data/symbol/base/infty", "char/data/symbol/base/to", "char/data/greek/alpha", "char/data/greek/beta", "char/data/greek/gamma", "char/data/greek/delta", "char/data/greek/epsilon", "char/data/greek/varepsilon", "char/data/greek/zeta", "char/data/greek/eta", "char/data/greek/theta", "char/data/greek/iota", "char/data/greek/kappa", "char/data/greek/lambda", "char/data/greek/mu", "char/data/greek/nu", "char/data/greek/xi", "char/data/greek/pi", "char/data/greek/rho", "char/data/greek/sigma", "char/data/greek/tau", "char/data/greek/upsilon", "char/data/greek/phi", "char/data/greek/varphi", "char/data/greek/chi", "char/data/greek/psi", "char/data/greek/omega", "char/data/roman/ua", "char/data/roman/ub", "char/data/greek/u-gamma", "char/data/greek/u-delta", "char/data/roman/ue", "char/data/roman/uz", "char/data/roman/uh", "char/data/greek/u-theta", "char/data/roman/ui", "char/data/roman/uk", "char/data/greek/u-lambda", "char/data/roman/um", "char/data/roman/un", "char/data/greek/u-xi", "char/data/roman/uo", "char/data/greek/u-pi", "char/data/roman/up", "char/data/greek/u-sigma", "char/data/roman/ut", "char/data/greek/u-upsilon", "char/data/greek/u-phi", "char/data/roman/ux", "char/data/greek/u-psi", "char/data/greek/u-omega", "char/data/roman/a", "char/data/roman/b", "char/data/roman/c", "char/data/roman/d", "char/data/roman/e", "char/data/roman/f", "char/data/roman/g", "char/data/roman/h", "char/data/roman/i", "char/data/roman/j", "char/data/roman/k", "char/data/roman/l", "char/data/roman/m", "char/data/roman/n", "char/data/roman/o", "char/data/roman/p", "char/data/roman/q", "char/data/roman/r", "char/data/roman/s", "char/data/roman/t", "char/data/roman/u", "char/data/roman/v", "char/data/roman/w", "char/data/roman/x", "char/data/roman/y", "char/data/roman/z", "char/data/roman/uc", "char/data/roman/ud", "char/data/roman/uf", "char/data/roman/ug", "char/data/roman/uj", "char/data/roman/ul", "char/data/roman/uq", "char/data/roman/ur", "char/data/roman/us", "char/data/roman/uu", "char/data/roman/uv", "char/data/roman/uw", "char/data/roman/uy", "operator/operator", "def/gtype", "signgroup" ], function(require, exports, modules) {
    var kity = require("kity"), SYMBOL_DATA = require("char/data");
    return kity.createClass("BracketsOperator", {
        base: require("operator/operator"),
        constructor: function() {
            this.callBase("Brackets");
        },
        applyOperand: function(exp) {
            generate.call(this, exp);
        }
    });
    function generate(exp) {
        var left = this.getParentExpression().getLeftSymbol(), right = this.getParentExpression().getRightSymbol(), leftPath = SYMBOL_DATA.std[left].path, rightPath = SYMBOL_DATA.std[right].path, group = new kity.Group(), leftOp = new kity.Path(leftPath).fill("black"), rightOp = new kity.Path(rightPath).fill("black"), expSpaceSize = exp.getRenderBox(), leftOpSize = null, rightOpSize = null, leftZoom = 1, rightZoom = 1, // 左右空间大小
        SPACE = 2, offset = 0;
        this.addOperatorShape(group.addShape(leftOp).addShape(rightOp));
        leftOpSize = leftOp.getRenderBox();
        rightOpSize = rightOp.getRenderBox();
        leftZoom = expSpaceSize.height ? expSpaceSize.height / leftOpSize.height : 1;
        rightZoom = expSpaceSize.height ? expSpaceSize.height / rightOpSize.height : 1;
        if (leftZoom > 1) {
            leftOp.setAnchor(0, 0).scale(1 + (leftZoom - 1) / 2, leftZoom);
        }
        if (rightZoom > 1) {
            rightOp.setAnchor(0, 0).scale(1 + (rightZoom - 1) / 2, rightZoom);
        }
        // 重新获取大小
        leftOpSize = leftOp.getRenderBox();
        rightOpSize = rightOp.getRenderBox();
        offset += SPACE;
        leftOp.translate(offset, 0);
        offset += SPACE + leftOpSize.width;
        exp.translate(offset, 0);
        offset += SPACE + expSpaceSize.width;
        rightOp.translate(offset, 0);
    }
});
/**
 * 组合操作符
 * 操作多个表达式组合在一起
 */
define("operator/combination", [ "kity", "operator/operator", "def/gtype", "signgroup" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("CombinationOperator", {
        base: require("operator/operator"),
        constructor: function() {
            this.callBase("Combination");
        },
        applyOperand: function() {
            // 偏移量
            var offset = 0, // 操作数
            operands = arguments, // 操作对象最大高度
            maxHeight = 0, cached = [];
            kity.Utils.each(operands, function(operand) {
                var box = operand.getRenderBox();
                cached.push(box);
                maxHeight = Math.max(box.height, maxHeight);
            });
            kity.Utils.each(operands, function(operand, index) {
                var box = cached[index];
                operand.translate(offset - box.x, (maxHeight - (box.y + box.height)) / 2);
                offset += box.width;
            });
        }
    });
});
/**
 * 函数操作符
 */
define("operator/func", [ "kity", "char/roman", "char/char", "signgroup", "operator/operator", "def/gtype" ], function(require, exports, modules) {
    var kity = require("kity"), RomanText = require("char/roman");
    return kity.createClass("FunctionOperator", {
        base: require("operator/operator"),
        constructor: function(funcName) {
            this.callBase("Function: " + funcName);
            this.funcName = funcName;
        },
        /*
         * 积分操作符应用操作数
         * @param integrand 被积函数
         * @param supOperand 上限
         * @param subOperand 下限
         */
        applyOperand: function(funcExp, supOperand, subOperand) {
            generateOperator.call(this);
            adjustmentPosition.call(this, this.operatorShape, funcExp, supOperand, subOperand);
        }
    });
    /* 返回操作符对象 */
    function generateOperator() {
        var textShape = new RomanText(this.funcName);
        this.addOperatorShape(textShape);
        textShape.addedCall();
        return this.operatorShape;
    }
    function adjustmentPosition(operatorShape, funcExp, supOperand, subOperand) {
        supOperand.setAnchor(0, 0).scale(.7);
        subOperand.setAnchor(0, 0).scale(.7);
        var opBox = operatorShape.getRenderBox(), supBox = supOperand.getRenderBox(), subBox = subOperand.getRenderBox(), expBox = funcExp.getRenderBox(), maxScriptHeight = Math.max(supBox.height, subBox.height), maxWidth = Math.max(opBox.width, subBox.width, supBox.width);
        supOperand.translate((maxWidth - supBox.width) / 2, maxScriptHeight - supBox.height);
        operatorShape.translate((maxWidth - opBox.width) / 2, maxScriptHeight);
        subOperand.translate((maxWidth - subBox.width) / 2, maxScriptHeight + opBox.height);
        funcExp.translate(maxWidth + 5, (maxScriptHeight * 2 + opBox.height - expBox.height) / 2);
    }
});
/**
 * 积分操作符：∫
 */
define("operator/integration", [ "kity", "operator/scriptable-func", "def/script-type", "operator/operator" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("IntegrationOperator", {
        base: require("operator/scriptable-func"),
        constructor: function(type) {
            this.callBase("Integration");
            // 默认是普通单重积分
            this.opType = type || 1;
        },
        setType: function(type) {
            this.opType = type | 0;
        },
        // 重置类型
        resetType: function() {
            this.opType = 1;
        },
        getOperatorShape: function() {
            var pathData = "M1.318,48.226c0,0,0.044,0.066,0.134,0.134c0.292,0.313,0.626,0.447,1.006,0.447c0.246,0.022,0.358-0.044,0.604-0.268   c0.782-0.782,1.497-2.838,2.324-6.727c0.514-2.369,0.938-4.693,1.586-8.448C8.559,24.068,9.9,17.878,11.978,9.52   c0.917-3.553,1.922-7.576,3.866-8.983C16.247,0.246,16.739,0,17.274,0c1.564,0,2.503,1.162,2.592,2.57   c0,0.827-0.424,1.386-1.273,1.386c-0.671,0-1.229-0.514-1.229-1.251c0-0.805,0.514-1.095,1.185-1.274   c0.022,0-0.291-0.29-0.425-0.379c-0.201-0.134-0.514-0.224-0.737-0.224c-0.067,0-0.112,0-0.157,0.022   c-0.469,0.134-0.983,0.939-1.453,2.234c-0.537,1.475-0.961,3.174-1.631,6.548c-0.424,2.101-0.693,3.464-1.229,6.727   c-1.608,9.185-2.949,15.487-5.006,23.756c-0.514,2.034-0.849,3.24-1.207,4.335c-0.559,1.698-1.162,2.95-1.811,3.799   c-0.514,0.715-1.385,1.408-2.436,1.408c-1.363,0-2.391-1.185-2.458-2.592c0-0.804,0.447-1.363,1.273-1.363   c0.671,0,1.229,0.514,1.229,1.251C2.503,47.757,1.989,48.047,1.318,48.226z", group = new kity.Group(), opShape = new kity.Path(pathData).fill("black"), tmpShape = null;
            group.addShape(opShape);
            for (var i = 1; i < this.opType; i++) {
                tmpShape = new kity.Use(opShape).translate(opShape.getWidth() / 2 * i, 0);
                group.addShape(tmpShape);
            }
            tmpShape = null;
            group.scale(1.6, 1.6);
            return group;
        },
        onOperatorShapeAdded: function() {
            debugger;
        }
    });
});
/**
 * 操作符抽象类
 * @abstract
 */
define("operator/operator", [ "kity", "def/gtype", "signgroup" ], function(require, exports, modules) {
    var kity = require("kity"), GTYPE = require("def/gtype");
    return kity.createClass("Operator", {
        base: require("signgroup"),
        constructor: function(operatorName) {
            this.callBase();
            this.type = GTYPE.OP;
            // 该操作符所属的表达式
            this.parentExpression = null;
            // 操作符名称
            this.operatorName = operatorName;
            // 操作符图形
            this.operatorShape = new kity.Group();
            this.addShape(this.operatorShape);
        },
        applyOperand: function() {
            throw new Error("applyOperand is abstract");
        },
        setParentExpression: function(exp) {
            this.parentExpression = exp;
        },
        getParentExpression: function() {
            return this.parentExpression;
        },
        clearParentExpression: function() {
            this.parentExpression = null;
        },
        // 提供给具体实现类附加其绘制的操作符图形的接口
        addOperatorShape: function(shpae) {
            return this.operatorShape.addShape(shpae);
        },
        getOperatorShape: function() {
            return this.operatorShape;
        }
    });
});
/**
 * 上下标操作符
 */
define("operator/script", [ "kity", "operator/operator", "def/gtype", "signgroup" ], function(require, exports, module) {
    var kity = require("kity");
    return kity.createClass("ScriptOperator", {
        base: require("operator/operator"),
        constructor: function(operatorName) {
            this.callBase(operatorName || "Script");
        },
        applyOperand: function(operand, sup, sub) {
            sup.setAnchor(0, 0).scale(.66);
            sub.setAnchor(0, 0).scale(.66);
            var operandBox = operand.getRenderBox();
            // 默认字符高度
            operandBox.height = operandBox.height || 50;
            // 基础空间大小
            var supBox = sup.getRenderBox(), subBox = sub.getRenderBox(), maxOffset = Math.max(supBox.height, subBox.height), vOffset = maxOffset - operandBox.height / 2, space = {
                width: operandBox.width + Math.max(supBox.width, subBox.width),
                height: 0
            };
            // 水平方向调整
            sup.translate(operandBox.width, 0);
            sub.translate(operandBox.width, 0);
            if (vOffset > 0) {
                operand.translate(0, vOffset);
                // 上标偏移
                if (supBox.height <= operandBox.height / 2) {
                    sup.translate(0, vOffset);
                } else {
                    sup.translate(0, vOffset - (supBox.height - operandBox.height / 2));
                }
                // 下标偏移
                if (subBox.height <= operandBox.height / 2) {
                    sub.translate(0, vOffset + operandBox.height - subBox.height);
                } else {
                    sub.translate(0, vOffset + operandBox.height / 2);
                }
            } else if (vOffset < 0) {
                sub.translate(0, operandBox.height - subBox.height);
                vOffset = 0;
            }
            if (vOffset === 0) {
                space.height = operandBox.height;
            } else {
                space.height = vOffset * 2 + operandBox.height;
            }
            this.parentExpression.setBoxSize(space.width, space.height);
        }
    });
});
/**
 * 可附加上下表函数操作符号
 * @abstruct
 */
define("operator/scriptable-func", [ "kity", "def/script-type", "operator/operator", "def/gtype", "signgroup" ], function(require, exports, modules) {
    var kity = require("kity"), SCRIPT_TYPE = require("def/script-type");
    return kity.createClass("SummationOperator", {
        base: require("operator/operator"),
        constructor: function(operatorName) {
            this.callBase(operatorName);
            this.shapOperator = null;
            this.shapeBox = null;
            this.addOperatorShape(this.generateOperator());
        },
        applyOperand: function(exp, sup, sub) {
            var operatorShape = this.getOperatorShape(), padding = 5, expBox = exp.getRenderBox(), space = this.parentExpression.getSpace(), offset = {
                x: space.width + 5,
                y: space.height - expBox.height
            };
            // 水平偏移
            exp.translate(offset.x, 0);
            if (offset.y > 0) {
                exp.translate(0, offset.y / 2);
            } else {
                operatorShape.translate(0, -offset.y / 2);
            }
            // 整体偏移出padding位置
            this.parentExpression.translateElement(padding, padding);
            // 更新box的大小
            space.width = space.width + 5 + padding * 2 + expBox.width;
            space.height = Math.max(space.height, expBox.height) + padding * 2;
            this.parentExpression.setBoxSize(space.width, space.height);
        },
        getOperatorShape: function() {
            throw new Error("getOperatorShape is abstract function");
        },
        generateOperator: function() {
            var operator = this.getOperatorShape(), operatorGroup = new kity.Group(), box = new kity.Rect(0, 0, 0, 0);
            this.shapOperator = operator;
            this.shapeBox = box;
            operatorGroup.addShape(box);
            operatorGroup.addShape(operator);
            return operatorGroup;
        },
        addedCall: function() {
            var operatorBox = null, padding = 10;
            if (this.shapOperator.onOperatorShapeAdded) {
                this.shapOperator.onOperatorShapeAdded();
            }
            // follow类型边框缩小一半
            if (this.parentExpression.getScriptType() === SCRIPT_TYPE.FOLLOW) {
                padding /= 2;
            }
            operatorBox = this.shapOperator.getRenderBox();
            this.shapeBox.setSize(operatorBox.width + padding, operatorBox.height + padding * 2);
            this.shapOperator.translate(padding / 2, padding);
        }
    });
});
/**
 * 上下标操作符
 */
define("operator/scriptable", [ "kity", "def/script-type", "operator/operator", "def/gtype", "signgroup" ], function(require, exports, module) {
    var kity = require("kity"), SCRIPT_TYPE = require("def/script-type");
    return kity.createClass("ScriptableOperator", {
        base: require("operator/operator"),
        constructor: function() {
            this.callBase("Scriptable");
        },
        applyOperand: function(operand, sup, sub) {
            sup.setAnchor(0, 0).scale(.66);
            sub.setAnchor(0, 0).scale(.66);
            switch (this.parentExpression.getScriptType()) {
              case SCRIPT_TYPE.FOLLOW:
                applyFollowScript.apply(this, arguments);
                break;

              case SCRIPT_TYPE.SIDE:
                applySideScript.apply(this, arguments);
                break;
            }
        }
    });
    function applySideScript(operand, sup, sub) {
        sup.setAnchor(0, 0).scale(.66);
        sub.setAnchor(0, 0).scale(.66);
        var operandBox = operand.getRenderBox();
        // 默认字符高度
        operandBox.height = operandBox.height || 50;
        // 基础空间大小
        var supBox = sup.getRenderBox(), subBox = sub.getRenderBox(), // 下标所需偏移值
        subOffset = this.parentExpression.getSubOffset(), maxOffset = Math.max(supBox.height, subBox.height), vOffset = maxOffset - operandBox.height / 2, space = {
            width: operandBox.width + Math.max(supBox.width, subBox.width),
            height: 0
        };
        // 水平方向调整
        sup.translate(operandBox.width, 0);
        sub.translate(operandBox.width, 0);
        if (vOffset > 0) {
            operand.translate(0, vOffset);
            // 上标偏移
            if (supBox.height <= operandBox.height / 2) {
                sup.translate(0, vOffset);
            } else {
                sup.translate(0, vOffset - (supBox.height - operandBox.height / 2));
            }
            // 下标偏移
            if (subBox.height <= operandBox.height / 2) {
                sub.translate(0, vOffset + operandBox.height - subBox.height);
            } else {
                sub.translate(0, vOffset + operandBox.height / 2);
            }
        } else if (vOffset < 0) {
            sub.translate(0, operandBox.height - subBox.height);
            vOffset = 0;
        }
        if (subOffset !== 0) {
            sub.translate(subOffset, 0);
        }
        if (vOffset === 0) {
            space.height = operandBox.height;
        } else {
            space.height = vOffset * 2 + operandBox.height;
        }
        this.parentExpression.updateSpace(space);
    }
    function applyFollowScript(operand, sup, sub) {
        sup.setAnchor(0, 0).scale(.66);
        sub.setAnchor(0, 0).scale(.66);
        var operandBox = operand.getRenderBox();
        // 默认字符高度
        operandBox.height = operandBox.height || 50;
        // 基础空间大小
        var supBox = sup.getRenderBox(), subBox = sub.getRenderBox(), maxOffset = Math.max(supBox.height, subBox.height), maxWidth = Math.max(operandBox.width, supBox.width, subBox.width), space = {
            width: maxWidth,
            height: maxOffset * 2 + operandBox.height
        };
        // 竖直方向调整
        operand.translate(0, maxOffset);
        sup.translate(0, maxOffset - supBox.height);
        sub.translate(0, maxOffset + operandBox.height);
        // 水平方向调整
        if (operandBox.width < maxWidth) {
            operand.translate((maxWidth - operandBox.width) / 2, 0);
        }
        if (supBox.width < maxWidth) {
            sup.translate((maxWidth - supBox.width) / 2, 0);
        }
        if (subBox.width < maxWidth) {
            sub.translate((maxWidth - subBox.width) / 2, 0);
        }
        this.parentExpression.updateSpace(space);
    }
});
/**
 * 求和操作符：∑
 */
define("operator/summation", [ "kity", "operator/scriptable-func", "def/script-type", "operator/operator" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("SummationOperator", {
        base: require("operator/scriptable-func"),
        constructor: function() {
            this.callBase("Summation");
        },
        getOperatorShape: function() {
            var pathData = "M0.672,33.603c-0.432,0-0.648,0-0.648-0.264c0-0.024,0-0.144,0.24-0.432l12.433-14.569L0,0.96c0-0.264,0-0.72,0.024-0.792   C0.096,0.024,0.12,0,0.672,0h28.371l2.904,6.745h-0.6C30.531,4.8,28.898,3.72,28.298,3.336c-1.896-1.2-3.984-1.608-5.28-1.8   c-0.216-0.048-2.4-0.384-5.617-0.384H4.248l11.185,15.289c0.168,0.24,0.168,0.312,0.168,0.36c0,0.12-0.048,0.192-0.216,0.384   L3.168,31.515h14.474c4.608,0,6.96-0.624,7.464-0.744c2.76-0.72,5.305-2.352,6.241-4.848h0.6l-2.904,7.681H0.672z", opeatorShape = new kity.Path(pathData).fill("black");
            opeatorShape.setAnchor(0, 0);
            opeatorShape.scale(1.8, 1.8);
            return opeatorShape;
        }
    });
});
/**
 * Created by hn on 13-12-3.
 */
define("signgroup", [ "kity", "def/gtype" ], function(require, exports, module) {
    var kity = require("kity"), GTYPE = require("def/gtype");
    return kity.createClass("SignGroup", {
        base: kity.Group,
        constructor: function() {
            this.callBase();
            this.box = new kity.Rect(0, 0, 0, 0);
            this.type = GTYPE.UNKNOWN;
            this.addShape(this.box);
            this.zoom = 1;
        },
        setZoom: function(zoom) {
            this.zoom = zoom;
        },
        getZoom: function() {
            return this.zoom;
        },
        setBoxSize: function(w, h) {
            return this.box.setSize(w, h);
        },
        setBoxWidth: function(w) {
            return this.box.setWidth(w);
        },
        setBoxHeight: function(h) {
            return this.box.setHeight(h);
        },
        getType: function() {
            return this.type;
        },
        getBaseHeight: function() {
            return this.getHeight();
        },
        getBaseWidth: function() {
            return this.getWidth();
        },
        addedCall: function() {}
    });
});
/**
 * Created by hn on 14-4-4.
 */
define("string/installer", [ "kity" ], function(require) {
    var kity = require("kity");
    return kity.createClass("FontInstaller", {
        constructor: function(paper) {
            this.paper = paper;
        },
        mount: function(fontData) {
            var NS = "http://www.w3.org/2000/svg", chardata = fontData.data;
            var font = document.createElementNS(NS, "font");
            var attr = 'panose-1="2 0 5 3 0 0 0 0 0 0" ascent="800" descent="-200" x-height="441" cap-height="683" bbox="50 -960 2504 1003" underline-thickness="50" underline-position="-100" unicode-range="U+001D-9D47F"';
            font.setAttribute("horiz-adv-x", fontData.meta.x);
            var strArr = [ "<font-face " + attr + ' font-family="' + fontData.meta.fontFamily + '" units-per-em="' + fontData.meta["units-per-em"] + '"></font-face>' ];
            kity.Utils.each(chardata, function(char, key) {
                strArr.push('<glyph unicode="' + key + '"' + (char.x !== null ? ' horiz-adv-x="' + char.x + '"' : "") + ' d="' + char.d + '"/>');
            });
            strArr = strArr.join("");
            font.innerHTML = strArr;
            this.paper.addResource({
                node: font
            });
        }
    });
});
/**
 * Created by hn on 14-4-4.
 */
define("string/str", [ "kity" ], function(require) {
    var kity = require("kity");
    var Str = kity.createClass("Str", {
        constructor: function(name) {}
    });
});

/**
 * 模块暴露
 */

( function ( global ) {

    define( 'kf.start', function ( require ) {

        global.kf = {

            FontInstaller: require( "string/installer" ),

            // base
            Formula: require( "formula" ),
            Operator: require( "operator/operator" ),

            // expression
            Expression: require( "expression/expression" ),
            CompoundExpression: require( "expression/compound" ),
            TextExpression: require( "expression/text" ),
            RomanTextExpression: require( "expression/roman" ),
            EmptyExpression: require( "expression/empty" ),
            CombinationExpression: require( "expression/compound-exp/combination" ),
            FunctionExpression: require( "expression/compound-exp/func" ),

            FractionExpression: require( "expression/compound-exp/binary-exp/fraction" ),
            IntegrationExpression: require( "expression/compound-exp/integration" ),
            RadicalExpression: require( "expression/compound-exp/binary-exp/radical" ),
            ScriptExpression: require( "expression/compound-exp/script" ),
            SuperscriptExpression: require( "expression/compound-exp/binary-exp/superscript" ),
            SubscriptExpression: require( "expression/compound-exp/binary-exp/subscript" ),
            SubtractionExpression: require( "expression/compound-exp/binary-exp/subtraction" ),
            SummationExpression: require( "expression/compound-exp/summation" ),
            ParallelExpression: require( "expression/compound-exp/binary-exp/parallel"),

            // Brackets expressoin
            BracketsExpression: require( "expression/compound-exp/brackets" )

        };

    } );

    // build环境中才含有use
    try {
        use( 'kf.start' );
    } catch ( e ) {
    }

} )( this );
})();
