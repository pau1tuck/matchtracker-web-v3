export const fixtures = [
    {
        season: "2023/24",
        week_number: 27,
        date: "2024-04-14",
        time: "15:00",
        match_status: "",
    },
];

/*
season = models.CharField(max_length=16)
    date = models.DateField()
    week_number = models.IntegerField()
    time = models.TimeField()
    timestamp = models.DateTimeField()
    league = models.ForeignKey(
        Competition, on_delete=models.CASCADE, related_name="competition"
    )
    competition = models.CharField(max_length=128)
    venue = models.foreign_key(
        Stadium, on_delete=models.CASCADE, related_name="stadium"
    )
    referee = models.CharField(max_length=128)
    home_team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name="team")
    away_team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name="team")
*/
