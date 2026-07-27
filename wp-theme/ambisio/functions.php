<?php
/**
 * Ambisio — funkcie témy
 */

/* Štýly z prototypu (rovnaké triedy = rovnaký vzhľad) */
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('ambisio-fonts', 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap', [], null);
    wp_enqueue_style('ambisio-base', get_template_directory_uri() . '/assets/css/ambisio.css', [], wp_get_theme()->get('Version'));
    wp_enqueue_script('ambisio-main', get_template_directory_uri() . '/assets/js/main.js', [], wp_get_theme()->get('Version'), true);
});

add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails');
    add_theme_support('editor-styles');
    add_editor_style('assets/css/ambisio.css');
});

/* Kategória blokových vzorov Ambisio */
add_action('init', function () {
    register_block_pattern_category('ambisio', ['label' => 'Ambisio bloky']);
});

/* Vlastné typy obsahu: Produkty a Projekty (v ostrej verzii presunúť do pluginu) */
add_action('init', function () {
    register_post_type('produkt', [
        'labels' => [
            'name' => 'Produkty',
            'singular_name' => 'Produkt',
            'add_new_item' => 'Pridať produkt',
            'edit_item' => 'Upraviť produkt',
        ],
        'public' => true,
        'has_archive' => true,
        'rewrite' => ['slug' => 'produkty'],
        'menu_icon' => 'dashicons-store',
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
    ]);
    register_post_type('projekt', [
        'labels' => [
            'name' => 'Projekty',
            'singular_name' => 'Projekt',
            'add_new_item' => 'Pridať projekt',
            'edit_item' => 'Upraviť projekt',
        ],
        'public' => true,
        'has_archive' => true,
        'rewrite' => ['slug' => 'projekty'],
        'menu_icon' => 'dashicons-hammer',
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
    ]);
    /* Tagy pre filtrovanie produktov (materiál, typ strechy…) */
    register_taxonomy('produkt-tag', ['produkt'], [
        'labels' => ['name' => 'Tagy produktov', 'singular_name' => 'Tag produktu'],
        'public' => true,
        'hierarchical' => false,
        'show_in_rest' => true,
        'rewrite' => ['slug' => 'produkt-tag'],
    ]);
});
