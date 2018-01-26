'use strict';

module.exports = function($scope, GuideFactory){
    GuideFactory.getGuides().then(guideData => {
        $scope.guideList = guideData.data.guides;
    });
};