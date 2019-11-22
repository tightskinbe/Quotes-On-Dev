<?php
/**
 * Template part for displaying posts.
 *
 * @package QOD_Starter_Theme
 */

$source = get_post_meta( get_the_ID(), '_qod_quote_source', true );
$source_url = get_post_meta( get_the_ID(), '_qod_quote_source_url', true );
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	
	<div class="flex-icons">
	<!-- <i class="fas fa-quote-left left-icon left-icon"></i> -->
	<div class="entry-content">
		<?php the_content(); ?>
	</div><!-- .entry-content -->
	<!-- <i class="fas fa-quote-right right-icon"></i> -->
	</div>
	<div class="entry-meta">
		<?php the_title( '<h2 class="entry-title">&mdash; ', '</h2>' ); ?>

		<?php if ( $source && $source_url ) : ?>
			<span class="source">, <a href="<?php echo $source_url; ?>"><?php echo $source; ?></a></span>
		<?php elseif ( $source ) : ?>
			<span class="source">, <?php echo $source; ?></span>
		<?php else : ?>
			<span class="source"></span>
		<?php endif; ?>
	</div><!-- .entry-meta -->

</article><!-- #post-## -->

<?php if ( is_home() || is_single() ) : ?>
	<div class="btn-container">
	<button type="button" id="new-quote-button" class="btn">Show Me Another!</button>
	</div>
<?php endif; ?>