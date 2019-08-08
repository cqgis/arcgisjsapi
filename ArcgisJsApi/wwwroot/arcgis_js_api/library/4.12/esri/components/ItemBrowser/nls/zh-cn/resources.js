// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define({regions:"\u533a\u57df",header:{sectionTitles:{all:"ArcGIS Online",myContent:"\u6211\u7684\u5185\u5bb9",myFavorites:"\u6211\u7684\u6536\u85cf\u5939",myGroups:"\u6211\u7684\u7fa4\u7ec4",myOrganization:"\u6211\u7684\u7ec4\u7ec7",livingAtlas:"Living Atlas",subscription:"\u8ba2\u9605\u5185\u5bb9"},browse:"\u6d4f\u89c8",search:"\u641c\u7d22",filterFolders:"\u8fc7\u6ee4\u6587\u4ef6\u5939",allFolders:"\u6240\u6709\u6211\u7684\u5185\u5bb9",filterGroups:"\u8fc7\u6ee4\u7fa4\u7ec4",allGroups:"\u6240\u6709\u6211\u7684\u7fa4\u7ec4\u5185\u5bb9"},
resultCount:"\u9879\u76ee",searchPlaceholders:{generic:"\u8f93\u5165\u641c\u7d22\u8bcd"},filterChips:{mapArea:"\u5728\u5730\u56fe\u533a\u57df\u5185",type:"\u7c7b\u578b",dateModified:"\u4fee\u6539\u65e5\u671f",dateCreated:"\u521b\u5efa\u65e5\u671f",access:"\u5171\u4eab",group:"\u5206\u7ec4",folder:"\u6587\u4ef6\u5939",status:"\u72b6\u6001",clearAll:"\u5168\u90e8\u6e05\u9664",category:"\u7c7b\u522b",region:"\u533a\u57df",tagged:"\u5df2\u6807\u8bb0"},sortOptions:{sort:"\u6392\u5e8f",sortBy:"\u6309\u4ee5\u4e0b\u65b9\u5f0f\u6392\u5e8f\u5185\u5bb9\uff1a",
sortDir:"\u6392\u5e8f\uff1a",relevance:"\u76f8\u5173\u5ea6",title:"\u6807\u9898",owner:"\u6240\u6709\u8005",created:"\u521b\u5efa\u65e5\u671f",modified:"\u4fee\u6539\u65e5\u671f",numviews:"\u6d4f\u89c8\u6b21\u6570",avgrating:"\u8bc4\u7ea7",ascending:{relevance:"\u76f8\u5173\u6027\u7531\u6700\u4f4e\u5230\u6700\u9ad8",title:"\u6309\u5b57\u6bcd\u987a\u5e8f",owner:"\u6309\u5b57\u6bcd\u987a\u5e8f",created:"\u6700\u8fd1\u6700\u5c11",modified:"\u6700\u8fd1\u6700\u5c11",numviews:"\u6700\u5c11\u81f3\u6700\u591a",
avgrating:"\u8bc4\u7ea7\u4ece\u6700\u4f4e\u5230\u6700\u9ad8"},descending:{relevance:"\u76f8\u5173\u6027\u7531\u6700\u9ad8\u5230\u6700\u4f4e",title:"\u6309\u5b57\u6bcd\u9006\u5411\u987a\u5e8f",owner:"\u6309\u5b57\u6bcd\u9006\u5411\u987a\u5e8f",created:"\u6700\u8fd1",modified:"\u6700\u8fd1",numviews:"\u6700\u591a\u81f3\u6700\u5c11",avgrating:"\u8bc4\u7ea7\u4ece\u6700\u9ad8\u5230\u6700\u4f4e"}},itemDetails:{addToMap:"\u6dfb\u52a0\u81f3\u5730\u56fe",removeFromMap:"\u4ece\u5730\u56fe\u79fb\u9664",by:"\u6240\u6709\u8005",
lastModified:"\u66f4\u65b0\u65e5\u671f",noSnippet:"\u9879\u76ee\u7684\u7b80\u8981\u63cf\u8ff0\u4e0d\u53ef\u7528\u3002",details:"\u63cf\u8ff0",termsOfUse:"\u4f7f\u7528\u6761\u6b3e",attribution:"\u5236\u4f5c\u8005\u540d\u5355(\u5c5e\u6027)",noTermsOfUse:"\u5c1a\u672a\u63d0\u4f9b\u4efb\u4f55\u5173\u4e8e\u4f7f\u7528\u9879\u76ee\u5185\u5bb9\u7684\u7279\u6b8a\u7ea6\u675f\u6216\u9650\u5236\u3002",noAttribution:"\u65e0\u4efb\u4f55\u58f0\u660e\u3002",noDescription:"\u9879\u76ee\u7684\u8fdb\u4e00\u6b65\u63cf\u8ff0\u4e0d\u53ef\u7528\u3002",
views:"\u6d4f\u89c8\u6b21\u6570",created:"\u521b\u5efa\u65e5\u671f",sharedWith:"\u5171\u4eab\u8303\u56f4",shared:{"public":"\u6240\u6709\u4eba(\u516c\u5171)",org:"\u7ec4\u7ec7",shared:"\u9879\u76ee\u672a\u5171\u4eab\u3002","private":"\u9879\u76ee\u672a\u5171\u4eab\u3002"},viewUser:"\u67e5\u770b\u7528\u6237\u4e2a\u4eba\u8d44\u6599",viewOrg:"\u8bbf\u95ee\u7ec4\u7ec7",addToFavorites:"\u6dfb\u52a0\u5230\u6536\u85cf\u5939",removeFromFavorites:"\u4ece\u6536\u85cf\u5939\u4e2d\u79fb\u9664",isFavorite:"\u9879\u76ee\u5df2\u5728\u6536\u85cf\u5939\u4e2d",
notFavorite:"\u9879\u76ee\u672a\u5728\u6536\u85cf\u5939\u4e2d",managedBy:"\u7ba1\u7406\u4eba\uff1a"},results:{loadingItems:"\u6b63\u5728\u52a0\u8f7d\u9879\u76ee..",requestError:"\u8bf7\u6c42\u5b58\u5728\u9519\u8bef\u3002",tooManyGroups:"\u5bf9\u4e8e\u201c\u6211\u7684\u6240\u6709\u7fa4\u7ec4\u7684\u5185\u5bb9\u201d\uff0c\u7fa4\u7ec4\u8fc7\u591a\u3002 \u9009\u62e9\u4e00\u4e2a\u7fa4\u7ec4\u4ee5\u663e\u793a\u5176\u5185\u5bb9\u3002",noItemsFound:"\u6ca1\u6709\u7b26\u5408\u60a8\u6761\u4ef6\u7684\u9879\u76ee\u3002\u8bf7\u6e05\u9664\u4e00\u4e9b\u8fc7\u6ee4\u5668\u4ee5\u663e\u793a\u66f4\u591a\u9879\u76ee\u3002",
empty:"\u5728\u4e0a\u65b9\u8f93\u5165\u4e00\u4e9b\u672f\u8bed\u5f00\u59cb\u641c\u7d22\u3002"},search:"\u641c\u7d22",close:"\u5173\u95ed",filterPane:{filter:"\u8fc7\u6ee4\u5668",filters:"\u8fc7\u6ee4\u5668",mapArea:"\u4ec5\u663e\u793a\u5730\u56fe\u533a\u57df\u4e2d\u7684\u5185\u5bb9",orgGroups:"\u6211\u6240\u5728\u7ec4\u7ec7\u7684\u7fa4\u7ec4",categories:"\u7c7b\u522b",groupCategories:"\u5206\u7ec4\u7c7b\u522b"},viewDetails:"\u67e5\u770b\u9879\u76ee\u8be6\u7ec6\u4fe1\u606f",viewFullDetails:"\u67e5\u770b\u5b8c\u6574\u9879\u76ee\u8be6\u7ec6\u4fe1\u606f",
groupAddDisclaimer:"\u8bd5_Only showing items that can be added to the current group______________________________\u9a8c.",learnMore:"\u8bd5_Learn more_____________________\u9a8c",back:"\u8fd4\u56de",compact:"\u8868\u683c",compactView:"\u538b\u7f29\u89c6\u56fe",list:"\u5217\u8868",listView:"\u5217\u8868\u89c6\u56fe",showing:"\u663e\u793a",viewResults:"\u67e5\u770b\u7ed3\u679c"});