<?php get_header() ?>
<div id="header" style="height: 120px; width: 100%; background: #fff"></div>

<div id="main" class="container-fluid">
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <?php the_content() ?>

  <div
      class="bs-headerslider"
      data-props='{"slides": [
        {
          "sectionLeft": {
            "bg": "#27E5FB",
            "col": "col-lg-5",
            "content": "<div><h1>Title</h1><p>Some paragraph</p></div>"
          },
          "sectionRight": {
            "bg": "#295AB7",
            "img": "<?php echo get_template_directory_uri() ?>/public/img/woman.png",
            "col": "col-lg-7"
          }
        },
         {
          "sectionLeft": {
            "bg": "#5D31B5",
            "col": "col-lg-4",
            "content": "<div><h1>Title</h1><p>Some paragraph</p></div>"
          },
          "sectionRight": {
            "bg": "#322365",
            "img": "<?php echo get_template_directory_uri() ?>/public/img/laptop.png",
            "col": "col-lg-8" 
          }
        }
      ]}'
    >
  </div>

  <?php endwhile; else : ?>
    <h1> <?php echo '404' ?> </h1>
  <?php endif; ?>
</div>

<div id="footer" style="height: 400px; width: 100%; background: purple"></div>
<div id="footer" style="height: 400px; width: 100%; background: red"></div>
<div id="footer" style="height: 400px; width: 100%; background: purple"></div>
<div id="footer" style="height: 400px; width: 100%; background: red"></div>
<div id="footer" style="height: 400px; width: 100%; background: purple"></div>
<div id="footer" style="height: 400px; width: 100%; background: red"></div>

<?php get_footer() ?>
