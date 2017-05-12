<?php

function foobar_func( $atts ){
	return bs_render('shortcodes/foo.html');
}

add_shortcode( 'foobar', 'foobar_func' );