const handleNotesWithdrawal = require('../../server/models/handleNotesWithdrawal')

describe("test for handing note withdraw", () => {
    it("should return null when value is equal 0", () => {
      const usedNotes = handleNotesWithdrawal(0)
      expect(usedNotes).toEqual({ usedNotes: [] });
    });

    it("should return correct notes value for 30", () => {
      const usedNotes = handleNotesWithdrawal(30)
      expect(usedNotes).toEqual({ usedNotes: [20,10] });
    });

    it("should return correct notes value for 80", () => {
      const usedNotes = handleNotesWithdrawal(80)
      expect(usedNotes).toEqual({ usedNotes: [50,20,10] });
    });

    it("should return error when there is no possibility of full withdrawal", () => {
      const usedNotes = handleNotesWithdrawal(125)
      expect(usedNotes).toEqual({ error: 'NoteUnavailableException' });
    });
    
    it("should return error when there is no possibility of full withdrawal", () => {
      const usedNotes = handleNotesWithdrawal(565)
      expect(usedNotes).toEqual({ error: 'NoteUnavailableException' });
    });

    it("should return error when argument isnt number", () => {
      const usedNotes = handleNotesWithdrawal('sdad')
      expect(usedNotes).toEqual({ error: 'InvalidArgumentException' });
    });

    it("should return error when argument isnt positive number", () => {
      const usedNotes = handleNotesWithdrawal(-100)
      expect(usedNotes).toEqual({ error: 'InvalidArgumentException' });
    });

    it("should return one note for 100", () => {
      const usedNotes = handleNotesWithdrawal(100)
      expect(usedNotes).toEqual({ usedNotes: [100] });
    });

    it("should handle decimal points", () => {
      const usedNotes = handleNotesWithdrawal(270.00)
      expect(usedNotes).toEqual({ usedNotes: [100, 100, 50, 20] });
    });

  });