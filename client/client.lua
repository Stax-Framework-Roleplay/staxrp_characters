local UI = Stax.Singletons.UI

UI.RegisterCallback("ready", function(data, callback)
  UI.FireMigration("Config", "SET_CONFIGS", Stax.Config:Get())
  UI.FireMigration("Locale", "SET_LOCALES", Stax.Locale:Get())

  callback("ok")
end)