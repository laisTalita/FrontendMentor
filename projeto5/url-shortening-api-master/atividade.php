<?PHP 

header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

    $data = json_decode(file_get_contents('php://input'), true);
    $url  = urlencode(trim($data['url'] ?? '')) ;

    $api_url = "https://is.gd/create.php?format=simple&url=".$url;

    $shortUrl = file_get_contents($api_url);

   echo json_encode([
    'original' =>$url,
    'atual' => $shortUrl
   ]);

?>