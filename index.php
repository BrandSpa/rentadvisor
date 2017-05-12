<?php get_header() ?>
<div id="main">
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <?php the_content() ?>
    <div class="row">
    <div style="background:red" class="col-xs-12
              col-sm-8
              col-md-6
              col-lg-4">
      <div class="box">Responsive</div>
  </div>
</div>


  <?php endwhile; else : ?>
    <h1> <?php echo '404' ?> </h1>
  <?php endif; ?>
</div>

<?php get_footer() ?>
