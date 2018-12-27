ActiveAdmin.register User do
    permit_params :name, :email, :image, :user_id, image_attributes: [ :id, :file, :url, :alt_attribute, :_destroy, :image_id ]

    form do |f|
        f.inputs 'User' do
            f.input :name
            f.input :email
        end

        f.has_many :image do |s|
            s.input :file, as: :file
            s.input :alt_attribute
        end

        f.actions
      end

end
