<?php get_header() ?>
<div id="main">
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <?php the_content() ?>

    <div class="bs-headerslider" data-props="{}"></div>

  <?php endwhile; else : ?>
    <h1> <?php echo '404' ?> </h1>
  <?php endif; ?>
</div>

<?php get_footer() ?>
