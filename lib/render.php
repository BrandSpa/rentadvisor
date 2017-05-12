<?php
$dir_base =  str_replace('lib', '', __DIR__);
require $dir_base . 'vendor/autoload.php';

function bs_render($template_file, $data = []) {
	$dir_base =  str_replace('lib', '', __DIR__);
	$loader = new Twig_Loader_Filesystem($dir_base . 'templates');
	$twig = new Twig_Environment($loader, array(
			'cache' => $dir_base . 'storage/cache'
	));

	$render_shortcode = new Twig_SimpleFilter('render_shortcode', function ($string) {
    return do_shortcode($string);
	}, array('is_safe' => array('html')));
	
	$twig->addFilter($render_shortcode);

	$template = $twig->load($template_file);

	ob_start();
	echo $template->render($data);
	$content = ob_get_contents();
	ob_get_clean();
	return $content;
}
