class MediaAttachment < ApplicationRecord
    has_many_attached :files

end
