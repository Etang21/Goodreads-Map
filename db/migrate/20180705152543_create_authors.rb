class CreateAuthors < ActiveRecord::Migration[5.1]
  def change
    create_table :authors do |t|
      t.integer :author_id
      t.string :name
      t.string :hometown
      t.string :gender

      t.timestamps
    end
  end
end
