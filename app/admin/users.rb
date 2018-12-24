ActiveAdmin.register User do
    permit_params :name, :email, :image, :image_url, :image_alt_attribute

    form do |f|
        f.inputs 'User' do
            f.input :name
            f.input :email
            f.input :image, as: :file
            f.input :image_alt_attribute
        end
        f.actions
      end

end
