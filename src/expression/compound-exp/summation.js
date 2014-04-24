/**
 * 求和表达式
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SCRIPT_TYPE = require( "def/script-type" ),
        SummationOperator = require( "operator/summation" );

    return kity.createClass( 'SummationExpression', {

        base: require( "expression/compound-exp/scriptable-func" ),

        /**
         * 构造求和表达式
         * @param exp 求和主题表达式
         * @param upOperand 上标
         * @param downOperand 下标
         */
        constructor: function ( exp, superscript, subscript ) {

            var operator = new SummationOperator();

            this.callBase( operator, exp, superscript, subscript );
            this.setFlag( "Summation" );
            this.setScriptType( SCRIPT_TYPE.FOLLOW );

            this.setExp( exp );
            this.setSuperscript( superscript );
            this.setSubscript( subscript );

            this.setScriptOperand( operator );
            this.setOperator( operator );

        },

        setExp: function ( exp ) {

            this.setOperand( exp, 0 );

        },

        setSuperscript: function ( sup ) {

            this.setOperand( sup, 1 );
            this.setScriptSup( this.getOperand( 1 ) );

        },

        setSubscript: function ( sub ) {

            this.setOperand( sub, 2 );
            this.setScriptSub( this.getOperand( 2 ) );

        }

    } );

} );
