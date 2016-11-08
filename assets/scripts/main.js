jQuery(function() {
    jQuery.getFeed({
        url: 'http://feeds.feedburner.com/hasangok',
        success: function(feed) {            
            var html = '<ol>';            
            for(var i = 0; i < feed.items.length; i++) {            
                var item = feed.items[i];                
                html += '<li><span>' + (i + 1) + '.</span><p><b>'
                + '<a href="' + item.link + '" target="_blank">' + item.title + '</a>'
                + '</b><br />'
				+ item.description
				+ '</p>'
                + '</li>';                
            }			
			html += '</ol>';            
            jQuery('#rss-feeds').append(html);			
			jQuery('#loader').remove();
        }    
    });


});
