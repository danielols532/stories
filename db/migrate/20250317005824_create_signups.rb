class CreateSignups < ActiveRecord::Migration[8.0]
  def change
    create_table :signups do |t|
      t.string :firstname
      t.string :email
      t.timestamps
    end
  end
end
