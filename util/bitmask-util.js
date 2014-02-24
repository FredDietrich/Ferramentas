
(function() {
	
	// Static
	var BitmaskUtil = {};

	/**
	 * Testa se o bit est� habilitado.
	 */
	BitmaskUtil.isEnabled = function( bitmask, bitPosition ) {
		var value = getBitValue( bitPosition );
		return ( bitmask & value ) === value;
	};

	/**
	 * Habilita um bit.
	 */
	BitmaskUtil.enable = function( bitmask, bitPosition ) {
		var value = getBitValue( bitPosition );
		return bitmask | value;
	};

	/**
	 * Desabilita um bit.
	 */
	BitmaskUtil.disable = function( bitmask, bitPosition ) {
		var value = getBitValue( bitPosition );
		
		if ( BitmaskUtil.isEnabled( bitmask, bitPosition ) ) {
			return bitmask ^ value;
		} else {
			return bitmask;
		}
	};

	/**
	 * Habilita/desabilita um bit.
	 */
	BitmaskUtil.toggle = function( bitmask, bitPosition, enable ) {
		if ( enable ) {
			return BitmaskUtil.enable( bitmask, bitPosition );
		} else {
			return BitmaskUtil.disable( bitmask, bitPosition );
		}
	};
	
	// Private
	
	/**
	 * Obt�m o valor do bit com base na posi��o desejada, ou seja, se pedir o bit 2,
	 * ir� retornar 4 ( 0000 0100 ), pois a contagem come�a em 0.
	 */
	function getBitValue( bitPosition ) {
		var val = 1,
			i = 0;
		
		if ( bitPosition < 0 ) {
			return -1;
		}
		
		for ( ; i < bitPosition; i++ ) {
			val += val;
		}
		
		return val;
	};
	
	// Expose
	window.BitmaskUtil = BitmaskUtil;
	
}());