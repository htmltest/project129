<?php

// A list of permitted file extensions
$allowed = array('png', 'jpg', 'gif','zip');

if(isset($_FILES['upl1']) && $_FILES['upl1']['error'] == 0){

	$extension = pathinfo($_FILES['upl1']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl1']['tmp_name'], 'uploads/'.$_FILES['upl1']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl2']) && $_FILES['upl2']['error'] == 0){

	$extension = pathinfo($_FILES['upl2']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl2']['tmp_name'], 'uploads/'.$_FILES['upl2']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl3']) && $_FILES['upl3']['error'] == 0){

	$extension = pathinfo($_FILES['upl3']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl3']['tmp_name'], 'uploads/'.$_FILES['upl3']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl4']) && $_FILES['upl4']['error'] == 0){

	$extension = pathinfo($_FILES['upl4']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl4']['tmp_name'], 'uploads/'.$_FILES['upl4']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl5']) && $_FILES['upl5']['error'] == 0){

	$extension = pathinfo($_FILES['upl5']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl5']['tmp_name'], 'uploads/'.$_FILES['upl5']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl6']) && $_FILES['upl6']['error'] == 0){

	$extension = pathinfo($_FILES['upl6']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl6']['tmp_name'], 'uploads/'.$_FILES['upl6']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl7']) && $_FILES['upl7']['error'] == 0){

	$extension = pathinfo($_FILES['upl7']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl7']['tmp_name'], 'uploads/'.$_FILES['upl7']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl8']) && $_FILES['upl8']['error'] == 0){

	$extension = pathinfo($_FILES['upl8']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl8']['tmp_name'], 'uploads/'.$_FILES['upl8']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl9']) && $_FILES['upl9']['error'] == 0){

	$extension = pathinfo($_FILES['upl9']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl9']['tmp_name'], 'uploads/'.$_FILES['upl9']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl10']) && $_FILES['upl10']['error'] == 0){

	$extension = pathinfo($_FILES['upl10']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl10']['tmp_name'], 'uploads/'.$_FILES['upl10']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl11']) && $_FILES['upl11']['error'] == 0){

	$extension = pathinfo($_FILES['upl11']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl11']['tmp_name'], 'uploads/'.$_FILES['upl11']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl12']) && $_FILES['upl12']['error'] == 0){

	$extension = pathinfo($_FILES['upl12']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl12']['tmp_name'], 'uploads/'.$_FILES['upl12']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl13']) && $_FILES['upl13']['error'] == 0){

	$extension = pathinfo($_FILES['upl13']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl13']['tmp_name'], 'uploads/'.$_FILES['upl13']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl14']) && $_FILES['upl14']['error'] == 0){

	$extension = pathinfo($_FILES['upl14']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl14']['tmp_name'], 'uploads/'.$_FILES['upl14']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl15']) && $_FILES['upl15']['error'] == 0){

	$extension = pathinfo($_FILES['upl15']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl15']['tmp_name'], 'uploads/'.$_FILES['upl15']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl16']) && $_FILES['upl16']['error'] == 0){

	$extension = pathinfo($_FILES['upl16']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl16']['tmp_name'], 'uploads/'.$_FILES['upl16']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl17']) && $_FILES['upl17']['error'] == 0){

	$extension = pathinfo($_FILES['upl17']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl17']['tmp_name'], 'uploads/'.$_FILES['upl17']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl18']) && $_FILES['upl18']['error'] == 0){

	$extension = pathinfo($_FILES['upl18']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl18']['tmp_name'], 'uploads/'.$_FILES['upl18']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

if(isset($_FILES['upl19']) && $_FILES['upl19']['error'] == 0){

	$extension = pathinfo($_FILES['upl19']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	if(move_uploaded_file($_FILES['upl19']['tmp_name'], 'uploads/'.$_FILES['upl19']['name'])){
		echo '{"status":"success"}';
		exit;
	}
}

echo '{"status":"error"}';
exit;