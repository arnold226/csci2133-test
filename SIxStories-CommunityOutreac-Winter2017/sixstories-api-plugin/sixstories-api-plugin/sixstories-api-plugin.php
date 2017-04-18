<?php
/**
* Plugin Name: Six Stories Rest API 
* Plugin URI: Coming soon...
* Description: This plugin will allow the development of Custom Post Types , Taxonomies and Endpoints to properly store and query the stories information.
* Version: 1.0
* Author: Team Zoundi - Community Outreach - Dalhousie University
* Author URI: Coming soon...
* License: Coming soon...
*/


add_action( 'init', 'cptg_custom_post_types_new' );
function cptg_custom_post_types_new()
{
	
	/**
	*
	* character 1
	*
	*/
	
	$labels = array(
		'name' => 'character1',
		'singular_name' => 'character1',
		'menu_name' => 'character1',
		'name_admin_bar' => 'character1',
		'all_items' => 'All Posts',
		'add_new' => 'Add New',
		'add_new_item' => 'Add New Post',
		'edit_item' => 'Edit Post',
		'new_item' => 'New Post',
		'view_item' => 'View Post',
		'search_items' => 'Search Posts',
		'not_found' =>  'No posts found.',
		'not_found_in_trash' => 'No posts found in Trash.',
		'parent_item_colon' => 'Parent Page',
	);
	$args = array(
		'show_in_rest' => true,
		'rest_base' => 'character1',
		'labels' => $labels,
		'description' => 'Character 1 Story Line',
		'public' => true,
		'exclude_from_search' => false,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_nav_menus' => true,
		'show_in_menu' => true,
		'show_in_admin_bar' => true,
		'capability_type' => 'post',
		'has_archive' => false,
		'menu_position' => null,
		'menu_icon' => null,
		'hierarchical' => true,
		'rewrite' => array( 'slug' => 'character1','with_front' => true,'feeds' => false,'pages' => true ),
		'query_var' => true,
		'can_export' => true,
		'supports' => array( 'title','editor','author','thumbnail','custom-fields', 'post-formats' ),
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	);
	
	register_post_type( 'character1', $args );
	
	
	/**
	*
	* character 2
	*
	*/
	
	$labels = array(
		'name' => 'character2',
		'singular_name' => 'character2',
		'menu_name' => 'character2',
		'name_admin_bar' => 'character2',
		'all_items' => 'All Posts',
		'add_new' => 'Add New',
		'add_new_item' => 'Add New Post',
		'edit_item' => 'Edit Post',
		'new_item' => 'New Post',
		'view_item' => 'View Post',
		'search_items' => 'Search Posts',
		'not_found' =>  'No posts found.',
		'not_found_in_trash' => 'No posts found in Trash.',
		'parent_item_colon' => 'Parent Page',
	);
	$args = array(
		'show_in_rest' => true,
		'rest_base' => 'character2',
		'labels' => $labels,
		'description' => 'Character 2 Story Line',
		'public' => true,
		'exclude_from_search' => false,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_nav_menus' => true,
		'show_in_menu' => true,
		'show_in_admin_bar' => true,
		'capability_type' => 'post',
		'has_archive' => false,
		'menu_position' => null,
		'menu_icon' => null,
		'hierarchical' => true,
		'rewrite' => array( 'slug' => 'character2','with_front' => true,'feeds' => false,'pages' => true ),
		'query_var' => true,
		'can_export' => true,
		'supports' => array( 'title','editor','author','thumbnail','custom-fields', 'post-formats' ),
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	);
	
	register_post_type( 'character2', $args );
	
	
	
	
	
	/**
	*
	* character 3
	*
	*/
	
	$labels = array(
		'name' => 'character3',
		'singular_name' => 'character3',
		'menu_name' => 'character3',
		'name_admin_bar' => 'character3',
		'all_items' => 'All Posts',
		'add_new' => 'Add New',
		'add_new_item' => 'Add New Post',
		'edit_item' => 'Edit Post',
		'new_item' => 'New Post',
		'view_item' => 'View Post',
		'search_items' => 'Search Posts',
		'not_found' =>  'No posts found.',
		'not_found_in_trash' => 'No posts found in Trash.',
		'parent_item_colon' => 'Parent Page',
	);
	$args = array(
		'show_in_rest' => true,
		'rest_base' => 'character3',
		'labels' => $labels,
		'description' => 'Character 3 Story Line',
		'public' => true,
		'exclude_from_search' => false,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_nav_menus' => true,
		'show_in_menu' => true,
		'show_in_admin_bar' => true,
		'capability_type' => 'post',
		'has_archive' => false,
		'menu_position' => null,
		'menu_icon' => null,
		'hierarchical' => true,
		'rewrite' => array( 'slug' => 'character3','with_front' => true,'feeds' => false,'pages' => true ),
		'query_var' => true,
		'can_export' => true,
		'supports' => array( 'title','editor','author','thumbnail','custom-fields', 'post-formats' ),
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	);
	
	register_post_type( 'character3', $args );
	
	
	
	
	
	/**
	*
	* character 4
	*
	*/
	
	$labels = array(
		'name' => 'character4',
		'singular_name' => 'character4',
		'menu_name' => 'character4',
		'name_admin_bar' => 'character4',
		'all_items' => 'All Posts',
		'add_new' => 'Add New',
		'add_new_item' => 'Add New Post',
		'edit_item' => 'Edit Post',
		'new_item' => 'New Post',
		'view_item' => 'View Post',
		'search_items' => 'Search Posts',
		'not_found' =>  'No posts found.',
		'not_found_in_trash' => 'No posts found in Trash.',
		'parent_item_colon' => 'Parent Page',
	);
	$args = array(
		'show_in_rest' => true,
		'rest_base' => 'character4',
		'labels' => $labels,
		'description' => 'Character 4 Story Line',
		'public' => true,
		'exclude_from_search' => false,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_nav_menus' => true,
		'show_in_menu' => true,
		'show_in_admin_bar' => true,
		'capability_type' => 'post',
		'has_archive' => false,
		'menu_position' => null,
		'menu_icon' => null,
		'hierarchical' => true,
		'rewrite' => array( 'slug' => 'character4','with_front' => true,'feeds' => false,'pages' => true ),
		'query_var' => true,
		'can_export' => true,
		'supports' => array( 'title','editor','author','thumbnail','custom-fields', 'post-formats' ),
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	);
	
	register_post_type( 'character4', $args );
	
	
	
	
	
	/**
	*
	* character 5
	*
	*/
	
	$labels = array(
		'name' => 'character5',
		'singular_name' => 'character5',
		'menu_name' => 'character5',
		'name_admin_bar' => 'character5',
		'all_items' => 'All Posts',
		'add_new' => 'Add New',
		'add_new_item' => 'Add New Post',
		'edit_item' => 'Edit Post',
		'new_item' => 'New Post',
		'view_item' => 'View Post',
		'search_items' => 'Search Posts',
		'not_found' =>  'No posts found.',
		'not_found_in_trash' => 'No posts found in Trash.',
		'parent_item_colon' => 'Parent Page',
	);
	$args = array(
		'show_in_rest' => true,
		'rest_base' => 'character5',
		'labels' => $labels,
		'description' => 'Character 5 Story Line',
		'public' => true,
		'exclude_from_search' => false,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_nav_menus' => true,
		'show_in_menu' => true,
		'show_in_admin_bar' => true,
		'capability_type' => 'post',
		'has_archive' => false,
		'menu_position' => null,
		'menu_icon' => null,
		'hierarchical' => true,
		'rewrite' => array( 'slug' => 'character5','with_front' => true,'feeds' => false,'pages' => true ),
		'query_var' => true,
		'can_export' => true,
		'supports' => array( 'title','editor','author','thumbnail','custom-fields', 'post-formats' ),
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	);
	
	register_post_type( 'character5', $args );
	
	
	
	
	
	/**
	*
	* character 6
	*
	*/
	
	$labels = array(
		'name' => 'character6',
		'singular_name' => 'character6',
		'menu_name' => 'character6',
		'name_admin_bar' => 'character6',
		'all_items' => 'All Posts',
		'add_new' => 'Add New',
		'add_new_item' => 'Add New Post',
		'edit_item' => 'Edit Post',
		'new_item' => 'New Post',
		'view_item' => 'View Post',
		'search_items' => 'Search Posts',
		'not_found' =>  'No posts found.',
		'not_found_in_trash' => 'No posts found in Trash.',
		'parent_item_colon' => 'Parent Page',
	);
	$args = array(
		'show_in_rest' => true,
		'rest_base' => 'character6',
		'labels' => $labels,
		'description' => 'Character 6 Story Line',
		'public' => true,
		'exclude_from_search' => false,
		'publicly_queryable' => true,
		'show_ui' => true,
		'show_in_nav_menus' => true,
		'show_in_menu' => true,
		'show_in_admin_bar' => true,
		'capability_type' => 'post',
		'has_archive' => false,
		'menu_position' => null,
		'menu_icon' => null,
		'hierarchical' => true,
		'rewrite' => array( 'slug' => 'character6','with_front' => true,'feeds' => false,'pages' => true ),
		'query_var' => true,
		'can_export' => true,
		'supports' => array( 'title','editor','author','thumbnail','custom-fields', 'post-formats' ),
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	);
	
	register_post_type( 'character6', $args );
	
	
	
	
}

add_action( 'after_switch_theme', 'cptg_rewrite_flush_new' );
function cptg_rewrite_flush_new()
{
	flush_rewrite_rules();
}


?>