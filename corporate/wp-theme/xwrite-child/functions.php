<?php

// 親テーマ(XWRITE)のCSSを読み込む
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('xwrite-parent-style', get_template_directory_uri() . '/style.css');
});

// LP・サービス一覧ページの時だけ、独自CSS/JSを読み込む
// このページは完全に独自デザインなのでXWRITE本体のCSSは不要かつ配色が競合するため、
// 優先度を遅くして(999)XWRITE側のenqueueが全部終わった後に、まとめて外す。
add_action('wp_enqueue_scripts', function () {
    if (is_page_template('page-lp.php') || is_page_template('page-service.php')) {
        // XWRITE本体が登録した全CSS/JSを一旦外す(配色・レイアウトの競合、JSによるメニュー等の
        // 動的な差し込みを避けるため)
        foreach (wp_styles()->queue as $handle) {
            wp_dequeue_style($handle);
        }
        foreach (wp_scripts()->queue as $handle) {
            wp_dequeue_script($handle);
        }

        wp_enqueue_style('cdc-lp-style', get_stylesheet_directory_uri() . '/assets/lp.css');
        wp_enqueue_script('cdc-lp-script', get_stylesheet_directory_uri() . '/assets/lp.js', [], null, true);
    }
}, 999);

// お問い合わせフォーム送信の受け口
// TODO: 通知先が未確定(HubSpot連携を予定)。決まり次第、このコールバック内で
// 実際の転送処理(HubSpot API呼び出し等)を実装すること。現状はバリデーションのみ行い、
// 送信自体は正常応答を返す(フォームの動作確認・フロント側のUX確認用)。
add_action('rest_api_init', function () {
    register_rest_route('cdc/v1', '/contact', [
        'methods'  => 'POST',
        'callback' => 'cdc_handle_contact_submission',
        'permission_callback' => '__return_true',
    ]);
});

function cdc_handle_contact_submission(WP_REST_Request $req)
{
    $company = sanitize_text_field($req['company'] ?? '');
    $name    = sanitize_text_field($req['name'] ?? '');
    $email   = sanitize_email($req['email'] ?? '');
    $message = sanitize_textarea_field($req['message'] ?? '');

    if (!$company || !$name || !$email || !$message) {
        return new WP_REST_Response(['ok' => false, 'error' => '必須項目が未入力です。'], 400);
    }

    // TODO: ここで実際の通知先(HubSpot等)へ転送する処理を実装する

    return new WP_REST_Response(['ok' => true], 200);
}
