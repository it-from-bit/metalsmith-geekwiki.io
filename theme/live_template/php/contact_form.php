<?php
/**
 * @package    Live
 * @subpackage Contact form
 * @since      1.0
 *
 * Script for receiving, validating and sending contact form.
 * Use $config variable to define email address for incoming contact forms.
 */

// Configuration
$config = file_exists('contact_form.config.php') ? require 'contact_form.config.php' : [
	'subject' => '[Live] Contact form', // contact form message's subject
	'email'   => 'contact@yourmail.com' // e-mail address for incoming contact forms
];

// Parsing POST data
foreach (['name', 'email', 'message'] as $field) {
	${$field} = isset($_POST[$field]) ? trim(strip_tags($_POST[$field])) : '';
}

// Data validation
if (!$name || !preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+$/i', $email) || !$message) {
	echo json_encode([
		'result'  => false,
		'message' => 'Fill the form'
	]);
	exit;
}

// Data preparing
$message .= "\r\n\r\n---\r\n{$name}\r\n{$email}";

// Send mail
$result = @mail(
	$config['email'],
	'=?UTF-8?B?'.base64_encode($config['subject']).'?=',
	$message,
	<<<"EOH"
From: {$name} <{$config['email']}>
Reply-to: {$email}
MIME-Version: 1.0
Content-type: text/plain; charset=UTF-8
EOH
);

echo json_encode([
	'result'  => $result,
	'message' => $result ? 'Message sent' : 'Error'
]);