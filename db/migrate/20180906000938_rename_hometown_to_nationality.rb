class RenameHometownToNationality < ActiveRecord::Migration[5.1]
  def change
    rename_column :authors, :hometown, :nationality
  end
end
