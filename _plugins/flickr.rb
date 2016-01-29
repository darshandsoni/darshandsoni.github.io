require 'liquid'
require 'fleakr'

Fleakr.api_key       = "349f2e154f66eac6d552d2fc74211c00"
Fleakr.shared_secret = "d611e66056b44292"
Fleakr.auth_token    = "72157664005092346-5728d65756e448c5"

CACHED_IMAGES = {}

module Flickr
    def flickr_image(url)
        "<img alt='#{image_object(url).title}' src='#{image_object(url).large.url}'>"
    end

    def flickr_medium_image(url)
        "<img alt='#{image_object(url).title}' src='#{image_object(url).medium.url}'>"
    end

    private

    def image_object(url)
        CACHED_IMAGES[url] ||= Fleakr.resource_from_url(url)
    end
end

Liquid::Template.register_filter(Flickr)
