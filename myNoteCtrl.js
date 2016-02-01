app.controller("myNoteCtrl", function($scope) 
{
    $scope.message = "";
    $scope.left  = function() 
    {
    	if($scope.message.length<101)
    	return 100 - $scope.message.length;
    else
    	{
    		alert("text length is more then 100");
            return;
    	}
    };
    $scope.clear = function()
    {
    	$scope.message = "";
    };
    $scope.save  = function()
    {
    	alert("Note Saved");
	};
});