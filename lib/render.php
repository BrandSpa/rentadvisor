<?php
$dir_base =  str_replace('lib', '', __DIR__);
require $dir_base . '/vendor/autoload.php';

function bs_render($template_file, $data) {
	$dir_base =  str_replace('lib', '', __DIR__);
	$loader = new Twig_Loader_Filesystem($dir_base . '/templates');
	$twig = new Twig_Environment($loader, array(
			'cache' => $dir_base . '/storage/cache'
	));

	$template = $twig->load($dir_base . '/' . $template_file);
	ob_start();
	$template->render($data);
	return ob_get_clean();
}
